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
    }, { threshold: 0.05 });
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

        {/* ── Desktop / tablet: 3 columns, true 9:16 ── */}
        <div className="rz-desktop">
          {SCREENSHOTS.map((s, i) => (
            <div
              key={i}
              className="rz-desktop-card"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(28px)',
                transition: `opacity 0.9s ease ${i * 0.14}s, transform 0.9s ease ${i * 0.14}s`,
              }}
            >
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>

        {/* ── Mobile: sticky card stack ── */}
        <div className="rz-mobile">
          {SCREENSHOTS.map((s, i) => (
            <div key={i} className="rz-mobile-track">
              <div
                className="rz-mobile-card"
                style={{ top: `${72 + i * 18}px`, zIndex: i + 1 }}
              >
                <img src={s.src} alt={s.alt} />
              </div>
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
        .rz-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .rz-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 42px);
          font-style: italic;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        /* ── Desktop: 3 columns, 9:16 ── */
        .rz-desktop {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: flex-start;
        }
        .rz-desktop-card {
          flex: 1 1 0;
          min-width: 0;
          max-width: 300px;
          border-radius: 18px;
          border: 1px solid rgba(169,135,92,0.18);
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          overflow: hidden;
          aspect-ratio: 9 / 16;
        }
        .rz-desktop-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* Mobile hidden on desktop */
        .rz-mobile { display: none; }

        /* ── Mobile: sticky card stack ── */
        @media (max-width: 640px) {
          .rz-desktop { display: none; }

          .rz-mobile {
            display: block;
          }

          /* Each track gives scroll room for that card */
          .rz-mobile-track {
            height: 80vh;
          }
          .rz-mobile-track:last-child {
            /* last card: just enough to show it fully */
            height: auto;
            padding-bottom: 32px;
          }

          .rz-mobile-card {
            position: sticky;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
            aspect-ratio: 9 / 16;
            border-radius: 20px;
            border: 1px solid rgba(169,135,92,0.18);
            box-shadow: 0 16px 48px rgba(0,0,0,0.18);
            overflow: hidden;
          }

          .rz-mobile-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
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
