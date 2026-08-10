'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    label: 'Dva Puta',
    title1: 'Već Afirmisana ili Krećeš od Nule,',
    title2: 'Postoji Put za Tebe.',
    sub: 'Od koje god tačke kreneš, plan je napravljen oko tebe.',
    cards: [
      {
        badge: 'Već afirmisana',
        title: 'Već zarađuješ - mi to uvećavamo.',
        steps: [
          'Ne diramo tvoju trenutnu zaradu.',
          'Ne tražimo pristup nalozima ni tvojim privatnim profilima na društvenim mrežama, niti da raskineš ugovor sa agencijom sa kojom trenutno radiš.',
          'Nastavljaš normalno da radiš kao i do sad, samo dobijaš još jednog partnera koji ti gradi brend na drugim tržištima.',
          'Sve gradimo zajedno, kroz naš sistem.',
          'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
          'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
          'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
          'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
          'Potpuna analiza tvojih trenutnih brojki i levaka',
          'Pročitamo 300+ tvojih ranijih chatova da vidimo kako su fanovi vođeni',
          'Pregledamo tvoj sadržaj na mrežama i pozicioniranje',
          'Zatim sve optimizujemo i skaliramo ono što već radi',
          'Dobijaš svog ličnog brend menadžera koji će ti biti na raspolaganju 24h i tim od još troje ljudi.',
        ],
        featured: true,
      },
      {
        badge: 'KREĆEŠ OD NULE?',
        title: 'Nova si u svemu? Gradimo to s tobom.',
        insert: {
          title1: 'Tvoj Identitet.',
          title2: 'Tvoja Pravila.',
          paras: [
            'Sistem je osmišljen tako da je identitet modela maksimalno zaštićen i obezbeđen na Balkanu - niko ne mora da zna da snimaš content, ukoliko sama ne poželiš drugačije. Privatni nalozi na društvenim mrežama se ne diraju, niti im agencija ima pristup.',
            'Geolokacije i pristup se blokiraju za države u kojima ne želiš da se content pojavi - uključujući potpuno onemogućen pristup iz Srbije, jer radimo isključivo tržište Amerike i Italije.',
            'Kao dodatna sigurnost, devojke imaju mogućnost da potpuno promene svoj look uz profesionalne perike, sočiva i privremene minimalističke tetovaže - isključivo za dan snimanja.',
          ],
          shields: ['Geo-blokiranje Srbije', 'Nulti pristup privatnim profilima', 'Zaštita identiteta za snimanje', 'Samo US & IT tržište'],
        },
        steps: [
          'Postoji set načina koji smo osmislili da tvoja privatnost, identitet i izgled bude potpuno promenjen i zaštićen tako da niko neće znati iz tvog grada ili zemlje da si to ti ukoliko na tome insistiraš.',
          'Dobijaš svog ličnog brend menadžera koji će ti biti na raspolaganju 24h i tim od još troje ljudi koji će te postepeno učiti svemu.',
          'Tvoj nalog, tvoja šifra, tvoj račun – nula troškova unapred, procenat uzimamo tek kad ti zaradiš.',
          'Ako više ne želiš da radiš sa nama, odlaziš slobodno, bez raskida ugovora i bez troškova.',
          'Otvaramo ti nove profile u Americi i Italiji – na Instagramu, TikToku, X-u, Threads-u i Redditu – i gradimo ti brend i zajednicu koja će za 30 dana praviti zaradu veću od tvog najboljeg meseca na Balkanu.',
          'Sistem je organizovan tako da je tvoje samo da snimaš – obim posla 6 do 8 sati nedeljno.',
          'Kreiramo tvoje profile i podešavamo naloge',
          'Učimo te kako da snimaš sadržaj koji prodaje',
          'Pokažemo ti tačno kako da koristiš naš CRM',
          'Zajedno mapiramo šta voliš (a šta ne), tvoj cilj i plan da ga dostigneš',
        ],
        featured: false,
      },
    ],
  },
  en: {
    label: 'Two Paths',
    title1: 'Already Established or Starting from Scratch,',
    title2: 'There Is a Path for You.',
    sub: 'Wherever you start from, the plan is built around you.',
    cards: [
      {
        badge: 'Already established',
        title: 'You\'re already earning — we multiply it.',
        steps: [
          'We don\'t touch your current earnings.',
          'We don\'t ask for access to your accounts or private social profiles, nor to terminate any current agreement.',
          'You continue working normally, you simply gain a partner who builds your brand in other markets.',
          'We build everything together, through our system.',
          'Your account, your password, your money — zero upfront, we take a percentage only when you earn.',
          'If you no longer want to work with us, you leave freely, no termination fees.',
          'We open new profiles for you in America and Italy — Instagram, TikTok, X, Threads, Reddit — and build your brand and community that will earn more in 30 days than your best month in the Balkans.',
          'The system is organized so your only job is to film — 6 to 8 hours of work per week.',
          'Full analysis of your current numbers and funnel',
          'We read 300+ of your past chats to see how fans were handled',
          'We review your social media content and positioning',
          'Then we optimize and scale what already works',
          'You get your own personal brand manager available 24h and a team of three more people.',
        ],
        featured: true,
      },
      {
        badge: 'STARTING FROM SCRATCH?',
        title: 'New to everything? We build it with you.',
        insert: {
          title1: 'Your Identity.',
          title2: 'Your Rules.',
          paras: [
            'The system is designed so that the model\'s identity is maximally protected on the Balkans — no one needs to know you film content unless you choose otherwise. Private social media accounts are not touched, and the agency has no access to them.',
            'Geolocations and access are blocked for countries where you don\'t want content to appear — including completely disabled access from Serbia, since we operate exclusively in the US and Italian markets.',
            'As an extra layer of security, models have the option to completely change their look with professional wigs, lenses and temporary minimalist tattoos — exclusively for filming days.',
          ],
          shields: ['Serbia geo-blocking', 'Zero access to private profiles', 'Identity protection for filming', 'US & IT market only'],
        },
        steps: [
          'We have developed methods to completely change and protect your privacy, identity and appearance so that no one from your city or country will know it\'s you.',
          'You get your own personal brand manager available 24h and a team of three more people who will teach you everything step by step.',
          'Your account, your password, your money — zero upfront, we take a percentage only when you earn.',
          'If you no longer want to work with us, you leave freely, no termination fees.',
          'We open new profiles for you in America and Italy — Instagram, TikTok, X, Threads, Reddit — and build your brand and community that will earn more in 30 days than your best month in the Balkans.',
          'The system is organized so your only job is to film — 6 to 8 hours of work per week.',
          'We create your profiles and set up accounts',
          'We teach you how to film content that sells',
          'We show you exactly how to use our CRM',
          'Together we map what you love (and what you don\'t), your goal and a plan to reach it',
        ],
        featured: false,
      },
    ],
  },
  it: {
    label: 'Due Percorsi',
    title1: 'Già Affermata o Parti da Zero,',
    title2: 'Esiste un Percorso per Te.',
    sub: 'Da qualsiasi punto tu parta, il piano è costruito intorno a te.',
    cards: [
      {
        badge: 'Già affermata',
        title: 'Stai già guadagnando — lo moltiplichiamo.',
        steps: [
          'Non tocchiamo i tuoi guadagni attuali.',
          'Non chiediamo accesso ai tuoi account o profili privati sui social, né di rescindere alcun accordo attuale.',
          'Continui a lavorare normalmente, guadagnando solo un partner che costruisce il tuo brand in altri mercati.',
          'Costruiamo tutto insieme, attraverso il nostro sistema.',
          'Il tuo account, la tua password, il tuo denaro — zero anticipi, prendiamo una percentuale solo quando guadagni.',
          'Se non vuoi più lavorare con noi, te ne vai liberamente, senza penali.',
          'Apriamo nuovi profili per te in America e Italia — Instagram, TikTok, X, Threads, Reddit — e costruiamo il tuo brand e community che guadagnerà più in 30 giorni del tuo miglior mese nei Balcani.',
          'Il sistema è organizzato in modo che il tuo unico compito sia girare — 6-8 ore di lavoro a settimana.',
          'Analisi completa dei tuoi numeri e funnel attuali',
          'Leggiamo 300+ tuoi messaggi passati per vedere come i fan sono stati gestiti',
          'Esaminiamo i tuoi contenuti sui social e il posizionamento',
          'Poi ottimizziamo e scaliamo ciò che già funziona',
          'Ottieni il tuo brand manager personale disponibile 24h e un team di altre tre persone.',
        ],
        featured: true,
      },
      {
        badge: 'PARTI DA ZERO?',
        title: 'Sei nuova in tutto? Lo costruiamo insieme a te.',
        insert: {
          title1: 'La Tua Identità.',
          title2: 'Le Tue Regole.',
          paras: [
            'Il sistema è progettato in modo che l\'identità della modella sia massimamente protetta nei Balcani — nessuno deve sapere che giri contenuti a meno che tu non lo voglia. I profili privati sui social non vengono toccati e l\'agenzia non vi ha accesso.',
            'Le geolocalizzazioni e l\'accesso vengono bloccati per i paesi in cui non vuoi che il contenuto appaia — incluso l\'accesso completamente disabilitato dalla Serbia, poiché operiamo esclusivamente nei mercati statunitense e italiano.',
            'Come ulteriore sicurezza, le modelle hanno la possibilità di cambiare completamente il loro look con parrucche professionali, lenti e tatuaggi temporanei minimalisti — esclusivamente per i giorni di ripresa.',
          ],
          shields: ['Geo-blocco Serbia', 'Zero accesso ai profili privati', 'Protezione identità per riprese', 'Solo mercato US & IT'],
        },
        steps: [
          'Abbiamo sviluppato metodi per cambiare e proteggere completamente la tua privacy, identità e aspetto in modo che nessuno della tua città o paese sappia che sei tu.',
          'Ottieni il tuo brand manager personale disponibile 24h e un team di altre tre persone che ti insegneranno tutto passo dopo passo.',
          'Il tuo account, la tua password, il tuo denaro — zero anticipi, prendiamo una percentuale solo quando guadagni.',
          'Se non vuoi più lavorare con noi, te ne vai liberamente, senza penali.',
          'Apriamo nuovi profili per te in America e Italia — Instagram, TikTok, X, Threads, Reddit — e costruiamo il tuo brand e community che guadagnerà più in 30 giorni del tuo miglior mese nei Balcani.',
          'Il sistema è organizzato in modo che il tuo unico compito sia girare — 6-8 ore di lavoro a settimana.',
          'Creiamo i tuoi profili e configuriamo gli account',
          'Ti insegniamo come girare contenuti che vendono',
          'Ti mostriamo esattamente come usare il nostro CRM',
          'Insieme mappiamo cosa ami (e cosa no), il tuo obiettivo e un piano per raggiungerlo',
        ],
        featured: false,
      },
    ],
  },
};

function WorldMap({ vis }) {
  const NY = { x: 1050, y: 829, label: 'New York' };
  const MI = { x: 1902, y: 754, label: 'Milano'   };
  const BG = { x: 2039, y: 769, label: 'Belgrade' };

  return (
    <div className="dp-map-wrap"
      style={{ opacity: vis?1:0, transform: vis?'none':'translateY(24px)',
               transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s' }}>
      <svg viewBox="853 350 1600 744" className="dp-map-svg" aria-hidden="true">
        <defs>
          <linearGradient id="dpArcG" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#911f39"/>
            <stop offset="100%" stopColor="#a9875c"/>
          </linearGradient>
          <filter id="dpGlowF" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="dpNYGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#911f39" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <radialGradient id="dpEUGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a9875c" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <linearGradient id="dpFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="black" stopOpacity="0"/>
            <stop offset="100%" stopColor="black" stopOpacity="0.55"/>
          </linearGradient>
          <clipPath id="dpClip">
            <rect x="853" y="350" width="1600" height="744"/>
          </clipPath>
        </defs>

        <g clipPath="url(#dpClip)">
          <image href="/world-map-dark.svg" x="0" y="0" width="3840" height="2160"/>
          <ellipse cx={NY.x} cy={NY.y} rx="220" ry="180" fill="url(#dpNYGlow)"/>
          <ellipse cx={MI.x} cy={MI.y} rx="260" ry="200" fill="url(#dpEUGlow)"/>
          <path d={`M${NY.x},${NY.y} Q1545,580 ${BG.x},${BG.y}`}
            fill="none" stroke="rgba(169,135,92,0.1)" strokeWidth="4"
            strokeDasharray="10 14"/>
          <path d={`M${NY.x},${NY.y} Q1476,491 ${MI.x},${MI.y}`}
            fill="none" stroke="url(#dpArcG)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="1500" strokeDashoffset={vis ? 0 : 1500}
            style={{transition:'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.8s'}}/>
          <path d={`M${MI.x},${MI.y} Q1970,711 ${BG.x},${BG.y}`}
            fill="none" stroke="#a9875c" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="210" strokeDashoffset={vis ? 0 : 210}
            style={{transition:'stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1) 2.8s'}}/>
          {[
            { ...NY, color:'#911f39' },
            { ...MI, color:'#a9875c' },
            { ...BG, color:'#a9875c' },
          ].map((city,i) => (
            <g key={city.label} filter="url(#dpGlowF)">
              <circle cx={city.x} cy={city.y} r="24" fill="none"
                stroke={city.color} strokeWidth="2" strokeOpacity="0.35"
                style={{animation:vis?`dpPulse 2.6s ease-out ${i*0.55}s infinite`:'none',
                        transformOrigin:`${city.x}px ${city.y}px`}}/>
              <circle cx={city.x} cy={city.y} r="14"
                fill="none" stroke={city.color} strokeWidth="3" strokeOpacity="0.75"/>
              <circle cx={city.x} cy={city.y} r="7" fill={city.color}/>
              <text x={city.x} y={city.y+36} textAnchor="middle"
                fontSize="26" fontWeight="700" letterSpacing="4"
                fill="rgba(255,255,255,0.88)">{city.label.toUpperCase()}</text>
            </g>
          ))}
          <rect x="853" y="350" width="1600" height="744" fill="url(#dpFade)"/>
        </g>
      </svg>

      <style>{`
        @keyframes dpPulse {
          0%   { transform: scale(1);   opacity: 0.9; }
          100% { transform: scale(2.6); opacity: 0; }
        }
        .dp-map-wrap {
          margin-top: 56px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #000;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .dp-map-svg { display: block; width: 100%; height: auto; }
      `}</style>
    </div>
  );
}

const STAR_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const SPROUT_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10"/>
    <path d="M10 20c5.5-2.5 8-6 8-6H2s3 6.5 8 6z"/>
    <path d="M14 13c0-4-3-7-7-7-1.93 0-3.68.78-4.95 2.05"/>
    <path d="M14 13c.67-4.33 3-7.33 7-8"/>
  </svg>
);

export default function DvaPuta() {
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

  const icons = [STAR_ICON, SPROUT_ICON];

  return (
    <section className="dp-section" ref={ref}>
      <div className="dp-container">

        <div className="dp-header" style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <span className="chapter-label dp-chapter">{t.label}</span>
          <h2 className="dp-title">
            <em className="dp-title-white">{t.title1}</em><br />
            <em className="dp-title-gold">{t.title2}</em>
          </h2>
          <p className="dp-sub">{t.sub}</p>
        </div>

        <div className="dp-grid">
          {t.cards.map((card, i) => (
            <div key={card.badge}
              id={card.featured ? undefined : 'krece-od-nule'}
              className={`dp-card${card.featured ? ' dp-card--featured' : ''}`}
              style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(28px)', transition: `opacity 0.7s ease ${0.15 + i * 0.14}s, transform 0.7s ease ${0.15 + i * 0.14}s` }}>

              <span className={`dp-badge${card.featured ? ' dp-badge--featured' : ''}`}>
                <span className="dp-badge-icon">{icons[i]}</span>
                {card.badge}
              </span>

              <h3 className="dp-card-title"><em>{card.title}</em></h3>

              {card.insert && (
                <div className="dp-insert">
                  <h4 className="dp-insert-title">{card.insert.title1}<br /><span style={{ color: '#a9875c' }}>{card.insert.title2}</span></h4>
                  <div className="dp-insert-paras">
                    {card.insert.paras.map((p, j) => <p key={j}>{p}</p>)}
                  </div>
                  <div className="dp-insert-shields">
                    {card.insert.shields.map((s, j) => (
                      <span key={j} className="dp-shield">
                        {[
                          <svg key="lock" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                          <svg key="eye" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
                          <svg key="mask" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                          <svg key="globe" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                        ][j]}
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <ul className="dp-steps">
                {card.steps.map((step, idx) => (
                  <li key={idx} className="dp-step">
                    <span className={`dp-step-num${card.featured ? ' dp-step-num--featured' : ' dp-step-num--gold'}`}>{idx + 1}</span>
                    <span className="dp-step-text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <WorldMap vis={vis} />

      </div>

      <style>{`
        .dp-section {
          background: #1a1a1a;
          padding: 80px 0 96px;
        }
        @media (max-width: 640px) { .dp-section { padding: 48px 0; } }
        .dp-container {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .dp-header { text-align: center; margin-bottom: 52px; }
        .dp-chapter {
          color: #911f39 !important;
          border-color: rgba(145,31,57,0.35) !important;
        }
        .dp-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 4vw, 42px);
          color: #fff;
          margin: 14px 0 12px;
          line-height: 1.15;
        }
        .dp-title-white { color: #fff !important; }
        .dp-title-gold { color: #a9875c; }
        .dp-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.8);
          margin: 0;
          line-height: 1.6;
        }

        .dp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 720px) {
          .dp-grid { grid-template-columns: 1fr; }
        }

        .dp-card {
          scroll-margin-top: 100px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .dp-card--featured {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(145,31,57,0.3);
          box-shadow: 0 8px 48px rgba(145,31,57,0.15), 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10);
        }
        .dp-card:not(.dp-card--featured) {
          border-color: rgba(145,31,57,0.2);
          animation: dp-glow-pulse 2.8s ease-in-out infinite;
        }
        @keyframes dp-glow-pulse {
          0%, 100% { box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 18px rgba(145,31,57,0.08), inset 0 1px 0 rgba(255,255,255,0.08); }
          50%       { box-shadow: 0 8px 52px rgba(145,31,57,0.22), 0 0 44px rgba(145,31,57,0.16), inset 0 1px 0 rgba(255,255,255,0.08); }
        }

        .dp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          padding: 5px 14px 5px 10px;
          width: fit-content;
        }
        .dp-badge--featured {
          color: #911f39;
          background: rgba(145,31,57,0.1);
          border-color: rgba(145,31,57,0.3);
        }
        .dp-badge-icon {
          color: inherit;
          display: flex;
          align-items: center;
        }

        .dp-card-title {
          font-family: var(--font-display);
          font-size: clamp(17px, 2vw, 21px);
          color: #fff;
          margin: 0;
          line-height: 1.25;
        }
        .dp-card--featured .dp-card-title { color: #fff; }

        .dp-insert {
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .dp-insert-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }
        .dp-insert-paras {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .dp-insert-paras p {
          font-size: 13.5px;
          color: rgba(255,255,255,0.72);
          line-height: 1.7;
          margin: 0;
        }
        .dp-insert-shields {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .dp-shield {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #a9875c;
          background: rgba(169,135,92,0.08);
          border: 1px solid rgba(169,135,92,0.25);
          border-radius: 999px;
          padding: 5px 12px;
        }

        .dp-steps {
          list-style: none;
          margin: 4px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dp-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .dp-step-num {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.5);
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .dp-step-num--featured {
          background: rgba(145,31,57,0.12);
          border-color: rgba(145,31,57,0.3);
          color: #911f39;
        }
        .dp-step-num--gold {
          background: rgba(169,135,92,0.12);
          border-color: rgba(169,135,92,0.35);
          color: #a9875c;
        }
        .dp-step-text {
          font-size: 15px;
          color: #fff;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
