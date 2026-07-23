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

const NULA_KORACI = [
  'Postoji set načina koji smo osmislili da tvoja privatnost, identitet i izgled bude potpuno promenjen i zaštićen tako da niko neće znati iz tvog grada ili zemlje da si to ti ukoliko na tome insistiraš.',
  'Dobijaš svog ličnog brend menadžera koji će ti biti na raspolaganju 24h i tim od još troje ljudi koji će te postepeno učiti svemu.',
  'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
  'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
  'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
  'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
  'Kreiramo tvoje profile i podešavamo naloge.',
  'Učimo te kako da snimaš sadržaj koji prodaje.',
  'Pokažemo ti tačno kako da koristiš naš CRM.',
  'Zajedno mapiramo šta voliš (a šta ne), tvoj cilj i plan da ga dostigneš.',
];

export default function Garancija30() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

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

        {/* Right - liquid glass box */}
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

          <button className="g30-btn" onClick={() => setModal(true)}>
            Krećeš od nule? <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="g30-modal-backdrop" onClick={() => setModal(false)}>
          <div className="g30-modal" onClick={e => e.stopPropagation()}>
            <button className="g30-modal-close" onClick={() => setModal(false)} aria-label="Zatvori">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="g30-modal-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20h10"/><path d="M10 20c5.5-2.5 8-6 8-6H2s3 6.5 8 6z"/>
                <path d="M14 13c0-4-3-7-7-7-1.93 0-3.68.78-4.95 2.05"/><path d="M14 13c.67-4.33 3-7.33 7-8"/>
              </svg>
              KREĆEŠ OD NULE?
            </div>

            <h3 className="g30-modal-title"><em>Nova si u svemu? Gradimo to s tobom.</em></h3>

            <ul className="g30-modal-steps">
              {NULA_KORACI.map((k, i) => (
                <li key={i} className="g30-modal-step">
                  <span className="g30-modal-num">{i + 1}</span>
                  <span className="g30-modal-text">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

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

        /* Liquid glass box */
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
          padding: 20px;
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
          border: none;
          cursor: pointer;
          width: 100%;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 28px rgba(145,31,57,0.35);
        }
        .g30-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(145,31,57,0.5); }

        /* Modal */
        .g30-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: g30-fade-in 0.2s ease;
        }
        @keyframes g30-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .g30-modal {
          position: relative;
          background: #1e1e1e;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 36px 32px 32px;
          max-width: 620px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 24px 80px rgba(0,0,0,0.7);
          animation: g30-slide-up 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes g30-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .g30-modal { padding: 28px 20px 24px; border-radius: 18px; }
        }
        .g30-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .g30-modal-close:hover { background: rgba(255,255,255,0.16); }
        .g30-modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a9875c;
          border: 1px solid rgba(169,135,92,0.3);
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 16px;
        }
        .g30-modal-title {
          font-family: var(--font-display), Georgia, serif;
          font-style: italic;
          font-size: clamp(1.3rem, 3vw, 1.7rem);
          color: #fff;
          margin: 0 0 24px;
          line-height: 1.3;
        }
        .g30-modal-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .g30-modal-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .g30-modal-num {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
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
        .g30-modal-text {
          font-size: 14px;
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
