'use client';
import { useState } from 'react';
import SectionFade from './SectionFade';
import { siteData } from '@/data/content';

export default function FAQ() {
  const { faq } = siteData;
  const [open, setOpen] = useState(null);

  return (
    <SectionFade id="faq">
      <section className="section-faq">
        <div className="container">
          <div className="section-header">
            <span className="chapter-label">{faq.label}</span>
            <h2 className="section-title">{faq.title}</h2>
            <p className="section-sub">{faq.sub}</p>
          </div>
          <div className="faq-list">
            {faq.items.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  {item.q}
                  <svg className="faq-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="10" y1="4" x2="10" y2="16" />
                    <line x1="4" y1="10" x2="16" y2="10" />
                  </svg>
                </button>
                <div className="faq-answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionFade>
  );
}
