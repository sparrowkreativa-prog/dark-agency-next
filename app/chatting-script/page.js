'use client';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';

const CHAPTERS = [
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
];

export default function ChattingScript() {
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
          <span className="pb-type">VODIČ · 10 POGLAVLJA · ~45 MIN ČITANJA · BESPLATNO</span>
          <h1 className="pb-title">
            Tačna skripta kojom naši čateri<br />
            <span style={{ color: '#a9875c' }}>zarađuju $1.400+ po sesiji.</span>
          </h1>
          <p className="pb-sub">10 poglavlja. Tri faze. Prava skripta za čatovanje koja generiše $1.400+ po sesiji - izgradnja odnosa, tizovanje, PPV eskalacija, cela sekvenca. Delimo je jer većina vodiča za čatovanje kaže "budi flertujuća" i smatra to strategijom.</p>

          <div className="pb-stats">
            {[
              { num: '$1.400+', label: 'po sesiji' },
              { num: '10', label: 'poglavlja' },
              { num: '3', label: 'faze prodaje' },
              { num: '$135', label: 'max PPV po sesiji' },
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
                'Izgradnja odnosa koji se osećaju prirodno i autentično',
                'Slanje tizera koji kreiraju hitnost kupovine',
                'Koristi Yes Train da dobiješ posvećenost pre prodaje',
                'Escalacija PPV cena od $25 do $135 po sesiji',
                'Provjere stvarnosti koje drže fanove angažovanim i trošeći',
                'Kompletna prodajna lestvica u svakom razgovoru',
              ].map(item => (
                <div key={item} className="pb-learn-item">
                  <span className="pb-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-section">
            <h2 className="pb-section-title">Sadržaj skripte</h2>
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
            <div className="pb-insight-num">"</div>
            <div className="pb-insight-text">
              <strong>Nikad ne počinji seksualno.</strong> Ti si nevina, igriva devojka koja se polako uzbuđuje. On vodi seksualnu energiju - ti samo pratiš (a zapravo vodiš celu stvar).
              <br /><br />
              <span style={{ color: '#a9875c', fontSize: '0.85rem' }}>- Zlatno pravilo čatovanja</span>
            </div>
          </div>

          <div className="pb-cta-box">
            <h2 className="pb-cta-title">Želiš tim koji čatuje umesto tebe?</h2>
            <p className="pb-cta-sub">Naši čateri rade 24/7 koristeći ovu istu skriptu. Ti se fokusiraš na sadržaj, mi se bavimo prihodima.</p>
            <Link href="/#apply" className="btn-primary btn-large">
              Prijavi se <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />

      <style>{`
        ${sharedStyles}
      `}</style>
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
  .pb-insight-num { font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); font-style: italic; color: #a9875c; line-height: 1; flex-shrink: 0; }
  .pb-insight-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.7; }
  .pb-insight-text strong { color: #fff; }
  .pb-cta-box { margin-top: 64px; text-align: center; background: #fff; border: 1px solid rgba(169,135,92,0.2); border-radius: 24px; padding: 52px 32px; }
  .pb-cta-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-style: italic; color: #1a1a1a; margin: 0 0 12px; }
  .pb-cta-sub { font-size: 0.95rem; color: #777; margin: 0 0 28px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }
`;
