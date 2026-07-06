'use client';
import { useEffect, useRef, useState } from 'react';

const STAT_COLORS = ['#a9875c', '#a9875c', '#a9875c', '#a9875c', '#a9875c'];

function StatCard({ num, label, index, trigger }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => setShow(true), index * 120);
    return () => clearTimeout(t);
  }, [trigger, index]);

  return (
    <div
      className="ps-stat-col"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.94)',
        transition: `opacity 0.65s cubic-bezier(0.34,1.56,0.64,1), transform 0.65s cubic-bezier(0.34,1.56,0.64,1)`,
      }}
    >
      <div className="ps-stat-num">{num}</div>
      <div className="ps-stat-label">{label}</div>
    </div>
  );
}

export default function ProblemSection({ problem }) {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTrigger(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="ps-section">
      <div className="container">
        <div className="section-header">
          <span className="chapter-label">{problem.label}</span>
          <h2 className="section-title">
            {problem.title.split('za Žene.')[0]}
            <span style={{ color: '#a9875c' }}>za Žene.</span>
          </h2>
          <p className="section-sub">{problem.sub}</p>
        </div>

        {/* 5-column stats row */}
        <div className="ps-stats-row" ref={ref}>
          {problem.stats.map((s, i) => (
            <StatCard key={s.num} num={s.num} label={s.label} index={i} trigger={trigger} />
          ))}
        </div>
      </div>

      <style>{`
        .ps-section {
          padding: 80px 0 96px;
          background: #fafaf8;
        }
        .ps-stats-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          margin-top: 56px;
          border: 1px solid rgba(232,83,143,0.15);
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 40px rgba(0,0,0,0.07);
        }
        @media (max-width: 900px) {
          .ps-stats-row {
            grid-template-columns: repeat(3, 1fr);
          }
          .ps-stat-col:nth-child(4),
          .ps-stat-col:nth-child(5) {
            border-bottom: none;
          }
        }
        @media (max-width: 560px) {
          .ps-stats-row {
            grid-template-columns: 1fr 1fr;
          }
          .ps-stat-col:last-child {
            grid-column: 1 / -1;
            border-right: none;
            border-top: 1px solid rgba(232,83,143,0.12);
          }
        }

        .ps-stat-col {
          padding: 36px 28px;
          text-align: center;
          border-right: 1px solid rgba(232,83,143,0.12);
          position: relative;
        }
        .ps-stat-col:last-child {
          border-right: none;
        }
        @media (max-width: 900px) {
          .ps-stat-col {
            border-bottom: 1px solid rgba(232,83,143,0.12);
          }
        }

        .ps-stat-num {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.6rem, 2.5vw, 2.4rem);
          color: #a9875c;
          line-height: 1.1;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .ps-stat-label {
          font-size: 0.8rem;
          color: #888;
          line-height: 1.4;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
      `}</style>
    </section>
  );
}
