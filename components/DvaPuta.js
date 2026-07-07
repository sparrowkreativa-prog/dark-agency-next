'use client';
import { useEffect, useRef, useState } from 'react';

/* ── World Map ───────────────────────────────────────────────── */
// Equirectangular projection zoomed to Atlantic: lon -100→+50, lat 0→72
const W = 960, H = 320;
const toX = lon => (lon + 100) / 150 * W;
const toY = lat => (72 - lat) / 72 * H;

// Catmull-Rom → cubic bezier smooth path from [lon,lat] array
function geoPath(coords, closed = true) {
  const pts = coords.map(([lo, la]) => [toX(lo), toY(la)]);
  if (pts.length < 2) return '';
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return closed ? d + 'Z' : d;
}

// Simplified but geographically accurate coastline coordinates [lon, lat]
const LANDS = [
  // Eastern North America – Atlantic & Gulf coast polygon
  [[-67.5,47],[-66,44.5],[-70,41.5],[-73.5,40.5],[-75.5,38],[-76,35],
   [-77.5,34],[-79.5,33.5],[-81,30],[-81,25.5],[-80,25],[-81,24.5],
   [-82,27],[-84,30],[-88,30],[-90,29.5],[-93,29],[-97,26],
   [-100,30],[-100,37],[-95,37],[-91,42],[-87,42.5],[-83,42],
   [-80,43],[-76,43.5],[-74,44],[-71,44],[-67.5,47]],
  // Canada – eastern interior + Hudson Bay coast
  [[-67.5,47],[-64,44],[-60,46],[-57,51],[-53,47],[-54,49],
   [-57,52],[-61,55],[-65,60],[-63,64],[-70,66],[-79,63],
   [-82,60],[-82,56],[-88,56],[-93,55],[-100,55],[-100,50],
   [-94,49],[-84,46],[-80,43],[-76,43.5],[-74,44],[-71,44],[-67.5,47]],
  // Greenland
  [[-44,60],[-42,61],[-38,66],[-30,70],[-22,76],[-18,77],
   [-20,73],[-24,68],[-32,62],[-40,59],[-46,58],[-44,60]],
  // Iceland
  [[-24,63.5],[-20,63],[-14,63.5],[-13,65.5],[-18,66],[-24,65],[-24,63.5]],
  // Great Britain
  [[-5.5,50],[-3,50],[-1,51],[0.5,51.5],[0.5,53],[-0.5,55],[-2,57],
   [-5,58.5],[-6,57.5],[-5,54],[-3,52],[-5,51],[-5.5,50]],
  // Ireland
  [[-10,51.5],[-8,51.5],[-6,52],[-6,54.5],[-8,55],[-10,54],[-10,51.5]],
  // Scandinavia (Norway+Sweden+Denmark+Finland simplified)
  [[8,55],[10,55],[12,56],[12,58],[5,58],[5,62],[10,62],[14,69],[18,70],
   [28,71],[30,70],[28,65],[25,62],[24,59],[22,58],[18,57.5],[12,56.5],[8,55]],
  // Iberian Peninsula
  [[-9,38.5],[-9.5,37],[-8,36],[-5,36],[-2,37],[0,39],[3,42],[1,43],
   [-2,44],[-4,44],[-8,42],[-9,38.5]],
  // France + Alps
  [[-2,44],[0,44],[3,43],[7,44],[8,47.5],[7,48],[5,49],[4,51],[2,51],
   [0,49],[-2,48],[-4,47],[-2,44]],
  // Italy
  [[7,44],[10,44],[12,44],[15,41],[18,40],[16,38],[15.5,37.5],[12.5,38],
   [10,40],[9,44],[7,44]],
  // Central & Eastern Europe (Germany, Austria, Balkans)
  [[8,47.5],[10,47],[14,46],[16,47],[18,47],[20,48],[22,48],[26,44],
   [22,42],[20,42],[18,43],[15,43],[12,44],[10,44],[8,47.5]],
  // North Africa
  [[-6,36],[-2,35],[2,33],[8,32],[12,31],[18,30],[24,30],[30,30],
   [35,30],[38,31],[42,34],[42,37],[38,37],[32,35],[25,35],
   [20,35],[14,36],[8,36],[3,37],[0,36],[-4,36],[-6,36]],
  // NE South America (just corner visible)
  [[-50,0],[-44,2],[-38,4],[-34,5],[-36,2],[-40,2],[-46,0],[-50,0]],
];

function WorldMap({ vis }) {
  // City screen positions
  const NY = { x: toX(-74),   y: toY(40.7), label: 'New York' };
  const MI = { x: toX(9.2),   y: toY(45.5), label: 'Milano' };
  const BG = { x: toX(20.5),  y: toY(44.8), label: 'Belgrade' };

  // Arc lengths for dash animation (approx)
  const arcNYMI = `M${NY.x},${NY.y} Q${(NY.x+MI.x)/2},${Math.min(NY.y,MI.y)-90} ${MI.x},${MI.y}`;
  const arcMIBG = `M${MI.x},${MI.y} Q${(MI.x+BG.x)/2},${Math.min(MI.y,BG.y)-30} ${BG.x},${BG.y}`;

  return (
    <div className="dp-map-wrap"
      style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s' }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="dp-map-svg" aria-hidden="true">
        <defs>
          <radialGradient id="dpGlow" cx="50%" cy="80%" r="55%">
            <stop offset="0%" stopColor="#911f39" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="dpArcG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#911f39" />
            <stop offset="100%" stopColor="#a9875c" />
          </linearGradient>
          <filter id="dpCityGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="dpClip">
            <rect x="0" y="0" width={W} height={H} rx="20"/>
          </clipPath>
        </defs>

        <g clipPath="url(#dpClip)">
          <rect width={W} height={H} fill="url(#dpGlow)" />

          {/* Grid */}
          {[10,20,30,40,50,60,70].map(la => (
            <line key={la} x1="0" y1={toY(la)} x2={W} y2={toY(la)}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          ))}
          {[-80,-60,-40,-20,0,20,40].map(lo => (
            <line key={lo} x1={toX(lo)} y1="0" x2={toX(lo)} y2={H}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          ))}

          {/* Continents */}
          {LANDS.map((coords, i) => (
            <path key={i} d={geoPath(coords)}
              fill="rgba(255,255,255,0.07)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.7"
              strokeLinejoin="round"/>
          ))}

          {/* Background ghost arc NY→BG */}
          <path d={`M${NY.x},${NY.y} Q${(NY.x+BG.x)/2},${Math.min(NY.y,BG.y)-110} ${BG.x},${BG.y}`}
            fill="none" stroke="rgba(169,135,92,0.12)" strokeWidth="1" strokeDasharray="5 8"/>

          {/* Animated arc NY → Milano */}
          <path d={arcNYMI} fill="none"
            stroke="url(#dpArcG)" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="1000" strokeDashoffset={vis ? 0 : 1000}
            style={{ transition: 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.9s' }}/>

          {/* Animated arc Milano → Belgrade */}
          <path d={arcMIBG} fill="none"
            stroke="#a9875c" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="120" strokeDashoffset={vis ? 0 : 120}
            style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1) 2.9s' }}/>

          {/* City dots */}
          {[
            { ...NY, color: '#911f39', pulse: 'rgba(145,31,57,0.4)' },
            { ...MI, color: '#a9875c', pulse: 'rgba(169,135,92,0.4)' },
            { ...BG, color: '#a9875c', pulse: 'rgba(169,135,92,0.4)' },
          ].map((city, i) => (
            <g key={city.label} filter="url(#dpCityGlow)">
              <circle cx={city.x} cy={city.y} r="14" fill="none"
                stroke={city.pulse} strokeWidth="1"
                style={{ animation: vis ? `dpPulse 2.5s ease-out ${i*0.5}s infinite` : 'none',
                         transformOrigin: `${city.x}px ${city.y}px` }}/>
              <circle cx={city.x} cy={city.y} r="6"
                fill="none" stroke={city.color} strokeWidth="1.5" strokeOpacity="0.7"/>
              <circle cx={city.x} cy={city.y} r="3" fill={city.color}/>
              <text x={city.x} y={city.y + 20} textAnchor="middle"
                fontSize="9.5" fontWeight="700" letterSpacing="0.10em"
                fill="rgba(255,255,255,0.75)">{city.label.toUpperCase()}</text>
            </g>
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes dpPulse {
          0%   { transform: scale(1); opacity: 0.9; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .dp-map-wrap {
          margin-top: 56px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .dp-map-svg { display: block; width: 100%; height: auto; }
      `}</style>
    </div>
  );
}

const STAR_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const SPROUT_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10"/>
    <path d="M10 20c5.5-2.5 8-6 8-6H2s3 6.5 8 6z"/>
    <path d="M14 13c0-4-3-7-7-7-1.93 0-3.68.78-4.95 2.05"/>
    <path d="M14 13c.67-4.33 3-7.33 7-8"/>
  </svg>
);

const CARDS = [
  {
    icon: STAR_ICON,
    badge: 'Već afirmisana',
    title: 'Već zarađuješ — mi to uvećavamo.',
    sub: 'Pre nego što bilo šta diramo, detaljno proučimo tvoju situaciju.',
    steps: [
      'Potpuna analiza tvojih trenutnih brojki i levaka',
      'Pročitamo 300+ tvojih ranijih chatova da vidimo kako su fanovi vođeni',
      'Pregledamo tvoj sadržaj na mrežama i pozicioniranje',
      'Zatim sve optimizujemo i skaliramo ono što već radi',
    ],
    featured: true,
  },
  {
    icon: SPROUT_ICON,
    badge: 'Kreće od nule',
    title: 'Nova si u svemu? Gradimo to s tobom.',
    sub: 'Nije potrebno iskustvo — sve postavimo i vodimo te korak po korak.',
    steps: [
      'Kreiramo tvoje profile i podešavamo naloge',
      'Učimo te kako da snimaš sadržaj koji prodaje',
      'Pokažemo ti tačno kako da koristiš naš CRM',
      'Zajedno mapiramo šta voliš (a šta ne), tvoj cilj i plan da ga dostigneš',
    ],
    featured: false,
  },
];

export default function DvaPuta() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="dp-section" ref={ref}>
      <div className="dp-container">

        {/* Header */}
        <div className="dp-header" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="chapter-label dp-chapter">Dva Puta</span>
          <h2 className="dp-title">
            <em className="dp-title-white">Već Afirmisana ili Krećeš od Nule,</em><br />
            <em className="dp-title-gold">Postoji Put za Tebe.</em>
          </h2>
          <p className="dp-sub">Od koje god tačke kreneš, plan je napravljen oko tebe.</p>
        </div>

        {/* Cards */}
        <div className="dp-grid">
          {CARDS.map((card, i) => (
            <div key={card.badge}
              className={`dp-card${card.featured ? ' dp-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.15 + i * 0.14}s, transform 0.7s ease ${0.15 + i * 0.14}s` }}>

              {/* Badge */}
              <span className={`dp-badge${card.featured ? ' dp-badge--featured' : ''}`}>
                <span className="dp-badge-icon">{card.icon}</span>
                {card.badge}
              </span>

              {/* Heading */}
              <h3 className="dp-card-title"><em>{card.title}</em></h3>
              <p className="dp-card-sub">{card.sub}</p>

              {/* Steps */}
              <ul className="dp-steps">
                {card.steps.map((step, idx) => (
                  <li key={idx} className="dp-step">
                    <span className={`dp-step-num${card.featured ? ' dp-step-num--featured' : ''}`}>{idx + 1}</span>
                    <span className="dp-step-text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* World map */}
        <WorldMap vis={vis} />

      </div>

      <style>{`
        .dp-section {
          background: #000;
          padding: 80px 0 96px;
        }
        .dp-container {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .dp-header { text-align: center; margin-bottom: 52px; }
        .dp-chapter {
          color: #911f39 !important;
          border-color: rgba(145,31,57,0.35) !important;
        }
        .dp-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 4vw, 42px);
          color: #fff;
          margin: 14px 0 12px;
          line-height: 1.15;
        }
        .dp-title-white { color: #fff !important; }
        .dp-title-gold { color: #a9875c; }
        .dp-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          margin: 0;
          line-height: 1.6;
        }

        /* Grid */
        .dp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 720px) {
          .dp-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .dp-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .dp-card--featured {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(145,31,57,0.3);
          box-shadow: 0 8px 48px rgba(145,31,57,0.15), 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10);
        }

        /* Badge */
        .dp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          padding: 5px 14px 5px 10px;
          width: fit-content;
        }
        .dp-badge--featured {
          color: #911f39;
          background: rgba(145,31,57,0.1);
          border-color: rgba(145,31,57,0.3);
        }
        .dp-badge-icon {
          color: inherit;
          display: flex;
          align-items: center;
        }

        /* Card text */
        .dp-card-title {
          font-family: var(--font-display);
          font-size: clamp(17px, 2vw, 21px);
          color: #fff;
          margin: 0;
          line-height: 1.25;
        }
        .dp-card--featured .dp-card-title { color: #fff; }
        .dp-card-sub {
          font-size: 13.5px;
          color: rgba(255,255,255,0.45);
          margin: 0;
          line-height: 1.6;
        }

        /* Steps */
        .dp-steps {
          list-style: none;
          margin: 4px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dp-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .dp-step-num {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.5);
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .dp-step-num--featured {
          background: rgba(145,31,57,0.12);
          border-color: rgba(145,31,57,0.3);
          color: #911f39;
        }
        .dp-step-text {
          font-size: 13.5px;
          color: rgba(255,255,255,0.75);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
