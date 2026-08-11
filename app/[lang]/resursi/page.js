'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    chapterLabel: 'RESURSI',
    heroTitle1: 'Besplatni Alati i Vodiči',
    heroTitle2: 'Za Kreatorke.',
    heroSub: 'Alati, vodiči i strategije za rast - bez obzira da li radiš sa nama ili ne.',
    comingSoon: 'USKORO',
    soonBadge: 'Uskoro',
    explore: 'Istraži →',
    ctaTitle: 'Želiš da vodimo tvoj nalog?',
    ctaSub: 'Primamo samo 2 klijentkinje mesečno. Prijavi se i vidi da li si kvalifikovana.',
    ctaBtn: 'Prijavi se na listu čekanja',
    ctaMicro: '60 sekundi · bez troškova unapred',
    resources: [
      { type: 'Preporuka', tag: 'ISTAKNUTO', title: 'Preporuči Kreatora', desc: 'Zaradi do 10% mesečnih prihoda kreatorke koju preporučiš - svaki mesec, bez ograničenja. Jedna WhatsApp poruka je sve što treba.', tags: ['Zarada', 'Monetizacija'], href: 'referral', featured: true, img: null },
      { type: 'Vodič', title: 'Čet Strategija', desc: 'Ovladaj umećem čatovanja - skripte, upsell, zadržavanje i taktike konverzije koje pretvaraju pretplatnike u stalne kupce.', tags: ['Monetizacija', 'Strategija sadržaja'], href: 'cet-strategija', img: '/free-tools/chatting-strategy.jpg' },
      { type: 'Vodič', title: 'Reddit Playbook', desc: 'SFW-only Reddit sistem koji generiše 100+ OnlyFans pretplatnika dnevno. 8 poglavlja: odabir subreddita, sigurnost naloga, radni tok objavljivanja i skaliranje.', tags: ['Rast i saobraćaj', 'Promocija'], href: 'reddit-playbook', img: '/free-tools/REDIT.jpg' },
      { type: 'Alat', title: 'Besplatna Analiza Rasta Kreatora', desc: 'Personalizovana analiza: koje platforme da targetiraš, koliko naloga da vodiš, koliko često da objavljuješ i šta ti nedostaje.', tags: ['Rast i saobraćaj', 'Promocija'], href: 'growth-audit', img: '/free-tools/growth-audit-cover.jpg' },
      { type: 'Vodič', title: 'Instagram Playbook', desc: 'Kompletan 12-poglavni vodič koji koristimo za rast Instagram naloga kreatora - od optimizacije profila do sistema sadržaja.', tags: ['Rast i saobraćaj', 'Strategija sadržaja'], href: 'instagram-playbook', img: '/free-tools/instagram-playbook.jpg' },
      { type: 'Kalkulator', title: 'Kalkulator Zarade', desc: 'Unesi svoju nišu, broj pratilaca i frekvenciju objavljivanja da vidiš procenjeni potencijal prihoda kao kreatorka.', tags: ['Monetizacija', 'Rast i saobraćaj'], href: 'kalkulator', img: '/free-tools/CALCULATOR.jpg' },
      { type: 'Vodič', title: 'Čet Skripta', desc: 'Prava skripta koju koristimo - vidi tačno kako naši čateri otvaraju razgovore, grade odnos, upselluju i zatvaraju. Bez teorije, samo stvarna skripta.', tags: ['Monetizacija', 'Strategija sadržaja'], href: 'chatting-script', img: '/free-tools/CHATTING_SCRIPT.jpg' },
      { type: 'Vodič', title: 'Vodič za Muške Kreatore', desc: 'Sveobuhvatan vodič za muške kreatore: odabir niše, cene, izgradnja publike i monetizacija.', tags: ['Strategija sadržaja', 'Monetizacija'], href: 'male-creator-playbook', img: '/free-tools/MALE CREATOR.jpg' },
      { type: 'Alat', title: 'Besplatni DMCA Takedown', desc: 'Pronašla si svoj sadržaj na netu? Uklonićemo ga besplatno - bez ugovora, bez troškova.', tags: ['Zaštita sadržaja', 'Monetizacija'], href: 'dmca', img: '/free-tools/FREE_DMCA.jpg' },
      { type: 'Vodič', title: 'BDSM Vodič za Kreatore', desc: 'Kompletan vodič za izgradnju profitabilnog BDSM brenda - od pozicioniranja niše i psihologije pretplatnika do premium cena.', tags: ['Monetizacija', 'Strategija sadržaja'], href: 'bdsm-playbook', img: '/free-tools/BDSM.jpg' },
    ],
    comingSoonItems: [
      { type: 'Vodič', title: 'NSFW Subreddit Lista', desc: 'Kurirana lista NSFW subreddita organizovana po niši sa pravilima objavljivanja i brojem pretplatnika.', img: '/free-tools/SUB_RED.jpg' },
      { type: 'Vodič', title: 'X Playbook', desc: 'Kompletan Twitter/X sistem rasta za OnlyFans kreatorke - od podešavanja profila do viralnih strategija.', img: '/free-tools/TWITER-X.jpg' },
      { type: 'Vodič', title: 'Threads Playbook', desc: 'Kompletan Threads sistem rasta za OnlyFans kreatorke - od podešavanja profila do izgradnje angažovane publike.', img: '/free-tools/THREADS.jpg' },
      { type: 'Vodič', title: 'TikTok Playbook', desc: 'Kompletan TikTok sistem rasta - od viralnih strategija do konverzije pratilaca u pretplatnike.', img: '/free-tools/TIK-TOK.jpg' },
      { type: 'Vodič', title: 'Pornhub Playbook', desc: 'Kompletan Pornhub sistem rasta - od optimizacije profila do povećanja saobraćaja i konverzija.', img: '/free-tools/P_HUB.jpg' },
    ],
  },
  en: {
    chapterLabel: 'RESOURCES',
    heroTitle1: 'Free Tools & Guides',
    heroTitle2: 'For Creators.',
    heroSub: 'Tools, guides and growth strategies — whether you work with us or not.',
    comingSoon: 'COMING SOON',
    soonBadge: 'Coming soon',
    explore: 'Explore →',
    ctaTitle: 'Want Us to Run Your Account?',
    ctaSub: 'We accept only 2 clients per month. Apply and see if you qualify.',
    ctaBtn: 'Join the waitlist',
    ctaMicro: '60 seconds · no upfront costs',
    resources: [
      { type: 'Referral', tag: 'FEATURED', title: 'Refer a Creator', desc: 'Earn up to 10% of the monthly revenue of any creator you refer — every month, no cap. One WhatsApp message is all it takes.', tags: ['Earnings', 'Monetisation'], href: 'referral', featured: true, img: null },
      { type: 'Guide', title: 'Chat Strategy', desc: 'Master the art of chatting — scripts, upsells, retention and conversion tactics that turn subscribers into repeat buyers.', tags: ['Monetisation', 'Content Strategy'], href: 'cet-strategija', img: '/free-tools/chatting-strategy.jpg' },
      { type: 'Guide', title: 'Reddit Playbook', desc: 'SFW-only Reddit system that generates 100+ OnlyFans subscribers per day. 8 chapters: subreddit selection, account safety, posting workflow and scaling.', tags: ['Growth & Traffic', 'Promotion'], href: 'reddit-playbook', img: '/free-tools/REDIT.jpg' },
      { type: 'Tool', title: 'Free Creator Growth Audit', desc: 'Personalised analysis: which platforms to target, how many accounts to run, how often to post and what you\'re missing.', tags: ['Growth & Traffic', 'Promotion'], href: 'growth-audit', img: '/free-tools/growth-audit-cover.jpg' },
      { type: 'Guide', title: 'Instagram Playbook', desc: 'The complete 12-chapter guide we use to grow creator Instagram accounts — from profile optimisation to a full content system.', tags: ['Growth & Traffic', 'Content Strategy'], href: 'instagram-playbook', img: '/free-tools/instagram-playbook.jpg' },
      { type: 'Calculator', title: 'Earnings Calculator', desc: 'Enter your niche, follower count and posting frequency to see your estimated revenue potential as a creator.', tags: ['Monetisation', 'Growth & Traffic'], href: 'kalkulator', img: '/free-tools/CALCULATOR.jpg' },
      { type: 'Guide', title: 'Chat Script', desc: 'The real script we use — see exactly how our chatters open conversations, build rapport, upsell and close. No theory, just the actual script.', tags: ['Monetisation', 'Content Strategy'], href: 'chatting-script', img: '/free-tools/CHATTING_SCRIPT.jpg' },
      { type: 'Guide', title: 'Male Creator Playbook', desc: 'A comprehensive guide for male creators: niche selection, pricing, audience building and monetisation.', tags: ['Content Strategy', 'Monetisation'], href: 'male-creator-playbook', img: '/free-tools/MALE CREATOR.jpg' },
      { type: 'Tool', title: 'Free DMCA Takedown', desc: 'Found your content online without permission? We\'ll remove it for free — no contract, no fees.', tags: ['Content Protection', 'Monetisation'], href: 'dmca', img: '/free-tools/FREE_DMCA.jpg' },
      { type: 'Guide', title: 'BDSM Creator Playbook', desc: 'A complete guide to building a profitable BDSM brand — from niche positioning and subscriber psychology to premium pricing.', tags: ['Monetisation', 'Content Strategy'], href: 'bdsm-playbook', img: '/free-tools/BDSM.jpg' },
    ],
    comingSoonItems: [
      { type: 'Guide', title: 'NSFW Subreddit List', desc: 'A curated list of NSFW subreddits organised by niche, with posting rules and subscriber counts.', img: '/free-tools/SUB_RED.jpg' },
      { type: 'Guide', title: 'X Playbook', desc: 'The complete Twitter/X growth system for OnlyFans creators — from profile setup to viral strategies.', img: '/free-tools/TWITER-X.jpg' },
      { type: 'Guide', title: 'Threads Playbook', desc: 'The complete Threads growth system for OnlyFans creators — from profile setup to building an engaged audience.', img: '/free-tools/THREADS.jpg' },
      { type: 'Guide', title: 'TikTok Playbook', desc: 'The complete TikTok growth system — from viral strategies to converting followers into subscribers.', img: '/free-tools/TIK-TOK.jpg' },
      { type: 'Guide', title: 'Pornhub Playbook', desc: 'The complete Pornhub growth system — from profile optimisation to increasing traffic and conversions.', img: '/free-tools/P_HUB.jpg' },
    ],
  },
  it: {
    chapterLabel: 'RISORSE',
    heroTitle1: 'Strumenti e Guide Gratuite',
    heroTitle2: 'Per le Creator.',
    heroSub: 'Strumenti, guide e strategie di crescita — che tu lavori con noi o meno.',
    comingSoon: 'PROSSIMAMENTE',
    soonBadge: 'Prossimamente',
    explore: 'Esplora →',
    ctaTitle: 'Vuoi che Gestiamo il Tuo Account?',
    ctaSub: 'Accettiamo solo 2 clienti al mese. Candidati e scopri se sei qualificata.',
    ctaBtn: 'Unisciti alla lista d\'attesa',
    ctaMicro: '60 secondi · zero costi anticipati',
    resources: [
      { type: 'Referral', tag: 'IN EVIDENZA', title: 'Presenta una Creator', desc: 'Guadagna fino al 10% dei ricavi mensili di ogni creator che presenti — ogni mese, senza limiti. Basta un messaggio WhatsApp.', tags: ['Guadagni', 'Monetizzazione'], href: 'referral', featured: true, img: null },
      { type: 'Guida', title: 'Strategia di Chat', desc: 'Padroneggia l\'arte della chat — script, upsell, retention e tattiche di conversione che trasformano gli abbonati in acquirenti abituali.', tags: ['Monetizzazione', 'Strategia Contenuti'], href: 'cet-strategija', img: '/free-tools/chatting-strategy.jpg' },
      { type: 'Guida', title: 'Reddit Playbook', desc: 'Sistema Reddit solo SFW che genera 100+ abbonati OnlyFans al giorno. 8 capitoli: scelta dei subreddit, sicurezza dell\'account, flusso di pubblicazione e scaling.', tags: ['Crescita & Traffico', 'Promozione'], href: 'reddit-playbook', img: '/free-tools/REDIT.jpg' },
      { type: 'Strumento', title: 'Analisi Gratuita della Crescita', desc: 'Analisi personalizzata: quali piattaforme targetizzare, quanti account gestire, con quale frequenza pubblicare e cosa ti manca.', tags: ['Crescita & Traffico', 'Promozione'], href: 'growth-audit', img: '/free-tools/growth-audit-cover.jpg' },
      { type: 'Guida', title: 'Instagram Playbook', desc: 'La guida completa in 12 capitoli che usiamo per far crescere i profili Instagram delle creator — dall\'ottimizzazione del profilo a un sistema di contenuti completo.', tags: ['Crescita & Traffico', 'Strategia Contenuti'], href: 'instagram-playbook', img: '/free-tools/instagram-playbook.jpg' },
      { type: 'Calcolatore', title: 'Calcolatore Guadagni', desc: 'Inserisci la tua nicchia, il numero di follower e la frequenza di pubblicazione per vedere il tuo potenziale di guadagno stimato.', tags: ['Monetizzazione', 'Crescita & Traffico'], href: 'kalkulator', img: '/free-tools/CALCULATOR.jpg' },
      { type: 'Guida', title: 'Script di Chat', desc: 'Lo script reale che usiamo — vedi esattamente come i nostri chatter aprono le conversazioni, costruiscono il rapporto, fanno upsell e chiudono. Niente teoria, solo lo script vero.', tags: ['Monetizzazione', 'Strategia Contenuti'], href: 'chatting-script', img: '/free-tools/CHATTING_SCRIPT.jpg' },
      { type: 'Guida', title: 'Playbook per Creator Maschili', desc: 'Una guida completa per creator maschili: scelta della nicchia, prezzi, costruzione del pubblico e monetizzazione.', tags: ['Strategia Contenuti', 'Monetizzazione'], href: 'male-creator-playbook', img: '/free-tools/MALE CREATOR.jpg' },
      { type: 'Strumento', title: 'DMCA Takedown Gratuito', desc: 'Hai trovato i tuoi contenuti online senza permesso? Li rimuoviamo gratuitamente — nessun contratto, nessun costo.', tags: ['Protezione Contenuti', 'Monetizzazione'], href: 'dmca', img: '/free-tools/FREE_DMCA.jpg' },
      { type: 'Guida', title: 'BDSM Creator Playbook', desc: 'Una guida completa per costruire un brand BDSM redditizio — dal posizionamento di nicchia e psicologia degli abbonati ai prezzi premium.', tags: ['Monetizzazione', 'Strategia Contenuti'], href: 'bdsm-playbook', img: '/free-tools/BDSM.jpg' },
    ],
    comingSoonItems: [
      { type: 'Guida', title: 'Lista Subreddit NSFW', desc: 'Una lista curata di subreddit NSFW organizzata per nicchia, con regole di pubblicazione e numero di iscritti.', img: '/free-tools/SUB_RED.jpg' },
      { type: 'Guida', title: 'X Playbook', desc: 'Il sistema completo di crescita su Twitter/X per creator OnlyFans — dalla configurazione del profilo alle strategie virali.', img: '/free-tools/TWITER-X.jpg' },
      { type: 'Guida', title: 'Threads Playbook', desc: 'Il sistema completo di crescita su Threads per creator OnlyFans — dalla configurazione del profilo alla costruzione di un pubblico coinvolto.', img: '/free-tools/THREADS.jpg' },
      { type: 'Guida', title: 'TikTok Playbook', desc: 'Il sistema completo di crescita su TikTok — dalle strategie virali alla conversione dei follower in abbonati.', img: '/free-tools/TIK-TOK.jpg' },
      { type: 'Guida', title: 'Pornhub Playbook', desc: 'Il sistema completo di crescita su Pornhub — dall\'ottimizzazione del profilo all\'aumento del traffico e delle conversioni.', img: '/free-tools/P_HUB.jpg' },
    ],
  },
};

export default function Resursi() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;

  return (
    <div>
      <Header />

      <main className="rs-page">
        <div className="rs-hero">
          <span className="chapter-label">{t.chapterLabel}</span>
          <h1 className="rs-title">{t.heroTitle1}<br /><span style={{ color: '#a9875c' }}>{t.heroTitle2}</span></h1>
          <p className="rs-sub">{t.heroSub}</p>
        </div>

        <div className="container">
          <div className="rs-grid">
            {t.resources.map((r) => (
              <Link key={r.href} href={`${base}/${r.href}`} className={`rs-card${r.featured ? ' rs-card--featured' : ''}`}>
                {r.img && (
                  <div className="rs-card-img-wrap">
                    <img src={r.img} alt={r.title} className="rs-card-img" />
                  </div>
                )}
                {r.tag && <span className="rs-tag-featured">{r.tag}</span>}
                <span className="rs-type">{r.type}</span>
                <h2 className="rs-card-title">{r.title}</h2>
                <p className="rs-card-desc">{r.desc}</p>
                <div className="rs-card-footer">
                  <div className="rs-chips">
                    {r.tags.map(tag => <span key={tag} className="rs-chip">{tag}</span>)}
                  </div>
                  <span className="rs-explore">{t.explore}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="rs-soon-section">
            <span className="chapter-label">{t.comingSoon}</span>
            <div className="rs-soon-grid">
              {t.comingSoonItems.map((r) => (
                <div key={r.title} className="rs-card rs-card--soon">
                  {r.img && (
                    <div className="rs-card-img-wrap">
                      <img src={r.img} alt={r.title} className="rs-card-img" />
                    </div>
                  )}
                  <span className="rs-soon-badge">{t.soonBadge}</span>
                  <span className="rs-type">{r.type}</span>
                  <h2 className="rs-card-title">{r.title}</h2>
                  <p className="rs-card-desc">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rs-cta-box">
            <h2 className="rs-cta-title">{t.ctaTitle}</h2>
            <p className="rs-cta-sub">{t.ctaSub}</p>
            <Link href={`${base}/site#apply`} className="btn-primary btn-large">
              {t.ctaBtn} <span className="btn-arrow">→</span>
            </Link>
            <p style={{ fontSize: 12, color: '#aaa', marginTop: 12 }}>{t.ctaMicro}</p>
          </div>
        </div>
      </main>
      <SiteFooter />

      <style>{`
        .rs-page { background: #fafaf8; min-height: 100vh; padding-bottom: 96px; }

        .rs-hero {
          text-align: center;
          padding: 112px 24px 56px;
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .rs-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-style: italic;
          line-height: 1.1;
          color: #1a1a1a;
          margin: 12px 0 16px;
        }
        .rs-sub {
          font-size: 1.05rem;
          color: #777;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .rs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding-top: 48px;
        }
        @media (max-width: 900px) { .rs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .rs-grid { grid-template-columns: 1fr; } }

        .rs-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px;
          padding: 24px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow 0.22s, transform 0.22s, border-color 0.22s;
          position: relative;
        }
        .rs-card:hover {
          box-shadow: 0 8px 32px rgba(169,135,92,0.13);
          transform: translateY(-3px);
          border-color: rgba(169,135,92,0.3);
        }
        .rs-card--featured {
          border-color: rgba(169,135,92,0.35);
          background: linear-gradient(135deg, #fffdf9, #fff8ee);
          grid-column: span 2;
        }
        @media (max-width: 560px) { .rs-card--featured { grid-column: span 1; } }

        .rs-card--soon {
          opacity: 0.55;
          cursor: default;
          pointer-events: none;
        }
        .rs-card--soon:hover { transform: none; box-shadow: none; }

        .rs-tag-featured {
          position: absolute;
          top: 18px; right: 18px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a9875c;
          background: rgba(169,135,92,0.1);
          border: 1px solid rgba(169,135,92,0.3);
          border-radius: 999px;
          padding: 3px 10px;
        }

        .rs-soon-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #bbb;
          background: #f4f4f4;
          border-radius: 999px;
          padding: 3px 10px;
          width: fit-content;
        }

        .rs-card-img-wrap {
          width: calc(100% + 48px);
          margin: -24px -24px 16px;
          border-radius: 18px 18px 0 0;
          overflow: hidden;
          height: 180px;
        }
        .rs-card--featured .rs-card-img-wrap { height: 220px; }
        .rs-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .rs-card:hover .rs-card-img { transform: scale(1.03); }

        .rs-type {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a9875c;
        }

        .rs-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-style: italic;
          color: #1a1a1a;
          line-height: 1.2;
          margin: 0;
        }

        .rs-card-desc {
          font-size: 0.875rem;
          color: #777;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .rs-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 4px;
          flex-wrap: wrap;
        }

        .rs-chips { display: flex; gap: 6px; flex-wrap: wrap; }
        .rs-chip {
          font-size: 11px;
          color: #999;
          background: #f4f4f2;
          border-radius: 999px;
          padding: 3px 10px;
        }

        .rs-explore {
          font-size: 13px;
          font-weight: 600;
          color: #a9875c;
          white-space: nowrap;
        }

        .rs-soon-section { margin-top: 56px; }
        .rs-soon-section .chapter-label { display: block; margin-bottom: 20px; }
        .rs-soon-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) { .rs-soon-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .rs-soon-grid { grid-template-columns: 1fr; } }

        .rs-cta-box {
          margin-top: 72px;
          text-align: center;
          background: #1a1a1a;
          border-radius: 24px;
          padding: 56px 32px;
        }
        .rs-cta-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-style: italic;
          color: #fff;
          margin: 0 0 14px;
        }
        .rs-cta-sub {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          margin: 0 0 28px;
        }
      `}</style>
    </div>
  );
}
