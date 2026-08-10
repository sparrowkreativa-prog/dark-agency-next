'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    label: 'O NAMA',
    title1: 'Porodična Priča.',
    title2: 'Globalni Domen.',
    p1: (
      <>
        Naša agencija je porodični biznis, a jedan od osnivača je žena - agencija sa <em className="on-em">8-cifrenim godišnjim prihodom</em> kreatora, <em className="on-em">5+ godina iskustva</em> i poslovanjem u <em className="on-em">12 zemalja</em>. Imamo sopstveni CRM sistem i tim od <em className="on-em">230+ zaposlenih</em>.
      </>
    ),
    p2: 'Jedina smo agencija u regionu sa sedištima u Milanu i Njujorku, dok naš srpski tim deluje iz kancelarije u Beogradu. Ova kombinacija nam omogućava da spojimo regionalnu blizinu sa direktnim pristupom najzahtevnijim svetskim tržištima.',
    p3: 'Sa nama, klijenti ne dobijaju samo agenciju - dobijaju pouzdanog partnera vođenog ličnim pristupom i globalnim iskustvom.',
  },
  en: {
    label: 'ABOUT US',
    title1: 'A Family Story.',
    title2: 'Global Reach.',
    p1: (
      <>
        Our agency is a family business, with a woman among the founders — an agency with <em className="on-em">8-figure annual creator revenue</em>, <em className="on-em">5+ years of experience</em> and operations in <em className="on-em">12 countries</em>. We have our own CRM system and a team of <em className="on-em">230+ employees</em>.
      </>
    ),
    p2: 'We are the only agency in the region with offices in Milan and New York, while our Serbian team operates from an office in Belgrade. This combination allows us to merge regional proximity with direct access to the most demanding global markets.',
    p3: 'With us, clients don\'t just get an agency — they get a reliable partner driven by a personal approach and global experience.',
  },
  it: {
    label: 'CHI SIAMO',
    title1: 'Una Storia di Famiglia.',
    title2: 'Portata Globale.',
    p1: (
      <>
        La nostra agenzia è un'impresa familiare, con una donna tra i fondatori — un'agenzia con <em className="on-em">ricavi annui a 8 cifre</em> per i creator, <em className="on-em">5+ anni di esperienza</em> e operazioni in <em className="on-em">12 paesi</em>. Abbiamo il nostro sistema CRM e un team di <em className="on-em">230+ dipendenti</em>.
      </>
    ),
    p2: 'Siamo l\'unica agenzia della regione con sedi a Milano e New York, mentre il nostro team serbo opera da un ufficio a Belgrado. Questa combinazione ci permette di unire la vicinanza regionale con l\'accesso diretto ai mercati globali più esigenti.',
    p3: 'Con noi, i clienti non ottengono solo un\'agenzia — ottengono un partner affidabile guidato da un approccio personale ed esperienza globale.',
  },
};

export default function ONama() {
  const lang = useLang();
  const t = T[lang] || T.sr;

  const ref = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const timer = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVisible(true); io.disconnect(); }
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(timer); io?.disconnect(); };
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        vid.muted = true;
        vid.play().catch(() => {});
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(vid);
    return () => io.disconnect();
  }, []);

  return (
    <section className="on-section" ref={ref}>
      <div className="on-top-label">
        <span className="chapter-label">{t.label}</span>
      </div>

      <div className="on-inner"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(24px)', transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s' }}
      >
        <h2 className="on-title">{t.title1}<br /><span style={{ color: '#a9875c' }}>{t.title2}</span></h2>
        <video
          ref={videoRef}
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
        <p className="on-text">{t.p1}</p>
        <p className="on-text on-text--em">{t.p2}</p>
        <p className="on-text">{t.p3}</p>
        <img src="/porodica-2.jpeg" alt="" className="on-family-img" />
      </div>

      <style>{`
        .on-section {
          padding: 80px 0;
          background: #fafaf8;
        }
        @media (max-width: 640px) { .on-section { padding: 48px 0; } }
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
        .on-em {
          font-style: normal;
          font-weight: 700;
          font-size: 1.18em;
          color: #1a1a1a;
        }
        .on-text--em {
          font-style: normal;
          font-weight: 700;
          font-size: 1.3rem;
          color: #911f39;
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
