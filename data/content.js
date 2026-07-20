export const siteData = {
  nav: {
    logo: 'Velluto Nero',
    links: [
      { label: 'Rezultati', href: '/rezultati' },
      { label: 'Usluge', href: '#services' },
      { label: 'Resursi', href: '/resursi' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Prijavi se', href: '/#apply' },
  },

  hero: {
    headline: 'BUILDING\nEMPIRES\nTOGETHER',
    subtext: 'Ne gradimo ti nalog. Gradimo ti sledeći život.\nObezbeđujemo ti standard iza brojki: slobodu da živiš gde poželiš, luksuz kakav si zamišljala, slobodno vreme, zaštitu identiteta i brend koji izgleda kao naslovna strana magazina.',
    cta: { label: 'PRIJAVI SE NA LISTU ČEKANJA', href: '/#apply' },
    microcopy: '60-sekundi prijava · manje od 2% primljenih · nula troškova unapred',
    stats: [
      { num: '$11M+', label: 'Generisano za kreatore', idx: 1 },
      { num: '140+',  label: 'Klijenata',              idx: 2 },
      { num: '0',     label: 'Curenja identiteta',     idx: 3, accent: true },
    ],
    statsRow2: [
      { num: '5+',   end: 5,   label: 'Godina iskustva' },
      { num: '12+',  end: 12,  label: 'Zemalja' },
      { num: '230+', end: 230, label: 'Zaposlenih' },
    ],
  },

  problem: {
    label: 'ZAŠTO SMO OSNOVALI VELLUTO NERO',
    title: 'Agencija Koju Vode Žene, za Žene.',
    sub: 'Videli smo industriju kojom dominiraju agencije kojima upravljaju muškarci - koje svoje kreatorke nisu zaista razumele. Znali smo da mora postojati bolji način. Ne upravljamo samo nalozima - gradimo carstva, uz posvećen tim koji poštuje granice i štiti privatnost svakog kreatora kao preduzetnika kakav zaista jeste.',
    stats: [
      { num: '5.000+',   label: 'Primljenih prijava' },
      { num: '0,4%',     label: 'Stopa prihvatanja' },
      { num: '2/mesečno', label: 'Novih klijenata' },
      { num: '3+ god',   label: 'Prosečno partnerstvo' },
      { num: '$11M+',    label: 'Generisano za kreatore' },
    ],
  },

  included: {
    label: "Šta je uključeno",
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
          'Cilj $20K+ u prvoj nedelji, ostvareno 140+ puta',
          'Samo podela prihoda - ništa unapred, nikad',
          'Bez ugovora - odlaziš kad hoćeš, bez penala',
        ],
        link: { label: 'Počni da zarađuješ', href: '#' },
      },
    ],
  },

  masina: {
    label: 'Mašina',
    title: 'Naša Infrastruktura Radi 24/7 Za Tebe.',
    sub: 'Dok spavaš, naš sistem aktivno upravlja tvojim nalogom - content, poruke, analitika, zaštita.',
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
    label: 'Roster',
    title: 'Pravi Kreatori. Pravi Brojevi.',
    sub: 'Svaki rezultat je verifikovan. Na prvom pozivu možeš odabrati bilo kog klijenta - logujemo se uživo.',
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
    label: 'ŠTA RADIMO',
    title: 'Full Management, u potpunosti',
    sub: 'Naša agencija pruža All Inclusive uslugu - sav posao možeš prepustiti nama: marketing, menadžment, održavanje profila i dopisivanje sa fanovima, pa sve do finansijskih i pravnih pitanja. Na tebi je samo da kreiraš prethodno dogovoreni sadržaj, a lični menadžer ti stoji na raspolaganju 24 časa svih 7 dana u nedelji.',
    quote: '4+ godine. 140+ klijenata. Nula curenja identiteta.',
    items: [
      { num: '01', icon: 'user-circle',     title: 'Personal Brand Manager',      body: 'Privatni brend menadžer koji vodi organizaciju sadržaja i strateški rukovodi rastom tvog brenda.' },
      { num: '02', icon: 'headset',         title: 'Dedicated Account Manager',   body: 'Lični menadžer na raspolaganju 24/7 za sve operativne i strateške odluke.' },
      { num: '03', icon: 'trending-up',     title: 'Advanced Traffic Marketing',  body: 'Napredne funnel strategije za maksimalnu konverziju pratilaca u pretplatnike.' },
      { num: '04', icon: 'book-open',       title: 'Content Direction Playbook',  body: 'Precizne nedeljne smernice za snimanje, bazirane na trendovima i tvom senzibilitetu.' },
      { num: '05', icon: 'messages-square', title: '24/7 Sales Chatting',         body: 'Obučeni operateri za psihologiju prodaje koji preuzimaju kompletan rad u inboxu.' },
      { num: '06', icon: 'sparkles',        title: 'Brand Building',              body: 'Izgradnja stabilnog dugoročnog digitalnog biznisa i profesionalno pozicioniranje.' },
      { num: '07', icon: 'shield',          title: 'Legal & Financial Support',   body: 'Pravna zaštita imidža, uklanjanje piraterije i transparentna optimizacija finansija.' },
      { num: '08', icon: 'smartphone',      title: 'Phone Farm AI',               body: 'Ekskluzivan pristup mreži od 500 namenskih uređaja za targetiranje US i IT tržišta.' },
      { num: '09', icon: 'lock',            title: 'Anti Ban Zaštita',            body: 'Sistem multiplikovanih naloga koji garantuje da traffic i profit ostaju zaštićeni.' },
      { num: '10', icon: 'globe',           title: 'International Collabs',       body: 'Premium produkcija i putovanja u Italiju radi kolaboracija sa top modelima rostera.' },
    ],
  },

  qualify: {
    label: 'Kvalifikacija',
    title: 'Primamo Manje od 2% Prijava.',
    sub: 'Kada se pridružiš, čitav tim se gradi oko tebe. To možemo da radimo samo za ljude koji su potpuno posvećeni.',
    yesHeading: 'Ovo je pravi izbor za tebe ako...',
    noHeading: 'Ovo nije za tebe ako...',
    yes: [
      'Imaš preko 18 godina i možeš redovno da izdvojiš oko 10 sati nedeljno.',
      'Na ovo gledaš kao na ozbiljan izvor prihoda, a ne samo kao na "ispitivanje terena".',
      'Tvoja privatnost je prioritet o kojem nema pregovora, želiš da budeš sistemski osigurana.',
      'Spremna si da učiš, pratiš proveren sistem rada i nije ti potreban niko da te juri kako bi ispunila svoje obaveze.',
      'O ovome razmišljaš već mesecima i konačno si spremna da pređeš sa razmišljanja na dela.',
    ],
    no: [
      'Želiš brze rezultate bez doslednog i redovnog rada.',
      'Nije ti prijatno da se baviš kreiranjem sadržaja za odrasle.',
      'Na ovo gledaš samo kao na rezervni plan koji tek razmatraš, a ne kao na jasnu odluku koju si već donela.',
      'Očekuješ da možeš da "nestaneš" na po nekoliko nedelja – ovaj sistem zahteva kontinuitet.',
    ],
  },

  testimonials: {
    label: 'Priče',
    title: 'Troje Ljudi Koji Nikad Nisu Mislili Da Je Ovo Za Njih.',
    sub: 'Bez pratioca. Bez iskustva. Pravi strahovi. Jedino što se promenilo bio je tim iza njih.',
    items: [
      {
        name: 'K.R.',
        rank: 'Top 0.05% · 3 meseca sa Velluto Nero',
        amount: '$161.423/mes',
        then: 'Brojala bakšiš u restoranu, delila kiriju, nula pratilaca',
        now: 'Dala otkaz za 90 dana, rezerviše letove po osećaju, bez alarma od marta',
        quote: 'Tri meseca ranije sam brojala bakšiš. Sada rezervišem letove kada mi se prohte. Nisam podesila alarm od marta.',
      },
      {
        name: 'S.T.',
        rank: 'Top 0.01% · 12 meseci sa Velluto Nero',
        amount: '$253.917/mes',
        then: 'Zarađivala €12/h, provela nedelju dana ubeđena da je sve prevara',
        now: 'Penthouse sa 24 godine, prijatelji misle da radi u marketingu',
        quote: 'Skoro nisam aplicirala. Provela sam nedelju dana ubeđena da je prevara. Godinu dana kasnije i svi misle da sam u marketingu.',
      },
      {
        name: 'A.J.',
        rank: 'Top 0.3% · 4 meseca sa Velluto Nero',
        amount: '$65.218/mes',
        then: 'Plašila se da počne, dve nedelje sedela na prijavi',
        now: 'Full-time za 4 meseca, radi odakle hoće, utorkom slobodna',
        quote: 'Dve nedelje sam sedela na prijavi jer sam se plašila. Sada radim odakle hoću i utorkom ne radim ništa jer mogu.',
      },
    ],
  },

  guarantee: {
    label: 'Garancije',
    bigNum: '$20K',
    title: 'Tri Garancije. Složene. Bez Sitnog Slova.',
    items: [
      { label: 'Lansiranje',  text: 'Cilj $20K+ u prvoj nedelji, ostvareno 140+ puta od nule. Ništa unapred - zaradimo samo kada i ti zaradiš.' },
      { label: 'Podrška',    text: 'Ispod 5 minuta odgovora, 24/7. Ne cilj - mereni operativni standard.' },
      { label: 'Izlaz',      text: 'Odi kad hoćeš. Nula naknada, nula penala, nula pitanja. Bez ugovora, ikad.' },
    ],
    cta: { label: 'Prijavi se', href: '/#apply' },
  },

  faq: {
    label: 'Pitanja',
    title: 'Direktni Odgovori. Bez Sitnog Slova.',
    sub: 'Pitanja koja sebi već postavljaš - odgovorena direktno.',
    items: [
      {
        q: 'Da li će neko koga znam saznati?',
        a: 'Pre nego što tvoj nalog krene, geo-blokiramo tvoj grad, državu i svaku zemlju koju odabereš. Gradimo potpuno novu personu bez ikakve veze sa tvojim pravim identitetom. Za 4+ godine i 140+ klijenata, nijedan nije identifikovan.',
      },
      {
        q: 'Koliko realno mogu da zaradim?',
        a: 'Naš sistem lansiranja cilja $20K+ u prvoj nedelji, ostvareno 140+ puta. Neki klijenti dostižu $50K u prvih 14 dana. Naš top klijent je prešao $253K u jednom mesecu.',
      },
      {
        q: 'Kako znam da ovo nije prevara?',
        a: 'Na prvom pozivu ti odabiraš bilo kog klijenta iz naše liste. Logujemo se u živi dashboard dok gledaš - pravi prihodi, u realnom vremenu. Ne PDF. Ne screenshot. Ne naplaćujemo ništa unapred i zaradimo samo kada i ti zaradiš.',
      },
      {
        q: 'Nemam pratioce niti iskustvo. Mogu li da uspem?',
        a: 'Nula je naša idealna startna pozicija - nema loših navika za odučavanje. Gradimo tvoj brend, strategiju i publiku od nule. Sve što trebaš je ~20 sati nedeljno i volja da slediš sistem koji je radio 140+ puta.',
      },
      {
        q: 'Da li moram da pokazujem lice?',
        a: 'Ne. Neki od naših najuspešnijih klijenata nikad nisu pokazali lice. Izgradili smo potpuno anonimne persone. Tvoj nivo udobnosti postavlja granicu - mi projektujemo sve unutar nje.',
      },
      {
        q: 'Koliko uzimate?',
        a: 'Ništa unapred. Radimo na podeli prihoda - zaradimo samo kada i ti zaradiš. Tvoj posvećeni tim, strategija i kompletne operacije su uključeni.',
      },
      {
        q: 'Koliko traje ugovor?',
        a: 'Nema zaključavanja i nema minimalnog roka. Ako hoćeš da odeš u bilo kom trenutku, odeš - nula naknada, nula penala, nula pitanja.',
      },
      {
        q: 'Kako izgleda onboarding?',
        a: 'Nakon prijave, stariji član tima je pregleda i odgovara za 5 minuta. Ako postoji fit, zakazujemo discovery poziv. Većina klijenata se lansira za 14 dana.',
      },
    ],
  },

  finalCta: {
    label: 'Tvoj potez',
    title: 'Za Dvanaest Meseci, Jedna Od Dve Stvari Će Biti Tačna.',
    col1: {
      heading: 'Bez tima',
      items: [
        'Još jedna godina kada si razmišljao/la a nisi počeo/la.',
        'Gledaš druge u tvojoj branši kako zarađuju šestocifrene iznose.',
        'Govoriš sebi da ćeš početi sledećeg meseca - opet.',
      ],
    },
    col2: {
      heading: 'Sa timom',
      items: [
        'Produkcijski tim je lansirao tvoj nalog u prvoj nedelji.',
        'Arhitektura privatnosti te štiti od prvog dana.',
        'Isti sistem koji je izgradio svaki broj na ovoj strani - sada gradi tvoj.',
      ],
    },
    line: 'Isti dvanaest meseci u svakom slučaju. Jedina promenljiva je da li tim stoji iza tebe.',
    cta: { label: 'Prijavi se', href: '/#apply' },
    disclaimer: '*Rezultati variraju u zavisnosti od niše, publike i truda. Prošli rezultati ne garantuju buduće.',
  },

  footer: {
    tagline: 'Promenila je sve. Niko nikad nije saznao.',
    cta: { label: 'Prijavi se', href: '/#apply' },
    copy: `© ${new Date().getFullYear()} Velluto Nero. Sva prava zadržana.`,
    legal: [
      { label: 'Politika privatnosti', href: '/privacy' },
      { label: 'Uslovi korišćenja', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
};
