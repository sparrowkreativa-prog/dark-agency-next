'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { useState } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi', eyebrow: 'ALAT · BESPLATNO · OGRANIČENO',
    title1: 'Pronašla si procureli sadržaj?', title2: 'Uklonićemo ga - besplatno.',
    sub: 'Bez ugovora, bez troškova. Podnosi DMCA zahteve profesionalno i legalno. Pratimo dok svaki komad sadržaja ne bude uklonjen.',
    steps: [
      { title: 'Pošalji Podatke', desc: 'Ostavi svoj Instagram i broj telefona - koristimo ih da verifikujemo da si aktivna kreatorka.' },
      { title: 'Mi Skeniramo', desc: 'Pretražujemo web za tvoj procureli sadržaj na tube sajtovima, forumima i file hostovima.' },
      { title: 'Mi Podnosimo Takedown', desc: 'DMCA obaveštenja se šalju svakoj platformi koja hostuje tvoj sadržaj - profesionalno i legalno.' },
      { title: 'Sadržaj Je Uklonjen', desc: 'Procureli sadržaj je uklonjen. Pratimo dok sve ne bude gotovo.' },
    ],
    formTitle: 'Zatraži Besplatni DMCA Takedown',
    igLabel: 'Instagram @korisničko ime', igPlaceholder: '@tvojenalog',
    phoneLabel: 'Broj telefona', phonePlaceholder: '+381 ...',
    submitBtn: 'Pošalji Zahtev',
    successTitle: 'Primili smo tvoj zahtev!', successBody: 'Kontaktiraćemo te u roku od 24 sata sa sledećim koracima.',
    noticeTitle: 'Napomena', noticeBody: 'Ova usluga je besplatna ali ograničena. Prihvatamo maksimalno 10 zahteva nedeljno.',
  },
  en: {
    back: '← All resources', eyebrow: 'TOOL · FREE · LIMITED',
    title1: 'Found leaked content?', title2: 'We\'ll remove it — for free.',
    sub: 'No contract, no cost. We file DMCA takedown requests professionally and legally. We track until every piece of content is removed.',
    steps: [
      { title: 'Submit Your Details', desc: 'Leave your Instagram and phone number — we use them to verify you\'re an active creator.' },
      { title: 'We Scan', desc: 'We search the web for your leaked content on tube sites, forums and file hosts.' },
      { title: 'We File the Takedown', desc: 'DMCA notices are sent to every platform hosting your content — professionally and legally.' },
      { title: 'Content Is Removed', desc: 'Leaked content is taken down. We track until everything is gone.' },
    ],
    formTitle: 'Request a Free DMCA Takedown',
    igLabel: 'Instagram @username', igPlaceholder: '@youraccount',
    phoneLabel: 'Phone number', phonePlaceholder: '+1 ...',
    submitBtn: 'Submit Request',
    successTitle: 'We received your request!', successBody: 'We\'ll contact you within 24 hours with next steps.',
    noticeTitle: 'Note', noticeBody: 'This service is free but limited. We accept a maximum of 10 requests per week.',
  },
  it: {
    back: '← Tutte le risorse', eyebrow: 'STRUMENTO · GRATUITO · LIMITATO',
    title1: 'Hai trovato contenuti trapelati?', title2: 'Li rimuoviamo — gratuitamente.',
    sub: 'Nessun contratto, nessun costo. Presentiamo richieste di takedown DMCA in modo professionale e legale. Monitoriamo finché ogni contenuto non viene rimosso.',
    steps: [
      { title: 'Invia i Tuoi Dati', desc: 'Lascia il tuo Instagram e numero di telefono — li usiamo per verificare che sei una creator attiva.' },
      { title: 'Scansioniamo Noi', desc: 'Cerchiamo sul web i tuoi contenuti trapelati su siti tube, forum e host di file.' },
      { title: 'Presentiamo il Takedown', desc: 'Le notifiche DMCA vengono inviate a ogni piattaforma che ospita i tuoi contenuti — in modo professionale e legale.' },
      { title: 'Il Contenuto Viene Rimosso', desc: 'Il contenuto trapelato viene rimosso. Monitoriamo finché tutto non è eliminato.' },
    ],
    formTitle: 'Richiedi un DMCA Takedown Gratuito',
    igLabel: 'Instagram @username', igPlaceholder: '@tuoaccount',
    phoneLabel: 'Numero di telefono', phonePlaceholder: '+39 ...',
    submitBtn: 'Invia Richiesta',
    successTitle: 'Abbiamo ricevuto la tua richiesta!', successBody: 'Ti contatteremo entro 24 ore con i prossimi passi.',
    noticeTitle: 'Nota', noticeBody: 'Questo servizio è gratuito ma limitato. Accettiamo massimo 10 richieste a settimana.',
  },
};

const STEP_ICONS = [
  <><path key="a" d="M12 20h9"/><path key="b" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></>,
  <><circle key="c" cx="11" cy="11" r="7"/><path key="d" d="m21 21-4.35-4.35"/></>,
  <><path key="e" d="M12 3v18"/><path key="f" d="M5 7h14"/><path key="g" d="M8 21h8"/></>,
  <><circle key="h" cx="12" cy="12" r="9"/><path key="i" d="m8.5 12.5 2.5 2.5 5-5.5"/></>,
];

export default function Dmca() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ instagram: '', phone: '' });

  return (
    <div>
      <Header />
      <main style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: 96 }}>
        <div style={{ background: '#1a1a1a', padding: '112px 24px 56px', textAlign: 'center' }}>
          <Link href={`${base}/resursi`} style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 24 }}>{t.back}</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 20 }}>{t.eyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.2rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            {t.title1}<br /><span style={{ color: '#a9875c' }}>{t.title2}</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>{t.sub}</p>
        </div>

        <div className="container" style={{ paddingTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 56 }}>
            {t.steps.map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(169,135,92,0.08)', border: '1.5px solid rgba(169,135,92,0.4)', marginBottom: 14 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a9875c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{STEP_ICONS[i]}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 520, margin: '0 auto 40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.5rem', color: '#1a1a1a', margin: '0 0 24px' }}>{t.formTitle}</h2>
            {submitted ? (
              <div style={{ background: '#fff', border: '1px solid rgba(169,135,92,0.3)', borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#1a1a1a', margin: '0 0 8px' }}>{t.successTitle}</h3>
                <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>{t.successBody}</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{t.igLabel}</label>
                  <input value={form.instagram} onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))} placeholder={t.igPlaceholder} required style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 10, fontSize: 15, background: '#fff', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{t.phoneLabel}</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder={t.phonePlaceholder} required style={{ width: '100%', padding: '12px 16px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 10, fontSize: 15, background: '#fff', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>{t.submitBtn} <span className="btn-arrow">→</span></button>
              </form>
            )}
          </div>

          <div style={{ background: '#fff8ee', border: '1px solid rgba(169,135,92,0.2)', borderRadius: 14, padding: '20px 24px', maxWidth: 520, margin: '0 auto' }}>
            <p style={{ fontWeight: 700, color: '#a9875c', margin: '0 0 6px', fontSize: '0.9rem' }}>{t.noticeTitle}</p>
            <p style={{ color: '#777', fontSize: '0.875rem', margin: 0, lineHeight: 1.6 }}>{t.noticeBody}</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
