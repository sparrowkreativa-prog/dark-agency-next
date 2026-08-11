'use client';
import { useState, useEffect, useRef } from 'react';
import { useLang } from '@/hooks/useContent';

const T = {
  sr: {
    testimonials: [
      { quote: '"Bila sam ubeđena da je svaka agencija prevara. Ono što me je promenilo bio je način na koji su zaštitili moj identitet pre nego što smo uopšte razgovarali o brojevima."', cite: 'K.R. - Lifestyle, Top 0.05%' },
      { quote: '"Nemam ni jednog pratioca i potpuno sam anonimna - to je bio uslov. Izgradili su sve oko toga. Moja porodica i dalje misli da radim u marketingu."', cite: 'S.T. - Fitness, Top 0.01%' },
      { quote: '"Skoro nisam aplicirala. Godinu dana kasnije imam tim koji radi sve za mene, dok ja zarađujem."', cite: 'A.J. - Glamour, Top 0.3%' },
    ],
    steps: ['Kontakt', 'O tebi', 'Tvoj rad', 'Finalno'],
    chapterLabel: 'Prijava',
    sectionTitle: 'Prijavi Se. 60 Sekundi.',
    sectionSub: 'Primamo manje od 2% prijava. Ako odgovaraš, biraš termin za discovery poziv odmah na sledećem ekranu.',
    trustList: [
      { icon: '◆', text: 'Potpuna anonimnost, ugrađena u sistem' },
      { icon: '✓', text: 'Nula iskustva potrebno' },
      { icon: '○', text: 'Nula troškova unapred, ikad' },
      { icon: '→', text: 'Odgovor za 5 minuta' },
    ],
    successTitle: 'Primili smo tvoju prijavu',
    successBody: 'Stariji član tima je pregleda i odgovara za 5 minuta. Ako postoji fit, biraš termin odmah.',
    dqReferral: 'Ako znaš nekoga ko bi odgovarao - nagradimo preporuke.',
    dq: {
      gender: { h: 'Radimo isključivo sa kreatoricama', b: 'Cela naša operacija - od strategije do skaliranja - izgrađena je specifično za kreatorice. Zahvaljujemo na iskrenosti i radije ćemo ti to reći odmah nego da gubimo tvoje vreme.' },
      'age-over': { h: 'Naš trenutni program je za određeni uzrasni opseg', b: 'Naš program lansiranja je trenutno skoopiran za specifičan uzrasni opseg. To nije refleksija tebe - već kako je ovaj program dizajniran. Ako se situacija promeni, uvek možeš da se vratiš.' },
      fit: { h: 'Trenutno nije pravi fit', b: 'Na osnovu onoga što si podelio/la, naš program punog upravljanja trenutno nije pravi match. Radije ćemo ti to reći odmah nego trošiti tvoje vreme. Ako se situacija promeni, vrata su otvorena.' },
    },
    // Step 1
    step1Title: 'Počnimo ovde - 60 sekundi',
    labelFirstName: 'Ime *',
    placeholderFirstName: 'Tvoje ime',
    labelEmail: 'Email *',
    labelPhone: 'Telefon *',
    phoneNote: '◆ Koristimo samo za potvrdu poziva. Nikad nije podeljen.',
    btnNext: 'Nastavi',
    micro1: '60 sekundi · Potpuno privatno · Bez obaveza',
    // Step 2
    step2Title: 'Malo o tebi',
    step2Sub: 'Bez biografije, bez portfolija. Samo osnove da znamo kako da gradimo za tebe.',
    labelServiceType: 'Šta tražiš? *',
    cardFullMgmt: { title: 'Puno upravljanje', sub: 'Gradimo i vodimo sve' },
    cardDmca: { title: 'Samo zaštita sadržaja', sub: 'DMCA i uklanjanje curenja' },
    cardNotSure: { title: 'Nisam sigurna', sub: 'Pomoći ćemo ti da odlučiš' },
    labelGender: 'Pol *',
    pillFemale: 'Ženski', pillMale: 'Muški', pillNonBinary: 'Non-binary',
    labelAge: 'Godine *',
    placeholderAge: 'Tvoje godine',
    ageNote: 'Program je otvoren za prijave 18–35 godina.',
    labelCountry: 'Odakle si? *',
    labelGoal: 'Šta zapravo tražiš? *',
    goalReplaceJob: 'Zamena posla', goalFinFreedom: 'Finansijska sloboda', goalAutonomy: 'Izgraditi nešto svoje', goalExploring: 'Još istražujem',
    btnBack: '← Nazad',
    // Step 3
    step3Title: 'Odakle krećeš',
    step3Sub: 'Nema pogrešnih odgovora. Potpisujemo kreatorice na svakom nivou - ovo samo oblikuje plan.',
    labelPlatform: 'Tvoja glavna platforma *',
    pillOther: 'Ostalo',
    labelHandle: 'Tvoj handle na toj platformi *',
    placeholderHandle: '@tvojhandle',
    labelOfStatus: 'Trenutni status na OnlyFans *',
    pillNotStarted: 'Nisam počela', pillSettingUp: 'Postavljam',
    labelAgency: 'Da li si radila sa OF agencijom ranije? *',
    pillAgencyNo: 'Ne, nova sam', pillAgencyPast: 'Da, ranije', pillAgencyCurrent: 'Da, trenutno sam potpisana',
    labelContent: 'Sadržaj koji si spremna da kreiraš *',
    cardSfw: { title: 'Samo SFW', sub: 'Ništa sugestivno' },
    cardImplicit: { title: 'Implicitno', sub: 'Sugestivno, topless, lingeri' },
    cardExplicit: { title: 'Eksplicitno', sub: 'Puno golišavost / eksplicitno' },
    cardContentNotSure: { title: 'Nisam sigurna', sub: 'Razgovaraćemo' },
    labelHours: 'Sati koje možeš da posvetiš nedeljno *',
    pillUnder10: 'Ispod 10h',
    labelGoalDetail: 'Kako izgleda tvoj život za 12 meseci?',
    optional: 'opciono',
    placeholderGoalDetail: 'Jedna rečenica je dovoljno',
    // Step 4
    step4Title: 'Poslednji korak',
    ageConfirmLabel: 'Imam 18+ godina i razumem da se radi o sadržaju za odrasle *',
    marketingLabel: 'Slažem se da primam savete i ažuriranja putem email/SMS-a',
    trustStrip: ['◆ Nula curenja identiteta u 4+ godina', '◆ Nula troškova unapred, ikad', '◆ 140+ klijenata, $11M+ godišnji prihod'],
    btnSending: 'Šaljemo...', btnSubmit: 'Pošalji prijavu →',
    micro4: 'Ako odgovaraš, biraš termin odmah na sledećem ekranu',
    // Errors
    errRequired: 'Obavezno polje',
    errEmail: 'Unesite ispravnu email adresu',
    errPhone: 'Unesite ispravan broj telefona',
    errAge: 'Unesite vaše godine',
    errAgeConfirm: 'Morate potvrditi da imate 18+ godina',
    errNetwork: 'Greška mreže. Proverite konekciju i pokušajte ponovo.',
  },
  en: {
    testimonials: [
      { quote: '"I was convinced every agency was a scam. What changed my mind was how they protected my identity before we even talked about numbers."', cite: 'K.R. - Lifestyle, Top 0.05%' },
      { quote: '"I have zero followers and I\'m completely anonymous — that was the condition. They built everything around it. My family still thinks I work in marketing."', cite: 'S.T. - Fitness, Top 0.01%' },
      { quote: '"I almost didn\'t apply. A year later I have a team that does everything for me while I earn."', cite: 'A.J. - Glamour, Top 0.3%' },
    ],
    steps: ['Contact', 'About You', 'Your Work', 'Final'],
    chapterLabel: 'Apply',
    sectionTitle: 'Apply Now. 60 Seconds.',
    sectionSub: 'We accept fewer than 2% of applications. If you qualify, you choose a discovery call slot immediately on the next screen.',
    trustList: [
      { icon: '◆', text: 'Full anonymity, built into the system' },
      { icon: '✓', text: 'Zero experience required' },
      { icon: '○', text: 'Zero upfront costs, ever' },
      { icon: '→', text: 'Response within 5 minutes' },
    ],
    successTitle: 'We received your application',
    successBody: 'A senior team member is reviewing it and will respond within 5 minutes. If there\'s a fit, you choose a slot immediately.',
    dqReferral: 'If you know someone who would qualify — we reward referrals.',
    dq: {
      gender: { h: 'We work exclusively with female creators', b: 'Our entire operation — from strategy to scaling — is built specifically for female creators. We appreciate your honesty and would rather tell you now than waste your time.' },
      'age-over': { h: 'Our current program targets a specific age range', b: 'Our launch program is currently scoped for a specific age range. This isn\'t a reflection on you — it\'s how the program is designed. If things change, you can always come back.' },
      fit: { h: 'Not the right fit right now', b: 'Based on what you shared, our full management program isn\'t the right match at this time. We\'d rather tell you now than waste your time. If things change, the door is open.' },
    },
    step1Title: 'Let\'s start here — 60 seconds',
    labelFirstName: 'First Name *',
    placeholderFirstName: 'Your name',
    labelEmail: 'Email *',
    labelPhone: 'Phone *',
    phoneNote: '◆ Used only to confirm calls. Never shared.',
    btnNext: 'Continue',
    micro1: '60 seconds · Fully private · No obligation',
    step2Title: 'A little about you',
    step2Sub: 'No bio, no portfolio. Just the basics so we know how to build for you.',
    labelServiceType: 'What are you looking for? *',
    cardFullMgmt: { title: 'Full Management', sub: 'We build and run everything' },
    cardDmca: { title: 'Content Protection Only', sub: 'DMCA and leak removal' },
    cardNotSure: { title: 'Not Sure', sub: 'We\'ll help you decide' },
    labelGender: 'Gender *',
    pillFemale: 'Female', pillMale: 'Male', pillNonBinary: 'Non-binary',
    labelAge: 'Age *',
    placeholderAge: 'Your age',
    ageNote: 'The program is open for applicants aged 18–35.',
    labelCountry: 'Where are you from? *',
    labelGoal: 'What are you really looking for? *',
    goalReplaceJob: 'Replace my job', goalFinFreedom: 'Financial freedom', goalAutonomy: 'Build something of my own', goalExploring: 'Still exploring',
    btnBack: '← Back',
    step3Title: 'Where you\'re starting from',
    step3Sub: 'No wrong answers. We sign creators at every level — this just shapes the plan.',
    labelPlatform: 'Your main platform *',
    pillOther: 'Other',
    labelHandle: 'Your handle on that platform *',
    placeholderHandle: '@yourhandle',
    labelOfStatus: 'Current OnlyFans status *',
    pillNotStarted: 'Haven\'t started', pillSettingUp: 'Setting up',
    labelAgency: 'Have you worked with an OF agency before? *',
    pillAgencyNo: 'No, I\'m new', pillAgencyPast: 'Yes, previously', pillAgencyCurrent: 'Yes, currently signed',
    labelContent: 'Content you\'re willing to create *',
    cardSfw: { title: 'SFW Only', sub: 'Nothing suggestive' },
    cardImplicit: { title: 'Implicit', sub: 'Suggestive, topless, lingerie' },
    cardExplicit: { title: 'Explicit', sub: 'Full nudity / explicit' },
    cardContentNotSure: { title: 'Not Sure', sub: 'We\'ll discuss it' },
    labelHours: 'Hours you can dedicate per week *',
    pillUnder10: 'Under 10h',
    labelGoalDetail: 'What does your life look like in 12 months?',
    optional: 'optional',
    placeholderGoalDetail: 'One sentence is enough',
    step4Title: 'Last step',
    ageConfirmLabel: 'I am 18+ years old and understand this involves adult content *',
    marketingLabel: 'I agree to receive tips and updates via email/SMS',
    trustStrip: ['◆ Zero identity leaks in 4+ years', '◆ Zero upfront costs, ever', '◆ 140+ clients, $11M+ annual revenue'],
    btnSending: 'Sending...', btnSubmit: 'Submit Application →',
    micro4: 'If you qualify, you choose a slot immediately on the next screen',
    errRequired: 'Required field',
    errEmail: 'Enter a valid email address',
    errPhone: 'Enter a valid phone number',
    errAge: 'Enter your age',
    errAgeConfirm: 'You must confirm you are 18+',
    errNetwork: 'Network error. Check your connection and try again.',
  },
  it: {
    testimonials: [
      { quote: '"Ero convinta che ogni agenzia fosse una truffa. Ciò che mi ha fatto cambiare idea è stato il modo in cui hanno protetto la mia identità prima ancora di parlare di numeri."', cite: 'K.R. - Lifestyle, Top 0.05%' },
      { quote: '"Non ho neanche un follower e sono completamente anonima — questa era la condizione. Hanno costruito tutto intorno a questo. La mia famiglia pensa ancora che lavori nel marketing."', cite: 'S.T. - Fitness, Top 0.01%' },
      { quote: '"Quasi non ho fatto domanda. Un anno dopo ho un team che fa tutto per me mentre io guadagno."', cite: 'A.J. - Glamour, Top 0.3%' },
    ],
    steps: ['Contatto', 'Su di te', 'Il tuo lavoro', 'Finale'],
    chapterLabel: 'Candidatura',
    sectionTitle: 'Candidati Ora. 60 Secondi.',
    sectionSub: 'Accettiamo meno del 2% delle candidature. Se sei idonea, scegli subito il tuo slot per una discovery call nella schermata successiva.',
    trustList: [
      { icon: '◆', text: 'Anonimato totale, integrato nel sistema' },
      { icon: '✓', text: 'Zero esperienza richiesta' },
      { icon: '○', text: 'Zero costi anticipati, mai' },
      { icon: '→', text: 'Risposta entro 5 minuti' },
    ],
    successTitle: 'Abbiamo ricevuto la tua candidatura',
    successBody: 'Un membro senior del team la sta esaminando e risponderà entro 5 minuti. Se c\'è compatibilità, scegli subito uno slot.',
    dqReferral: 'Se conosci qualcuno che potrebbe essere idoneo — premiamo le segnalazioni.',
    dq: {
      gender: { h: 'Lavoriamo esclusivamente con creator donne', b: 'Tutta la nostra operazione — dalla strategia alla scalabilità — è costruita specificamente per le creator donne. Apprezziamo la tua onestà e preferiamo dirtelo ora piuttosto che sprecare il tuo tempo.' },
      'age-over': { h: 'Il nostro programma attuale è per una fascia d\'età specifica', b: 'Il nostro programma di lancio è attualmente pensato per una fascia d\'età specifica. Non è un giudizio su di te — è come è progettato il programma. Se le cose cambiano, puoi sempre tornare.' },
      fit: { h: 'Non è il momento giusto', b: 'In base a quello che hai condiviso, il nostro programma di gestione completa non è la soluzione giusta in questo momento. Preferiamo dirtelo ora piuttosto che sprecare il tuo tempo. Se le cose cambiano, la porta è aperta.' },
    },
    step1Title: 'Iniziamo qui — 60 secondi',
    labelFirstName: 'Nome *',
    placeholderFirstName: 'Il tuo nome',
    labelEmail: 'Email *',
    labelPhone: 'Telefono *',
    phoneNote: '◆ Usato solo per confermare le chiamate. Mai condiviso.',
    btnNext: 'Continua',
    micro1: '60 secondi · Completamente privato · Senza impegno',
    step2Title: 'Un po\' su di te',
    step2Sub: 'Nessuna biografia, nessun portfolio. Solo le basi per sapere come costruire per te.',
    labelServiceType: 'Cosa stai cercando? *',
    cardFullMgmt: { title: 'Gestione Completa', sub: 'Costruiamo e gestiamo tutto' },
    cardDmca: { title: 'Solo Protezione Contenuti', sub: 'DMCA e rimozione fughe' },
    cardNotSure: { title: 'Non Sono Sicura', sub: 'Ti aiuteremo a decidere' },
    labelGender: 'Genere *',
    pillFemale: 'Femminile', pillMale: 'Maschile', pillNonBinary: 'Non-binary',
    labelAge: 'Età *',
    placeholderAge: 'La tua età',
    ageNote: 'Il programma è aperto a candidature dai 18 ai 35 anni.',
    labelCountry: 'Da dove vieni? *',
    labelGoal: 'Cosa stai davvero cercando? *',
    goalReplaceJob: 'Sostituire il lavoro', goalFinFreedom: 'Libertà finanziaria', goalAutonomy: 'Costruire qualcosa di mio', goalExploring: 'Sto ancora esplorando',
    btnBack: '← Indietro',
    step3Title: 'Da dove parti',
    step3Sub: 'Non ci sono risposte sbagliate. Firmiamo creator a ogni livello — questo modella solo il piano.',
    labelPlatform: 'La tua piattaforma principale *',
    pillOther: 'Altro',
    labelHandle: 'Il tuo handle su quella piattaforma *',
    placeholderHandle: '@tuohandle',
    labelOfStatus: 'Stato attuale su OnlyFans *',
    pillNotStarted: 'Non ho iniziato', pillSettingUp: 'Sto configurando',
    labelAgency: 'Hai mai lavorato con un\'agenzia OF in precedenza? *',
    pillAgencyNo: 'No, sono nuova', pillAgencyPast: 'Sì, in passato', pillAgencyCurrent: 'Sì, attualmente firmata',
    labelContent: 'Contenuti che sei disposta a creare *',
    cardSfw: { title: 'Solo SFW', sub: 'Niente di suggestivo' },
    cardImplicit: { title: 'Implicito', sub: 'Suggestivo, topless, lingerie' },
    cardExplicit: { title: 'Esplicito', sub: 'Nudità completa / esplicito' },
    cardContentNotSure: { title: 'Non Sono Sicura', sub: 'Ne discuteremo' },
    labelHours: 'Ore che puoi dedicare a settimana *',
    pillUnder10: 'Meno di 10h',
    labelGoalDetail: 'Come sarà la tua vita tra 12 mesi?',
    optional: 'opzionale',
    placeholderGoalDetail: 'Una frase è sufficiente',
    step4Title: 'Ultimo passo',
    ageConfirmLabel: 'Ho 18+ anni e capisco che si tratta di contenuti per adulti *',
    marketingLabel: 'Accetto di ricevere consigli e aggiornamenti via email/SMS',
    trustStrip: ['◆ Zero fughe di identità in 4+ anni', '◆ Zero costi anticipati, mai', '◆ 140+ clienti, $11M+ di fatturato annuo'],
    btnSending: 'Invio...', btnSubmit: 'Invia Candidatura →',
    micro4: 'Se sei idonea, scegli subito uno slot nella schermata successiva',
    errRequired: 'Campo obbligatorio',
    errEmail: 'Inserisci un indirizzo email valido',
    errPhone: 'Inserisci un numero di telefono valido',
    errAge: 'Inserisci la tua età',
    errAgeConfirm: 'Devi confermare di avere 18+',
    errNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
};

export default function ApplyForm() {
  const lang = useLang();
  const t = T[lang] || T.sr;

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [disqualified, setDisqualified] = useState(false);
  const [dqReason, setDqReason] = useState('fit');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    firstName: '',
    email: '',
    countryCode: '+381',
    phone: '',
    serviceType: '',
    gender: '',
    age: '',
    country: '',
    goal: '',
    platform: '',
    handle: '',
    ofStatus: '',
    agency: '',
    content: '',
    hours: '',
    goalDetail: '',
    ageConfirm: false,
    marketingConsent: false,
  });

  // Draft persistence
  useEffect(() => {
    try {
      const raw = localStorage.getItem('da_apply_v1');
      if (raw) {
        const draft = JSON.parse(raw);
        setForm(f => ({ ...f, ...draft }));
        if (draft.step) setStep(draft.step);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('da_apply_v1', JSON.stringify({ ...form, step }));
    } catch {}
  }, [form, step]);

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: '' }));
  }

  function scrollToForm() {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function goStep(n) {
    setStep(n);
    setTimeout(scrollToForm, 100);
  }

  // Validation
  function validate(fields) {
    const errs = {};
    fields.forEach(f => {
      const v = typeof form[f] === 'boolean' ? form[f] : (form[f] || '').trim();
      if (!v || v === '') errs[f] = t.errRequired;
    });
    if (fields.includes('email') && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.errEmail;
    }
    if (fields.includes('phone') && form.phone && form.phone.replace(/\D/g, '').length < 6) {
      errs.phone = t.errPhone;
    }
    if (fields.includes('age') && form.age && (isNaN(parseInt(form.age)) || parseInt(form.age) < 1)) {
      errs.age = t.errAge;
    }
    if (fields.includes('ageConfirm') && !form.ageConfirm) {
      errs.ageConfirm = t.errAgeConfirm;
    }
    return errs;
  }

  function checkDisqualify() {
    const age = parseInt(form.age, 10);
    if (form.gender && form.gender !== 'female') { setDqReason('gender'); return true; }
    if (!isNaN(age) && (age < 18 || age > 35)) { setDqReason(age > 35 ? 'age-over' : 'fit'); return true; }
    if (form.content === 'sfw') { setDqReason('fit'); return true; }
    if (form.hours === '<10' && (form.ofStatus === 'not-started' || form.ofStatus === 'setting-up')) { setDqReason('fit'); return true; }
    return false;
  }

  function nextStep1() {
    const errs = validate(['firstName', 'email', 'phone']);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    goStep(2);
  }

  function nextStep2() {
    const errs = validate(['serviceType', 'gender', 'age', 'country', 'goal']);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (form.serviceType !== 'dmca-only' && checkDisqualify()) {
      setDisqualified(true); return;
    }
    goStep(3);
  }

  function nextStep3() {
    const errs = validate(['platform', 'handle', 'ofStatus', 'agency', 'content', 'hours']);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (form.serviceType !== 'dmca-only' && checkDisqualify()) {
      setDisqualified(true); return;
    }
    goStep(4);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(['ageConfirm']);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Error');
      localStorage.removeItem('da_apply_v1');
      setSubmitted(true);
    } catch {
      setSubmitError(t.errNetwork);
    } finally {
      setSending(false);
    }
  }

  // Pill selector component
  function Pill({ field, value, label }) {
    const active = form[field] === value;
    return (
      <button
        type="button"
        onClick={() => set(field, value)}
        className={`apply-pill${active ? ' apply-pill--active' : ''}`}
      >
        {label}
      </button>
    );
  }

  function Card({ field, value, title, sub }) {
    const active = form[field] === value;
    return (
      <button
        type="button"
        onClick={() => set(field, value)}
        className={`apply-card${active ? ' apply-card--active' : ''}`}
      >
        <span className="apply-card-title">{title}</span>
        {sub && <span className="apply-card-sub">{sub}</span>}
      </button>
    );
  }

  function FieldErr({ field }) {
    return errors[field] ? <p className="apply-field-err">{errors[field]}</p> : null;
  }

  const testimonial = t.testimonials[(step - 1) % t.testimonials.length];

  return (
    <section id="apply" className="section-apply" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="chapter-label">{t.chapterLabel}</span>
          <h2 className="section-title">{t.sectionTitle}</h2>
          <p className="section-sub">{t.sectionSub}</p>
        </div>

        <div className="apply-layout">
          {/* Left: copy */}
          <div className="apply-left">
            <div className="apply-trust-list">
              {t.trustList.map(it => (
                <div key={it.text} className="apply-trust-item">
                  <span className="apply-trust-icon">{it.icon}</span>
                  <span>{it.text}</span>
                </div>
              ))}
            </div>
            <blockquote className="apply-testimonial">
              <p>{testimonial.quote}</p>
              <cite>{testimonial.cite}</cite>
            </blockquote>
          </div>

          {/* Right: form card */}
          <div className="apply-right">
            {submitted ? (
              <div className="apply-success">
                <div className="apply-success-icon">✓</div>
                <h3>{t.successTitle}</h3>
                <p>{t.successBody}</p>
              </div>
            ) : disqualified ? (
              <div className="apply-disqualify">
                <h3>{t.dq[dqReason]?.h}</h3>
                <p>{t.dq[dqReason]?.b}</p>
                <p className="apply-disqualify-sub">{t.dqReferral}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Progress dots */}
                <div className="apply-progress">
                  {t.steps.map((label, i) => {
                    const n = i + 1;
                    const done = step > n;
                    const active = step === n;
                    return (
                      <div key={n} className="apply-progress-item">
                        <div className={`apply-dot${done ? ' apply-dot--done' : active ? ' apply-dot--active' : ''}`}>
                          {done ? '✓' : n}
                        </div>
                        {i < t.steps.length - 1 && (
                          <div className={`apply-conn${done ? ' apply-conn--filled' : ''}`} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <div className="apply-step">
                    <p className="apply-step-title">{t.step1Title}</p>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelFirstName}</label>
                      <input className={`apply-input${errors.firstName ? ' apply-input--err' : ''}`} type="text" placeholder={t.placeholderFirstName} value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                      <FieldErr field="firstName" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelEmail}</label>
                      <input className={`apply-input${errors.email ? ' apply-input--err' : ''}`} type="email" placeholder="email@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      <FieldErr field="email" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelPhone}</label>
                      <div className="apply-phone-row">
                        <select className="apply-country-select" value={form.countryCode} onChange={e => set('countryCode', e.target.value)}>
                          <option value="+381">🇷🇸 +381</option>
                          <option value="+385">🇭🇷 +385</option>
                          <option value="+386">🇸🇮 +386</option>
                          <option value="+387">🇧🇦 +387</option>
                          <option value="+382">🇲🇪 +382</option>
                          <option value="+389">🇲🇰 +389</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="intl">🌐 {t.pillOther}</option>
                        </select>
                        <input className={`apply-input${errors.phone ? ' apply-input--err' : ''}`} type="tel" placeholder="060 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                      </div>
                      <FieldErr field="phone" />
                      <p className="apply-field-note">{t.phoneNote}</p>
                    </div>

                    <button type="button" className="apply-btn-next" onClick={nextStep1}>
                      {t.btnNext} <span>→</span>
                    </button>
                    <p className="apply-micro">{t.micro1}</p>
                  </div>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <div className="apply-step">
                    <p className="apply-step-title">{t.step2Title}</p>
                    <p className="apply-step-sub">{t.step2Sub}</p>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelServiceType}</label>
                      <div className="apply-cards">
                        <Card field="serviceType" value="full-management" title={t.cardFullMgmt.title} sub={t.cardFullMgmt.sub} />
                        <Card field="serviceType" value="dmca-only" title={t.cardDmca.title} sub={t.cardDmca.sub} />
                        <Card field="serviceType" value="not-sure" title={t.cardNotSure.title} sub={t.cardNotSure.sub} />
                      </div>
                      <FieldErr field="serviceType" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelGender}</label>
                      <div className="apply-pills">
                        <Pill field="gender" value="female" label={t.pillFemale} />
                        <Pill field="gender" value="male" label={t.pillMale} />
                        <Pill field="gender" value="non-binary" label={t.pillNonBinary} />
                      </div>
                      <FieldErr field="gender" />
                    </div>

                    <div className="apply-field apply-field--narrow">
                      <label className="apply-label">{t.labelAge}</label>
                      <input className={`apply-input${errors.age ? ' apply-input--err' : ''}`} type="number" placeholder={t.placeholderAge} min="16" max="99" value={form.age} onChange={e => set('age', e.target.value)} />
                      <FieldErr field="age" />
                      <p className="apply-field-note">{t.ageNote}</p>
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelCountry}</label>
                      <div className="apply-pills">
                        {['Srbija','Hrvatska','Slovenija','Bosna','Crna Gora','Makedonija','SAD','Kanada','UK','Australija','Nemacka','Francuska','Ostalo EU'].map(c => (
                          <Pill key={c} field="country" value={c} label={c} />
                        ))}
                      </div>
                      <FieldErr field="country" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelGoal}</label>
                      <div className="apply-pills">
                        <Pill field="goal" value="replace-job" label={t.goalReplaceJob} />
                        <Pill field="goal" value="financial-freedom" label={t.goalFinFreedom} />
                        <Pill field="goal" value="autonomy" label={t.goalAutonomy} />
                        <Pill field="goal" value="still-exploring" label={t.goalExploring} />
                      </div>
                      <FieldErr field="goal" />
                    </div>

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(1)}>{t.btnBack}</button>
                      <button type="button" className="apply-btn-next" onClick={nextStep2}>{t.btnNext} →</button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 ── */}
                {step === 3 && (
                  <div className="apply-step">
                    <p className="apply-step-title">{t.step3Title}</p>
                    <p className="apply-step-sub">{t.step3Sub}</p>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelPlatform}</label>
                      <div className="apply-pills">
                        <Pill field="platform" value="instagram" label="Instagram" />
                        <Pill field="platform" value="tiktok" label="TikTok" />
                        <Pill field="platform" value="x" label="X (Twitter)" />
                        <Pill field="platform" value="other" label={t.pillOther} />
                      </div>
                      <FieldErr field="platform" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelHandle}</label>
                      <input className={`apply-input${errors.handle ? ' apply-input--err' : ''}`} type="text" placeholder={t.placeholderHandle} value={form.handle} onChange={e => set('handle', e.target.value)} />
                      <FieldErr field="handle" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelOfStatus}</label>
                      <div className="apply-pills">
                        <Pill field="ofStatus" value="not-started" label={t.pillNotStarted} />
                        <Pill field="ofStatus" value="setting-up" label={t.pillSettingUp} />
                        <Pill field="ofStatus" value="under-5k" label="< $5K/mo" />
                        <Pill field="ofStatus" value="5k-25k" label="$5K–$25K/mo" />
                        <Pill field="ofStatus" value="25k-plus" label="$25K+/mo" />
                      </div>
                      <FieldErr field="ofStatus" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelAgency}</label>
                      <div className="apply-pills">
                        <Pill field="agency" value="no" label={t.pillAgencyNo} />
                        <Pill field="agency" value="past" label={t.pillAgencyPast} />
                        <Pill field="agency" value="currently" label={t.pillAgencyCurrent} />
                      </div>
                      <FieldErr field="agency" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelContent}</label>
                      <div className="apply-cards">
                        <Card field="content" value="sfw" title={t.cardSfw.title} sub={t.cardSfw.sub} />
                        <Card field="content" value="implicit" title={t.cardImplicit.title} sub={t.cardImplicit.sub} />
                        <Card field="content" value="explicit" title={t.cardExplicit.title} sub={t.cardExplicit.sub} />
                        <Card field="content" value="not-sure" title={t.cardContentNotSure.title} sub={t.cardContentNotSure.sub} />
                      </div>
                      <FieldErr field="content" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelHours}</label>
                      <div className="apply-pills">
                        <Pill field="hours" value="<10" label={t.pillUnder10} />
                        <Pill field="hours" value="10-20" label="10–20h" />
                        <Pill field="hours" value="20-30" label="20–30h" />
                        <Pill field="hours" value="30+" label="30+h" />
                      </div>
                      <FieldErr field="hours" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">{t.labelGoalDetail} <span style={{color:'var(--color-text-muted)'}}>{t.optional}</span></label>
                      <input className="apply-input" type="text" placeholder={t.placeholderGoalDetail} value={form.goalDetail} onChange={e => set('goalDetail', e.target.value)} />
                    </div>

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(2)}>{t.btnBack}</button>
                      <button type="button" className="apply-btn-next" onClick={nextStep3}>{t.btnNext} →</button>
                    </div>
                  </div>
                )}

                {/* ── STEP 4 ── */}
                {step === 4 && (
                  <div className="apply-step">
                    <p className="apply-step-title">{t.step4Title}</p>

                    <div className="apply-field">
                      <label className="apply-checkbox-label">
                        <input type="checkbox" className="apply-checkbox" checked={form.ageConfirm} onChange={e => set('ageConfirm', e.target.checked)} />
                        <span className="apply-checkbox-box" />
                        <span>{t.ageConfirmLabel}</span>
                      </label>
                      <FieldErr field="ageConfirm" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-checkbox-label">
                        <input type="checkbox" className="apply-checkbox" checked={form.marketingConsent} onChange={e => set('marketingConsent', e.target.checked)} />
                        <span className="apply-checkbox-box" />
                        <span>{t.marketingLabel} <span style={{color:'var(--color-text-muted)'}}>{t.optional}</span></span>
                      </label>
                    </div>

                    <div className="apply-trust-strip">
                      {t.trustStrip.map(s => <span key={s}>{s}</span>)}
                    </div>

                    {submitError && <p className="apply-submit-err">{submitError}</p>}

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(3)}>{t.btnBack}</button>
                      <button type="submit" className="apply-btn-submit" disabled={sending}>
                        {sending ? t.btnSending : t.btnSubmit}
                      </button>
                    </div>

                    <p className="apply-micro" style={{textAlign:'center',marginTop:12}}>
                      <span className="pulse-dot" style={{display:'inline-block',marginRight:6}} />
                      {t.micro4}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
