'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import RezultatiScreenshots from '@/components/RezultatiScreenshots';
import Header from '@/components/Header';
import { siteData } from '@/data/content';
import { siteDataEn } from '@/data/content.en';
import { siteDataIt } from '@/data/content.it';
import { useLang } from '@/hooks/useContent';

function getFooterData(lang) {
  if (lang === 'en') return siteDataEn;
  if (lang === 'it') return siteDataIt;
  return siteData;
}

const T = {
  sr: {
    eyebrow: 'PRIMAMO SAMO 2 KLIJENTA MESEČNO',
    heroTitle1: '$11M+ Generisano.',
    heroTitle2: 'Evo Dokaza.',
    heroSub: 'Verifikovane zarade, pravi screenshotovi, prave priče kreatorki. Zaradi u prvih 30 dana više nego u svom najboljem mesecu ikada.',
    heroStats: [
      { end: 11,  format: v => `$${Math.round(v)}M+`, label: 'Generisano za kreatore' },
      { end: 140, format: v => `${Math.round(v)}+`,   label: 'Klijenata' },
      { end: 93,  format: v => `${Math.round(v)}%`,   label: 'Retencija kreatorki' },
    ],
    heroCta: 'Prijavi se na listu čekanja',
    creators: [
      { name: 'K.R.', username: 'katarinaa.r', img: '/IG-01.jpg', badge: '$0 → $161K za 3 meseca', quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte.', before: '$0/mes', after: '$161K/mes' },
      { name: 'S.T.', username: 'sara.tt_',    img: '/IG-02.jpg', badge: 'Top 0.01% · 12 meseci',  quote: 'Skoro nisam aplicirala. Godinu dana kasnije i svi misle da sam u marketingu.',         before: '€12/h',   after: '$253K/mes' },
      { name: 'A.J.', username: 'anaaj_oficial',img: '/IG-03.jpg', badge: '$0 → $65K za 4 meseca', quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću.',        before: '$0/mes', after: '$65K/mes' },
    ],
    ourCreators: 'Naše Kreatorke',
    verified: 'Verifikovano',
    showStory: 'Prikaži priču',
    casesLabel: 'DUBINSKE ANALIZE',
    casesTitle1: 'Verifikovane Transformacije',
    casesTitle2: 'Sa Pravim Brojkama.',
    casesSub: 'Pravi vremenski okviri, prave platforme, prave brojke - korak po korak kako smo ih izgradili.',
    caseNote: 'Verifikovano preko dashboarda kreatorke. Svi lični podaci zamućeni radi privatnosti.',
    cases: [
      {
        num: '01', img: '/IG-01.jpg', creator: 'K.R.',
        tag: 'Top 0.05% · 3 meseca sa Velluto Nero',
        name: '$0 → $161.423/mes za 3 Meseca',
        desc: 'Potpuno nova kreatorka. Nula mreža. Nula publike. Nula iskustva. Skalirali smo je preko 4 platforme od nule.',
        quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte.',
        stats: [
          { end: 161, format: v => `$${Math.round(v)}K`, label: 'mesečno posle 90 dana' },
          { end: 412, format: v => `${Math.round(v)}K`,  label: 'Instagram pratilaca' },
          { end: 0.05, format: v => `Top ${v.toFixed(2)}%`, label: 'na platformi' },
        ],
        levers: [
          { title: 'Pozicioniranje', days: 'Dani 1–10', items: ['Izgradnja dugoročne brend persone', 'Identifikacija tražene niše', 'Puna optimizacija profila', '20 početnih content asseta'] },
          { title: 'Multi-Platform Lansiranje', days: 'Dani 10–45', items: ['Viralni Twitter + Threads crossposting', '3–5 dnevnih posting klastera', 'IG Reels viralnost', 'Topao saobraćaj → trial → upsell'] },
          { title: 'Čet & PPV Sistem', days: 'Dani 20–90', items: ['E.I.P.S. framework emocionalne prodaje', 'PPV lestvica + high-ticket customi', 'Retencija četa + GFE ciklus', 'Trigger-based upsellovi'] },
        ],
      },
      {
        num: '02', img: '/IG-03.jpg', creator: 'A.J.',
        tag: 'Top 0.3% · 4 meseca sa Velluto Nero',
        name: '$0 → $65.218/mes za 4 Meseca',
        desc: 'Dve nedelje se plašila da pošalje prijavu. Izgradili smo joj kompletan growth engine od nule - brend, content flow, distribuciju i monetizaciju.',
        quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću.',
        stats: [
          { end: 65, format: v => `$${Math.round(v)}K`, label: 'mesečno posle 4 meseca' },
          { end: 318, format: v => `${Math.round(v)}K`, label: 'Instagram pratilaca' },
          { end: 0.3, format: v => `Top ${v.toFixed(1)}%`, label: 'na platformi' },
        ],
        levers: [
          { title: 'Pozicioniranje', days: 'Dani 1–7', items: ['Izgradnja persone + ugla', 'Spajanje niše sa Reddit tražnjom', 'Konverzioni profil', '14 početnih content asseta'] },
          { title: 'Multi-Platform Lansiranje', days: 'Dani 7–23', items: ['Dnevni Reddit posting (3 varijacije/dan)', '3 Twitter posting klastera/dan', 'Cross-platform usmeravanje fanova', 'Bez spama - value-first lansiranje'] },
          { title: 'Čet & PPV Sistem', days: 'Dani 10–26', items: ['Brzi odgovori + E.I.P.S. poruke', 'Triggerovane PPV lestvice', 'Monetizacija ranih fanova', 'Welcome sekvenca koja konvertuje'] },
        ],
      },
    ],
    finalTitle: 'Da Li Si Spremna Za Ovakve Rezultate?',
    finalSub: 'Primamo samo 2 klijenta mesečno · 60-sekundi prijava · nula troškova unapred',
    finalStats: [
      { num: '93%',    label: 'Retencija' },
      { num: '60 dana', label: 'Prosek do 2× prihoda' },
      { num: '$11M+',  label: 'Generisano za kreatore' },
    ],
    finalCta: 'Prijavi se na listu čekanja',
    finalMicro: 'Traje 60 sekundi · Bez obaveza',
  },
  en: {
    eyebrow: 'WE ACCEPT ONLY 2 CLIENTS PER MONTH',
    heroTitle1: '$11M+ Generated.',
    heroTitle2: 'Here\'s the Proof.',
    heroSub: 'Verified earnings, real screenshots, real creator stories. Earn more in the first 30 days than in your best month ever.',
    heroStats: [
      { end: 11,  format: v => `$${Math.round(v)}M+`, label: 'Generated for creators' },
      { end: 140, format: v => `${Math.round(v)}+`,   label: 'Clients' },
      { end: 93,  format: v => `${Math.round(v)}%`,   label: 'Creator retention rate' },
    ],
    heroCta: 'Join the waitlist',
    creators: [
      { name: 'K.R.', username: 'katarinaa.r', img: '/IG-01.jpg', badge: '$0 → $161K in 3 months', quote: 'Three months ago I was counting tips. Now I book flights whenever I feel like it.', before: '$0/mo', after: '$161K/mo' },
      { name: 'S.T.', username: 'sara.tt_',    img: '/IG-02.jpg', badge: 'Top 0.01% · 12 months',  quote: 'I almost didn\'t apply. A year later everyone thinks I work in marketing.',                 before: '€12/h',  after: '$253K/mo' },
      { name: 'A.J.', username: 'anaaj_oficial',img: '/IG-03.jpg', badge: '$0 → $65K in 4 months', quote: 'I spent two weeks on the application because I was scared. Now I work from anywhere.',    before: '$0/mo', after: '$65K/mo' },
    ],
    ourCreators: 'Our Creators',
    verified: 'Verified',
    showStory: 'Show story',
    casesLabel: 'DEEP DIVES',
    casesTitle1: 'Verified Transformations',
    casesTitle2: 'With Real Numbers.',
    casesSub: 'Real timelines, real platforms, real figures — step by step, how we built them.',
    caseNote: 'Verified via the creator\'s own dashboard. All personal data blurred for privacy.',
    cases: [
      {
        num: '01', img: '/IG-01.jpg', creator: 'K.R.',
        tag: 'Top 0.05% · 3 months with Velluto Nero',
        name: '$0 → $161,423/mo in 3 Months',
        desc: 'Completely new creator. Zero network. Zero audience. Zero experience. We scaled her across 4 platforms from scratch.',
        quote: 'Three months ago I was counting tips. Now I book flights whenever I feel like it.',
        stats: [
          { end: 161, format: v => `$${Math.round(v)}K`, label: 'monthly after 90 days' },
          { end: 412, format: v => `${Math.round(v)}K`,  label: 'Instagram followers' },
          { end: 0.05, format: v => `Top ${v.toFixed(2)}%`, label: 'on the platform' },
        ],
        levers: [
          { title: 'Positioning', days: 'Days 1–10', items: ['Long-term brand persona build', 'High-demand niche identification', 'Full profile optimisation', '20 initial content assets'] },
          { title: 'Multi-Platform Launch', days: 'Days 10–45', items: ['Viral Twitter + Threads crossposting', '3–5 daily posting clusters', 'IG Reels virality', 'Warm traffic → trial → upsell'] },
          { title: 'Chat & PPV System', days: 'Days 20–90', items: ['E.I.P.S. emotional sales framework', 'PPV ladder + high-ticket customs', 'Chat retention + GFE cycle', 'Trigger-based upsells'] },
        ],
      },
      {
        num: '02', img: '/IG-03.jpg', creator: 'A.J.',
        tag: 'Top 0.3% · 4 months with Velluto Nero',
        name: '$0 → $65,218/mo in 4 Months',
        desc: 'She spent two weeks afraid to submit her application. We built her a complete growth engine from zero — brand, content flow, distribution and monetisation.',
        quote: 'I spent two weeks on the application because I was scared. Now I work from anywhere.',
        stats: [
          { end: 65, format: v => `$${Math.round(v)}K`, label: 'monthly after 4 months' },
          { end: 318, format: v => `${Math.round(v)}K`, label: 'Instagram followers' },
          { end: 0.3, format: v => `Top ${v.toFixed(1)}%`, label: 'on the platform' },
        ],
        levers: [
          { title: 'Positioning', days: 'Days 1–7', items: ['Persona + angle build', 'Niche matched to Reddit demand', 'Conversion-optimised profile', '14 initial content assets'] },
          { title: 'Multi-Platform Launch', days: 'Days 7–23', items: ['Daily Reddit posting (3 variations/day)', '3 Twitter posting clusters/day', 'Cross-platform fan funnelling', 'No spam — value-first launch'] },
          { title: 'Chat & PPV System', days: 'Days 10–26', items: ['Fast replies + E.I.P.S. messages', 'Triggered PPV ladders', 'Early fan monetisation', 'Converting welcome sequence'] },
        ],
      },
    ],
    finalTitle: 'Are You Ready for Results Like These?',
    finalSub: 'We accept only 2 clients per month · 60-second application · zero upfront costs',
    finalStats: [
      { num: '93%',      label: 'Retention' },
      { num: '60 days',  label: 'Average to 2× revenue' },
      { num: '$11M+',    label: 'Generated for creators' },
    ],
    finalCta: 'Join the waitlist',
    finalMicro: 'Takes 60 seconds · No obligation',
  },
  it: {
    eyebrow: 'ACCETTIAMO SOLO 2 CLIENTI AL MESE',
    heroTitle1: '$11M+ Generati.',
    heroTitle2: 'Ecco la Prova.',
    heroSub: 'Guadagni verificati, screenshot reali, storie vere di creator. Guadagna nei primi 30 giorni più che nel tuo miglior mese di sempre.',
    heroStats: [
      { end: 11,  format: v => `$${Math.round(v)}M+`, label: 'Generati per le creator' },
      { end: 140, format: v => `${Math.round(v)}+`,   label: 'Clienti' },
      { end: 93,  format: v => `${Math.round(v)}%`,   label: 'Tasso di retention creator' },
    ],
    heroCta: 'Unisciti alla lista d\'attesa',
    creators: [
      { name: 'K.R.', username: 'katarinaa.r', img: '/IG-01.jpg', badge: '$0 → $161K in 3 mesi', quote: 'Tre mesi fa contavo le mance. Ora prenoto voli quando ne ho voglia.', before: '$0/mese', after: '$161K/mese' },
      { name: 'S.T.', username: 'sara.tt_',    img: '/IG-02.jpg', badge: 'Top 0.01% · 12 mesi',  quote: 'Quasi non mi sono candidata. Un anno dopo tutti pensano che lavori nel marketing.', before: '€12/h', after: '$253K/mese' },
      { name: 'A.J.', username: 'anaaj_oficial',img: '/IG-03.jpg', badge: '$0 → $65K in 4 mesi', quote: 'Ho aspettato due settimane perché avevo paura. Ora lavoro da qualsiasi posto.', before: '$0/mese', after: '$65K/mese' },
    ],
    ourCreators: 'Le Nostre Creator',
    verified: 'Verificato',
    showStory: 'Mostra storia',
    casesLabel: 'ANALISI APPROFONDITE',
    casesTitle1: 'Trasformazioni Verificate',
    casesTitle2: 'Con Numeri Reali.',
    casesSub: 'Tempistiche reali, piattaforme reali, cifre reali — passo dopo passo, come le abbiamo costruite.',
    caseNote: 'Verificato tramite la dashboard della creator. Tutti i dati personali oscurati per la privacy.',
    cases: [
      {
        num: '01', img: '/IG-01.jpg', creator: 'K.R.',
        tag: 'Top 0.05% · 3 mesi con Velluto Nero',
        name: '$0 → $161.423/mese in 3 Mesi',
        desc: 'Creator completamente nuova. Zero rete. Zero pubblico. Zero esperienza. L\'abbiamo scalata su 4 piattaforme da zero.',
        quote: 'Tre mesi fa contavo le mance. Ora prenoto voli quando ne ho voglia.',
        stats: [
          { end: 161, format: v => `$${Math.round(v)}K`, label: 'mensili dopo 90 giorni' },
          { end: 412, format: v => `${Math.round(v)}K`,  label: 'follower su Instagram' },
          { end: 0.05, format: v => `Top ${v.toFixed(2)}%`, label: 'sulla piattaforma' },
        ],
        levers: [
          { title: 'Posizionamento', days: 'Giorni 1–10', items: ['Costruzione persona brand a lungo termine', 'Identificazione nicchia ad alta domanda', 'Ottimizzazione completa del profilo', '20 asset di contenuto iniziali'] },
          { title: 'Lancio Multi-Piattaforma', days: 'Giorni 10–45', items: ['Crossposting virale Twitter + Threads', '3–5 cluster di post giornalieri', 'Viralità IG Reels', 'Traffico caldo → trial → upsell'] },
          { title: 'Sistema Chat & PPV', days: 'Giorni 20–90', items: ['Framework di vendita emotiva E.I.P.S.', 'Scala PPV + custom high-ticket', 'Retention chat + ciclo GFE', 'Upsell basati su trigger'] },
        ],
      },
      {
        num: '02', img: '/IG-03.jpg', creator: 'A.J.',
        tag: 'Top 0.3% · 4 mesi con Velluto Nero',
        name: '$0 → $65.218/mese in 4 Mesi',
        desc: 'Ha aspettato due settimane prima di inviare la candidatura per paura. Le abbiamo costruito un growth engine completo da zero — brand, content flow, distribuzione e monetizzazione.',
        quote: 'Ho aspettato due settimane perché avevo paura. Ora lavoro da qualsiasi posto.',
        stats: [
          { end: 65, format: v => `$${Math.round(v)}K`, label: 'mensili dopo 4 mesi' },
          { end: 318, format: v => `${Math.round(v)}K`, label: 'follower su Instagram' },
          { end: 0.3, format: v => `Top ${v.toFixed(1)}%`, label: 'sulla piattaforma' },
        ],
        levers: [
          { title: 'Posizionamento', days: 'Giorni 1–7', items: ['Costruzione persona + angolazione', 'Nicchia abbinata alla domanda Reddit', 'Profilo ottimizzato per la conversione', '14 asset di contenuto iniziali'] },
          { title: 'Lancio Multi-Piattaforma', days: 'Giorni 7–23', items: ['Post Reddit giornalieri (3 variazioni/giorno)', '3 cluster di post Twitter/giorno', 'Canalizzazione fan cross-platform', 'Zero spam — lancio value-first'] },
          { title: 'Sistema Chat & PPV', days: 'Giorni 10–26', items: ['Risposte rapide + messaggi E.I.P.S.', 'Scale PPV attivate da trigger', 'Monetizzazione dei fan iniziali', 'Sequenza di benvenuto che converte'] },
        ],
      },
    ],
    finalTitle: 'Sei Pronta per Risultati Come Questi?',
    finalSub: 'Accettiamo solo 2 clienti al mese · candidatura in 60 secondi · zero costi anticipati',
    finalStats: [
      { num: '93%',      label: 'Retention' },
      { num: '60 giorni', label: 'Media per 2× le entrate' },
      { num: '$11M+',    label: 'Generati per le creator' },
    ],
    finalCta: 'Unisciti alla lista d\'attesa',
    finalMicro: 'Richiede 60 secondi · Senza impegno',
  },
};

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function CountUp({ end, format, duration = 1800, className }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return;
      started.current = true;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        setVal(easeOutCubic(p) * end);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(end);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref} className={className}>{format(val)}</span>;
}

function Reveal({ children, delay = 0, y = 28, className, style }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const STACK_POS = [
  { transform: 'rotate(-2deg) translate(0px, 0px) scale(1)',     opacity: 1,    z: 50 },
  { transform: 'rotate(2deg) translate(-8px, 30px) scale(0.94)', opacity: 0.65, z: 30 },
  { transform: 'rotate(-1deg) translate(12px, 16px) scale(0.97)', opacity: 0.8, z: 40 },
];

function TestimonialStack({ t }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % t.creators.length), 4500);
    return () => clearInterval(timer);
  }, [t.creators.length]);

  return (
    <div className="rz-stack-wrap">
      <div className="rz-stack">
        <div className="rz-stack-glow" aria-hidden="true" />
        {t.creators.map((c, i) => {
          const pos = STACK_POS[(i - active + t.creators.length) % t.creators.length];
          return (
            <div
              key={c.name}
              className="rz-t-card"
              style={{ zIndex: pos.z, transform: pos.transform, opacity: pos.opacity }}
            >
              <div className="rz-t-header">
                <img src={c.img} alt={c.name} className="rz-t-avatar" />
                <div className="rz-t-namecol">
                  <span className="rz-t-name">{c.name}</span>
                  <span className="rz-t-badge">{c.badge}</span>
                </div>
              </div>
              <p className="rz-t-quote">&ldquo;{c.quote}&rdquo;</p>
              <div className="rz-t-stats">
                <span className="rz-t-before">{c.before}</span>
                <span className="rz-t-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
                <span className="rz-t-after">{c.after}</span>
                <span className="rz-t-verified">{t.verified}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rz-nav">
        <span className="rz-nav-label">{t.ourCreators}</span>
        {t.creators.map((c, i) => (
          <button
            key={c.name}
            className={`rz-nav-item${i === active ? ' rz-nav-item--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`${t.showStory} - ${c.name}`}
          >
            <img src={c.img} alt={c.name} className="rz-nav-avatar" />
            <span className="rz-nav-textcol">
              <span className="rz-nav-name">
                {c.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-label={t.verified}>
                  <circle cx="12" cy="12" r="12" fill="#a9875c"/>
                  <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="rz-nav-sub">{c.badge}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Rezultati() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const fd = getFooterData(lang);
  const base = `/${lang}`;

  return (
    <div>
      <Header />

      <main style={{ background: '#fafaf8', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section className="rz-hero">
          <div className="rz-hero-inner">
            <div className="rz-hero-left">
              <span className="rz-eyebrow">{t.eyebrow}</span>
              <h1 className="rzp-title">
                {t.heroTitle1}<br />
                <span style={{ color: '#a9875c' }}>{t.heroTitle2}</span>
              </h1>
              <p className="rz-sub">{t.heroSub}</p>
              <div className="rz-hero-stats">
                {t.heroStats.map(s => (
                  <div key={s.label} className="rz-hero-stat">
                    <CountUp end={s.end} format={s.format} className="rz-hero-stat-num" />
                    <span className="rz-hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="rz-hero-ctas">
                <Link href={`${base}/site#apply`} className="btn-primary btn-large">
                  {t.heroCta} <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="rz-hero-right">
              <TestimonialStack t={t} />
            </div>
          </div>
        </section>

        {/* ── Earnings screenshots ── */}
        <RezultatiScreenshots />

        {/* ── Case studies ── */}
        <section className="rz-cases">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="chapter-label">{t.casesLabel}</span>
                <h2 className="rz-cases-title">{t.casesTitle1}<br /><span style={{ color: '#a9875c' }}>{t.casesTitle2}</span></h2>
                <p className="rz-cases-sub">{t.casesSub}</p>
              </div>
            </Reveal>

            {t.cases.map(cs => (
              <Reveal key={cs.num} className="rz-case-reveal">
                <div className="rz-case">
                  <span className="rz-case-ghost" aria-hidden="true">{cs.num}</span>

                  <div className="rz-case-head">
                    <div className="rz-case-avatar-ring">
                      <img src={cs.img} alt={cs.creator} className="rz-case-avatar" />
                    </div>
                    <div className="rz-case-headtext">
                      <span className="rz-case-tag">{cs.tag}</span>
                      <h3 className="rz-case-name">{cs.creator} - <em>{cs.name}</em></h3>
                    </div>
                  </div>

                  <p className="rz-case-desc">{cs.desc}</p>

                  <div className="rz-case-stats">
                    {cs.stats.map((s, i) => (
                      <div key={s.label} className="rz-case-stat">
                        <CountUp end={s.end} format={s.format} className="rz-case-stat-num" duration={1600 + i * 200} />
                        <span className="rz-case-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rz-levers">
                    <div className="rz-levers-line" aria-hidden="true" />
                    {cs.levers.map((l, i) => (
                      <Reveal key={l.title} delay={0.15 + i * 0.15} y={20}>
                        <div className="rz-lever">
                          <span className="rz-lever-dot" aria-hidden="true">{i + 1}</span>
                          <span className="rz-lever-days">{l.days}</span>
                          <h4 className="rz-lever-title">{l.title}</h4>
                          <ul className="rz-lever-list">
                            {l.items.map(it => <li key={it}>{it}</li>)}
                          </ul>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <div className="rz-case-quote">
                    <span className="rz-case-quote-mark" aria-hidden="true">&ldquo;</span>
                    <p>{cs.quote}</p>
                  </div>

                  <p className="rz-case-note">{t.caseNote}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="rz-final">
          <div className="container">
            <div className="rz-final-box">
              <h2 className="rz-final-title">{t.finalTitle}</h2>
              <p className="rz-final-sub">{t.finalSub}</p>
              <div className="rz-final-stats">
                {t.finalStats.map(s => (
                  <div key={s.label} className="rz-final-stat">
                    <span className="rz-final-stat-num">{s.num}</span>
                    <span className="rz-final-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href={`${base}/site#apply`} className="btn-primary btn-large">
                {t.finalCta} <span className="btn-arrow">→</span>
              </Link>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 14 }}>{t.finalMicro}</p>
            </div>
          </div>
        </section>

      </main>

      <footer id="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">{fd.nav.logo}</div>
              <p className="footer-tagline">{fd.footer.tagline}</p>
            </div>
            <a href={fd.footer.cta.href} className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>
              {fd.footer.cta.label} <span>→</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">{fd.footer.copy}</p>
            <div className="footer-legal">
              {fd.footer.legal.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        #site-header { z-index: 1000 !important; }
        .rz-hero { background: #1a1a1a; padding: 72px 24px 88px; overflow: hidden; position: relative; z-index: 0; isolation: isolate; }
        .rz-hero-inner { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .rz-hero-right { padding-top: 20px; }
        @media (max-width: 900px) { .rz-hero-inner { grid-template-columns: 1fr; gap: 64px; } }
        .rz-eyebrow { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #911f39; margin-bottom: 24px; text-transform: uppercase; }
        .rzp-title { font-family: var(--font-display); font-style: italic; font-size: clamp(2.2rem, 5vw, 3.6rem); line-height: 1.1; color: #fff; margin: 0 0 20px; }
        .rz-sub { font-size: 1.02rem; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 460px; margin: 0 0 32px; }
        .rz-hero-stats { display: flex; gap: 36px; flex-wrap: wrap; margin-bottom: 36px; }
        .rz-hero-stat-num { display: block; font-family: var(--font-display); font-style: italic; font-size: 1.9rem; color: #a9875c; line-height: 1; }
        .rz-hero-stat-label { display: block; font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }
        .rz-stack-wrap { width: 100%; }
        .rz-stack { position: relative; height: 300px; max-width: 480px; margin: 0 auto; }
        .rz-stack-glow { position: absolute; inset: -20px; background: radial-gradient(ellipse at center, rgba(169,135,92,0.14), transparent 70%); pointer-events: none; }
        .rz-t-card { position: absolute; inset: 0; background: rgba(255,255,255,0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; padding: 24px 26px; display: flex; flex-direction: column; gap: 16px; transition: transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .rz-t-header { display: flex; align-items: center; gap: 12px; }
        .rz-t-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(169,135,92,0.5); }
        .rz-t-namecol { display: flex; flex-direction: column; gap: 3px; }
        .rz-t-name { font-size: 14px; font-weight: 700; color: #fff; }
        .rz-t-badge { font-size: 11px; font-weight: 600; color: #a9875c; background: rgba(169,135,92,0.12); border: 1px solid rgba(169,135,92,0.3); border-radius: 999px; padding: 2px 10px; width: fit-content; }
        .rz-t-quote { font-family: var(--font-display); font-style: italic; font-size: clamp(1.2rem, 2vw, 1.5rem); color: rgba(255,255,255,0.9); line-height: 1.5; margin: 0; flex: 1; }
        .rz-t-stats { display: flex; align-items: center; gap: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px; }
        .rz-t-before { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.45); text-decoration: line-through; }
        .rz-t-arrow { color: #a9875c; display: flex; }
        .rz-t-after { font-size: 16px; font-weight: 800; color: #a9875c; }
        .rz-t-verified { margin-left: auto; font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.35); }
        .rz-nav { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 60px; justify-content: center; }
        .rz-nav-label { width: 100%; text-align: center; font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .rz-nav-item { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 8px 14px 8px 8px; cursor: pointer; transition: border-color 0.25s, background 0.25s; }
        .rz-nav-item:hover { border-color: rgba(169,135,92,0.4); }
        .rz-nav-item--active { border-color: rgba(169,135,92,0.6); background: rgba(169,135,92,0.1); }
        .rz-nav-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }
        .rz-nav-textcol { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rz-nav-name { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 700; color: #fff; }
        .rz-nav-sub { font-size: 10px; color: rgba(255,255,255,0.45); }
        .rz-cases { padding: 88px 0; }
        .rz-cases-title { font-family: var(--font-display); font-style: italic; font-size: clamp(1.8rem, 4vw, 2.8rem); color: #1a1a1a; line-height: 1.15; margin: 12px 0 0; }
        .rz-cases-sub { font-size: 0.95rem; color: #999; margin: 14px auto 0; max-width: 480px; line-height: 1.7; }
        .rz-case-reveal { margin-bottom: 36px; }
        .rz-case { position: relative; overflow: hidden; background: #1a1a1a; border: 1px solid rgba(169,135,92,0.18); border-radius: 28px; padding: 52px 48px; box-shadow: 0 24px 80px rgba(26,26,26,0.18); }
        .rz-case::before { content: ''; position: absolute; top: -120px; right: -120px; width: 380px; height: 380px; background: radial-gradient(circle, rgba(169,135,92,0.14), transparent 65%); pointer-events: none; }
        .rz-case::after { content: ''; position: absolute; bottom: -140px; left: -100px; width: 340px; height: 340px; background: radial-gradient(circle, rgba(145,31,57,0.12), transparent 65%); pointer-events: none; }
        @media (max-width: 640px) { .rz-case { padding: 32px 22px; } }
        .rz-case-ghost { position: absolute; top: 8px; right: 28px; font-family: var(--font-display); font-style: italic; font-size: clamp(6rem, 14vw, 10rem); line-height: 1; color: rgba(169,135,92,0.08); pointer-events: none; user-select: none; }
        .rz-case-head { display: flex; align-items: center; gap: 18px; margin-bottom: 22px; position: relative; }
        .rz-case-avatar-ring { flex-shrink: 0; width: 68px; height: 68px; border-radius: 50%; padding: 3px; background: linear-gradient(135deg, #a9875c, #911f39); }
        .rz-case-avatar { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 2.5px solid #1a1a1a; display: block; }
        .rz-case-tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #a9875c; margin-bottom: 6px; }
        .rz-case-name { font-family: var(--font-display); font-size: clamp(1.25rem, 3vw, 1.75rem); color: #fff; line-height: 1.2; margin: 0; font-style: normal; }
        .rz-case-name em { font-style: italic; color: #a9875c; }
        .rz-case-desc { font-size: 0.95rem; color: rgba(255,255,255,0.55); line-height: 1.75; max-width: 620px; margin: 0 0 32px; position: relative; }
        .rz-case-stats { display: flex; gap: 0; flex-wrap: wrap; margin-bottom: 40px; border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; overflow: hidden; position: relative; background: rgba(255,255,255,0.03); }
        .rz-case-stat { flex: 1; min-width: 140px; text-align: center; padding: 22px 16px; }
        .rz-case-stat + .rz-case-stat { border-left: 1px solid rgba(255,255,255,0.08); }
        @media (max-width: 560px) { .rz-case-stat { min-width: 100%; } .rz-case-stat + .rz-case-stat { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); } }
        .rz-case-stat-num { display: block; font-family: var(--font-display); font-style: italic; font-size: clamp(1.7rem, 3.5vw, 2.3rem); color: #a9875c; line-height: 1; }
        .rz-case-stat-label { display: block; font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 8px; }
        .rz-levers { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .rz-levers-line { position: absolute; top: 16px; left: 8%; right: 8%; height: 1.5px; background: linear-gradient(90deg, transparent, rgba(169,135,92,0.5), rgba(169,135,92,0.5), transparent); z-index: 0; }
        @media (max-width: 800px) { .rz-levers { grid-template-columns: 1fr; } .rz-levers-line { display: none; } }
        .rz-lever { position: relative; z-index: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 18px; padding: 26px 22px 22px; height: 100%; transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s, box-shadow 0.35s; }
        .rz-lever:hover { transform: translateY(-6px); border-color: rgba(169,135,92,0.45); box-shadow: 0 16px 44px rgba(0,0,0,0.35); }
        .rz-lever-dot { position: absolute; top: -16px; left: 22px; width: 32px; height: 32px; border-radius: 50%; background: #1a1a1a; border: 1.5px solid rgba(169,135,92,0.6); color: #a9875c; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 5px #1a1a1a; }
        .rz-lever-days { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #911f39; background: rgba(145,31,57,0.14); border-radius: 999px; padding: 3px 10px; display: inline-block; }
        .rz-lever-title { font-family: var(--font-display); font-style: italic; font-size: 1.1rem; color: #fff; margin: 12px 0 14px; }
        .rz-lever-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .rz-lever-list li { font-size: 0.83rem; color: rgba(255,255,255,0.6); line-height: 1.55; padding-left: 18px; position: relative; }
        .rz-lever-list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: linear-gradient(135deg, #a9875c, #911f39); }
        .rz-case-quote { position: relative; margin-top: 36px; padding: 22px 28px 22px 56px; background: rgba(169,135,92,0.07); border-left: 3px solid #a9875c; border-radius: 0 16px 16px 0; }
        .rz-case-quote-mark { position: absolute; top: 2px; left: 16px; font-family: var(--font-display); font-style: italic; font-size: 3rem; color: rgba(169,135,92,0.5); line-height: 1; }
        .rz-case-quote p { font-family: var(--font-display); font-style: italic; font-size: clamp(1.05rem, 2vw, 1.3rem); color: rgba(255,255,255,0.85); line-height: 1.55; margin: 0; }
        .rz-case-note { font-size: 11px; color: rgba(255,255,255,0.3); margin: 26px 0 0; text-align: center; position: relative; }
        .rz-final { padding: 0; background: #1a1a1a; }
        .rz-final-box { padding: 96px 32px; text-align: center; }
        .rz-final-title { font-family: var(--font-display); font-style: italic; font-size: clamp(1.8rem, 4vw, 2.6rem); color: #fff; margin: 0 0 12px; }
        .rz-final-sub { font-size: 0.95rem; color: rgba(255,255,255,0.5); margin: 0 0 36px; }
        .rz-final-stats { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; margin-bottom: 36px; }
        .rz-final-stat-num { display: block; font-family: var(--font-display); font-style: italic; font-size: 1.7rem; color: #a9875c; line-height: 1; }
        .rz-final-stat-label { display: block; font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }
      `}</style>
    </div>
  );
}
