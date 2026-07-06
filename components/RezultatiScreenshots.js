'use client';
import { useEffect, useRef, useState } from 'react';

const SCREENSHOTS = [
  { src: '/screenshots/of-stats-1.jpg', alt: 'OnlyFans statistika 1' },
  { src: '/screenshots/of-stats-2.jpg', alt: 'OnlyFans statistika 2' },
  { src: '/screenshots/of-stats-3.jpg', alt: 'OnlyFans statistika 3' },
];

export default function RezultatiScreenshots() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="rz-section" ref={ref}>
      <div className="rz-inner">
        {/* Header */}
        <div className="rz-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
          <div className="rz-label">DIREKTNO SA PLATFORME</div>
          <h2 className="rz-title">Rezultati, ne obećanja</h2>
        </div>

        {/* Cards */}
        <div className="rz-cards">
          {SCREENSHOTS.map((s, i) => (
            <div key={i} className="rz-card"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(28px)',
                transition: `opacity 0.9s cubic-bezier(0.16,0.84,0.44,1) ${i * 0.14}s, transform 0.9s cubic-bezier(0.16,0.84,0.44,1) ${i * 0.14}s`,
              }}>
              <img src={s.src} alt={s.alt} className="rz-img" />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="rz-disclaimer"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.9s ease 0.5s' }}>
          Autentični, anonimizovani statistički paneli kreatorki iz našeg rostera.
        </p>
      </div>

      <style>{`
        .rz-section {
          padding: 96px 0;
          background: var(--color-dark-1, #f8f7f5);
        }
        .rz-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* header */
        .rz-header { text-align: center; margin-bottom: 44px; }
        .rz-label {
          font-size: clamp(11px, 3vw, 13px);
          letter-spacing: clamp(2px, 1vw, 4px);
          color: #e8538f;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .rz-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 5vw, 42px);
          font-style: italic;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.1;
        }

        /* cards */
        .rz-cards {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .rz-card {
          width: 280px;
          max-width: 30vw;
          height: 420px;
          border-radius: 18px;
          border: 1px solid rgba(232,83,143,0.18);
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          overflow: hidden;
          flex-shrink: 0;
        }
        @media (max-width: 700px) {
          .rz-card { max-width: 85vw; width: 100%; height: 380px; }
        }
        .rz-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* disclaimer */
        .rz-disclaimer {
          text-align: center;
          font-size: 12px;
          color: #aaa;
          margin-top: 28px;
        }
      `}</style>
    </section>
  );
}
