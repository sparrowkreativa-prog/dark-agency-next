'use client';
import { useEffect, useRef, useState } from 'react';

/* ── World Map ───────────────────────────────────────────────── */
// SVG is Mercator, but lon offset ≠ 180° (calibrated from user feedback):
//   x = (lon + 176.5) * 10.243   [not standard (lon+180)/360*3840]
//   y = (k - ln(tan(π/4 + lat_rad/2))) / (2k) * 2160  k=3.459 (bounds ±86.4°)
// Crop viewBox: "853 350 1600 744"
// NY  40.7°N  74°W → x=1050 y=829
// MI  45.5°N  9.2°E → x=1902 y=801
// BG  44.8°N 20.5°E → x=2018 y=805

function WorldMap({ vis }) {
  const NY = { x: 1050, y: 829, label: 'New York' };
  const MI = { x: 1902, y: 754, label: 'Milano'   };
  const BG = { x: 2039, y: 769, label: 'Belgrade' };

  return (
    <div className="dp-map-wrap"
      style={{ opacity: vis?1:0, transform: vis?'none':'translateY(24px)',
               transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s' }}>
      <svg viewBox="853 350 1600 744" className="dp-map-svg" aria-hidden="true">
        <defs>
          <linearGradient id="dpArcG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#911f39"/>
            <stop offset="100%" stopColor="#a9875c"/>
          </linearGradient>
          <filter id="dpGlowF" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="dpNYGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#911f39" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <radialGradient id="dpEUGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a9875c" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          {/* Bottom fade out */}
          <linearGradient id="dpFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="black" stopOpacity="0"/>
            <stop offset="100%" stopColor="black" stopOpacity="0.55"/>
          </linearGradient>
          <clipPath id="dpClip">
            <rect x="853" y="350" width="1600" height="744"/>
          </clipPath>
        </defs>

        <g clipPath="url(#dpClip)">
          {/* Real world map from Adobe Illustrator SVG */}
          <image href="/world-map-dark.svg" x="0" y="0" width="3840" height="2160"/>

          {/* Regional glows */}
          <ellipse cx={NY.x} cy={NY.y} rx="220" ry="180" fill="url(#dpNYGlow)"/>
          <ellipse cx={MI.x} cy={MI.y} rx="260" ry="200" fill="url(#dpEUGlow)"/>

          {/* Ghost arc NY → Belgrade */}
          <path d={`M${NY.x},${NY.y} Q1545,580 ${BG.x},${BG.y}`}
            fill="none" stroke="rgba(169,135,92,0.1)" strokeWidth="4"
            strokeDasharray="10 14"/>

          {/* Animated arc NY → Milano */}
          <path d={`M${NY.x},${NY.y} Q1476,491 ${MI.x},${MI.y}`}
            fill="none" stroke="url(#dpArcG)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="1500" strokeDashoffset={vis ? 0 : 1500}
            style={{transition:'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.8s'}}/>

          {/* Animated arc Milano → Belgrade */}
          <path d={`M${MI.x},${MI.y} Q1970,711 ${BG.x},${BG.y}`}
            fill="none" stroke="#a9875c" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="210" strokeDashoffset={vis ? 0 : 210}
            style={{transition:'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1) 2.8s'}}/>

          {/* City dots */}
          {[
            { ...NY, color:'#911f39' },
            { ...MI, color:'#a9875c' },
            { ...BG, color:'#a9875c' },
          ].map((city,i) => (
            <g key={city.label} filter="url(#dpGlowF)">
              {/* Pulse ring */}
              <circle cx={city.x} cy={city.y} r="24" fill="none"
                stroke={city.color} strokeWidth="2" strokeOpacity="0.35"
                style={{animation:vis?`dpPulse 2.6s ease-out ${i*0.55}s infinite`:'none',
                        transformOrigin:`${city.x}px ${city.y}px`}}/>
              {/* Ring */}
              <circle cx={city.x} cy={city.y} r="14"
                fill="none" stroke={city.color} strokeWidth="3" strokeOpacity="0.75"/>
              {/* Core */}
              <circle cx={city.x} cy={city.y} r="7" fill={city.color}/>
              {/* Label */}
              <text x={city.x} y={city.y+36} textAnchor="middle"
                fontSize="26" fontWeight="700" letterSpacing="4"
                fill="rgba(255,255,255,0.88)">{city.label.toUpperCase()}</text>
            </g>
          ))}

          {/* Bottom gradient overlay */}
          <rect x="853" y="350" width="1600" height="744" fill="url(#dpFade)"/>
        </g>
      </svg>

      <style>{`
        @keyframes dpPulse {
          0%   { transform: scale(1);   opacity: 0.9; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .dp-map-wrap {
          margin-top: 56px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #000;
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
    title: 'Već zarađuješ - mi to uvećavamo.',
    steps: [
      'Ne diramo tvoju trenutnu zaradu.',
      'Ne tražimo pristup nalozima ni tvojim privatnim profilima na društvenim mrežama, niti da raskineš ugovor sa agencijom sa kojom trenutno radiš.',
      'Nastavljaš normalno da radiš kao i do sad, samo dobijaš još jednog partnera koji ti gradi brend na drugim tržištima.',
      'Sve gradimo zajedno, kroz naš sistem.',
      'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
      'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
      'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
      'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
      'Potpuna analiza tvojih trenutnih brojki i levaka',
      'Pročitamo 300+ tvojih ranijih chatova da vidimo kako su fanovi vođeni',
      'Pregledamo tvoj sadržaj na mrežama i pozicioniranje',
      'Zatim sve optimizujemo i skaliramo ono što već radi',
      'Dobijaš svog ličnog brend menadžera koji će ti biti na raspolaganju 24h i tim od još troje ljudi.',
    ],
    featured: true,
  },
  {
    icon: SPROUT_ICON,
    badge: 'Kreće od nule',
    title: 'Nova si u svemu? Gradimo to s tobom.',
    steps: [
      'Postoji set načina koji smo osmislili da tvoja privatnost, identitet i izgled bude potpuno promenjen i zaštićen tako da niko neće znati iz tvog grada ili zemlje da si to ti ukoliko na tome insistiraš.',
      'Dobijaš svog ličnog brend menadžera koji će ti biti na raspolaganju 24h i tim od još troje ljudi koji će te postepeno učiti svemu.',
      'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
      'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
      'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
      'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
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
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
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
              id={card.featured ? undefined : 'krece-od-nule'}
              className={`dp-card${card.featured ? ' dp-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.15 + i * 0.14}s, transform 0.7s ease ${0.15 + i * 0.14}s` }}>

              {/* Badge */}
              <span className={`dp-badge${card.featured ? ' dp-badge--featured' : ''}`}>
                <span className="dp-badge-icon">{card.icon}</span>
                {card.badge}
              </span>

              {/* Heading */}
              <h3 className="dp-card-title"><em>{card.title}</em></h3>
              {/* Steps */}
              <ul className="dp-steps">
                {card.steps.map((step, idx) => (
                  <li key={idx} className="dp-step">
                    <span className={`dp-step-num${card.featured ? ' dp-step-num--featured' : ' dp-step-num--gold'}`}>{idx + 1}</span>
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
          background: #1a1a1a;
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
          scroll-margin-top: 100px;
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
        .dp-step-num--gold {
          background: rgba(169,135,92,0.12);
          border-color: rgba(169,135,92,0.35);
          color: #a9875c;
        }
        .dp-step-text {
          font-size: 15px;
          color: #fff;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
