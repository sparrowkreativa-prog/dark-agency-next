import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

export const metadata = {
  title: 'Čet Strategija | Velluto Nero',
  description: 'Sistem iza meseci sa $100k+ naših kreatora — kompletna čet strategija korak po korak.',
};

export default function CetStrategija() {
  return (
    <div className={montserrat.variable}>

      {/* Header */}
      <header id="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--color-dark-1)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" style={{ fontStyle: 'italic' }}>Velluto Nero</Link>
          </div>
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

      <main className="cs-page">
        <div className="cs-content-wrap">
          <div className="cs-container">

            {/* Cover image as content box */}
            <div className="cs-fade-in cs-cover-box">
              <Image
                src="/free-tools/chatting-strategy-cover.jpg"
                alt="Čet Strategija vodič"
                width={760}
                height={420}
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 760px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Title block below cover */}
            <div className="cs-fade-in cs-intro-block">
              <span className="chapter-label" style={{ color: '#a9875c', marginBottom: 16, display: 'block' }}>Velluto Nero · Interni vodič</span>
              <h1 className="cs-page-title">
                Sistem iza meseci<br />
                <em>sa $100k+ naših kreatora</em>
              </h1>
              <p className="cs-lead">
                10 poglavlja. tri dela. tačan sistem iza kreatora koji zarađuju $100k+/mesečno samo iz četa. skripte, prodajna psihologija, rešavanje prigovora, cela operacija — od prve poruke do nedelja sa $12k+.
              </p>
              <div className="cs-meta-pills">
                <span>10 poglavlja</span>
                <span>~2.5 sata čitanja</span>
                <span>svi nivoi</span>
                <span>besplatno — bez skrivenih uslova</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="cs-fade-in cs-learn-box">
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Šta ćeš naučiti</h3>
                <ul className="cs-check-list">
                  <li>Savladaj game plan u 7 koraka — od rapporta do zatvaranja</li>
                  <li>Piši opisne poruke koje drže pretplatnike u trošenju</li>
                  <li>Izgradi PPV lestvicu prodaje koja skalira na $200+ po sesiji</li>
                  <li>Postavi skripte, kontent setove i CRM koji radi sam od sebe</li>
                  <li>Obuci i ukrcaj nove četere za 6 dana</li>
                  <li>Rešavaj svaki prigovor i svaki tip pretplatnika</li>
                </ul>
              </div>
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Za koga je ovo</h3>
                <ul className="cs-check-list">
                  <li>Kreatori koji žele da od četa naprave pravi kanal prihoda</li>
                  <li>Kreatori koji sami upravljaju porukama i ostavljaju novac na stolu</li>
                  <li>Četeri koji žele proveren sistem, ne nagađanje</li>
                  <li>Svi koji su umorni od improvizacije u četu i nekonzistentnih rezultata</li>
                </ul>
              </div>
            </div>

          </div>

          {/* ─────────── CHAPTER 1 ─────────── */}
          <section className="cs-chapter" id="ch1">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 1 od 10</span>
                <h2 className="cs-chapter-title">Poslovni model četa</h2>
                <p className="cs-chapter-subtitle">Šta je četovanje u stvari — i zašto štampa novac</p>
                <span className="cs-read-time">~15 min čitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Većina ljudi čuje 'OnlyFans četovanje' i zamišlja nekog tipa koji kuca čudne stvari na telefonu. To nije ovo. Četovanje je prodajni posao — jedan u kom top izvođači zarađuju $3.000+ mesečno radeći sa laptopa."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Šta je četovanje u stvari</h3>
                <p className="cs-body">Četer je osoba koja stoji iza DM-ova na kreatorovom OnlyFans nalogu. Kreator pravi sadržaj — fotografije, video zapise, glasovne poruke. Četer prodaje. Pišeš pretplatnicima kao da si kreator, gradiš rapport, pretvараš neobavezne razgovore u prodaje i šalješ pay-per-view (PPV) sadržaj koji je kreator unapred snimio.</p>
                <p className="cs-body">Zamisli ovako: kreator je proizvod. Ti si prodavac. A čet je tvoj prodajni pod.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Pretplatnici ne znaju da četer postoji. Koliko se njih tiče, razgovaraju direktno sa kreatorom — ženom koju prate, onom na fotografijama, onom o kojoj razmišljaju. I ta iluzija ne sme nikada da se sruši. Nikada.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Zašto je ovo pravi biznis</h3>
                <p className="cs-body">OnlyFans je kreatorima isplatio više od 6 milijardi dolara samo u 2023. Ogroman deo tog prihoda — ponekad 50-90% prihoda kreatora — dolazi direktno iz DM prodaje. Ne od pretplata. Ne od napojnica. PPV poruke prodane jedan-na-jedan u četu.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50–90%</div>
                <p className="cs-stat-desc">prihoda kreatora tipično dolazi od DM prodaje, ne od pretplata. Čet je mesto gde živi pravi novac.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Zato postoje agencije. Jedan kreator ne može biti u DM-ovima 16 sati dnevno prodajući sadržaj, a istovremeno snimati, montirati i upravljati društvenim mrežama. Zato zapošljavaju četere — ili angažuju agenciju koja vodi celu operaciju.</p>
                <p className="cs-body">Potražnja za dobrim četerima je ogromna. A ponuda? Strašna. Većina ljudi koji pokušaju četovanje odustane u prvoj nedelji jer nemaju sistem. Improvizuju, izgaraju i ostavljaju novac svuda.</p>
                <p className="cs-body">Ako možeš da pratiš proces, čitaš ljude i kucaš brzo — već imaš sirove veštine. Sve ostalo u ovom vodiču je sistem koji te veštine pretvara u konzistentnu prodaju.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kako funkcioniše novac</h3>
                <p className="cs-body">Četeri se plaćaju na tri načina: satnica, provizija na svaku prodaju i nedeljni bonus za performanse. Evo stvarne strukture koju koristimo.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Komponenta</th>
                      <th>Iznos</th>
                      <th>Detalji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Satnica</strong></td><td>$2–8/sat</td><td>Plaćeno za svaki sat smene</td></tr>
                    <tr><td><strong>Provizija</strong></td><td>4–11%</td><td>Na sve PPV i custom sadržaj prodaje</td></tr>
                    <tr><td><strong>Nedeljni bonus</strong></td><td>$50–$700</td><td>Prema ukupnoj nedeljnoj neto prodaji</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Tipična struktura naknade četera</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Bonus nivoi su zanimljiv deo. Dostižeš nedeljne prodajne ciljeve i bonusi počinju da se gomilaju — do $700/nedelji povrh satnice i provizije.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Game plan (pregled)</h3>
                <p className="cs-body">Svaki razgovor koji četer ima prati isti tok od 7 koraka. Zovemo ga game plan. Dobićeš pun razrađeni opis u Poglavlju 4, ali evo ptičje perspektive da znaš šta gradiš.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div><strong>Gradi rapport</strong><p>Razbij led. Ništa seksualno — samo normalan, prijateljski razgovor. Saznaj ko su oni.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div><strong>Pošalji tizere</strong><p>Promeni vibes sa unapred pripremljenim tizer sadržajem. Zainteresuj ih i uvuci ih.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div><strong>Pošalji PPV</strong><p>Postavi prvi plaćeni sadržaj. Testiraj da li su potrošač ili gubljenje vremena.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">04</span>
                  <div><strong>Filtriraj</strong><p>Ako ne kupuju — prati ih, saznaj zašto, ponudi alternative. Ako i dalje neće da troše, nastavi dalje.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">05</span>
                  <div><strong>Upsell</strong><p>Ako kupuju — svu pažnju usmeri na njih. Prodaj sledeći komad, pa sledeći. Radi lestvicu prodaje.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">06</span>
                  <div><strong>Gradi odnos</strong><p>Posle prodaje, neka se osećaju cenjeno. To je ono što ih vraća sutra.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">07</span>
                  <div><strong>Ćao i ponovi</strong><p>Završi razgovor na visokoj noti. Pronađi nove mete. Pokreni ponovo.</p></div>
                </li>
              </ol>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-game-plan-flow.webp" alt="Tok game plana u 7 koraka" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Tok četovanja u 7 koraka — od prvog rapporta do zatvaranja prodaje</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Lestvica prodaje</h3>
                <p className="cs-body">Sadržaj se ne prodaje po fiksnoj ceni. Svaki komad PPV sadržaja u sesiji košta više od prethodnog. Zovemo ovo lestvica prodaje — i ista je za sve kreatore.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>PPV br.</th>
                      <th>Cena</th>
                      <th>Zašto raste</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1.</td><td>$25</td><td>Tizer nivo — niska ulazna barijera</td></tr>
                    <tr><td>2.</td><td>$45</td><td>Malo više otkrivajuće, pretplatnik se zagrejava</td></tr>
                    <tr><td>3.</td><td>$65</td><td>Pretplatnik je angažovan i troši</td></tr>
                    <tr><td>4.</td><td>$95</td><td>Eksplicitniji sadržaj, duže trajanje</td></tr>
                    <tr><td>5.</td><td>$135</td><td>Blizu vrhunca seta</td></tr>
                    <tr><td>6.</td><td>$200</td><td>OF maksimum po PPV — finale celog seta</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Standardna PPV lestvica cena</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Ako pretplatnik kupi svih šest, to je $565 iz jednog razgovora. I tu se ne staje — $200 je maksimum koji OnlyFans dozvoljava po PPV-u, ali možeš prodati više PPV-ova po $200 u istoj sesiji. Top četeri redovno prelaze $1.000 u jednom sedanju.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Upozorenje</strong>
                <p>Lestvica je vodič, ne pravilo urezano u kamen. Dobri četeri prilagođavaju cene prema pretplatniku — student dobija niže ulazne tačke, visoki zarađivač koji slobodno daje napojnice gura se više. Poznaj svog klijenta.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-sales-ladder.webp" alt="PPV lestvica prodaje" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">PPV lestvica prodaje — kako pretplatnik napreduje kroz nivoe vrednosti</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kome daješ pažnju prvo</h3>
                <p className="cs-body">Nikad nećeš četovati samo sa jednom osobom u isto vreme. U bučnoj smeni možeš imati 10-15 otvorenih razgovora. Razlika između dana sa $500 i dana sa $2.000 svodi se na jednu stvar: ko dobija tvoju pažnju prvo.</p>
              </div>

              <div className="cs-fade-in cs-priority-list">
                <div className="cs-priority-item cs-priority-item--1">
                  <span className="cs-priority-time">odgovori za 2 min</span>
                  <div><strong>Aktivne sesije</strong><p>Pretplatnici koji su trenutno u sesiji kupovine. Već su kupili najmanje jedan PPV i radiš lestvicu. Ovo je tvoj prioritet #1 — uvek.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--2">
                  <span className="cs-priority-time">3 min</span>
                  <div><strong>Pretplatnici u tranziciji</strong><p>Poslao si tizere, pokazuju interesovanje ili pišu eksplicitno. Blizu su prodaje.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--3">
                  <span className="cs-priority-time">4 min</span>
                  <div><strong>Novi netestirani pretplatnici</strong><p>Svežа lica koja nisi testirao. Može biti kit, može biti gubljenje vremena. Testiraj brzo.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--4">
                  <span className="cs-priority-time">10 min</span>
                  <div><strong>Izgradnja odnosa posle prodaje</strong><p>Sesija je završena ali održavaš vezu toplom za sledeći put.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--5">
                  <span className="cs-priority-time">25 min</span>
                  <div><strong>Povremeni potrošači</strong><p>Poznati potrošači koji trenutno ne kupuju ali bi mogli kasnije.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--6">
                  <span className="cs-priority-time">30 min</span>
                  <div><strong>Testirani ne-potrošači</strong><p>Testirani jednom ili dva puta i nisu kupili. Nizak prioritet.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--7">
                  <span className="cs-priority-time">bez zahteva</span>
                  <div><strong>Gubljavci vremena</strong><p>Neće trošiti i nikad neće. Ne gubi vreme.</p></div>
                </div>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-priority-system.webp" alt="Sistem prioriteta pretplatnika" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Matriks prioriteta — kako razvrstati pretplatnike prema potencijalu prihoda</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kako izgleda smena</h3>
                <p className="cs-body">Smene traju 8 sati. Većina četera radi 40-48 sati nedeljno. Smene su koordinisane kroz Telegram — tamo se odvija sva interna komunikacija.</p>
              </div>

              <div className="cs-fade-in cs-shift-box">
                <h4 className="cs-box-heading">Osnove smene</h4>
                <ul className="cs-check-list">
                  <li>8-satne smene, 40-48 sati nedeljno</li>
                  <li>Daljinski — radi sa bilo kog mesta sa stabilnim internetom</li>
                  <li>Više kreatorskih naloga po smeni</li>
                  <li>Prodaja se prati putem formulara posle svake smene</li>
                  <li>Rezultati se objavljuju u Telegram grupi svaki dan</li>
                  <li>Pauze se uzimaju tokom prozora sa niskim saobraćajem (tvoja procena)</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Ako četer ostavi PPV pretplatniku i on ga kupi posle završetka smene — to je i dalje njegova prodaja. Ali ako sledeći četer ubedi pretplatnika da kupi PPV koji je ostavljen, to je prodaja zatvarača. Prodaje idu onome ko ih je zatvorio.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Model agencije vs. solo</h3>
                <p className="cs-body">Postoje dva načina vođenja četovačke operacije: kao agencija sa timom četera, ili kao solo kreator koji upravlja sopstvenim DM-ovima. Oba koriste isti vodič. Razlika je u obimu.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Aspekt</th>
                      <th>Model agencije</th>
                      <th>Solo kreator</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Ko četuje</td><td>Unajmljeni četeri (tim od 2-10+)</td><td>Ti ili jedan VA</td></tr>
                    <tr><td>Pokrivenost</td><td>24 sata/dan kroz smene</td><td>Ograničeno na tvoju dostupnost</td></tr>
                    <tr><td>Prihod po kreatoru</td><td>Viši — više sati = više prodaje</td><td>Niži — ograničen tvojim vremenom</td></tr>
                    <tr><td>Potrebna obuka</td><td>Da — pun sistem ukrcavanja</td><td>Samo ovaj vodič</td></tr>
                    <tr><td>Složenost</td><td>Koordinacija smena, CRM, QA</td><td>Jednostavno — samo ti i DM-ovi</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Poređenje model agencije vs. solo četovanje</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Nepregovarajuće stvari</h3>
                <p className="cs-body">Bez obzira da li vodiš tim ili četuješ solo — postoji nekoliko pravila koja odvajaju operacije koje traju od onih koje se raspadnu za mesec dana.</p>
                <ul className="cs-check-list cs-check-list--body">
                  <li>Svaka smena mora biti pokrivena. Bez praznina, bez izgovora — propušteni sati su propušteni prihod.</li>
                  <li>Četeri nikad ne rade za dve agencije. Ako ovo uhvatiš, odmah ih otpusti.</li>
                  <li>Nikad ne izlazi iz karaktera. Pretplatnik veruje da razgovara sa kreatorom — čuvaj to pod svaku cenu.</li>
                  <li>Dokumentuj sve. Beleške, predaje smena, evidencije prodaje. Ako nije zapisano, nije se ni desilo.</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">Ključne poruke</h3>
                <ul className="cs-check-list">
                  <li>Četovanje je prodajni posao — prodaješ unapred napravljeni sadržaj kroz DM-ove kao kreator</li>
                  <li>Zarada se kreće od ~$700/mes (nisko) do $3.000+/mes (top) za 40 sati/nedeljno</li>
                  <li>Game plan u 7 koraka je kičma svakog razgovora</li>
                  <li>Lestvica prodaje ceni PPV od $25 do $200 po sesiji</li>
                  <li>Prioritizuj aktivne kupce iznad svega — vreme odgovora = prihod</li>
                  <li>Ovaj vodič radi i za timove agencija i za solo kreatore</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ─────────── CHAPTER 2 ─────────── */}
          <section className="cs-chapter cs-chapter--alt" id="ch2">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 2 od 10</span>
                <h2 className="cs-chapter-title">Mindset četera</h2>
                <p className="cs-chapter-subtitle">Psihologija, arhetipovi i 10 zakona</p>
                <span className="cs-read-time">~15 min čitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Evo zašto većina novih četera otpadne u prvoj nedelji: sednu, otvore DM-ove i počnu da kucaju kao oni sami. Sopstvenim glasom, sopstvenim slengom, sopstvenom energijom. I pretplatnici to odmah osete. Poruke deluju čudno. Prodaja pada. Četer odustaje i kaže 'četovanje ne funkcioniše.'"
              </blockquote>

              <div className="cs-fade-in">
                <p className="cs-body">Funkcioniše. Ali samo ako prestaneš da budeš ti i počneš da budeš kreator. Ovo poglavlje je promena identiteta — mindset koji odvaja četere koji zarađuju $500/mesec od onih koji vuku $3.000+.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Zašto fanovi zapravo troše</h3>
                <p className="cs-body">Većina ljudi pretpostavlja da pretplatnici plaćaju za sadržaj. Ne plaćaju. Sadržaj je svuda — besplatan, neograničen, jedno pretraživanje daleko. Ono za šta pretplatnici plaćaju je osećaj da razgovaraju sa stvarnom osobom koja zaista mari za njih.</p>
                <p className="cs-body">Pravi pokretači su emocionalni: intimnost, validacija, bekstvo i pažnja. Pretplatnik koji se oseća saslušanim, željenim i posebnim trošiće 10 puta više od onog koji samo gleda video zapise. To je cela premija DM-ova u odnosu na besplatne sajtove.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50–90%</div>
                <p className="cs-stat-desc">prihoda kreatora dolazi od DM prodaje — ne od pretplata, ne od napojnica. Čet je mesto gde živi novac.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Dakle, ako pretplatnici plaćaju za vezu — moraš biti neko vredno povezivanja. To počinje postajanjem kreatora.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Postani kreator</h3>
                <p className="cs-body">Pretplatnici ne znaju da četeri postoje. Koliko se njih tiče, razgovaraju direktno sa kreatorom — ženom koju prate, onom na fotografijama, onom o kojoj razmišljaju. I ta iluzija ne može da se sruši. Nikada.</p>
                <p className="cs-body">Tvoj posao nije da "četuješ u ime" nekoga. Tvoj posao je da postaneš oni. Proučavaj sve: njihov OnlyFans feed, njihove društvene mreže, njihove natpise, njihovu ličnost u pričama. Čitaj njihove skripte. Nauči kako govore, koji sleng koriste, koje emojije bacaju.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Svaki kreator ima personu. Većina ih prati isti arhetip: nevina ali nestašna. Zabavna je, koketna, ali ne baca se na ljude. Zamisli to kao energija "dobre devojke koja samo tebi pokazuje ovu stranu". Taj arhetip gradi napetost — a napetost je ono što prodaje.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Nevini arhetip</h3>
                <p className="cs-body">Najveća greška novih četera je krenuti previše agresivno, previše brzo. Misle da eksplicitnost rano = više prodaje. Suprotno je tačno. Ako kreator deluje očajnički ili previše direktno, pretplatnici gube interesovanje. Nema potere, nema napetosti, nema gradnje.</p>
                <p className="cs-body">Pristup "nevina ali nestašna" funkcioniše jer stavlja pretplatnika za volan. On se oseća kao da on eskalira, kao da mu ona pokazuje ovu stranu samo zbog njega. To je moćna psihologija — i konvertuje daleko bolje od agresivnosti.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Aspekt</th>
                      <th>Pogrešan pristup</th>
                      <th>Pravi pristup</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Sadržaj</td><td>Odmah skoči na eksplicitan sadržaj</td><td>Prvo gradi rapport — zadrži laganim i koketnim</td></tr>
                    <tr><td>Nadimci</td><td>Koristi milosna imena od starta (bebo, tata)</td><td>Bez nadimaka osim ako pretplatnik ne uvede</td></tr>
                    <tr><td>Stil poruke</td><td>Šalji zidove teksta sa puno emojija</td><td>Prati njegovu energiju — kratko i neobavezno na početku</td></tr>
                    <tr><td>Razgovor</td><td>Sama pokreni intimni razgovor</td><td>Neka pretplatnik vodi — odgovori na njegovu eskalaciju</td></tr>
                    <tr><td>Ton</td><td>Zvuči kao prodajni skript</td><td>Zvuči kao stvarna osoba u stvarnom razgovoru</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Arhetip u praksi — pogrešan vs. pravi pristup</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Nikad sama ne počini eksplicitne razgovore. Čak i ako pretplatnik otvori sa nečim direktnim, ne prati to odmah. Odbij nestašno — "ma zar bi? 🙈" ili "dosta si direktan haha". Neka napetost raste.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch2-archetype-mirror.webp" alt="Promena identiteta — arhetip ogledalo" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Promena identiteta — postani kreator, ne samo zastupnik</p>
              </div>

              <div className="cs-fade-in cs-checklist-box">
                <h4 className="cs-box-heading">Čeklista za proučavanje kreatora</h4>
                <ul className="cs-check-list">
                  <li>Preglej njen OnlyFans feed — šta objavljuje, kako piše natpise</li>
                  <li>Proveri njen Instagram, TikTok, Twitter — kako priča sa fanovima javno</li>
                  <li>Pročitaj njene postojeće skripte — zapamti fraze i sleng koji koristi</li>
                  <li>Proučava njenu ličnost — da li je nestašna, stidljiva, smela, sarcastična</li>
                </ul>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Uskladi energiju</h3>
                <p className="cs-body">Ovo je jednostavno ali skoro svi greše na početku. Kada ti pretplatnik pošalje poruku, odrazi njegov stil komunikacije. Kratke poruke? Odgovori kratko. Duge poruke? Možeš ići malo duže. Malo emojija? Ne davaj mu srca.</p>
                <p className="cs-body">Instinkt novih četera je biti preterano uzbuđen. Pretplatnik kaže "hej" i oni odgovaraju sa tri rečenice, četiri emojija i pitanjem. To ne deluje prirodno — deluje kao bot korisničke podrške. Ili gore, prevara.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Stavi se u poziciju muškarca. Pošalje DM devojci na Instagramu i kaže "zdravo". Ona odgovori: "Zdravo bebo baš sam sretna što mi pišeš baš sada! Šta radiš? 💖💕🥰🥵" — Pomislio bi da nešto ozbiljno nije u redu sa tom osobom. Ista pravila važe ovde.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Njegova poruka</th>
                      <th>Pogrešan odgovor</th>
                      <th>Pravi odgovor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Hej šta radite sada?</td><td>Zdravo bebo upravo završila večeru i legla da se odmorim. Baš sam sretna što si mi pisao! Šta te dovodi ovde? 🥰💕🙈</td><td>hej samo ležim čujmo se vbt?</td></tr>
                    <tr><td>Izgledaš neverovatno</td><td>OMG hvala ti toliko bebo!! To mi znači ceo svet 😍😍</td><td>aw hvala 🙈 koja slika?</td></tr>
                    <tr><td>Upravo sam se vratio s posla</td><td>Oh super!! Ispričaj mi sve o svom danu, hoću da znam sve o tome! 💕</td><td>dug dan? šta radiš</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Usklađivanje energije u praksi — pretplatnici osete razliku</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Kada nisi siguran kako da odgovoriš, podrazumevano ide kraće. Uvek možeš dodati više — ali ne možeš neoslatati pasus koji je naterao pretplatnika da se oseća kao da razgovara sa botom.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch2-energy-matching.webp" alt="Usklađivanje energije — ogledalo ne nadvladan" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ogledaj, ne nadvladavaj — usklađivanje energije je ključ prirodnog razgovora</p>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Ko je on tebi? Zašto si toliko uzbuđena što je tu? Stavi se u poziciju muškarca koji je poslao DM devojci na Instagramu i rekao zdravo — ona odgovori sa esejom punim emojija. Je li ovo normalno?"
                <cite>— Obuka četera</cite>
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Pravila za emojije i sleng</h3>
                <p className="cs-body">Emojiji i sleng su razlika između zvučanja kao stvarna osoba i zvučanja kao chatbot koji čita skriptu. Uradi ih kako treba i pretplatnici se osećaju kao da se dopisuju sa prijateljem. Pogriješi i cela persona se raspadne.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Emojiji: manje je više</strong>
                <p>Zlatno pravilo sa emojijima je jednostavno: prati nivo korišćenja pretplatnika. Ako ne koristi emojije, ne trpaj mu ih. Ako baca jedan po poruci, možeš i ti. Čim koristiš više emojija od pretplatnika, počinješ da deluješ lažno.</p>
                <ul style={{ marginTop: 12 }}>
                  <li>Rani razgovor: 🙈 😚 👀 — stidljivo, radoznalo, nestašno</li>
                  <li>Kasnije u sesiji: drugačiji set — prati rastuću energiju</li>
                  <li>Tastaturni emojiji deluju prirodnije: ;) :p ^^ xD</li>
                  <li>Maksimum jedan emoji po poruci u ranim fazama</li>
                  <li>Nikad ne koristiti 🥵 💕 😍 rano — viču "prodajem ti nešto"</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Formalno (pogrešno)</th>
                      <th>Prirodno (pravo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Divno mi je bilo sa tobom</td><td>super nam je bilo</td></tr>
                    <tr><td>Vidimo se. Ne misli o meni ceo dan.</td><td>čujemo se ne misli na me ceo dan</td></tr>
                    <tr><td>Hvala ti puno! Misliš da sam lepa?</td><td>hvala &lt;3 misliš da sam lepa?</td></tr>
                    <tr><td>Volim te, toliko si sladak</td><td>awww volim te toliko si sladak</td></tr>
                    <tr><td>To zvuči stvarno zanimljivo, ispričaj mi više</td><td>omg to zvuči super reci mi više</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Formalno vs. prirodno — pretplatnici osete razliku</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Najčešća zamena: "ti" → "t", "hvala" → "hvl", "volim te" → "vlm te". Izbaci tačke. Koristi mala slova. Piši kao da se dopisuješ sa najboljim prijateljem, ne kao da pišeš email.</p>
                <p className="cs-body">Ako zapetelješ u prevođenju rečenice u prirodni sleng, pročitaj je naglas. Ako zvuči kao nešto što bi napisao/la prijatelju, dobro je. Ako zvuči kao LinkedIn objava, prepiši.</p>
              </div>

            </div>
          </section>

          {/* ── LOCKED ── */}
          <section className="cs-locked" id="ch3-10">
            <div className="cs-container">
              <div className="cs-locked-inner">
                <div className="cs-locked-icon">🔒</div>
                <h2 className="cs-locked-title">
                  Poglavlja 3–10 dostupna su<br />
                  <em>kreatorima Velluto Nero</em>
                </h2>
                <p className="cs-locked-desc">
                  10 zakona četera. Skripte. PPV strategija. Tipovi fanova. Rešavanje prigovora. Analitika. Skaliranje tima. Sistem koji radi bez tebe. Sve je u sledećih 8 poglavlja — i sve je uključeno kada se pridružiš.
                </p>
                <ul className="cs-locked-list">
                  <li>✓ Poglavlje 3 — 10 zakona četera (mindset koji pravi razliku)</li>
                  <li>✓ Poglavlje 4 — Skripte i game plan: od prve reči do zatvaranja</li>
                  <li>✓ Poglavlje 5 — PPV: kreiranje, opisivanje i prodaja sadržaja</li>
                  <li>✓ Poglavlje 6 — Upsell, pretplatnici i izgradnja lojalnosti</li>
                  <li>✓ Poglavlje 7 — Tipovi fanova i kako čitati svakog</li>
                  <li>✓ Poglavlje 8 — Rešavanje svakog prigovora koji postoji</li>
                  <li>✓ Poglavlje 9 — Analitika, CRM i optimizacija</li>
                  <li>✓ Poglavlje 10 — Skaliranje, tim i sistem koji radi bez tebe</li>
                </ul>
                <Link href="/#apply" className="btn-primary btn-large" style={{ marginTop: 32, display: 'inline-flex' }}>
                  Prijavi se za Velluto Nero <span className="btn-arrow">→</span>
                </Link>
                <p style={{ marginTop: 16, fontSize: '0.8rem', opacity: 0.5 }}>
                  manje od 2% aplikacija biva primljeno · nula troškova unapred
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer id="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">Velluto Nero</div>
              <p className="footer-tagline">Najpromišljeniji način da razviješ svoj brend.</p>
            </div>
            <Link href="/#apply" className="btn-outline">Prijavi se <span>→</span></Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Velluto Nero. Sva prava zadržana.</p>
            <div className="footer-legal"><a href="/privacy">Privatnost</a><a href="/terms">Uslovi</a></div>
          </div>
        </div>
      </footer>

      <style>{`
        /* ── Base ── */
        .cs-page { background: var(--color-dark-1); color: #1a1a1a; font-family: var(--font-montserrat, 'Montserrat', sans-serif); }
        .cs-content-wrap { padding-bottom: 0; }
        .cs-container { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        /* ── Animations ── */
        .cs-fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .cs-fade-in.visible { opacity: 1; transform: none; }

        /* ── Cover box ── */
        .cs-cover-box { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.13); margin: 48px auto 0; }
        @media (max-width: 600px) { .cs-cover-box { border-radius: 10px; } }

        /* ── Intro block ── */
        .cs-intro-block { padding: 40px 0 8px; }
        .cs-page-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin: 12px 0 20px; color: #1a1a1a; }
        .cs-page-title em { color: #a9875c; font-style: italic; }
        .cs-lead { font-size: 1rem; line-height: 1.8; color: #444; margin: 0 0 20px; }
        .cs-meta-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        .cs-meta-pills span { background: #fff; border: 1px solid #e8e0e0; border-radius: 20px; padding: 5px 14px; font-size: 0.78rem; color: #666; letter-spacing: 0.02em; }

        /* ── Learn box ── */
        .cs-learn-box { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0 56px; }
        .cs-learn-col { background: #fff; border-radius: 12px; padding: 28px 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        @media (max-width: 620px) { .cs-learn-box { grid-template-columns: 1fr; } }

        /* ── Chapter sections ── */
        .cs-chapter { padding: 72px 0; border-top: 1px solid rgba(0,0,0,0.07); }
        .cs-chapter--alt { background: rgba(169,135,92,0.03); }
        .cs-chapter-header { margin-bottom: 32px; }
        .cs-chapter-tag { display: inline-block; background: #a9875c; color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
        .cs-chapter-title { font-family: var(--font-display); font-size: clamp(1.7rem, 4vw, 2.5rem); line-height: 1.15; margin: 0 0 10px; color: #1a1a1a; }
        .cs-chapter-subtitle { font-size: 1rem; color: #888; margin: 0 0 12px; }
        .cs-read-time { font-size: 0.78rem; color: #bbb; letter-spacing: 0.05em; }
        .cs-h3 { font-family: var(--font-display); font-size: 1.35rem; font-style: italic; margin: 52px 0 14px; color: #1a1a1a; }
        .cs-body { font-size: 0.97rem; line-height: 1.85; margin: 0 0 18px; color: #333; }

        /* ── Pull quote ── */
        .cs-pull-quote { border-left: 3px solid #a9875c; margin: 32px 0; padding: 16px 24px; font-style: italic; color: #555; font-size: 1rem; line-height: 1.75; background: #fff; border-radius: 0 8px 8px 0; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .cs-pull-quote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: #aaa; }

        /* ── Note ── */
        .cs-note { background: #fffbe6; border-left: 4px solid #f5c518; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 0.9rem; line-height: 1.7; color: #4a3800; }
        .cs-note strong { display: block; margin-bottom: 6px; font-weight: 700; }
        .cs-note p { margin: 0; }
        .cs-note ul { margin: 8px 0 0; padding-left: 20px; }
        .cs-note li { margin-bottom: 5px; }
        .cs-note--pink { background: #fff0f6; border-left-color: #a9875c; color: #5a0028; }

        /* ── Stat block ── */
        .cs-stat-block { text-align: center; padding: 36px 24px; background: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 32px 0; }
        .cs-stat-num { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); color: #a9875c; font-style: italic; line-height: 1; }
        .cs-stat-desc { margin: 10px 0 0; font-size: 0.95rem; color: #555; line-height: 1.6; max-width: 440px; margin-left: auto; margin-right: auto; }

        /* ── Steps ── */
        .cs-steps { list-style: none; padding: 0; margin: 24px 0 40px; display: flex; flex-direction: column; gap: 14px; }
        .cs-steps li { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.06); }
        .cs-step-num { font-family: var(--font-display); font-size: 1.6rem; color: #a9875c; font-style: italic; min-width: 40px; line-height: 1; padding-top: 2px; flex-shrink: 0; }
        .cs-steps li strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 5px; }
        .cs-steps li p { margin: 0; font-size: 0.87rem; color: #555; line-height: 1.6; }

        /* ── Tables ── */
        .cs-table-wrap { overflow-x: auto; margin: 20px 0 36px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .cs-table { width: 100%; border-collapse: collapse; background: #fff; font-size: 0.88rem; min-width: 420px; }
        .cs-table th { background: #a9875c; color: #fff; padding: 12px 16px; text-align: left; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
        .cs-table td { padding: 12px 16px; border-bottom: 1px solid #f0f0f0; color: #333; vertical-align: top; line-height: 1.5; }
        .cs-table tr:last-child td { border-bottom: none; }
        .cs-table tr:nth-child(even) td { background: #fafafa; }
        .cs-table-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 8px 0 0; font-style: italic; padding: 0 4px; }

        /* ── Images ── */
        .cs-img-wrap { margin: 36px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .cs-img-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 10px 0 0; font-style: italic; padding: 0 4px; }
        @media (max-width: 600px) { .cs-img-wrap { border-radius: 8px; } }

        /* ── Priority list ── */
        .cs-priority-list { display: flex; flex-direction: column; gap: 10px; margin: 24px 0 40px; }
        .cs-priority-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); border-left: 4px solid #a9875c; }
        .cs-priority-item--2 { border-left-color: #ed6fa0; }
        .cs-priority-item--3 { border-left-color: #f28cba; }
        .cs-priority-item--4 { border-left-color: #f5aacc; }
        .cs-priority-item--5 { border-left-color: #f8c4db; }
        .cs-priority-item--6 { border-left-color: #fbd8e8; }
        .cs-priority-item--7 { border-left-color: #e0e0e0; }
        .cs-priority-time { font-size: 0.72rem; font-weight: 700; color: #a9875c; white-space: nowrap; min-width: 80px; padding-top: 3px; letter-spacing: 0.03em; text-transform: uppercase; flex-shrink: 0; }
        .cs-priority-item--7 .cs-priority-time { color: #bbb; }
        .cs-priority-item strong { display: block; font-size: 0.9rem; margin-bottom: 3px; }
        .cs-priority-item p { margin: 0; font-size: 0.82rem; color: #666; line-height: 1.5; }

        /* ── Shift box / Checklist box ── */
        .cs-shift-box, .cs-checklist-box, .cs-takeaways { background: #fff; border-radius: 12px; padding: 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 24px 0; }

        /* ── Check lists ── */
        .cs-box-heading { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a9875c; margin: 0 0 14px; }
        .cs-check-list { list-style: none; padding: 0; margin: 0; }
        .cs-check-list li { padding: 7px 0 7px 22px; font-size: 0.9rem; color: #333; line-height: 1.5; border-bottom: 1px solid #f4f4f4; position: relative; }
        .cs-check-list li:last-child { border-bottom: none; }
        .cs-check-list li::before { content: '✓'; position: absolute; left: 0; color: #a9875c; font-weight: 700; font-size: 0.85rem; }
        .cs-check-list--body { margin: 0 0 24px; }

        /* ── Takeaways ── */
        .cs-takeaways { border-top: 3px solid #a9875c; }

        /* ── Locked section ── */
        .cs-locked { padding: 80px 0; background: #1a1a1a; }
        .cs-locked-inner { text-align: center; max-width: 600px; margin: 0 auto; padding: 0 24px; }
        .cs-locked-icon { font-size: 3rem; margin-bottom: 24px; }
        .cs-locked-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); color: #fff; margin: 0 0 16px; line-height: 1.2; }
        .cs-locked-title em { color: #a9875c; font-style: italic; }
        .cs-locked-desc { color: rgba(255,255,255,0.65); font-size: 0.97rem; line-height: 1.7; margin: 0 0 32px; }
        .cs-locked-list { list-style: none; padding: 0; margin: 0 0 8px; text-align: left; display: inline-block; }
        .cs-locked-list li { padding: 8px 0; color: rgba(255,255,255,0.8); font-size: 0.88rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .cs-locked-list li:last-child { border-bottom: none; }
      `}</style>

      {/* Scroll animation script */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var els = document.querySelectorAll('.cs-fade-in');
          var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
              if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
          els.forEach(function(el) { io.observe(el); });
        })();
      `}} />
    </div>
  );
}
