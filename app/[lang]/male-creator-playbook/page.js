'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', type: 'VODIČ · 8 POGLAVLJA · ~2 SATA ČITANJA · BESPLATNO',
    title1: 'Sistem koji stoji iza muških kreatora', title2: 'koji zarađuju $30K–$50K mesečno.',
    sub: '8 poglavlja. Kompletan sistem za izgradnju i skaliranje muških kreatorskih naloga. Muški kreatori su masivno nedovoljno posluženi, publika plaća više, a ličnost je praznina koju niko ne popunjava.',
    stats: [{ num: '2–3×', label: 'više PPV troše' }, { num: '$120–250', label: 'prosečan LTV' }, { num: '$30K+', label: 'mesečni potencijal' }, { num: '8', label: 'poglavlja' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'Muška Kreatorska Mogućnost', desc: '~14 min · Zašto je najnedovoljno posluženo tržište u kreatorskoj ekonomiji i najviše plaća.' },
      { num: '02', title: 'Izgradnja Brend Arhetipa', desc: '~12 min · Identitet koji te odvaja od svakog tihog physique naloga.' },
      { num: '03', title: 'Mapiranje Ciljne Publike', desc: '~11 min · Psihologija kupca gej/bi muške publike i kako je koristiti.' },
      { num: '04', title: 'Podešavanje OnlyFans Naloga', desc: '~9 min · Jedna stranica, trekking linkovi i besplatni trial levci.' },
      { num: '05', title: 'Sistem Višekratnog Korišćenja Sadržaja', desc: '~10 min · Više platformi iz jednog teretana snimanja nedeljno.' },
      { num: '06', title: 'Čatovanje i PPV Eskalacija', desc: '~12 min · Sistem izgrađen za muške publike.' },
      { num: '07', title: 'Promocija Između Platformi', desc: '~10 min · Instagram, Reddit, Twitter/X za muške kreatore.' },
      { num: '08', title: 'Skaliranje do $30K-$50K Mesečno', desc: '~11 min · Operativni sistem koji raste sa tobom.' },
    ],
    ctaTitle: 'Spreman/a da ga pročitaš?', ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.', ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources', type: 'GUIDE · 8 CHAPTERS · ~2 HOURS READING · FREE',
    title1: 'The system behind male creators', title2: 'earning $30K–$50K per month.',
    sub: '8 chapters. The complete system for building and scaling male creator accounts. Male creators are massively underserved, the audience pays more, and personality is the gap nobody is filling.',
    stats: [{ num: '2–3×', label: 'more PPV spend' }, { num: '$120–250', label: 'average LTV' }, { num: '$30K+', label: 'monthly potential' }, { num: '8', label: 'chapters' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'The Male Creator Opportunity', desc: '~14 min · Why this is the most underserved and highest-paying market in the creator economy.' },
      { num: '02', title: 'Building a Brand Archetype', desc: '~12 min · An identity that separates you from every silent physique account.' },
      { num: '03', title: 'Audience Mapping', desc: '~11 min · The buyer psychology of gay/bi male audiences and how to use it.' },
      { num: '04', title: 'OnlyFans Account Setup', desc: '~9 min · One page, tracking links and free trial funnels.' },
      { num: '05', title: 'Content Repurposing System', desc: '~10 min · Multiple platforms from one weekly gym shoot.' },
      { num: '06', title: 'Chatting & PPV Escalation', desc: '~12 min · A system built for male audiences.' },
      { num: '07', title: 'Cross-Platform Promotion', desc: '~10 min · Instagram, Reddit, Twitter/X for male creators.' },
      { num: '08', title: 'Scaling to $30K–$50K Per Month', desc: '~11 min · The operating system that grows with you.' },
    ],
    ctaTitle: 'Ready to read it?', ctaSub: 'Free. No email. No credit card.', ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse', type: 'GUIDA · 8 CAPITOLI · ~2 ORE DI LETTURA · GRATUITA',
    title1: 'Il sistema dietro i creator maschili', title2: 'che guadagnano $30K–$50K al mese.',
    sub: '8 capitoli. Il sistema completo per costruire e scalare account di creator maschili. I creator maschili sono massicciamente poco serviti, il pubblico paga di più, e la personalità è il vuoto che nessuno riempie.',
    stats: [{ num: '2–3×', label: 'più spesa PPV' }, { num: '$120–250', label: 'LTV medio' }, { num: '$30K+', label: 'potenziale mensile' }, { num: '8', label: 'capitoli' }],
    chaptersLabel: "Cosa c'è dentro",
    chapters: [
      { num: '01', title: 'L\'Opportunità dei Creator Maschili', desc: '~14 min · Perché questo è il mercato più poco servito e meglio pagato nell\'economia dei creator.' },
      { num: '02', title: 'Costruire un Archetipo di Brand', desc: '~12 min · Un\'identità che ti separa da ogni account physique silenzioso.' },
      { num: '03', title: 'Mappatura del Pubblico Target', desc: '~11 min · La psicologia dell\'acquirente del pubblico maschile gay/bi e come usarla.' },
      { num: '04', title: 'Configurazione Account OnlyFans', desc: '~9 min · Una pagina, link di tracciamento e funnel di prova gratuita.' },
      { num: '05', title: 'Sistema di Riutilizzo dei Contenuti', desc: '~10 min · Più piattaforme da una singola sessione settimanale in palestra.' },
      { num: '06', title: 'Chat e Escalation PPV', desc: '~12 min · Un sistema costruito per il pubblico maschile.' },
      { num: '07', title: 'Promozione Cross-Platform', desc: '~10 min · Instagram, Reddit, Twitter/X per creator maschili.' },
      { num: '08', title: 'Scalare a $30K–$50K al Mese', desc: '~11 min · Il sistema operativo che cresce con te.' },
    ],
    ctaTitle: 'Pronto a leggerla?', ctaSub: 'Gratuita. Nessuna email. Nessuna carta di credito.', ctaBtn: 'Scarica Gratis',
  },
};

export default function MaleCreatorPlaybook() {
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
      <style>{`.pb-page{background:#fafaf8;min-height:100vh}.pb-hero{background:#1a1a1a;padding:112px 24px 56px;text-align:center}.pb-back{display:inline-block;font-size:13px;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:24px}.pb-type{display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;color:#a9875c;text-transform:uppercase;margin-bottom:20px}.pb-title{font-family:var(--font-display);font-size:clamp(1.8rem,4.5vw,3rem);font-style:italic;color:#fff;line-height:1.15;margin:0 0 20px}.pb-sub{font-size:1rem;color:rgba(255,255,255,0.55);max-width:580px;margin:0 auto 40px;line-height:1.75}.pb-stats{display:flex;justify-content:center;gap:40px;flex-wrap:wrap}.pb-stat{text-align:center}.pb-stat-num{display:block;font-family:var(--font-display);font-size:1.8rem;font-style:italic;color:#a9875c;line-height:1}.pb-stat-label{display:block;font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-top:6px}.pb-body{padding-top:56px;padding-bottom:96px}.pb-chapters-title{font-family:var(--font-display);font-style:italic;font-size:1.5rem;color:#1a1a1a;margin:0 0 24px}.pb-chapters{display:flex;flex-direction:column;gap:2px;margin-bottom:64px}.pb-chapter{display:flex;gap:20px;align-items:flex-start;background:#fff;border:1px solid rgba(0,0,0,0.07);border-radius:14px;padding:20px 24px;transition:border-color 0.2s}.pb-chapter:hover{border-color:rgba(169,135,92,0.3)}.pb-chapter-num{font-family:var(--font-display);font-style:italic;font-size:1.4rem;color:rgba(169,135,92,0.4);line-height:1;flex-shrink:0;width:36px}.pb-chapter-title{font-size:0.95rem;font-weight:700;color:#1a1a1a;margin:0 0 6px}.pb-chapter-desc{font-size:0.85rem;color:#888;margin:0;line-height:1.55}.pb-cta{background:#1a1a1a;border-radius:24px;padding:56px 32px;text-align:center}.pb-cta-title{font-family:var(--font-display);font-style:italic;font-size:clamp(1.6rem,3.5vw,2.2rem);color:#fff;margin:0 0 12px}.pb-cta-sub{font-size:0.95rem;color:rgba(255,255,255,0.5);margin:0 0 28px}`}</style>
    </div>
  );
}
