'use client';
import { useState } from 'react';
import { siteData } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { nav } = siteData;

  return (
    <header id="site-header">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">{nav.logo}</a>
        </div>
        <nav className="nav-links">
          <ul className="nav-menu">
            {nav.links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a href={nav.cta.href} className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
            {nav.cta.label} <span className="btn-arrow">→</span>
          </a>
        </div>
        <button
          id="mobile-menu-btn"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? '' : ' hidden'}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav-menu">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <a href={nav.cta.href} className="btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
            {nav.cta.label} <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
