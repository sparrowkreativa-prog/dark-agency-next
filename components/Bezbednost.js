'use client';
import { useEffect, useRef, useState } from 'react';

const PARAGRAPHS = [
  'Sistem je osmišljen tako da je identitet modela maksimalno zaštićen i obezbeđen na Balkanu - niko ne mora da zna da snimaš content, ukoliko sama ne poželiš drugačije. Privatni nalozi na društvenim mrežama se ne diraju, niti im agencija ima pristup.',
  'Geolokacije i pristup se blokiraju za države u kojima ne želiš da se content pojavi - uključujući potpuno onemogućen pristup iz Srbije, jer radimo isključivo tržište Amerike i Italije.',
  'Kao dodatna sigurnost, devojke imaju mogućnost da potpuno promene svoj look uz profesionalne perike, sočiva i privremene minimalističke tetovaže - isključivo za dan snimanja.',
];

const STATS = [
  { num: '6–8h',               label: 'angažovanja nedeljno' },
  { num: '10.000–100.000 €',   label: 'mesečna zarada modela' },
];

const ShieldIcons = {
  lock: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  eye:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  mask: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  globe:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

const SHIELDS = [
  { icon: 'lock',  text: 'Geo-blokiranje Srbije' },
  { icon: 'eye',   text: 'Nulti pristup privatnim profilima' },
  { icon: 'mask',  text: 'Zaštita identiteta za snimanje' },
  { icon: 'globe', text: 'Samo US & IT tržište' },
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
      <div className="bz-top-label">
        <span className="chapter-label">BEZBEDNOST I PRIVATNOST</span>
      </div>

      <div className="bz-inner">

        {/* Left - text */}
        <div className="bz-left"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(-28px)', transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s' }}>
          <h2 className="bz-title">Tvoj Identitet.<br /><span style={{ color: '#a9875c' }}>Tvoja Pravila.</span></h2>

          <div className="bz-paras">
            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="bz-para">{p}</p>
            ))}
          </div>

          {/* Shield pills */}
          <div className="bz-shields">
            {SHIELDS.map((s, i) => (
              <span key={i} className="bz-shield">{ShieldIcons[s.icon]}{s.text}</span>
            ))}
          </div>
        </div>

        {/* Right - stats + decorative panel */}
        <div className="bz-right"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(28px)', transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s' }}>

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
                <div key={i} className="bz-stat-item"
                  style={{ opacity: vis ? 1 : 0, transition: `opacity 0.8s ease ${0.6 + i * 0.18}s` }}>
                  <div className="bz-stat-num">{s.num}</div>
                  <div className="bz-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bz-bar-wrap">
              {['Geo-blok', 'Anonimnost', 'DMCA', 'Pristup'].map((l, i) => (
                <div key={i} className="bz-bar-row">
                  <span className="bz-bar-lbl">{l}</span>
                  <div className="bz-bar-track">
                    <div className="bz-bar-fill"
                      style={{ width: vis ? ['100%','97%','100%','100%'][i] : '0%', transition: `width 1.2s ease ${0.8 + i * 0.15}s` }} />
                  </div>
                  <span className="bz-bar-val">{['100%','97%','100%','100%'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bz-section {
          padding: 96px 0;
          background: #fafaf8;
        }
        @media (max-width: 640px) { .bz-section { padding: 48px 0; } }
        .bz-top-label {
          text-align: center;
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px 8px;
        }
        .bz-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
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
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-style: italic;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 12px 0 28px;
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
        .bz-panel-top {
          display: flex; align-items: center; gap: 6px; margin-bottom: 24px;
        }
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
        .bz-bar-fill { height: 100%; background: linear-gradient(90deg, #a9875c, #f7a8c9); border-radius: 999px; transition-timing-function: ease; }
        .bz-bar-val { font-size: 0.65rem; font-weight: 700; color: #a9875c; width: 32px; text-align: right; flex-shrink: 0; }
      `}</style>
    </section>
  );
}
