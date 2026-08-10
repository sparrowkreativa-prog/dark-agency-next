'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    body1: 'Videli smo industriju kojom dominiraju agencije kojima upravljaju muškarci - koje svoje kreatorke nisu zaista razumele.',
    body2: 'Znali smo da mora postojati bolji način.',
    body3: 'Ne upravljamo samo nalozima - gradimo carstva, uz posvećen tim koji poštuje granice i štiti privatnost svakog kreatora kao preduzetnika kakav zaista jeste.',
  },
  en: {
    body1: 'We saw an industry dominated by male-run agencies that never truly understood their creators.',
    body2: 'We knew there had to be a better way.',
    body3: 'We don\'t just manage accounts — we build empires, with a dedicated team that respects boundaries and protects every creator\'s privacy as the entrepreneur they truly are.',
  },
  it: {
    body1: 'Abbiamo visto un\'industria dominata da agenzie gestite da uomini che non hanno mai capito davvero le loro creator.',
    body2: 'Sapevamo che doveva esistere un modo migliore.',
    body3: 'Non gestiamo solo account — costruiamo imperi, con un team dedicato che rispetta i limiti e protegge la privacy di ogni creator come l\'imprenditrice che è davvero.',
  },
};

/* Parse a stat string into { end, format } */
function parseStat(raw) {
  // 5.000+ (SR/IT style thousands)
  if (raw === '5.000+') {
    return { end: 5000, format: (n) => Math.round(n).toLocaleString('de-DE').replace(/,/g, '.') + '+' };
  }
  // percentage with comma (SR/IT)
  if (raw === '0,4%') {
    return { end: 0.4, format: (n) => n.toFixed(1).replace('.', ',') + '%' };
  }
  // percentage with dot (EN)
  if (raw === '0.4%') {
    return { end: 0.4, format: (n) => n.toFixed(1) + '%' };
  }
  // per month variants
  if (raw === '2/mesečno') return { end: 2, format: (n) => Math.round(n) + '/mesečno' };
  if (raw === '2/month')   return { end: 2, format: (n) => Math.round(n) + '/month' };
  if (raw === '2/mese')    return { end: 2, format: (n) => Math.round(n) + '/mese' };
  // year variants
  if (raw === '3+ god')    return { end: 3, format: (n) => Math.round(n) + '+ god' };
  if (raw === '3+ yrs')    return { end: 3, format: (n) => Math.round(n) + '+ yrs' };
  if (raw === '3+ anni')   return { end: 3, format: (n) => Math.round(n) + '+ anni' };
  // money
  if (raw === '$11M+') return { end: 11, format: (n) => '$' + Math.round(n) + 'M+' };
  // fallback - no animation
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
      if (end === null) return;
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        setDisplayNum(format(end * eased));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayNum(format(end));
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
  const lang = useLang();
  const t = T[lang] || T.sr;

  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const timer = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setTrigger(true); io.disconnect(); }
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(timer); io?.disconnect(); };
  }, []);

  // Split title at the last comma to highlight the final phrase in gold
  const titleParts = problem.title.split(', ');
  const titleMain = titleParts.slice(0, -1).join(', ') + ',';
  const titleGold = ' ' + titleParts[titleParts.length - 1];

  return (
    <section className="ps-section">
      <div className="container">
        <div className="section-header">
          <span className="chapter-label">{problem.label}</span>
          <h2 className="section-title">
            {titleMain}
            <span style={{ color: '#a9875c' }}>{titleGold}</span>
          </h2>
          <img src="/buss_woman.jpeg" alt="" className="ps-buss-img" />
          <p className="section-sub" style={{ color: '#fff' }}>
            {t.body1}{' '}
            <em className="ps-sub-em">{t.body2}</em>{' '}
            {t.body3}
          </p>
        </div>

        <div className="ps-stats-row" ref={ref}>
          {problem.stats.map((s, i) => (
            <StatCard key={s.num} num={s.num} label={s.label} index={i} trigger={trigger} />
          ))}
        </div>
      </div>

      <style>{`
        .ps-buss-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          max-height: 480px;
          margin: 24px 0;
        }
        .ps-section {
          padding: 80px 0 96px;
          background: #1a1a1a;
        }
        @media (max-width: 640px) { .ps-section { padding: 48px 0; } }
        .ps-section .section-title { color: #fff; }
        .ps-section .section-sub { color: rgba(255,255,255,0.5); }
        .ps-sub-em {
          font-style: normal;
          font-weight: 700;
          font-size: 1.25em;
          color: #a9875c;
        }
        .ps-section .chapter-label { color: #a9875c; border-color: rgba(169,135,92,0.35); }
        .ps-stats-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          margin-top: 56px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        @media (max-width: 900px) {
          .ps-stats-row { grid-template-columns: repeat(3, 1fr); }
          .ps-stat-col:nth-child(4),
          .ps-stat-col:nth-child(5) { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .ps-stats-row { grid-template-columns: 1fr 1fr; }
          .ps-stat-col:last-child { grid-column: 1 / -1; border-right: none; border-top: 1px solid rgba(255,255,255,0.08); }
        }
        .ps-stat-col {
          padding: 36px 28px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.08);
          position: relative;
        }
        .ps-stat-col:last-child { border-right: none; }
        @media (max-width: 900px) {
          .ps-stat-col { border-bottom: 1px solid rgba(255,255,255,0.08); }
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
          margin-top: 6px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: rgba(255,255,255,0.4);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
