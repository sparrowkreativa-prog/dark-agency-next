'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const crmMonths = [50, 46.9, 47.9, 42.7, 38.5, 39.5, 31.1, 23.8, 14.4, 6.0];

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
        <span className="sh-crm-live-label">Blossom CRM · live</span>
      </div>
      <div className="sh-crm-period">Ovog meseca</div>
      <div className="sh-crm-amount"
        style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.6s ease 0.8s' }}>
        $182,400
      </div>
      <svg viewBox="0 0 300 56" preserveAspectRatio="none" style={{ width: '100%', height: 56 }}>
        <defs>
          <linearGradient id="crm_fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8538f" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e8538f" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[14, 28, 42].map(y => (
          <line key={y} x1="6" x2="294" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        ))}
        <path d={fill} fill="url(#crm_fill)"
          style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.5s ease 0.5s' }} />
        <path d={line} fill="none" stroke="#e8538f" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          pathLength="1" strokeDasharray="1 1"
          strokeDashoffset={animate ? 0 : 1}
          style={{
            transition: animate ? 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s' : 'none',
            filter: 'drop-shadow(0 0 5px rgba(232,83,143,0.5))',
          }} />
      </svg>
    </div>
  );
}

const stats = [
  { num: '7 cifara', label: 'kreatorskog prihoda godišnje' },
  { num: '50+',     label: 'sadržaja nedeljno' },
  { num: '12',      label: 'zemalja u kojima radimo' },
  { num: '90 dana', label: 'da stranica krene od nule' },
];

export default function SplitHero() {
  const imgRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimate(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sh-section">
      <div className="sh-inner">
        {/* Left column */}
        <div className="sh-left">
          <span className="sh-badge">
            <span className="sh-badge-dot" />
            Primamo nove kreatorke 🌸
          </span>

          <h2 className="sh-headline">
            Rasti na OnlyFans-u{' '}
            <em className="sh-headline-em">uz sistem koji već radi.</em>
          </h2>

          <p className="sh-body">
            Bez eksperimenata. Bez nagađanja. Bez nestajanja. Svaki dan vodimo naloge u 0,01% — na sopstvenom CRM-u, sopstvenoj phone farm i s chat timom koji igra na duge staze. Ti daješ sadržaj, mi mašinu. 💸
          </p>

          <div className="sh-ctas">
            <a href="#apply" className="btn-primary btn-large">
              Prijavi se za 60 sekundi <span className="btn-arrow">→</span>
            </a>
            <a href="#results" className="sh-ghost-btn">
              Pogledaj kako radi
            </a>
          </div>

          <div className="sh-trust">
            <span>✅ €0 unapred</span>
            <span>🔒 Zadržavaš većinu</span>
            <span>💸 Otkaži kad želiš</span>
          </div>
        </div>

        {/* Right column — photo + floating cards */}
        <div className="sh-right" ref={imgRef}>
          {/* Glow blob */}
          <div className="sh-glow" />

          {/* Photo */}
          <div className="sh-photo-wrap">
            <Image
              src="/split-hero.jpg"
              alt="Kreatorka"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>

          {/* CRM card — bottom left */}
          <CrmCard animate={animate} />

          {/* Top 0.2% badge — top right */}
          <div className="sh-badge-top"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0) rotate(-6deg)' : 'translateY(-12px) rotate(-6deg)',
              transition: 'opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s',
            }}>
            <span className="sh-badge-top-icon">👑</span>
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
              transition: 'opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
            </svg>
            <span className="sh-trend-num">8,2×</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="sh-stats-row">
        {stats.map((s, i) => (
          <div key={i} className="sh-stat-card"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? 'none' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
            }}>
            <div className="sh-stat-num">{s.num}</div>
            <div className="sh-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .sh-section { padding: 40px 0 64px; }
        .sh-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; }
        @media (max-width: 900px) { .sh-inner { grid-template-columns: 1fr; gap: 40px; } }

        /* Left */
        .sh-badge { display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; font-weight: 700; color: #c43a7a; background: #fdf0f6; border: 1px solid #f8d0e8; border-radius: 999px; padding: 6px 14px; margin-bottom: 20px; }
        .sh-badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; flex-shrink: 0; }
        .sh-headline { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.1; color: #1a1a1a; margin: 0 0 20px; }
        .sh-headline-em { font-style: italic; color: #e8538f; display: block; }
        .sh-body { font-size: 1rem; color: #555; line-height: 1.75; max-width: 480px; margin: 0 0 28px; }
        .sh-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }
        .sh-ghost-btn { display: inline-flex; align-items: center; gap: 6px; padding: 13px 24px; border-radius: 8px; font-size: 0.95rem; font-weight: 600; color: #555; border: 1.5px solid #ddd; background: transparent; text-decoration: none; transition: border-color 0.2s, color 0.2s; }
        .sh-ghost-btn:hover { border-color: #e8538f; color: #e8538f; }
        .sh-trust { display: flex; flex-wrap: wrap; gap: 16px; }
        .sh-trust span { font-size: 0.85rem; color: #666; display: flex; align-items: center; gap: 6px; }

        /* Right */
        .sh-right { position: relative; }
        .sh-glow { position: absolute; inset: -24px; background: rgba(232,83,143,0.15); filter: blur(60px); border-radius: 3rem; pointer-events: none; }
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
        .sh-badge-top { position: absolute; top: -12px; right: -8px; background: #e8538f; border-radius: 14px; padding: 8px 14px; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 20px rgba(232,83,143,0.4); }
        @media (max-width: 900px) { .sh-badge-top { right: 8px; } }
        .sh-badge-top-icon { font-size: 1.2rem; }
        .sh-badge-top-sub { font-size: 0.6rem; color: rgba(255,255,255,0.8); line-height: 1; }
        .sh-badge-top-main { font-size: 0.85rem; font-weight: 800; color: #fff; }

        /* Trend pill */
        .sh-trend-pill { position: absolute; top: 50%; right: -20px; transform: translateY(-50%); background: #fff; border-radius: 12px; padding: 8px 14px; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        @media (max-width: 900px) { .sh-trend-pill { right: -8px; } }
        .sh-trend-num { font-size: 0.95rem; font-weight: 800; color: #1a1a1a; }

        /* Stats row */
        .sh-stats-row { max-width: 1200px; margin: 48px auto 0; padding: 0 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 700px) { .sh-stats-row { grid-template-columns: repeat(2, 1fr); } }
        .sh-stat-card { background: #fff; border-radius: 14px; padding: 20px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .sh-stat-num { font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 1.9rem); font-style: italic; color: #e8538f; line-height: 1.1; }
        .sh-stat-label { font-size: 0.72rem; color: #888; margin-top: 6px; line-height: 1.4; }
      `}</style>
    </section>
  );
}
