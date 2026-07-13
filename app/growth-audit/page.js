'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

const platforms = ['OnlyFans', 'TikTok', 'X / Twitter', 'Reddit', 'OFTV', 'YouTube', 'Drugo'];

const features = [
  { icon: '🔍', title: 'Analiza platformi', desc: 'Proveravamo svaku platformu na kojoj si i identifikujemo one koje propuštaš.' },
  { icon: '🎯', title: 'Fokus na glavnu platformu', desc: 'Kažemo ti tačno koju platformu da prioritizuješ i zašto.' },
  { icon: '⚡', title: 'Brze popravke', desc: 'Pokvareni linkovi, praznine u levku, problemi sa bio-om — hvatamo ono što ti nedostaje.' },
  { icon: '📈', title: 'Strategija sadržaja', desc: 'Koji tipovi sadržaja da fokusiraš i koliko često da objavljuješ.' },
];

export default function GrowthAudit() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', instagram: '', phone: '', help: '' });

  function togglePlatform(p) {
    setSelected(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={montserrat.variable}>
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--color-dark-1)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
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

      <main className="cs-page">
        <div className="cs-content-wrap">
          <div className="ga-container">

            {/* Cover */}
            <div className="cs-fade-in cs-cover-box">
              <Image
                src="/free-tools/growth-audit-cover.jpg"
                alt="Besplatna analiza rasta kreatora"
                width={760}
                height={420}
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 760px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Hero text */}
            <div className="cs-fade-in cs-intro-block">
              <span className="chapter-label" style={{ color: '#a9875c', marginBottom: 16, display: 'block' }}>Besplatno · Personalizovano · Bez obaveza</span>
              <h1 className="cs-page-title">
                Dobij svoju<br /><em>besplatnu analizu rasta</em>
              </h1>
              <p className="cs-lead">
                Ostavi svoje profile i poslaćemo ti personalizovani pregled — koje platforme da fokusiraš, šta radiš dobro, šta je pokvareno i tačno kako to popraviti.
              </p>
            </div>

            {/* What you'll get */}
            <div className="cs-fade-in ga-features-intro">
              <p className="ga-features-label">Šta ćeš dobiti</p>
              <p className="ga-features-sub">Pravi pregled od pravih ljudi — ne automatizovani izveštaj. Gledamo tvoje naloge i kažemo ti tačno šta da radiš.</p>
            </div>

            <div className="ga-features-grid">
              {features.map((f, i) => (
                <div key={i} className="cs-fade-in ga-feature-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="ga-feature-icon">{f.icon}</span>
                  <h3 className="ga-feature-title">{f.title}</h3>
                  <p className="ga-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="cs-fade-in ga-form-wrap">
              {submitted ? (
                <div className="ga-success">
                  <div className="ga-success-icon">✓</div>
                  <h2 className="ga-success-title">Zahtev primljen!</h2>
                  <p className="ga-success-desc">Javiće ti se naš tim putem WhatsApp-a ili Telegrama sa tvojim personalizovanim pregledom. Obično odgovaramo u roku od 24 sata.</p>
                  <Link href="/" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
                    Nazad na početnu <span className="btn-arrow">→</span>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ga-form">
                  <h2 className="ga-form-title">Pokreni svoju analizu</h2>

                  <div className="ga-field">
                    <label className="ga-label">Ime *</label>
                    <input
                      type="text"
                      required
                      className="ga-input"
                      placeholder="Tvoje ime"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="ga-field">
                    <label className="ga-label">Instagram *</label>
                    <div className="ga-input-prefix-wrap">
                      <span className="ga-input-prefix">@</span>
                      <input
                        type="text"
                        required
                        className="ga-input ga-input--prefixed"
                        placeholder="tvoj.profil"
                        value={form.instagram}
                        onChange={e => setForm({ ...form, instagram: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ga-field">
                    <label className="ga-label">Broj telefona *</label>
                    <div className="ga-input-prefix-wrap">
                      <span className="ga-input-prefix">🇷🇸 +381</span>
                      <input
                        type="tel"
                        required
                        className="ga-input ga-input--prefixed"
                        placeholder="6X XXX XXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ga-field">
                    <label className="ga-label">Ostale platforme <span style={{ opacity: 0.5, fontWeight: 400 }}>(opciono)</span></label>
                    <div className="ga-platforms">
                      {platforms.map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePlatform(p)}
                          className={`ga-platform-btn${selected.includes(p) ? ' active' : ''}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="ga-field">
                    <label className="ga-label">Sa čime ti treba pomoć?</label>
                    <textarea
                      className="ga-input ga-textarea"
                      placeholder="Npr. ne rastem na Instagramu, ne znam koje platforme da koristim, imam malo konverzija..."
                      rows={4}
                      value={form.help}
                      onChange={e => setForm({ ...form, help: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary ga-submit">
                    Dobij moju besplatnu analizu <span className="btn-arrow">→</span>
                  </button>

                  <p className="ga-disclaimer">100% besplatno. Javićemo ti se putem WhatsApp-a ili Telegrama sa tvojim personalizovanim pregledom. Bez spama, bez obaveza.</p>
                </form>
              )}
            </div>

            {/* Stats + CTA */}
            <div className="cs-fade-in ga-agency-section">
              <div className="ga-agency-inner">
                <h2 className="ga-agency-title">Hoćeš da mi upravljamo svime?</h2>
                <p className="ga-agency-desc">Ako hoćeš tim koji vodi tvoj Instagram, OnlyFans, čet i promociju — to takođe radimo. Bez troškova unapred · Bez dugih ugovora · Puna kontrola naloga</p>
                <div className="ga-stats">
                  <div className="ga-stat">
                    <span className="ga-stat-num">140+</span>
                    <span className="ga-stat-label">Aktivnih kreatorki</span>
                  </div>
                  <div className="ga-stat">
                    <span className="ga-stat-num">10–20×</span>
                    <span className="ga-stat-label">Rast prihoda</span>
                  </div>
                  <div className="ga-stat">
                    <span className="ga-stat-num">93%</span>
                    <span className="ga-stat-label">Stopa zadržavanja</span>
                  </div>
                </div>
                <Link href="/#apply" className="btn-primary btn-large">
                  Apliciraj da sarađujemo <span className="btn-arrow">→</span>
                </Link>
                <p style={{ marginTop: 12, fontSize: '0.8rem', opacity: 0.55 }}>Traje 60 sekundi · Bez obaveza</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer id="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">Velluto Nero</div>
              <p className="footer-tagline">Najpromišljeniji način da razviješ svoj brend.</p>
            </div>
            <Link href="/#apply" className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>Prijavi se <span>→</span></Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Velluto Nero. Sva prava zadržana.</p>
            <div className="footer-legal"><a href="/privacy">Privatnost</a><a href="/terms">Uslovi</a></div>
          </div>
        </div>
      </footer>

      <style>{`
        .cs-page { background: var(--color-dark-1); color: #1a1a1a; font-family: var(--font-montserrat, 'Montserrat', sans-serif); }
        .cs-content-wrap { padding-bottom: 0; }
        .ga-container { max-width: 680px; margin: 0 auto; padding: 0 24px 80px; }
        .cs-fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .cs-fade-in.visible { opacity: 1; transform: none; }
        .cs-cover-box { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.13); margin: 48px auto 0; }
        @media (max-width: 600px) { .cs-cover-box { border-radius: 10px; } }
        .cs-intro-block { padding: 40px 0 8px; }
        .cs-page-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 2.8rem); line-height: 1.15; margin: 12px 0 20px; color: #1a1a1a; }
        .cs-page-title em { color: #a9875c; font-style: italic; }
        .cs-lead { font-size: 1rem; line-height: 1.8; color: #444; margin: 0 0 20px; }

        /* Features */
        .ga-features-intro { margin: 40px 0 20px; }
        .ga-features-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #a9875c; margin-bottom: 8px; }
        .ga-features-sub { font-size: 0.97rem; color: #555; line-height: 1.7; margin: 0; }
        .ga-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 48px; }
        @media (max-width: 560px) { .ga-features-grid { grid-template-columns: 1fr; } }
        .ga-feature-card { background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .ga-feature-icon { font-size: 1.8rem; display: block; margin-bottom: 12px; }
        .ga-feature-title { font-size: 0.97rem; font-weight: 700; color: #1a1a1a; margin: 0 0 8px; }
        .ga-feature-desc { font-size: 0.85rem; color: #666; line-height: 1.6; margin: 0; }

        /* Form */
        .ga-form-wrap { margin-bottom: 64px; }
        .ga-form { background: #fff; border-radius: 16px; padding: 40px; box-shadow: 0 8px 40px rgba(0,0,0,0.09); }
        @media (max-width: 560px) { .ga-form { padding: 28px 20px; } }
        .ga-form-title { font-family: var(--font-display); font-size: 1.6rem; font-style: italic; color: #1a1a1a; margin: 0 0 32px; }
        .ga-field { margin-bottom: 24px; }
        .ga-label { display: block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #555; margin-bottom: 8px; }
        .ga-input { width: 100%; border: 1.5px solid #e0dbd5; border-radius: 8px; padding: 12px 16px; font-size: 0.95rem; font-family: inherit; color: #1a1a1a; background: #fafaf8; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .ga-input:focus { border-color: #a9875c; box-shadow: 0 0 0 3px rgba(169,135,92,0.1); background: #fff; }
        .ga-textarea { resize: vertical; min-height: 100px; }
        .ga-input-prefix-wrap { display: flex; align-items: center; }
        .ga-input-prefix { background: #f0ede8; border: 1.5px solid #e0dbd5; border-right: none; border-radius: 8px 0 0 8px; padding: 12px 14px; font-size: 0.85rem; color: #666; white-space: nowrap; flex-shrink: 0; }
        .ga-input--prefixed { border-radius: 0 8px 8px 0; border-left: none; flex: 1; }
        .ga-input--prefixed:focus { border-left: none; }
        .ga-platforms { display: flex; flex-wrap: wrap; gap: 8px; }
        .ga-platform-btn { padding: 8px 16px; border-radius: 20px; border: 1.5px solid #e0dbd5; background: #fff; font-size: 0.83rem; color: #555; cursor: pointer; transition: all 0.2s ease; font-family: inherit; }
        .ga-platform-btn:hover { border-color: #a9875c; color: #a9875c; }
        .ga-platform-btn.active { background: #a9875c; border-color: #a9875c; color: #fff; }
        .ga-submit { width: 100%; justify-content: center; margin-top: 8px; font-size: 1rem; padding: 16px 24px; }
        .ga-disclaimer { margin-top: 14px; font-size: 0.78rem; color: #aaa; text-align: center; line-height: 1.6; }

        /* Success */
        .ga-success { text-align: center; background: #fff; border-radius: 16px; padding: 56px 40px; box-shadow: 0 8px 40px rgba(0,0,0,0.09); }
        .ga-success-icon { width: 64px; height: 64px; background: #a9875c; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 1.6rem; color: #fff; }
        .ga-success-title { font-family: var(--font-display); font-size: 1.8rem; font-style: italic; color: #1a1a1a; margin: 0 0 12px; }
        .ga-success-desc { font-size: 0.97rem; color: #555; line-height: 1.7; max-width: 400px; margin: 0 auto; }

        /* Agency section */
        .ga-agency-section { background: #1a1a1a; border-radius: 20px; overflow: hidden; margin-bottom: 0; }
        .ga-agency-inner { padding: 56px 48px; text-align: center; }
        @media (max-width: 560px) { .ga-agency-inner { padding: 40px 24px; } }
        .ga-agency-title { font-family: var(--font-display); font-size: clamp(1.5rem, 3.5vw, 2rem); color: #fff; font-style: italic; margin: 0 0 14px; }
        .ga-agency-desc { font-size: 0.93rem; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 480px; margin: 0 auto 36px; }
        .ga-stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 36px; flex-wrap: wrap; }
        .ga-stat { text-align: center; }
        .ga-stat-num { display: block; font-family: var(--font-display); font-size: 2.2rem; color: #a9875c; font-style: italic; line-height: 1; }
        .ga-stat-label { display: block; font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 5px; letter-spacing: 0.05em; }
      `}</style>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var els = document.querySelectorAll('.cs-fade-in');
          var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
              if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
          els.forEach(function(el) { io.observe(el); });
        })();
      `}} />
    </div>
  );
}
