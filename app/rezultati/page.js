'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RezultatiScreenshots from '@/components/RezultatiScreenshots';

const CREATORS = [
  {
    name: 'K.R.',
    username: 'katarinaa.r',
    img: '/IG-01.jpg',
    badge: '$0 → $161K za 3 meseca',
    quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte.',
    before: '$0/mes',
    after: '$161K/mes',
  },
  {
    name: 'S.T.',
    username: 'sara.tt_',
    img: '/IG-02.jpg',
    badge: 'Top 0.01% · 12 meseci',
    quote: 'Skoro nisam aplicirala. Godinu dana kasnije i svi misle da sam u marketingu.',
    before: '€12/h',
    after: '$253K/mes',
  },
  {
    name: 'A.J.',
    username: 'anaaj_oficial',
    img: '/IG-03.jpg',
    badge: '$0 → $65K za 4 meseca',
    quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću.',
    before: '$0/mes',
    after: '$65K/mes',
  },
];

/* Transform presets by distance from active card (0 = front) */
const STACK_POS = [
  { transform: 'rotate(-2deg) translate(0px, 0px) scale(1)',    opacity: 1,   z: 50 },
  { transform: 'rotate(2deg) translate(-8px, 30px) scale(0.94)', opacity: 0.65, z: 30 },
  { transform: 'rotate(-1deg) translate(12px, 16px) scale(0.97)', opacity: 0.8, z: 40 },
];

function TestimonialStack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % CREATORS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rz-stack-wrap">
      <div className="rz-stack">
        <div className="rz-stack-glow" aria-hidden="true" />
        {CREATORS.map((c, i) => {
          const pos = STACK_POS[(i - active + CREATORS.length) % CREATORS.length];
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
                <span className="rz-t-verified">Verifikovano</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Creator nav */}
      <div className="rz-nav">
        <span className="rz-nav-label">Naše Kreatorke</span>
        {CREATORS.map((c, i) => (
          <button
            key={c.name}
            className={`rz-nav-item${i === active ? ' rz-nav-item--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Prikaži priču — ${c.name}`}
          >
            <img src={c.img} alt={c.name} className="rz-nav-avatar" />
            <span className="rz-nav-textcol">
              <span className="rz-nav-name">
                {c.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-label="Verifikovana kreatorka">
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
  return (
    <div>
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="nav-container">
          <div className="nav-logo"><Link href="/" style={{ fontStyle: 'italic' }}>Velluto Nero</Link></div>
          <nav className="nav-links">
            <ul className="nav-menu">
              <li><Link href="/">Početna</Link></li>
              <li><Link href="/rezultati" style={{ color: '#a9875c' }}>Rezultati</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><Link href="/resursi">Resursi</Link></li>
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

      <main style={{ background: '#fafaf8', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section className="rz-hero">
          <div className="rz-hero-inner">
            <div className="rz-hero-left">
              <span className="rz-eyebrow">PRIMAMO SAMO 2 KLIJENTA MESEČNO</span>
              <h1 className="rz-title">
                $11M+ Generisano.<br />
                <span style={{ color: '#a9875c' }}>Evo Dokaza.</span>
              </h1>
              <p className="rz-sub">
                Verifikovane zarade, pravi screenshotovi, prave priče kreatorki. Zaradi u prvih 30 dana više nego u svom najboljem mesecu ikada.
              </p>
              <div className="rz-hero-stats">
                {[
                  { num: '$11M+', label: 'Generisano za kreatore' },
                  { num: '140+', label: 'Klijenata' },
                  { num: '93%', label: 'Retencija kreatorki' },
                ].map(s => (
                  <div key={s.label} className="rz-hero-stat">
                    <span className="rz-hero-stat-num">{s.num}</span>
                    <span className="rz-hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="rz-hero-ctas">
                <Link href="/#apply" className="btn-primary btn-large">
                  Prijavi se na listu čekanja <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>

            <div className="rz-hero-right">
              <TestimonialStack />
            </div>
          </div>
        </section>

        {/* ── Earnings screenshots (postojeća sekcija) ── */}
        <RezultatiScreenshots />

        {/* ── Case studies ── */}
        <section className="rz-cases">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="chapter-label">DUBINSKE ANALIZE</span>
              <h2 className="rz-cases-title">Verifikovane Transformacije<br /><span style={{ color: '#a9875c' }}>Sa Pravim Brojkama.</span></h2>
            </div>

            {[
              {
                name: 'K.R. — $0 → $161.423/mes za 3 Meseca',
                desc: 'Potpuno nova kreatorka. Nula mreža. Nula publike. Nula iskustva. Skalirali smo je preko 4 platforme od nule.',
                stats: [
                  { num: '$161K', label: 'mesečno posle 90 dana' },
                  { num: '412K', label: 'Instagram pratilaca' },
                  { num: 'Top 0.05%', label: 'na platformi' },
                ],
                levers: [
                  { title: 'Pozicioniranje', days: 'Dani 1–10', items: ['Izgradnja dugoročne brend persone', 'Identifikacija tražene niše', 'Puna optimizacija profila', '20 početnih content asseta'] },
                  { title: 'Multi-Platform Lansiranje', days: 'Dani 10–45', items: ['Viralni Twitter + Threads crossposting', '3–5 dnevnih posting klastera', 'IG Reels viralnost', 'Topao saobraćaj → trial → upsell'] },
                  { title: 'Čet & PPV Sistem', days: 'Dani 20–90', items: ['E.I.P.S. framework emocionalne prodaje', 'PPV lestvica + high-ticket customi', 'Retencija četa + GFE ciklus', 'Trigger-based upsellovi'] },
                ],
              },
              {
                name: 'A.J. — $0 → $65.218/mes za 4 Meseca',
                desc: 'Dve nedelje se plašila da pošalje prijavu. Izgradili smo joj kompletan growth engine od nule — brend, content flow, distribuciju i monetizaciju.',
                stats: [
                  { num: '$65K', label: 'mesečno posle 4 meseca' },
                  { num: '318K', label: 'Instagram pratilaca' },
                  { num: 'Top 0.3%', label: 'na platformi' },
                ],
                levers: [
                  { title: 'Pozicioniranje', days: 'Dani 1–7', items: ['Izgradnja persone + ugla', 'Spajanje niše sa Reddit tražnjom', 'Konverzioni profil', '14 početnih content asseta'] },
                  { title: 'Multi-Platform Lansiranje', days: 'Dani 7–23', items: ['Dnevni Reddit posting (3 varijacije/dan)', '3 Twitter posting klastera/dan', 'Cross-platform usmeravanje fanova', 'Bez spama — value-first lansiranje'] },
                  { title: 'Čet & PPV Sistem', days: 'Dani 10–26', items: ['Brzi odgovori + E.I.P.S. poruke', 'Triggerovane PPV lestvice', 'Monetizacija ranih fanova', 'Welcome sekvenca koja konvertuje'] },
                ],
              },
            ].map(cs => (
              <div key={cs.name} className="rz-case">
                <h3 className="rz-case-name">{cs.name}</h3>
                <p className="rz-case-desc">{cs.desc}</p>
                <div className="rz-case-stats">
                  {cs.stats.map(s => (
                    <div key={s.label} className="rz-case-stat">
                      <span className="rz-case-stat-num">{s.num}</span>
                      <span className="rz-case-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="rz-levers">
                  {cs.levers.map(l => (
                    <div key={l.title} className="rz-lever">
                      <span className="rz-lever-days">{l.days}</span>
                      <h4 className="rz-lever-title">{l.title}</h4>
                      <ul className="rz-lever-list">
                        {l.items.map(it => <li key={it}>{it}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="rz-case-note">Verifikovano preko dashboarda kreatorke. Svi lični podaci zamućeni radi privatnosti.</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="rz-final">
          <div className="container">
            <div className="rz-final-box">
              <h2 className="rz-final-title">Postani Sledeći Rezultat.</h2>
              <p className="rz-final-sub">Primamo samo 2 klijenta mesečno · 60-sekundi prijava · nula troškova unapred</p>
              <div className="rz-final-stats">
                {[
                  { num: '93%', label: 'Retencija' },
                  { num: '60 dana', label: 'Prosek do 2× prihoda' },
                  { num: '$11M+', label: 'Generisano za kreatore' },
                ].map(s => (
                  <div key={s.label} className="rz-final-stat">
                    <span className="rz-final-stat-num">{s.num}</span>
                    <span className="rz-final-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/#apply" className="btn-primary btn-large">
                Prijavi se na listu čekanja <span className="btn-arrow">→</span>
              </Link>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 14 }}>Traje 60 sekundi · Bez obaveza</p>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        /* ── Hero ── */
        .rz-hero {
          background: #1a1a1a;
          padding: 72px 24px 88px;
          overflow: hidden;
        }
        .rz-hero-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .rz-hero-inner { grid-template-columns: 1fr; gap: 64px; }
        }
        .rz-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #911f39;
          background: rgba(145,31,57,0.12);
          border: 1px solid rgba(145,31,57,0.35);
          border-radius: 999px;
          padding: 6px 16px;
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .rz-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1.1;
          color: #fff;
          margin: 0 0 20px;
        }
        .rz-sub {
          font-size: 1.02rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 460px;
          margin: 0 0 32px;
        }
        .rz-hero-stats {
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .rz-hero-stat-num {
          display: block;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.9rem;
          color: #a9875c;
          line-height: 1;
        }
        .rz-hero-stat-label {
          display: block;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 6px;
        }

        /* ── Testimonial stack ── */
        .rz-stack-wrap { width: 100%; }
        .rz-stack {
          position: relative;
          height: 300px;
          max-width: 480px;
          margin: 0 auto;
        }
        .rz-stack-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(ellipse at center, rgba(169,135,92,0.14), transparent 70%);
          pointer-events: none;
        }
        .rz-t-card {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 24px 26px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .rz-t-header { display: flex; align-items: center; gap: 12px; }
        .rz-t-avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(169,135,92,0.5);
        }
        .rz-t-namecol { display: flex; flex-direction: column; gap: 3px; }
        .rz-t-name { font-size: 14px; font-weight: 700; color: #fff; }
        .rz-t-badge {
          font-size: 11px;
          font-weight: 600;
          color: #a9875c;
          background: rgba(169,135,92,0.12);
          border: 1px solid rgba(169,135,92,0.3);
          border-radius: 999px;
          padding: 2px 10px;
          width: fit-content;
        }
        .rz-t-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          color: rgba(255,255,255,0.9);
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        .rz-t-stats {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 14px;
        }
        .rz-t-before {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-decoration: line-through;
        }
        .rz-t-arrow { color: #a9875c; display: flex; }
        .rz-t-after {
          font-size: 16px;
          font-weight: 800;
          color: #a9875c;
        }
        .rz-t-verified {
          margin-left: auto;
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.35);
        }

        /* ── Creator nav ── */
        .rz-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 60px;
          justify-content: center;
        }
        .rz-nav-label {
          width: 100%;
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 4px;
        }
        .rz-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 8px 14px 8px 8px;
          cursor: pointer;
          transition: border-color 0.25s, background 0.25s;
        }
        .rz-nav-item:hover { border-color: rgba(169,135,92,0.4); }
        .rz-nav-item--active {
          border-color: rgba(169,135,92,0.6);
          background: rgba(169,135,92,0.1);
        }
        .rz-nav-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .rz-nav-textcol { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
        .rz-nav-name {
          display: flex; align-items: center; gap: 4px;
          font-size: 12px; font-weight: 700; color: #fff;
        }
        .rz-nav-sub { font-size: 10px; color: rgba(255,255,255,0.45); }

        /* ── Case studies ── */
        .rz-cases { padding: 88px 0; }
        .rz-cases-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: #1a1a1a;
          line-height: 1.15;
          margin: 12px 0 0;
        }
        .rz-case {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 24px;
          padding: 44px 40px;
          margin-bottom: 28px;
        }
        @media (max-width: 640px) { .rz-case { padding: 28px 22px; } }
        .rz-case-name {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          color: #1a1a1a;
          margin: 0 0 12px;
        }
        .rz-case-desc {
          font-size: 0.95rem;
          color: #777;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 0 28px;
        }
        .rz-case-stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .rz-case-stat-num {
          display: block;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.7rem;
          color: #911f39;
          line-height: 1;
        }
        .rz-case-stat-label {
          display: block;
          font-size: 11px;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 6px;
        }
        .rz-levers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 800px) { .rz-levers { grid-template-columns: 1fr; } }
        .rz-lever {
          background: #fafaf8;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          padding: 22px 20px;
        }
        .rz-lever-days {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a9875c;
        }
        .rz-lever-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.05rem;
          color: #1a1a1a;
          margin: 8px 0 12px;
        }
        .rz-lever-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 8px;
        }
        .rz-lever-list li {
          font-size: 0.83rem;
          color: #666;
          line-height: 1.5;
          padding-left: 16px;
          position: relative;
        }
        .rz-lever-list li::before {
          content: '';
          position: absolute;
          left: 0; top: 8px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #a9875c;
        }
        .rz-case-note {
          font-size: 11px;
          color: #aaa;
          margin: 24px 0 0;
          text-align: center;
        }

        /* ── Final CTA ── */
        .rz-final { padding: 0 0 96px; }
        .rz-final-box {
          background: #1a1a1a;
          border-radius: 24px;
          padding: 64px 32px;
          text-align: center;
        }
        .rz-final-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #fff;
          margin: 0 0 12px;
        }
        .rz-final-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          margin: 0 0 36px;
        }
        .rz-final-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .rz-final-stat-num {
          display: block;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.7rem;
          color: #a9875c;
          line-height: 1;
        }
        .rz-final-stat-label {
          display: block;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 6px;
        }
      `}</style>
    </div>
  );
}
