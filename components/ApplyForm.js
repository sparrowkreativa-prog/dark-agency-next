'use client';
import { useState, useEffect, useRef } from 'react';

const TESTIMONIALS = [
  { quote: '"Bila sam ubeđena da je svaka agencija prevara. Ono što me je promenilo bio je način na koji su zaštitili moj identitet pre nego što smo uopšte razgovarali o brojevima."', cite: 'K.R. - Lifestyle, Top 0.05%' },
  { quote: '"Nemam ni jednog pratioca i potpuno sam anonimna - to je bio uslov. Izgradili su sve oko toga. Moja porodica i dalje misli da radim u marketingu."', cite: 'S.T. - Fitness, Top 0.01%' },
  { quote: '"Skoro nisam aplicirala. Godinu dana kasnije imam tim koji radi sve za mene, dok ja zarađujem."', cite: 'A.J. - Glamour, Top 0.3%' },
];

const STEPS = ['Kontakt', 'O tebi', 'Tvoj rad', 'Finalno'];

export default function ApplyForm() {
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
      if (!v || v === '') errs[f] = 'Obavezno polje';
    });
    if (fields.includes('email') && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Unesite ispravnu email adresu';
    }
    if (fields.includes('phone') && form.phone && form.phone.replace(/\D/g, '').length < 6) {
      errs.phone = 'Unesite ispravan broj telefona';
    }
    if (fields.includes('age') && form.age && (isNaN(parseInt(form.age)) || parseInt(form.age) < 1)) {
      errs.age = 'Unesite vaše godine';
    }
    if (fields.includes('ageConfirm') && !form.ageConfirm) {
      errs.ageConfirm = 'Morate potvrditi da imate 18+ godina';
    }
    return errs;
  }

  function checkDisqualify() {
    const age = parseInt(form.age, 10);
    const GEO_ALLOW = ['Srbija', 'Hrvatska', 'Slovenija', 'Bosna', 'Crna Gora', 'Makedonija', 'SAD', 'Kanada', 'UK', 'Australija', 'Nemacka', 'Francuska', 'Ostalo EU'];
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
      // In production, POST to your API endpoint
      await new Promise(r => setTimeout(r, 1200)); // simulate network
      localStorage.removeItem('da_apply_v1');
      setSubmitted(true);
    } catch {
      setSubmitError('Greška mreže. Proverite konekciju i pokušajte ponovo.');
    } finally {
      setSending(false);
    }
  }

  const dqCopy = {
    gender: {
      h: 'Radimo isključivo sa kreatoricama',
      b: 'Cela naša operacija - od strategije do skaliranja - izgrađena je specifično za kreatorice. Zahvaljujemo na iskrenosti i radije ćemo ti to reći odmah nego da gubimo tvoje vreme.',
    },
    'age-over': {
      h: 'Naš trenutni program je za određeni uzrasni opseg',
      b: 'Naš program lansiranja je trenutno skoopiran za specifičan uzrasni opseg. To nije refleksija tebe - već kako je ovaj program dizajniran. Ako se situacija promeni, uvek možeš da se vratiš.',
    },
    fit: {
      h: 'Trenutno nije pravi fit',
      b: 'Na osnovu onoga što si podelio/la, naš program punog upravljanja trenutno nije pravi match. Radije ćemo ti to reći odmah nego trošiti tvoje vreme. Ako se situacija promeni, vrata su otvorena.',
    },
  };

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

  const testimonial = TESTIMONIALS[(step - 1) % TESTIMONIALS.length];

  return (
    <section id="apply" className="section-apply" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="chapter-label">Prijava</span>
          <h2 className="section-title">Prijavi Se. 60 Sekundi.</h2>
          <p className="section-sub">Primamo manje od 2% prijava. Ako odgovaraš, biraš termin za discovery poziv odmah na sledećem ekranu.</p>
        </div>

        <div className="apply-layout">
          {/* Left: copy */}
          <div className="apply-left">
            <div className="apply-trust-list">
              {[
                { icon: '◆', text: 'Potpuna anonimnost, ugrađena u sistem' },
                { icon: '✓', text: 'Nula iskustva potrebno' },
                { icon: '○', text: 'Nula troškova unapred, ikad' },
                { icon: '→', text: 'Odgovor za 5 minuta' },
              ].map(it => (
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
                <h3>Primili smo tvoju prijavu</h3>
                <p>Stariji član tima je pregleda i odgovara za 5 minuta. Ako postoji fit, biraš termin odmah.</p>
              </div>
            ) : disqualified ? (
              <div className="apply-disqualify">
                <h3>{dqCopy[dqReason]?.h}</h3>
                <p>{dqCopy[dqReason]?.b}</p>
                <p className="apply-disqualify-sub">Ako znaš nekoga ko bi odgovarao - nagradimo preporuke.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Progress dots */}
                <div className="apply-progress">
                  {STEPS.map((label, i) => {
                    const n = i + 1;
                    const done = step > n;
                    const active = step === n;
                    return (
                      <div key={n} className="apply-progress-item">
                        <div className={`apply-dot${done ? ' apply-dot--done' : active ? ' apply-dot--active' : ''}`}>
                          {done ? '✓' : n}
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className={`apply-conn${done ? ' apply-conn--filled' : ''}`} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* ── STEP 1 ── */}
                {step === 1 && (
                  <div className="apply-step">
                    <p className="apply-step-title">Počnimo ovde - 60 sekundi</p>

                    <div className="apply-field">
                      <label className="apply-label">Ime *</label>
                      <input className={`apply-input${errors.firstName ? ' apply-input--err' : ''}`} type="text" placeholder="Tvoje ime" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                      <FieldErr field="firstName" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Email *</label>
                      <input className={`apply-input${errors.email ? ' apply-input--err' : ''}`} type="email" placeholder="tvoj@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      <FieldErr field="email" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Telefon *</label>
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
                          <option value="intl">🌐 Ostalo</option>
                        </select>
                        <input className={`apply-input${errors.phone ? ' apply-input--err' : ''}`} type="tel" placeholder="060 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                      </div>
                      <FieldErr field="phone" />
                      <p className="apply-field-note">◆ Koristimo samo za potvrdu poziva. Nikad nije podeljen.</p>
                    </div>

                    <button type="button" className="apply-btn-next" onClick={nextStep1}>
                      Nastavi <span>→</span>
                    </button>
                    <p className="apply-micro">60 sekundi · Potpuno privatno · Bez obaveza</p>
                  </div>
                )}

                {/* ── STEP 2 ── */}
                {step === 2 && (
                  <div className="apply-step">
                    <p className="apply-step-title">Malo o tebi</p>
                    <p className="apply-step-sub">Bez biografije, bez portfolija. Samo osnove da znamo kako da gradimo za tebe.</p>

                    <div className="apply-field">
                      <label className="apply-label">Šta tražiš? *</label>
                      <div className="apply-cards">
                        <Card field="serviceType" value="full-management" title="Puno upravljanje" sub="Gradimo i vodimo sve" />
                        <Card field="serviceType" value="dmca-only" title="Samo zaštita sadržaja" sub="DMCA i uklanjanje curenja" />
                        <Card field="serviceType" value="not-sure" title="Nisam sigurna" sub="Pomoći ćemo ti da odlučiš" />
                      </div>
                      <FieldErr field="serviceType" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Pol *</label>
                      <div className="apply-pills">
                        <Pill field="gender" value="female" label="Ženski" />
                        <Pill field="gender" value="male" label="Muški" />
                        <Pill field="gender" value="non-binary" label="Non-binary" />
                      </div>
                      <FieldErr field="gender" />
                    </div>

                    <div className="apply-field apply-field--narrow">
                      <label className="apply-label">Godine *</label>
                      <input className={`apply-input${errors.age ? ' apply-input--err' : ''}`} type="number" placeholder="Tvoje godine" min="16" max="99" value={form.age} onChange={e => set('age', e.target.value)} />
                      <FieldErr field="age" />
                      <p className="apply-field-note">Program je otvoren za prijave 18–35 godina.</p>
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Odakle si? *</label>
                      <div className="apply-pills">
                        {['Srbija','Hrvatska','Slovenija','Bosna','Crna Gora','Makedonija','SAD','Kanada','UK','Australija','Nemacka','Francuska','Ostalo EU'].map(c => (
                          <Pill key={c} field="country" value={c} label={c} />
                        ))}
                      </div>
                      <FieldErr field="country" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Šta zapravo tražiš? *</label>
                      <div className="apply-pills">
                        <Pill field="goal" value="replace-job" label="Zamena posla" />
                        <Pill field="goal" value="financial-freedom" label="Finansijska sloboda" />
                        <Pill field="goal" value="autonomy" label="Izgraditi nešto svoje" />
                        <Pill field="goal" value="still-exploring" label="Još istražujem" />
                      </div>
                      <FieldErr field="goal" />
                    </div>

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(1)}>← Nazad</button>
                      <button type="button" className="apply-btn-next" onClick={nextStep2}>Nastavi →</button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 ── */}
                {step === 3 && (
                  <div className="apply-step">
                    <p className="apply-step-title">Odakle krećeš</p>
                    <p className="apply-step-sub">Nema pogrešnih odgovora. Potpisujemo kreatorice na svakom nivou - ovo samo oblikuje plan.</p>

                    <div className="apply-field">
                      <label className="apply-label">Tvoja glavna platforma *</label>
                      <div className="apply-pills">
                        <Pill field="platform" value="instagram" label="Instagram" />
                        <Pill field="platform" value="tiktok" label="TikTok" />
                        <Pill field="platform" value="x" label="X (Twitter)" />
                        <Pill field="platform" value="other" label="Ostalo" />
                      </div>
                      <FieldErr field="platform" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Tvoj handle na toj platformi *</label>
                      <input className={`apply-input${errors.handle ? ' apply-input--err' : ''}`} type="text" placeholder="@tvojhandle" value={form.handle} onChange={e => set('handle', e.target.value)} />
                      <FieldErr field="handle" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Trenutni status na OnlyFans *</label>
                      <div className="apply-pills">
                        <Pill field="ofStatus" value="not-started" label="Nisam počela" />
                        <Pill field="ofStatus" value="setting-up" label="Postavljam" />
                        <Pill field="ofStatus" value="under-5k" label="Ispod $5K/mes" />
                        <Pill field="ofStatus" value="5k-25k" label="$5K–$25K/mes" />
                        <Pill field="ofStatus" value="25k-plus" label="$25K+/mes" />
                      </div>
                      <FieldErr field="ofStatus" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Da li si radila sa OF agencijom ranije? *</label>
                      <div className="apply-pills">
                        <Pill field="agency" value="no" label="Ne, nova sam" />
                        <Pill field="agency" value="past" label="Da, ranije" />
                        <Pill field="agency" value="currently" label="Da, trenutno sam potpisana" />
                      </div>
                      <FieldErr field="agency" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Sadržaj koji si spremna da kreiraš *</label>
                      <div className="apply-cards">
                        <Card field="content" value="sfw" title="Samo SFW" sub="Ništa sugestivno" />
                        <Card field="content" value="implicit" title="Implicitno" sub="Sugestivno, topless, lingeri" />
                        <Card field="content" value="explicit" title="Eksplicitno" sub="Puno golišavost / eksplicitno" />
                        <Card field="content" value="not-sure" title="Nisam sigurna" sub="Razgovaraćemo" />
                      </div>
                      <FieldErr field="content" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Sati koje možeš da posvetiš nedeljno *</label>
                      <div className="apply-pills">
                        <Pill field="hours" value="<10" label="Ispod 10h" />
                        <Pill field="hours" value="10-20" label="10–20h" />
                        <Pill field="hours" value="20-30" label="20–30h" />
                        <Pill field="hours" value="30+" label="30+h" />
                      </div>
                      <FieldErr field="hours" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-label">Kako izgleda tvoj život za 12 meseci? <span style={{color:'var(--color-text-muted)'}}>opciono</span></label>
                      <input className="apply-input" type="text" placeholder="Jedna rečenica je dovoljno" value={form.goalDetail} onChange={e => set('goalDetail', e.target.value)} />
                    </div>

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(2)}>← Nazad</button>
                      <button type="button" className="apply-btn-next" onClick={nextStep3}>Nastavi →</button>
                    </div>
                  </div>
                )}

                {/* ── STEP 4 ── */}
                {step === 4 && (
                  <div className="apply-step">
                    <p className="apply-step-title">Poslednji korak</p>

                    <div className="apply-field">
                      <label className="apply-checkbox-label">
                        <input type="checkbox" className="apply-checkbox" checked={form.ageConfirm} onChange={e => set('ageConfirm', e.target.checked)} />
                        <span className="apply-checkbox-box" />
                        <span>Imam 18+ godina i razumem da se radi o sadržaju za odrasle *</span>
                      </label>
                      <FieldErr field="ageConfirm" />
                    </div>

                    <div className="apply-field">
                      <label className="apply-checkbox-label">
                        <input type="checkbox" className="apply-checkbox" checked={form.marketingConsent} onChange={e => set('marketingConsent', e.target.checked)} />
                        <span className="apply-checkbox-box" />
                        <span>Slažem se da primam savete i ažuriranja putem email/SMS-a <span style={{color:'var(--color-text-muted)'}}>opciono</span></span>
                      </label>
                    </div>

                    <div className="apply-trust-strip">
                      <span>◆ Nula curenja identiteta u 4+ godina</span>
                      <span>◆ Nula troškova unapred, ikad</span>
                      <span>◆ 140+ klijenata, $11M+ godišnji prihod</span>
                    </div>

                    {submitError && <p className="apply-submit-err">{submitError}</p>}

                    <div className="apply-nav">
                      <button type="button" className="apply-btn-back" onClick={() => goStep(3)}>← Nazad</button>
                      <button type="submit" className="apply-btn-submit" disabled={sending}>
                        {sending ? 'Šaljemo...' : 'Pošalji prijavu →'}
                      </button>
                    </div>

                    <p className="apply-micro" style={{textAlign:'center',marginTop:12}}>
                      <span className="pulse-dot" style={{display:'inline-block',marginRight:6}} />
                      Ako odgovaraš, biraš termin odmah na sledećem ekranu
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
