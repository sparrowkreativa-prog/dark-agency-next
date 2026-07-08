'use client';
import { useEffect, useRef, useState } from 'react';

const crmMonths = [6.0, 10.2, 14.4, 23.8, 31.1, 36.5, 40.8, 44.5, 47.9, 50];

function buildPath(pts, W = 300, H = 56, pad = 6) {
  const max = Math.max(...pts), min = Math.min(...pts);
  const coords = pts.map((v, i) => {
    const x = pad + (i / (pts.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    return [x, y];
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const fill = `${line} L${coords[coords.length-1][0].toFixed(1)},${H-pad} L${pad},${H-pad} Z`;
  return { line, fill };
}

function CrmCard({ animate }) {
  const { line, fill } = buildPath(crmMonths);
  return (
    <div className="sh-crm-card">
      <div className="sh-crm-live">
        <span className="sh-crm-dot" />
        <span className="sh-crm-live-label">Velluto Nero CRM · live</span>
      </div>
      <div className="sh-crm-period">Ovog meseca</div>
      <div className="sh-crm-amount"
        style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.9s ease 1.6s' }}>
        $378,765
      </div>
      <svg viewBox="0 0 300 56" preserveAspectRatio="none" style={{ width: '100%', height: 56 }}>
        <defs>
          <linearGradient id="crm_fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a9875c" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a9875c" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[14, 28, 42].map(y => (
          <line key={y} x1="6" x2="294" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        ))}
        <path d={fill} fill="url(#crm_fill)"
          style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.8s ease 1.4s' }} />
        <path d={line} fill="none" stroke="#a9875c" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          pathLength="1" strokeDasharray="1 1"
          strokeDashoffset={animate ? 0 : 1}
          style={{
            transition: animate ? 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.8s' : 'none',
            filter: 'drop-shadow(0 0 5px rgba(169,135,92,0.5))',
          }} />
      </svg>
    </div>
  );
}

const stats = [
  { num: '7 cifara', label: 'kreatorskog prihoda godišnje' },
  { num: '50+',     label: 'sadržaja nedeljno' },
  { num: '12',      label: 'zemalja u kojima radimo' },
  { num: '14 dana', label: 'da stranica krene od nule' },
];

export default function SplitHero() {
  const imgRef = useRef(null);
  const statsRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [statsAnimate, setStatsAnimate] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setAnimate(true); io.disconnect(); }
      }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setStatsAnimate(true); io.disconnect(); }
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <section className="sh-section">
      <div className="sh-top-label">
        <span className="chapter-label">Primamo Nove Kreatorke</span>
      </div>

      <div className="sh-inner">
        {/* Left column */}
        <div className="sh-left">
          <h2 className="sh-headline">
            <em style={{ color: '#1a1a1a' }}>Rasti na OnlyFans-u</em>{' '}
            <em className="sh-headline-em">Uz Sistem Koji Već Radi.</em>
          </h2>

          <p className="sh-body">
            Bez eksperimenata. Bez nagađanja. Bez nestajanja. Svaki dan vodimo naloge u 0,01% — na sopstvenom CRM-u, sopstvenoj phone farm i s chat timom koji igra na duge staze. Ti daješ sadržaj, mi mašinu.
          </p>

          <div className="sh-ctas">
            <a href="#apply" className="btn-primary btn-large">
              Prijavi se za 60 sekundi <span className="btn-arrow">→</span>
            </a>
            <a href="#roster" className="sh-ghost-btn">
              Pogledaj kako radi
            </a>
          </div>

          <div className="sh-trust">
            {['€0 unapred', 'Zadržavaš većinu', 'Otkaži kad želiš'].map(t => (
              <div key={t} className="sh-trust-item">
                <span className="sh-trust-diamond">◆</span>
                <span className="sh-trust-text">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — photo + floating cards */}
        <div className="sh-right" ref={imgRef}>
          {/* Glow blob */}
          <div className="sh-glow" />

          {/* Video */}
          <div className="sh-photo-wrap">
            <video
              src="/rasti-na-of.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom', display: 'block' }}
            />
          </div>

          {/* CRM card — bottom left */}
          <CrmCard animate={animate} />

          {/* Top 0.2% badge — top right */}
          <div className="sh-badge-top"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0) rotate(-6deg)' : 'translateY(-12px) rotate(-6deg)',
              transition: 'opacity 0.8s ease 1.4s, transform 0.8s ease 1.4s',
            }}>
            <span className="sh-badge-top-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M5 20V10l7-7 7 7v10"/><path d="M9 20v-5h6v5"/></svg>
            </span>
            <div>
              <div className="sh-badge-top-sub">Percentil rostera</div>
              <div className="sh-badge-top-main">Top 0.2%</div>
            </div>
          </div>

          {/* 8.2× pill — middle right */}
          <div className="sh-trend-pill"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.8s ease 1.9s, transform 0.8s ease 1.9s',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
            </svg>
            <span className="sh-trend-num">8,2×</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="sh-stats-row" ref={statsRef}>
        <div>
          {stats.map((s, i) => (
            <div key={i} className="sh-stat-card"
              style={{
                opacity: statsAnimate ? 1 : 0,
                transform: statsAnimate ? 'none' : 'translateY(20px)',
                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
              }}>
              <div className="sh-stat-num">{s.num}</div>
              <div className="sh-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sh-section { padding: 20px 0 64px; }
        .sh-top-label { text-align: center; margin-bottom: 24px; }
        .sh-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
        @media (max-width: 900px) { .sh-inner { grid-template-columns: 1fr; gap: 40px; } .sh-left { text-align: center; } .sh-ctas { justify-content: center; } .sh-trust { justify-content: center; } .sh-body { margin-left: auto; margin-right: auto; } .sh-badge { display: inline-flex; } }

        /* Left */
        .sh-badge { display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; font-weight: 700; color: #c43a7a; background: #fdf0f6; border: 1px solid #f8d0e8; border-radius: 999px; padding: 6px 14px; margin-bottom: 20px; }
        .sh-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; flex-shrink: 0; }
        .sh-headline { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.1; color: #1a1a1a; margin: 0 0 20px; }
        .sh-headline-em { font-style: italic; color: #a9875c; display: block; }
        .sh-body { font-size: 1rem; color: #555; line-height: 1.75; max-width: 480px; margin: 0 0 28px; }
        .sh-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }
        .sh-ghost-btn { display: inline-flex; align-items: center; gap: 6px; padding: 13px 24px; border-radius: 999px; font-size: 0.95rem; font-weight: 600; color: #a9875c; border: 1.5px solid #a9875c; background: transparent; text-decoration: none; transition: background 0.2s, color 0.2s; }
        .sh-ghost-btn:hover { background: #a9875c; color: #fff; }
        .sh-trust { display: flex; flex-direction: column; gap: 10px; }
        .sh-trust-item {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 18px;
          border-left: 3px solid #911f39;
          background: rgba(145,31,57,0.05);
          border-radius: 0 10px 10px 0;
        }
        .sh-trust-diamond { color: #a9875c; font-size: 0.6rem; flex-shrink: 0; }
        .sh-trust-text { font-size: 1rem; font-weight: 700; color: #911f39; letter-spacing: 0.01em; }
        @media (max-width: 900px) { .sh-trust { align-items: center; } .sh-trust-item { width: 100%; max-width: 320px; border-radius: 0 10px 10px 0; } }

        /* Right */
        .sh-right { position: relative; }
        .sh-glow { position: absolute; inset: -24px; background: rgba(169,135,92,0.15); filter: blur(60px); border-radius: 3rem; pointer-events: none; }
        .sh-photo-wrap { position: relative; aspect-ratio: 4/5; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        @media (max-width: 900px) { .sh-photo-wrap { max-width: 420px; margin: 0 auto; } }

        /* CRM card */
        .sh-crm-card { position: absolute; bottom: -20px; left: -28px; width: 220px; background: #fff; border-radius: 16px; padding: 14px 16px 10px; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
        @media (max-width: 560px) { .sh-crm-card { left: -8px; width: 180px; } }
        .sh-crm-live { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
        .sh-crm-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; flex-shrink: 0; }
        .sh-crm-live-label { font-size: 0.65rem; font-weight: 700; color: #333; letter-spacing: 0.04em; }
        .sh-crm-period { font-size: 0.65rem; color: #aaa; margin-bottom: 2px; }
        .sh-crm-amount { font-family: var(--font-display); font-size: 1.5rem; color: #1a1a1a; line-height: 1.1; margin-bottom: 4px; }

        /* Top badge */
        .sh-badge-top { position: absolute; top: -12px; right: -8px; background: #a9875c; border-radius: 14px; padding: 8px 14px; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 20px rgba(169,135,92,0.4); }
        @media (max-width: 900px) { .sh-badge-top { right: 8px; } }
        .sh-badge-top-icon { font-size: 1.2rem; }
        .sh-badge-top-sub { font-size: 0.6rem; color: rgba(255,255,255,0.8); line-height: 1; }
        .sh-badge-top-main { font-size: 0.85rem; font-weight: 800; color: #fff; }

        /* Trend pill */
        .sh-trend-pill { position: absolute; top: 50%; right: -20px; transform: translateY(-50%); background: #fff; border-radius: 12px; padding: 8px 14px; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        @media (max-width: 900px) { .sh-trend-pill { right: -8px; } }
        .sh-trend-num { font-size: 0.95rem; font-weight: 800; color: #1a1a1a; }

        /* Stats row */
        .sh-stats-row { max-width: 1200px; margin: 48px auto 0; padding: 0 24px; }
        .sh-stats-row > div {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid rgba(169,135,92,0.15);
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 40px rgba(0,0,0,0.07);
        }
        @media (max-width: 700px) { .sh-stats-row > div { grid-template-columns: repeat(2, 1fr); } }
        .sh-stat-card { padding: 36px 28px; text-align: center; border-right: 1px solid rgba(169,135,92,0.12); position: relative; }
        .sh-stat-card:last-child { border-right: none; }
        @media (max-width: 700px) {
          .sh-stat-card { border-bottom: 1px solid rgba(169,135,92,0.12); }
          .sh-stat-card:nth-child(2n) { border-right: none; }
          .sh-stat-card:nth-last-child(-n+2) { border-bottom: none; }
        }
        .sh-stat-num { font-family: var(--font-display); font-size: clamp(1.6rem, 2.5vw, 2.4rem); font-style: italic; color: #a9875c; line-height: 1.1; margin-bottom: 10px; letter-spacing: -0.01em; }
        .sh-stat-label { margin-top: 6px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--color-text-muted); line-height: 1.4; }
      `}</style>
    </section>
  );
}
