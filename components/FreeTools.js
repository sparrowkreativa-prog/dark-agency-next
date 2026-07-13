'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const tools = [
  {
    tag: 'Najbolje za kreatore koji su već probali agenciju',
    title: 'Besplatna analiza rasta kreatora',
    desc: 'Mapiramo koje platforme da prioritizuješ, šta ne radi i kako to popraviti.',
    cta: 'Dobij analizu',
    href: '/growth-audit',
    img: '/free-tools/growth-audit-cover.jpg',
    alt: 'Besplatna analiza rasta kreatora',
  },
  {
    tag: 'Najbolje za IG kreatore sa 5–20k pratilaca',
    title: 'Instagram vodič za rast',
    desc: 'Kako smo povećali Mijin IG sa 12k na 220k pratilaca — tačan vodič korak po korak.',
    cta: 'Čitaj vodič',
    href: '/instagram-playbook',
    img: '/free-tools/instagram-playbook.jpg',
    alt: 'Instagram vodič za rast',
  },
  {
    tag: 'Najbolje za kreatore koji sami vode čet',
    title: 'Čet Strategija',
    desc: 'Kako pretvaramo neobavezne pretplatnike u kupce koji se vraćaju — tačne skripte, upsell taktike i retencija koje naš tim koristi svaki dan.',
    cta: 'Preuzmi skripte',
    href: '/cet-strategija',
    img: '/free-tools/chatting-strategy.jpg',
    alt: 'Čet strategija',
  },
];

function ToolCard({ tool, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(28px)', transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s` }}
    >
      <a href={tool.href} className="ft-card-link">
        <div className="ft-card">
          <div className="ft-card-img-wrap">
            <Image
              src={tool.img}
              alt={tool.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              className="ft-card-img"
            />
            <div className="ft-card-img-fade" />
          </div>
          <div className="ft-card-body">
            <span className="ft-card-tag">{tool.tag}</span>
            <h3 className="ft-card-title">{tool.title}</h3>
            <p className="ft-card-desc">{tool.desc}</p>
            <div className="ft-card-cta">
              {tool.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function FreeTools() {
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <section className="section-free-tools">
      <div className="container">
        <div
          ref={headRef}
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease', textAlign: 'center', marginBottom: 48 }}
        >
          <p className="ft-eyebrow">Još nisi spremna? Odnesi ovo sa sobom.</p>
          <h2 className="ft-heading">Uzmi naše prave vodič materijale.</h2>
          <p className="ft-sub">Bez email zahteva. Bez upsella. Samo pravi sistemi koje koristimo — besplatno za kreatore koji žele sami.</p>
        </div>

        <div className="ft-grid">
          {tools.map((t, i) => <ToolCard key={t.href} tool={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
