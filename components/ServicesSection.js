'use client';
import { useEffect, useRef, useState } from 'react';

const ICONS = {
  'user-circle': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
  'headset': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5C3 6.5 7.5 2 12 2s9 4.5 9 9v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
    </svg>
  ),
  'trending-up': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  'book-open': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  'messages-square': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/>
    </svg>
  ),
  'sparkles': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  ),
  'shield': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  'smartphone': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  ),
  'lock': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  'globe': (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
};

function ServiceCard({ item, index, trigger }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => setShow(true), index * 80);
    return () => clearTimeout(t);
  }, [trigger, index]);

  return (
    <div
      className="svc-card"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease, transform 0.55s ease`,
      }}
    >
      <div className="svc-card-top">
        <div className="svc-icon-wrap">
          {ICONS[item.icon]}
        </div>
        <div className="svc-title-row">
          <span className="svc-num">{item.num}</span>
          <h3 className="svc-title">{item.title}</h3>
        </div>
      </div>
      <p className="svc-body">{item.body}</p>
    </div>
  );
}

export default function ServicesSection({ services }) {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    const t = setTimeout(() => {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setTrigger(true); io.disconnect(); }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      io.observe(el);
    }, 150);
    return () => { clearTimeout(t); io?.disconnect(); };
  }, []);

  return (
    <section className="svc-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="chapter-label">{services.label}</span>
          <h2 className="section-title">
            Full Management,<br />
            <span style={{ color: '#a9875c' }}>u Potpunosti.</span>
          </h2>
          <p className="section-sub" style={{ maxWidth: 720 }}>{services.sub}</p>
        </div>

        <div className="svc-grid" ref={ref}>
          {services.items.map((item, i) => (
            <ServiceCard key={item.num} item={item} index={i} trigger={trigger} />
          ))}
        </div>

        <div className="svc-quote">
          <div className="svc-quote-line">5+ Godina Iskustva.</div>
          <div className="svc-quote-line">140+ Klijenata.</div>
          <div className="svc-quote-line svc-quote-pink">Nula Curenja Identiteta.</div>
        </div>
      </div>

      <style>{`
        .svc-section {
          padding: 96px 0;
          background: #fafaf8;
        }
        @media (max-width: 640px) { .svc-section { padding: 48px 0; } }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .svc-grid { grid-template-columns: 1fr; }
        }

        .svc-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px;
          padding: 28px 24px 26px;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }
        .svc-card:hover {
          box-shadow: 0 8px 32px rgba(169,135,92,0.13);
          transform: translateY(-3px);
          border-color: rgba(169,135,92,0.25);
        }

        .svc-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .svc-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(169,135,92,0.08);
          border: 1.5px solid rgba(169,135,92,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a9875c;
          flex-shrink: 0;
        }

        .svc-title-row {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .svc-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ccc;
          line-height: 1;
        }

        .svc-title {
          font-size: 1.05rem;
          font-weight: 700;
          font-style: italic;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
        }

        .svc-body {
          font-size: 0.875rem;
          color: #777;
          line-height: 1.65;
          margin: 0;
        }

        .svc-quote {
          margin-top: 64px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .svc-quote-line {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #1a1a1a;
          line-height: 1.15;
        }
        .svc-quote-pink {
          color: #a9875c;
        }
      `}</style>
    </section>
  );
}
