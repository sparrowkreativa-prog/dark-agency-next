'use client';
import { useState, useEffect } from 'react';

const CONTENT = {
  sr: {
    heading: ['Porodični biznis.', 'Vode ga žene.'],
    body: 'NAŠA AGENCIJA JE PORODIČNI BIZNIS,\nA JEDAN OD OSNIVAČA JE ŽENA. AGENCIJA SA 8-CIFRENIM GODIŠNJIM PRIHODOM KREATORA, 5+ GODINA ISKUSTVA I POSLOVANJEM U 12 ZEMALJA. IMAMO SOPSTVENI CRM SISTEM I TIM OD 230+ ZAPOSLENIH.',
    cities: 'BEOGRAD, MILANO, NJUJORK',
    btn: 'POGLEDAJ',
    href: '/site',
  },
  en: {
    heading: ['Family business.', 'Led by women.'],
    body: 'OUR AGENCY IS A FAMILY BUSINESS,\nAND ONE OF THE FOUNDERS IS A WOMAN. AN AGENCY WITH 8-FIGURE ANNUAL CREATOR REVENUE, 5+ YEARS OF EXPERIENCE AND OPERATIONS IN 12 COUNTRIES. WE HAVE OUR OWN CRM SYSTEM AND A TEAM OF 230+ EMPLOYEES.',
    cities: 'BELGRADE, MILAN, NEW YORK',
    btn: 'EXPLORE',
    href: '/site',
  },
  it: {
    heading: ["Un'impresa di famiglia.", 'Guidata da donne.'],
    body: "LA NOSTRA AGENZIA È UN'IMPRESA DI FAMIGLIA,\nE UNO DEI FONDATORI È UNA DONNA. UN'AGENZIA CON RICAVI ANNUALI A 8 CIFRE PER I CREATOR, 5+ ANNI DI ESPERIENZA E ATTIVITÀ IN 12 PAESI. ABBIAMO IL NOSTRO CRM E UN TEAM DI 230+ DIPENDENTI.",
    cities: 'BELGRADO, MILANO, NEW YORK',
    btn: 'SCOPRI',
    href: '/site',
  },
};

const FLAGS = [
  { code: 'sr', emoji: '🇷🇸', label: 'Srpski' },
  { code: 'en', emoji: '🇬🇧', label: 'English' },
  { code: 'it', emoji: '🇮🇹', label: 'Italiano' },
];

function detectLang() {
  if (typeof navigator === 'undefined') return 'sr';
  const l = (navigator.language || '').toLowerCase();
  if (l.startsWith('it')) return 'it';
  if (l.startsWith('en')) return 'en';
  return 'sr';
}

export default function HomePage() {
  const [lang, setLang] = useState('sr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(detectLang());
    setMounted(true);
  }, []);

  const c = CONTENT[lang];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      />

      <main className="rl-root">
        {/* Background images */}
        <img src="/redirect-desk.jpg"   alt="" className="rl-bg rl-bg--desk"   draggable={false} />
        <img src="/redirect-mobile.jpg" alt="" className="rl-bg rl-bg--mobile" draggable={false} />

        {/* Overlay content */}
        <div className={`rl-content${mounted ? ' rl-content--visible' : ''}`}>

          {/* Heading */}
          <h1 className="rl-heading">
            {c.heading[0]}<br />{c.heading[1]}
          </h1>

          {/* Button */}
          <a href={c.href} className="rl-btn">
            {c.btn} <span className="rl-arrow">→</span>
          </a>

          {/* Body text */}
          <p className="rl-body">
            {c.body.split('\n').map((line, i) => (
              <span key={i}>{line}{i < c.body.split('\n').length - 1 && <br />}</span>
            ))}
          </p>

          {/* Cities */}
          <p className="rl-cities">{c.cities}</p>

          {/* Language flags */}
          <div className="rl-flags">
            {FLAGS.map(f => (
              <button
                key={f.code}
                className={`rl-flag${lang === f.code ? ' rl-flag--active' : ''}`}
                onClick={() => setLang(f.code)}
                aria-label={f.label}
                title={f.label}
              >
                {f.emoji}
              </button>
            ))}
          </div>

        </div>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow: hidden; }

        .rl-root {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Background */
        .rl-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          pointer-events: none;
          user-select: none;
        }
        .rl-bg--desk   { display: block; }
        .rl-bg--mobile { display: none; }
        @media (max-width: 640px) {
          .rl-bg--desk   { display: none; }
          .rl-bg--mobile { display: block; }
        }

        /* Content overlay */
        .rl-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 32px;
          gap: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .rl-content--visible { opacity: 1; }

        /* Heading */
        .rl-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(2rem, 5vw, 3.8rem);
          color: #1a1a1a;
          text-align: center;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        /* Button */
        .rl-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #a9875c;
          color: #fff;
          font-family: 'Montserrat', Arial, sans-serif;
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 17px 52px;
          border-radius: 999px;
          white-space: nowrap;
          animation: rl-pulse 2.2s ease-in-out infinite;
          transition: background 0.2s ease;
        }
        .rl-btn:hover { background: #c4a070; }
        .rl-arrow { font-size: 17px; line-height: 1; }

        @keyframes rl-pulse {
          0%   { box-shadow: 0 0 0 0    rgba(169,135,92,0.7), 0 4px 24px rgba(169,135,92,0.4); }
          50%  { box-shadow: 0 0 0 16px rgba(169,135,92,0),   0 4px 32px rgba(169,135,92,0.6); }
          100% { box-shadow: 0 0 0 0    rgba(169,135,92,0),   0 4px 24px rgba(169,135,92,0.4); }
        }

        /* Body text */
        .rl-body {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 300;
          font-size: clamp(10px, 1.1vw, 13px);
          color: #1a1a1a;
          text-align: center;
          line-height: 1.9;
          letter-spacing: 0.08em;
          max-width: 560px;
        }

        /* Cities */
        .rl-cities {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 300;
          font-size: clamp(10px, 1vw, 12px);
          color: #911f39;
          text-align: center;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* Language flags */
        .rl-flags {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .rl-flag {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
          padding: 4px;
          border-radius: 6px;
          opacity: 0.45;
          transition: opacity 0.2s ease, transform 0.15s ease;
        }
        .rl-flag:hover  { opacity: 0.8; transform: scale(1.1); }
        .rl-flag--active { opacity: 1; transform: scale(1.15); }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .rl-content { gap: 16px; padding: 20px; justify-content: flex-end; padding-bottom: 48px; }
          .rl-heading { font-size: clamp(1.7rem, 8vw, 2.4rem); }
          .rl-btn { font-size: 12px; padding: 15px 40px; }
          .rl-body { font-size: 10px; }
          .rl-cities { font-size: 10px; }
        }
      `}</style>
    </>
  );
}
