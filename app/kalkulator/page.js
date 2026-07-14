'use client';
import Link from 'next/link';
import Kalkulator from '@/components/Kalkulator';
import { siteData } from '@/data/content';

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

      <main style={{ background: '#fff', minHeight: '100vh' }}>
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

        <Kalkulator light />

        <section style={{ background: '#111111', padding: '96px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', margin: '0 0 12px' }}>Spreman/a Da Ostvariš Taj Potencijal?</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', lineHeight: 1.7 }}>Prijavi se i vidi da li si kvalifikovana za Velluto Nero.</p>
          <Link href="/#apply" className="btn-primary btn-large">
            Prijavi se na listu čekanja <span className="btn-arrow">→</span>
          </Link>
        </section>
      </main>

      <footer id="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">{siteData.nav.logo}</div>
              <p className="footer-tagline">{siteData.footer.tagline}</p>
            </div>
            <a href={siteData.footer.cta.href} className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>
              {siteData.footer.cta.label} <span>→</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">{siteData.footer.copy}</p>
            <div className="footer-legal">
              {siteData.footer.legal.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
