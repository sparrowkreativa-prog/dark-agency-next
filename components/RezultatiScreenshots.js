'use client';
import { useEffect, useRef, useState } from 'react';

/* ── Random generation helpers ── */
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randF(min, max) { return min + Math.random() * (max - min); }
function usd(n) { return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function usdNoSign(n) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function smoothPts(n) {
  let y = rand(28, 65);
  const pts = [];
  for (let i = 0; i < n; i++) {
    y = Math.max(8, Math.min(88, y + rand(-20, 20)));
    pts.push(`${Math.round((i / (n - 1)) * 258)},${y}`);
  }
  return pts.join(' ');
}

const TIMES = ['8:49','9:14','9:41','10:03','10:32','11:07','11:52','12:30','13:15','14:22','15:08','16:44'];
const DATES_7 = ['Aug 24, 2024 - Aug 31, 2024','Aug 31, 2024 - Sep 07, 2024','Sep 07, 2024 - Sep 14, 2024','Sep 14, 2024 - Sep 21, 2024'];
const DATES_24 = ['8:00 am, Sep 08 - 8:00 am, Sep 09, 2024','12:30 pm, Sep 10 - 12:30 pm, Sep 11, 2024','9:00 am, Sep 12 - 9:00 am, Sep 13, 2024'];
const DATES_CUSTOM = ['12:00 am, Sep 01 - 11:59 pm, Sep 30, 2024','12:00 am, Sep 11 - 11:59 pm, Oct 11, 2024','12:00 am, Aug 01 - 11:59 pm, Aug 31, 2024'];

function generateMockups() {
  const earn1 = randF(14000, 28000);
  const earn2 = randF(3000, 7500);
  const earn3 = randF(50000, 90000);
  const earn4 = randF(38000, 62000);
  const earn5 = randF(9000, 18000);
  const earn6 = randF(72000, 120000);
  return [
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: false,
      topPct: (randF(0.15, 0.28)).toFixed(2),
      current: usd(randF(2000, 5500)), pending: usd(randF(14000, 25000)),
      period: 'Last 7 days',
      dateRange: DATES_7[rand(0, DATES_7.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn1), gross: usdNoSign(earn1 * randF(1.22, 1.28)),
      pct: randF(18, 55).toFixed(1),
      yLabels: ['$4,000', '$3,000', '$2,000', '$1,000'], gridY: [25, 50, 75],
      chartPts: smoothPts(7), badge: rand(1, 9),
    },
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: false,
      topPct: (randF(0.15, 0.25)).toFixed(2),
      current: usd(randF(3500, 7000)), pending: usd(randF(18000, 30000)),
      period: 'Last 24 hours',
      dateRange: DATES_24[rand(0, DATES_24.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn2), gross: usdNoSign(earn2 * randF(1.22, 1.28)),
      pct: randF(30, 90).toFixed(1),
      yLabels: ['$600', '$400', '$200'], gridY: [33, 67],
      chartPts: smoothPts(12), badge: rand(1, 9),
    },
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: true,
      topPct: (randF(0.14, 0.22)).toFixed(2),
      current: usd(randF(1800, 4500)), pending: usd(randF(12000, 22000)),
      period: 'Custom',
      dateRange: DATES_CUSTOM[rand(0, DATES_CUSTOM.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn3), gross: usdNoSign(earn3 * randF(1.22, 1.28)),
      pct: randF(0.2, 5).toFixed(1),
      yLabels: ['$6,000', '$4,000', '$2,000', '200'], gridY: [14, 43, 71],
      chartPts: smoothPts(15), badge: rand(1, 9),
    },
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: true,
      topPct: (randF(0.08, 0.14)).toFixed(2),
      current: usd(randF(6000, 12000)), pending: usd(randF(32000, 55000)),
      period: 'Last 7 days',
      dateRange: DATES_7[rand(0, DATES_7.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn4), gross: usdNoSign(earn4 * randF(1.22, 1.28)),
      pct: randF(55, 95).toFixed(1),
      yLabels: ['$10,000', '$7,500', '$5,000', '$2,500'], gridY: [25, 50, 75],
      chartPts: smoothPts(7), badge: rand(1, 9),
    },
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: false,
      topPct: (randF(0.10, 0.18)).toFixed(2),
      current: usd(randF(4500, 9000)), pending: usd(randF(28000, 48000)),
      period: 'Last 24 hours',
      dateRange: DATES_24[rand(0, DATES_24.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn5), gross: usdNoSign(earn5 * randF(1.22, 1.28)),
      pct: randF(60, 120).toFixed(1),
      yLabels: ['$2,000', '$1,500', '$1,000', '$500'], gridY: [25, 50, 75],
      chartPts: smoothPts(12), badge: rand(1, 9),
    },
    {
      time: TIMES[rand(0, TIMES.length - 1)],
      battery: rand(18, 98), signal: rand(2, 4), is5G: true,
      topPct: (randF(0.05, 0.10)).toFixed(2),
      current: usd(randF(9000, 18000)), pending: usd(randF(55000, 90000)),
      period: 'Custom',
      dateRange: DATES_CUSTOM[rand(0, DATES_CUSTOM.length - 1)] + ' (local time UTC +10:00)',
      earnings: usd(earn6), gross: usdNoSign(earn6 * randF(1.22, 1.28)),
      pct: randF(0.1, 3).toFixed(1),
      yLabels: ['$15,000', '$10,000', '$5,000', '$1,000'], gridY: [14, 43, 71],
      chartPts: smoothPts(15), badge: rand(1, 9),
    },
  ];
}

/* ── Static fallback (server render) ── */
const MOCKUPS = [
  {
    time: '9:41', battery: 87, signal: 4, is5G: false,
    topPct: '0.22',
    current: '$3,405.75', pending: '$19,732.94',
    period: 'Last 7 days',
    dateRange: 'Aug 31, 2024 - Sep 07, 2024 (local time UTC +10:00)',
    earnings: '$19,651.74', gross: '$24,564.66', pct: '36.7',
    yLabels: ['$4,000', '$3,000', '$2,000', '$1,000'],
    gridY: [25, 50, 75],
    chartPts: '0,55 43,20 86,48 129,5 172,27 215,12 258,41',
    badge: 2,
  },
  {
    time: '14:22', battery: 64, signal: 3, is5G: false,
    topPct: '0.19',
    current: '$5,327.17', pending: '$21,930.34',
    period: 'Last 24 hours',
    dateRange: '12:30 pm, Sep 10 - 12:30 pm, Sep 11, 2024 (local time UTC +10:00)',
    earnings: '$4,284.75', gross: '$5,355.94', pct: '70.1',
    yLabels: ['$600', '$400', '$200'],
    gridY: [33, 67],
    chartPts: '0,50 24,25 48,67 72,37 96,48 120,28 144,43 168,33 192,57 216,20 240,33 258,44',
    badge: 5,
  },
  {
    time: '10:03', battery: 88, signal: 4, is5G: true,
    topPct: '0.18',
    current: '$2,684.27', pending: '$16,181.55',
    period: 'Custom',
    dateRange: '12:00 am, Sep 11 - 11:59 pm, Oct 11, 2024 (local time UTC +10:00)',
    earnings: '$64,778.80', gross: '$80,973.60', pct: '0.7',
    yLabels: ['$6,000', '$4,000', '$2,000', '200'],
    gridY: [14, 43, 71],
    chartPts: '0,70 18,51 36,31 54,54 72,20 90,41 108,11 126,46 144,37 162,26 180,49 198,30 216,41 237,46 258,20',
    badge: 3,
  },
  {
    time: '11:07', battery: 72, signal: 4, is5G: true,
    topPct: '0.11',
    current: '$8,341.60', pending: '$43,892.14',
    period: 'Last 7 days',
    dateRange: 'Sep 07, 2024 - Sep 14, 2024 (local time UTC +10:00)',
    earnings: '$48,216.50', gross: '$60,270.62', pct: '82.4',
    yLabels: ['$10,000', '$7,500', '$5,000', '$2,500'],
    gridY: [25, 50, 75],
    chartPts: '0,60 43,35 86,15 129,42 172,8 215,28 258,18',
    badge: 7,
  },
  {
    time: '15:08', battery: 55, signal: 3, is5G: false,
    topPct: '0.13',
    current: '$6,720.88', pending: '$37,540.22',
    period: 'Last 24 hours',
    dateRange: '9:00 am, Sep 12 - 9:00 am, Sep 13, 2024 (local time UTC +10:00)',
    earnings: '$11,384.90', gross: '$14,231.12', pct: '97.3',
    yLabels: ['$2,000', '$1,500', '$1,000', '$500'],
    gridY: [25, 50, 75],
    chartPts: '0,68 24,48 48,25 72,55 96,18 120,40 144,12 168,38 192,24 216,45 240,14 258,30',
    badge: 4,
  },
  {
    time: '9:14', battery: 91, signal: 4, is5G: true,
    topPct: '0.07',
    current: '$14,508.33', pending: '$71,219.80',
    period: 'Custom',
    dateRange: '12:00 am, Aug 01 - 11:59 pm, Aug 31, 2024 (local time UTC +10:00)',
    earnings: '$98,542.20', gross: '$123,177.75', pct: '1.2',
    yLabels: ['$15,000', '$10,000', '$5,000', '$1,000'],
    gridY: [14, 43, 71],
    chartPts: '0,65 18,44 36,22 54,48 72,14 90,35 108,8 126,40 144,28 162,18 180,42 198,22 216,35 237,40 258,12',
    badge: 2,
  },
];

function makeFill(pts) {
  const arr = pts.trim().split(' ');
  const lastX = arr[arr.length - 1].split(',')[0];
  return `M${arr.join(' L')} L${lastX},100 L0,100 Z`;
}

function OFMockup({ m, vis, idx }) {
  const fillPath = makeFill(m.chartPts);
  const gradId = `ofg${idx}`;

  return (
    <div
      className="ofm"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(28px)',
        transition: `opacity 0.9s ease ${idx * 0.14}s, transform 0.9s ease ${idx * 0.14}s`,
      }}
    >
      {/* ── Status bar ── */}
      <div className="ofm-sb">
        <span className="ofm-time">{m.time}</span>
        <div className="ofm-sb-right">
          {/* Signal bars */}
          <svg width="16" height="11" viewBox="0 0 16 11">
            {[0, 1, 2, 3].map(i => (
              <rect key={i} x={i * 4.2} y={11 - (i + 1) * 2.75} width="3" height={(i + 1) * 2.75} rx="0.4"
                fill={i < m.signal ? 'white' : 'rgba(255,255,255,0.28)'} />
            ))}
          </svg>
          {/* Wifi or 5G */}
          {m.is5G
            ? <span className="ofm-5g">5G</span>
            : <svg width="14" height="11" viewBox="0 0 14 11">
                <circle cx="7" cy="9.5" r="1.2" fill="white" />
                <path d="M4.2 7C5.1 6 6 5.5 7 5.5s1.9.5 2.8 1.5" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M1.5 4.5C3 2.8 4.9 1.8 7 1.8s4 1 5.5 2.7" fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
          }
          <span className="ofm-bpct">{m.battery}</span>
          {/* Battery */}
          <svg width="24" height="12" viewBox="0 0 24 12">
            <rect x="0.5" y="1.5" width="19" height="9" rx="2" stroke="white" strokeWidth="0.9" fill="none" strokeOpacity="0.45" />
            <rect x="1.5" y="2.5" width={Math.round(17 * m.battery / 100)} height="7" rx="1.2"
              fill={m.battery < 20 ? '#ff3b30' : 'white'} />
            <path d="M20.5 4.5v3a1.2 1.2 0 000-3z" fill="white" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* ── App body ── */}
      <div className="ofm-body">

        {/* Header row */}
        <div className="ofm-nav">
          <div className="ofm-nav-back">
            <svg width="7" height="12" viewBox="0 0 7 12"><path d="M6 1L1 6l5 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </div>
          <span className="ofm-nav-title">STATISTICS</span>
          <div className="ofm-nav-help">
            <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" fill="none" /><text x="8" y="12" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9" fontFamily="-apple-system,sans-serif">?</text></svg>
          </div>
        </div>

        {/* Main tabs */}
        <div className="ofm-tabs">
          {['STATEMENTS', 'OVERVIEW', 'ENGAGEMENT', 'REACH'].map((t, i) => (
            <span key={t} className={`ofm-tab${i === 0 ? ' ofm-tab-on' : ''}`}>{t}</span>
          ))}
        </div>

        {/* Sub-tabs */}
        <div className="ofm-subtabs">
          {['Earnings', 'Payout Requests', 'Chargebacks', 'Referral'].map((t, i) => (
            <span key={t} className={`ofm-stab${i === 0 ? ' ofm-stab-on' : ''}`}>{t}</span>
          ))}
        </div>

        {/* Top % banner */}
        <div className="ofm-banner">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#5e9ef4">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>YOU ARE IN THE TOP {m.topPct}% OF ALL CREATORS!</span>
        </div>

        {/* Balances */}
        <div className="ofm-bals">
          <div className="ofm-bal">
            <div className="ofm-bal-v">{m.current}</div>
            <div className="ofm-bal-l">Current balance</div>
          </div>
          <div className="ofm-bal-sep" />
          <div className="ofm-bal">
            <div className="ofm-bal-v">{m.pending}</div>
            <div className="ofm-bal-l">Pending balance <span className="ofm-info">ⓘ</span></div>
          </div>
        </div>

        {/* Manual payouts */}
        <div className="ofm-manual">
          <div>
            <div className="ofm-manual-t">Manual payouts</div>
            <div className="ofm-manual-s">Minimum withdrawal amount is $200</div>
          </div>
          <svg width="6" height="11" viewBox="0 0 6 11"><path d="M1 1l4 4.5L1 10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
        </div>

        {/* Request withdrawal button */}
        <div className="ofm-btnrow">
          <div className="ofm-btn">REQUEST WITHDRAWAL</div>
        </div>

        {/* Period selector */}
        <div className="ofm-period">
          <div className="ofm-period-left">
            <div className="ofm-period-name">{m.period}</div>
            <div className="ofm-period-date">{m.dateRange}</div>
          </div>
          <svg width="9" height="6" viewBox="0 0 9 6"><path d="M1 1l3.5 4L8 1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
        </div>

        {/* Filter pills */}
        <div className="ofm-pills">
          {['All', 'Subscriptions', 'Tips', 'Posts', 'Messages'].map((p, i) => (
            <span key={p} className={`ofm-pill${i === 0 ? ' ofm-pill-on' : ''}`}>{p}</span>
          ))}
        </div>

        {/* Earnings row */}
        <div className="ofm-earn">
          <span className="ofm-earn-v">{m.earnings}</span>
          <span className="ofm-earn-g"> (${m.gross} Gross)</span>
          <span className="ofm-earn-pct">
            <svg width="9" height="9" viewBox="0 0 10 10" style={{ marginRight: 2 }}>
              <path d="M2 8L8 2M8 2H4M8 2v4" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {m.pct}%
          </span>
        </div>

        {/* Chart */}
        <div className="ofm-chart-wrap">
          <svg viewBox="0 0 258 80" preserveAspectRatio="none" className="ofm-chart">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6babf5" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#6babf5" stopOpacity="0" />
              </linearGradient>
            </defs>
            {m.gridY.map(y => (
              <line key={y} x1="0" x2="258" y1={y * 0.8} y2={y * 0.8}
                stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            ))}
            <path
              d={fillPath.replace(/(\d+\.?\d*),(\d+\.?\d*)/g, (_, x, y) =>
                `${x},${(parseFloat(y) * 0.8).toFixed(1)}`)}
              fill={`url(#${gradId})`}
            />
            <polyline
              points={m.chartPts.split(' ').map(p => {
                const [x, y] = p.split(',');
                return `${x},${(parseFloat(y) * 0.8).toFixed(1)}`;
              }).join(' ')}
              fill="none" stroke="#6babf5" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <div className="ofm-yaxis">
            {m.yLabels.map(l => <span key={l}>{l}</span>)}
          </div>
        </div>

      </div>

      {/* ── Bottom navigation ── */}
      <div className="ofm-bottomnav">
        {/* Home */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        {/* Search */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {/* Messages with badge */}
        <div className="ofm-msg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span className="ofm-badge">{m.badge}</span>
        </div>
        {/* Bell */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
        {/* Profile */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </div>
  );
}

export default function RezultatiScreenshots() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [mockups, setMockups] = useState(MOCKUPS);

  useEffect(() => {
    // Generate fresh random values on every page load
    setMockups(generateMockups());
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); io.disconnect(); }
      }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <section className="rz-section" ref={ref}>
      <div className="rz-inner">
        <div
          className="rz-header"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <span className="chapter-label">DIREKTNO SA PLATFORME</span>
          <h2 className="rz-title">
            Rezultati,<br /><span style={{ color: '#a9875c' }}>Ne Obećanja.</span>
          </h2>
        </div>
      </div>

      {/* Desktop: 3 columns */}
      <div className="rz-desktop">
        {mockups.map((m, i) => <OFMockup key={i} m={m} vis={vis} idx={i} />)}
      </div>

      {/* Mobile: horizontal scroll snap */}
      <div className="rz-mobile-scroll">
        {mockups.map((m, i) => <OFMockup key={i} m={m} vis={vis} idx={i} />)}
      </div>

      <div className="rz-inner">
        <p className="rz-disclaimer" style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.9s ease 0.5s' }}>
          Autentični, anonimizovani statistički paneli kreatorki iz našeg rostera.
        </p>
      </div>

      <style>{`
        .rz-section { padding: 96px 0 0; background: #fafaf8; }
        .rz-inner { max-width: 1060px; margin: 0 auto; padding: 0 24px; }
        .rz-header { text-align: center; margin-bottom: 48px; }
        .rz-title { font-family: var(--font-display); font-size: clamp(28px,5vw,42px); font-style: italic; color: #1a1a1a; margin: 0; line-height: 1.1; }

        /* Desktop: 3 columns × 2 rows */
        .rz-desktop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .rz-mobile-scroll { display: none; }

        /* ── Mockup card ── */
        .ofm {
          min-width: 0;
          max-width: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: #141824;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          box-shadow: 0 24px 64px rgba(0,0,0,0.22);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
        }

        /* Status bar */
        .ofm-sb { background: #5e9ef4; display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 6px; flex-shrink: 0; }
        .ofm-time { font-size: 13px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
        .ofm-sb-right { display: flex; align-items: center; gap: 4px; }
        .ofm-5g { font-size: 11px; font-weight: 800; color: #fff; letter-spacing: -0.2px; }
        .ofm-bpct { font-size: 11px; font-weight: 500; color: #fff; }

        /* App body */
        .ofm-body { flex: 1; display: flex; flex-direction: column; background: #141824; }

        /* Nav */
        .ofm-nav { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 6px; background: #141824; }
        .ofm-nav-back { display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; }
        .ofm-nav-title { font-size: 11px; font-weight: 800; color: #fff; letter-spacing: 0.05em; flex: 1; text-align: center; }
        .ofm-nav-help { width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; }

        /* Main tabs */
        .ofm-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0 10px; }
        .ofm-tab { font-size: 7.5px; font-weight: 600; color: rgba(255,255,255,0.4); padding: 6px 5px 5px; letter-spacing: 0.04em; white-space: nowrap; }
        .ofm-tab-on { color: #fff; border-bottom: 1.5px solid #fff; margin-bottom: -1px; }

        /* Sub-tabs */
        .ofm-subtabs { display: flex; gap: 2px; padding: 5px 10px 4px; overflow: hidden; }
        .ofm-stab { font-size: 7px; font-weight: 500; color: rgba(255,255,255,0.4); padding: 3px 6px; border-radius: 4px; white-space: nowrap; }
        .ofm-stab-on { background: rgba(255,255,255,0.12); color: #fff; }

        /* Banner */
        .ofm-banner { display: flex; align-items: center; gap: 5px; padding: 5px 12px; background: rgba(94,158,244,0.1); border-top: 1px solid rgba(94,158,244,0.2); border-bottom: 1px solid rgba(94,158,244,0.2); }
        .ofm-banner span { font-size: 7px; font-weight: 700; color: rgba(255,255,255,0.85); letter-spacing: 0.02em; }

        /* Balances */
        .ofm-bals { display: flex; padding: 10px 12px 8px; gap: 0; }
        .ofm-bal { flex: 1; }
        .ofm-bal-v { font-size: 13px; font-weight: 600; color: #fff; line-height: 1.2; }
        .ofm-bal-l { font-size: 7px; color: rgba(255,255,255,0.45); margin-top: 2px; }
        .ofm-info { font-size: 6px; opacity: 0.6; }
        .ofm-bal-sep { width: 1px; background: rgba(255,255,255,0.1); margin: 2px 10px; flex-shrink: 0; }

        /* Manual payouts */
        .ofm-manual { display: flex; align-items: center; justify-content: space-between; padding: 6px 12px; border-top: 1px solid rgba(255,255,255,0.07); }
        .ofm-manual-t { font-size: 8px; font-weight: 600; color: rgba(255,255,255,0.85); }
        .ofm-manual-s { font-size: 6.5px; color: rgba(255,255,255,0.35); margin-top: 1px; }

        /* Button */
        .ofm-btnrow { padding: 5px 12px 8px; }
        .ofm-btn { background: #5e9ef4; border-radius: 5px; padding: 6px 10px; font-size: 8px; font-weight: 700; color: #fff; letter-spacing: 0.05em; text-align: center; cursor: pointer; }

        /* Period */
        .ofm-period { display: flex; align-items: center; justify-content: space-between; padding: 5px 12px 4px; border-top: 1px solid rgba(255,255,255,0.07); gap: 6px; }
        .ofm-period-left { flex: 1; min-width: 0; }
        .ofm-period-name { font-size: 8px; font-weight: 600; color: rgba(255,255,255,0.8); }
        .ofm-period-date { font-size: 6px; color: rgba(255,255,255,0.32); margin-top: 1px; line-height: 1.3; }

        /* Pills */
        .ofm-pills { display: flex; gap: 4px; padding: 5px 10px; overflow: hidden; flex-wrap: nowrap; }
        .ofm-pill { font-size: 7px; font-weight: 500; color: rgba(255,255,255,0.5); padding: 3px 6px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.12); white-space: nowrap; }
        .ofm-pill-on { background: rgba(255,255,255,0.14); color: #fff; border-color: rgba(255,255,255,0.22); }

        /* Earnings row */
        .ofm-earn { display: flex; align-items: center; flex-wrap: nowrap; padding: 4px 12px 3px; gap: 2px; }
        .ofm-earn-v { font-size: 9.5px; font-weight: 600; color: #fff; white-space: nowrap; }
        .ofm-earn-g { font-size: 7.5px; color: rgba(255,255,255,0.4); white-space: nowrap; }
        .ofm-earn-pct { display: inline-flex; align-items: center; font-size: 7.5px; font-weight: 600; color: #22c55e; white-space: nowrap; margin-left: 2px; }

        /* Chart */
        .ofm-chart-wrap { position: relative; display: flex; align-items: stretch; padding: 2px 12px 6px 10px; gap: 4px; flex: 1; }
        .ofm-chart { flex: 1; height: 58px; display: block; }
        .ofm-yaxis { display: flex; flex-direction: column; justify-content: space-between; padding: 0 0 0 4px; flex-shrink: 0; }
        .ofm-yaxis span { font-size: 5.5px; color: rgba(255,255,255,0.3); line-height: 1; white-space: nowrap; }

        /* Bottom nav */
        .ofm-bottomnav { display: flex; align-items: center; justify-content: space-around; padding: 8px 10px 10px; background: rgba(20,24,36,0.98); border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
        .ofm-msg { position: relative; display: flex; }
        .ofm-badge { position: absolute; top: -4px; right: -5px; background: #5e9ef4; color: #fff; font-size: 6px; font-weight: 700; border-radius: 8px; padding: 1px 3px; min-width: 10px; text-align: center; line-height: 1.4; }

        /* ── Mobile: horizontal scroll snap ── */
        @media (max-width: 768px) {
          .rz-desktop { display: none; }
          .rz-mobile-scroll {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 20px;
            padding: 0 12vw 24px;
            scrollbar-width: none;
          }
          .rz-mobile-scroll::-webkit-scrollbar { display: none; }
          .rz-mobile-scroll .ofm {
            flex: 0 0 76vw;
            width: 76vw;
            max-width: 320px;
            scroll-snap-align: center;
          }
        }

        .rz-disclaimer { text-align: center; font-size: 12px; color: #aaa; margin-top: 36px; padding-bottom: 96px; }
      `}</style>
    </section>
  );
}
