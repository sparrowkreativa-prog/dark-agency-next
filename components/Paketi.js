'use client';
import { useEffect, useRef, useState } from 'react';

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const PLANS = [
  {
    id: 'chat',
    title: 'Chat Only',
    subtitle: 'osnovni paket',
    items: [
      '24/7 ili smensko pokrivanje DM-ova',
      'PPV prodaja, sexting/flert konverzacije u tvom tone-of-voice, tip menadžment',
      'Re-engagement neaktivnih pretplatnika',
      'Nedeljni izveštaj (prihod, broj poruka, konverzija)',
    ],
    featured: false,
  },
  {
    id: 'hybrid',
    title: 'Chat + Growth',
    subtitle: 'napredni paket',
    items: [
      'Sve iz Chat Only',
      'Vođenje profila radi promocije (X/Twitter, Reddit, TikTok, Instagram)',
      'Kalendar objava + osnovne growth kampanje',
      'Osnovna analitika rasta i konverzije',
    ],
    featured: false,
  },
  {
    id: 'full',
    title: 'Full Management',
    subtitle: 'premium – otključava sve',
    badge: 'Najpopularnije',
    perks: [
      { title: 'VIP status + godišnja putovanja', desc: 'Ulaskom u Full Management dobijaš status VIP klijenta sa pristupom dodatnim pogodnostima; svake godine vodimo ceo VIP tim negde u svetu na team-building putovanje.' },
      { title: 'Premium lokacije za sadržaj', desc: 'Ustupamo ti na korišćenje prelepe vile, stanove i lokacije u preko 12 zemalja, da tvoj sadržaj uvek izgleda premijum.' },
      { title: 'Oprema, svetla i garderoba', desc: 'Svetla, odeća i sav materijal koji ti treba — plaćamo mi.' },
      { title: 'Personal Brand Manager', desc: 'Posvećen isključivo tvom dugoročnom imidžu, pozicioniranju i cross-platform brendu — odvojeno od account managera koji vodi svakodnevnu operativu.' },
    ],
    items: [
      'Sve iz Chat Only i Chat + Growth',
      'Produkcija i editovanje sadržaja (foto/video), content calendar, kreativni pravac',
      'Dedicated Account Manager (lični menadžer na raspolaganju 24/7 za sve operativne i strateške odluke)',
      'Finansijsko/računovodstveno savetovanje',
      'Zaštita sadržaja / DMCA',
      'Dugoročni growth plan, prioritetna podrška',
    ],
    featured: true,
  },
];

const TABLE_ROWS = [
  { label: 'DM/chat (PPV, sexting, tip)', chat: true,  hybrid: true,       full: true },
  { label: '24/7 pokrivenost',            chat: true,  hybrid: true,       full: true },
  { label: 'Nedeljni izveštaj',           chat: true,  hybrid: true,       full: true },
  { label: 'Rast na društvenim mrežama',  chat: false, hybrid: true,       full: true },
  { label: 'Kalendar objava + promo kampanje', chat: false, hybrid: true,  full: true },
  { label: 'Analitika',                   chat: false, hybrid: 'osnovna',  full: 'napredna' },
  { label: 'VIP status + godišnja putovanja', chat: false, hybrid: false,  full: true },
  { label: 'Premium lokacije za sadržaj', chat: false, hybrid: false,      full: true },
  { label: 'Oprema, svetla i garderoba',  chat: false, hybrid: false,      full: true },
  { label: 'Personal Brand Manager',      chat: false, hybrid: false,      full: true },
  { label: 'Produkcija/editovanje sadržaja', chat: false, hybrid: false,   full: true },
  { label: 'Dedicated Account Manager',   chat: false, hybrid: false,      full: true },
  { label: 'Finansije/računovodstvo',     chat: false, hybrid: false,      full: true },
  { label: 'Zaštita sadržaja / DMCA',     chat: false, hybrid: false,      full: true },
  { label: 'Dugoročni growth plan',       chat: false, hybrid: false,      full: true },
];

function Cell({ val, isFull }) {
  if (val === true)  return <span className={`pk-cell-check${isFull ? ' pk-cell-check--full' : ''}`}>{CHECK}</span>;
  if (val === false) return <span className="pk-cell-dash">–</span>;
  return <span className={`pk-cell-text${isFull ? ' pk-cell-text--full' : ''}`}>{val}</span>;
}

export default function Paketi() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

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

  return (
    <section className="pk-section" ref={ref}>
      <div className="pk-container">
        <div className="pk-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="chapter-label">Paketi</span>
          <h2 className="pk-title"><em className="pk-em">Izaberi</em> <em className="pk-em-gold">Svoj Model Saradnje</em></h2>
          <p className="pk-sub">Bez unaprednih troškova — zarađujemo tek kada i ti zaradiš.</p>
        </div>

        <div className="pk-grid">
          {PLANS.map((plan, i) => (
            <div key={plan.id}
              className={`pk-card${plan.featured ? ' pk-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s ease ${0.1 + i * 0.12}s` }}>

              {plan.badge && <div className="pk-badge">{plan.badge}</div>}

              <div className="pk-plan-header">
                <h3 className="pk-plan-title">{plan.title}</h3>
                {plan.subtitle && <p className="pk-plan-subtitle">{plan.subtitle}</p>}
              </div>

              {/* VIP perks for Full Management */}
              {plan.perks && (
                <div className="pk-perks">
                  {plan.perks.map(perk => (
                    <div key={perk.title} className="pk-perk">
                      <p className="pk-perk-title">{CHECK} {perk.title}</p>
                      <p className="pk-perk-desc">{perk.desc}</p>
                    </div>
                  ))}
                  <p className="pk-ostalo-label">Ostalo u Full Management:</p>
                </div>
              )}

              {/* Bullet items */}
              <ul className="pk-items">
                {plan.items.map(item => (
                  <li key={item} className="pk-item">
                    <span className="pk-check">{CHECK}</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* Image spanning cols 1-2, row 2 */}
          <div className="pk-grid-img"
            style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.36s' }}>
            <img src="/slika-paketi.jpg" alt="" className="pk-paketi-img" />
          </div>
        </div>

        {/* Comparison table */}
        <div className="pk-table-wrap"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s' }}>
          <div className="pk-table-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            Uključeno u Puno Upravljanje
          </div>
          <div className="pk-table-scroll" id="pk-table-scroll">
            <table className="pk-table">
              <thead>
                <tr>
                  <th className="pk-th pk-th-label">Stavka</th>
                  <th className="pk-th">Chat Only</th>
                  <th className="pk-th">Chat + Growth</th>
                  <th className="pk-th pk-th-full">Full Management</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'pk-tr-even' : ''}>
                    <td className="pk-td pk-td-label">{row.label}</td>
                    <td className="pk-td pk-td-center"><Cell val={row.chat} isFull={false} /></td>
                    <td className="pk-td pk-td-center"><Cell val={row.hybrid} isFull={false} /></td>
                    <td className="pk-td pk-td-center pk-td-full"><Cell val={row.full} isFull={true} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="pk-swipe-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            prevuci u stranu
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="pk-bottom"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <a href="/#apply" className="pk-bottom-cta">
            Prijavi se i zajedno ćemo odlučiti <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        .pk-section { padding: 96px 0; background: #fafaf8; }
        .pk-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .pk-header { text-align: center; margin-bottom: 52px; }
        .pk-title { font-family: var(--font-display); font-size: clamp(28px,4vw,42px); color: #1a1a1a; margin: 12px 0 10px; line-height: 1.1; }
        .pk-em { font-style: italic; color: #1a1a1a; }
        .pk-em-gold { font-style: italic; color: #a9875c; }
        .pk-sub { font-size: 15px; color: #888; margin: 0; }

        /* Grid */
        .pk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; margin-bottom: 40px; }
        .pk-card--featured { grid-column: 3; grid-row: 1 / 3; }
        .pk-grid-img { grid-column: 1 / 3; grid-row: 2; }
        .pk-paketi-img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; display: block; }
        @media (max-width: 860px) {
          .pk-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
          .pk-card--featured { grid-column: auto; grid-row: auto; }
          .pk-grid-img { grid-column: auto; grid-row: auto; order: 4; }
          .pk-paketi-img { height: 280px; }
        }

        /* Card */
        .pk-card {
          position: relative;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 32px 24px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .pk-card--featured {
          background: rgba(255,255,255,0.88);
          border: 1.5px solid rgba(145,31,57,0.25);
          box-shadow: 0 12px 48px rgba(145,31,57,0.12), 0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1);
        }

        /* Badge */
        .pk-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: #911f39; color: #fff;
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          padding: 5px 16px; border-radius: 999px;
          box-shadow: 0 4px 16px rgba(145,31,57,0.35);
          white-space: nowrap;
        }

        /* Plan header */
        .pk-plan-header { text-align: center; }
        .pk-plan-title { font-family: var(--font-display); font-size: 20px; font-style: italic; color: #1a1a1a; margin: 0 0 4px; line-height: 1.2; }
        .pk-card--featured .pk-plan-title { color: #911f39; }
        .pk-plan-subtitle { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #aaa; margin: 0; font-weight: 600; }

        /* Bullet items */
        .pk-items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .pk-item { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #444; line-height: 1.5; }
        .pk-check { color: #a9875c; flex-shrink: 0; margin-top: 1px; }
        .pk-card--featured .pk-check { color: #911f39; }

        /* Full Management perks */
        .pk-perks { display: flex; flex-direction: column; gap: 12px; border-bottom: 1px solid rgba(145,31,57,0.12); padding-bottom: 14px; }
        .pk-perk { display: flex; flex-direction: column; gap: 3px; }
        .pk-perk-title { display: flex; align-items: flex-start; gap: 7px; font-size: 13px; font-weight: 700; color: #911f39; margin: 0; line-height: 1.4; }
        .pk-perk-desc { font-size: 12px; color: #888; line-height: 1.55; margin: 0 0 0 21px; }
        .pk-ostalo-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.13em; color: #aaa; font-weight: 700; margin: 4px 0 0; }

        /* Comparison table */
        .pk-table-wrap {
          margin-bottom: 28px;
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border: 1px solid rgba(145,31,57,0.15);
          box-shadow: 0 4px 24px rgba(145,31,57,0.06), inset 0 1px 0 rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 28px 32px;
        }
        @media (max-width: 680px) { .pk-table-wrap { padding: 20px 16px; } }
        .pk-table-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em;
          color: #911f39; background: rgba(145,31,57,0.07); border: 1px solid rgba(145,31,57,0.18);
          border-radius: 999px; padding: 5px 14px; margin-bottom: 20px;
        }
        .pk-table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .pk-table { width: 100%; border-collapse: collapse; min-width: 480px; }
        .pk-th {
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #999; padding: 8px 14px; text-align: center; border-bottom: 1.5px solid rgba(0,0,0,0.08);
          white-space: nowrap;
        }
        .pk-th-label { text-align: left; }
        .pk-th-full { color: #911f39; }
        .pk-td { padding: 10px 14px; font-size: 13px; color: #555; border-bottom: 1px solid rgba(0,0,0,0.05); vertical-align: middle; }
        .pk-td-label { font-weight: 500; color: #333; }
        .pk-td-center { text-align: center; }
        .pk-td-full { background: rgba(145,31,57,0.03); }
        .pk-tr-even td { background: rgba(0,0,0,0.018); }
        .pk-tr-even .pk-td-full { background: rgba(145,31,57,0.05); }
        .pk-cell-check { color: #a9875c; display: inline-flex; align-items: center; justify-content: center; }
        .pk-cell-check--full { color: #911f39; }
        .pk-cell-dash { color: #ccc; font-size: 15px; line-height: 1; }
        .pk-cell-text { font-size: 11px; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
        .pk-cell-text--full { color: #911f39; }

        /* Mobile: cela tabela vidljiva, bez skrola */
        @media (max-width: 680px) {
          .pk-table-scroll { overflow-x: visible; }
          .pk-table { min-width: 0; table-layout: fixed; width: 100%; }
          .pk-th {
            white-space: normal;
            font-size: 8.5px;
            letter-spacing: 0;
            padding: 6px 2px;
            line-height: 1.35;
            vertical-align: bottom;
          }
          .pk-th-label { width: 31%; }
          .pk-td { padding: 9px 4px; font-size: 11px; line-height: 1.35; }
          .pk-td-label { word-break: break-word; }
          .pk-cell-check svg { width: 13px; height: 13px; }
          .pk-cell-dash { font-size: 12px; }
          .pk-cell-text { font-size: 8.5px; letter-spacing: 0.02em; word-break: break-word; }
        }

        /* Swipe hint */
        .pk-swipe-hint {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 11px;
          color: #bbb;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-top: 12px;
          font-weight: 600;
        }

        /* Bottom */
        .pk-bottom { text-align: center; display: flex; justify-content: center; margin-top: 8px; }
        .pk-bottom-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #911f39; color: #fff;
          padding: 14px 32px; border-radius: 999px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          box-shadow: 0 4px 24px rgba(145,31,57,0.3);
          transition: filter 0.2s, transform 0.2s;
        }
        .pk-bottom-cta:hover { filter: brightness(1.1); transform: translateY(-1px); }
      `}</style>
    </section>
  );
}
