'use client';
import { useEffect, useRef, useState } from 'react';

export default function ONama() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="on-section" ref={ref}>
      <div className="on-inner">
        {/* Left — video */}
        <div
          className="on-media"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-32px)', transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s' }}
        >
          <video
            className="on-video"
            autoPlay
            muted
            loop
            playsInline
            src="/o-nama.mp4"
          />
        </div>

        {/* Right — text */}
        <div
          className="on-body"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(32px)', transition: 'opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s' }}
        >
          <span className="on-label">O NAMA</span>
          <h2 className="on-title">Porodična Priča.<br /><span style={{ color: '#e8538f' }}>Globalni Domen.</span></h2>
          <p className="on-text">
            Naša agencija je porodični biznis, a jedan od osnivača je žena — agencija sa 8-cifrenim godišnjim prihodom kreatora, 5+ godina iskustva i poslovanjem u 12 zemalja. Imamo sopstveni CRM sistem i tim od 230+ zaposlenih.
          </p>
          <p className="on-text">
            Jedina smo agencija u regionu sa sedištima u Milanu i Njujorku, dok naš srpski tim deluje iz kancelarije u Beogradu. Ova kombinacija nam omogućava da spojimo regionalnu blizinu sa direktnim pristupom najzahtevnijim svetskim tržištima.
          </p>
          <p className="on-text">
            Sa nama, klijenti ne dobijaju samo agenciju — dobijaju pouzdanog partnera vođenog ličnim pristupom i globalnim iskustvom.
          </p>
        </div>
      </div>

      <style>{`
        .on-section {
          padding: 80px 0;
          background: var(--color-dark-1, #f8f7f5);
        }
        .on-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .on-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .on-body {
            text-align: center;
          }
          .on-label {
            justify-content: center;
          }
        }

        .on-media {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 48px rgba(0,0,0,0.12);
          aspect-ratio: 1/1;
        }
        @media (max-width: 860px) {
          .on-media {
            max-width: 440px;
            margin: 0 auto;
          }
        }
        .on-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .on-label {
          display: inline-flex;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #e8538f;
          background: #fdf0f6;
          border: 1px solid #f8d0e8;
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 18px;
        }
        .on-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-style: italic;
          line-height: 1.15;
          color: #1a1a1a;
          margin: 0 0 24px;
        }
        .on-text {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
          margin: 0 0 18px;
          max-width: 520px;
        }
        @media (max-width: 860px) {
          .on-text { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
