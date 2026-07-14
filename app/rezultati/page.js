'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import RezultatiScreenshots from '@/components/RezultatiScreenshots';

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

/* Count-up broj koji se animira kada uđe u viewport */
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

/* Wrapper koji fade-in animira sadržaj pri skrolu, sa staggered delay-em */
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
              <h1 className="rzp-title">
                $11M+ Generisano.<br />
                <span style={{ color: '#a9875c' }}>Evo Dokaza.</span>
              </h1>
              <p className="rz-sub">
                Verifikovane zarade, pravi screenshotovi, prave priče kreatorki. Zaradi u prvih 30 dana više nego u svom najboljem mesecu ikada.
              </p>
              <div className="rz-hero-stats">
                {[
                  { end: 11, format: v => `$${Math.round(v)}M+`, label: 'Generisano za kreatore' },
                  { end: 140, format: v => `${Math.round(v)}+`, label: 'Klijenata' },
                  { end: 93, format: v => `${Math.round(v)}%`, label: 'Retencija kreatorki' },
                ].map(s => (
                  <div key={s.label} className="rz-hero-stat">
                    <CountUp end={s.end} format={s.format} className="rz-hero-stat-num" />
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
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <span className="chapter-label">DUBINSKE ANALIZE</span>
                <h2 className="rz-cases-title">Verifikovane Transformacije<br /><span style={{ color: '#a9875c' }}>Sa Pravim Brojkama.</span></h2>
                <p className="rz-cases-sub">Pravi vremenski okviri, prave platforme, prave brojke — korak po korak kako smo ih izgradili.</p>
              </div>
            </Reveal>

            {[
              {
                num: '01',
                img: '/IG-01.jpg',
                creator: 'K.R.',
                tag: 'Top 0.05% · 3 meseca sa Velluto Nero',
                name: '$0 → $161.423/mes za 3 Meseca',
                desc: 'Potpuno nova kreatorka. Nula mreža. Nula publike. Nula iskustva. Skalirali smo je preko 4 platforme od nule.',
                quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte.',
                stats: [
                  { end: 161, format: v => `$${Math.round(v)}K`, label: 'mesečno posle 90 dana' },
                  { end: 412, format: v => `${Math.round(v)}K`, label: 'Instagram pratilaca' },
                  { end: 0.05, format: v => `Top ${v.toFixed(2)}%`, label: 'na platformi' },
                ],
                levers: [
                  { title: 'Pozicioniranje', days: 'Dani 1–10', items: ['Izgradnja dugoročne brend persone', 'Identifikacija tražene niše', 'Puna optimizacija profila', '20 početnih content asseta'] },
                  { title: 'Multi-Platform Lansiranje', days: 'Dani 10–45', items: ['Viralni Twitter + Threads crossposting', '3–5 dnevnih posting klastera', 'IG Reels viralnost', 'Topao saobraćaj → trial → upsell'] },
                  { title: 'Čet & PPV Sistem', days: 'Dani 20–90', items: ['E.I.P.S. framework emocionalne prodaje', 'PPV lestvica + high-ticket customi', 'Retencija četa + GFE ciklus', 'Trigger-based upsellovi'] },
                ],
              },
              {
                num: '02',
                img: '/IG-03.jpg',
                creator: 'A.J.',
                tag: 'Top 0.3% · 4 meseca sa Velluto Nero',
                name: '$0 → $65.218/mes za 4 Meseca',
                desc: 'Dve nedelje se plašila da pošalje prijavu. Izgradili smo joj kompletan growth engine od nule — brend, content flow, distribuciju i monetizaciju.',
                quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću.',
                stats: [
                  { end: 65, format: v => `$${Math.round(v)}K`, label: 'mesečno posle 4 meseca' },
                  { end: 318, format: v => `${Math.round(v)}K`, label: 'Instagram pratilaca' },
                  { end: 0.3, format: v => `Top ${v.toFixed(1)}%`, label: 'na platformi' },
                ],
                levers: [
                  { title: 'Pozicioniranje', days: 'Dani 1–7', items: ['Izgradnja persone + ugla', 'Spajanje niše sa Reddit tražnjom', 'Konverzioni profil', '14 početnih content asseta'] },
                  { title: 'Multi-Platform Lansiranje', days: 'Dani 7–23', items: ['Dnevni Reddit posting (3 varijacije/dan)', '3 Twitter posting klastera/dan', 'Cross-platform usmeravanje fanova', 'Bez spama — value-first lansiranje'] },
                  { title: 'Čet & PPV Sistem', days: 'Dani 10–26', items: ['Brzi odgovori + E.I.P.S. poruke', 'Triggerovane PPV lestvice', 'Monetizacija ranih fanova', 'Welcome sekvenca koja konvertuje'] },
                ],
              },
            ].map(cs => (
              <Reveal key={cs.num} className="rz-case-reveal">
                <div className="rz-case">
                  <span className="rz-case-ghost" aria-hidden="true">{cs.num}</span>

                  {/* Header: avatar + name + tag */}
                  <div className="rz-case-head">
                    <div className="rz-case-avatar-ring">
                      <img src={cs.img} alt={cs.creator} className="rz-case-avatar" />
                    </div>
                    <div className="rz-case-headtext">
                      <span className="rz-case-tag">{cs.tag}</span>
                      <h3 className="rz-case-name">{cs.creator} — <em>{cs.name}</em></h3>
                    </div>
                  </div>

                  <p className="rz-case-desc">{cs.desc}</p>

                  {/* Animated stats */}
                  <div className="rz-case-stats">
                    {cs.stats.map((s, i) => (
                      <div key={s.label} className="rz-case-stat">
                        <CountUp end={s.end} format={s.format} className="rz-case-stat-num" duration={1600 + i * 200} />
                        <span className="rz-case-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Levers timeline */}
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

                  {/* Quote strip */}
                  <div className="rz-case-quote">
                    <span className="rz-case-quote-mark" aria-hidden="true">&ldquo;</span>
                    <p>{cs.quote}</p>
                  </div>

                  <p className="rz-case-note">Verifikovano preko dashboarda kreatorke. Svi lični podaci zamućeni radi privatnosti.</p>
                </div>
              </Reveal>
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
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .rzp-title {
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
        .rz-cases-sub {
          font-size: 0.95rem;
          color: #999;
          margin: 14px auto 0;
          max-width: 480px;
          line-height: 1.7;
        }
        .rz-case-reveal { margin-bottom: 36px; }
        .rz-case {
          position: relative;
          overflow: hidden;
          background: #1a1a1a;
          border: 1px solid rgba(169,135,92,0.18);
          border-radius: 28px;
          padding: 52px 48px;
          box-shadow: 0 24px 80px rgba(26,26,26,0.18);
        }
        .rz-case::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(169,135,92,0.14), transparent 65%);
          pointer-events: none;
        }
        .rz-case::after {
          content: '';
          position: absolute;
          bottom: -140px; left: -100px;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(145,31,57,0.12), transparent 65%);
          pointer-events: none;
        }
        @media (max-width: 640px) { .rz-case { padding: 32px 22px; } }
        .rz-case-ghost {
          position: absolute;
          top: 8px; right: 28px;
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(6rem, 14vw, 10rem);
          line-height: 1;
          color: rgba(169,135,92,0.08);
          pointer-events: none;
          user-select: none;
        }
        .rz-case-head {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 22px;
          position: relative;
        }
        .rz-case-avatar-ring {
          flex-shrink: 0;
          width: 68px; height: 68px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #a9875c, #911f39);
        }
        .rz-case-avatar {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid #1a1a1a;
          display: block;
        }
        .rz-case-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #a9875c;
          margin-bottom: 6px;
        }
        .rz-case-name {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: #fff;
          line-height: 1.2;
          margin: 0;
          font-style: normal;
        }
        .rz-case-name em { font-style: italic; color: #a9875c; }
        .rz-case-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          max-width: 620px;
          margin: 0 0 32px;
          position: relative;
        }
        .rz-case-stats {
          display: flex;
          gap: 0;
          flex-wrap: wrap;
          margin-bottom: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background: rgba(255,255,255,0.03);
        }
        .rz-case-stat {
          flex: 1;
          min-width: 140px;
          text-align: center;
          padding: 22px 16px;
        }
        .rz-case-stat + .rz-case-stat { border-left: 1px solid rgba(255,255,255,0.08); }
        @media (max-width: 560px) {
          .rz-case-stat { min-width: 100%; }
          .rz-case-stat + .rz-case-stat { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); }
        }
        .rz-case-stat-num {
          display: block;
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.7rem, 3.5vw, 2.3rem);
          color: #a9875c;
          line-height: 1;
        }
        .rz-case-stat-label {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 8px;
        }

        /* Levers timeline */
        .rz-levers {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .rz-levers-line {
          position: absolute;
          top: 16px; left: 8%; right: 8%;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(169,135,92,0.5), rgba(169,135,92,0.5), transparent);
          z-index: 0;
        }
        @media (max-width: 800px) {
          .rz-levers { grid-template-columns: 1fr; }
          .rz-levers-line { display: none; }
        }
        .rz-lever {
          position: relative;
          z-index: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          padding: 26px 22px 22px;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s, box-shadow 0.35s;
        }
        .rz-lever:hover {
          transform: translateY(-6px);
          border-color: rgba(169,135,92,0.45);
          box-shadow: 0 16px 44px rgba(0,0,0,0.35);
        }
        .rz-lever-dot {
          position: absolute;
          top: -16px; left: 22px;
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #1a1a1a;
          border: 1.5px solid rgba(169,135,92,0.6);
          color: #a9875c;
          font-size: 13px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 5px #1a1a1a;
        }
        .rz-lever-days {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #911f39;
          background: rgba(145,31,57,0.14);
          border-radius: 999px;
          padding: 3px 10px;
          display: inline-block;
        }
        .rz-lever-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.1rem;
          color: #fff;
          margin: 12px 0 14px;
        }
        .rz-lever-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 9px;
        }
        .rz-lever-list li {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.55;
          padding-left: 18px;
          position: relative;
        }
        .rz-lever-list li::before {
          content: '';
          position: absolute;
          left: 0; top: 7px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a9875c, #911f39);
        }

        /* Quote strip */
        .rz-case-quote {
          position: relative;
          margin-top: 36px;
          padding: 22px 28px 22px 56px;
          background: rgba(169,135,92,0.07);
          border-left: 3px solid #a9875c;
          border-radius: 0 16px 16px 0;
        }
        .rz-case-quote-mark {
          position: absolute;
          top: 2px; left: 16px;
          font-family: var(--font-display);
          font-style: italic;
          font-size: 3rem;
          color: rgba(169,135,92,0.5);
          line-height: 1;
        }
        .rz-case-quote p {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          color: rgba(255,255,255,0.85);
          line-height: 1.55;
          margin: 0;
        }
        .rz-case-note {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          margin: 26px 0 0;
          text-align: center;
          position: relative;
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
