'use client';
import { useEffect, useRef, useState } from 'react';

const PARAGRAPHS = [
  'Sistem je osmišljen tako da je identitet modela maksimalno zaštićen i obezbeđen na Balkanu - niko ne mora da zna da snimaš content, ukoliko sama ne poželiš drugačije. Privatni nalozi na društvenim mrežama se ne diraju, niti im agencija ima pristup.',
  'Geolokacije i pristup se blokiraju za države u kojima ne želiš da se content pojavi - uključujući potpuno onemogućen pristup iz Srbije, jer radimo isključivo tržište Amerike i Italije.',
  'Kao dodatna sigurnost, devojke imaju mogućnost da potpuno promene svoj look uz profesionalne perike, sočiva i privremene minimalističke tetovaže - isključivo za dan snimanja.',
];

const STATS = [
  { num: '6–8h',             label: 'angažovanja nedeljno' },
  { num: '10.000–100.000 €', label: 'mesečna zarada modela' },
];

const BARS = [
  { lbl: 'Geo-blok',   val: '100%', w: '100%' },
  { lbl: 'Anonimnost', val: '97%',  w: '97%'  },
  { lbl: 'DMCA',       val: '100%', w: '100%' },
  { lbl: 'Pristup',    val: '100%', w: '100%' },
];

const ShieldIcons = {
  lock:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  eye:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  mask:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  globe: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

const SHIELDS = [
  { icon: 'lock',  text: 'Geo-blokiranje Srbije' },
  { icon: 'eye',   text: 'Nulti pristup privatnim profilima' },
  { icon: 'mask',  text: 'Zaštita identiteta za snimanje' },
  { icon: 'globe', text: 'Samo US & IT tržište' },
];

const STEPS = [
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

export default function Bezbednost() {
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
    <section className="bz-section" ref={ref}>
      <div className="bz-container">

        {/* ── TOP: Badge + title ── */}
        <div className="bz-top" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
          <span className="bz-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 20h10"/><path d="M10 20c5.5-2.5 8-6 8-6H2s3 6.5 8 6z"/>
              <path d="M14 13c0-4-3-7-7-7-1.93 0-3.68.78-4.95 2.05"/><path d="M14 13c.67-4.33 3-7.33 7-8"/>
            </svg>
            KREĆEŠ OD NULE?
          </span>
          <h2 className="bz-top-title"><em>Nova si u svemu? Gradimo to s tobom.</em></h2>
        </div>

        {/* ── MIDDLE: 2 columns ── */}
        <div className="bz-inner">

          {/* Left */}
          <div className="bz-left" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(-28px)', transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s' }}>
            <h3 className="bz-title">Tvoj Identitet.<br /><span style={{ color: '#a9875c' }}>Tvoja Pravila.</span></h3>
            <div className="bz-paras">
              {PARAGRAPHS.map((p, i) => <p key={i} className="bz-para">{p}</p>)}
            </div>
            <div className="bz-shields">
              {SHIELDS.map((s, i) => (
                <span key={i} className="bz-shield">{ShieldIcons[s.icon]}{s.text}</span>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="bz-right" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(28px)', transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s' }}>
            <div className="bz-panel">
              <div className="bz-panel-top">
                <span className="bz-panel-dot" style={{ background: '#ff5f57' }} />
                <span className="bz-panel-dot" style={{ background: '#febc2e' }} />
                <span className="bz-panel-dot" style={{ background: '#28c840' }} />
                <span className="bz-panel-label">Velluto Nero · Zaštita</span>
              </div>
              <div className="bz-lock-wrap">
                <div className="bz-lock-icon">🔐</div>
                <div className="bz-lock-text">Identitet je zaštićen</div>
                <div className="bz-lock-sub">Sistem aktivan 24/7</div>
              </div>
              <div className="bz-stat-list">
                {STATS.map((s, i) => (
                  <div key={i} className="bz-stat-item" style={{ opacity: vis ? 1 : 0, transition: `opacity 0.8s ease ${0.6 + i * 0.18}s` }}>
                    <div className="bz-stat-num">{s.num}</div>
                    <div className="bz-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bz-bar-wrap">
                {BARS.map((b, i) => (
                  <div key={i} className="bz-bar-row">
                    <span className="bz-bar-lbl">{b.lbl}</span>
                    <div className="bz-bar-track">
                      <div className="bz-bar-fill" style={{ width: vis ? b.w : '0%', transition: `width 1.2s ease ${0.8 + i * 0.15}s` }} />
                    </div>
                    <span className="bz-bar-val">{b.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: 10 steps ── */}
        <div className="bz-steps-wrap" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s' }}>
          <ul className="bz-steps">
            {STEPS.map((s, i) => (
              <li key={i} className="bz-step">
                <span className="bz-step-num">{i + 1}</span>
                <span className="bz-step-text">{s}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <style>{`
        .bz-section {
          padding: 96px 0;
          background: #fafaf8;
        }
        .bz-container {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Top */
        .bz-top {
          text-align: center;
          margin-bottom: 52px;
        }
        .bz-badge {
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
          padding: 6px 16px;
          margin-bottom: 16px;
        }
        .bz-top-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          color: #1a1a1a;
          line-height: 1.25;
          margin: 0;
        }
        .bz-top-title em { font-style: italic; }

        /* Middle grid */
        .bz-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 56px;
        }
        @media (max-width: 860px) {
          .bz-inner { grid-template-columns: 1fr; gap: 40px; }
          .bz-left { text-align: center; }
          .bz-shields { justify-content: center; display: grid; grid-template-columns: 1fr 1fr; }
          .bz-paras { text-align: center; }
        }

        /* Left */
        .bz-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-style: italic;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 0 0 24px;
        }
        .bz-paras { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .bz-para { font-size: 0.97rem; color: #555; line-height: 1.8; margin: 0; }
        .bz-shields { display: flex; flex-wrap: wrap; gap: 10px; }
        .bz-shield {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.78rem; font-weight: 600; color: #a9875c;
          background: rgba(169,135,92,0.08); border: 1px solid rgba(169,135,92,0.25);
          border-radius: 999px; padding: 6px 14px;
        }

        /* Right panel */
        .bz-panel {
          background: #1a1a2e;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 16px 56px rgba(0,0,0,0.18);
        }
        .bz-panel-top { display: flex; align-items: center; gap: 6px; margin-bottom: 24px; }
        .bz-panel-dot { width: 10px; height: 10px; border-radius: 50%; }
        .bz-panel-label { font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; margin-left: 6px; }
        .bz-lock-wrap { text-align: center; padding: 20px 0 24px; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px; }
        .bz-lock-icon { font-size: 2.4rem; margin-bottom: 8px; }
        .bz-lock-text { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .bz-lock-sub { font-size: 0.68rem; color: #22c55e; display: flex; align-items: center; justify-content: center; gap: 5px; }
        .bz-lock-sub::before { content: ''; display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; }
        .bz-stat-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .bz-stat-item { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px; }
        .bz-stat-num { font-family: var(--font-display); font-size: 1.15rem; font-style: italic; color: #a9875c; line-height: 1.1; margin-bottom: 4px; }
        .bz-stat-label { font-size: 0.65rem; color: rgba(255,255,255,0.45); line-height: 1.4; }
        .bz-bar-wrap { display: flex; flex-direction: column; gap: 10px; }
        .bz-bar-row { display: flex; align-items: center; gap: 10px; }
        .bz-bar-lbl { font-size: 0.65rem; color: rgba(255,255,255,0.45); width: 72px; flex-shrink: 0; }
        .bz-bar-track { flex: 1; height: 4px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden; }
        .bz-bar-fill { height: 100%; background: linear-gradient(90deg, #a9875c, #f7a8c9); border-radius: 999px; }
        .bz-bar-val { font-size: 0.65rem; font-weight: 700; color: #a9875c; width: 32px; text-align: right; flex-shrink: 0; }

        /* Bottom steps */
        .bz-steps-wrap {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px) saturate(1.6);
          -webkit-backdrop-filter: blur(20px) saturate(1.6);
          border: 1px solid rgba(169,135,92,0.15);
          border-radius: 24px;
          padding: 36px 40px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        @media (max-width: 640px) {
          .bz-steps-wrap { padding: 24px 20px; }
        }
        .bz-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 40px;
        }
        @media (max-width: 680px) {
          .bz-steps { grid-template-columns: 1fr; }
        }
        .bz-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .bz-step-num {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(169,135,92,0.1);
          border: 1px solid rgba(169,135,92,0.3);
          color: #a9875c;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .bz-step-text {
          font-size: 13.5px;
          color: #444;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
