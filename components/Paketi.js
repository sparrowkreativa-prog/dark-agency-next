'use client';
import { useEffect, useRef, useState } from 'react';

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const PLANS = [
  {
    id: 'chat',
    title: 'Samo Chat',
    sub: 'Chat tim preuzima sve razgovore. Ti dovodiš fanove, mi ih pretvaramo u prihod.',
    you: ['Dovodiš fanove na stranicu'],
    we: ['Chat tim 24/7 na srpskom i engleskom', 'PPV, customs, upsell poruke', 'Praćenje konverzija i prihoda'],
    featured: false,
  },
  {
    id: 'hybrid',
    title: 'Hibridno Upravljanje',
    sub: 'Nastaviš da postuješ na svojoj glavnoj platformi. Mi pravimo novac od publike koju već imaš.',
    you: ['Postuješ na svojoj platformi kao i obično'],
    we: ['Sve iz Samo Chat paketa', 'Zakazivanje i prepakovavanje sadržaja', 'DMCA zaštita i zaštita identiteta'],
    featured: false,
  },
  {
    id: 'full',
    title: 'Puno Upravljanje',
    sub: 'Ti snimas, mi vodimo sve ostalo. Najveći lift u prihodu, najmanje posla za tebe.',
    you: ['Snimaš content (mi kažemo šta i kako)'],
    we: ['Sve iz Hibridnog paketa', 'Rast na više platformi', 'Kompletne content operacije'],
    featured: true,
    badge: 'Najpopularnije',
  },
];

export default function Paketi() {
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
    <section className="pk-section" ref={ref}>
      <div className="pk-container">
        <div className="pk-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="chapter-label">Paketi</span>
          <h2 className="pk-title"><em className="pk-em">Izaberi</em> <em className="pk-em-gold">Svoj Model Saradnje</em></h2>
          <p className="pk-sub">Bez unaprednih troškova — zarađujemo tek kada i ti zaradiš.</p>
        </div>

        <div className="pk-grid">
          {PLANS.map((plan, i) => (
            <div key={plan.id}
              className={`pk-card${plan.featured ? ' pk-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s ease ${0.1 + i * 0.12}s` }}>

              {plan.badge && (
                <div className="pk-badge">{plan.badge}</div>
              )}

              <h3 className="pk-plan-title">{plan.title}</h3>
              <p className="pk-plan-sub">{plan.sub}</p>

              {/* Ti radiš */}
              <div className="pk-you-section">
                <div className="pk-section-label">
                  <span className="pk-divider-line" />
                  Ti radiš
                  <span className="pk-divider-line pk-divider-line--flex" />
                </div>
                <ul className="pk-you-list">
                  {plan.you.map(item => (
                    <li key={item} className="pk-you-item">
                      <span className="pk-you-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mi radimo */}
              <div className="pk-we-section">
                <div className="pk-section-label pk-section-label--gold">
                  <span className="pk-divider-line pk-divider-line--gold" />
                  Mi radimo
                  <span className="pk-divider-line pk-divider-line--gold pk-divider-line--flex" />
                </div>
                <ul className="pk-we-list">
                  {plan.we.map(item => (
                    <li key={item} className="pk-we-item">
                      <span className="pk-check">{CHECK}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pk-bottom"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <a href="#apply" className="pk-bottom-cta">
            Prijavi se i zajedno ćemo odlučiti <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        .pk-section { padding: 96px 0; background: #fafaf8; }
        .pk-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .pk-header { text-align: center; margin-bottom: 52px; }
        .pk-title { font-family: var(--font-display); font-size: clamp(28px,4vw,42px); color: #1a1a1a; margin: 12px 0 10px; line-height: 1.1; }
        .pk-em { font-style: italic; color: #1a1a1a; }
        .pk-em-gold { font-style: italic; color: #a9875c; }
        .pk-sub { font-size: 15px; color: #888; margin: 0; }

        /* Grid */
        .pk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; margin-bottom: 40px; }
        @media (max-width: 860px) { .pk-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; } }

        /* Card */
        .pk-card {
          position: relative;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 32px 24px;
          display: flex; flex-direction: column; gap: 16px;
          text-align: left;
        }
        .pk-card--featured {
          background: rgba(255,255,255,0.88);
          border: 1.5px solid rgba(145,31,57,0.25);
          box-shadow: 0 12px 48px rgba(145,31,57,0.12), 0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1);
        }

        /* Badge */
        .pk-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: #911f39; color: #fff;
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          padding: 5px 16px; border-radius: 999px;
          box-shadow: 0 4px 16px rgba(145,31,57,0.35);
          white-space: nowrap;
        }

        /* Plan header */
        .pk-plan-title { font-family: var(--font-display); font-size: 20px; font-style: italic; color: #1a1a1a; margin: 0; line-height: 1.2; text-align: center; }
        .pk-card--featured .pk-plan-title { color: #911f39; }
        .pk-plan-sub { font-size: 13px; color: #777; line-height: 1.6; margin: 0; }

        /* Section labels */
        .pk-you-section, .pk-we-section { display: flex; flex-direction: column; gap: 10px; }
        .pk-section-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; text-transform: uppercase; letter-spacing: 0.14em;
          color: #bbb; font-weight: 600; white-space: nowrap;
        }
        .pk-section-label--gold { color: #a9875c; }
        .pk-divider-line { display: block; width: 16px; height: 1px; background: #ddd; flex-shrink: 0; }
        .pk-divider-line--gold { background: rgba(169,135,92,0.4); }
        .pk-divider-line--flex { flex: 1; width: auto; }

        /* You list */
        .pk-you-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .pk-you-item { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #666; line-height: 1.5; }
        .pk-you-dot { width: 6px; height: 6px; border-radius: 50%; background: #ccc; flex-shrink: 0; margin-top: 5px; }

        /* We list */
        .pk-we-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .pk-we-item { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #444; line-height: 1.5; }
        .pk-check { color: #a9875c; flex-shrink: 0; margin-top: 1px; }
        .pk-card--featured .pk-check { color: #911f39; }

        /* Bottom */
        .pk-bottom { text-align: center; display: flex; justify-content: center; margin-top: 8px; }
        .pk-bottom-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #911f39; color: #fff;
          padding: 14px 32px; border-radius: 999px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          box-shadow: 0 4px 24px rgba(145,31,57,0.3);
          transition: filter 0.2s, transform 0.2s;
        }
        .pk-bottom-cta:hover { filter: brightness(1.1); transform: translateY(-1px); }
      `}</style>
    </section>
  );
}
