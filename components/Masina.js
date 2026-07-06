'use client';
import { useEffect, useRef, useState } from 'react';

/* ── shared sparkline data ── */
const rosterRevPts  = "6,144 38,134 70,137 102,121 134,108 166,111 198,85 230,62 262,32 294,6";
const creatorsData  = [
  { init: 'AR', pts: "0,26 24,22 48,24 72,17 96,9 120,0",   pct: '+312%' },
  { init: 'MK', pts: "0,26 24,24 48,19 72,20 96,11 120,0",  pct: '+188%' },
  { init: 'SD', pts: "0,26 24,23 48,19 72,15 96,11 120,0",  pct: '+241%' },
];
const liveRevPts    = "6,144 38,134 70,137 102,121 134,108 166,111 198,85 230,62 262,32 294,6";

/* phone farm — 10 devices, indices that have green dot (6 live) */
const activeDots = new Set([0, 2, 3, 5, 7, 9]);

function useFadeIn(threshold = 0.2) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ── CRM panel ── */
function CrmPanel({ vis }) {
  return (
    <div className="m-panel" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s' }}>
      {/* title bar */}
      <div className="m-panel-bar">
        <span className="m-dots"><span style={{background:'#ff5f57'}}/><span style={{background:'#febc2e'}}/><span style={{background:'#28c840'}}/></span>
        <span className="m-panel-title">Velluto Nero CRM</span>
        <span className="m-live-pill"><span className="m-live-dot"/>live</span>
      </div>

      {/* 3 metrics */}
      <div className="m-metrics3">
        <div className="m-metric-chip"><div className="m-chip-label">Revenue</div><div className="m-chip-val">€612K</div></div>
        <div className="m-metric-chip"><div className="m-chip-label">Kreatorke</div><div className="m-chip-val">340</div></div>
        <div className="m-metric-chip"><div className="m-chip-label">Danas</div><div className="m-chip-val">+18</div></div>
      </div>

      {/* Roster revenue row */}
      <div className="m-rev-row">
        <div>
          <div className="m-rev-label">Roster prihod</div>
          <div className="m-rev-val">€182,400</div>
        </div>
        <svg viewBox="0 0 120 26" className="m-sparkline" preserveAspectRatio="none">
          <polyline points={rosterRevPts} fill="none" stroke="rgba(232,83,143,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            pathLength="1" strokeDasharray="1 1"
            strokeDashoffset={vis ? 0 : 1}
            style={{ transition: vis ? 'stroke-dashoffset 2.4s ease 0.8s' : 'none' }} />
        </svg>
      </div>

      {/* Creator rows */}
      <div className="m-creator-list">
        {creatorsData.map((c, i) => (
          <div key={c.init} className="m-creator-row" style={{ opacity: vis ? 1 : 0, transition: `opacity 0.9s ease ${1.0 + i * 0.2}s` }}>
            <span className="m-avatar">{c.init}</span>
            <svg viewBox="0 0 120 26" className="m-creator-spark" preserveAspectRatio="none">
              <polyline points={c.pts} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                pathLength="1" strokeDasharray="1 1"
                strokeDashoffset={vis ? 0 : 1}
                style={{ transition: vis ? `stroke-dashoffset 1s ease ${0.5 + i * 0.15}s` : 'none' }} />
            </svg>
            <span className="m-pct">{c.pct}</span>
          </div>
        ))}
      </div>

      <div className="m-panel-foot">Custom CRM · svaka kreatorka, nalog i čet na jednom mestu</div>
    </div>
  );
}

/* ── Phone farm panel ── */
function PhoneFarmPanel({ vis }) {
  return (
    <div className="m-panel" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s' }}>
      <div className="m-panel-bar" style={{ marginBottom: 16 }}>
        <span className="m-panel-title">Phone farm</span>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)' }}>10+ uređaja / kreatorka</span>
      </div>
      <div className="m-phone-grid">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="m-phone">
            <div className="m-phone-screen">
              {/* Instagram dummy UI */}
              <div className="m-ig-top">
                <div className="m-ig-avatar" />
                <div className="m-ig-name" />
              </div>
              <div className="m-ig-img" style={{ background: `hsl(${(i * 37 + 10) % 360},35%,22%)` }} />
              <div className="m-ig-actions">
                <div className="m-ig-act-dot" /><div className="m-ig-act-dot" /><div className="m-ig-act-dot" />
              </div>
              <div className="m-ig-likes" />
              <div className="m-ig-caption" />
            </div>
            {activeDots.has(i) && <span className="m-phone-dot" style={{ animationDelay: `${i * 0.4}s` }} />}
          </div>
        ))}
      </div>
      <div className="m-farm-status">
        <span className="m-farm-active"><span className="m-farm-dot"/>posting</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
        <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem' }}>1 Instagram profil = 1 telefon</span>
      </div>
      <div className="m-panel-foot">Phone farm · zagrevanje i objave na svim nalozima 24/7</div>
    </div>
  );
}

/* ── Live revenue chart ── */
function LiveRevPanel({ vis }) {
  return (
    <div className="m-panel" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 1s ease 0.7s, transform 1s ease 0.7s', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>Live prihod</span>
        <span className="m-live-pill"><span className="m-live-dot"/>realtime</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: 16 }}>
        <svg viewBox="0 0 300 150" preserveAspectRatio="none" style={{ width: '100%', height: 150 }}>
          <defs>
            <linearGradient id="m_live_fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8538f" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e8538f" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[37.5, 75, 112.5].map(y => (
            <line key={y} x1="6" x2="294" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
          ))}
          <path d={`M${liveRevPts.split(' ').map(p => p).join(' L')} L294,144 L6,144 Z`}
            fill="url(#m_live_fill)"
            style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.9s ease 1.2s' }} />
          <polyline points={liveRevPts} fill="none" stroke="#e8538f" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            pathLength="1" strokeDasharray="1 1"
            strokeDashoffset={vis ? 0 : 1}
            style={{ transition: vis ? 'stroke-dashoffset 2.6s ease 0.8s' : 'none', filter: 'drop-shadow(0 0 6px rgba(232,83,143,0.5))' }} />
          {vis && <circle cx="294" cy="6" r="4" fill="#e8538f" stroke="#fff" strokeWidth="1.5"
            style={{ animation: 'roster-dot-in .3s ease 1.5s both' }} />}
        </svg>
      </div>
      <div className="m-metrics3" style={{ marginTop: 12 }}>
        <div className="m-metric-chip"><div className="m-chip-label">MRR</div><div className="m-chip-val">$612K</div></div>
        <div className="m-metric-chip"><div className="m-chip-label">Retencija</div><div className="m-chip-val">97%</div></div>
        <div className="m-metric-chip"><div className="m-chip-label">Nalozi</div><div className="m-chip-val">340+</div></div>
      </div>
    </div>
  );
}

/* ── Feature cards ── */
const features = [
  { icon: '🗄️', title: 'Sopstveni CRM',         desc: 'Svaka kreatorka, nalog, objava i razgovor — sve u jednom dashboardu koji smo sami napravili.' },
  { icon: '📱', title: 'Phone farm',              desc: 'Farma uređaja koja zagreva naloge i objavljuje na svim platformama 24/7.' },
  { icon: '📲', title: 'Aplikacija za kreatorke', desc: 'Liste za snimanje, dnevni zadaci, vodiči i upload u džepu. Uvek znaš tačno šta da snimaš.' },
  { icon: '📈', title: 'Analitika uživo',         desc: 'Prihod, retencija i podaci o levku u realnom vremenu — odluke na osnovu brojki, ne osećaja.' },
];

export default function Masina() {
  const [secRef, vis] = useFadeIn(0.15);

  return (
    <section id="masina" className="m-section" ref={secRef}>
      {/* Pink glow blob */}
      <div className="m-glow" />

      <div className="m-wrap">
        {/* Header */}
        <div className="m-header" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 1s ease, transform 1s ease' }}>
          <div className="chapter-label" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Mašina</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Nismo kupili softver. Sami smo ga napravili.
          </h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Većina agencija vodi tvoju stranicu s telefonom i tabelom. Mi tvoju vodimo na infrastrukturi koju smo sami napravili — pa ništa ne promakne i sve skalira.
          </p>
        </div>

        {/* Top row: CRM + Phone farm */}
        <div className="m-grid-top">
          <CrmPanel vis={vis} />
          <PhoneFarmPanel vis={vis} />
        </div>

        {/* Bottom row: Live chart + Feature cards */}
        <div className="m-grid-bot">
          <LiveRevPanel vis={vis} />
          <div className="m-feature-grid">
            {features.map((f, i) => (
              <div key={i} className="m-feature-card"
                style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: `opacity 0.9s ease ${1.0 + i * 0.15}s, transform 0.9s ease ${1.0 + i * 0.15}s` }}>
                <div className="m-feature-icon">{f.icon}</div>
                <h3 className="m-feature-title">{f.title}</h3>
                <p className="m-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .m-section { position: relative; background: #e8538f; color: #fff; overflow: hidden; padding: 80px 0 88px; }
        .m-glow { position: absolute; top: 0; right: 0; width: 40rem; height: 40rem; background: rgba(255,255,255,0.12); filter: blur(120px); border-radius: 50%; pointer-events: none; }
        .m-wrap { position: relative; max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* Header — centered */
        .m-header { margin-bottom: 40px; text-align: center; }
        .m-header .section-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); }
        .m-header .section-sub { margin-left: auto; margin-right: auto; }

        /* Grids */
        .m-grid-top { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .m-grid-bot { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 20px; align-items: stretch; }
        @media (max-width: 860px) { .m-grid-top, .m-grid-bot { grid-template-columns: 1fr; } }

        /* Panel */
        .m-panel { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 18px; backdrop-filter: blur(8px); }
        .m-panel-bar { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
        .m-dots { display: flex; gap: 4px; }
        .m-dots span { width: 10px; height: 10px; border-radius: 50%; display: block; }
        .m-panel-title { font-size: 0.72rem; font-weight: 700; color: #fff; flex: 1; }
        .m-live-pill { display: inline-flex; align-items: center; gap: 5px; font-size: 0.65rem; color: #22c55e; }
        .m-live-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; flex-shrink: 0; }
        .m-panel-foot { font-size: 0.72rem; color: rgba(255,255,255,0.5); margin-top: 14px; }

        /* Metrics chips */
        .m-metrics3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 12px; }
        .m-metric-chip { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 8px 10px; }
        .m-chip-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.45); }
        .m-chip-val { font-size: 0.9rem; font-weight: 700; color: #fff; margin-top: 2px; }

        /* Revenue row */
        .m-rev-row { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
        .m-rev-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.45); }
        .m-rev-val { font-size: 1rem; font-weight: 700; color: #fff; }
        .m-sparkline { height: 26px; flex: 1; max-width: 120px; color: rgba(232,83,143,0.7); }

        /* Creator list */
        .m-creator-list { display: flex; flex-direction: column; gap: 7px; }
        .m-creator-row { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 7px 12px; }
        .m-avatar { width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg,#f7a8c9,#e8538f); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; color: #fff; flex-shrink: 0; }
        .m-creator-spark { height: 26px; flex: 1; color: rgba(255,255,255,0.6); }
        .m-pct { font-size: 0.72rem; font-weight: 700; color: #4ade80; margin-left: auto; white-space: nowrap; }

        /* Phone farm */
        .m-phone-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 10px; flex: 1; align-content: center; margin-bottom: 16px; }
        .m-phone { position: relative; aspect-ratio: 9/19; border-radius: 7px; background: #0a1020; border: 1px solid rgba(255,255,255,0.15); padding: 3px; }
        .m-phone-screen { height: 100%; width: 100%; border-radius: 5px; background: #0d0d0d; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        /* instagram dummy */
        .m-ig-top { display: flex; align-items: center; gap: 3px; padding: 3px 3px 2px; flex-shrink: 0; }
        .m-ig-avatar { width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg,#f09433,#e8538f,#bc1888); flex-shrink: 0; }
        .m-ig-name { height: 3px; width: 28px; border-radius: 2px; background: rgba(255,255,255,0.3); }
        .m-ig-img { flex: 1; min-height: 0; }
        .m-ig-actions { display: flex; gap: 3px; padding: 2px 3px 1px; flex-shrink: 0; }
        .m-ig-act-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.25); }
        .m-ig-likes { height: 2.5px; width: 24px; margin: 0 3px 2px; border-radius: 2px; background: rgba(255,255,255,0.2); }
        .m-ig-caption { height: 2px; width: 80%; margin: 0 3px 3px; border-radius: 2px; background: rgba(255,255,255,0.12); }
        /* live dot — pulse ring animation */
        .m-phone-dot {
          position: absolute; top: -4px; right: -4px;
          width: 9px; height: 9px; border-radius: 50%;
          background: #22c55e; border: 1.5px solid #1a1a2e;
          animation: phone-dot-pulse 2s ease-in-out infinite;
        }
        @keyframes phone-dot-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
          50%  { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .m-farm-status { display: flex; align-items: center; gap: 10px; font-size: 0.7rem; }
        .m-farm-active { display: inline-flex; align-items: center; gap: 5px; color: #22c55e; }
        .m-farm-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; }

        /* Feature cards */
        .m-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 560px) { .m-feature-grid { grid-template-columns: 1fr; } }
        .m-feature-card { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 22px; transition: border-color .2s; }
        .m-feature-card:hover { border-color: rgba(255,255,255,0.3); }
        .m-feature-icon { font-size: 1.5rem; margin-bottom: 12px; }
        .m-feature-title { font-size: 1rem; font-weight: 700; font-style: italic; color: #fff; margin-bottom: 7px; }
        .m-feature-desc { font-size: 0.82rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0; }
      `}</style>
    </section>
  );
}
