'use client';
import { useEffect, useRef, useState } from 'react';
import SectionFade from './SectionFade';
import { siteData } from '@/data/content';

function buildSvgPath(months, W = 300, H = 90, pad = 6) {
  const max = Math.max(...months);
  const min = 0;
  const pts = months.map((v, i) => {
    const x = pad + (i / (months.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const fill = `${line} L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pad},${H - pad} Z`;
  return { line, fill, pts };
}

function RosterChart({ months, id, animate }) {
  const W = 300, H = 90;
  const { line, fill } = buildSvgPath(months, W, H);
  const gradId = `fill_roster_${id}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 90 }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8538f" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#e8538f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(f => (
        <line key={f} x1="6" x2={W - 6} y1={H * f} y2={H * f}
          stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      ))}
      {/* Fill */}
      <path d={fill} fill={`url(#${gradId})`}
        style={{ opacity: animate ? 1 : 0, transition: 'opacity 0.6s ease 0.3s' }} />
      {/* Line */}
      <path
        d={line}
        fill="none"
        stroke="#e8538f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1 1"
        strokeDashoffset={animate ? 0 : 1}
        style={{
          transition: animate ? 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' : 'none',
          filter: 'drop-shadow(0 0 6px rgba(232,83,143,0.45))',
        }}
      />
      {/* End dot */}
      {animate && (() => {
        const pts = buildSvgPath(months, W, H).pts;
        const [ex, ey] = pts[pts.length - 1];
        return (
          <circle cx={ex} cy={ey} r="4" fill="#e8538f" stroke="#fff" strokeWidth="1.5"
            style={{ animation: 'roster-dot-in 0.3s ease 1.1s both' }} />
        );
      })()}
    </svg>
  );
}

function RosterCard({ c, index }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setAnimate(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="roster-card-new"
      style={{ opacity: animate ? 1 : 0, transform: animate ? 'none' : 'translateY(24px)', transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s` }}
    >
      {/* Top row */}
      <div className="roster-card-header">
        <span className="roster-duration-tag">{c.duration}</span>
        <span className="roster-niche-tag">{c.niche}</span>
      </div>

      {/* Revenue */}
      <div className="roster-revenue-row">
        <span className="roster-before-val">{c.before}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#e8538f', flexShrink: 0, marginBottom: 4 }}>
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
        <span className="roster-after-val">{c.after.replace('/mes', '')}</span>
        <span className="roster-after-unit">/mes</span>
      </div>

      {/* Chart */}
      <div className="roster-chart-wrap">
        <RosterChart months={c.months} id={c.id} animate={animate} />
      </div>

      {/* Rank + quote */}
      <div className="roster-card-footer">
        <span className="roster-rank-tag">{c.rank}</span>
        <p className="roster-quote-new">"{c.quote}"</p>
      </div>
    </div>
  );
}

export default function Roster() {
  const { roster } = siteData;

  return (
    <SectionFade id="roster">
      <section className="section-roster">
        <div className="container">
          <div className="section-header">
            <span className="chapter-label">{roster.label}</span>
            <h2 className="section-title">{roster.title}</h2>
            <p className="section-sub">{roster.sub}</p>
          </div>
          <div className="roster-grid-new">
            {roster.cases.map((c, i) => (
              <RosterCard key={c.id} c={c} index={i} />
            ))}
          </div>
          <p className="roster-disclaimer">Zarada nije zagarantovana i varira prema trudu, niši i početnoj publici. Zato smo selektivni.</p>
        </div>
      </section>
    </SectionFade>
  );
}
