'use client';
import { useEffect, useRef, useState } from 'react';

const ROLES = [
  { num: '01', title: 'Stratezi',            body: 'Mapiraju tvoju nišu, cene i prvih 90 dana — pre nego što se ijedan nalog pokrene.' },
  { num: '02', title: 'Četeri',              body: 'Generišu prihod 24/7, vreme odgovora ispod 5 minuta, svaka poruka.' },
  { num: '03', title: 'Content Menadžeri',   body: 'Zakazuju, optimizuju i maksimizuju svaku objavu.' },
  { num: '04', title: 'DMCA Specijalisti',   body: 'Prate 500+ platformi, skidanje sadržaja se meri satima.' },
  { num: '05', title: 'Mentori',             body: 'Lično mentorstvo od žena koje su same izgradile ovo.' },
];

export default function Tim() {
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
    <section className="tm-section" ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="tm-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.9s ease, transform 0.9s ease' }}>
          <span className="chapter-label">TIM</span>
          <h2 className="tm-title">
            Posvećen Tim Iza Svakog Naloga.<br />
            <span style={{ color: '#e8538f' }}>Niko Od Njih Nisi Ti.</span>
          </h2>
          <p className="tm-sub">Kada tvoj nalog krene, ovo su ljudi koji rade na tvom biznisu — dok ti nastavljaš da živiš normalno.</p>
        </div>

        {/* 5-col role grid */}
        <div className="tm-grid"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.9s ease 0.2s' }}>
          {ROLES.map((r, i) => (
            <div key={r.num} className="tm-role"
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: `opacity 0.7s ease ${0.25 + i * 0.1}s, transform 0.7s ease ${0.25 + i * 0.1}s` }}>
              <p className="tm-role-num">{r.num}</p>
              <h3 className="tm-role-title">{r.title}</h3>
              <p className="tm-role-body">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Hours split bar */}
        <div className="tm-bar-wrap"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: 'opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s' }}>
          <div className="tm-bar">
            <div className="tm-bar-you">
              <p className="tm-bar-label">Ti</p>
              <p className="tm-bar-num">20<span className="tm-bar-unit">h/ned</span></p>
            </div>
            <div className="tm-bar-team">
              <p className="tm-bar-label tm-bar-label--right">Tvoj Tim</p>
              <p className="tm-bar-num tm-bar-num--right">150+<span className="tm-bar-unit">h/ned</span></p>
            </div>
          </div>
          <p className="tm-bar-caption">Ti kreiraš. Tim vodi sve ostalo.</p>
        </div>

        {/* Bottom text */}
        <div className="tm-bottom"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s' }}>
          <h3 className="tm-bottom-title">
            Deo koji je <span style={{ fontStyle: 'italic', color: '#e8538f' }}>zaista ti</span>
          </h3>
          <p className="tm-bottom-body">
            Evo šta većina agencija neće reći naglas: novac dolazi od konekcije, a ne samo od sadržaja. Tvoj tim se bavi objavljivanjem, porukama, zaštitom — svime. Ono što ti donosiš je jedino što ne može da se prepusti nekome drugom: prava, topla ličnost kojoj se ljudi rado vraćaju. Ako ti je prirodno da neke ko se oseća viđenim, dobro ćeš proći ovde.
          </p>
        </div>

      </div>

      <style>{`
        .tm-section {
          padding: 96px 0;
          background: #fff;
        }

        /* Header */
        .tm-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px;
        }
        .tm-title {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3.5vw, 2.9rem);
          font-style: italic;
          line-height: 1.12;
          color: #1a1a1a;
          margin: 14px 0 18px;
        }
        .tm-sub {
          font-size: 1rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        /* Role grid */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid rgba(232,83,143,0.15);
          margin-bottom: 48px;
        }
        @media (max-width: 900px) {
          .tm-grid { grid-template-columns: repeat(2, 1fr); border-top: none; }
        }
        @media (max-width: 500px) {
          .tm-grid { grid-template-columns: 1fr; }
        }

        .tm-role {
          padding: 28px 20px 28px 0;
          border-left: 1px solid rgba(232,83,143,0.15);
          padding-left: 20px;
        }
        .tm-role:first-child {
          border-left: none;
          padding-left: 0;
        }
        @media (max-width: 900px) {
          .tm-role {
            border-left: none;
            border-top: 1px solid rgba(232,83,143,0.12);
            padding: 20px 0;
          }
          .tm-role:first-child { border-top: none; }
        }

        .tm-role-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #e8538f;
          margin: 0 0 10px;
        }
        .tm-role-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          font-style: italic;
          color: #1a1a1a;
          margin: 0 0 8px;
          line-height: 1.2;
        }
        .tm-role-body {
          font-size: 0.82rem;
          color: #888;
          line-height: 1.6;
          margin: 0;
        }

        /* Hours bar */
        .tm-bar-wrap {
          max-width: 700px;
          margin: 0 auto 56px;
        }
        .tm-bar {
          display: flex;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(232,83,143,0.15);
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .tm-bar-you {
          flex: 0 0 28%;
          padding: 24px 28px;
          background: linear-gradient(135deg, #e8538f 0%, #c23a72 100%);
        }
        @media (max-width: 500px) {
          .tm-bar-you { flex: 0 0 38%; padding: 18px 16px; }
        }
        .tm-bar-team {
          flex: 1;
          padding: 24px 28px;
          background: #f8f7f5;
          text-align: right;
        }
        @media (max-width: 500px) {
          .tm-bar-team { padding: 18px 16px; }
        }
        .tm-bar-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.85);
          margin: 0 0 4px;
          font-weight: 700;
        }
        .tm-bar-label--right {
          color: #aaa;
        }
        .tm-bar-num {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-style: italic;
          color: #fff;
          line-height: 1;
          margin: 0;
        }
        .tm-bar-num--right {
          color: #1a1a1a;
        }
        .tm-bar-unit {
          font-size: 0.7rem;
          font-style: normal;
          font-weight: 700;
          margin-left: 3px;
          vertical-align: super;
        }
        .tm-bar-caption {
          text-align: center;
          font-size: 12px;
          color: #aaa;
          margin: 12px 0 0;
        }

        /* Bottom text */
        .tm-bottom {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .tm-bottom-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 0 0 18px;
        }
        .tm-bottom-body {
          font-size: 1rem;
          color: #666;
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 860px) {
          .tm-header { text-align: center; }
          .tm-bottom { text-align: center; }
        }
      `}</style>
    </section>
  );
}
