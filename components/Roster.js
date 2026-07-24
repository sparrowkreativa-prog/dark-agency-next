'use client';
import { useEffect, useRef, useState } from 'react';
import SectionFade from './SectionFade';

/* ── chart helpers ── */
function buildPath(months, W = 300, H = 90, pad = 6) {
  const max = Math.max(...months), min = 0;
  const pts = months.map((v, i) => {
    const x = pad + (i / (months.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const fill = `${line} L${pts[pts.length-1][0].toFixed(1)},${H-pad} L${pad},${H-pad} Z`;
  return { line, fill, pts };
}

let _chartId = 0;
function MiniChart({ months, animate, H = 90 }) {
  const W = 300;
  const id = useRef(`rc_${++_chartId}`).current;
  const { line, fill } = buildPath(months, W, H);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: H }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a9875c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a9875c" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[H*0.25, H*0.5, H*0.75].map(y => (
        <line key={y} x1="6" x2={W-6} y1={y} y2={y} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      ))}
      <path d={fill} fill={`url(#${id})`}
        style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.9s ease 0.8s' }} />
      <path d={line} fill="none" stroke="#a9875c" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        pathLength="1" strokeDasharray="1 1"
        strokeDashoffset={animate ? 0 : 1}
        style={{
          transition: animate ? 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.3s' : 'none',
          filter: 'drop-shadow(0 0 6px rgba(169,135,92,0.45))',
        }} />
    </svg>
  );
}

/* ── top 3 revenue cards ── */
const TOP_CASES = [
  { duration: 'za 6 meseci',  niche: 'Lifestyle', before: '$0',   after: '$84K',  months: [0, 4, 9, 18, 38, 68, 84] },
  { duration: 'za 9 meseci',  niche: 'Fitnes',    before: '$12K', after: '$210K', months: [12, 28, 45, 80, 120, 165, 195, 210] },
  { duration: 'za 5 meseci',  niche: 'Glamur',    before: '$3K',  after: '$128K', months: [3, 12, 35, 68, 110, 128] },
];

/* ── carousel slides ── */
const SLIDES = [
  { platform: 'Instagram', metric: '0 → 214K',    unit: 'pratilaca', period: 'za 3 meseca',  months: [0, 5, 15, 35, 80, 145, 190, 214] },
  { platform: 'OnlyFans',  metric: '$0 → $161K',  unit: 'mesečno',   period: 'za 3 meseca',  months: [0, 12, 28, 45, 72, 110, 145, 161] },
  { platform: 'OnlyFans',  metric: '$12K → $254K', unit: 'mesečno',  period: 'za 12 meseci', months: [12, 28, 45, 75, 110, 155, 200, 230, 245, 254] },
  { platform: 'Instagram', metric: '0 → 89K',     unit: 'pratilaca', period: 'za 2 meseca',  months: [0, 8, 22, 45, 68, 89] },
  { platform: 'OnlyFans',  metric: '$3K → $65K',  unit: 'mesečno',   period: 'za 4 meseca',  months: [3, 12, 28, 45, 55, 65] },
  { platform: 'OnlyFans',  metric: '$0 → $84K',   unit: 'mesečno',   period: 'za 6 meseci',  months: [0, 8, 22, 40, 58, 72, 84] },
];

const IgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const OfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

function RevenueCard({ c, animate, index }) {
  return (
    <div className="rc-card" style={{
      opacity: animate ? 1 : 0,
      transform: animate ? 'none' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${0.1 + index * 0.12}s, transform 0.7s ease ${0.1 + index * 0.12}s`,
    }}>
      <div className="rc-card-top">
        <span className="rc-duration">{c.duration}</span>
        <span className="rc-niche">{c.niche}</span>
      </div>
      <div className="rc-revenue">
        <span className="rc-before">{c.before}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a9875c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginBottom: 4 }}>
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
        <span className="rc-after">{c.after}</span>
        <span className="rc-mo">/mes</span>
      </div>
      <div className="rc-chart">
        <MiniChart months={c.months} animate={animate} H={55} />
      </div>
    </div>
  );
}

function Carousel({ animate }) {
  const [active, setActive] = useState(5);
  const [animKey, setAnimKey] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (newIndex) => {
    setDir(newIndex > active ? 1 : -1);
    setActive(newIndex);
    setAnimKey(k => k + 1);
  };
  const prev = () => go((active - 1 + SLIDES.length) % SLIDES.length);
  const next = () => go((active + 1) % SLIDES.length);
  const s = SLIDES[active];

  return (
    <div className="rc-carousel" style={{
      opacity: animate ? 1 : 0,
      transform: animate ? 'none' : 'translateY(24px)',
      transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
    }}>
      <div className="rc-slide" key={animKey} style={{ animation: `rc-slide-in-${dir > 0 ? 'right' : 'left'} 0.38s cubic-bezier(0.22,1,0.36,1) both` }}>
        <div className="rc-slide-left">
          <span className="rc-platform-tag">
            {s.platform === 'Instagram' ? <IgIcon /> : <OfIcon />}
            {s.platform}
          </span>
          <div className="rc-slide-metric">{s.metric}</div>
          <div className="rc-slide-unit">{s.unit}</div>
          <div className="rc-slide-period">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
            </svg>
            {s.period}
          </div>
        </div>
        <div className="rc-slide-right">
          <MiniChart months={s.months} animate={animate} H={150} />
        </div>
      </div>

      <button className="rc-nav rc-nav--prev" onClick={prev} aria-label="Prethodni">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button className="rc-nav rc-nav--next" onClick={next} aria-label="Sledeći">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      <div className="rc-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`rc-dot${i === active ? ' rc-dot--active' : ''}`}
            onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

function RosterVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.muted = true;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="rc-video"
    >
      <source src="/cica_brod.mp4" type="video/mp4" />
    </video>
  );
}

export default function Roster() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setAnimate(true); io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <SectionFade id="roster">
      <section className="rc-section" ref={ref}>
        <div className="container">
          <div className="section-header" style={{ maxWidth: 640, margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="chapter-label">Roster</span>
            <h2 className="section-title">Tihi Luksuz.<br /><span style={{ color: '#a9875c' }}>Glasni Rezultati.</span></h2>
            <p className="section-sub">Stvarne krive rasta sa našeg rostera (anonimizovano). Provereno, ne izmišljeno.</p>
          </div>

          {/* Video + cards layout */}
          <div className="rc-main-layout" style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="rc-video-col">
              <RosterVideo />
            </div>
            <div className="rc-cards-col">
              <div className="rc-cards-box">
                <div className="rc-grid">
                  {TOP_CASES.map((c, i) => (
                    <RevenueCard key={i} c={c} animate={animate} index={i} />
                  ))}
                </div>
                <div className="rc-carousel-wrap">
                  <Carousel animate={animate} />
                </div>
              </div>
            </div>
          </div>

          <p className="rc-disclaimer">Zarada nije zagarantovana i varira prema trudu, niši i početnoj publici. Zato smo selektivni.</p>
        </div>
      </section>

      <style>{`
        .rc-section { padding: 96px 0; background: #fafaf8; }
        @media (max-width: 640px) { .rc-section { padding: 48px 0; } }

        /* Main two-column layout */
        .rc-main-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 28px;
          align-items: stretch;
        }
        @media (max-width: 860px) {
          .rc-main-layout { grid-template-columns: 1fr; align-items: start; }
          .rc-video-col { order: -1; }
        }

        /* Video col stretches full height */
        .rc-video-col {
          display: flex;
          flex-direction: column;
        }

        /* Video fills entire col height */
        .rc-video {
          flex: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
          background: #000;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08);
          display: block;
          min-height: 0;
        }
        @media (max-width: 860px) {
          .rc-video { height: auto; max-height: 480px; }
        }

        /* Cards column wrapper */
        .rc-cards-col { min-width: 0; display: flex; flex-direction: column; }
        .rc-cards-box {
          flex: 1;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        /* cards stacked vertically */
        .rc-grid { display: grid; grid-template-columns: 1fr; gap: 8px; }

        .rc-card {
          background: #fafaf8; border: 1px solid rgba(0,0,0,0.07);
          border-radius: 12px; padding: 12px 14px;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .rc-card:hover { box-shadow: 0 4px 16px rgba(169,135,92,0.1); border-color: rgba(169,135,92,0.2); }

        .rc-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
        .rc-duration { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #aaa; }
        .rc-niche { font-size: 0.6rem; font-weight: 700; color: #a9875c; background: rgba(169,135,92,0.08); border: 1px solid rgba(169,135,92,0.25); border-radius: 999px; padding: 2px 7px; }

        .rc-revenue { display: flex; align-items: flex-end; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
        .rc-before { font-family: var(--font-display); font-size: 0.95rem; font-style: italic; color: #bbb; text-decoration: line-through; text-decoration-thickness: 1px; }
        .rc-after { font-family: var(--font-display); font-size: 1.45rem; font-style: italic; color: #a9875c; line-height: 1; }
        .rc-mo { font-size: 0.68rem; color: #aaa; margin-bottom: 2px; }
        .rc-chart { color: #a9875c; }

        .rc-carousel-wrap { margin-top: 8px; flex: 1; }
        .rc-carousel {
          position: relative; background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.07); border-radius: 12px;
          padding: 18px 48px; overflow: hidden;
        }
        @media (max-width: 600px) { .rc-carousel { padding: 16px 40px; } }

        .rc-slide { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; }
        @media (max-width: 500px) { .rc-slide { grid-template-columns: 1fr; } }

        .rc-platform-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.68rem; font-weight: 700; color: #a9875c;
          background: rgba(169,135,92,0.08); border: 1px solid rgba(169,135,92,0.25);
          border-radius: 999px; padding: 3px 10px; margin-bottom: 12px;
        }
        .rc-slide-metric {
          font-family: var(--font-display); font-size: clamp(1.4rem, 3vw, 2rem);
          font-style: italic; color: #a9875c; line-height: 1; margin-bottom: 4px;
        }
        .rc-slide-unit { font-size: 0.82rem; color: #888; margin-bottom: 10px; }
        .rc-slide-period { display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 700; color: #22c55e; }
        .rc-slide-right { color: #a9875c; }

        .rc-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 32px; height: 32px; border-radius: 50%;
          background: #fff; border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          display: flex; align-items: center; justify-content: center;
          color: #888; cursor: pointer; transition: color 0.2s, border-color 0.2s;
        }
        .rc-nav:hover { color: #a9875c; border-color: #a9875c; }
        .rc-nav--prev { left: 8px; }
        .rc-nav--next { right: 8px; }

        .rc-dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
        .rc-dot {
          height: 7px; border-radius: 999px; border: none; cursor: pointer;
          background: rgba(169,135,92,0.2); width: 7px;
          transition: width 0.3s, background 0.3s; padding: 0;
        }
        .rc-dot--active { width: 20px; background: #a9875c; }

        @keyframes rc-slide-in-right {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes rc-slide-in-left {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .rc-disclaimer {
          font-size: 0.72rem; color: #aaa; margin-top: 28px;
          text-align: center; max-width: 100%;
        }
      `}</style>
    </SectionFade>
  );
}
