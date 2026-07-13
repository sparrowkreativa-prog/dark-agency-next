'use client';
import Link from 'next/link';

const RESOURCES = [
  {
    type: 'Preporuka',
    tag: 'ISTAKNUTO',
    title: 'Preporuči Kreatora',
    desc: 'Zaradi do 10% mesečnih prihoda kreatorke koju preporučiš — svaki mesec, bez ograničenja. Jedna WhatsApp poruka je sve što treba.',
    tags: ['Zarada', 'Monetizacija'],
    href: '/referral',
    featured: true,
    img: null,
  },
  {
    type: 'Vodič',
    title: 'Čet Strategija',
    desc: 'Ovladaj umećem čatovanja — skripte, upsell, zadržavanje i taktike konverzije koje pretvaraju pretplatnike u stalne kupce.',
    tags: ['Monetizacija', 'Strategija sadržaja'],
    href: '/cet-strategija',
    img: '/free-tools/chatting-strategy-cover.jpg',
  },
  {
    type: 'Vodič',
    title: 'Reddit Playbook',
    desc: 'SFW-only Reddit sistem koji generiše 100+ OnlyFans pretplatnika dnevno. 8 poglavlja: odabir subreddita, sigurnost naloga, radni tok objavljivanja i skaliranje.',
    tags: ['Rast i saobraćaj', 'Promocija'],
    href: '/reddit-playbook',
    img: null,
  },
  {
    type: 'Alat',
    title: 'Besplatna Analiza Rasta Kreatora',
    desc: 'Personalizovana analiza: koje platforme da targetiraš, koliko naloga da vodiš, koliko često da objavljuješ i šta ti nedostaje.',
    tags: ['Rast i saobraćaj', 'Promocija'],
    href: '/growth-audit',
    img: '/free-tools/growth-audit-cover.jpg',
  },
  {
    type: 'Vodič',
    title: 'Instagram Playbook',
    desc: 'Kompletan 12-poglavni vodič koji koristimo za rast Instagram naloga kreatora — od optimizacije profila do sistema sadržaja.',
    tags: ['Rast i saobraćaj', 'Strategija sadržaja'],
    href: '/instagram-playbook',
    img: '/free-tools/instagram-playbook-cover.jpg',
  },
  {
    type: 'Kalkulator',
    title: 'Kalkulator Zarade',
    desc: 'Unesi svoju nišu, broj pratilaca i frekvenciju objavljivanja da vidiš procenjeni potencijal prihoda kao kreatorka.',
    tags: ['Monetizacija', 'Rast i saobraćaj'],
    href: '/kalkulator',
    img: null,
  },
  {
    type: 'Vodič',
    title: 'Čet Skripta',
    desc: 'Prava skripta koju koristimo — vidi tačno kako naši čateri otvaraju razgovore, grade odnos, upselluju i zatvaraju. Bez teorije, samo stvarna skripta.',
    tags: ['Monetizacija', 'Strategija sadržaja'],
    href: '/chatting-script',
    img: null,
  },
  {
    type: 'Vodič',
    title: 'Vodič za Muške Kreatore',
    desc: 'Sveobuhvatan vodič za muške kreatore: odabir niše, cene, izgradnja publike i monetizacija.',
    tags: ['Strategija sadržaja', 'Monetizacija'],
    href: '/male-creator-playbook',
    img: null,
  },
  {
    type: 'Alat',
    title: 'Besplatni DMCA Takedown',
    desc: 'Pronašla si svoj sadržaj na netu? Uklonićemo ga besplatno — bez ugovora, bez troškova.',
    tags: ['Zaštita sadržaja', 'Monetizacija'],
    href: '/dmca',
    img: null,
  },
  {
    type: 'Vodič',
    title: 'BDSM Vodič za Kreatore',
    desc: 'Kompletan vodič za izgradnju profitabilnog BDSM brenda — od pozicioniranja niše i psihologije pretplatnika do premium cena.',
    tags: ['Monetizacija', 'Strategija sadržaja'],
    href: '/bdsm-playbook',
    img: null,
  },
];

const COMING_SOON = [
  { type: 'Vodič', title: 'NSFW Subreddit Lista', desc: 'Kurirana lista NSFW subreddita organizovana po niši sa pravilima objavljivanja i brojem pretplatnika.' },
  { type: 'Vodič', title: 'X Playbook', desc: 'Kompletan Twitter/X sistem rasta za OnlyFans kreatorke — od podešavanja profila do viralnih strategija.' },
  { type: 'Vodič', title: 'Threads Playbook', desc: 'Kompletan Threads sistem rasta za OnlyFans kreatorke — od podešavanja profila do izgradnje angažovane publike.' },
  { type: 'Vodič', title: 'TikTok Playbook', desc: 'Kompletan TikTok sistem rasta — od viralnih strategija do konverzije pratilaca u pretplatnike.' },
  { type: 'Vodič', title: 'Pornhub Playbook', desc: 'Kompletan Pornhub sistem rasta — od optimizacije profila do povećanja saobraćaja i konverzija.' },
];

export default function Resursi() {
  return (
    <div>
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="nav-container">
          <div className="nav-logo"><Link href="/" style={{ fontStyle: 'italic' }}>Velluto Nero</Link></div>
          <nav className="nav-links">
            <ul className="nav-menu">
              <li><Link href="/">Početna</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><Link href="/resursi" style={{ color: '#a9875c' }}>Resursi</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/#apply" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
              Prijavi se <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="rs-page">
        <div className="rs-hero">
          <span className="chapter-label">RESURSI</span>
          <h1 className="rs-title">Besplatni Alati i Vodiči<br /><span style={{ color: '#a9875c' }}>Za Kreatorke.</span></h1>
          <p className="rs-sub">Alati, vodiči i strategije za rast — bez obzira da li radiš sa nama ili ne.</p>
        </div>

        {/* Main grid */}
        <div className="container">
          <div className="rs-grid">
            {RESOURCES.map((r) => (
              <Link key={r.href} href={r.href} className={`rs-card${r.featured ? ' rs-card--featured' : ''}`}>
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
                    {r.tags.map(t => <span key={t} className="rs-chip">{t}</span>)}
                  </div>
                  <span className="rs-explore">Istraži →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <div className="rs-soon-section">
            <span className="chapter-label">USKORO</span>
            <div className="rs-soon-grid">
              {COMING_SOON.map((r) => (
                <div key={r.title} className="rs-card rs-card--soon">
                  <span className="rs-soon-badge">Uskoro</span>
                  <span className="rs-type">{r.type}</span>
                  <h2 className="rs-card-title">{r.title}</h2>
                  <p className="rs-card-desc">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rs-cta-box">
            <h2 className="rs-cta-title">Želiš da vodimo tvoj nalog?</h2>
            <p className="rs-cta-sub">Primamo samo 2 klijentkinje mesečno. Prijavi se i vidi da li si kvalifikovana.</p>
            <Link href="/#apply" className="btn-primary btn-large">
              Prijavi se na listu čekanja <span className="btn-arrow">→</span>
            </Link>
            <p style={{ fontSize: 12, color: '#aaa', marginTop: 12 }}>60 sekundi · bez troškova unapred</p>
          </div>
        </div>
      </main>

      <style>{`
        .rs-page { background: #fafaf8; min-height: 100vh; padding-bottom: 96px; }

        .rs-hero {
          text-align: center;
          padding: 72px 24px 56px;
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
        .rs-card--featured .rs-card-img-wrap {
          height: 220px;
        }
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

        .rs-soon-section {
          margin-top: 56px;
        }
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
