'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/hooks/useContent';

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const T = {
  sr: {
    label: 'Paketi',
    titleItalic: 'Izaberi',
    titleGold: 'Svoj Model Saradnje',
    sub: 'Bez unaprednih troškova - zarađujemo tek kada i ti zaradiš.',
    badge: 'Najpopularnije',
    tableLabel: 'Pregled Svih Modela Saradnje',
    stavka: 'Stavka',
    osnova: 'Osnovna',
    napredna: 'Napredna',
    swipeHint: 'prevuci u stranu',
    cta: 'Prijavi se i zajedno ćemo odlučiti',
    ostaloLabel: 'Ostalo u Full Management:',
    plans: [
      {
        id: 'chat', title: 'Chat Only', subtitle: 'Osnovni Paket', featured: false,
        items: [
          '24/7 ili smensko pokrivanje DM-ova',
          'PPV prodaja, sexting/flert konverzacije u tvom tone-of-voice, tip menadžment',
          'Re-engagement neaktivnih pretplatnika',
          'Nedeljni izveštaj (prihod, broj poruka, konverzija)',
        ],
      },
      {
        id: 'hybrid', title: 'Chat + Growth', subtitle: 'Napredni Paket', featured: false,
        items: [
          'Sve iz Chat Only',
          'Vođenje profila radi promocije (X/Twitter, Reddit, TikTok, Instagram)',
          'Kalendar objava + osnovne growth kampanje',
          'Osnovna analitika rasta i konverzije',
        ],
      },
      {
        id: 'full', title: 'Full Management', subtitle: 'Premium – Otključava Sve', featured: true,
        perks: [
          { title: 'VIP status + godišnja putovanja', desc: 'Ulaskom u Full Management dobijaš status VIP klijenta sa pristupom dodatnim pogodnostima; svake godine vodimo ceo VIP tim negde u svetu na team-building putovanje.' },
          { title: 'Premium lokacije za sadržaj', desc: 'Ustupamo ti na korišćenje prelepe vile, stanove i lokacije u preko 12 zemalja, da tvoj sadržaj uvek izgleda premijum.' },
          { title: 'Oprema, svetla i garderoba', desc: 'Svetla, odeća i sav materijal koji ti treba - plaćamo mi.' },
          { title: 'Personal Brand Manager', desc: 'Posvećen isključivo tvom dugoročnom imidžu, pozicioniranju i cross-platform brendu - odvojeno od account managera koji vodi svakodnevnu operativu.' },
        ],
        items: [
          'Sve iz Chat Only i Chat + Growth',
          'Produkcija i editovanje sadržaja (foto/video), content calendar, kreativni pravac',
          'Dedicated Account Manager (lični menadžer na raspolaganju 24/7 za sve operativne i strateške odluke)',
          'Finansijsko/računovodstveno savetovanje',
          'Zaštita sadržaja / DMCA',
          'Dugoročni growth plan, prioritetna podrška',
        ],
      },
    ],
    tableRows: [
      { label: 'DM/chat (PPV, sexting, tip)',        chat: true,  hybrid: true,           full: true },
      { label: '24/7 pokrivenost',                   chat: true,  hybrid: true,           full: true },
      { label: 'Nedeljni izveštaj',                  chat: true,  hybrid: true,           full: true },
      { label: 'Rast na društvenim mrežama',         chat: false, hybrid: true,           full: true },
      { label: 'Kalendar objava + promo kampanje',   chat: false, hybrid: true,           full: true },
      { label: 'Analitika',                          chat: false, hybrid: 'osnovna',      full: 'napredna' },
      { label: 'VIP status + godišnja putovanja',   chat: false, hybrid: false,           full: true },
      { label: 'Premium lokacije za sadržaj',        chat: false, hybrid: false,           full: true },
      { label: 'Oprema, svetla i garderoba',         chat: false, hybrid: false,           full: true },
      { label: 'Personal Brand Manager',             chat: false, hybrid: false,           full: true },
      { label: 'Produkcija/editovanje sadržaja',     chat: false, hybrid: false,           full: true },
      { label: 'Dedicated Account Manager',          chat: false, hybrid: false,           full: true },
      { label: 'Finansije/računovodstvo',            chat: false, hybrid: false,           full: true },
      { label: 'Zaštita sadržaja / DMCA',            chat: false, hybrid: false,           full: true },
      { label: 'Dugoročni growth plan',              chat: false, hybrid: false,           full: true },
    ],
  },
  en: {
    label: 'Packages',
    titleItalic: 'Choose',
    titleGold: 'Your Collaboration Model',
    sub: 'No upfront costs — we earn only when you earn.',
    badge: 'Most Popular',
    tableLabel: 'Overview of All Collaboration Models',
    stavka: 'Feature',
    osnova: 'Basic',
    napredna: 'Advanced',
    swipeHint: 'swipe to see more',
    cta: 'Apply and we\'ll decide together',
    ostaloLabel: 'Also in Full Management:',
    plans: [
      {
        id: 'chat', title: 'Chat Only', subtitle: 'Basic Package', featured: false,
        items: [
          '24/7 or shift-based DM coverage',
          'PPV sales, sexting/flirt conversations in your tone-of-voice, tip management',
          'Re-engagement of inactive subscribers',
          'Weekly report (revenue, message count, conversion)',
        ],
      },
      {
        id: 'hybrid', title: 'Chat + Growth', subtitle: 'Advanced Package', featured: false,
        items: [
          'Everything from Chat Only',
          'Profile management for promotion (X/Twitter, Reddit, TikTok, Instagram)',
          'Posting calendar + basic growth campaigns',
          'Basic growth and conversion analytics',
        ],
      },
      {
        id: 'full', title: 'Full Management', subtitle: 'Premium – Unlocks Everything', featured: true,
        perks: [
          { title: 'VIP status + annual trips', desc: 'By joining Full Management you become a VIP client with access to exclusive perks; every year we take the entire VIP team somewhere in the world for a team-building trip.' },
          { title: 'Premium content locations', desc: 'We give you access to beautiful villas, apartments and locations in over 12 countries so your content always looks premium.' },
          { title: 'Equipment, lighting & wardrobe', desc: 'Lights, clothing and all the materials you need — we pay for them.' },
          { title: 'Personal Brand Manager', desc: 'Dedicated exclusively to your long-term image, positioning and cross-platform brand — separate from the account manager running daily operations.' },
        ],
        items: [
          'Everything from Chat Only and Chat + Growth',
          'Content production and editing (photo/video), content calendar, creative direction',
          'Dedicated Account Manager (personal manager available 24/7 for all operational and strategic decisions)',
          'Financial/accounting advisory',
          'Content protection / DMCA',
          'Long-term growth plan, priority support',
        ],
      },
    ],
    tableRows: [
      { label: 'DM/chat (PPV, sexting, tip)',     chat: true,  hybrid: true,        full: true },
      { label: '24/7 coverage',                   chat: true,  hybrid: true,        full: true },
      { label: 'Weekly report',                   chat: true,  hybrid: true,        full: true },
      { label: 'Social media growth',             chat: false, hybrid: true,        full: true },
      { label: 'Posting calendar + promo',        chat: false, hybrid: true,        full: true },
      { label: 'Analytics',                       chat: false, hybrid: 'basic',     full: 'advanced' },
      { label: 'VIP status + annual trips',       chat: false, hybrid: false,       full: true },
      { label: 'Premium content locations',       chat: false, hybrid: false,       full: true },
      { label: 'Equipment, lighting & wardrobe',  chat: false, hybrid: false,       full: true },
      { label: 'Personal Brand Manager',          chat: false, hybrid: false,       full: true },
      { label: 'Content production/editing',      chat: false, hybrid: false,       full: true },
      { label: 'Dedicated Account Manager',       chat: false, hybrid: false,       full: true },
      { label: 'Financial/accounting',            chat: false, hybrid: false,       full: true },
      { label: 'Content protection / DMCA',       chat: false, hybrid: false,       full: true },
      { label: 'Long-term growth plan',           chat: false, hybrid: false,       full: true },
    ],
  },
  it: {
    label: 'Pacchetti',
    titleItalic: 'Scegli',
    titleGold: 'Il Tuo Modello di Collaborazione',
    sub: 'Nessun costo anticipato — guadagniamo solo quando guadagni tu.',
    badge: 'Più Popolare',
    tableLabel: 'Panoramica di Tutti i Modelli',
    stavka: 'Funzionalità',
    osnova: 'Base',
    napredna: 'Avanzata',
    swipeHint: 'scorri per vedere altro',
    cta: 'Candidati e decidiamo insieme',
    ostaloLabel: 'Anche in Full Management:',
    plans: [
      {
        id: 'chat', title: 'Chat Only', subtitle: 'Pacchetto Base', featured: false,
        items: [
          'Copertura DM 24/7 o a turni',
          'Vendite PPV, conversazioni sexting/flirt nel tuo tone-of-voice, gestione mance',
          'Re-engagement degli abbonati inattivi',
          'Report settimanale (entrate, numero messaggi, conversione)',
        ],
      },
      {
        id: 'hybrid', title: 'Chat + Growth', subtitle: 'Pacchetto Avanzato', featured: false,
        items: [
          'Tutto di Chat Only',
          'Gestione profili per la promozione (X/Twitter, Reddit, TikTok, Instagram)',
          'Calendario pubblicazioni + campagne di crescita di base',
          'Analisi base di crescita e conversione',
        ],
      },
      {
        id: 'full', title: 'Full Management', subtitle: 'Premium – Sblocca Tutto', featured: true,
        perks: [
          { title: 'Status VIP + viaggi annuali', desc: 'Entrando in Full Management ottieni lo status di cliente VIP con accesso a vantaggi esclusivi; ogni anno portiamo tutto il team VIP da qualche parte nel mondo per un viaggio di team building.' },
          { title: 'Location premium per contenuti', desc: 'Ti mettiamo a disposizione ville, appartamenti e location in oltre 12 paesi affinché i tuoi contenuti abbiano sempre un aspetto premium.' },
          { title: 'Attrezzatura, luci e guardaroba', desc: 'Luci, abbigliamento e tutto il materiale di cui hai bisogno — paghiamo noi.' },
          { title: 'Personal Brand Manager', desc: 'Dedicato esclusivamente alla tua immagine a lungo termine, al posizionamento e al brand cross-platform — separato dall\'account manager che gestisce le operazioni quotidiane.' },
        ],
        items: [
          'Tutto di Chat Only e Chat + Growth',
          'Produzione e montaggio contenuti (foto/video), content calendar, direzione creativa',
          'Account Manager dedicato (manager personale disponibile 24/7 per tutte le decisioni operative e strategiche)',
          'Consulenza finanziaria/contabile',
          'Protezione contenuti / DMCA',
          'Piano di crescita a lungo termine, supporto prioritario',
        ],
      },
    ],
    tableRows: [
      { label: 'DM/chat (PPV, sexting, mance)',    chat: true,  hybrid: true,       full: true },
      { label: 'Copertura 24/7',                   chat: true,  hybrid: true,       full: true },
      { label: 'Report settimanale',               chat: true,  hybrid: true,       full: true },
      { label: 'Crescita sui social media',        chat: false, hybrid: true,       full: true },
      { label: 'Calendario + campagne promo',      chat: false, hybrid: true,       full: true },
      { label: 'Analisi',                          chat: false, hybrid: 'base',     full: 'avanzata' },
      { label: 'Status VIP + viaggi annuali',      chat: false, hybrid: false,      full: true },
      { label: 'Location premium per contenuti',   chat: false, hybrid: false,      full: true },
      { label: 'Attrezzatura, luci e guardaroba',  chat: false, hybrid: false,      full: true },
      { label: 'Personal Brand Manager',           chat: false, hybrid: false,      full: true },
      { label: 'Produzione/montaggio contenuti',   chat: false, hybrid: false,      full: true },
      { label: 'Account Manager dedicato',         chat: false, hybrid: false,      full: true },
      { label: 'Consulenza finanziaria',           chat: false, hybrid: false,      full: true },
      { label: 'Protezione contenuti / DMCA',      chat: false, hybrid: false,      full: true },
      { label: 'Piano crescita a lungo termine',   chat: false, hybrid: false,      full: true },
    ],
  },
};

function Cell({ val, isFull }) {
  if (val === true)  return <span className={`pk-cell-check${isFull ? ' pk-cell-check--full' : ''}`}>{CHECK}</span>;
  if (val === false) return <span className="pk-cell-dash">–</span>;
  return <span className={`pk-cell-text${isFull ? ' pk-cell-text--full' : ''}`}>{val}</span>;
}

export default function Paketi() {
  const lang = useLang();
  const t = T[lang] || T.sr;

  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const timer = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(timer); io?.disconnect(); };
  }, []);

  return (
    <section className="pk-section" ref={ref}>
      <div className="pk-container">
        <div className="pk-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="chapter-label">{t.label}</span>
          <h2 className="pk-title"><em className="pk-em">{t.titleItalic}</em> <em className="pk-em-gold">{t.titleGold}</em></h2>
          <p className="pk-sub">{t.sub}</p>
        </div>

        <div className="pk-grid">
          {t.plans.map((plan, i) => (
            <div key={plan.id}
              className={`pk-card${plan.featured ? ' pk-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s ease ${0.1 + i * 0.12}s` }}>

              {plan.featured && <div className="pk-badge">{t.badge}</div>}

              <div className="pk-plan-header">
                <h3 className="pk-plan-title">{plan.title}</h3>
                {plan.subtitle && <p className="pk-plan-subtitle">{plan.subtitle}</p>}
              </div>

              {plan.perks && (
                <div className="pk-perks">
                  {plan.perks.map(perk => (
                    <div key={perk.title} className="pk-perk">
                      <p className="pk-perk-title">{CHECK} {perk.title}</p>
                      <p className="pk-perk-desc">{perk.desc}</p>
                    </div>
                  ))}
                  <p className="pk-ostalo-label">{t.ostaloLabel}</p>
                </div>
              )}

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

          <div className="pk-grid-img"
            style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.36s' }}>
            <img src="/slika-paketi.jpg" alt="" className="pk-paketi-img" />
          </div>
        </div>

        <div className="pk-table-wrap"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s' }}>
          <div className="pk-table-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            {t.tableLabel}
          </div>
          <div className="pk-table-scroll">
            <table className="pk-table">
              <thead>
                <tr>
                  <th className="pk-th pk-th-label">{t.stavka}</th>
                  <th className="pk-th">Chat Only</th>
                  <th className="pk-th">Chat + Growth</th>
                  <th className="pk-th pk-th-full">Full Management</th>
                </tr>
              </thead>
              <tbody>
                {t.tableRows.map((row, i) => (
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
            {t.swipeHint}
          </p>
        </div>

        <div className="pk-bottom"
          style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.5s' }}>
          <a href="#apply" className="pk-bottom-cta">
            {t.cta} <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        .pk-section { padding: 96px 0; background: #fafaf8; }
        @media (max-width: 640px) { .pk-section { padding: 48px 0; } }
        .pk-container { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .pk-header { text-align: center; margin-bottom: 52px; }
        .pk-title { font-family: var(--font-display); font-size: clamp(28px,4vw,42px); color: #1a1a1a; margin: 12px 0 10px; line-height: 1.1; }
        .pk-em { font-style: italic; color: #1a1a1a; }
        .pk-em-gold { font-style: italic; color: #a9875c; }
        .pk-sub { font-size: 15px; color: #888; margin: 0; }

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

        .pk-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          background: #911f39; color: #fff;
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          padding: 5px 16px; border-radius: 999px;
          box-shadow: 0 4px 16px rgba(145,31,57,0.35);
          white-space: nowrap;
        }

        .pk-plan-header { text-align: center; }
        .pk-plan-title { font-family: var(--font-display); font-size: 25px; font-style: italic; color: #1a1a1a; margin: 0 0 4px; line-height: 1.2; }
        .pk-card--featured .pk-plan-title { color: #911f39; }
        .pk-plan-subtitle { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #aaa; margin: 0; font-weight: 600; }

        .pk-items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .pk-item { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #444; line-height: 1.5; }
        .pk-check { color: #a9875c; flex-shrink: 0; margin-top: 1px; }
        .pk-card--featured .pk-check { color: #911f39; }

        .pk-perks { display: flex; flex-direction: column; gap: 12px; border-bottom: 1px solid rgba(145,31,57,0.12); padding-bottom: 14px; }
        .pk-perk { display: flex; flex-direction: column; gap: 3px; }
        .pk-perk-title { display: flex; align-items: flex-start; gap: 7px; font-size: 13px; font-weight: 700; color: #911f39; margin: 0; line-height: 1.4; }
        .pk-perk-desc { font-size: 12px; color: #888; line-height: 1.55; margin: 0 0 0 21px; }
        .pk-ostalo-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.13em; color: #aaa; font-weight: 700; margin: 4px 0 0; }

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
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em;
          color: #fff; background: #911f39;
          border-radius: 12px 12px 0 0; padding: 12px 20px; margin: -28px -32px 20px;
        }
        @media (max-width: 680px) {
          .pk-table-label { margin: -20px -16px 16px; border-radius: 8px 8px 0 0; }
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

        @media (max-width: 680px) {
          .pk-table-scroll { overflow-x: visible; }
          .pk-table { min-width: 0; table-layout: fixed; width: 100%; }
          .pk-th { white-space: normal; font-size: 8.5px; letter-spacing: 0; padding: 6px 2px; line-height: 1.35; vertical-align: bottom; }
          .pk-th-label { width: 31%; }
          .pk-td { padding: 9px 4px; font-size: 11px; line-height: 1.35; }
          .pk-td-label { word-break: break-word; }
          .pk-cell-check svg { width: 13px; height: 13px; }
          .pk-cell-dash { font-size: 12px; }
          .pk-cell-text { font-size: 8.5px; letter-spacing: 0.02em; word-break: break-word; }
        }

        .pk-swipe-hint {
          display: none; align-items: center; justify-content: center; gap: 6px;
          font-size: 11px; color: #bbb; text-transform: uppercase; letter-spacing: 0.12em;
          margin-top: 12px; font-weight: 600;
        }

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
