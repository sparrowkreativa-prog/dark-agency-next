'use client';
import { useEffect, useRef, useState } from 'react';

const SCREENSHOTS = [
  { src: '/screenshots/of-stats-01.jpg', alt: 'OnlyFans statistika 1' },
  { src: '/screenshots/of-stats-02.jpg', alt: 'OnlyFans statistika 2' },
  { src: '/screenshots/of-stats-03.jpg', alt: 'OnlyFans statistika 3' },
];

export default function RezultatiScreenshots() {
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
    <section className="rz-section" ref={ref}>
      <div className="rz-inner">
        {/* Header */}
        <div
          className="rz-header"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <span className="chapter-label">DIREKTNO SA PLATFORME</span>
          <h2 className="rz-title">
            Rezultati,<br /><span style={{ color: '#a9875c' }}>Ne Obećanja.</span>
          </h2>
        </div>

        {/* Desktop / tablet: 3 columns, 9:16 */}
        <div className="rz-cards-desktop">
          {SCREENSHOTS.map((s, i) => (
            <div
              key={i}
              className="rz-card-desktop"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(28px)',
                transition: `opacity 0.9s cubic-bezier(0.16,0.84,0.44,1) ${i * 0.14}s, transform 0.9s cubic-bezier(0.16,0.84,0.44,1) ${i * 0.14}s`,
              }}
            >
              <img src={s.src} alt={s.alt} className="rz-img" />
            </div>
          ))}
        </div>

        {/* Mobile: sticky card stack */}
        <div className="rz-cards-mobile">
          {SCREENSHOTS.map((s, i) => (
            <div
              key={i}
              className="rz-card-mobile"
              style={{ top: `calc(72px + ${i * 20}px)`, zIndex: i + 1 }}
            >
              <img src={s.src} alt={s.alt} className="rz-img" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="rz-disclaimer"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.9s ease 0.5s' }}
        >
          Autentični, anonimizovani statistički paneli kreatorki iz našeg rostera.
        </p>
      </div>

      <style>{`
        .rz-section {
          padding: 96px 0;
          background: #fafaf8;
        }
        .rz-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* header */
        .rz-header { text-align: center; margin-bottom: 48px; }
        .rz-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 42px);
          font-style: italic;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        /* ── Desktop / tablet ── */
        .rz-cards-desktop {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: flex-start;
        }
        .rz-card-desktop {
          flex: 1;
          max-width: 320px;
          aspect-ratio: 9 / 16;
          border-radius: 18px;
          border: 1px solid rgba(169,135,92,0.18);
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          overflow: hidden;
        }
        .rz-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* Mobile — hidden on desktop */
        .rz-cards-mobile { display: none; }

        /* ── Mobile: sticky card stack ── */
        @media (max-width: 640px) {
          .rz-cards-desktop { display: none; }

          .rz-cards-mobile {
            display: flex;
            flex-direction: column;
            /* enough height for 3 stacked cards to scroll through */
            height: calc(100svh * 2.2);
            position: relative;
          }

          .rz-card-mobile {
            position: sticky;
            width: 100%;
            max-width: 340px;
            margin: 0 auto;
            aspect-ratio: 9 / 16;
            border-radius: 20px;
            border: 1px solid rgba(169,135,92,0.18);
            box-shadow: 0 20px 60px rgba(0,0,0,0.18);
            overflow: hidden;
            background: #111;
          }
        }

        /* disclaimer */
        .rz-disclaimer {
          text-align: center;
          font-size: 12px;
          color: #aaa;
          margin-top: 36px;
        }
      `}</style>
    </section>
  );
}
