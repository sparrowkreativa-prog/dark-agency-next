'use client';
import { useState } from 'react';

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function getGrowth() {
  return { pct: 250, label: '250%' };
}

const CHART_BARS = [45, 62, 78, 85, 70, 55, 48, 60, 82, 91, 100, 74];
const MONTHS = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Avg','Sep','Okt','Nov','Dec'];

export default function Kalkulator({ light = false }) {
  const [tab, setTab] = useState('overview');
  const [revenue, setRevenue] = useState(50000);

  const growth = getGrowth();
  const projected = Math.round(revenue * 3.5);
  const extra = projected - revenue;
  const yearly = extra * 12;

  const sliderPct = (revenue / 800000) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, #a9875c ${sliderPct}%, rgba(169,135,92,0.18) ${sliderPct}%)`,
  };

  return (
    <section className="kalk-section">
      <div className="kalk-container">
        <div className="kalk-header">
          <span className="chapter-label">Kalkulator</span>
          <h2 className="kalk-title"><em className="kalk-em-plain">Vidi Tvoj</em> <em className="kalk-em">Potencijal</em></h2>
          <p className="kalk-sub">Projektovana zarada sa Velluto Nero sistemom</p>
        </div>

        <div className="kalk-dashboard">
          {/* Dashboard top bar */}
          <div className="kalk-dash-top">
            <div className="kalk-dash-profile">
              <div className="kalk-avatar">Ti</div>
              <div>
                <div className="kalk-username">
                  tvoj_nalog
                  <svg className="kalk-verified" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/>
                  </svg>
                </div>
                <div className="kalk-account-type">Kreator nalog · Statistika</div>
              </div>
            </div>
            <div className="kalk-tabs">
              {[['overview','Pregled'],['earnings','Zarada'],['audience','Publika']].map(([id, label]) => (
                <button
                  key={id}
                  className={`kalk-tab${tab === id ? ' kalk-tab--active' : ''}`}
                  onClick={() => setTab(id)}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* ── OVERVIEW TAB ── */}
          {tab === 'overview' && (
            <div className="kalk-tab-body">
              {/* Slider */}
              <div className="kalk-input-row">
                <label className="kalk-input-label">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Tvoj trenutni mesečni prihod
                </label>
                <div className="kalk-slider-wrap">
                  <input
                    type="range"
                    className="kalk-slider"
                    min="0" max="800000" step="5000"
                    value={revenue}
                    style={sliderStyle}
                    onChange={e => setRevenue(Number(e.target.value))}
                  />
                  <div className="kalk-slider-val">{fmt(revenue)}</div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="kalk-stats">
                <div className="kalk-stat">
                  <div className="kalk-stat-val kalk-stat-val--gold">{growth.label}</div>
                  <div className="kalk-stat-label">Prosečan rast</div>
                  <div className="kalk-stat-note">↑ Sa nama</div>
                </div>
                <div className="kalk-stat">
                  <div className="kalk-stat-val">3+ god</div>
                  <div className="kalk-stat-label">Prosečno partnerstvo</div>
                  <div className="kalk-stat-note">Dugoročno</div>
                </div>
                <div className="kalk-stat">
                  <div className="kalk-stat-val">24/7</div>
                  <div className="kalk-stat-label">Podrška</div>
                  <div className="kalk-stat-note">Uvek dostupno</div>
                </div>
                <div className="kalk-stat">
                  <div className="kalk-stat-val">0%</div>
                  <div className="kalk-stat-label">Curenje identiteta</div>
                  <div className="kalk-stat-note">5+ godina</div>
                </div>
              </div>

              {/* Comparison */}
              <div className="kalk-compare">
                <div className="kalk-compare-card kalk-compare-card--current">
                  <div className="kalk-compare-label">Tvoj trenutni prihod</div>
                  <div className="kalk-compare-val">{fmt(revenue)}</div>
                  <div className="kalk-compare-note">Pre saradnje sa nama</div>
                </div>
                <div className="kalk-compare-card kalk-compare-card--projected">
                  <div className="kalk-compare-label">Projekcija sa Velluto Nero</div>
                  <div className="kalk-compare-val">{fmt(projected)}</div>
                  <div className="kalk-compare-note">{growth.label} potencijal rasta</div>
                </div>
              </div>

              {/* Extra earnings */}
              <div className="kalk-extra">
                <span className="kalk-extra-label">Dodatni novac u džepu:</span>
                <span className="kalk-extra-val">+{fmt(extra)}/mes</span>
                <span className="kalk-extra-yearly">To je <strong>{fmt(yearly)}</strong> više godišnje</span>
              </div>

              {/* CTA */}
              <div className="kalk-cta">
                <a href="/#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Prijavi Se
                </a>
              </div>
            </div>
          )}

          {/* ── EARNINGS TAB ── */}
          {tab === 'earnings' && (
            <div className="kalk-tab-body">
              <div className="kalk-earn-grid">
                {[
                  { val: '$11M+', label: 'Godišnji prihod rostera', note: 'Verifikovano na live dashboardu' },
                  { val: '100–175%', label: 'Opseg rasta', note: 'Zavisno od startne tačke' },
                  { val: '2%', label: 'Stopa prihvatanja', note: 'Primamo najposvećenije' },
                ].map((c, i) => (
                  <div key={i} className="kalk-earn-card">
                    <div className="kalk-earn-val">{c.val}</div>
                    <div className="kalk-earn-label">{c.label}</div>
                    <div className="kalk-earn-note">{c.note}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="kalk-chart">
                <div className="kalk-chart-bars">
                  {CHART_BARS.map((h, i) => (
                    <div key={i} className="kalk-chart-bar-wrap">
                      <div className="kalk-chart-bar" style={{ height: `${h}%` }} />
                      <span className="kalk-chart-month">{MONTHS[i]}</span>
                    </div>
                  ))}
                </div>
                <div className="kalk-chart-legend">
                  <div className="kalk-legend-dot" />
                  <span>Prosečan rast kreatorki sa Velluto Nero</span>
                </div>
              </div>

              <div className="kalk-cta">
                <a href="/#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Rasti Sa Nama
                </a>
              </div>
            </div>
          )}

          {/* ── AUDIENCE TAB ── */}
          {tab === 'audience' && (
            <div className="kalk-tab-body">
              <div className="kalk-aud-grid">
                {/* Age */}
                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    Starosne grupe
                  </div>
                  {[['18–24','35%',35],['25–34','45%',45],['35–44','15%',15],['45+','5%',5]].map(([lbl,pct,w]) => (
                    <div key={lbl} className="kalk-demo-row">
                      <span className="kalk-demo-lbl">{lbl}</span>
                      <div className="kalk-demo-track"><div className="kalk-demo-fill" style={{ width: `${w}%` }} /></div>
                      <span className="kalk-demo-pct">{pct}</span>
                    </div>
                  ))}
                </div>

                {/* Gender */}
                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    Polna distribucija
                  </div>
                  {[['Muškarci','94%',94],['Žene','4%',4],['Ostalo','2%',2]].map(([lbl,pct,w]) => (
                    <div key={lbl} className="kalk-demo-row">
                      <span className="kalk-demo-lbl">{lbl}</span>
                      <div className="kalk-demo-track"><div className="kalk-demo-fill" style={{ width: `${w}%` }} /></div>
                      <span className="kalk-demo-pct">{pct}</span>
                    </div>
                  ))}
                </div>

                {/* Locations */}
                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Top tržišta
                  </div>
                  {[['🇺🇸','SAD','42%'],['🇮🇹','Italija','28%'],['🇬🇧','UK','12%'],['🇨🇦','Kanada','8%'],['🌍','Ostalo','10%']].map(([flag,name,pct]) => (
                    <div key={name} className="kalk-loc-row">
                      <span className="kalk-loc-name"><span className="kalk-loc-flag">{flag}</span>{name}</span>
                      <span className="kalk-loc-pct">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kalk-cta">
                <a href="/#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Tvoj Reech
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .kalk-section { padding: 80px 0; background: #1a1a1a; }
        .kalk-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .kalk-header { text-align: center; margin-bottom: 40px; }
        .kalk-header .chapter-label { color: #a9875c; border-color: rgba(169,135,92,0.35); }
        .kalk-title { font-family: var(--font-display); font-size: clamp(28px,4vw,40px); color: #fff; margin: 12px 0 10px; line-height: 1.1; }
        .kalk-em-plain { font-style: italic; color: rgba(255,255,255,0.75); }
        .kalk-em { font-style: italic; color: #a9875c; }
        .kalk-sub { font-size: 15px; color: rgba(255,255,255,0.4); margin: 0; }

        /* Dashboard shell — liquid glass */
        .kalk-dashboard {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 80px rgba(0,0,0,0.5);
          border-radius: 20px;
          overflow: hidden;
        }

        /* Top bar */
        .kalk-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .kalk-dash-profile { display: flex; align-items: center; gap: 12px; }
        .kalk-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(169,135,92,0.2); border: 1.5px solid rgba(169,135,92,0.5);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: #a9875c; flex-shrink: 0;
        }
        .kalk-username { display: flex; align-items: center; gap: 5px; font-size: 14px; font-weight: 600; color: #fff; }
        .kalk-verified { color: #a9875c; }
        .kalk-account-type { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }

        /* Tabs */
        .kalk-tabs { display: flex; gap: 4px; background: rgba(255,255,255,0.05); border-radius: 10px; padding: 4px; }
        .kalk-tab {
          padding: 7px 16px; border-radius: 7px; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.45); background: none; border: none; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .kalk-tab--active { background: rgba(169,135,92,0.2); color: #a9875c; }
        .kalk-tab:hover:not(.kalk-tab--active) { color: rgba(255,255,255,0.7); }

        /* Tab body */
        .kalk-tab-body { padding: 28px 24px 24px; display: flex; flex-direction: column; gap: 20px; min-height: 520px; }

        /* Slider */
        .kalk-input-row { display: flex; flex-direction: column; gap: 10px; }
        .kalk-input-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,0.5); }
        .kalk-slider-wrap { display: flex; align-items: center; gap: 16px; }
        .kalk-slider {
          flex: 1; -webkit-appearance: none; height: 6px; border-radius: 3px;
          outline: none; cursor: pointer;
        }
        .kalk-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: #a9875c; box-shadow: 0 0 0 3px rgba(169,135,92,0.25); cursor: pointer;
        }
        .kalk-slider-val { font-family: var(--font-display); font-size: 18px; color: #a9875c; white-space: nowrap; min-width: 90px; text-align: right; }

        /* Stats grid */
        .kalk-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        @media (max-width: 560px) { .kalk-stats { grid-template-columns: repeat(2,1fr); } }
        .kalk-stat { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 12px; text-align: center; }
        .kalk-stat-val { font-family: var(--font-display); font-size: 20px; color: #fff; line-height: 1; margin-bottom: 5px; font-style: italic; }
        .kalk-stat-val--gold { color: #a9875c; }
        .kalk-stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .kalk-stat-note { font-size: 11px; color: #a9875c; }

        /* Comparison */
        .kalk-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 460px) { .kalk-compare { grid-template-columns: 1fr; } }
        .kalk-compare-card { border-radius: 12px; padding: 18px 16px; }
        .kalk-compare-card--current { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); }
        .kalk-compare-card--projected { background: rgba(169,135,92,0.1); border: 1px solid rgba(169,135,92,0.3); }
        .kalk-compare-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .kalk-compare-val { font-family: var(--font-display); font-size: clamp(20px,3vw,26px); color: #fff; font-style: italic; margin-bottom: 4px; }
        .kalk-compare-card--projected .kalk-compare-val { color: #a9875c; }
        .kalk-compare-note { font-size: 11px; color: rgba(255,255,255,0.35); }

        /* Extra earnings */
        .kalk-extra {
          display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px;
          background: rgba(145,31,57,0.12); border: 1px solid rgba(145,31,57,0.3);
          border-radius: 12px; padding: 14px 18px;
        }
        .kalk-extra-label { font-size: 12px; color: rgba(255,255,255,0.5); }
        .kalk-extra-val { font-family: var(--font-display); font-size: 20px; color: #c94e6b; font-style: italic; }
        .kalk-extra-yearly { font-size: 12px; color: rgba(255,255,255,0.4); }
        .kalk-extra-yearly strong { color: rgba(255,255,255,0.7); }

        /* CTA */
        .kalk-cta { text-align: center; }
        .kalk-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #911f39; color: #fff;
          padding: 13px 28px; border-radius: 999px;
          font-size: 14px; font-weight: 700; border: none; cursor: pointer;
          text-decoration: none; transition: filter 0.2s, transform 0.2s;
          box-shadow: 0 0 32px rgba(145,31,57,0.35);
        }
        .kalk-cta-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

        /* ── Earnings tab ── */
        .kalk-earn-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        @media (max-width: 560px) { .kalk-earn-grid { grid-template-columns: 1fr; } }
        .kalk-earn-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 20px 16px; text-align: center; }
        .kalk-earn-val { font-family: var(--font-display); font-size: clamp(22px,2.5vw,28px); color: #a9875c; font-style: italic; margin-bottom: 6px; }
        .kalk-earn-label { font-size: 12px; font-weight: 600; color: #fff; margin-bottom: 4px; }
        .kalk-earn-note { font-size: 11px; color: rgba(255,255,255,0.35); }

        /* Chart */
        .kalk-chart { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px 16px 12px; }
        .kalk-chart-bars { display: flex; align-items: flex-end; gap: 6px; height: 120px; margin-bottom: 12px; }
        .kalk-chart-bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end; }
        .kalk-chart-bar { width: 100%; background: linear-gradient(to top, #a9875c, rgba(169,135,92,0.4)); border-radius: 4px 4px 0 0; transition: height 0.5s ease; }
        .kalk-chart-month { font-size: 9px; color: rgba(255,255,255,0.25); text-transform: uppercase; }
        .kalk-chart-legend { display: flex; align-items: center; gap: 8px; }
        .kalk-legend-dot { width: 10px; height: 10px; border-radius: 50%; background: #a9875c; flex-shrink: 0; }
        .kalk-chart-legend span { font-size: 11px; color: rgba(255,255,255,0.35); }

        /* ── Audience tab ── */
        .kalk-aud-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        @media (max-width: 680px) { .kalk-aud-grid { grid-template-columns: 1fr; } }
        .kalk-aud-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .kalk-aud-title { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.08em; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .kalk-demo-row { display: flex; align-items: center; gap: 8px; }
        .kalk-demo-lbl { font-size: 12px; color: rgba(255,255,255,0.45); width: 52px; flex-shrink: 0; }
        .kalk-demo-track { flex: 1; height: 4px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }
        .kalk-demo-fill { height: 100%; background: linear-gradient(90deg, #a9875c, rgba(169,135,92,0.5)); border-radius: 2px; }
        .kalk-demo-pct { font-size: 11px; font-weight: 600; color: #a9875c; width: 28px; text-align: right; }
        .kalk-loc-row { display: flex; align-items: center; justify-content: space-between; }
        .kalk-loc-name { display: flex; align-items: center; gap: 7px; font-size: 13px; color: rgba(255,255,255,0.6); }
        .kalk-loc-flag { font-size: 16px; }
        .kalk-loc-pct { font-size: 12px; font-weight: 600; color: #a9875c; }

        @media (max-width: 600px) {
          .kalk-dash-top { flex-direction: column; align-items: flex-start; }
          .kalk-tabs { width: 100%; justify-content: stretch; }
          .kalk-tab { flex: 1; text-align: center; }
          .kalk-tab-body { padding: 20px 16px 20px; }
        }
        ${light ? `
        /* Light varijanta — bela pozadina sekcije, dashboard ostaje taman */
        .kalk-section { background: #fff; }
        .kalk-title { color: #1a1a1a; }
        .kalk-em-plain { color: rgba(26,26,26,0.75); }
        .kalk-sub { color: #888; }
        .kalk-dashboard {
          background: #141414;
          box-shadow: 0 24px 80px rgba(0,0,0,0.25);
        }
        ` : ''}
      `}</style>
    </section>
  );
}
