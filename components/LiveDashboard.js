'use client';
import { useEffect, useRef, useState } from 'react';

const ACTIVITY_ITEMS = [
  'Vikend zarada gore za 34%',
  'Dnevni cilj prihoda premašen',
  'Subscription streak: 6 meseci',
  'Tip narudžbina: $125',
  'Promo kod iskorišćen 47×',
  'Nova kreatorka dostigla Top 0.1%',
  'Mesečni rekord probijen',
  'PPV otvorilo 89% pretplatnika',
];

const PLATFORMS = [
  { name: 'Instagram', val: '2.4B pregleda/god', pct: 100,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg> },
  { name: 'TikTok', val: '1.8B pregleda/god', pct: 75,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg> },
  { name: 'YouTube', val: '1.2B pregleda/god', pct: 50,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'X / Twitter', val: '600M pregleda/god', pct: 25,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

const GROWTH_BARS = [
  { label: 'Start', val: '$20K', h: 15 },
  { label: 'Mes 1', val: '$35K', h: 27 },
  { label: 'Mes 2', val: '$50K', h: 38 },
  { label: 'Mes 3', val: '$70K', h: 54 },
  { label: 'Mes 4', val: '$90K', h: 69 },
  { label: 'Mes 5', val: '$110K', h: 85 },
  { label: 'Mes 6', val: '$130K', h: 100 },
];

const METRICS = [
  { val: '7 cifara', label: 'Godišnji prihod rostera' },
  { val: '6.000+', label: 'Primljenih prijava' },
  { val: '94%', label: 'Stopa zadržavanja' },
  { val: '2%', label: 'Stopa prihvatanja' },
];

function timeAgo(ts) {
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return 'Upravo';
  if (mins === 1) return 'Pre 1 min';
  if (mins < 60) return `Pre ${mins} min`;
  const h = Math.floor(mins / 60);
  return h === 1 ? 'Pre 1h' : `Pre ${h}h`;
}

function makeInitialFeed() {
  const now = Date.now();
  // stagger initial items: 6, 19, 37, 58, 82 minutes ago
  const offsets = [6, 19, 37, 58, 82];
  return ACTIVITY_ITEMS.slice(0, 5).map((text, i) => ({
    text,
    ts: now - offsets[i] * 60000,
  }));
}

export default function LiveDashboard() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [feed, setFeed] = useState(makeInitialFeed);
  const [feedIdx, setFeedIdx] = useState(5);
  const [, setTick] = useState(0);

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

  // new item every 25–40s
  useEffect(() => {
    let timer;
    const schedule = () => {
      timer = setTimeout(() => {
        setFeedIdx(i => {
          const next = i % ACTIVITY_ITEMS.length;
          setFeed(prev => [{ text: ACTIVITY_ITEMS[next], ts: Date.now() }, ...prev.slice(0, 4)]);
          return next + 1;
        });
        schedule();
      }, 25000 + Math.random() * 15000);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  // refresh time labels every 60s
  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="ld-section" ref={ref}>
      <div className="ld-container">
        <div className="ld-header">
          <span className="chapter-label">Live Dashboard</span>
          <h2 className="ld-title"><em className="ld-em-plain">Naš Uticaj</em> <em className="ld-em">U Brojevima</em></h2>
          <p className="ld-sub">Metrike u realnom vremenu iz naše mreže kreatorki i tržišnog dosega.</p>
        </div>

        <div className="ld-grid">

          {/* ── Key Metrics ── */}
          <div className="ld-card" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.7s ease 0.0s, transform 0.7s ease 0.0s' }}>
            <div className="ld-card-head">
              <span className="ld-card-title">Ključne Metrike</span>
              <span className="ld-badge">
                <span className="ld-badge-dot" />Live
              </span>
            </div>
            <div className="ld-metrics">
              {METRICS.map((m, i) => (
                <div key={i} className="ld-metric">
                  <div className="ld-metric-val">{m.val}</div>
                  <div className="ld-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Platform Reach ── */}
          <div className="ld-card" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s' }}>
            <div className="ld-card-head">
              <span className="ld-card-title">Doseg Platformi</span>
              <span className="ld-badge ld-badge--gold">Godišnje</span>
            </div>
            <div className="ld-platforms">
              {PLATFORMS.map((p, i) => (
                <div key={i} className="ld-platform-row">
                  <div className="ld-platform-icon">{p.icon}</div>
                  <div className="ld-platform-info">
                    <div className="ld-platform-head">
                      <span className="ld-platform-name">{p.name}</span>
                      <span className="ld-platform-val">{p.val}</span>
                    </div>
                    <div className="ld-track">
                      <div className="ld-fill" style={{ width: vis ? `${p.pct}%` : '0%', transition: `width 1.1s ease ${0.3 + i * 0.15}s` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="ld-platform-note">300–500M pregleda mesečno na svim platformama</p>
          </div>

          {/* ── Activity Feed ── */}
          <div className="ld-card" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
            <div className="ld-card-head">
              <span className="ld-card-title">Nedavna Dostignuća</span>
              <span className="ld-badge">Danas</span>
            </div>
            <div className="ld-feed">
              {feed.map((item, i) => (
                <div key={`${item.text}-${item.ts}`} className={`ld-feed-item${i === 0 && Date.now() - item.ts < 5000 ? ' ld-feed-item--new' : ''}`}>
                  <span className="ld-feed-dot" />
                  <span className="ld-feed-text">{item.text}</span>
                  <span className="ld-feed-time">{timeAgo(item.ts)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Growth Chart ── */}
          <div className="ld-card" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(24px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
            <div className="ld-card-head">
              <span className="ld-card-title">Prosečan Rast Kreatorki</span>
              <span className="ld-badge ld-badge--gold">+550% avg</span>
            </div>
            <div className="ld-chart">
              {GROWTH_BARS.map((b, i) => (
                <div key={i} className="ld-bar-wrap">
                  <span className="ld-bar-val">{b.val}</span>
                  <div className="ld-bar-track">
                    <div className="ld-bar" style={{ height: vis ? `${b.h}%` : '0%', transition: `height 0.9s ease ${0.4 + i * 0.1}s` }} />
                  </div>
                  <span className="ld-bar-label">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .ld-section { padding: 80px 0; background: #fafaf8; }
        .ld-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .ld-header { text-align: center; margin-bottom: 48px; }
        .ld-title { font-family: var(--font-display); font-size: clamp(28px,4vw,40px); color: #1a1a1a; margin: 12px 0 10px; line-height: 1.1; }
        .ld-em-plain { font-style: italic; color: #1a1a1a; }
        .ld-em { font-style: italic; color: #a9875c; }
        .ld-sub { font-size: 15px; color: #888; margin: 0; max-width: 520px; margin: 0 auto; }

        /* Grid */
        .ld-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 700px) { .ld-grid { grid-template-columns: 1fr; } }

        /* Card - liquid glass */
        .ld-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 8px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95);
          border-radius: 18px;
          padding: 24px;
          display: flex; flex-direction: column; gap: 18px;
        }

        /* Card header */
        .ld-card-head { display: flex; align-items: center; justify-content: space-between; }
        .ld-card-title { font-size: 13px; font-weight: 700; color: #1a1a1a; text-transform: uppercase; letter-spacing: 0.08em; }
        .ld-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #911f39; background: rgba(145,31,57,0.08); border: 1px solid rgba(145,31,57,0.2); border-radius: 999px; padding: 4px 10px; }
        .ld-badge--gold { color: #a9875c; background: rgba(169,135,92,0.08); border-color: rgba(169,135,92,0.25); }
        .ld-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; }

        /* Metrics */
        .ld-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .ld-metric { background: rgba(169,135,92,0.06); border: 1px solid rgba(169,135,92,0.15); border-radius: 12px; padding: 16px 14px; }
        .ld-metric-val { font-family: var(--font-display); font-size: clamp(18px,2vw,22px); font-style: italic; color: #a9875c; line-height: 1; margin-bottom: 5px; }
        .ld-metric-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #999; line-height: 1.4; }

        /* Platforms */
        .ld-platforms { display: flex; flex-direction: column; gap: 14px; }
        .ld-platform-row { display: flex; align-items: center; gap: 12px; }
        .ld-platform-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(169,135,92,0.1); border: 1px solid rgba(169,135,92,0.2); display: flex; align-items: center; justify-content: center; color: #a9875c; flex-shrink: 0; }
        .ld-platform-info { flex: 1; min-width: 0; }
        .ld-platform-head { display: flex; justify-content: space-between; margin-bottom: 5px; }
        .ld-platform-name { font-size: 13px; font-weight: 600; color: #1a1a1a; }
        .ld-platform-val { font-size: 11px; color: #888; }
        .ld-track { height: 4px; background: rgba(169,135,92,0.12); border-radius: 2px; overflow: hidden; }
        .ld-fill { height: 100%; background: linear-gradient(90deg, #911f39, #a9875c); border-radius: 2px; }
        .ld-platform-note { font-size: 11px; color: #bbb; text-align: center; margin: 0; }

        /* Feed */
        .ld-feed { display: flex; flex-direction: column; gap: 10px; }
        .ld-feed-item { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; background: rgba(0,0,0,0.02); transition: background 0.3s; }
        .ld-feed-item--new { background: rgba(145,31,57,0.05); animation: feed-pop 0.4s ease; }
        @keyframes feed-pop { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
        .ld-feed-dot { width: 7px; height: 7px; border-radius: 50%; background: #a9875c; flex-shrink: 0; }
        .ld-feed-item--new .ld-feed-dot { background: #22c55e; animation: dot-blink 1.2s ease-in-out infinite; }
        .ld-feed-text { flex: 1; font-size: 13px; color: #444; }
        .ld-feed-time { font-size: 10px; color: #bbb; white-space: nowrap; flex-shrink: 0; }

        /* Bar chart */
        .ld-chart { display: flex; align-items: flex-end; gap: 8px; height: 160px; }
        .ld-bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; }
        .ld-bar-val { font-size: 9px; color: #aaa; text-align: center; white-space: nowrap; }
        .ld-bar-track { flex: 1; width: 100%; display: flex; align-items: flex-end; }
        .ld-bar { width: 100%; background: linear-gradient(to top, #911f39, #a9875c); border-radius: 4px 4px 0 0; }
        .ld-bar-label { font-size: 9px; color: #aaa; text-align: center; white-space: nowrap; }
      `}</style>
    </section>
  );
}
