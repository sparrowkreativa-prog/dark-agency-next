'use client';
import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: '1',
    title: 'Prijava',
    desc: 'Prijavljuješ se i tim procenjuje da li odgovaraš standardima agencije.',
  },
  {
    num: '2',
    title: 'Analiza (48h)',
    desc: 'Detaljna analiza brenda, publike i sadržaja, bezbednosni sistemi i plan rasta.',
  },
  {
    num: '3',
    title: 'Onboarding (do 4 nedelje)',
    desc: 'Kreiranje social media kita i definisanje finalnog predloga saradnje.',
  },
  {
    num: '4',
    title: 'Prva zarada',
    desc: 'Prvi priliv sredstava na tvoj račun i početak dugoročnog partnerstva.',
  },
];

export default function PutKlijenta() {
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
    <section className="pk2-section" ref={ref}>
      <div className="pk2-container">
        <div className="pk2-header">
          <span className="chapter-label">Put Klijenta</span>
          <h2 className="pk2-heading">
            <em style={{ color: '#1a1a1a' }}>Od Prijave </em><em style={{ color: '#a9875c' }}>do Prve Zarade</em>
          </h2>
        </div>

        <div className="pk2-steps">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="pk2-step"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="pk2-num">{s.num}</div>
              <h3 className="pk2-title">{s.title}</h3>
              <p className="pk2-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pk2-section {
          background: #fafaf8;
          padding: 80px 0;
        }
        @media (max-width: 640px) { .pk2-section { padding: 48px 0; } }

        .pk2-container {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .pk2-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .pk2-heading {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #1a1a1a;
          margin: 12px 0 0;
          line-height: 1.15;
        }

        .pk2-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 860px) {
          .pk2-steps { grid-template-columns: repeat(2, 1fr); gap: 28px; }
        }
        @media (max-width: 480px) {
          .pk2-steps { grid-template-columns: 1fr; gap: 24px; }
          .pk2-header { margin-bottom: 36px; }
        }

        .pk2-step { text-align: center; }

        .pk2-num {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #a9875c;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .pk2-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px;
          line-height: 1.3;
        }
        .pk2-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
