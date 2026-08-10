'use client';
import { useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    label: 'Kalkulator',
    titlePlain: 'Vidi Tvoj',
    titleAccent: 'Potencijal',
    sub: 'Projektovana zarada sa Velluto Nero sistemom',
    avatar: 'Ti',
    accountType: 'Kreator nalog · Statistika',
    tabs: [['overview','Pregled'],['earnings','Zarada'],['audience','Publika']],
    sliderLabel: 'Tvoj trenutni mesečni prihod',
    stats: [
      { label: 'Prosečan rast',        note: '↑ Sa nama' },
      { label: 'Prosečno partnerstvo', note: 'Dugoročno' },
      { label: 'Podrška',              note: 'Uvek dostupno' },
      { label: 'Curenje identiteta',   note: '5+ godina' },
    ],
    compareCurrentLabel: 'Tvoj trenutni prihod',
    compareCurrentNote: 'Pre saradnje sa nama',
    compareProjectedLabel: 'Projekcija sa Velluto Nero',
    extraLabel: 'Dodatni novac u džepu:',
    extraMo: '/mes',
    extraYearly: (v) => <>To je <strong>{v}</strong> više godišnje</>,
    ctaOverview: 'Prijavi Se',
    ctaEarnings: 'Rasti Sa Nama',
    ctaAudience: 'Tvoj Reech',
    earnCards: [
      { val: '$11M+',   label: 'Godišnji prihod rostera', note: 'Verifikovano na live dashboardu' },
      { val: '100–175%', label: 'Opseg rasta',             note: 'Zavisno od startne tačke' },
      { val: '2%',      label: 'Stopa prihvatanja',       note: 'Primamo najposvećenije' },
    ],
    chartLegend: 'Prosečan rast kreatorki sa Velluto Nero',
    months: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Avg','Sep','Okt','Nov','Dec'],
    ageTitle: 'Starosne grupe',
    genderTitle: 'Polna distribucija',
    locationTitle: 'Top tržišta',
    gender: [['Muškarci','94%',94],['Žene','4%',4],['Ostalo','2%',2]],
    locations: [['🇺🇸','SAD','42%'],['🇮🇹','Italija','28%'],['🇬🇧','UK','12%'],['🇨🇦','Kanada','8%'],['🌍','Ostalo','10%']],
    growthLabel: '250%',
    partnershipVal: '3+ god',
    supportVal: '24/7',
    leakVal: '0%',
  },
  en: {
    label: 'Calculator',
    titlePlain: 'See Your',
    titleAccent: 'Potential',
    sub: 'Projected earnings with the Velluto Nero system',
    avatar: 'You',
    accountType: 'Creator account · Statistics',
    tabs: [['overview','Overview'],['earnings','Earnings'],['audience','Audience']],
    sliderLabel: 'Your current monthly revenue',
    stats: [
      { label: 'Average growth',       note: '↑ With us' },
      { label: 'Average partnership',  note: 'Long-term' },
      { label: 'Support',              note: 'Always available' },
      { label: 'Identity leaks',       note: '5+ years' },
    ],
    compareCurrentLabel: 'Your current revenue',
    compareCurrentNote: 'Before working with us',
    compareProjectedLabel: 'Projection with Velluto Nero',
    extraLabel: 'Extra money in your pocket:',
    extraMo: '/mo',
    extraYearly: (v) => <>That\'s <strong>{v}</strong> more per year</>,
    ctaOverview: 'Apply Now',
    ctaEarnings: 'Grow With Us',
    ctaAudience: 'Your Reach',
    earnCards: [
      { val: '$11M+',   label: 'Annual roster revenue',   note: 'Verified on live dashboard' },
      { val: '100–175%', label: 'Growth range',            note: 'Depending on starting point' },
      { val: '2%',      label: 'Acceptance rate',         note: 'We take the most committed' },
    ],
    chartLegend: 'Average growth of creators with Velluto Nero',
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    ageTitle: 'Age groups',
    genderTitle: 'Gender distribution',
    locationTitle: 'Top markets',
    gender: [['Men','94%',94],['Women','4%',4],['Other','2%',2]],
    locations: [['🇺🇸','USA','42%'],['🇮🇹','Italy','28%'],['🇬🇧','UK','12%'],['🇨🇦','Canada','8%'],['🌍','Other','10%']],
    growthLabel: '250%',
    partnershipVal: '3+ yrs',
    supportVal: '24/7',
    leakVal: '0%',
  },
  it: {
    label: 'Calcolatore',
    titlePlain: 'Scopri Il Tuo',
    titleAccent: 'Potenziale',
    sub: 'Guadagni proiettati con il sistema Velluto Nero',
    avatar: 'Tu',
    accountType: 'Account creator · Statistiche',
    tabs: [['overview','Panoramica'],['earnings','Guadagni'],['audience','Pubblico']],
    sliderLabel: 'Il tuo fatturato mensile attuale',
    stats: [
      { label: 'Crescita media',        note: '↑ Con noi' },
      { label: 'Partnership medio',     note: 'A lungo termine' },
      { label: 'Supporto',             note: 'Sempre disponibile' },
      { label: 'Fughe di identità',    note: '5+ anni' },
    ],
    compareCurrentLabel: 'Il tuo fatturato attuale',
    compareCurrentNote: 'Prima di lavorare con noi',
    compareProjectedLabel: 'Proiezione con Velluto Nero',
    extraLabel: 'Soldi extra in tasca:',
    extraMo: '/mese',
    extraYearly: (v) => <>Sono <strong>{v}</strong> in più all\'anno</>,
    ctaOverview: 'Candidati',
    ctaEarnings: 'Cresci Con Noi',
    ctaAudience: 'La Tua Portata',
    earnCards: [
      { val: '$11M+',   label: 'Fatturato annuo del roster', note: 'Verificato su dashboard live' },
      { val: '100–175%', label: 'Range di crescita',          note: 'A seconda del punto di partenza' },
      { val: '2%',      label: 'Tasso di accettazione',      note: 'Prendiamo i più impegnati' },
    ],
    chartLegend: 'Crescita media delle creator con Velluto Nero',
    months: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
    ageTitle: 'Gruppi di età',
    genderTitle: 'Distribuzione di genere',
    locationTitle: 'Mercati principali',
    gender: [['Uomini','94%',94],['Donne','4%',4],['Altro','2%',2]],
    locations: [['🇺🇸','USA','42%'],['🇮🇹','Italia','28%'],['🇬🇧','UK','12%'],['🇨🇦','Canada','8%'],['🌍','Altro','10%']],
    growthLabel: '250%',
    partnershipVal: '3+ anni',
    supportVal: '24/7',
    leakVal: '0%',
  },
};

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

const CHART_BARS = [45, 62, 78, 85, 70, 55, 48, 60, 82, 91, 100, 74];

export default function Kalkulator({ light = false }) {
  const lang = useLang();
  const t = T[lang] || T.sr;

  const [tab, setTab] = useState('overview');
  const [revenue, setRevenue] = useState(50000);

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
          <span className="chapter-label">{t.label}</span>
          <h2 className="kalk-title">
            <em className="kalk-em-plain">{t.titlePlain}</em>{' '}
            <em className="kalk-em">{t.titleAccent}</em>
          </h2>
          <p className="kalk-sub">{t.sub}</p>
        </div>

        <div className="kalk-dashboard">
          {/* Dashboard top bar */}
          <div className="kalk-dash-top">
            <div className="kalk-dash-profile">
              <div className="kalk-avatar">{t.avatar}</div>
              <div>
                <div className="kalk-username">
                  tvoj_nalog
                  <svg className="kalk-verified" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/>
                  </svg>
                </div>
                <div className="kalk-account-type">{t.accountType}</div>
              </div>
            </div>
            <div className="kalk-tabs">
              {t.tabs.map(([id, label]) => (
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
              <div className="kalk-input-row">
                <label className="kalk-input-label">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  {t.sliderLabel}
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

              <div className="kalk-stats">
                {[
                  { val: t.growthLabel,      ...t.stats[0] },
                  { val: t.partnershipVal,   ...t.stats[1] },
                  { val: t.supportVal,       ...t.stats[2] },
                  { val: t.leakVal,          ...t.stats[3] },
                ].map((s, i) => (
                  <div key={i} className="kalk-stat">
                    <div className={`kalk-stat-val${i === 0 ? ' kalk-stat-val--gold' : ''}`}>{s.val}</div>
                    <div className="kalk-stat-label">{s.label}</div>
                    <div className="kalk-stat-note">{s.note}</div>
                  </div>
                ))}
              </div>

              <div className="kalk-compare">
                <div className="kalk-compare-card kalk-compare-card--current">
                  <div className="kalk-compare-label">{t.compareCurrentLabel}</div>
                  <div className="kalk-compare-val">{fmt(revenue)}</div>
                  <div className="kalk-compare-note">{t.compareCurrentNote}</div>
                </div>
                <div className="kalk-compare-card kalk-compare-card--projected">
                  <div className="kalk-compare-label">{t.compareProjectedLabel}</div>
                  <div className="kalk-compare-val">{fmt(projected)}</div>
                  <div className="kalk-compare-note">{t.growthLabel} potencijal</div>
                </div>
              </div>

              <div className="kalk-extra">
                <span className="kalk-extra-label">{t.extraLabel}</span>
                <span className="kalk-extra-val">+{fmt(extra)}{t.extraMo}</span>
                <span className="kalk-extra-yearly">{t.extraYearly(fmt(yearly))}</span>
              </div>

              <div className="kalk-cta">
                <a href="#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  {t.ctaOverview}
                </a>
              </div>
            </div>
          )}

          {/* ── EARNINGS TAB ── */}
          {tab === 'earnings' && (
            <div className="kalk-tab-body">
              <div className="kalk-earn-grid">
                {t.earnCards.map((c, i) => (
                  <div key={i} className="kalk-earn-card">
                    <div className="kalk-earn-val">{c.val}</div>
                    <div className="kalk-earn-label">{c.label}</div>
                    <div className="kalk-earn-note">{c.note}</div>
                  </div>
                ))}
              </div>

              <div className="kalk-chart">
                <div className="kalk-chart-bars">
                  {CHART_BARS.map((h, i) => (
                    <div key={i} className="kalk-chart-bar-wrap">
                      <div className="kalk-chart-bar" style={{ height: `${h}%` }} />
                      <span className="kalk-chart-month">{t.months[i]}</span>
                    </div>
                  ))}
                </div>
                <div className="kalk-chart-legend">
                  <div className="kalk-legend-dot" />
                  <span>{t.chartLegend}</span>
                </div>
              </div>

              <div className="kalk-cta">
                <a href="#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  {t.ctaEarnings}
                </a>
              </div>
            </div>
          )}

          {/* ── AUDIENCE TAB ── */}
          {tab === 'audience' && (
            <div className="kalk-tab-body">
              <div className="kalk-aud-grid">
                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    {t.ageTitle}
                  </div>
                  {[['18–24','35%',35],['25–34','45%',45],['35–44','15%',15],['45+','5%',5]].map(([lbl,pct,w]) => (
                    <div key={lbl} className="kalk-demo-row">
                      <span className="kalk-demo-lbl">{lbl}</span>
                      <div className="kalk-demo-track"><div className="kalk-demo-fill" style={{ width: `${w}%` }} /></div>
                      <span className="kalk-demo-pct">{pct}</span>
                    </div>
                  ))}
                </div>

                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    {t.genderTitle}
                  </div>
                  {t.gender.map(([lbl,pct,w]) => (
                    <div key={lbl} className="kalk-demo-row">
                      <span className="kalk-demo-lbl">{lbl}</span>
                      <div className="kalk-demo-track"><div className="kalk-demo-fill" style={{ width: `${w}%` }} /></div>
                      <span className="kalk-demo-pct">{pct}</span>
                    </div>
                  ))}
                </div>

                <div className="kalk-aud-card">
                  <div className="kalk-aud-title">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {t.locationTitle}
                  </div>
                  {t.locations.map(([flag,name,pct]) => (
                    <div key={name} className="kalk-loc-row">
                      <span className="kalk-loc-name"><span className="kalk-loc-flag">{flag}</span>{name}</span>
                      <span className="kalk-loc-pct">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kalk-cta">
                <a href="#apply" className="kalk-cta-btn">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  {t.ctaAudience}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .kalk-section { padding: 80px 0; background: #1a1a1a; }
        @media (max-width: 640px) { .kalk-section { padding: 48px 0; } }
        .kalk-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .kalk-header { text-align: center; margin-bottom: 40px; }
        .kalk-header .chapter-label { color: #a9875c; border-color: rgba(169,135,92,0.35); }
        .kalk-title { font-family: var(--font-display); font-size: clamp(28px,4vw,40px); color: #fff; margin: 12px 0 10px; line-height: 1.1; }
        .kalk-em-plain { font-style: italic; color: rgba(255,255,255,0.75); }
        .kalk-em { font-style: italic; color: #a9875c; }
        .kalk-sub { font-size: 15px; color: rgba(255,255,255,0.4); margin: 0; }

        .kalk-dashboard {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.10), 0 24px 80px rgba(0,0,0,0.5);
          border-radius: 20px;
          overflow: hidden;
        }

        .kalk-dash-top {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px; padding: 20px 24px;
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

        .kalk-tabs { display: flex; gap: 4px; background: rgba(255,255,255,0.05); border-radius: 10px; padding: 4px; }
        .kalk-tab {
          padding: 7px 16px; border-radius: 7px; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.45); background: none; border: none; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .kalk-tab--active { background: rgba(169,135,92,0.2); color: #a9875c; }
        .kalk-tab:hover:not(.kalk-tab--active) { color: rgba(255,255,255,0.7); }

        .kalk-tab-body { padding: 28px 24px 24px; display: flex; flex-direction: column; gap: 20px; min-height: 520px; }

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

        .kalk-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        @media (max-width: 560px) { .kalk-stats { grid-template-columns: repeat(2,1fr); } }
        .kalk-stat { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 12px; text-align: center; }
        .kalk-stat-val { font-family: var(--font-display); font-size: 20px; color: #fff; line-height: 1; margin-bottom: 5px; font-style: italic; }
        .kalk-stat-val--gold { color: #a9875c; }
        .kalk-stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .kalk-stat-note { font-size: 11px; color: #a9875c; }

        .kalk-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 460px) { .kalk-compare { grid-template-columns: 1fr; } }
        .kalk-compare-card { border-radius: 12px; padding: 18px 16px; }
        .kalk-compare-card--current { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); }
        .kalk-compare-card--projected { background: rgba(169,135,92,0.1); border: 1px solid rgba(169,135,92,0.3); }
        .kalk-compare-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .kalk-compare-val { font-family: var(--font-display); font-size: clamp(20px,3vw,26px); color: #fff; font-style: italic; margin-bottom: 4px; }
        .kalk-compare-card--projected .kalk-compare-val { color: #a9875c; }
        .kalk-compare-note { font-size: 11px; color: rgba(255,255,255,0.35); }

        .kalk-extra {
          display: flex; flex-wrap: wrap; align-items: center; gap: 8px 16px;
          background: rgba(145,31,57,0.12); border: 1px solid rgba(145,31,57,0.3);
          border-radius: 12px; padding: 14px 18px;
        }
        .kalk-extra-label { font-size: 12px; color: rgba(255,255,255,0.5); }
        .kalk-extra-val { font-family: var(--font-display); font-size: 20px; color: #c94e6b; font-style: italic; }
        .kalk-extra-yearly { font-size: 12px; color: rgba(255,255,255,0.4); }
        .kalk-extra-yearly strong { color: rgba(255,255,255,0.7); }

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

        .kalk-earn-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        @media (max-width: 560px) { .kalk-earn-grid { grid-template-columns: 1fr; } }
        .kalk-earn-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 20px 16px; text-align: center; }
        .kalk-earn-val { font-family: var(--font-display); font-size: clamp(22px,2.5vw,28px); color: #a9875c; font-style: italic; margin-bottom: 6px; }
        .kalk-earn-label { font-size: 12px; font-weight: 600; color: #fff; margin-bottom: 4px; }
        .kalk-earn-note { font-size: 11px; color: rgba(255,255,255,0.35); }

        .kalk-chart { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px 16px 12px; }
        .kalk-chart-bars { display: flex; align-items: flex-end; gap: 6px; height: 120px; margin-bottom: 12px; }
        .kalk-chart-bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end; }
        .kalk-chart-bar { width: 100%; background: linear-gradient(to top, #a9875c, rgba(169,135,92,0.4)); border-radius: 4px 4px 0 0; transition: height 0.5s ease; }
        .kalk-chart-month { font-size: 9px; color: rgba(255,255,255,0.25); text-transform: uppercase; }
        .kalk-chart-legend { display: flex; align-items: center; gap: 8px; }
        .kalk-legend-dot { width: 10px; height: 10px; border-radius: 50%; background: #a9875c; flex-shrink: 0; }
        .kalk-chart-legend span { font-size: 11px; color: rgba(255,255,255,0.35); }

        .kalk-aud-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        @media (max-width: 680px) { .kalk-aud-grid { grid-template-columns: 1fr; } }
        .kalk-aud-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .kalk-aud-title { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.08em; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .kalk-demo-row { display: flex; align-items: center; gap: 8px; }
        .kalk-demo-lbl { font-size: 12px; color: rgba(255,255,255,0.45); width: 60px; flex-shrink: 0; }
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
