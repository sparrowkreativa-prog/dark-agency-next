'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi',
    type: 'VODIČ · 10 POGLAVLJA · ~45 MIN ČITANJA · BESPLATNO',
    title1: 'Tačna skripta kojom naši čateri',
    title2: 'zarađuju $1.400+ po sesiji.',
    sub: '10 poglavlja. Tri faze. Prava skripta za čatovanje koja generiše $1.400+ po sesiji - izgradnja odnosa, tizovanje, PPV eskalacija, cela sekvenca.',
    stats: [{ num: '$1.400+', label: 'po sesiji' }, { num: '10', label: 'poglavlja' }, { num: '3', label: 'faze prodaje' }, { num: '$135', label: 'max PPV po sesiji' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'Uvod i Kako Skripta Funkcioniše', desc: '~3 min · Šta je ova skripta i kako je koristiti.' },
      { num: '02', title: 'Faza 1 - Izgradnja Odnosa', desc: '~4 min · Razbijanje leda i stvaranje osećaja autentičnosti.' },
      { num: '03', title: 'Faza 2 - Tizeri (Izgradnja Tenzije)', desc: '~5 min · Besplatan sadržaj koji kreira hitnost kupovine.' },
      { num: '04', title: 'Faza 3 & 4 - Veza i PPV Prelaz', desc: '~6 min · Slobodne linije i sekvenca podešavanja PPV-a.' },
      { num: '05', title: 'PPV Setup i Yes Train', desc: '~7 min · Dobij "da" pre nego što pošalješ plaćen sadržaj.' },
      { num: '06', title: 'Provjere Stvarnosti i Seksanje', desc: '~8 min · Iluzija živog sadržaja i angažujuća razmjena.' },
      { num: '07', title: 'Upsell Sekvenca', desc: '~6 min · Nastavi sa prodajom kroz celu sesiju sa rastućim cenama.' },
      { num: '08', title: 'Eskalacija Cena: $25 do $135', desc: '~5 min · Tačna lestvica cena po sesiji.' },
      { num: '09', title: 'Rukovanje Teškim Fanovima', desc: '~6 min · Skupaci, fantomi i kako ih reaktivirati.' },
      { num: '10', title: 'Kompletna Skripta - Referentni List', desc: '~4 min · Cela sekvenca na jednom mestu.' },
    ],
    ctaTitle: 'Spreman/a da je pročitaš?',
    ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.',
    ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources',
    type: 'GUIDE · 10 CHAPTERS · ~45 MIN READING · FREE',
    title1: 'The exact script our chatters use to',
    title2: 'earn $1,400+ per session.',
    sub: '10 chapters. Three phases. The real chatting script that generates $1,400+ per session — rapport building, teasing, PPV escalation, the whole sequence.',
    stats: [{ num: '$1,400+', label: 'per session' }, { num: '10', label: 'chapters' }, { num: '3', label: 'sales phases' }, { num: '$135', label: 'max PPV per session' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'Introduction & How the Script Works', desc: '~3 min · What this script is and how to use it.' },
      { num: '02', title: 'Phase 1 — Building Rapport', desc: '~4 min · Breaking the ice and creating a sense of authenticity.' },
      { num: '03', title: 'Phase 2 — Teasers (Building Tension)', desc: '~5 min · Free content that creates purchase urgency.' },
      { num: '04', title: 'Phase 3 & 4 — Connection & PPV Transition', desc: '~6 min · Free lines and the PPV setup sequence.' },
      { num: '05', title: 'PPV Setup & the Yes Train', desc: '~7 min · Get a "yes" before you send the paid content.' },
      { num: '06', title: 'Reality Checks & Sexting', desc: '~8 min · The illusion of live content and engaging exchange.' },
      { num: '07', title: 'Upsell Sequence', desc: '~6 min · Keep selling through the whole session with rising prices.' },
      { num: '08', title: 'Price Escalation: $25 to $135', desc: '~5 min · The exact price ladder per session.' },
      { num: '09', title: 'Handling Difficult Fans', desc: '~6 min · Cheapskates, ghosts and how to reactivate them.' },
      { num: '10', title: 'Full Script — Reference Sheet', desc: '~4 min · The entire sequence in one place.' },
    ],
    ctaTitle: 'Ready to read it?',
    ctaSub: 'Free. No email. No credit card.',
    ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse',
    type: 'GUIDA · 10 CAPITOLI · ~45 MIN DI LETTURA · GRATUITA',
    title1: 'Lo script esatto con cui i nostri chatter',
    title2: 'guadagnano $1.400+ per sessione.',
    sub: '10 capitoli. Tre fasi. Lo script di chat reale che genera $1.400+ per sessione — costruzione del rapporto, teasing, escalation PPV, l\'intera sequenza.',
    stats: [{ num: '$1.400+', label: 'per sessione' }, { num: '10', label: 'capitoli' }, { num: '3', label: 'fasi di vendita' }, { num: '$135', label: 'max PPV per sessione' }],
    chaptersLabel: "Cosa c'è dentro",
    chapters: [
      { num: '01', title: 'Introduzione e Come Funziona lo Script', desc: '~3 min · Cos\'è questo script e come usarlo.' },
      { num: '02', title: 'Fase 1 — Costruzione del Rapporto', desc: '~4 min · Rompere il ghiaccio e creare un senso di autenticità.' },
      { num: '03', title: 'Fase 2 — Teaser (Costruzione della Tensione)', desc: '~5 min · Contenuto gratuito che crea urgenza d\'acquisto.' },
      { num: '04', title: 'Fase 3 & 4 — Connessione e Transizione PPV', desc: '~6 min · Linee libere e sequenza di setup PPV.' },
      { num: '05', title: 'Setup PPV e il Yes Train', desc: '~7 min · Ottieni un "sì" prima di inviare il contenuto a pagamento.' },
      { num: '06', title: 'Reality Check e Sexting', desc: '~8 min · L\'illusione del contenuto live e lo scambio coinvolgente.' },
      { num: '07', title: 'Sequenza di Upsell', desc: '~6 min · Continua a vendere per tutta la sessione con prezzi crescenti.' },
      { num: '08', title: 'Escalation dei Prezzi: $25 a $135', desc: '~5 min · La scala dei prezzi esatta per sessione.' },
      { num: '09', title: 'Gestione dei Fan Difficili', desc: '~6 min · Tirchi, fantasmi e come riativarli.' },
      { num: '10', title: 'Script Completo — Foglio di Riferimento', desc: '~4 min · L\'intera sequenza in un unico posto.' },
    ],
    ctaTitle: 'Pronta a leggerlo?',
    ctaSub: 'Gratuito. Nessuna email. Nessuna carta di credito.',
    ctaBtn: 'Scarica Gratis',
  },
};

export default function ChattingScript() {
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
                <div><h3 className="pb-chapter-title">{c.title}</h3><p className="pb-chapter-desc">{c.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="pb-cta">
            <h2 className="pb-cta-title">{t.ctaTitle}</h2>
            <p className="pb-cta-sub">{t.ctaSub}</p>
            <a href="https://wa.me/381000000000" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">{t.ctaBtn} <span className="btn-arrow">→</span></a>
          </div>
        </div>
      </main>
      <SiteFooter />
      <style>{`
        .pb-page{background:#fafaf8;min-height:100vh}.pb-hero{background:#1a1a1a;padding:64px 24px 56px;text-align:center}.pb-back{display:inline-block;font-size:13px;color:rgba(255,255,255,0.45);text-decoration:none;margin-bottom:24px}.pb-back:hover{color:rgba(255,255,255,0.7)}.pb-type{display:block;font-size:11px;font-weight:700;letter-spacing:0.18em;color:#a9875c;text-transform:uppercase;margin-bottom:20px}.pb-title{font-family:var(--font-display);font-size:clamp(1.8rem,4.5vw,3rem);font-style:italic;color:#fff;line-height:1.15;margin:0 0 20px}.pb-sub{font-size:1rem;color:rgba(255,255,255,0.55);max-width:580px;margin:0 auto 40px;line-height:1.75}.pb-stats{display:flex;justify-content:center;gap:40px;flex-wrap:wrap}.pb-stat{text-align:center}.pb-stat-num{display:block;font-family:var(--font-display);font-size:1.8rem;font-style:italic;color:#a9875c;line-height:1}.pb-stat-label{display:block;font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;margin-top:6px}.pb-body{padding-top:56px;padding-bottom:96px}.pb-chapters-title{font-family:var(--font-display);font-style:italic;font-size:1.5rem;color:#1a1a1a;margin:0 0 24px}.pb-chapters{display:flex;flex-direction:column;gap:2px;margin-bottom:64px}.pb-chapter{display:flex;gap:20px;align-items:flex-start;background:#fff;border:1px solid rgba(0,0,0,0.07);border-radius:14px;padding:20px 24px;transition:border-color 0.2s}.pb-chapter:hover{border-color:rgba(169,135,92,0.3)}.pb-chapter-num{font-family:var(--font-display);font-style:italic;font-size:1.4rem;color:rgba(169,135,92,0.4);line-height:1;flex-shrink:0;width:36px}.pb-chapter-title{font-size:0.95rem;font-weight:700;color:#1a1a1a;margin:0 0 6px}.pb-chapter-desc{font-size:0.85rem;color:#888;margin:0;line-height:1.55}.pb-cta{background:#1a1a1a;border-radius:24px;padding:56px 32px;text-align:center}.pb-cta-title{font-family:var(--font-display);font-style:italic;font-size:clamp(1.6rem,3.5vw,2.2rem);color:#fff;margin:0 0 12px}.pb-cta-sub{font-size:0.95rem;color:rgba(255,255,255,0.5);margin:0 0 28px}
      `}</style>
    </div>
  );
}
