'use client';
import { useState } from 'react';

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function ReferralKalkulator() {
  const [revenue, setRevenue] = useState(50000);

  const commission = revenue * 0.10;
  const yearly = commission * 12;

  const sliderPct = (revenue / 800000) * 100;
  const sliderStyle = {
    background: `linear-gradient(90deg, #a9875c ${sliderPct}%, rgba(169,135,92,0.18) ${sliderPct}%)`,
  };

  return (
    <section className="kalk-section">
      <div className="kalk-container">
        <div className="kalk-dashboard">
          {/* Dashboard top bar */}
          <div className="kalk-dash-top">
            <div className="kalk-dash-profile">
              <div className="kalk-avatar">Ti</div>
              <div>
                <div className="kalk-username">
                  tvoja_preporuka
                  <svg className="kalk-verified" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/>
                  </svg>
                </div>
                <div className="kalk-account-type">Program preporuke · do 10% mesečno</div>
              </div>
            </div>
          </div>

          <div className="kalk-tab-body">
            {/* Slider */}
            <div className="kalk-input-row">
              <label className="kalk-input-label">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Mesečna zarada kreatorke koju preporučiš
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

            {/* Comparison */}
            <div className="kalk-compare">
              <div className="kalk-compare-card kalk-compare-card--current">
                <div className="kalk-compare-label">Zarada kreatorke</div>
                <div className="kalk-compare-val">{fmt(revenue)}<span className="kalk-per">/mes</span></div>
                <div className="kalk-compare-note">Njena mesečna zarada sa Velluto Nero</div>
              </div>
              <div className="kalk-compare-card kalk-compare-card--projected">
                <div className="kalk-compare-label">Tvoja provizija</div>
                <div className="kalk-compare-val">{fmt(commission)}<span className="kalk-per">/mes</span></div>
                <div className="kalk-compare-note">Do 10% — svaki mesec, automatski</div>
              </div>
            </div>

            {/* Yearly strip */}
            <div className="kalk-extra">
              <span className="kalk-extra-label">Za godinu dana to je:</span>
              <span className="kalk-extra-val">+{fmt(yearly)}</span>
              <span className="kalk-extra-yearly">Bez ijednog radnog sata — <strong>jedna WhatsApp poruka</strong> je sve što treba</span>
            </div>

            {/* CTA */}
            <div className="kalk-cta">
              <a href="https://wa.me/381000000000" target="_blank" rel="noopener noreferrer" className="kalk-cta-btn kalk-cta-btn--wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Preporuči Kreatorku
              </a>
            </div>
          </div>
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
        .kalk-sub { font-size: 15px; color: rgba(255,255,255,0.4); margin: 0 auto; max-width: 480px; line-height: 1.6; }

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
          gap: 16px;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .kalk-dash-profile { display: flex; align-items: center; gap: 12px; }
        .kalk-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: #a9875c;
          background: rgba(169,135,92,0.2); border: 1.5px solid rgba(169,135,92,0.5);
        }
        .kalk-username { display: flex; align-items: center; gap: 6px; font-size: 15px; font-weight: 700; color: #fff; }
        .kalk-verified { color: #a9875c; }
        .kalk-account-type { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 2px; }

        .kalk-tab-body { padding: 28px 24px; }

        /* Slider */
        .kalk-input-row { margin-bottom: 28px; }
        .kalk-input-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.55);
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 14px;
        }
        .kalk-input-label svg { color: #a9875c; }
        .kalk-slider-wrap { display: flex; align-items: center; gap: 18px; }
        .kalk-slider {
          flex: 1; -webkit-appearance: none; appearance: none;
          height: 6px; border-radius: 3px; outline: none; cursor: pointer;
        }
        .kalk-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px; border-radius: 50%;
          background: #a9875c; box-shadow: 0 0 0 3px rgba(169,135,92,0.25); cursor: pointer;
        }
        .kalk-slider::-moz-range-thumb {
          width: 20px; height: 20px; border-radius: 50%; border: none;
          background: #a9875c; box-shadow: 0 0 0 3px rgba(169,135,92,0.25); cursor: pointer;
        }
        .kalk-slider-val {
          min-width: 96px; text-align: right;
          font-family: var(--font-display); font-style: italic;
          font-size: 22px; color: #a9875c;
        }

        /* Comparison */
        .kalk-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
        @media (max-width: 640px) { .kalk-compare { grid-template-columns: 1fr; } }
        .kalk-compare-card { border-radius: 14px; padding: 22px 20px; text-align: center; }
        .kalk-compare-card--current { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); }
        .kalk-compare-card--projected { background: rgba(169,135,92,0.1); border: 1px solid rgba(169,135,92,0.3); }
        .kalk-compare-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 10px; }
        .kalk-compare-card--projected .kalk-compare-label { color: #a9875c; }
        .kalk-compare-val { font-family: var(--font-display); font-style: italic; font-size: clamp(1.8rem, 4vw, 2.5rem); color: #fff; line-height: 1; }
        .kalk-compare-card--projected .kalk-compare-val { color: #a9875c; }
        .kalk-per { font-size: 0.45em; color: rgba(255,255,255,0.4); font-style: normal; }
        .kalk-compare-note { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 10px; }

        /* Yearly strip */
        .kalk-extra {
          display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;
          background: rgba(145,31,57,0.12); border: 1px solid rgba(145,31,57,0.3);
          border-radius: 14px; padding: 18px 20px; margin-bottom: 26px;
          text-align: center;
        }
        .kalk-extra-label { font-size: 13px; color: rgba(255,255,255,0.55); }
        .kalk-extra-val { font-family: var(--font-display); font-style: italic; font-size: 26px; color: #911f39; filter: brightness(1.8); }
        .kalk-extra-yearly { width: 100%; font-size: 12px; color: rgba(255,255,255,0.4); }
        .kalk-extra-yearly strong { color: rgba(255,255,255,0.75); }

        /* CTA */
        .kalk-cta { text-align: center; }
        .kalk-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #911f39; color: #fff;
          font-size: 14px; font-weight: 700;
          border-radius: 999px; padding: 14px 32px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 28px rgba(145,31,57,0.35);
        }
        .kalk-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(145,31,57,0.5); }
        .kalk-cta-btn--wa {
          background: #25D366;
          color: #fff;
          box-shadow: 0 8px 28px rgba(37,211,102,0.35);
        }
        .kalk-cta-btn--wa:hover { box-shadow: 0 12px 36px rgba(37,211,102,0.5); }

        @media (max-width: 600px) {
          .kalk-tab-body { padding: 20px 16px 20px; }
          .kalk-slider-wrap { flex-direction: column; align-items: stretch; gap: 10px; }
          .kalk-slider-val { text-align: center; }
        }
      `}</style>
    </section>
  );
}
