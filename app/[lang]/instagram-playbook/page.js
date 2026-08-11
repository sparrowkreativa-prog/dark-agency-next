'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', type: 'VODIČ · 8 POGLAVLJA · BESPLATNO',
    title1: 'Instagram rast koji vodi fanove', title2: 'direktno na tvoj OnlyFans.',
    sub: 'Kompletan sistem za pretvaranje Instagram pratilaca u platiše — od bio optimizacije i taktike priča do algoritma reelsa i konverzionog toka koji je jednoj kreatorki udvostručio prihode za 6 nedelja.',
    stats: [{ num: '2×', label: 'prihodi za 6 nedelja' }, { num: '8%', label: 'stopa konverzije' }, { num: '8', label: 'poglavlja' }, { num: '0$', label: 'plaćene reklame' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'Zašto Instagram → OnlyFans Radi', desc: '~7 min · Psihologija fanova koji kupuju i kako je iskoristiti.' },
      { num: '02', title: 'Bio i Link U Bio Koji Konvertuje', desc: '~9 min · Tačno kako napraviti bio i Linktree koji tjera na klik.' },
      { num: '03', title: 'Algoritam za Kreatorke', desc: '~12 min · Šta Instagram ustvari povećava i kada da objavljuješ.' },
      { num: '04', title: 'Reels Koji Rade Bez Lica', desc: '~13 min · Formule reel videa za kreatorke koje žele privatnost.' },
      { num: '05', title: 'Priče kao Prodajni Kanal', desc: '~10 min · Dnevni ritual priča koji gradi iščekivanje i tjera na upis.' },
      { num: '06', title: 'Hashtag i SEO Strategija', desc: '~8 min · Kako da te pronađu prave osobe, ne samo šta god.' },
      { num: '07', title: 'Kolaboracije i Shoutout Sistem', desc: '~11 min · Rast bez plaćenih reklama kroz strateške partnerske objave.' },
      { num: '08', title: 'Analitika i Skaliranje', desc: '~10 min · Šta pratiti i kako znati kada da udvostručiš ono što radi.' },
    ],
    ctaTitle: 'Spreman/a da ga pročitaš?', ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.', ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources', type: 'PLAYBOOK · 8 CHAPTERS · FREE',
    title1: 'Instagram growth that funnels fans', title2: 'straight to your OnlyFans.',
    sub: 'The complete system for converting Instagram followers into paying subscribers — from bio optimisation and story tactics to the Reels algorithm and the conversion funnel that doubled one creator\'s revenue in 6 weeks.',
    stats: [{ num: '2×', label: 'revenue in 6 weeks' }, { num: '8%', label: 'conversion rate' }, { num: '8', label: 'chapters' }, { num: '$0', label: 'paid ads' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'Why Instagram → OnlyFans Works', desc: '~7 min · The fan psychology behind purchases and how to use it.' },
      { num: '02', title: 'A Bio and Link-in-Bio That Converts', desc: '~9 min · Exactly how to build a bio and Linktree that drives clicks.' },
      { num: '03', title: 'The Algorithm for Creators', desc: '~12 min · What Instagram actually boosts and when to post.' },
      { num: '04', title: 'Reels That Work Without Showing Your Face', desc: '~13 min · Reel video formulas for creators who value privacy.' },
      { num: '05', title: 'Stories as a Sales Channel', desc: '~10 min · The daily story ritual that builds anticipation and drives sign-ups.' },
      { num: '06', title: 'Hashtag and SEO Strategy', desc: '~8 min · How to get found by the right people, not just anyone.' },
      { num: '07', title: 'Collabs and Shoutout System', desc: '~11 min · Growth without paid ads through strategic partner posts.' },
      { num: '08', title: 'Analytics and Scaling', desc: '~10 min · What to track and how to know when to double down on what works.' },
    ],
    ctaTitle: 'Ready to read it?', ctaSub: 'Free. No email. No credit card.', ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse', type: 'PLAYBOOK · 8 CAPITOLI · GRATUITO',
    title1: 'La crescita su Instagram che porta i fan', title2: 'direttamente al tuo OnlyFans.',
    sub: 'Il sistema completo per convertire i follower di Instagram in abbonati paganti — dall\'ottimizzazione della bio e tattiche delle storie all\'algoritmo dei Reel e il funnel di conversione che ha raddoppiato i ricavi di una creator in 6 settimane.',
    stats: [{ num: '2×', label: 'ricavi in 6 settimane' }, { num: '8%', label: 'tasso di conversione' }, { num: '8', label: 'capitoli' }, { num: '0€', label: 'pubblicità pagata' }],
    chaptersLabel: "Cosa c'è dentro",
    chapters: [
      { num: '01', title: 'Perché Instagram → OnlyFans Funziona', desc: '~7 min · La psicologia dei fan che acquistano e come usarla.' },
      { num: '02', title: 'Una Bio e Link-in-Bio che Converte', desc: '~9 min · Esattamente come costruire una bio e un Linktree che spinge ai clic.' },
      { num: '03', title: 'L\'Algoritmo per Creator', desc: '~12 min · Cosa potenzia davvero Instagram e quando pubblicare.' },
      { num: '04', title: 'Reel che Funzionano Senza Mostrare il Viso', desc: '~13 min · Formule di video Reel per creator che tengono alla privacy.' },
      { num: '05', title: 'Le Storie come Canale di Vendita', desc: '~10 min · Il rituale giornaliero delle storie che crea aspettativa e spinge alle iscrizioni.' },
      { num: '06', title: 'Strategia Hashtag e SEO', desc: '~8 min · Come farti trovare dalle persone giuste, non da chiunque.' },
      { num: '07', title: 'Collab e Sistema di Shoutout', desc: '~11 min · Crescita senza pubblicità pagata tramite post partner strategici.' },
      { num: '08', title: 'Analitiche e Scalabilità', desc: '~10 min · Cosa monitorare e come sapere quando raddoppiare su ciò che funziona.' },
    ],
    ctaTitle: 'Pronta a leggerla?', ctaSub: 'Gratuita. Nessuna email. Nessuna carta di credito.', ctaBtn: 'Scarica Gratis',
  },
};

export default function InstagramPlaybook() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;
  return (
    <div>
      <Header />
      <main className="pb-page">
        <div className="pb-hero">
          <Link href={`${base}/resursi`} className="pb-back">{t.back}</Link>
          <span className="pb-type">{t.type}</span>
          <h1 className="pb-title">{t.title1}<br /><span style={{ color: '#a9875c' }}>{t.title2}</span></h1>
          <p className="pb-sub">{t.sub}</p>
          <div className="pb-stats">{t.stats.map(s => <div key={s.label} className="pb-stat"><span className="pb-stat-num">{s.num}</span><span className="pb-stat-label">{s.label}</span></div>)}</div>
        </div>
        <div className="container pb-body">
          <h2 className="pb-chapters-title">{t.chaptersLabel}</h2>
          <div className="pb-chapters">{t.chapters.map(c => <div key={c.num} className="pb-chapter"><span className="pb-chapter-num">{c.num}</span><div><h3 className="pb-chapter-title">{c.title}</h3><p className="pb-chapter-desc">{c.desc}</p></div></div>)}</div>
          <div className="pb-cta"><h2 className="pb-cta-title">{t.ctaTitle}</h2><p className="pb-cta-sub">{t.ctaSub}</p><a href="https://wa.me/381000000000" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">{t.ctaBtn} <span className="btn-arrow">→</span></a></div>
        </div>
      </main>
      <SiteFooter />
      <style>{`.pb-page{background:#fafaf8;min-height:100vh}.pb-hero{background:#1a1a1a;padding:64px 24px 56px;text-align:center}.pb-back{display:inline-block;font-size:13px;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:24px}.pb-type{display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;color:#a9875c;text-transform:uppercase;margin-bottom:20px}.pb-title{font-family:var(--font-display);font-size:clamp(1.8rem,4.5vw,3rem);font-style:italic;color:#fff;line-height:1.15;margin:0 0 20px}.pb-sub{font-size:1rem;color:rgba(255,255,255,0.55);max-width:580px;margin:0 auto 40px;line-height:1.75}.pb-stats{display:flex;justify-content:center;gap:40px;flex-wrap:wrap}.pb-stat{text-align:center}.pb-stat-num{display:block;font-family:var(--font-display);font-size:1.8rem;font-style:italic;color:#a9875c;line-height:1}.pb-stat-label{display:block;font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-top:6px}.pb-body{padding-top:56px;padding-bottom:96px}.pb-chapters-title{font-family:var(--font-display);font-style:italic;font-size:1.5rem;color:#1a1a1a;margin:0 0 24px}.pb-chapters{display:flex;flex-direction:column;gap:2px;margin-bottom:64px}.pb-chapter{display:flex;gap:20px;align-items:flex-start;background:#fff;border:1px solid rgba(0,0,0,0.07);border-radius:14px;padding:20px 24px;transition:border-color 0.2s}.pb-chapter:hover{border-color:rgba(169,135,92,0.3)}.pb-chapter-num{font-family:var(--font-display);font-style:italic;font-size:1.4rem;color:rgba(169,135,92,0.4);line-height:1;flex-shrink:0;width:36px}.pb-chapter-title{font-size:0.95rem;font-weight:700;color:#1a1a1a;margin:0 0 6px}.pb-chapter-desc{font-size:0.85rem;color:#888;margin:0;line-height:1.55}.pb-cta{background:#1a1a1a;border-radius:24px;padding:56px 32px;text-align:center}.pb-cta-title{font-family:var(--font-display);font-style:italic;font-size:clamp(1.6rem,3.5vw,2.2rem);color:#fff;margin:0 0 12px}.pb-cta-sub{font-size:0.95rem;color:rgba(255,255,255,0.5);margin:0 0 28px}`}</style>
    </div>
  );
}
