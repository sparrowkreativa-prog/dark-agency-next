'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', type: 'VODIČ · 8 POGLAVLJA · BESPLATNO',
    title1: 'Vodič za BDSM kreatore', title2: 'koji zarađuju 2× više po fanu.',
    sub: 'Kompletan sistem za izgradnju profitabilnog BDSM brenda - od pozicioniranja niše i inverzije čatovanja do psihologije pretplatnika, dinamike sesije i strategije cena koja je jednoj stranici udvostručila prihode za jedan mesec.',
    stats: [{ num: '2×', label: 'više prihoda po fanu' }, { num: '$10K→$25K', label: 'za 1 mesec' }, { num: '8', label: 'poglavlja' }, { num: '0', label: 'ekstra saobraćaja' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'BDSM Kreatorska Mogućnost', desc: '~7 min · Zašto ova niša plaća 2× više po fanu.' },
      { num: '02', title: 'Izgradnja Niša Identiteta', desc: '~10 min · Brend koji fanovi osećaju kao autentičan, ne kao proizveden.' },
      { num: '03', title: 'Inverzija Čatovanja', desc: '~12 min · Zašto ti vodiš od prve poruke i kako to raditi.' },
      { num: '04', title: 'Dinamika Sesije', desc: '~11 min · Čitanje fetiševa, izgradnja tenzije, prodaja PPV-a.' },
      { num: '05', title: 'Preokret Cena Koji Je Udvostručio Prihode', desc: '~8 min · Bez ekstra saobraćaja, 2× prihoda.' },
      { num: '06', title: 'Marketing po Platformama', desc: '~13 min · Twitter, Reddit, Pornhub, FetLife za BDSM kreatore.' },
      { num: '07', title: 'Svaki Tip Fetiša', desc: '~14 min · Noge, ponižavanje, obožavanje, cuckold, breeding i još.' },
      { num: '08', title: 'Skaliranje Operacije', desc: '~10 min · Tagovanje pretplatnika, handoff smena, masovne poruke.' },
    ],
    ctaTitle: 'Spreman/a da ga pročitaš?', ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.', ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources', type: 'GUIDE · 8 CHAPTERS · FREE',
    title1: 'The BDSM creator playbook for', title2: 'earning 2× more per fan.',
    sub: 'The complete system for building a profitable BDSM brand — from niche positioning and chat inversion to subscriber psychology, session dynamics and the pricing strategy that doubled one page\'s revenue in a month.',
    stats: [{ num: '2×', label: 'more revenue per fan' }, { num: '$10K→$25K', label: 'in 1 month' }, { num: '8', label: 'chapters' }, { num: '0', label: 'extra traffic needed' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'The BDSM Creator Opportunity', desc: '~7 min · Why this niche pays 2× more per fan.' },
      { num: '02', title: 'Building a Niche Identity', desc: '~10 min · A brand fans experience as authentic, not manufactured.' },
      { num: '03', title: 'Chat Inversion', desc: '~12 min · Why you lead from the first message and how to do it.' },
      { num: '04', title: 'Session Dynamics', desc: '~11 min · Reading fetishes, building tension, selling PPV.' },
      { num: '05', title: 'The Pricing Reversal That Doubled Revenue', desc: '~8 min · No extra traffic, 2× revenue.' },
      { num: '06', title: 'Per-Platform Marketing', desc: '~13 min · Twitter, Reddit, Pornhub, FetLife for BDSM creators.' },
      { num: '07', title: 'Every Fetish Type', desc: '~14 min · Feet, humiliation, worship, cuckold, breeding and more.' },
      { num: '08', title: 'Scaling the Operation', desc: '~10 min · Subscriber tagging, shift handoffs, mass messages.' },
    ],
    ctaTitle: 'Ready to read it?', ctaSub: 'Free. No email. No credit card.', ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse', type: 'GUIDA · 8 CAPITOLI · GRATUITA',
    title1: 'Il playbook BDSM per creator che', title2: 'guadagnano 2× di più per fan.',
    sub: 'Il sistema completo per costruire un brand BDSM redditizio — dal posizionamento di nicchia e inversione della chat alla psicologia degli abbonati, dinamiche di sessione e la strategia dei prezzi che ha raddoppiato i ricavi di una pagina in un mese.',
    stats: [{ num: '2×', label: 'più ricavi per fan' }, { num: '$10K→$25K', label: 'in 1 mese' }, { num: '8', label: 'capitoli' }, { num: '0', label: 'traffico extra necessario' }],
    chaptersLabel: "Cosa c'è dentro",
    chapters: [
      { num: '01', title: 'L\'Opportunità BDSM per Creator', desc: '~7 min · Perché questa nicchia paga 2× di più per fan.' },
      { num: '02', title: 'Costruire un\'Identità di Nicchia', desc: '~10 min · Un brand che i fan vivono come autentico, non prodotto.' },
      { num: '03', title: 'Inversione della Chat', desc: '~12 min · Perché guidi tu dal primo messaggio e come farlo.' },
      { num: '04', title: 'Dinamiche di Sessione', desc: '~11 min · Leggere i feticismi, costruire tensione, vendere PPV.' },
      { num: '05', title: 'Il Ribaltamento dei Prezzi Che Ha Raddoppiato i Ricavi', desc: '~8 min · Zero traffico extra, 2× ricavi.' },
      { num: '06', title: 'Marketing per Piattaforma', desc: '~13 min · Twitter, Reddit, Pornhub, FetLife per creator BDSM.' },
      { num: '07', title: 'Ogni Tipo di Feticismo', desc: '~14 min · Piedi, umiliazione, adorazione, cuckold, breeding e altro.' },
      { num: '08', title: 'Scalare l\'Operazione', desc: '~10 min · Tagging abbonati, handoff turni, messaggi di massa.' },
    ],
    ctaTitle: 'Pronta a leggerla?', ctaSub: 'Gratuita. Nessuna email. Nessuna carta di credito.', ctaBtn: 'Scarica Gratis',
  },
};

export default function BdsmPlaybook() {
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
