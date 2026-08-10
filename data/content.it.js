export const siteDataIt = {
  nav: {
    logo: 'Velluto Nero',
    links: [
      { label: 'Risultati', href: '/it/rezultati' },
      { label: 'Servizi',   href: '#services' },
      { label: 'Risorse',   href: '/it/resursi' },
      { label: 'FAQ',       href: '#faq' },
    ],
    cta: { label: 'Candidati', href: '#apply' },
  },

  hero: {
    headline: 'BUILDING EMPIRES\nTOGETHER',
    subtext: "Non costruiamo il tuo account. Costruiamo la tua prossima vita.\nTi garantiamo lo standard dietro i numeri: la libertà di vivere dove vuoi, il lusso che hai immaginato, il tempo libero, la protezione dell'identità e un brand che sembra la copertina di una rivista.",
    cta: { label: 'UNISCITI ALLA LISTA D\'ATTESA', href: '#apply' },
    microcopy: 'Candidatura in 60 secondi · meno del 2% accettate · zero costi anticipati',
    stats: [
      { num: '$11M+', label: 'Generato per le creator',  idx: 1 },
      { num: '140+',  label: 'Clienti',                  idx: 2 },
      { num: '0',     label: 'Fughe di identità',        idx: 3, accent: true },
    ],
    statsRow2: [
      { num: '5+',   end: 5,   label: 'Anni di esperienza' },
      { num: '12+',  end: 12,  label: 'Paesi' },
      { num: '230+', end: 230, label: 'Dipendenti' },
    ],
  },

  problem: {
    label: 'PERCHÉ ABBIAMO FONDATO VELLUTO NERO',
    title: "Un'Agenzia Guidata da Donne, per Donne.",
    sub: "Abbiamo visto un'industria dominata da agenzie gestite da uomini che non capivano davvero le loro creator. Sapevamo che doveva esserci un modo migliore. Non gestiamo solo account — costruiamo imperi, con un team dedicato che rispetta i limiti e protegge la privacy di ogni creator come l'imprenditrice che è davvero.",
    stats: [
      { num: '5.000+',  label: 'Candidature ricevute' },
      { num: '0,4%',    label: 'Tasso di accettazione' },
      { num: '2/mese',  label: 'Nuove clienti' },
      { num: '3+ anni', label: 'Partnership media' },
      { num: '$11M+',   label: 'Generato per le creator' },
    ],
  },

  included: {
    label: "Cosa è incluso",
    title: 'Ogni Sistema di Cui Hai Bisogno — Già Operativo.',
    sub: 'Tre pilastri, costruiti e gestiti prima che tu pubblichi un singolo post.',
    cards: [
      {
        num: '01',
        title: 'La tua architettura identitaria',
        desc: "Una persona completamente separata, geo-bloccata dalla tua vita reale, progettata a uno standard che nessun operatore singolo può raggiungere.",
        items: [
          'Geo-blocco a livello di città e paese dal primo giorno',
          'Persona costruita senza alcuna sovrapposizione con la tua vera identità',
          'Protocolli sicuri di separazione dispositivi e account',
          'Monitoraggio DMCA su 500+ piattaforme, 24/7',
        ],
        link: { label: 'Scopri di più sulla privacy', href: '#' },
      },
      {
        num: '02',
        title: 'Il tuo content engine',
        desc: 'Strategia, programmazione e produzione — tutto nelle mani del tuo team, così puoi concentrarti su ciò che solo tu puoi fare.',
        items: [
          'Calendario contenuti completo pianificato ogni 30 giorni',
          'Programmazione post, didascalie e ottimizzazione',
          'Crescita del pubblico e gestione della community',
          'Monitoraggio performance e report mensili',
        ],
        link: { label: 'Vedi come funziona', href: '#' },
        reverse: true,
      },
      {
        num: '03',
        title: 'Il tuo sistema di guadagno',
        desc: 'Dalla strategia di prezzo alla prima settimana — il tuo team costruisce e gestisce il livello di monetizzazione mentre tu guadagni.',
        items: [
          'Selezione della nicchia e architettura dei prezzi',
          'Obiettivo $20K+ nella prima settimana, raggiunto 140+ volte',
          'Solo revenue share — niente anticipi, mai',
          'Nessun contratto — esci quando vuoi, senza penali',
        ],
        link: { label: 'Inizia a guadagnare', href: '#' },
      },
    ],
  },

  masina: {
    label: 'La Macchina',
    title: 'La Nostra Infrastruttura Lavora 24/7 Per Te.',
    sub: 'Mentre dormi, il nostro sistema gestisce attivamente il tuo account — contenuti, messaggi, analisi, protezione.',
    crm: {
      totalRevenue: '612.847',
      activeCreators: 61,
      avgMonthly: '$10.047',
      topEarner: '$253.917/mese',
    },
    phoneFarm: {
      title: 'Phone Farm',
      desc: '10+ dispositivi per creator. Posting 24/7, nessuno slot mancato.',
      devices: [
        { id: 1,  active: true,  label: 'Dispositivo 01', status: 'Posting' },
        { id: 2,  active: true,  label: 'Dispositivo 02', status: 'Messaggi' },
        { id: 3,  active: true,  label: 'Dispositivo 03', status: 'Posting' },
        { id: 4,  active: false, label: 'Dispositivo 04', status: 'Standby' },
        { id: 5,  active: true,  label: 'Dispositivo 05', status: 'Analisi' },
        { id: 6,  active: true,  label: 'Dispositivo 06', status: 'Posting' },
        { id: 7,  active: true,  label: 'Dispositivo 07', status: 'Messaggi' },
        { id: 8,  active: false, label: 'Dispositivo 08', status: 'Standby' },
        { id: 9,  active: true,  label: 'Dispositivo 09', status: 'Posting' },
        { id: 10, active: true,  label: 'Dispositivo 10', status: 'Scansione' },
      ],
    },
    creatorApp: {
      title: 'Creator App',
      desc: 'Carica contenuti, tieni traccia dei compiti e comunica direttamente con il tuo team.',
      tasks: [
        { label: 'Caricamento contenuti', done: true },
        { label: 'Revisione didascalie',  done: true },
        { label: 'Approvazione agenda',   done: true },
        { label: 'Messaggi fan',          done: false },
        { label: 'Report mensile',        done: false },
      ],
    },
    liveMetrics: [
      { label: 'Creator attive',    value: '61',    unit: '' },
      { label: 'Ricavi totali',     value: '$612K', unit: '+' },
      { label: 'Media mensile',     value: '$10K',  unit: '' },
      { label: 'Tempo di risposta', value: '<5',    unit: 'min' },
    ],
  },

  roster: {
    label: 'Roster',
    title: 'Creator Reali. Numeri Reali.',
    sub: 'Ogni risultato è verificato. Alla prima chiamata puoi scegliere qualsiasi cliente — accediamo in diretta.',
    cases: [
      {
        id: 'K.R.',
        niche: 'Lifestyle',
        duration: '3 mesi',
        before: '$0',
        after: '$161.423/mese',
        rank: 'Top 0.05%',
        quote: 'Tre mesi fa contavo le mance. Ora prenoto voli quando voglio.',
        months: [12, 28, 45, 72, 110, 161],
      },
      {
        id: 'S.T.',
        niche: 'Fitness',
        duration: '12 mesi',
        before: '$12.000/mese',
        after: '$253.917/mese',
        rank: 'Top 0.01%',
        quote: "Quasi non mi sono candidata. Un anno dopo sono in un attico e tutti pensano che lavori nel marketing.",
        months: [12, 40, 75, 110, 155, 210, 230, 245, 254],
      },
      {
        id: 'A.J.',
        niche: 'Glamour',
        duration: '4 mesi',
        before: '$3.000/mese',
        after: '$65.218/mese',
        rank: 'Top 0.3%',
        quote: 'Ho aspettato due settimane prima di candidarmi perché avevo paura. Ora lavoro da ovunque e il martedì non faccio nulla perché posso.',
        months: [3, 12, 28, 50, 65],
      },
      {
        id: 'M.V.',
        niche: 'Wellness',
        duration: '6 mesi',
        before: '$0',
        after: '$84.200/mese',
        rank: 'Top 0.1%',
        quote: 'Ho iniziato senza un singolo follower. Sei mesi dopo ho un team che gestisce tutto per me.',
        months: [8, 22, 40, 58, 72, 84],
      },
    ],
  },

  services: {
    label: 'COSA FACCIAMO',
    title: 'Full Management, Completamente.',
    sub: "La nostra agenzia offre un servizio all-inclusive — puoi affidarci ogni compito: marketing, gestione, manutenzione del profilo e messaggistica con i fan, fino alle questioni finanziarie e legali. Devi solo creare il contenuto concordato, e il tuo manager personale è disponibile 24 ore su 24, 7 giorni su 7.",
    quote: '4+ anni. 140+ clienti. Zero fughe di identità.',
    items: [
      { num: '01', icon: 'user-circle',     title: 'Personal Brand Manager',      body: 'Un brand manager privato che gestisce l\'organizzazione dei contenuti e guida strategicamente la crescita del tuo brand.' },
      { num: '02', icon: 'headset',         title: 'Dedicated Account Manager',   body: 'Il tuo manager personale disponibile 24/7 per ogni decisione operativa e strategica.' },
      { num: '03', icon: 'trending-up',     title: 'Advanced Traffic Marketing',  body: 'Strategie di funnel avanzate per la massima conversione di follower in abbonati.' },
      { num: '04', icon: 'book-open',       title: 'Content Direction Playbook',  body: 'Linee guida settimanali precise per le riprese, basate sui trend e sulla tua sensibilità.' },
      { num: '05', icon: 'messages-square', title: '24/7 Sales Chatting',         body: 'Operatori formati in psicologia delle vendite che gestiscono completamente il lavoro in inbox.' },
      { num: '06', icon: 'sparkles',        title: 'Brand Building',              body: 'Costruzione di un business digitale stabile a lungo termine e posizionamento professionale.' },
      { num: '07', icon: 'shield',          title: 'Legal & Financial Support',   body: 'Protezione legale dell\'immagine, rimozione della pirateria e ottimizzazione finanziaria trasparente.' },
      { num: '08', icon: 'smartphone',      title: 'Phone Farm AI',               body: 'Accesso esclusivo a una rete di 500 dispositivi dedicati per targetizzare i mercati US e IT.' },
      { num: '09', icon: 'lock',            title: 'Anti-Ban Protection',         body: 'Un sistema di account moltiplicati che garantisce che il traffico e i profitti rimangano protetti.' },
      { num: '10', icon: 'globe',           title: 'International Collabs',       body: 'Produzione premium e viaggi in Italia per collaborazioni con i top model del roster.' },
    ],
  },

  qualify: {
    label: 'Qualificazione',
    title: 'Accettiamo Meno del 2% delle Candidature.',
    sub: 'Quando ti unisci, un intero team viene costruito intorno a te. Possiamo farlo solo per persone completamente dedicate.',
    yesHeading: 'Questo fa per te se...',
    noHeading: 'Questo non fa per te se...',
    yes: [
      'Hai più di 18 anni e puoi dedicare regolarmente circa 10 ore a settimana.',
      'Vedi questo come una fonte di reddito seria, non solo come "testare le acque".',
      'La tua privacy è una priorità non negoziabile e vuoi essere sistematicamente protetta.',
      'Sei pronta ad imparare, seguire un sistema collaudato e non hai bisogno che qualcuno ti insegua per rispettare i tuoi impegni.',
      'Ci stai pensando da mesi e sei finalmente pronta a passare dal pensiero all\'azione.',
    ],
    no: [
      'Vuoi risultati rapidi senza un lavoro costante e regolare.',
      'Non sei a tuo agio con la creazione di contenuti per adulti.',
      'Vedi questo solo come un piano di riserva che stai ancora valutando, non come una decisione chiara che hai già preso.',
      'Ti aspetti di poter "sparire" per settimane — questo sistema richiede continuità.',
    ],
  },

  testimonials: {
    label: 'Storie',
    title: 'Tre Persone Che Non Pensavano Che Questo Facesse per Loro.',
    sub: 'Senza follower. Senza esperienza. Paure reali. L\'unica cosa che è cambiata è stato il team dietro di loro.',
    items: [
      {
        name: 'K.R.',
        rank: 'Top 0.05% · 3 mesi con Velluto Nero',
        amount: '$161.423/mese',
        then: 'Contava le mance al ristorante, divideva l\'affitto, zero follower',
        now: 'Ha lasciato il lavoro in 90 giorni, prenota voli d\'impulso, nessuna sveglia da marzo',
        quote: 'Tre mesi fa contavo le mance. Ora prenoto voli quando voglio. Non ho impostato una sveglia da marzo.',
      },
      {
        name: 'S.T.',
        rank: 'Top 0.01% · 12 mesi con Velluto Nero',
        amount: '$253.917/mese',
        then: 'Guadagnava €12/h, ha passato una settimana convinta che fosse tutto una truffa',
        now: 'Attico a 24 anni, gli amici pensano che lavori nel marketing',
        quote: "Quasi non mi sono candidata. Ho passato una settimana convinta che fosse una truffa. Un anno dopo tutti pensano che lavori nel marketing.",
      },
      {
        name: 'A.J.',
        rank: 'Top 0.3% · 4 mesi con Velluto Nero',
        amount: '$65.218/mese',
        then: 'Aveva paura di iniziare, ha aspettato due settimane prima di candidarsi',
        now: 'Full-time in 4 mesi, lavora da ovunque, libera il martedì',
        quote: 'Ho aspettato due settimane prima di candidarmi perché avevo paura. Ora lavoro da ovunque e il martedì non faccio nulla perché posso.',
      },
    ],
  },

  guarantee: {
    label: 'Garanzie',
    bigNum: '$20K',
    title: 'Tre Garanzie. Cumulative. Senza Piccolo Testo.',
    items: [
      { label: 'Lancio',   text: 'Obiettivo $20K+ nella prima settimana, raggiunto 140+ volte da zero. Niente anticipi — guadagniamo solo quando guadagni tu.' },
      { label: 'Supporto', text: 'Tempo di risposta sotto i 5 minuti, 24/7. Non un obiettivo — uno standard operativo misurato.' },
      { label: 'Uscita',   text: 'Vai quando vuoi. Zero commissioni, zero penali, zero domande. Nessun contratto, mai.' },
    ],
    cta: { label: 'Candidati', href: '#apply' },
  },

  faq: {
    label: 'Domande',
    title: 'Risposte Dirette. Senza Piccolo Testo.',
    sub: 'Le domande che ti stai già facendo — risposte direttamente.',
    items: [
      {
        q: 'Lo scoprirà qualcuno che conosco?',
        a: "Prima che il tuo account parta, geo-blocchiamo la tua città, il tuo paese e ogni paese che scegli. Costruiamo una persona completamente nuova senza alcun collegamento con la tua vera identità. In 4+ anni e 140+ clienti, nessuna è stata identificata.",
      },
      {
        q: 'Quanto posso guadagnare realisticamente?',
        a: 'Il nostro sistema di lancio punta a $20K+ nella prima settimana, raggiunto 140+ volte. Alcune clienti raggiungono $50K nei primi 14 giorni. La nostra top client ha superato $253K in un solo mese.',
      },
      {
        q: 'Come faccio a sapere che non è una truffa?',
        a: "Alla prima chiamata scegli qualsiasi cliente dalla nostra lista. Accediamo a una dashboard live mentre guardi — ricavi reali, in tempo reale. Nessun PDF. Nessuno screenshot. Non addebitiamo nulla in anticipo e guadagniamo solo quando guadagni tu.",
      },
      {
        q: 'Non ho follower né esperienza. Posso avere successo?',
        a: "Zero è la nostra posizione di partenza ideale — nessuna cattiva abitudine da disimparare. Costruiamo il tuo brand, la tua strategia e il tuo pubblico da zero. Tutto ciò di cui hai bisogno è ~20 ore a settimana e la volontà di seguire un sistema che ha funzionato 140+ volte.",
      },
      {
        q: 'Devo mostrare il mio viso?',
        a: "No. Alcune delle nostre clienti di maggior successo non hanno mai mostrato il viso. Abbiamo costruito persone completamente anonime. Il tuo livello di comfort imposta il confine — noi progettiamo tutto al suo interno.",
      },
      {
        q: 'Quanto prendete?',
        a: 'Niente in anticipo. Lavoriamo con una divisione dei ricavi — guadagniamo solo quando guadagni tu. Il tuo team dedicato, la strategia e le operazioni complete sono inclusi.',
      },
      {
        q: 'Quanto dura il contratto?',
        a: 'Nessun blocco e nessun termine minimo. Se vuoi andartene in qualsiasi momento, vai — zero commissioni, zero penali, zero domande.',
      },
      {
        q: "Come funziona l'onboarding?",
        a: "Dopo la candidatura, un membro senior del team la esamina e risponde entro 5 minuti. Se c'è compatibilità, programmiamo una discovery call. La maggior parte delle clienti si lancia entro 14 giorni.",
      },
    ],
  },

  finalCta: {
    label: 'La tua mossa',
    title: 'In Dodici Mesi, Una di Due Cose Sarà Vera.',
    col1: {
      heading: 'Senza un team',
      items: [
        'Un altro anno passato a pensarci invece di farlo.',
        'Guardi gli altri nel tuo settore guadagnare cifre a sei zeri.',
        'Ti dici che inizierai il mese prossimo — di nuovo.',
      ],
    },
    col2: {
      heading: 'Con un team',
      items: [
        'Un team di produzione ha lanciato il tuo account nella prima settimana.',
        "Un'architettura della privacy ti protegge dal primo giorno.",
        'Lo stesso sistema che ha costruito ogni numero su questa pagina — ora costruisce il tuo.',
      ],
    },
    line: 'Gli stessi dodici mesi in ogni caso. L\'unica variabile è se un team sta dietro di te.',
    cta: { label: 'Candidati', href: '#apply' },
    disclaimer: '*I risultati variano in base alla nicchia, al pubblico e all\'impegno. I risultati passati non garantiscono quelli futuri.',
  },

  footer: {
    tagline: 'Ha cambiato tutto. Nessuno lo ha mai scoperto.',
    cta: { label: 'Candidati', href: '#apply' },
    copy: `© ${new Date().getFullYear()} Velluto Nero. Tutti i diritti riservati.`,
    legal: [
      { label: 'Privacy policy',    href: '/privacy' },
      { label: 'Termini di utilizzo', href: '/terms' },
      { label: 'Cookies',           href: '/cookies' },
    ],
  },
};
