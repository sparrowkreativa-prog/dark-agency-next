'use client';
import Link from 'next/link';
import { useState } from 'react';

const STEPS = [
  { icon: '📝', title: 'Pošalji Podatke', desc: 'Ostavi svoj Instagram i broj telefona — koristimo ih da verifikujemo da si aktivna kreatorka.' },
  { icon: '🔍', title: 'Mi Skeniramo', desc: 'Pretražujemo web za tvoj procureli sadržaj na tube sajtovima, forumima i file hostovima.' },
  { icon: '⚖️', title: 'Mi Podnosimo Takedown', desc: 'DMCA obaveštenja se šalju svakoj platformi koja hostuje tvoj sadržaj — profesionalno i legalno.' },
  { icon: '✅', title: 'Sadržaj Je Uklonjen', desc: 'Procureli sadržaj je uklonjen. Pratimo dok sve ne bude gotovo.' },
];

export default function Dmca() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ instagram: '', phone: '' });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

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

      <main style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: 96 }}>
        <div style={{ background: '#1a1a1a', padding: '64px 24px 56px', textAlign: 'center' }}>
          <Link href="/resursi" style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 24 }}>← Svi resursi</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 20 }}>ALAT · BESPLATNO · OGRANIČENO</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            Pronašla si procureli sadržaj?<br />
            <span style={{ color: '#a9875c' }}>Uklonićemo ga — besplatno.</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Bez ugovora, bez troškova. Podnosi DMCA zahteve profesionalno i legalno. Pratimo dok svaki komad sadržaja ne bude uklonjen.
          </p>
        </div>

        <div className="container" style={{ paddingTop: 56 }}>
          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 56 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.1rem', color: '#1a1a1a', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', border: '1px solid rgba(169,135,92,0.2)', borderRadius: 24, padding: '48px 36px', textAlign: 'center' }}>
            {submitted ? (
              <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 12px' }}>Zahtev Primljen</h2>
                <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.7 }}>Kontaktiraćemo te putem WhatsApp ili Telegram u roku od 24 sata.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 8px' }}>Zatraži Besplatni Takedown</h2>
                <p style={{ fontSize: '0.875rem', color: '#aaa', margin: '0 0 28px', lineHeight: 1.6 }}>Pregledamo tvoj Instagram da verifikujemo da si aktivna kreatorka pre nego što počnemo.</p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <input
                    required
                    type="text"
                    placeholder="Instagram korisničko ime"
                    value={form.instagram}
                    onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))}
                    style={{ padding: '14px 16px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.12)', fontSize: '0.95rem', outline: 'none' }}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Broj telefona (WhatsApp)"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    style={{ padding: '14px 16px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.12)', fontSize: '0.95rem', outline: 'none' }}
                  />
                  <button type="submit" className="btn-primary btn-large" style={{ justifyContent: 'center', marginTop: 6 }}>
                    Zatraži Besplatni Takedown <span className="btn-arrow">→</span>
                  </button>
                </form>
                <p style={{ fontSize: 11, color: '#bbb', marginTop: 16, lineHeight: 1.6 }}>100% besplatno za kvalifikovane kreatorke. Kontaktiraćemo te putem WhatsApp ili Telegram u roku od 24 sata.</p>
              </>
            )}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 64, textAlign: 'center', background: '#1a1a1a', borderRadius: 24, padding: '52px 32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', margin: '0 0 12px' }}>Želiš da upravljamo svime za tebe?</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>DMCA takedowni, strategija sadržaja, čatovanje, promocija — mi se bavimo svime dok ti se fokusiraš na kreiranje.</p>
            <Link href="/#apply" className="btn-primary btn-large">
              Prijavi se <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
