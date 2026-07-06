'use client';
import { builder, BuilderComponent } from '@builder.io/react';
import { BUILDER_API_KEY } from '@/lib/builder';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionFade from '@/components/SectionFade';
import Masina from '@/components/Masina';
import Roster from '@/components/Roster';

builder.init(BUILDER_API_KEY);
import FAQ from '@/components/FAQ';
import ApplyForm from '@/components/ApplyForm';
import PressBar from '@/components/PressBar';
import ONama from '@/components/ONama';
import SplitHero from '@/components/SplitHero';
import FreeTools from '@/components/FreeTools';
import ProblemSection from '@/components/ProblemSection';
import ServicesSection from '@/components/ServicesSection';
import RezultatiScreenshots from '@/components/RezultatiScreenshots';
import Bezbednost from '@/components/Bezbednost';
import { siteData } from '@/data/content';

export default function Home() {
  const { problem, included, services, qualify, testimonials, guarantee, finalCta, footer } = siteData;

  return (
    <>
      <Header />
      <main id="main-content" style={{ paddingTop: 80 }}>

        <Hero />

        <PressBar />

        <ONama />

        {/* Problem / Zašto */}
        <ProblemSection problem={problem} />

        <SplitHero />

        {/* What's Included */}
        <SectionFade>
          <section className="section-included">
            <div className="container">
              <div className="section-header">
                <span className="chapter-label">{included.label}</span>
                <h2 className="section-title">
                  Svaki Sistem Koji Ti Treba —<br />
                  <span style={{ color: '#e8538f' }}>Već Radi.</span>
                </h2>
                <p className="section-sub">{included.sub}</p>
              </div>
              {included.cards.map((card) => (
                <div key={card.num} className={`included-card${card.reverse ? ' included-card--reverse' : ''}`}>
                  <div className="included-card-media">
                    <div
                      className="included-card-placeholder"
                      style={card.num === '01' ? {
                        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F0edeb660c80b4a5dab3575372c668fe0%2Fa53b3630f0dc4451bd07c24fd84314cf)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      } : card.num === '02' ? {
                        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F0edeb660c80b4a5dab3575372c668fe0%2F9667429a1f2c47ae90a4261a11de827c)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      } : card.num === '03' ? {
                        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F0edeb660c80b4a5dab3575372c668fe0%2F3eb3210231cb42bd86b1b78a62a078a4)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      } : {}}
                    />
                    <span className="included-badge">{card.num}</span>
                  </div>
                  <div className="included-card-body">
                    <h3 className="included-title" style={{ fontStyle: 'italic' }}>{card.title}</h3>
                    <p className="included-desc">{card.desc}</p>
                    <ul className="included-list">
                      {card.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionFade>

        {/* MAŠINA */}
        <Masina />

        {/* Rezultati screenshots */}
        <RezultatiScreenshots />

        {/* ROSTER */}
        <Roster />

        {/* Services */}
        <ServicesSection services={services} />

        {/* Bezbednost */}
        <Bezbednost />

        {/* Qualify */}
        <SectionFade>
          <section className="section-qualify">
            <div className="container">
              <div className="section-header">
                <span className="chapter-label">{qualify.label}</span>
                <h2 className="section-title">{qualify.title}</h2>
                <p className="section-sub">{qualify.sub}</p>
              </div>
              <div className="qualify-grid">
                <div className="qualify-col">
                  <h3>{qualify.yesHeading}</h3>
                  <ul className="qualify-list">
                    {qualify.yes.map((q) => (
                      <li key={q} className="qualify-item">
                        <span className="qualify-check qualify-check--yes" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="qualify-col">
                  <h3>{qualify.noHeading}</h3>
                  <ul className="qualify-list">
                    {qualify.no.map((q) => (
                      <li key={q} className="qualify-item">
                        <span className="qualify-check qualify-check--no" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </SectionFade>

        {/* Testimonials */}
        <SectionFade>
          <section className="section-testimonials">
            <div className="container">
              <div className="section-header">
                <span className="chapter-label">{testimonials.label}</span>
                <h2 className="section-title">{testimonials.title}</h2>
                <p className="section-sub">{testimonials.sub}</p>
              </div>
              <div className="testimonials-grid">
                {testimonials.items.map((t) => (
                  <div key={t.name} className="testimonial-card">
                    <div className="testimonial-amount">{t.amount}</div>
                    <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                    <div className="testimonial-meta">
                      <div className="testimonial-initials">{t.name.split('.')[0]}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-rank">{t.rank}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionFade>

        {/* Guarantee */}
        <SectionFade>
          <section className="section-guarantee">
            <div className="container">
              <div className="section-header">
                <span className="chapter-label">{guarantee.label}</span>
                <h2 className="section-title">{guarantee.title}</h2>
              </div>
              <div className="guarantee-big">{guarantee.bigNum}</div>
              <div className="guarantee-list">
                {guarantee.items.map((g) => (
                  <div key={g.label} className="guarantee-item">
                    <span className="guarantee-num">{g.label}</span>
                    <p className="guarantee-text">{g.text}</p>
                  </div>
                ))}
              </div>
              <div className="section-cta">
                <a href={guarantee.cta.href} className="btn-primary btn-large">
                  {guarantee.cta.label} <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          </section>
        </SectionFade>

        {/* FAQ */}
        <FAQ />

        {/* Apply Form */}
        <ApplyForm />

        {/* Free Tools */}
        <FreeTools />

        {/* Final CTA */}
        <SectionFade>
          <section className="section-final-cta">
            <div className="container">
              <div className="section-header">
                <span className="chapter-label">{finalCta.label}</span>
                <h2 className="section-title">{finalCta.title}</h2>
              </div>
              <div className="final-cols">
                <div className="final-col">
                  <h3>{finalCta.col1.heading}</h3>
                  <ul>{finalCta.col1.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
                <div className="final-col">
                  <h3>{finalCta.col2.heading}</h3>
                  <ul>{finalCta.col2.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              </div>
              <p className="final-line">{finalCta.line}</p>
              <div className="section-cta">
                <a href={finalCta.cta.href} className="btn-primary btn-large">
                  {finalCta.cta.label} <span className="btn-arrow">→</span>
                </a>
              </div>
              <p className="final-disclaimer">{finalCta.disclaimer}</p>
            </div>
          </section>
        </SectionFade>

      </main>

      <footer id="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">{siteData.nav.logo}</div>
              <p className="footer-tagline">{footer.tagline}</p>
            </div>
            <a href={footer.cta.href} className="btn-outline" style={{ borderColor: '#e8538f', color: '#e8538f' }}>
              {footer.cta.label} <span>→</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">{footer.copy}</p>
            <div className="footer-legal">
              {footer.legal.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
