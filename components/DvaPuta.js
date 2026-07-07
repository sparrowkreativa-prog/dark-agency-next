'use client';
import { useEffect, useRef, useState } from 'react';

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
            <em>Već Afirmisana ili Krećeš od Nule —</em><br />
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
