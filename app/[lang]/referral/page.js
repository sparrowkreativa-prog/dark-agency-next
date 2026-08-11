'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import ReferralKalkulator from '@/components/ReferralKalkulator';
import SiteFooter from '@/components/SiteFooter';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    back: '← Svi resursi',
    eyebrow: 'PROGRAM PREPORUKE · DO 10% MESEČNO · BEZ OGRANIČENJA',
    title1: 'Zaradi do 10% za svaku',
    title2: 'kreatorku koju preporučiš.',
    sub: 'Preporuči kreatorku Velluto Nero i zarađuj do 10% njenih mesečnih prihoda - svaki mesec, bez gornje granice. Jedna WhatsApp poruka je sve što treba.',
    heroStats: [{ num: 'Do 10%', label: 'mesečno' }, { num: 'Bez limita', label: 'bez gornje granice' }, { num: 'Mesečno', label: 'automatska isplata' }],
    howTitle: 'Kako Funkcioniše',
    steps: [
      { num: '1', title: 'Pošalji Poruku', desc: 'Pošalji kratku poruku sa imenom kreatorke i njenim Instagramom.' },
      { num: '2', title: 'Mi Kontaktiramo', desc: 'Naš tim kontaktira kreatorku za prijatan, neobavezan razgovor.' },
      { num: '3', title: 'Mi Proveravamo', desc: 'Pregledamo njen profil i sadržaj da vidimo da li odgovara Velluto Nero.' },
      { num: '4', title: 'Ti Zarađuješ Mesečno', desc: 'Kada kreatorka potpiše, ti zarađuješ do 10% njenih prihoda svaki mesec.' },
    ],
    benefits: [
      { title: 'Do 10% Mesečno', desc: 'Recurring. Bez gornje granice. Što više kreatorka zarađuje, više zarađuješ ti.' },
      { title: 'Nula Rizika', desc: 'Dnevni ugovori koji se obnavljaju - kreatorka može da ode u svakom trenutku.' },
      { title: 'Dokazani Rezultati', desc: 'Prosečno 10–20× rast prihoda za kreatorke kojima upravljamo.' },
      { title: 'Potpuna Transparentnost', desc: 'Nikad ne menjamo lozinke, nikad ne skrivamo prihode, puna kontrola naloga uvek.' },
    ],
    faqTitle: 'Česta Pitanja',
    faqs: [
      { q: 'Koliko zarađujem po preporuci?', a: 'Do 10% mesečnih prihoda preporučene kreatorke, plaćeno tebi svaki mesec dok ostane sa nama.' },
      { q: 'Kada dobijem isplatu?', a: 'Mesečno, zajedno sa ciklusom prihoda kreatorke. Primaš svoju proviziju automatski svaki mesec.' },
      { q: 'Da li osoba koju preporučujem mora biti postojeća kreatorka?', a: 'Može biti postojeća ili potpuno nova. Naš proces selekcije fokusira se na potencijal, ne na trenutne prihode.' },
      { q: 'Ima li ograničenja broja preporuka?', a: 'Nema ograničenja. Preporuči koliko god kreatorki želiš i zarađuj za svaku od njih.' },
    ],
    ctaTitle: 'Spreman/a da počneš?',
    ctaSub: 'Pošalji nam poruku sa imenom i Instagramom kreatorke - mi se bavimo svim ostalim.',
    ctaBtn: 'Pošalji Poruku',
    ctaMicro: 'Odgovaramo u roku od 1 sata · Bez obaveza',
  },
  en: {
    back: '← All resources',
    eyebrow: 'REFERRAL PROGRAMME · UP TO 10% MONTHLY · NO CAP',
    title1: 'Earn up to 10% for every',
    title2: 'creator you refer.',
    sub: 'Refer a creator to Velluto Nero and earn up to 10% of their monthly revenue — every month, no cap. One WhatsApp message is all it takes.',
    heroStats: [{ num: 'Up to 10%', label: 'per month' }, { num: 'No cap', label: 'unlimited earnings' }, { num: 'Monthly', label: 'automatic payout' }],
    howTitle: 'How It Works',
    steps: [
      { num: '1', title: 'Send a Message', desc: 'Send a short message with the creator\'s name and Instagram.' },
      { num: '2', title: 'We Reach Out', desc: 'Our team contacts the creator for a friendly, no-pressure conversation.' },
      { num: '3', title: 'We Review', desc: 'We check her profile and content to see if she\'s a fit for Velluto Nero.' },
      { num: '4', title: 'You Earn Monthly', desc: 'Once the creator signs, you earn up to 10% of her revenue every month.' },
    ],
    benefits: [
      { title: 'Up to 10% Monthly', desc: 'Recurring. No cap. The more the creator earns, the more you earn.' },
      { title: 'Zero Risk', desc: 'Daily rolling contracts — the creator can leave at any time.' },
      { title: 'Proven Results', desc: 'Average 10–20× revenue growth for the creators we manage.' },
      { title: 'Full Transparency', desc: 'We never change passwords, never hide revenue, full account control always.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How much do I earn per referral?', a: 'Up to 10% of the referred creator\'s monthly revenue, paid to you every month for as long as she stays with us.' },
      { q: 'When do I get paid?', a: 'Monthly, in line with the creator\'s revenue cycle. You receive your commission automatically every month.' },
      { q: 'Does the person I refer need to already be a creator?', a: 'She can be an existing creator or completely new. Our selection process focuses on potential, not current revenue.' },
      { q: 'Is there a limit on referrals?', a: 'No limit. Refer as many creators as you like and earn for every one of them.' },
    ],
    ctaTitle: 'Ready to start?',
    ctaSub: 'Send us a message with the creator\'s name and Instagram — we handle everything else.',
    ctaBtn: 'Send a Message',
    ctaMicro: 'We reply within 1 hour · No obligation',
  },
  it: {
    back: '← Tutte le risorse',
    eyebrow: 'PROGRAMMA DI REFERRAL · FINO AL 10% MENSILE · SENZA LIMITI',
    title1: 'Guadagna fino al 10% per ogni',
    title2: 'creator che presenti.',
    sub: 'Presenta una creator a Velluto Nero e guadagna fino al 10% dei suoi ricavi mensili — ogni mese, senza limiti. Basta un messaggio WhatsApp.',
    heroStats: [{ num: 'Fino al 10%', label: 'al mese' }, { num: 'Nessun limite', label: 'guadagni illimitati' }, { num: 'Mensile', label: 'pagamento automatico' }],
    howTitle: 'Come Funziona',
    steps: [
      { num: '1', title: 'Invia un Messaggio', desc: 'Invia un breve messaggio con il nome della creator e il suo Instagram.' },
      { num: '2', title: 'Contattiamo Noi', desc: 'Il nostro team contatta la creator per una conversazione amichevole e senza pressioni.' },
      { num: '3', title: 'Verifichiamo Noi', desc: 'Controlliamo il suo profilo e i contenuti per vedere se è adatta a Velluto Nero.' },
      { num: '4', title: 'Tu Guadagni Mensilmente', desc: 'Una volta che la creator firma, guadagni fino al 10% dei suoi ricavi ogni mese.' },
    ],
    benefits: [
      { title: 'Fino al 10% Mensile', desc: 'Ricorrente. Senza limiti. Più guadagna la creator, più guadagni tu.' },
      { title: 'Zero Rischio', desc: 'Contratti giornalieri rinnovabili — la creator può andarsene in qualsiasi momento.' },
      { title: 'Risultati Comprovati', desc: 'Crescita media dei ricavi di 10–20× per le creator che gestiamo.' },
      { title: 'Piena Trasparenza', desc: 'Non cambiamo mai le password, non nascondiamo mai i ricavi, pieno controllo dell\'account sempre.' },
    ],
    faqTitle: 'Domande Frequenti',
    faqs: [
      { q: 'Quanto guadagno per ogni referral?', a: 'Fino al 10% dei ricavi mensili della creator presentata, pagati a te ogni mese finché rimane con noi.' },
      { q: 'Quando vengo pagato/a?', a: 'Mensilmente, in linea con il ciclo di ricavi della creator. Ricevi la tua commissione automaticamente ogni mese.' },
      { q: 'La persona che presento deve già essere una creator?', a: 'Può essere una creator esistente o completamente nuova. Il nostro processo di selezione si concentra sul potenziale, non sui ricavi attuali.' },
      { q: 'C\'è un limite al numero di referral?', a: 'Nessun limite. Presenta quante creator vuoi e guadagna per ognuna di loro.' },
    ],
    ctaTitle: 'Pronto/a a iniziare?',
    ctaSub: 'Inviaci un messaggio con il nome e l\'Instagram della creator — noi ci occupiamo di tutto il resto.',
    ctaBtn: 'Invia un Messaggio',
    ctaMicro: 'Rispondiamo entro 1 ora · Senza impegno',
  },
};

const BENEFIT_ICONS = [
  <path key="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
  <path key="3" d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" />,
  <><path key="4a" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle key="4b" cx="12" cy="12" r="3" /></>,
];

export default function Referral() {
  const lang = useLang();
  const t = T[lang] || T.sr;
  const base = `/${lang}`;

  return (
    <div>
      <Header />
      <main style={{ background: '#fafaf8', minHeight: '100vh', paddingBottom: 96 }}>
        <div style={{ background: '#1a1a1a', padding: '112px 24px 56px', textAlign: 'center' }}>
          <Link href={`${base}/resursi`} style={{ display: 'inline-block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 24 }}>{t.back}</Link>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#a9875c', textTransform: 'uppercase', marginBottom: 20 }}>{t.eyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.4rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            {t.title1}<br /><span style={{ color: '#a9875c' }}>{t.title2}</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75 }}>{t.sub}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {t.heroStats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontStyle: 'italic', color: '#a9875c', lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4, display: 'block' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <ReferralKalkulator />

        <div className="container" style={{ paddingTop: 56 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 28px' }}>{t.howTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 56 }}>
            {t.steps.map(s => (
              <div key={s.num} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(169,135,92,0.1)', border: '1px solid rgba(169,135,92,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#a9875c', marginBottom: 14 }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 56 }}>
            {t.benefits.map((b, i) => (
              <div key={b.title} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 16, padding: '24px 20px' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(169,135,92,0.08)', border: '1.5px solid rgba(169,135,92,0.4)', marginBottom: 14 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a9875c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{BENEFIT_ICONS[i]}</svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', color: '#1a1a1a', margin: '0 0 8px' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#777', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.6rem', color: '#1a1a1a', margin: '0 0 20px' }}>{t.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 56 }}>
            {t.faqs.map(f => (
              <div key={f.q} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                <p style={{ fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px', fontSize: '0.95rem' }}>{f.q}</p>
                <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', background: '#1a1a1a', borderRadius: 24, padding: '52px 32px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', margin: '0 0 12px' }}>{t.ctaTitle}</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 28px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>{t.ctaSub}</p>
            <a href="https://wa.me/381000000000" className="btn-primary btn-large" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', boxShadow: '0 8px 28px rgba(37,211,102,0.35)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              {t.ctaBtn}
            </a>
            <p style={{ fontSize: 12, color: '#555', marginTop: 12 }}>{t.ctaMicro}</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
