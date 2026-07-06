'use client';
import { useEffect, useRef } from 'react';
import { siteData } from '@/data/content';

export default function Hero() {
  const { hero } = siteData;
  const statsRef = useRef([]);

  useEffect(() => {
    const CYCLE = ['10K','20K','50K','100K','250K','500K','1M','1.5M','2M','2.5M','3M'];

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
      const suffix = /[^0-9]$/.test(raw) ? raw.slice(-1) : '';
      const target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      const dur = 2500;
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
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
      }, { threshold: 0.5 });
      statsRef.current.forEach((el) => { if (el) obs.observe(el); });
    }

    // scroll progress bar
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
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/hero-bg.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-glass">
          <p className="hero-locations">NEW YORK &nbsp;—&nbsp; MILANO &nbsp;—&nbsp; BEOGRAD</p>
          <h1 className="hero-headline">
            {hero.headline.split('\n').map((line, i) => (
              <span key={i} className={`headline-line${i === 2 ? ' headline-line--pink' : ''}`}>{line}</span>
            ))}
          </h1>
          <p className="hero-sub">{hero.subtext}</p>
          <div className="hero-cta-wrap">
            <a href={hero.cta.href} className="btn-primary btn-large">
              {hero.cta.label} <span className="btn-arrow">→</span>
            </a>
            <p className="hero-microcopy">
              <span className="pulse-dot" aria-hidden="true" />
              {hero.microcopy}
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
}
