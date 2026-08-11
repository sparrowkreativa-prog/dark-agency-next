'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', type: 'STRATEGIJA · 10 POGLAVLJA · BESPLATNO',
    title1: 'Čet strategija koja pretvara',  title2: 'fanove u dugoročne pretplatnike.',
    sub: 'Kompletan sistem za profesionalno upravljanje čet konverzacijama na OnlyFans-u — od prvog "Hej" do obnove pretplate. Naučite kako naši četeri konzistentno postižu 3–5× veću konverziju od proseka.',
    stats: [{ num: '3–5×', label: 'veća konverzija' }, { num: '72h', label: 'do prve kupovine' }, { num: '10', label: 'poglavlja' }, { num: '68%', label: 'stopa obnove' }],
    chaptersLabel: 'Šta je unutra',
    chapters: [
      { num: '01', title: 'Psihologija Čet Konverzije', desc: '~8 min · Zašto fanovi kupuju i koji okidači zaista rade.' },
      { num: '02', title: 'Prve 24 Sata', desc: '~10 min · Šablon prve poruke koji postiže 73% stope odgovora.' },
      { num: '03', title: 'Profilisanje Pretplatnika', desc: '~12 min · Segmentacija fanova u 5 tipova i prilagođeni pristup svakom.' },
      { num: '04', title: 'Prodaja PPV Sadržaja', desc: '~11 min · Tačno šta reći, kada i kako postaviti cenu.' },
      { num: '05', title: 'Upravljanje Objektima', desc: '~9 min · Kako odgovoriti na "preskupo", "besplatno ću videti" i "sad nisam raspoložen".' },
      { num: '06', title: 'Izgradnja Navike', desc: '~10 min · Razgovorni rituali koji teraju fanove da se vraćaju svakodnevno.' },
      { num: '07', title: 'Masovne Poruke Koje Rade', desc: '~8 min · Šabloni koji prodaju, a ne izgledaju kao spam.' },
      { num: '08', title: 'Upravljanje Više Naloga', desc: '~13 min · Sistemi za timski čat bez gubitka glasa brenda.' },
      { num: '09', title: 'Metrike i Optimizacija', desc: '~9 min · Koje brojke pratiti i kako ih poboljšati.' },
      { num: '10', title: 'Obnova Pretplate', desc: '~11 min · Sekvenca koja pretvara exited fanova u ponovne pretplatnike.' },
    ],
    ctaTitle: 'Spreman/a da ga pročitaš?', ctaSub: 'Besplatno. Bez email adrese. Bez kreditne kartice.', ctaBtn: 'Preuzmi Besplatno',
  },
  en: {
    back: '← All resources', type: 'STRATEGY · 10 CHAPTERS · FREE',
    title1: 'The chat strategy that turns', title2: 'fans into long-term subscribers.',
    sub: 'The complete system for professional chat management on OnlyFans — from the first "Hey" to subscription renewal. Learn how our chatters consistently achieve 3–5× higher conversion than average.',
    stats: [{ num: '3–5×', label: 'higher conversion' }, { num: '72h', label: 'to first purchase' }, { num: '10', label: 'chapters' }, { num: '68%', label: 'renewal rate' }],
    chaptersLabel: "What's inside",
    chapters: [
      { num: '01', title: 'The Psychology of Chat Conversion', desc: '~8 min · Why fans buy and which triggers actually work.' },
      { num: '02', title: 'The First 24 Hours', desc: '~10 min · The first-message template that achieves a 73% response rate.' },
      { num: '03', title: 'Subscriber Profiling', desc: '~12 min · Segmenting fans into 5 types and a tailored approach for each.' },
      { num: '04', title: 'Selling PPV Content', desc: '~11 min · Exactly what to say, when and how to price it.' },
      { num: '05', title: 'Handling Objections', desc: '~9 min · How to respond to "too expensive", "I\'ll see it free" and "not in the mood now".' },
      { num: '06', title: 'Building the Habit', desc: '~10 min · Conversational rituals that keep fans coming back daily.' },
      { num: '07', title: 'Mass Messages That Work', desc: '~8 min · Templates that sell and don\'t look like spam.' },
      { num: '08', title: 'Managing Multiple Accounts', desc: '~13 min · Team chat systems without losing the brand voice.' },
      { num: '09', title: 'Metrics and Optimisation', desc: '~9 min · Which numbers to track and how to improve them.' },
      { num: '10', title: 'Subscription Renewal', desc: '~11 min · The sequence that turns exited fans back into subscribers.' },
    ],
    ctaTitle: 'Ready to read it?', ctaSub: 'Free. No email. No credit card.', ctaBtn: 'Download Free',
  },
  it: {
    back: '← Tutte le risorse', type: 'STRATEGIA · 10 CAPITOLI · GRATUITA',
    title1: 'La strategia di chat che trasforma', title2: 'i fan in abbonati a lungo termine.',
    sub: 'Il sistema completo per la gestione professionale delle conversazioni chat su OnlyFans — dal primo "Ciao" al rinnovo dell\'abbonamento. Scopri come i nostri chatter raggiungono sistematicamente una conversione 3–5× superiore alla media.',
    stats: [{ num: '3–5×', label: 'conversione più alta' }, { num: '72h', label: 'al primo acquisto' }, { num: '10', label: 'capitoli' }, { num: '68%', label: 'tasso di rinnovo' }],
    chaptersLabel: "Cosa c'è dentro",
    chapters: [
      { num: '01', title: 'La Psicologia della Conversione Chat', desc: '~8 min · Perché i fan comprano e quali trigger funzionano davvero.' },
      { num: '02', title: 'Le Prime 24 Ore', desc: '~10 min · Il template del primo messaggio che ottiene un tasso di risposta del 73%.' },
      { num: '03', title: 'Profilazione degli Abbonati', desc: '~12 min · Segmentare i fan in 5 tipologie e un approccio personalizzato per ciascuna.' },
      { num: '04', title: 'Vendita di Contenuti PPV', desc: '~11 min · Esattamente cosa dire, quando e come fissare il prezzo.' },
      { num: '05', title: 'Gestione delle Obiezioni', desc: '~9 min · Come rispondere a "troppo caro", "lo vedrò gratis" e "ora non ho voglia".' },
      { num: '06', title: 'Costruire l\'Abitudine', desc: '~10 min · Rituali conversazionali che fanno tornare i fan ogni giorno.' },
      { num: '07', title: 'Messaggi di Massa che Funzionano', desc: '~8 min · Template che vendono e non sembrano spam.' },
      { num: '08', title: 'Gestione di Più Account', desc: '~13 min · Sistemi di chat di squadra senza perdere la voce del brand.' },
      { num: '09', title: 'Metriche e Ottimizzazione', desc: '~9 min · Quali numeri monitorare e come migliorarli.' },
      { num: '10', title: 'Rinnovo dell\'Abbonamento', desc: '~11 min · La sequenza che riporta i fan persi a essere abbonati.' },
    ],
    ctaTitle: 'Pronta a leggerla?', ctaSub: 'Gratuita. Nessuna email. Nessuna carta di credito.', ctaBtn: 'Scarica Gratis',
  },
};

export default function CetStrategija() {
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
