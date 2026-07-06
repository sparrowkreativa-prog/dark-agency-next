'use client';
import { useEffect, useRef, useState } from 'react';

/* Parse a stat string into { end, format }
   "5.000+"      → end=5000,  format(n) → "5.000+"
   "0,4%"        → end=0.4,   format(n) → "0,4%"
   "2/mesečno"   → end=2,     format(n) → "2/mesečno"
   "3+ god"      → end=3,     format(n) → "3+ god"
   "$11M+"       → end=11,    format(n) → "$11M+"
*/
function parseStat(raw) {
  if (raw === '5.000+') {
    return {
      end: 5000,
      format: (n) => Math.round(n).toLocaleString('de-DE').replace(/,/g, '.') + '+',
    };
  }
  if (raw === '0,4%') {
    return {
      end: 0.4,
      format: (n) => n.toFixed(1).replace('.', ',') + '%',
    };
  }
  if (raw === '2/mesečno') {
    return {
      end: 2,
      format: (n) => Math.round(n) + '/mesečno',
    };
  }
  if (raw === '3+ god') {
    return {
      end: 3,
      format: (n) => Math.round(n) + '+ god',
    };
  }
  if (raw === '$11M+') {
    return {
      end: 11,
      format: (n) => '$' + Math.round(n) + 'M+',
    };
  }
  // fallback — no animation
  return { end: null, format: () => raw };
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function StatCard({ num, label, index, trigger }) {
  const [show, setShow] = useState(false);
  const [displayNum, setDisplayNum] = useState(() => {
    const { format } = parseStat(num);
    return format(0);
  });
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const stagger = index * 120;
    const duration = 1800;
    const { end, format } = parseStat(num);

    timerRef.current = setTimeout(() => {
      setShow(true);

      if (end === null) return; // no animation for unknown formats

      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        setDisplayNum(format(end * eased));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayNum(format(end)); // ensure exact final value
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, stagger);

    return () => {
      clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="ps-stat-col"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.94)',
        transition: `opacity 0.65s cubic-bezier(0.34,1.56,0.64,1), transform 0.65s cubic-bezier(0.34,1.56,0.64,1)`,
      }}
    >
      <div className="ps-stat-num">{displayNum}</div>
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
    }, { threshold: 0.15 });
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
          border: 1px solid rgba(169,135,92,0.15);
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
            border-top: 1px solid rgba(169,135,92,0.12);
          }
        }

        .ps-stat-col {
          padding: 36px 28px;
          text-align: center;
          border-right: 1px solid rgba(169,135,92,0.12);
          position: relative;
        }
        .ps-stat-col:last-child {
          border-right: none;
        }
        @media (max-width: 900px) {
          .ps-stat-col {
            border-bottom: 1px solid rgba(169,135,92,0.12);
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
