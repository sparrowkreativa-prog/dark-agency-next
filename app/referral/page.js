'use client';
import Link from 'next/link';
import ReferralKalkulator from '@/components/ReferralKalkulator';
import SiteFooter from '@/components/SiteFooter';

const STEPS = [
  { num: '1', title: 'Pošalji Poruku', desc: 'Pošalji kratku poruku sa imenom kreatorke i njenim Instagramom.' },
  { num: '2', title: 'Mi Kontaktiramo', desc: 'Naš tim kontaktira kreatorku za prijatan, neobavezan razgovor.' },
  { num: '3', title: 'Mi Proveravamo', desc: 'Pregledamo njen profil i sadržaj da vidimo da li odgovara Velluto Nero.' },
  { num: '4', title: 'Ti Zarađuješ Mesečno', desc: 'Kada kreatorka potpiše, ti zarađuješ do 10% njenih prihoda svaki mesec.' },
];

const FAQS = [
  { q: 'Koliko zarađujem po preporuci?', a: 'Do 10% mesečnih prihoda preporučene kreatorke, plaćeno tebi svaki mesec dok ostane sa nama. Što više ona zarađuje, više zarađuješ ti.' },
  { q: 'Kada dobijem isplatu?', a: 'Mesečno, zajedno sa ciklusom prihoda kreatorke. Primaš svoju proviziju automatski svaki mesec.' },
  { q: 'Da li osoba koju preporučujem mora biti postojeća kreatorka?', a: 'Može biti postojeća ili potpuno nova. Naš proces selekcije fokusira se na potencijal, ne na trenutne prihode.' },
  { q: 'Ima li ograničenja broja preporuka?', a: 'Nema ograničenja. Preporuči koliko god kreatorki želiš i zarađuj za svaku od njih.' },
];

export default function Referral() {
  return (
    <div>
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fafaf8', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="nav-container">
          <div className="nav-logo"><Link href="/" style={{ fontStyle: 'italic' }}>Velluto Nero</Link></div>
          <nav className="nav-links">
            <ul className="nav-menu">
              <li><Link href="/">Početna</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><Link href="/resursi" style={{ color: '#a9875c' }}>Resursi</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/#apply" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
              Prijavi se <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </header>

      <main style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: 96 }}>
        {/* Hero */}
        <div style={{ background: '#1a1a1a', padding: '64px 24px 56px', textAlign: 'center' }}>
          <Link href="/resursi" style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 24 }}>← Svi resursi</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 20 }}>PROGRAM PREPORUKE · DO 10% MESEČNO · BEZ OGRANIČENJA</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.4rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            Zaradi do 10% za svaku<br />
            <span style={{ color: '#a9875c' }}>kreatorku koju preporučiš.</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Preporuči kreatorku Velluto Nero i zarađuj do 10% njenih mesečnih prihoda - svaki mesec, bez gornje granice. Jedna WhatsApp poruka je sve što treba.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[
              { num: 'Do 10%', label: 'mesečno' },
              { num: 'Bez limita', label: 'bez gornje granice' },
              { num: 'Mesečno', label: 'automatska isplata' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontStyle: 'italic', color: '#a9875c', lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4, display: 'block' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kalkulator preporuke */}
        <ReferralKalkulator />

        <div className="container" style={{ paddingTop: 56 }}>
          {/* How it works */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 28px' }}>Kako Funkcioniše</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 56 }}>
            {STEPS.map(s => (
              <div key={s.num} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(169,135,92,0.1)', border: '1px solid rgba(169,135,92,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#a9875c', marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 56 }}>
            {[
              {
                icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Do 10% Mesečno',
                desc: 'Recurring. Bez gornje granice. Što više kreatorka zarađuje, više zarađuješ ti.',
              },
              {
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
                title: 'Nula Rizika',
                desc: 'Dnevni ugovori koji se obnavljaju - kreatorka može da ode u svakom trenutku.',
              },
              {
                icon: <path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" />,
                title: 'Dokazani Rezultati',
                desc: 'Prosečno 10–20× rast prihoda za kreatorke kojima upravljamo.',
              },
              {
                icon: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
                title: 'Potpuna Transparentnost',
                desc: 'Nikad ne menjamo lozinke, nikad ne skrivamo prihode, puna kontrola naloga uvek.',
              },
            ].map(b => (
              <div key={b.title} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(169,135,92,0.08)', border: '1.5px solid rgba(169,135,92,0.4)',
                  marginBottom: 14,
                }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a9875c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{b.icon}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 20px' }}>Česta Pitanja</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 56 }}>
            {FAQS.map(f => (
              <div key={f.q} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                <p style={{ fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px', fontSize: '0.95rem' }}>{f.q}</p>
                <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', background: '#1a1a1a', borderRadius: 24, padding: '52px 32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', margin: '0 0 12px' }}>Spreman/a da počneš?</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>Pošalji nam poruku sa imenom i Instagramom kreatorke - mi se bavimo svim ostalim.</p>
            <a
              href="https://wa.me/381000000000"
              className="btn-primary btn-large"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25D366', boxShadow: '0 8px 28px rgba(37,211,102,0.35)', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Pošalji Poruku
            </a>
            <p style={{ fontSize: 12, color: '#555', marginTop: 12 }}>Odgovaramo u roku od 1 sata · Bez obaveza</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
