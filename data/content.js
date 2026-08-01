export const siteData = {
  nav: {
    logo: 'Velluto Nero',
    links: [
      { label: 'Rezultati', href: '/rezultati' },
      { label: 'Usluge', href: '#services' },
      { label: 'Resursi', href: '/resursi' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Prijavi se', href: '/site#apply' },
  },

  hero: {
    headline: 'BUILDING EMPIRES\nTOGETHER',
    subtext: 'Ne gradimo ti nalog. Gradimo ti sledeÄ‡i Å¾ivot.\nObezbeÄ‘ujemo ti standard iza brojki: slobodu da Å¾iviÅ¡ gde poÅ¾eliÅ¡, luksuz kakav si zamiÅ¡ljala, slobodno vreme, zaÅ¡titu identiteta i brend koji izgleda kao naslovna strana magazina.',
    cta: { label: 'PRIJAVI SE NA LISTU ÄŒEKANJA', href: '/site#apply' },
    microcopy: '60-sekundi prijava Â· manje od 2% primljenih Â· nula troÅ¡kova unapred',
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
    label: 'ZAÅ TO SMO OSNOVALI VELLUTO NERO',
    title: 'Agencija Koju Vode Å½ene, za Å½ene.',
    sub: 'Videli smo industriju kojom dominiraju agencije kojima upravljaju muÅ¡karci - koje svoje kreatorke nisu zaista razumele. Znali smo da mora postojati bolji naÄin. Ne upravljamo samo nalozima - gradimo carstva, uz posveÄ‡en tim koji poÅ¡tuje granice i Å¡titi privatnost svakog kreatora kao preduzetnika kakav zaista jeste.',
    stats: [
      { num: '5.000+',   label: 'Primljenih prijava' },
      { num: '0,4%',     label: 'Stopa prihvatanja' },
      { num: '2/meseÄno', label: 'Novih klijenata' },
      { num: '3+ god',   label: 'ProseÄno partnerstvo' },
      { num: '$11M+',    label: 'Generisano za kreatore' },
    ],
  },

  included: {
    label: "Å ta je ukljuÄeno",
    title: 'Svaki Sistem Koji Ti Treba - VeÄ‡ Radi.',
    sub: 'Tri stuba, izgraÄ‘ena i kojima upravljamo pre nego Å¡to objaviÅ¡ ijednu objavu.',
    cards: [
      {
        num: '01',
        title: 'Tvoja arhitektura identiteta',
        desc: 'Potpuno odvojena persona, geo-blokirana od tvog pravog Å¾ivota, inÅ¾enjerisana po standardu koji nijedan solo operater ne moÅ¾e dostiÄ‡i.',
        items: [
          'Geo-blokiranje na nivou grada i drÅ¾ave od prvog dana',
          'Persona izgraÄ‘ena bez ikakvog preklapanja sa tvojim pravim identitetom',
          'Sigurni protokoli za razdvajanje ureÄ‘aja i naloga',
          'DMCA monitoring na 500+ platformi, 24/7',
        ],
        link: { label: 'Saznaj viÅ¡e o privatnosti', href: '#' },
      },
      {
        num: '02',
        title: 'Tvoj content engine',
        desc: 'Strategija, rasporeÄ‘ivanje i produkcija - sve u rukama tvog tima, da se ti moÅ¾eÅ¡ fokusirati na ono Å¡to samo ti moÅ¾eÅ¡ da radiÅ¡.',
        items: [
          'Kompletan content kalendar planiran svakih 30 dana',
          'RasporeÄ‘ivanje objava, opisi i optimizacija',
          'Rast publike i upravljanje zajednicom',
          'PraÄ‡enje rezultata i meseÄni izveÅ¡taji',
        ],
        link: { label: 'Vidi kako funkcioniÅ¡e', href: '#' },
        reverse: true,
      },
      {
        num: '03',
        title: 'Tvoj sistem zarade',
        desc: 'Od strategije cena do prve nedelje - tvoj tim gradi i vodi sloj monetizacije dok ti zaraÄ‘ujeÅ¡.',
        items: [
          'Izbor niÅ¡e i arhitektura cena',
          'Cilj $20K+ u prvoj nedelji, ostvareno 140+ puta',
          'Samo podela prihoda - niÅ¡ta unapred, nikad',
          'Bez ugovora - odlaziÅ¡ kad hoÄ‡eÅ¡, bez penala',
        ],
        link: { label: 'PoÄni da zaraÄ‘ujeÅ¡', href: '#' },
      },
    ],
  },

  masina: {
    label: 'MaÅ¡ina',
    title: 'NaÅ¡a Infrastruktura Radi 24/7 Za Tebe.',
    sub: 'Dok spavaÅ¡, naÅ¡ sistem aktivno upravlja tvojim nalogom - content, poruke, analitika, zaÅ¡tita.',
    crm: {
      totalRevenue: '612.847',
      activeCreators: 61,
      avgMonthly: '$10.047',
      topEarner: '$253.917/mes',
    },
    phoneFarm: {
      title: 'Phone Farm',
      desc: '10+ ureÄ‘aja po kreatoru. Posting 24/7, nikad propuÅ¡ten termin.',
      devices: [
        { id: 1,  active: true,  label: 'UreÄ‘aj 01', status: 'Objava' },
        { id: 2,  active: true,  label: 'UreÄ‘aj 02', status: 'Poruke' },
        { id: 3,  active: true,  label: 'UreÄ‘aj 03', status: 'Objava' },
        { id: 4,  active: false, label: 'UreÄ‘aj 04', status: 'Standby' },
        { id: 5,  active: true,  label: 'UreÄ‘aj 05', status: 'Analitika' },
        { id: 6,  active: true,  label: 'UreÄ‘aj 06', status: 'Objava' },
        { id: 7,  active: true,  label: 'UreÄ‘aj 07', status: 'Poruke' },
        { id: 8,  active: false, label: 'UreÄ‘aj 08', status: 'Standby' },
        { id: 9,  active: true,  label: 'UreÄ‘aj 09', status: 'Objava' },
        { id: 10, active: true,  label: 'UreÄ‘aj 10', status: 'Skeniranje' },
      ],
    },
    creatorApp: {
      title: 'Creator App',
      desc: 'Upload sadrÅ¾aja, praÄ‡enje zadataka i direktna komunikacija sa tvojim timom.',
      tasks: [
        { label: 'Upload sadrÅ¾aja',    done: true },
        { label: 'Pregled opisa',      done: true },
        { label: 'Potvrda rasporeda',  done: true },
        { label: 'Fan poruke',         done: false },
        { label: 'MeseÄni izveÅ¡taj',   done: false },
      ],
    },
    liveMetrics: [
      { label: 'Aktivnih kreatora', value: '61',   unit: '' },
      { label: 'Ukupan prihod',     value: '$612K', unit: '+' },
      { label: 'Avg meseÄno',       value: '$10K',  unit: '' },
      { label: 'Vreme odgovora',    value: '<5',    unit: 'min' },
    ],
  },

  roster: {
    label: 'Roster',
    title: 'Pravi Kreatori. Pravi Brojevi.',
    sub: 'Svaki rezultat je verifikovan. Na prvom pozivu moÅ¾eÅ¡ odabrati bilo kog klijenta - logujemo se uÅ¾ivo.',
    cases: [
      {
        id: 'K.R.',
        niche: 'Lifestyle',
        duration: '3 meseca',
        before: '$0',
        after: '$161.423/mes',
        rank: 'Top 0.05%',
        quote: 'Tri meseca ranije sam brojala bakÅ¡iÅ¡. Sada rezerviÅ¡em letove kada mi se prohte.',
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
        quote: 'Dve nedelje sam Äekala pre prijave. Sada radim odakle hoÄ‡u i utorkom ne radim niÅ¡ta.',
        months: [3, 12, 28, 50, 65],
      },
      {
        id: 'M.V.',
        niche: 'Wellness',
        duration: '6 meseci',
        before: '$0',
        after: '$84.200/mes',
        rank: 'Top 0.1%',
        quote: 'PoÄela sam bez ijednog pratioca. Å est meseci kasnije imam tim koji radi sve za mene.',
        months: [8, 22, 40, 58, 72, 84],
      },
    ],
  },

  services: {
    label: 'Å TA RADIMO',
    title: 'Full Management, u potpunosti',
    sub: 'NaÅ¡a agencija pruÅ¾a All Inclusive uslugu - sav posao moÅ¾eÅ¡ prepustiti nama: marketing, menadÅ¾ment, odrÅ¾avanje profila i dopisivanje sa fanovima, pa sve do finansijskih i pravnih pitanja. Na tebi je samo da kreiraÅ¡ prethodno dogovoreni sadrÅ¾aj, a liÄni menadÅ¾er ti stoji na raspolaganju 24 Äasa svih 7 dana u nedelji.',
    quote: '4+ godine. 140+ klijenata. Nula curenja identiteta.',
    items: [
      { num: '01', icon: 'user-circle',     title: 'Personal Brand Manager',      body: 'Privatni brend menadÅ¾er koji vodi organizaciju sadrÅ¾aja i strateÅ¡ki rukovodi rastom tvog brenda.' },
      { num: '02', icon: 'headset',         title: 'Dedicated Account Manager',   body: 'LiÄni menadÅ¾er na raspolaganju 24/7 za sve operativne i strateÅ¡ke odluke.' },
      { num: '03', icon: 'trending-up',     title: 'Advanced Traffic Marketing',  body: 'Napredne funnel strategije za maksimalnu konverziju pratilaca u pretplatnike.' },
      { num: '04', icon: 'book-open',       title: 'Content Direction Playbook',  body: 'Precizne nedeljne smernice za snimanje, bazirane na trendovima i tvom senzibilitetu.' },
      { num: '05', icon: 'messages-square', title: '24/7 Sales Chatting',         body: 'ObuÄeni operateri za psihologiju prodaje koji preuzimaju kompletan rad u inboxu.' },
      { num: '06', icon: 'sparkles',        title: 'Brand Building',              body: 'Izgradnja stabilnog dugoroÄnog digitalnog biznisa i profesionalno pozicioniranje.' },
      { num: '07', icon: 'shield',          title: 'Legal & Financial Support',   body: 'Pravna zaÅ¡tita imidÅ¾a, uklanjanje piraterije i transparentna optimizacija finansija.' },
      { num: '08', icon: 'smartphone',      title: 'Phone Farm AI',               body: 'Ekskluzivan pristup mreÅ¾i od 500 namenskih ureÄ‘aja za targetiranje US i IT trÅ¾iÅ¡ta.' },
      { num: '09', icon: 'lock',            title: 'Anti Ban ZaÅ¡tita',            body: 'Sistem multiplikovanih naloga koji garantuje da traffic i profit ostaju zaÅ¡tiÄ‡eni.' },
      { num: '10', icon: 'globe',           title: 'International Collabs',       body: 'Premium produkcija i putovanja u Italiju radi kolaboracija sa top modelima rostera.' },
    ],
  },

  qualify: {
    label: 'Kvalifikacija',
    title: 'Primamo Manje od 2% Prijava.',
    sub: 'Kada se pridruÅ¾iÅ¡, Äitav tim se gradi oko tebe. To moÅ¾emo da radimo samo za ljude koji su potpuno posveÄ‡eni.',
    yesHeading: 'Ovo je pravi izbor za tebe ako...',
    noHeading: 'Ovo nije za tebe ako...',
    yes: [
      'ImaÅ¡ preko 18 godina i moÅ¾eÅ¡ redovno da izdvojiÅ¡ oko 10 sati nedeljno.',
      'Na ovo gledaÅ¡ kao na ozbiljan izvor prihoda, a ne samo kao na "ispitivanje terena".',
      'Tvoja privatnost je prioritet o kojem nema pregovora, Å¾eliÅ¡ da budeÅ¡ sistemski osigurana.',
      'Spremna si da uÄiÅ¡, pratiÅ¡ proveren sistem rada i nije ti potreban niko da te juri kako bi ispunila svoje obaveze.',
      'O ovome razmiÅ¡ljaÅ¡ veÄ‡ mesecima i konaÄno si spremna da preÄ‘eÅ¡ sa razmiÅ¡ljanja na dela.',
    ],
    no: [
      'Å½eliÅ¡ brze rezultate bez doslednog i redovnog rada.',
      'Nije ti prijatno da se baviÅ¡ kreiranjem sadrÅ¾aja za odrasle.',
      'Na ovo gledaÅ¡ samo kao na rezervni plan koji tek razmatraÅ¡, a ne kao na jasnu odluku koju si veÄ‡ donela.',
      'OÄekujeÅ¡ da moÅ¾eÅ¡ da "nestaneÅ¡" na po nekoliko nedelja â€“ ovaj sistem zahteva kontinuitet.',
    ],
  },

  testimonials: {
    label: 'PriÄe',
    title: 'Troje Ljudi Koji Nikad Nisu Mislili Da Je Ovo Za Njih.',
    sub: 'Bez pratioca. Bez iskustva. Pravi strahovi. Jedino Å¡to se promenilo bio je tim iza njih.',
    items: [
      {
        name: 'K.R.',
        rank: 'Top 0.05% Â· 3 meseca sa Velluto Nero',
        amount: '$161.423/mes',
        then: 'Brojala bakÅ¡iÅ¡ u restoranu, delila kiriju, nula pratilaca',
        now: 'Dala otkaz za 90 dana, rezerviÅ¡e letove po oseÄ‡aju, bez alarma od marta',
        quote: 'Tri meseca ranije sam brojala bakÅ¡iÅ¡. Sada rezerviÅ¡em letove kada mi se prohte. Nisam podesila alarm od marta.',
      },
      {
        name: 'S.T.',
        rank: 'Top 0.01% Â· 12 meseci sa Velluto Nero',
        amount: '$253.917/mes',
        then: 'ZaraÄ‘ivala â‚¬12/h, provela nedelju dana ubeÄ‘ena da je sve prevara',
        now: 'Penthouse sa 24 godine, prijatelji misle da radi u marketingu',
        quote: 'Skoro nisam aplicirala. Provela sam nedelju dana ubeÄ‘ena da je prevara. Godinu dana kasnije i svi misle da sam u marketingu.',
      },
      {
        name: 'A.J.',
        rank: 'Top 0.3% Â· 4 meseca sa Velluto Nero',
        amount: '$65.218/mes',
        then: 'PlaÅ¡ila se da poÄne, dve nedelje sedela na prijavi',
        now: 'Full-time za 4 meseca, radi odakle hoÄ‡e, utorkom slobodna',
        quote: 'Dve nedelje sam sedela na prijavi jer sam se plaÅ¡ila. Sada radim odakle hoÄ‡u i utorkom ne radim niÅ¡ta jer mogu.',
      },
    ],
  },

  guarantee: {
    label: 'Garancije',
    bigNum: '$20K',
    title: 'Tri Garancije. SloÅ¾ene. Bez Sitnog Slova.',
    items: [
      { label: 'Lansiranje',  text: 'Cilj $20K+ u prvoj nedelji, ostvareno 140+ puta od nule. NiÅ¡ta unapred - zaradimo samo kada i ti zaradiÅ¡.' },
      { label: 'PodrÅ¡ka',    text: 'Ispod 5 minuta odgovora, 24/7. Ne cilj - mereni operativni standard.' },
      { label: 'Izlaz',      text: 'Odi kad hoÄ‡eÅ¡. Nula naknada, nula penala, nula pitanja. Bez ugovora, ikad.' },
    ],
    cta: { label: 'Prijavi se', href: '/site#apply' },
  },

  faq: {
    label: 'Pitanja',
    title: 'Direktni Odgovori. Bez Sitnog Slova.',
    sub: 'Pitanja koja sebi veÄ‡ postavljaÅ¡ - odgovorena direktno.',
    items: [
      {
        q: 'Da li Ä‡e neko koga znam saznati?',
        a: 'Pre nego Å¡to tvoj nalog krene, geo-blokiramo tvoj grad, drÅ¾avu i svaku zemlju koju odabereÅ¡. Gradimo potpuno novu personu bez ikakve veze sa tvojim pravim identitetom. Za 4+ godine i 140+ klijenata, nijedan nije identifikovan.',
      },
      {
        q: 'Koliko realno mogu da zaradim?',
        a: 'NaÅ¡ sistem lansiranja cilja $20K+ u prvoj nedelji, ostvareno 140+ puta. Neki klijenti dostiÅ¾u $50K u prvih 14 dana. NaÅ¡ top klijent je preÅ¡ao $253K u jednom mesecu.',
      },
      {
        q: 'Kako znam da ovo nije prevara?',
        a: 'Na prvom pozivu ti odabiraÅ¡ bilo kog klijenta iz naÅ¡e liste. Logujemo se u Å¾ivi dashboard dok gledaÅ¡ - pravi prihodi, u realnom vremenu. Ne PDF. Ne screenshot. Ne naplaÄ‡ujemo niÅ¡ta unapred i zaradimo samo kada i ti zaradiÅ¡.',
      },
      {
        q: 'Nemam pratioce niti iskustvo. Mogu li da uspem?',
        a: 'Nula je naÅ¡a idealna startna pozicija - nema loÅ¡ih navika za oduÄavanje. Gradimo tvoj brend, strategiju i publiku od nule. Sve Å¡to trebaÅ¡ je ~20 sati nedeljno i volja da slediÅ¡ sistem koji je radio 140+ puta.',
      },
      {
        q: 'Da li moram da pokazujem lice?',
        a: 'Ne. Neki od naÅ¡ih najuspeÅ¡nijih klijenata nikad nisu pokazali lice. Izgradili smo potpuno anonimne persone. Tvoj nivo udobnosti postavlja granicu - mi projektujemo sve unutar nje.',
      },
      {
        q: 'Koliko uzimate?',
        a: 'NiÅ¡ta unapred. Radimo na podeli prihoda - zaradimo samo kada i ti zaradiÅ¡. Tvoj posveÄ‡eni tim, strategija i kompletne operacije su ukljuÄeni.',
      },
      {
        q: 'Koliko traje ugovor?',
        a: 'Nema zakljuÄavanja i nema minimalnog roka. Ako hoÄ‡eÅ¡ da odeÅ¡ u bilo kom trenutku, odeÅ¡ - nula naknada, nula penala, nula pitanja.',
      },
      {
        q: 'Kako izgleda onboarding?',
        a: 'Nakon prijave, stariji Älan tima je pregleda i odgovara za 5 minuta. Ako postoji fit, zakazujemo discovery poziv. VeÄ‡ina klijenata se lansira za 14 dana.',
      },
    ],
  },

  finalCta: {
    label: 'Tvoj potez',
    title: 'Za Dvanaest Meseci, Jedna Od Dve Stvari Ä†e Biti TaÄna.',
    col1: {
      heading: 'Bez tima',
      items: [
        'JoÅ¡ jedna godina kada si razmiÅ¡ljao/la a nisi poÄeo/la.',
        'GledaÅ¡ druge u tvojoj branÅ¡i kako zaraÄ‘uju Å¡estocifrene iznose.',
        'GovoriÅ¡ sebi da Ä‡eÅ¡ poÄeti sledeÄ‡eg meseca - opet.',
      ],
    },
    col2: {
      heading: 'Sa timom',
      items: [
        'Produkcijski tim je lansirao tvoj nalog u prvoj nedelji.',
        'Arhitektura privatnosti te Å¡titi od prvog dana.',
        'Isti sistem koji je izgradio svaki broj na ovoj strani - sada gradi tvoj.',
      ],
    },
    line: 'Isti dvanaest meseci u svakom sluÄaju. Jedina promenljiva je da li tim stoji iza tebe.',
    cta: { label: 'Prijavi se', href: '/site#apply' },
    disclaimer: '*Rezultati variraju u zavisnosti od niÅ¡e, publike i truda. ProÅ¡li rezultati ne garantuju buduÄ‡e.',
  },

  footer: {
    tagline: 'Promenila je sve. Niko nikad nije saznao.',
    cta: { label: 'Prijavi se', href: '/site#apply' },
    copy: `Â© ${new Date().getFullYear()} Velluto Nero. Sva prava zadrÅ¾ana.`,
    legal: [
      { label: 'Politika privatnosti', href: '/privacy' },
      { label: 'Uslovi koriÅ¡Ä‡enja', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
};

