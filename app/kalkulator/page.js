'use client';
import Link from 'next/link';
import Kalkulator from '@/components/Kalkulator';

export default function KalkulatorPage() {
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
        <div style={{ textAlign: 'center', padding: '56px 24px 0' }}>
          <Link href="/resursi" style={{ display: 'inline-block', fontSize: 13, color: '#aaa', textDecoration: 'none', marginBottom: 20 }}>← Svi resursi</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 16 }}>ALAT · BESPLATNO</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontStyle: 'italic', color: '#1a1a1a', lineHeight: 1.1, margin: '0 0 16px' }}>
            Kalkulator Zarade
          </h1>
          <p style={{ fontSize: '1rem', color: '#777', maxWidth: 480, margin: '0 auto 0', lineHeight: 1.7 }}>
            Unesi svoju nišu, broj pratilaca i frekvenciju objavljivanja da vidiš procenjeni potencijal prihoda.
          </p>
        </div>

        <Kalkulator />

        <div style={{ textAlign: 'center', background: '#1a1a1a', borderRadius: 24, padding: '52px 32px', maxWidth: 700, margin: '0 auto 0', marginTop: 0 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', margin: '0 0 12px' }}>Spreman/a da ostvariš taj potencijal?</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', lineHeight: 1.7 }}>Prijavi se i vidi da li si kvalifikovana za Velluto Nero.</p>
          <Link href="/#apply" className="btn-primary btn-large">
            Prijavi se na listu čekanja <span className="btn-arrow">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
