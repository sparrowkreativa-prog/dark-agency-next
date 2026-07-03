export const siteData = {
  nav: {
    logo: 'Velluto Nero',
    links: [
      { label: 'Rezultati', href: '#results' },
      { label: 'Mašina', href: '#masina' },
      { label: 'Roster', href: '#roster' },
      { label: 'Usluge', href: '#services' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Čet Strategija', href: '/cet-strategija' },
    ],
    cta: { label: 'Prijavi se', href: '#apply' },
  },

  hero: {
    headline: 'Tvoja Agencija.\nTvoj Brend.\nTvoja Priča.',
    subtext: 'Najpromišljeniji način da razviješ svoj brend — a da niko ne sazna.',
    cta: { label: 'Prijavi se', href: '#apply' },
    microcopy: '60-sekundi prijava · manje od 2% primljenih · nula troškova unapred',
    stats: [
      { num: '$3M+', label: 'Godišnji prihod', idx: 1 },
      { num: '60+',  label: 'Klijenata',       idx: 2 },
      { num: '0',    label: 'Curenja identiteta', idx: 3, accent: true },
    ],
  },

  problem: {
    label: 'I · Pitanje',
    title: 'Većina Ljudi Koji Razmišljaju o Ovome Nikada Nigde Ne Aplicira.',
    sub: 'Ne zato što nisu zainteresovani. Već zato što svaka agencija kojoj se obrate ne prođe ni prvi test. Mi smo agencija koja je izgrađena oko tog pitanja.',
    items: [
      { num: '01', h: 'Da li me neko može pronaći?',       p: 'Razdvajanje identiteta je temelj, ne opcija. Inženjerišemo ga pre prvog dana.' },
      { num: '02', h: 'Da li ovo može uticati na moju karijeru?', p: 'Tvoje prisustvo je konstruisano tako da tvoja realna reputacija nikad ne postane kolateral.' },
      { num: '03', h: 'Da li moja porodica može saznati?',  p: 'Geo-blokiranje počinje na nivou grada. Tvoja persona se gradi od nule, bez ikakvog preklapanja.' },
    ],
  },

  included: {
    label: "I.V · Šta je uključeno",
    title: 'Svaki Sistem Koji Ti Treba - Već Radi.',
    sub: 'Tri stuba, izgrađena i kojima upravljamo pre nego što objaviš ijednu objavu.',
    cards: [
      {
        num: '01',
        title: 'Tvoja arhitektura identiteta',
        desc: 'Potpuno odvojena persona, geo-blokirana od tvog pravog života, inženjerisana po standardu koji nijedan solo operater ne može dostići.',
        items: [
          'Geo-blokiranje na nivou grada i države od prvog dana',
          'Persona izgrađena bez ikakvog preklapanja sa tvojim pravim identitetom',
          'Sigurni protokoli za razdvajanje uređaja i naloga',
          'DMCA monitoring na 500+ platformi, 24/7',
        ],
        link: { label: 'Saznaj više o privatnosti', href: '#' },
      },
      {
        num: '02',
        title: 'Tvoj content engine',
        desc: 'Strategija, raspoređivanje i produkcija -sve u rukama tvog tima, da se ti možeš fokusirati na ono što samo ti možeš da radiš.',
        items: [
          'Kompletan content kalendar planiran svakih 30 dana',
          'Raspoređivanje objava, opisi i optimizacija',
          'Rast publike i upravljanje zajednicom',
          'Praćenje rezultata i mesečni izveštaji',
        ],
        link: { label: 'Vidi kako funkcioniše', href: '#' },
        reverse: true,
      },
      {
        num: '03',
        title: 'Tvoj sistem zarade',
        desc: 'Od strategije cena do prve nedelje - tvoj tim gradi i vodi sloj monetizacije dok ti zarađuješ.',
        items: [
          'Izbor niše i arhitektura cena',
          'Cilj $20K+ u prvoj nedelji, ostvareno 60+ puta',
          'Samo podela prihoda - ništa unapred, nikad',
          'Bez ugovora - odlaziš kad hoćeš, bez penala',
        ],
        link: { label: 'Počni da zarađuješ', href: '#' },
      },
    ],
  },

  masina: {
    label: 'II · Mašina',
    title: 'Naša Infrastruktura Radi 24/7 Za Tebe.',
    sub: 'Dok spavaš, naš sistem aktivno upravlja tvojim nalogom — content, poruke, analitika, zaštita.',
    crm: {
      totalRevenue: '612.847',
      activeCreators: 61,
      avgMonthly: '$10.047',
      topEarner: '$253.917/mes',
    },
    phoneFarm: {
      title: 'Phone Farm',
      desc: '10+ uređaja po kreatoru. Posting 24/7, nikad propušten termin.',
      devices: [
        { id: 1,  active: true,  label: 'Uređaj 01', status: 'Objava' },
        { id: 2,  active: true,  label: 'Uređaj 02', status: 'Poruke' },
        { id: 3,  active: true,  label: 'Uređaj 03', status: 'Objava' },
        { id: 4,  active: false, label: 'Uređaj 04', status: 'Standby' },
        { id: 5,  active: true,  label: 'Uređaj 05', status: 'Analitika' },
        { id: 6,  active: true,  label: 'Uređaj 06', status: 'Objava' },
        { id: 7,  active: true,  label: 'Uređaj 07', status: 'Poruke' },
        { id: 8,  active: false, label: 'Uređaj 08', status: 'Standby' },
        { id: 9,  active: true,  label: 'Uređaj 09', status: 'Objava' },
        { id: 10, active: true,  label: 'Uređaj 10', status: 'Skeniranje' },
      ],
    },
    creatorApp: {
      title: 'Creator App',
      desc: 'Upload sadržaja, praćenje zadataka i direktna komunikacija sa tvojim timom.',
      tasks: [
        { label: 'Upload sadržaja',    done: true },
        { label: 'Pregled opisa',      done: true },
        { label: 'Potvrda rasporeda',  done: true },
        { label: 'Fan poruke',         done: false },
        { label: 'Mesečni izveštaj',   done: false },
      ],
    },
    liveMetrics: [
      { label: 'Aktivnih kreatora', value: '61',   unit: '' },
      { label: 'Ukupan prihod',     value: '$612K', unit: '+' },
      { label: 'Avg mesečno',       value: '$10K',  unit: '' },
      { label: 'Vreme odgovora',    value: '<5',    unit: 'min' },
    ],
  },

  roster: {
    label: 'III · Roster',
    title: 'Pravi Kreatori. Pravi Brojevi.',
    sub: 'Svaki rezultat je verifikovan. Na prvom pozivu možeš odabrati bilo kog klijenta — logujemo se uživo.',
    cases: [
      {
        id: 'K.R.',
        niche: 'Lifestyle',
        duration: '3 meseca',
        before: '$0',
        after: '$161.423/mes',
        rank: 'Top 0.05%',
        quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte.',
        months: [12, 28, 45, 72, 110, 161],
      },
      {
        id: 'S.T.',
        niche: 'Fitness',
        duration: '12 meseci',
        before: '$12.000/mes',
        after: '$253.917/mes',
        rank: 'Top 0.01%',
        quote: 'Skoro nisam aplicirala. Godinu dana kasnije sedim u penthouseu i svi misle da sam u marketingu.',
        months: [12, 40, 75, 110, 155, 210, 230, 245, 254],
      },
      {
        id: 'A.J.',
        niche: 'Glamour',
        duration: '4 meseca',
        before: '$3.000/mes',
        after: '$65.218/mes',
        rank: 'Top 0.3%',
        quote: 'Dve nedelje sam čekala pre prijave. Sada radim odakle hoću i utorkom ne radim ništa.',
        months: [3, 12, 28, 50, 65],
      },
      {
        id: 'M.V.',
        niche: 'Wellness',
        duration: '6 meseci',
        before: '$0',
        after: '$84.200/mes',
        rank: 'Top 0.1%',
        quote: 'Počela sam bez ijednog pratioca. Šest meseci kasnije imam tim koji radi sve za mene.',
        months: [8, 22, 40, 58, 72, 84],
      },
    ],
  },

  services: {
    label: 'IV · Naše usluge',
    title: 'Sve je Inženjerisano Pre Tvog Prvog Dana.',
    sub: 'Sedam sistema u pogonu pre nego što ijedan tvoj rad dospe do sveta.',
    quote: '4+ godine. 60+ klijenata. Nula curenja identiteta.',
    items: [
      { num: '01', title: 'Strategija i pozicioniranje',    body: 'Tvoja niša, tvoje cene, tvojih prvih 90 dana — sve isplanirano pre starta.' },
      { num: '02', title: 'Kompletno upravljanje nalogom',  body: 'Mi vodimo operacije 24/7 da se ti možeš fokusirati na ono što samo ti možeš.' },
      { num: '03', title: 'Planiranje sadržaja',            body: 'Svaka objava zakazana, optimizovana i maksimizovana za efekat.' },
      { num: '04', title: 'Arhitektura privatnosti',        body: 'Geo-blokiranje, razdvajanje persone i zaštita identiteta od prvog dana.' },
      { num: '05', title: 'DMCA i zaštita sadržaja',        body: 'Monitoring 24/7 na 500+ platformi. Uklanjanje mereno u satima.' },
      { num: '06', title: 'Rast i marketing',               body: 'Rast na društvenim mrežama, izgradnja zajednice i razvoj publike.' },
      { num: '07', title: 'Mentorstvo i podrška',           body: 'Lično vođenje od ljudi koji su ovo izgradili od nule.' },
    ],
  },

  qualify: {
    label: 'V · Kvalifikacija',
    title: 'Primamo Manje od 2% Prijava.',
    sub: 'Kada se pridružiš, čitav tim se gradi oko tebe. To možemo da radimo samo za ljude koji su potpuno posvećeni.',
    yesHeading: 'Odgovaraš ako…',
    noHeading: 'Ne odgovaraš ako…',
    yes: [
      'Možeš da se posvetiš ~20 sati nedeljno, dosljedno',
      'Ovo bikaš kao ozbiljan put ka prihodu, ne testiraš vodu',
      'Privatnost ti je neotklonjiva — hoćeš da bude inženjerisana, ne obećana',
      'Spreman/na si da slediš sistem',
      'Razmišljaš o ovome mesecima i spreman/na si da počneš',
    ],
    no: [
      'Hoćeš brze rezultate bez doslednog rada',
      'Ovo ti je plan B, ne doneta odluka',
      'Hoćeš da nestaneš na nedeljama bez kontakta',
      'Nisi spreman/na da slediš provereni sistem',
    ],
  },

  testimonials: {
    label: 'VI · Priče',
    title: 'Troje Ljudi Koji Nikad Nisu Mislili Da Je Ovo Za Njih.',
    sub: 'Bez pratioca. Bez iskustva. Pravi strahovi. Jedino što se promenilo bio je tim iza njih.',
    items: [
      {
        name: 'K.R.',
        rank: 'Top 0.05% · 3 meseca',
        amount: '$161.423/mes',
        quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte. Nisam podesila alarm od marta.',
        bg: '#e8e5e0',
      },
      {
        name: 'S.T.',
        rank: 'Top 0.01% · 12 meseci',
        amount: '$253.917/mes',
        quote: 'Skoro nisam aplicirala. Provela sam nedelju dana ubeđena da je prevara. Godinu dana kasnije sedim u penthouseu i svi misle da sam u marketingu.',
        bg: '#dedad4',
      },
      {
        name: 'A.J.',
        rank: 'Top 0.3% · 4 meseca',
        amount: '$65.218/mes',
        quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću i utorkom ne radim ništa jer mogu.',
        bg: '#e8e5e0',
      },
    ],
  },

  guarantee: {
    label: 'VII · Garancije',
    bigNum: '$20K',
    title: 'Tri Garancije. Složene. Bez Sitnog Slova.',
    items: [
      { label: 'I · Lansiranje',  text: 'Cilj $20K+ u prvoj nedelji, ostvareno 60+ puta od nule. Ništa unapred — zaradimo samo kada i ti zaradiš.' },
      { label: 'II · Podrška',    text: 'Ispod 5 minuta odgovora, 24/7. Ne cilj — mereni operativni standard.' },
      { label: 'III · Izlaz',     text: 'Odi kad hoćeš. Nula naknada, nula penala, nula pitanja. Bez ugovora, ikad.' },
    ],
    cta: { label: 'Prijavi se', href: '#apply' },
  },

  faq: {
    label: 'VIII · Pitanja',
    title: 'Direktni Odgovori. Bez Sitnog Slova.',
    sub: 'Pitanja koja sebi već postavljaš — odgovorena direktno.',
    items: [
      {
        q: 'Da li će neko koga znam saznati?',
        a: 'Pre nego što tvoj nalog krene, geo-blokiramo tvoj grad, državu i svaku zemlju koju odabereš. Gradimo potpuno novu personu bez ikakve veze sa tvojim pravim identitetom. Za 4+ godine i 60+ klijenata, nijedan nije identifikovan.',
      },
      {
        q: 'Koliko realno mogu da zaradim?',
        a: 'Naš sistem lansiranja cilja $20K+ u prvoj nedelji, ostvareno 60+ puta. Neki klijenti dostižu $50K u prvih 14 dana. Naš top klijent je prešao $253K u jednom mesecu.',
      },
      {
        q: 'Kako znam da ovo nije prevara?',
        a: 'Na prvom pozivu ti odabiraš bilo kog klijenta iz naše liste. Logujemo se u živi dashboard dok gledaš — pravi prihodi, u realnom vremenu. Ne PDF. Ne screenshot. Ne naplaćujemo ništa unapred i zaradimo samo kada i ti zaradiš.',
      },
      {
        q: 'Nemam pratioce niti iskustvo. Mogu li da uspem?',
        a: 'Nula je naša idealna startna pozicija — nema loših navika za odučavanje. Gradimo tvoj brend, strategiju i publiku od nule. Sve što trebaš je ~20 sati nedeljno i volja da slediš sistem koji je radio 60+ puta.',
      },
      {
        q: 'Da li moram da pokazujem lice?',
        a: 'Ne. Neki od naših najuspešnijih klijenata nikad nisu pokazali lice. Izgradili smo potpuno anonimne persone. Tvoj nivo udobnosti postavlja granicu — mi projektujemo sve unutar nje.',
      },
      {
        q: 'Koliko uzimate?',
        a: 'Ništa unapred. Radimo na podeli prihoda — zaradimo samo kada i ti zaradiš. Tvoj posvećeni tim, strategija i kompletne operacije su uključeni.',
      },
      {
        q: 'Koliko traje ugovor?',
        a: 'Nema zaključavanja i nema minimalnog roka. Ako hoćeš da odeš u bilo kom trenutku, odeš — nula naknada, nula penala, nula pitanja.',
      },
      {
        q: 'Kako izgleda onboarding?',
        a: 'Nakon prijave, stariji član tima je pregleda i odgovara za 5 minuta. Ako postoji fit, zakazujemo discovery poziv. Većina klijenata se lansira za 14 dana.',
      },
    ],
  },

  finalCta: {
    label: 'IX · Tvoj potez',
    title: 'Za Dvanaest Meseci, Jedna Od Dve Stvari Će Biti Tačna.',
    col1: {
      heading: 'Bez tima',
      items: [
        'Još jedna godina kada si razmišljao/la a nisi počeo/la.',
        'Gledaš druge u tvojoj branši kako zarađuju šestocifrene iznose.',
        'Govoriš sebi da ćeš početi sledećeg meseca — opet.',
      ],
    },
    col2: {
      heading: 'Sa timom',
      items: [
        'Produkcijski tim je lansirao tvoj nalog u prvoj nedelji.',
        'Arhitektura privatnosti te štiti od prvog dana.',
        'Isti sistem koji je izgradio svaki broj na ovoj strani — sada gradi tvoj.',
      ],
    },
    line: 'Isti dvanaest meseci u svakom slučaju. Jedina promenljiva je da li tim stoji iza tebe.',
    cta: { label: 'Prijavi se', href: '#apply' },
    disclaimer: '*Rezultati variraju u zavisnosti od niše, publike i truda. Prošli rezultati ne garantuju buduće.',
  },

  footer: {
    tagline: 'Promenila je sve. Niko nikad nije saznao.',
    cta: { label: 'Prijavi se', href: '#apply' },
    copy: `© ${new Date().getFullYear()} Velluto Nero. Sva prava zadržana.`,
    legal: [
      { label: 'Politika privatnosti', href: '/privacy' },
      { label: 'Uslovi korišćenja', href: '/terms' },
    ],
  },
};
