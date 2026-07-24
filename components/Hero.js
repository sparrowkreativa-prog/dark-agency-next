'use client';
import { useEffect, useRef, useState } from 'react';
import { siteData } from '@/data/content';

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function HeroVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <div
      className="hv-wrap"
      onClick={() => setShowBtn(true)}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        onContextMenu={e => e.preventDefault()}
        className="hero-between-video"
      >
        <source src="/ITALO-cica.mp4" type="video/mp4" />
      </video>

      <button
        className={`hv-mute-btn${showBtn ? ' hv-mute-btn--visible' : ''}`}
        onClick={e => { e.stopPropagation(); toggleMute(); }}
        aria-label={muted ? 'Uključi zvuk' : 'Isključi zvuk'}
      >
        {muted ? (
          /* muted icon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          /* unmuted icon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        )}
        <span>{muted ? 'Uključi zvuk' : 'Isključi zvuk'}</span>
      </button>
    </div>
  );
}

function Row2Stat({ end, label, delay, trigger }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const startTime = performance.now();
      const tick = (now) => {
        const p = Math.min((now - startTime) / duration, 1);
        setVal(Math.round(easeOutCubic(p) * end));
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
        else setVal(end);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timer); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger]); // eslint-disable-line

  return (
    <div className="stat-item">
      <p className="stat-number">{val}+</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function Hero() {
  const { hero } = siteData;
  const statsRef = useRef([]);
  const statsBoxRef = useRef(null);
  const [row2Trigger, setRow2Trigger] = useState(false);

  useEffect(() => {
    /* ── cycle for $11M+ ── */
    const CYCLE = ['1M','2M','3M','4M','5M','6M','7M','8M','9M','10M','11M'];

    function animateStat1(el) {
      const raw = el.dataset.raw;
      const prefix = raw.startsWith('$') ? '$' : '';
      const suffix = raw.endsWith('+') ? '+' : '';
      const final = raw.replace(/^\$/, '').replace(/\+$/, '');
      el.innerHTML =
        `<span class="stat-slide-wrap"><span class="stat-slide-char" id="p${el.dataset.idx}">${prefix}</span></span>` +
        `<span class="stat-cycle-num">${CYCLE[0]}</span>` +
        `<span class="stat-slide-wrap"><span class="stat-slide-char" id="s${el.dataset.idx}" style="opacity:0">${suffix}</span></span>`;
      const numEl = el.querySelector('.stat-cycle-num');
      const prefEl = el.querySelector(`#p${el.dataset.idx}`);
      const sufEl  = el.querySelector(`#s${el.dataset.idx}`);
      setTimeout(() => prefEl.classList.add('stat-slide-in'), 50);
      const stepDur = Math.floor(2300 / CYCLE.length);
      CYCLE.forEach((v, i) => setTimeout(() => { numEl.textContent = v; }, 300 + i * stepDur));
      setTimeout(() => { numEl.textContent = final; }, 2650);
      setTimeout(() => { sufEl.style.opacity = '1'; sufEl.classList.add('stat-slide-in'); }, 2700);
    }

    function animateStat2(el) {
      const raw = el.dataset.raw;
      const suffix = raw.endsWith('+') ? '+' : '';
      const target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      const dur = 2000;
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = easeOutCubic(p);
        el.textContent = Math.round(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    function animateStat3(el) {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.8s ease 0.2s';
      requestAnimationFrame(() => { el.style.opacity = '1'; });
    }

    const handlers = { '1': animateStat1, '2': animateStat2, '3': animateStat3 };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            obs.unobserve(e.target);
            const fn = handlers[e.target.dataset.statIdx];
            if (fn) fn(e.target);
          }
        });
      }, { threshold: 0.3 });
      statsRef.current.forEach((el) => { if (el) obs.observe(el); });
    }

    /* ── row2 trigger ── */
    if (statsBoxRef.current && 'IntersectionObserver' in window) {
      const obs2 = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { setRow2Trigger(true); obs2.disconnect(); }
      }, { threshold: 0.3 });
      obs2.observe(statsBoxRef.current);
    }

    /* ── scroll progress ── */
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.prepend(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); bar.remove(); };
  }, []);

  return (
    <section className="hero-section has-video">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true" poster="/hero-bg.jpg">
        <source src="/VN_hero_vid_5.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-inner">
        {/* OF icon */}
        <img src="/of-icon.png" alt="" style={{ width: 150, height: 150, objectFit: 'contain', marginBottom: 16 }} />

        {/* Locations - outside glass */}
        <p className="hero-locations">NEW YORK &nbsp;-&nbsp; MILANO &nbsp;-&nbsp; BEOGRAD</p>

        {/* Headline - outside glass */}
        <h1 className="hero-headline">
          {hero.headline.split('\n').map((line, i) => (
            <span key={i} className={`headline-line${i === 2 ? ' headline-line--pink' : ''}`}>{line}</span>
          ))}
        </h1>

        {/* Glass 1 — garancija */}
        <div className="hero-glass hero-glass-block">
          <p className="hero-p1-text">Jedina smo agencija na svetu koja daje 30-dnevnu garanciju da će tvoj trenutni prihod, ukoliko već posluješ na Balkanu, porasti minimum 3 puta na tržištima na kojima naša agencija posluje, u prvih 30 dana. Ukoliko to ne ispunimo, isplaćujemo ti razliku kao da jesmo.</p>
        </div>

        {/* Glass 2 — cilj */}
        <div className="hero-glass hero-glass-block">
          <p className="hero-p2-accent">CILJ $70K + u prvom mesecu</p>
        </div>

        {/* Glass 3 — uslovi + CTA */}
        <div className="hero-glass hero-glass-block">
          <p className="hero-p3-text">Tvoj nalog, tvoja šifra, tvoj račun — nula troškova unapred, procenat uzimamo tek kad ti zaradiš.</p>
          <p className="hero-p3-text">Potpuna zaštita identiteta i privatnih podataka.</p>
          <p className="hero-p3-text">Ne diramo tvoju trenutnu zaradu, zadržavaš većinu, otkaži kad želiš.</p>
          <p className="hero-p2-accent" style={{ marginTop: 8 }}>14 dana da stranica krene od nule.</p>

          <div className="hero-cta-wrap">
            <a href={hero.cta.href} className="btn-primary btn-large">
              {hero.cta.label} <span className="btn-arrow">→</span>
            </a>
            <p className="hero-waitlist-note">PRIMAMO SAMO 2 KLIJENTA MESEČNO</p>
            <p className="hero-microcopy">
              <span className="hm-first">
                <span className="pulse-dot" aria-hidden="true" />
                60-sekundi prijava
              </span>
              <span className="hm-rest">&nbsp;·&nbsp;manje od 2% primljenih&nbsp;·&nbsp;nula troškova unapred</span>
            </p>
            <div className="hero-secondary-btns">
              <a href="https://www.vellutonero.international/rezultati" className="hero-btn-dark">POGLEDAJ NAŠE REZULTATE</a>
              <a href="https://www.vellutonero.international/resursi" className="hero-btn-gold">POGLEDAJ ŠTA ZNAMO</a>
            </div>
          </div>
        </div>

        {/* Video between glass and stats */}
        <HeroVideo />

        {/* Slogan - between boxes */}
        <p className="hero-slogan">DO IT FOR YOUR FAMILY!</p>

        {/* Stats - separate box */}
        <div className="hero-stats-box" ref={statsBoxRef}>
          {/* Row 1 */}
          <div className="hero-stats">
            {hero.stats.map((s, i) => (
              <div key={s.label} className={`stat-item${i === 1 ? ' stat-item--bordered' : ''}`}>
                <p
                  className={`stat-number${s.accent ? ' stat-number--accent' : ''}`}
                  data-stat-idx={s.idx}
                  data-raw={s.num}
                  data-idx={s.idx}
                  ref={(el) => { statsRef.current[i] = el; }}
                >
                  {s.num}
                </p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hero-stats-divider" />

          {/* Row 2 */}
          <div className="hero-stats">
            {hero.statsRow2.map((s, i) => (
              <div key={s.label} className={`stat-item${i === 1 ? ' stat-item--bordered' : ''}`}>
                <Row2Stat end={s.end} label={s.label} delay={i * 150} trigger={row2Trigger} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .hero-slogan {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          margin: 16px 0;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-slogan::before,
        .hero-slogan::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.15);
        }
        .hv-wrap {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
        }
        .hero-between-video {
          width: 100%;
          border-radius: 18px;
          display: block;
          object-fit: cover;
          max-height: 480px;
          background: #000;
        }
        .hv-mute-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          padding: 7px 14px 7px 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }
        .hv-mute-btn--visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Separate liquid glass blocks */
        .hero-glass-block {
          margin-bottom: 12px;
          padding: 24px 32px;
        }
        @media (max-width: 640px) {
          .hero-glass-block { padding: 18px 20px; }
        }
        .hero-p1-text {
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.8;
          margin: 0;
          text-align: center;
        }
        .hero-p2-accent {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-style: italic;
          font-size: 26px;
          color: #911f39;
          margin: 0;
          line-height: 1.2;
          text-align: center;
        }
        .hero-p3-text {
          font-size: 15px;
          color: #1a1a1a;
          line-height: 1.75;
          margin: 0 0 10px;
          text-align: center;
        }
        @media (max-width: 640px) {
          .hero-p1-text { font-size: 14px; }
          .hero-p2-accent { font-size: 22px; }
          .hero-p3-text { font-size: 13px; }
        }
        .hero-locations {
          margin-bottom: 20px;
        }
        .hero-waitlist-note {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #911f39;
          text-transform: uppercase;
          text-align: center;
          margin: 12px 0 6px;
        }
        .hero-headline {
          margin-bottom: 24px;
        }
        .hero-glass {
          width: 100%;
          margin-bottom: 20px;
          padding: 32px 48px 28px;
        }
        @media (max-width: 640px) {
          .hero-glass { padding: 24px 20px 20px; }
        }
        .hero-cta-wrap {
          margin-bottom: 0;
        }
        .hero-secondary-btns {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
        }
        .hero-btn-dark, .hero-btn-gold {
          display: inline-block;
          width: fit-content;
          min-width: 260px;
          text-align: center;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 13px 28px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        @media (max-width: 480px) {
          .hero-btn-dark, .hero-btn-gold { width: 100%; min-width: 0; }
        }
        .hero-btn-dark {
          background: #1a1a1a;
          color: #fff;
        }
        .hero-btn-gold {
          background: #a9875c;
          color: #fff;
        }
        .hero-btn-dark:hover, .hero-btn-gold:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* Microcopy mobile split */
        .hero-microcopy {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0;
        }
        .hm-first {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }
        .hm-rest {
          white-space: nowrap;
        }
        @media (max-width: 600px) {
          .hero-microcopy {
            flex-direction: column;
            gap: 4px;
          }
          .hm-rest {
            white-space: normal;
            text-align: center;
          }
        }

        /* Stats box - identical liquid glass to hero-glass */
        .hero-stats-box {
          width: 100%;
          background: rgba(250,250,248,0.62);
          border: 1px solid rgba(255,255,255,0.65);
          border-radius: 24px;
          padding: 20px 24px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          max-width: 100%;
          margin: 0;
        }
        .hero-stats-divider {
          height: 1px;
          background: rgba(0,0,0,0.08);
          margin: 14px 0;
        }
        .stat-item--bordered {
          border-left: 1px solid var(--color-border);
          border-right: 1px solid var(--color-border);
        }
        .stat-item {
          text-align: center;
          padding: 8px 12px;
        }
      `}</style>
    </section>
  );
}
