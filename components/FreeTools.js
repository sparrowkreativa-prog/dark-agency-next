'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    eyebrow: 'AFFILIATE',
    heading1: 'Još Uvek Nisi Spremna',
    heading2: 'Ili Želiš Sama da Radiš?',
    sub: 'U redu, poklanjamo ti potpuno besplatno naše vodiče uz pomoć kojih smo izgradili ceo sistem.',
    tools: [
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
        desc: 'Kako smo povećali Mijin IG sa 12k na 220k pratilaca - tačan vodič korak po korak.',
        cta: 'Čitaj vodič',
        href: '/instagram-playbook',
        img: '/free-tools/instagram-playbook.jpg',
        alt: 'Instagram vodič za rast',
      },
      {
        tag: 'Najbolje za kreatore koji sami vode čet',
        title: 'Čet Strategija',
        desc: 'Kako pretvaramo neobavezne pretplatnike u kupce koji se vraćaju - tačne skripte, upsell taktike i retencija koje naš tim koristi svaki dan.',
        cta: 'Preuzmi skripte',
        href: '/cet-strategija',
        img: '/free-tools/chatting-strategy.jpg',
        alt: 'Čet strategija',
      },
    ],
  },
  en: {
    eyebrow: 'FREE RESOURCES',
    heading1: 'Not Ready Yet',
    heading2: 'Or Want to Do It Yourself?',
    sub: 'That\'s fine — we\'re giving away the exact guides we used to build our entire system, completely free.',
    tools: [
      {
        tag: 'Best for creators who\'ve already tried an agency',
        title: 'Free Creator Growth Audit',
        desc: 'We map which platforms to prioritise, what\'s not working and exactly how to fix it.',
        cta: 'Get the audit',
        href: '/growth-audit',
        img: '/free-tools/growth-audit-cover.jpg',
        alt: 'Free creator growth audit',
      },
      {
        tag: 'Best for IG creators with 5–20k followers',
        title: 'Instagram Growth Playbook',
        desc: 'How we grew Mia\'s IG from 12k to 220k followers — the exact step-by-step guide.',
        cta: 'Read the guide',
        href: '/instagram-playbook',
        img: '/free-tools/instagram-playbook.jpg',
        alt: 'Instagram growth playbook',
      },
      {
        tag: 'Best for creators managing their own chat',
        title: 'Chat Strategy',
        desc: 'How we turn casual subscribers into repeat buyers — the exact scripts, upsell tactics and retention methods our team uses every day.',
        cta: 'Download the scripts',
        href: '/cet-strategija',
        img: '/free-tools/chatting-strategy.jpg',
        alt: 'Chat strategy',
      },
    ],
  },
  it: {
    eyebrow: 'RISORSE GRATUITE',
    heading1: 'Non Sei Ancora Pronta',
    heading2: 'O Vuoi Farlo Da Sola?',
    sub: 'Va bene — ti regaliamo le guide esatte che abbiamo usato per costruire l\'intero sistema, completamente gratis.',
    tools: [
      {
        tag: 'Ideale per creator che hanno già provato un\'agenzia',
        title: 'Analisi Gratuita della Crescita',
        desc: 'Mappiamo quali piattaforme prioritizzare, cosa non funziona e come rimediare.',
        cta: 'Ottieni l\'analisi',
        href: '/growth-audit',
        img: '/free-tools/growth-audit-cover.jpg',
        alt: 'Analisi gratuita della crescita creator',
      },
      {
        tag: 'Ideale per creator IG con 5–20k follower',
        title: 'Playbook per la Crescita su Instagram',
        desc: 'Come abbiamo portato l\'IG di Mia da 12k a 220k follower — la guida esatta passo per passo.',
        cta: 'Leggi la guida',
        href: '/instagram-playbook',
        img: '/free-tools/instagram-playbook.jpg',
        alt: 'Playbook per la crescita su Instagram',
      },
      {
        tag: 'Ideale per creator che gestiscono da sole la chat',
        title: 'Strategia di Chat',
        desc: 'Come trasformiamo abbonati occasionali in acquirenti abituali — script esatti, tattiche di upsell e retention che il nostro team usa ogni giorno.',
        cta: 'Scarica gli script',
        href: '/cet-strategija',
        img: '/free-tools/chatting-strategy.jpg',
        alt: 'Strategia di chat',
      },
    ],
  },
};

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
  const lang = useLang();
  const t = T[lang] || T.sr;
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    let io;
    const timer = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(timer); io?.disconnect(); };
  }, []);

  return (
    <section className="section-free-tools">
      <div className="container">
        <div
          ref={headRef}
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease', textAlign: 'center', marginBottom: 48 }}
        >
          <p className="ft-eyebrow">{t.eyebrow}</p>
          <h2 className="ft-heading">
            <span style={{ color: '#fff' }}>{t.heading1}</span>
            <br />
            <span style={{ color: '#a9875c' }}>{t.heading2}</span>
          </h2>
          <p className="ft-sub">{t.sub}</p>
          <div className="ft-arrow-wrap" aria-hidden="true">
            <svg className="ft-arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            <svg className="ft-arrow-icon ft-arrow-icon--delay" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </div>
        </div>

        <div className="ft-grid">
          {t.tools.map((tool, i) => <ToolCard key={tool.href} tool={tool} index={i} />)}
        </div>
      </div>
    </section>
  );
}
