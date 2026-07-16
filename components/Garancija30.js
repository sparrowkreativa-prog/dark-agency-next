'use client';
import { useEffect, useRef, useState } from 'react';

const STAVKE = [
  'Ne diramo tvoju trenutnu zaradu.',
  'Ne tražimo pristup nalozima ni tvojim privatnim profilima na društvenim mrežama, niti da raskineš ugovor sa agencijom sa kojom trenutno radiš.',
  'Nastavljaš normalno da radiš kao i do sad, samo dobijaš još jednog partnera koji ti gradi brend na drugim tržištima.',
  'Sve gradimo zajedno, kroz naš sistem.',
  'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
  'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
  'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
  'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
];

export default function Garancija30() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="g30-section" ref={ref}>
      <div className="g30-inner">
        {/* Left - text */}
        <div
          className="g30-left"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          <h2 className="g30-title">
            <em><span style={{ color: '#fff' }}>U Koliko Već Imaš Nalog</span><br />i Posluješ na <img src="/of-icon-2.png" alt="OnlyFans" className="g30-of-icon" />:</em>
          </h2>
          <p className="g30-text">
            Jedina smo agencija na svetu koja daje <strong>30-dnevnu garanciju</strong> da će tvoj trenutni prihod, ukoliko već posluješ na Balkanu, porasti <strong>minimum 3 puta</strong> na tržištima na kojima naša agencija posluje, u prvih 30 dana. Ukoliko to ne ispunimo, <strong>isplaćujemo ti razliku kao da jesmo.</strong>
          </p>
        </div>

        {/* Right - liquid glass box, 8 cells */}
        <div
          className="g30-right"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s' }}
        >
          <div className="g30-box">
            {STAVKE.map((s, i) => (
              <div key={i} className="g30-cell">
                <span className="g30-cell-num">{i + 1}</span>
                <span className="g30-cell-text">{s}</span>
              </div>
            ))}
          </div>

          <a href="#krece-od-nule" className="g30-btn">
            Krećeš od nule? <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .g30-section {
          background: #1a1a1a;
          padding: 88px 0 96px;
        }
        .g30-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .g30-inner { grid-template-columns: 1fr; gap: 40px; }
          .g30-title { text-align: center; }
          .g30-text { text-align: center; }
        }
        .g30-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.2vw, 2.4rem);
          color: #fff;
          line-height: 1.25;
          margin: 0 0 24px;
        }
        .g30-title em { font-style: italic; }
        .g30-of-icon {
          display: inline-block;
          height: 1.15em;
          width: auto;
          vertical-align: -0.2em;
          margin: 0 2px;
        }
        .g30-text {
          font-size: 1rem;
          color: #fff;
          line-height: 1.85;
          margin: 0;
        }
        .g30-text strong {
          font-weight: 700;
          font-size: 1.2em;
          color: #a9875c;
        }

        /* Liquid glass box - 8 cells */
        .g30-box {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 560px) {
          .g30-box { grid-template-columns: 1fr; }
        }
        .g30-cell {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 20px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .g30-cell:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08); }
        .g30-cell:nth-last-child(-n+2) { border-bottom: none; }
        @media (max-width: 560px) {
          .g30-cell:nth-child(odd) { border-right: none; }
          .g30-cell:nth-last-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,0.08); }
          .g30-cell:last-child { border-bottom: none; }
        }
        .g30-cell-num {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(169,135,92,0.12);
          border: 1px solid rgba(169,135,92,0.35);
          color: #a9875c;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .g30-cell-text {
          font-size: 13.5px;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
        }

        .g30-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
          background: #911f39;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          border-radius: 999px;
          padding: 15px 32px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 28px rgba(145,31,57,0.35);
        }
        .g30-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(145,31,57,0.5); }
      `}</style>
    </section>
  );
}
