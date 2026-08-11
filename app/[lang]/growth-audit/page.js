'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', eyebrow: 'ALAT · BESPLATNO · PERSONALIZOVANO',
    title1: 'Besplatna Analiza Rasta Kreatora', title2: 'Za Tvoj Nalog.',
    sub: 'Popuni kratak upitnik i naš tim ti šalje personalizovanu analizu: koje platforme da targetiraš, šta ne radi, i kako to popraviti.',
    features: [
      { title: 'Analiza platformi', desc: 'Proveravamo svaku platformu na kojoj si i identifikujemo one koje propuštaš.' },
      { title: 'Fokus na glavnu platformu', desc: 'Kažemo ti tačno koju platformu da prioritizuješ i zašto.' },
      { title: 'Brze popravke', desc: 'Pokvareni linkovi, praznine u levku, problemi sa bio-om - hvatamo ono što ti nedostaje.' },
      { title: 'Strategija sadržaja', desc: 'Koji tipovi sadržaja da fokusiraš i koliko često da objavljuješ.' },
    ],
    formTitle: 'Zatraži Besplatnu Analizu',
    nameLabel: 'Ime', namePlaceholder: 'Tvoje ime',
    igLabel: 'Instagram @korisničko ime', igPlaceholder: '@tvojenalog',
    phoneLabel: 'Broj telefona', phonePlaceholder: '+381 ...',
    platformsLabel: 'Na kojim platformama si trenutno?',
    platforms: ['OnlyFans', 'TikTok', 'X / Twitter', 'Reddit', 'OFTV', 'YouTube', 'Drugo'],
    helpLabel: 'Šta ti je najveći izazov trenutno?', helpPlaceholder: 'Kratko opiši...',
    submitBtn: 'Pošalji Zahtev',
    successTitle: 'Primili smo tvoj zahtev!', successBody: 'Kontaktiraćemo te u roku od 24 sata sa tvojom personalnom analizom.',
  },
  en: {
    back: '← All resources', eyebrow: 'TOOL · FREE · PERSONALISED',
    title1: 'Free Creator Growth Audit', title2: 'For Your Account.',
    sub: 'Fill in a short questionnaire and our team sends you a personalised analysis: which platforms to target, what\'s not working, and how to fix it.',
    features: [
      { title: 'Platform analysis', desc: 'We review every platform you\'re on and identify the ones you\'re missing.' },
      { title: 'Primary platform focus', desc: 'We tell you exactly which platform to prioritise and why.' },
      { title: 'Quick fixes', desc: 'Broken links, funnel gaps, bio problems — we catch what you\'re missing.' },
      { title: 'Content strategy', desc: 'Which content types to focus on and how often to post.' },
    ],
    formTitle: 'Request Your Free Audit',
    nameLabel: 'Name', namePlaceholder: 'Your name',
    igLabel: 'Instagram @username', igPlaceholder: '@youraccount',
    phoneLabel: 'Phone number', phonePlaceholder: '+1 ...',
    platformsLabel: 'Which platforms are you currently on?',
    platforms: ['OnlyFans', 'TikTok', 'X / Twitter', 'Reddit', 'OFTV', 'YouTube', 'Other'],
    helpLabel: 'What\'s your biggest challenge right now?', helpPlaceholder: 'Describe briefly...',
    submitBtn: 'Submit Request',
    successTitle: 'We received your request!', successBody: 'We\'ll contact you within 24 hours with your personalised analysis.',
  },
  it: {
    back: '← Tutte le risorse', eyebrow: 'STRUMENTO · GRATUITO · PERSONALIZZATO',
    title1: 'Analisi Gratuita della Crescita', title2: 'Per il Tuo Account.',
    sub: 'Compila un breve questionario e il nostro team ti invia un\'analisi personalizzata: quali piattaforme targetizzare, cosa non funziona e come rimediare.',
    features: [
      { title: 'Analisi delle piattaforme', desc: 'Esaminiamo ogni piattaforma su cui sei e identifichiamo quelle che stai perdendo.' },
      { title: 'Focus sulla piattaforma principale', desc: 'Ti diciamo esattamente quale piattaforma prioritizzare e perché.' },
      { title: 'Correzioni rapide', desc: 'Link rotti, lacune nel funnel, problemi con la bio — individuiamo ciò che ti manca.' },
      { title: 'Strategia dei contenuti', desc: 'Quali tipi di contenuto concentrare e con quale frequenza pubblicare.' },
    ],
    formTitle: 'Richiedi la Tua Analisi Gratuita',
    nameLabel: 'Nome', namePlaceholder: 'Il tuo nome',
    igLabel: 'Instagram @username', igPlaceholder: '@tuoaccount',
    phoneLabel: 'Numero di telefono', phonePlaceholder: '+39 ...',
    platformsLabel: 'Su quali piattaforme sei attualmente?',
    platforms: ['OnlyFans', 'TikTok', 'X / Twitter', 'Reddit', 'OFTV', 'YouTube', 'Altro'],
    helpLabel: 'Qual è la tua sfida più grande in questo momento?', helpPlaceholder: 'Descrivi brevemente...',
    submitBtn: 'Invia Richiesta',
    successTitle: 'Abbiamo ricevuto la tua richiesta!', successBody: 'Ti contatteremo entro 24 ore con la tua analisi personalizzata.',
  },
};

const FEAT_ICONS = [
  <><circle key="1" cx="11" cy="11" r="7"/><path key="2" d="m21 21-4.35-4.35"/></>,
  <><circle key="3" cx="12" cy="12" r="9"/><circle key="4" cx="12" cy="12" r="5"/><circle key="5" cx="12" cy="12" r="1.2" fill="#a9875c"/></>,
  <path key="6" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>,
  <path key="7" d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"/>,
];

export default function GrowthAudit() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', instagram: '', phone: '', help: '' });

  return (
    <div>
      <Header />
      <main style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: 96 }}>
        <div style={{ background: 'var(--color-dark-1)', padding: '112px 24px 56px', textAlign: 'center' }}>
          <Link href={`${base}/resursi`} style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 24 }}>{t.back}</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 20 }}>{t.eyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4.5vw,3rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            {t.title1}<br /><span style={{ color: '#a9875c' }}>{t.title2}</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>{t.sub}</p>
        </div>

        <div className="container" style={{ paddingTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 56 }}>
            {t.features.map((f, i) => (
              <div key={f.title} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(169,135,92,0.08)', border: '1.5px solid rgba(169,135,92,0.4)', marginBottom: 14 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a9875c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{FEAT_ICONS[i]}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.5rem', color: '#1a1a1a', margin: '0 0 24px' }}>{t.formTitle}</h2>
            {submitted ? (
              <div style={{ background: '#fff', border: '1px solid rgba(169,135,92,0.3)', borderRadius: 16, padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#1a1a1a', margin: '0 0 8px' }}>{t.successTitle}</h3>
                <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>{t.successBody}</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[['name', t.nameLabel, t.namePlaceholder, 'text'], ['instagram', t.igLabel, t.igPlaceholder, 'text'], ['phone', t.phoneLabel, t.phonePlaceholder, 'tel']].map(([key, label, ph, type]) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{label}</label>
                    <input type={type} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={ph} required style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 10, fontSize: 15, background: '#fff', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 10 }}>{t.platformsLabel}</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {t.platforms.map(p => (
                      <button key={p} type="button" onClick={() => setSelected(s => s.includes(p) ? s.filter(x => x !== p) : [...s, p])}
                        style={{ padding: '8px 16px', borderRadius: 999, border: `1.5px solid ${selected.includes(p) ? '#a9875c' : 'rgba(0,0,0,0.12)'}`, background: selected.includes(p) ? 'rgba(169,135,92,0.1)' : '#fff', color: selected.includes(p) ? '#a9875c' : '#555', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{t.helpLabel}</label>
                  <textarea value={form.help} onChange={e => setForm(f => ({ ...f, help: e.target.value }))} placeholder={t.helpPlaceholder} rows={3} style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 10, fontSize: 15, background: '#fff', boxSizing: 'border-box', resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>{t.submitBtn} <span className="btn-arrow">→</span></button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
