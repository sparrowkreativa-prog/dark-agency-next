'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi',
    type: 'VODIČ · 8 POGLAVLJA · ~2 SATA ČITANJA · BESPLATNO',
    title1: 'SFW Reddit sistem koji generiše',
    title2: '100+ pretplatnika dnevno.',
    sub: '8 poglavlja. Tačan sistem koji koristimo za generisanje OnlyFans pretplatnika sa Reddita - bez golišavih postova, bez spama, bez troškova. Samo čisto, sistemsko povećanje saobraćaja.',
    stats: [{ num: '100+', label: 'pretplatnika/dan' }, { num: '$80', label: 'prosečan LTV po fanu' }, { num: '3 god.', label: 'iskustva na Redditu' }, { num: '11.000+', label: 'analiziranih subreddita' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'Zašto je Reddit Najpotcenjeniji Izvor Saobraćaja', desc: '~12 min · $80 LTV po fanu - i većina kreatora to radi potpuno pogrešno.' },
      { num: '02', title: 'SFW Prednost - Zašto Nikada Ne Postujemo Golišave Slike', desc: '~14 min · NSFW postovi se skrivaju. SFW postovi dosežu milione. Matematika je jasna.' },
      { num: '03', title: 'Odabir Subreddita - Najteži Deo', desc: '~15 min · Pronalaženje pravih subreddita je 80% posla. Evo kako to radimo.' },
      { num: '04', title: 'Podešavanje Naloga i Bezbednost', desc: '~10 min · Anti-detect browseri, proksiji i protokol zagrevanja od 7 dana.' },
      { num: '05', title: 'Dnevni Radni Tok Objavljivanja', desc: '~12 min · Tačan redosled koji generiše 100+ pretplatnika dnevno.' },
      { num: '06', title: 'AI Sadržaj za $0.15 po Slici', desc: '~8 min · Kreiranje jedinstvenih varijacija sadržaja skoro besplatno.' },
      { num: '07', title: 'Skaliranje Operacije', desc: '~11 min · Od jednog naloga do sistema koji radi 24/7.' },
      { num: '08', title: 'Reddit + Twitter Kombinacija', desc: '~9 min · Najjača kombinacija za nišne i fetish kreatorke.' },
    ],
    ctaTitle: 'Spreman/a da ga pročitaš?',
    ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.',
    ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources',
    type: 'GUIDE · 8 CHAPTERS · ~2 HOURS READING · FREE',
    title1: 'The SFW Reddit system that generates',
    title2: '100+ subscribers per day.',
    sub: '8 chapters. The exact system we use to generate OnlyFans subscribers from Reddit — no explicit posts, no spam, no cost. Just clean, systematic traffic growth.',
    stats: [{ num: '100+', label: 'subscribers/day' }, { num: '$80', label: 'average LTV per fan' }, { num: '3 yrs', label: 'Reddit experience' }, { num: '11,000+', label: 'subreddits analysed' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'Why Reddit Is the Most Underrated Traffic Source', desc: '~12 min · $80 LTV per fan — and most creators are doing it completely wrong.' },
      { num: '02', title: 'The SFW Advantage — Why We Never Post Explicit Content', desc: '~14 min · NSFW posts get buried. SFW posts reach millions. The math is clear.' },
      { num: '03', title: 'Subreddit Selection — The Hardest Part', desc: '~15 min · Finding the right subreddits is 80% of the work. Here\'s how we do it.' },
      { num: '04', title: 'Account Setup & Safety', desc: '~10 min · Anti-detect browsers, proxies and the 7-day warm-up protocol.' },
      { num: '05', title: 'Daily Posting Workflow', desc: '~12 min · The exact sequence that generates 100+ subscribers per day.' },
      { num: '06', title: 'AI Content for $0.15 Per Image', desc: '~8 min · Creating unique content variations for almost nothing.' },
      { num: '07', title: 'Scaling the Operation', desc: '~11 min · From a single account to a system that runs 24/7.' },
      { num: '08', title: 'Reddit + Twitter Combination', desc: '~9 min · The most powerful combo for niche and fetish creators.' },
    ],
    ctaTitle: 'Ready to read it?',
    ctaSub: 'Free. No email. No credit card.',
    ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse',
    type: 'GUIDA · 8 CAPITOLI · ~2 ORE DI LETTURA · GRATUITA',
    title1: 'Il sistema Reddit SFW che genera',
    title2: '100+ abbonati al giorno.',
    sub: '8 capitoli. Il sistema esatto che usiamo per generare abbonati OnlyFans da Reddit — senza post espliciti, senza spam, senza costi. Solo crescita del traffico pulita e sistematica.',
    stats: [{ num: '100+', label: 'abbonati/giorno' }, { num: '$80', label: 'LTV medio per fan' }, { num: '3 anni', label: 'esperienza su Reddit' }, { num: '11.000+', label: 'subreddit analizzati' }],
    chaptersLabel: 'Cosa c\'è dentro',
    chapters: [
      { num: '01', title: 'Perché Reddit È la Fonte di Traffico Più Sottovalutata', desc: '~12 min · $80 LTV per fan — e la maggior parte delle creator lo fa completamente nel modo sbagliato.' },
      { num: '02', title: 'Il Vantaggio SFW — Perché Non Pubblichiamo Mai Contenuti Espliciti', desc: '~14 min · I post NSFW vengono seppelliti. I post SFW raggiungono milioni. La matematica è chiara.' },
      { num: '03', title: 'Selezione dei Subreddit — La Parte Più Difficile', desc: '~15 min · Trovare i subreddit giusti è l\'80% del lavoro. Ecco come lo facciamo.' },
      { num: '04', title: 'Configurazione Account e Sicurezza', desc: '~10 min · Browser anti-detect, proxy e protocollo di warm-up di 7 giorni.' },
      { num: '05', title: 'Flusso di Pubblicazione Giornaliero', desc: '~12 min · La sequenza esatta che genera 100+ abbonati al giorno.' },
      { num: '06', title: 'Contenuto AI a $0,15 per Immagine', desc: '~8 min · Creare variazioni di contenuto uniche per quasi niente.' },
      { num: '07', title: 'Scalare l\'Operazione', desc: '~11 min · Da un singolo account a un sistema che funziona 24/7.' },
      { num: '08', title: 'Combinazione Reddit + Twitter', desc: '~9 min · La combo più potente per creator di nicchia e fetish.' },
    ],
    ctaTitle: 'Pronta a leggerla?',
    ctaSub: 'Gratuita. Nessuna email. Nessuna carta di credito.',
    ctaBtn: 'Scarica Gratis',
  },
};

export default function RedditPlaybook() {
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
          <div className="pb-stats">
            {t.stats.map(s => (
              <div key={s.label} className="pb-stat">
                <span className="pb-stat-num">{s.num}</span>
                <span className="pb-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-body">
          <h2 className="pb-chapters-title">{t.chaptersLabel}</h2>
          <div className="pb-chapters">
            {t.chapters.map(c => (
              <div key={c.num} className="pb-chapter">
                <span className="pb-chapter-num">{c.num}</span>
                <div>
                  <h3 className="pb-chapter-title">{c.title}</h3>
                  <p className="pb-chapter-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pb-cta">
            <h2 className="pb-cta-title">{t.ctaTitle}</h2>
            <p className="pb-cta-sub">{t.ctaSub}</p>
            <a href="https://wa.me/381000000000" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
              {t.ctaBtn} <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
      <PlaybookStyles />
    </div>
  );
}

function PlaybookStyles() {
  return <style>{`
    .pb-page { background: #fafaf8; min-height: 100vh; }
    .pb-hero { background: #1a1a1a; padding: 64px 24px 56px; text-align: center; }
    .pb-back { display: inline-block; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; margin-bottom: 24px; }
    .pb-back:hover { color: rgba(255,255,255,0.7); }
    .pb-type { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; color: #a9875c; text-transform: uppercase; margin-bottom: 20px; }
    .pb-title { font-family: var(--font-display); font-size: clamp(1.8rem,4.5vw,3rem); font-style: italic; color: #fff; line-height: 1.15; margin: 0 0 20px; }
    .pb-sub { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 580px; margin: 0 auto 40px; line-height: 1.75; }
    .pb-stats { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
    .pb-stat { text-align: center; }
    .pb-stat-num { display: block; font-family: var(--font-display); font-size: 1.8rem; font-style: italic; color: #a9875c; line-height: 1; }
    .pb-stat-label { display: block; font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }
    .pb-body { padding-top: 56px; padding-bottom: 96px; }
    .pb-chapters-title { font-family: var(--font-display); font-style: italic; font-size: 1.5rem; color: #1a1a1a; margin: 0 0 24px; }
    .pb-chapters { display: flex; flex-direction: column; gap: 2px; margin-bottom: 64px; }
    .pb-chapter { display: flex; gap: 20px; align-items: flex-start; background: #fff; border: 1px solid rgba(0,0,0,0.07); border-radius: 14px; padding: 20px 24px; transition: border-color 0.2s; }
    .pb-chapter:hover { border-color: rgba(169,135,92,0.3); }
    .pb-chapter-num { font-family: var(--font-display); font-style: italic; font-size: 1.4rem; color: rgba(169,135,92,0.4); line-height: 1; flex-shrink: 0; width: 36px; }
    .pb-chapter-title { font-size: 0.95rem; font-weight: 700; color: #1a1a1a; margin: 0 0 6px; }
    .pb-chapter-desc { font-size: 0.85rem; color: #888; margin: 0; line-height: 1.55; }
    .pb-cta { background: #1a1a1a; border-radius: 24px; padding: 56px 32px; text-align: center; }
    .pb-cta-title { font-family: var(--font-display); font-style: italic; font-size: clamp(1.6rem,3.5vw,2.2rem); color: #fff; margin: 0 0 12px; }
    .pb-cta-sub { font-size: 0.95rem; color: rgba(255,255,255,0.5); margin: 0 0 28px; }
  `}</style>;
}
