'use client';
import { useEffect, useRef, useState } from 'react';

/* ── World Map Globe ─────────────────────────────────────────── */
// Zoomed equirectangular view: lon -100→+50, lat 0→72
// x = (lon + 100) / 150 * 960   y = (72 - lat) / 72 * 360
// Cities:
//   New York  40.7°N  74°W  → x≈166  y≈161
//   Milano    45.5°N   9.2°E → x≈699  y≈134
//   Belgrade  44.8°N  20.5°E → x≈771  y≈137

function WorldMap({ vis }) {
  const NY  = { x: 166, y: 161, label: 'New York' };
  const MI  = { x: 699, y: 134, label: 'Milano' };
  const BG  = { x: 771, y: 137, label: 'Belgrade' };

  // arc control points (pulled upward to simulate great-circle curve)
  const arcNY_MI  = `M${NY.x},${NY.y} Q432,30 ${MI.x},${MI.y}`;
  const arcMI_BG  = `M${MI.x},${MI.y} Q735,90 ${BG.x},${BG.y}`;
  const arcNY_BG  = `M${NY.x},${NY.y} Q468,0 ${BG.x},${BG.y}`;

  return (
    <div className="dp-map-wrap" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s' }}>
      <svg
        viewBox="0 0 960 310"
        xmlns="http://www.w3.org/2000/svg"
        className="dp-map-svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#911f39" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcGradNY" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#911f39" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a9875c" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="arcGradMI" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a9875c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#911f39" stopOpacity="0.9" />
          </linearGradient>
          <filter id="cityGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="mapClip">
            <rect x="0" y="0" width="960" height="310" rx="20" />
          </clipPath>
        </defs>

        <g clipPath="url(#mapClip)">
          {/* Background glow */}
          <rect width="960" height="310" fill="url(#mapGlow)" />

          {/* Latitude grid lines */}
          {[10,20,30,40,50,60,70].map(lat => {
            const y = (72 - lat) / 72 * 310;
            return <line key={lat} x1="0" y1={y} x2="960" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
          })}
          {/* Longitude grid lines */}
          {[-80,-60,-40,-20,0,20,40].map(lon => {
            const x = (lon + 100) / 150 * 960;
            return <line key={lon} x1={x} y1="0" x2={x} y2="310" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
          })}

          {/* ── Continents ──────────────────────────────── */}
          {/* Eastern North America */}
          <path d="M148,52 L168,44 L192,50 L210,68 L220,92 L228,118 L230,145 L226,168 L218,188 L202,204 L180,218 L158,228 L138,224 L118,208 L102,186 L94,158 L92,128 L96,100 L110,74 L130,58 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Florida peninsula */}
          <path d="M156,228 L170,230 L178,250 L170,270 L158,278 L148,268 L144,248 L148,232 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Canada east coast */}
          <path d="M168,44 L195,30 L228,22 L260,20 L278,30 L280,50 L265,62 L240,68 L215,68 L192,60 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Greenland */}
          <path d="M290,8 L355,2 L398,10 L408,30 L395,52 L365,65 L330,66 L298,54 L282,34 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
          {/* Iceland */}
          <path d="M438,52 L468,46 L492,56 L495,74 L475,84 L448,82 L430,68 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* UK & Ireland */}
          <path d="M572,74 L592,68 L612,74 L622,92 L616,112 L598,120 L578,112 L566,96 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          <path d="M554,82 L568,78 L574,94 L564,104 L550,98 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Scandinavia */}
          <path d="M628,40 L660,32 L696,38 L718,58 L720,82 L708,102 L684,112 L658,106 L636,88 L624,64 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* France + BeNeLux */}
          <path d="M590,118 L628,112 L665,118 L688,136 L700,158 L685,168 L658,165 L632,156 L606,148 L588,132 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Iberian Peninsula */}
          <path d="M552,162 L594,156 L626,162 L642,182 L638,210 L618,225 L592,228 L564,218 L548,198 L546,176 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Italy */}
          <path d="M668,152 L700,146 L720,158 L728,180 L722,208 L710,228 L698,232 L688,216 L680,192 L672,168 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* Central/Eastern Europe incl. Balkans */}
          <path d="M700,108 L755,100 L808,108 L830,126 L838,148 L826,168 L800,178 L765,180 L732,174 L708,158 L696,136 Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.8" />
          {/* North Africa */}
          <path d="M524,240 L640,232 L760,230 L840,236 L868,254 L870,280 L855,302 L820,310 L700,310 L580,308 L520,298 L506,274 L508,252 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
          {/* Morocco bump */}
          <path d="M524,240 L508,252 L505,276 L516,295 L535,305 L555,300 L568,284 L565,264 L548,248 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />

          {/* ── Connection arcs ──────────────────────────── */}
          {/* NY → Belgrade (background arc, subtler) */}
          <path d={arcNY_BG} fill="none" stroke="rgba(169,135,92,0.18)" strokeWidth="1" strokeDasharray="6 8" />
          {/* NY → Milano */}
          <path d={arcNY_MI} fill="none" stroke="url(#arcGradNY)" strokeWidth="1.8"
            strokeDasharray="900" strokeDashoffset={vis ? 0 : 900}
            style={{ transition: 'stroke-dashoffset 2s ease 0.8s' }} />
          {/* Milano → Belgrade */}
          <path d={arcMI_BG} fill="none" stroke="url(#arcGradMI)" strokeWidth="1.8"
            strokeDasharray="120" strokeDashoffset={vis ? 0 : 120}
            style={{ transition: 'stroke-dashoffset 1s ease 2.6s' }} />

          {/* ── City dots ─────────────────────────────────── */}
          {[NY, MI, BG].map((city, i) => (
            <g key={city.label} filter="url(#cityGlow)">
              {/* Pulse ring */}
              <circle cx={city.x} cy={city.y} r="12" fill="none"
                stroke={i === 0 ? 'rgba(145,31,57,0.35)' : 'rgba(169,135,92,0.35)'}
                strokeWidth="1"
                style={{
                  animation: vis ? `dpPulse 2.4s ease-out ${i * 0.4}s infinite` : 'none',
                  transformOrigin: `${city.x}px ${city.y}px`
                }} />
              {/* Outer ring */}
              <circle cx={city.x} cy={city.y} r="6"
                fill="none"
                stroke={i === 0 ? 'rgba(145,31,57,0.7)' : 'rgba(169,135,92,0.7)'}
                strokeWidth="1.5" />
              {/* Inner dot */}
              <circle cx={city.x} cy={city.y} r="3"
                fill={i === 0 ? '#911f39' : '#a9875c'} />
              {/* Label */}
              <text x={city.x} y={city.y + 22}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.08em"
                fill="rgba(255,255,255,0.7)"
                style={{ textTransform: 'uppercase', fontFamily: 'inherit' }}>
                {city.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes dpPulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
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
