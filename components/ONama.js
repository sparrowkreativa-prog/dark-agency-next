'use client';
import { useEffect, useRef, useState } from 'react';

export default function ONama() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVisible(true); io.disconnect(); }
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <section className="on-section" ref={ref}>
      <div className="on-top-label">
        <span className="chapter-label">O NAMA</span>
      </div>

      <div className="on-inner"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s' }}
      >
        <h2 className="on-title">Porodična Priča.<br /><span style={{ color: '#a9875c' }}>Globalni Domen.</span></h2>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="on-family-img"
          style={{ background: '#000' }}
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
        <p className="on-text">
          Naša agencija je porodični biznis, a jedan od osnivača je žena - agencija sa 8-cifrenim godišnjim prihodom kreatora, 5+ godina iskustva i poslovanjem u 12 zemalja. Imamo sopstveni CRM sistem i tim od 230+ zaposlenih.
        </p>
        <p className="on-text">
          Jedina smo agencija u regionu sa sedištima u Milanu i Njujorku, dok naš srpski tim deluje iz kancelarije u Beogradu. Ova kombinacija nam omogućava da spojimo regionalnu blizinu sa direktnim pristupom najzahtevnijim svetskim tržištima.
        </p>
        <p className="on-text">
          Sa nama, klijenti ne dobijaju samo agenciju - dobijaju pouzdanog partnera vođenog ličnim pristupom i globalnim iskustvom.
        </p>
        <img src="/porodica-2.jpeg" alt="" className="on-family-img" />
      </div>

      <style>{`
        .on-section {
          padding: 80px 0;
          background: #fafaf8;
        }
        .on-top-label {
          text-align: center;
          padding-bottom: 8px;
        }
        .on-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }
        .on-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-style: italic;
          line-height: 1.15;
          color: #1a1a1a;
          margin: 0 0 24px;
        }
        .on-family-img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
          margin: 0 0 28px;
          max-height: 480px;
        }
        .on-text {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
          margin: 0 auto 18px;
          max-width: 600px;
        }
      `}</style>
    </section>
  );
}
