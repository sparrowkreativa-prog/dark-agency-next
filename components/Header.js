'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { siteData } from '@/data/content';

const LANGS = [
  { code: 'sr', emoji: '🇷🇸', label: 'Srpski' },
  { code: 'en', emoji: '🇬🇧', label: 'English' },
  { code: 'it', emoji: '🇮🇹', label: 'Italiano' },
];

const NAV = {
  sr: [
    { label: 'Rezultati', href: (l) => `/${l}/rezultati` },
    { label: 'Usluge',    href: (l) => `/${l}/site#services` },
    { label: 'Resursi',   href: (l) => `/${l}/resursi` },
    { label: 'FAQ',       href: (l) => `/${l}/site#faq` },
  ],
  en: [
    { label: 'Results',   href: (l) => `/${l}/rezultati` },
    { label: 'Services',  href: (l) => `/${l}/site#services` },
    { label: 'Resources', href: (l) => `/${l}/resursi` },
    { label: 'FAQ',       href: (l) => `/${l}/site#faq` },
  ],
  it: [
    { label: 'Risultati', href: (l) => `/${l}/rezultati` },
    { label: 'Servizi',   href: (l) => `/${l}/site#services` },
    { label: 'Risorse',   href: (l) => `/${l}/resursi` },
    { label: 'FAQ',       href: (l) => `/${l}/site#faq` },
  ],
};

const CTA = {
  sr: 'Prijavi se',
  en: 'Apply now',
  it: 'Candidati',
};

function LangSwitcher({ currentLang }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef(null);

  const active = LANGS.find(l => l.code === currentLang) || LANGS[0];

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function switchLang(code) {
    setOpen(false);
    const segments = pathname.split('/');
    const langIdx = segments.findIndex(s => ['sr', 'en', 'it'].includes(s));
    if (langIdx !== -1) {
      segments[langIdx] = code;
      router.push(segments.join('/'));
    } else {
      router.push(`/${code}/site`);
    }
  }

  return (
    <div className="ls-wrap" ref={ref}>
      <button className="ls-trigger" onClick={() => setOpen(!open)} aria-label="Jezik">
        <span className="ls-flag-circle">{active.emoji}</span>
        <svg className={`ls-chevron${open ? ' ls-chevron--open' : ''}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div className="ls-dropdown">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`ls-option${l.code === currentLang ? ' ls-option--active' : ''}`}
              onClick={() => switchLang(l.code)}
            >
              <span className="ls-flag-circle">{l.emoji}</span>
              <span className="ls-label">{l.label}</span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        .ls-wrap { position: relative; display: flex; align-items: center; }
        .ls-trigger {
          display: flex; align-items: center; gap: 4px;
          background: none; border: none; cursor: pointer;
          padding: 4px 6px; border-radius: 8px;
          transition: background 0.15s ease;
        }
        .ls-trigger:hover { background: rgba(169,135,92,0.1); }
        .ls-flag-circle {
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; line-height: 1; overflow: hidden; flex-shrink: 0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.18);
        }
        .ls-chevron { color: #999; transition: transform 0.2s ease; flex-shrink: 0; }
        .ls-chevron--open { transform: rotate(180deg); }
        .ls-dropdown {
          position: absolute; top: calc(100% + 8px); right: 0;
          background: #fff; border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px; box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          padding: 6px; display: flex; flex-direction: column; gap: 2px;
          min-width: 140px; z-index: 200;
          animation: ls-in 0.15s ease;
        }
        @keyframes ls-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ls-option {
          display: flex; align-items: center; gap: 10px;
          background: none; border: none; cursor: pointer;
          padding: 8px 10px; border-radius: 9px;
          transition: background 0.15s ease; text-align: left; width: 100%;
        }
        .ls-option:hover { background: rgba(169,135,92,0.08); }
        .ls-option--active { background: rgba(169,135,92,0.12); }
        .ls-label { font-size: 13px; font-weight: 500; color: #1a1a1a; }
        .ls-option--active .ls-label { color: #a9875c; font-weight: 600; }
      `}</style>
    </div>
  );
}

export default function Header({ lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const segments = pathname.split('/');
  const urlLang = segments.find(s => ['sr', 'en', 'it'].includes(s));
  const currentLang = lang || urlLang || 'sr';

  const links = NAV[currentLang] || NAV.sr;
  const ctaLabel = CTA[currentLang] || CTA.sr;
  const { nav } = siteData;

  return (
    <header id="site-header">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">{nav.logo}</a>
        </div>

        <nav className="nav-links">
          <ul className="nav-menu">
            {links.map((l) => (
              <li key={l.label}><a href={l.href(currentLang)}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* Desktop: lang + CTA */}
        <div className="nav-cta">
          <LangSwitcher currentLang={currentLang} />
          <a href={`/${currentLang}/site#apply`} className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
            {ctaLabel} <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* Mobile: lang switcher always visible, then hamburger */}
        <div className="nav-mobile-right">
          <LangSwitcher currentLang={currentLang} />
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
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? '' : ' hidden'}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav-menu">
            {links.map((l) => (
              <a key={l.label} href={l.href(currentLang)} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <a href={`/${currentLang}/site#apply`} className="btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
            {ctaLabel} <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .nav-mobile-right {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-left: auto;
        }
        @media (min-width: 768px) {
          .nav-mobile-right { display: none; }
        }
        .nav-cta {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-cta {
            display: flex !important;
            align-items: center;
            gap: 12px;
          }
        }
        #mobile-menu-btn {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
