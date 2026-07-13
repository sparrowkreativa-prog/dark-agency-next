'use client';
import Link from 'next/link';

const CHAPTERS = [
  { num: '01', title: 'BDSM Kreatorska Mogućnost', desc: '~7 min · Zašto ova niša plaća 2× više po fanu.' },
  { num: '02', title: 'Izgradnja Niša Identiteta', desc: '~10 min · Brend koji fanovi osećaju kao autentičan, ne kao proizveden.' },
  { num: '03', title: 'Inverzija Čatovanja', desc: '~12 min · Zašto ti vodiš od prve poruke i kako to raditi.' },
  { num: '04', title: 'Dinamika Sesije', desc: '~11 min · Čitanje fetiševa, izgradnja tenzije, prodaja PPV-a.' },
  { num: '05', title: 'Preokret Cena Koji Je Udvostručio Prihode', desc: '~8 min · Bez ekstra saobraćaja, 2× prihoda.' },
  { num: '06', title: 'Marketing po Platformama', desc: '~13 min · Twitter, Reddit, Pornhub, FetLife za BDSM kreatore.' },
  { num: '07', title: 'Svaki Tip Fetiša', desc: '~14 min · Noge, ponižavanje, obožavanje, cuckold, breeding i još.' },
  { num: '08', title: 'Skaliranje Operacije', desc: '~10 min · Tagovanje pretplatnika, handoff smena, masovne poruke.' },
];

export default function BdsmPlaybook() {
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

      <main className="pb-page">
        <div className="pb-hero">
          <Link href="/resursi" className="pb-back">← Svi resursi</Link>
          <span className="pb-type">VODIČ · 8 POGLAVLJA · BESPLATNO</span>
          <h1 className="pb-title">
            Vodič za BDSM kreatore<br />
            <span style={{ color: '#a9875c' }}>koji zarađuju 2× više po fanu.</span>
          </h1>
          <p className="pb-sub">Kompletan sistem za izgradnju profitabilnog BDSM brenda — od pozicioniranja niše i inverzije čatovanja do psihologije pretplatnika, dinamike sesije i strategije cena koja je jednoj stranici udvostručila prihode za jedan mesec.</p>

          <div className="pb-stats">
            {[
              { num: '2×', label: 'više prihoda po fanu' },
              { num: '$10K→$25K', label: 'za 1 mesec' },
              { num: '8', label: 'poglavlja' },
              { num: '0', label: 'ekstra saobraćaja' },
            ].map(s => (
              <div key={s.label} className="pb-stat">
                <span className="pb-stat-num">{s.num}</span>
                <span className="pb-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="pb-section">
            <h2 className="pb-section-title">Šta ćeš naučiti</h2>
            <div className="pb-learn-grid">
              {[
                'Zašto BDSM kreatori zarađuju 2× više po pretplatniku od vanilla stranica',
                'Izgradnja niša identiteta koji fanovi osećaju kao autentičan',
                'Inverzija čatovanja: zašto ti vodiš od prve poruke',
                'Dinamika sesije: čitanje fetiševa, izgradnja tenzije, prodaja PPV-a',
                'Preokret cena koji je udvostručio prihode bez ekstra saobraćaja',
                'Marketing po platformama: Twitter, Reddit, Pornhub, FetLife',
              ].map(item => (
                <div key={item} className="pb-learn-item">
                  <span className="pb-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-section">
            <h2 className="pb-section-title">Sadržaj vodiča</h2>
            <div className="pb-chapters">
              {CHAPTERS.map(ch => (
                <div key={ch.num} className="pb-chapter">
                  <span className="pb-chapter-num">Pog. {ch.num}</span>
                  <div>
                    <h3 className="pb-chapter-title">{ch.title}</h3>
                    <p className="pb-chapter-desc">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-insight">
            <div className="pb-insight-num">$10K→$25K</div>
            <div className="pb-insight-text">
              <strong>Za jedan mesec, bez ekstra saobraćaja.</strong> Preokret cena i ispravna dinamika sesije su sve što je bilo potrebno. Isti fanovi, isti sadržaj — samo ispravna strategija.
            </div>
          </div>

          <div className="pb-cta-box">
            <h2 className="pb-cta-title">Radimo i sa BDSM kreatorima.</h2>
            <p className="pb-cta-sub">Specijalizovani tim za nišne kreatore. Prijavi se i vidi da li si kvalifikovana.</p>
            <Link href="/#apply" className="btn-primary btn-large">
              Prijavi se <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </main>

      <style>{`${sharedStyles}`}</style>
    </div>
  );
}

const sharedStyles = `
  .pb-page { background: #fafaf8; min-height: 100vh; padding-bottom: 96px; }
  .pb-hero { background: #1a1a1a; padding: 64px 24px 56px; text-align: center; }
  .pb-back { display: inline-block; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; margin-bottom: 24px; transition: color 0.2s; }
  .pb-back:hover { color: #a9875c; }
  .pb-type { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; color: #a9875c; text-transform: uppercase; margin-bottom: 20px; }
  .pb-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.6rem); font-style: italic; color: #fff; line-height: 1.1; margin: 0 0 20px; }
  .pb-sub { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 640px; margin: 0 auto 40px; line-height: 1.75; }
  .pb-stats { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
  .pb-stat { text-align: center; }
  .pb-stat-num { display: block; font-family: var(--font-display); font-size: 2rem; font-style: italic; color: #a9875c; line-height: 1; }
  .pb-stat-label { font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; display: block; }
  .pb-section { margin-top: 56px; }
  .pb-section-title { font-family: var(--font-display); font-size: 1.6rem; font-style: italic; color: #1a1a1a; margin: 0 0 28px; }
  .pb-learn-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media (max-width: 640px) { .pb-learn-grid { grid-template-columns: 1fr; } }
  .pb-learn-item { display: flex; align-items: flex-start; gap: 12px; background: #fff; border: 1px solid rgba(0,0,0,0.07); border-radius: 12px; padding: 16px; font-size: 0.9rem; color: #444; line-height: 1.55; }
  .pb-check { color: #a9875c; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .pb-chapters { display: flex; flex-direction: column; gap: 2px; }
  .pb-chapter { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border: 1px solid rgba(0,0,0,0.07); border-radius: 14px; transition: border-color 0.2s; }
  .pb-chapter:hover { border-color: rgba(169,135,92,0.3); }
  .pb-chapter-num { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: #a9875c; white-space: nowrap; padding-top: 3px; min-width: 56px; }
  .pb-chapter-title { font-size: 1rem; font-weight: 700; font-style: italic; color: #1a1a1a; margin: 0 0 4px; }
  .pb-chapter-desc { font-size: 0.82rem; color: #888; margin: 0; }
  .pb-insight { margin-top: 48px; background: #1a1a1a; border-radius: 20px; padding: 36px 40px; display: flex; align-items: center; gap: 32px; }
  @media (max-width: 640px) { .pb-insight { flex-direction: column; gap: 16px; padding: 28px 24px; } }
  .pb-insight-num { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.5rem); font-style: italic; color: #a9875c; line-height: 1; flex-shrink: 0; }
  .pb-insight-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.7; }
  .pb-insight-text strong { color: #fff; }
  .pb-cta-box { margin-top: 64px; text-align: center; background: #fff; border: 1px solid rgba(169,135,92,0.2); border-radius: 24px; padding: 52px 32px; }
  .pb-cta-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-style: italic; color: #1a1a1a; margin: 0 0 12px; }
  .pb-cta-sub { font-size: 0.95rem; color: #777; margin: 0 0 28px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }
`;
