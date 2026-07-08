import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

export const metadata = {
  title: 'ÄŒet Strategija | Velluto Nero',
  description: 'Sistem iza meseci sa $100k+ naÅ¡ih kreatora â€” kompletna Äet strategija korak po korak.',
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
              <li><Link href="/">PoÄetna</Link></li>
              <li><Link href="/#masina">MaÅ¡ina</Link></li>
              <li><Link href="/#roster">Roster</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><a href="#" style={{ color: '#e8538f', fontWeight: 600 }}>ÄŒet Strategija</a></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="/#apply" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }}>
              Prijavi se <span className="btn-arrow">â†’</span>
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
                alt="ÄŒet Strategija vodiÄ"
                width={760}
                height={420}
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 760px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Title block below cover */}
            <div className="cs-fade-in cs-intro-block">
              <span className="chapter-label" style={{ color: '#e8538f', marginBottom: 16, display: 'block' }}>Velluto Nero Â· Interni vodiÄ</span>
              <h1 className="cs-page-title">
                Sistem iza meseci<br />
                <em>sa $100k+ naÅ¡ih kreatora</em>
              </h1>
              <p className="cs-lead">
                10 poglavlja. tri dela. taÄan sistem iza kreatora koji zaraÄ‘uju $100k+/meseÄno samo iz Äeta. skripte, prodajna psihologija, reÅ¡avanje prigovora, cela operacija â€” od prve poruke do nedelja sa $12k+.
              </p>
              <div className="cs-meta-pills">
                <span>10 poglavlja</span>
                <span>~2.5 sata Äitanja</span>
                <span>svi nivoi</span>
                <span>besplatno â€” bez skrivenih uslova</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="cs-fade-in cs-learn-box">
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Å ta Ä‡eÅ¡ nauÄiti</h3>
                <ul className="cs-check-list">
                  <li>Savladaj game plan u 7 koraka â€” od rapporta do zatvaranja</li>
                  <li>PiÅ¡i opisne poruke koje drÅ¾e pretplatnike u troÅ¡enju</li>
                  <li>Izgradi PPV lestvicu prodaje koja skalira na $200+ po sesiji</li>
                  <li>Postavi skripte, kontent setove i CRM koji radi sam od sebe</li>
                  <li>Obuci i ukrcaj nove Äetere za 6 dana</li>
                  <li>ReÅ¡avaj svaki prigovor i svaki tip pretplatnika</li>
                </ul>
              </div>
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Za koga je ovo</h3>
                <ul className="cs-check-list">
                  <li>Kreatori koji Å¾ele da od Äeta naprave pravi kanal prihoda</li>
                  <li>Kreatori koji sami upravljaju porukama i ostavljaju novac na stolu</li>
                  <li>ÄŒeteri koji Å¾ele proveren sistem, ne nagaÄ‘anje</li>
                  <li>Svi koji su umorni od improvizacije u Äetu i nekonzistentnih rezultata</li>
                </ul>
              </div>
            </div>

          </div>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CHAPTER 1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section className="cs-chapter" id="ch1">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 1 od 10</span>
                <h2 className="cs-chapter-title">Poslovni model Äeta</h2>
                <p className="cs-chapter-subtitle">Å ta je Äetovanje u stvari â€” i zaÅ¡to Å¡tampa novac</p>
                <span className="cs-read-time">~15 min Äitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "VeÄ‡ina ljudi Äuje 'OnlyFans Äetovanje' i zamiÅ¡lja nekog tipa koji kuca Äudne stvari na telefonu. To nije ovo. ÄŒetovanje je prodajni posao â€” jedan u kom top izvoÄ‘aÄi zaraÄ‘uju $3.000+ meseÄno radeÄ‡i sa laptopa."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Å ta je Äetovanje u stvari</h3>
                <p className="cs-body">ÄŒeter je osoba koja stoji iza DM-ova na kreatorovom OnlyFans nalogu. Kreator pravi sadrÅ¾aj â€” fotografije, video zapise, glasovne poruke. ÄŒeter prodaje. PiÅ¡eÅ¡ pretplatnicima kao da si kreator, gradiÅ¡ rapport, pretvÐ°Ñ€Ð°Å¡ neobavezne razgovore u prodaje i Å¡aljeÅ¡ pay-per-view (PPV) sadrÅ¾aj koji je kreator unapred snimio.</p>
                <p className="cs-body">Zamisli ovako: kreator je proizvod. Ti si prodavac. A Äet je tvoj prodajni pod.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Pretplatnici ne znaju da Äeter postoji. Koliko se njih tiÄe, razgovaraju direktno sa kreatorom â€” Å¾enom koju prate, onom na fotografijama, onom o kojoj razmiÅ¡ljaju. I ta iluzija ne sme nikada da se sruÅ¡i. Nikada.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">ZaÅ¡to je ovo pravi biznis</h3>
                <p className="cs-body">OnlyFans je kreatorima isplatio viÅ¡e od 6 milijardi dolara samo u 2023. Ogroman deo tog prihoda â€” ponekad 50-90% prihoda kreatora â€” dolazi direktno iz DM prodaje. Ne od pretplata. Ne od napojnica. PPV poruke prodane jedan-na-jedan u Äetu.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50â€“90%</div>
                <p className="cs-stat-desc">prihoda kreatora tipiÄno dolazi od DM prodaje, ne od pretplata. ÄŒet je mesto gde Å¾ivi pravi novac.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Zato postoje agencije. Jedan kreator ne moÅ¾e biti u DM-ovima 16 sati dnevno prodajuÄ‡i sadrÅ¾aj, a istovremeno snimati, montirati i upravljati druÅ¡tvenim mreÅ¾ama. Zato zapoÅ¡ljavaju Äetere â€” ili angaÅ¾uju agenciju koja vodi celu operaciju.</p>
                <p className="cs-body">PotraÅ¾nja za dobrim Äeterima je ogromna. A ponuda? StraÅ¡na. VeÄ‡ina ljudi koji pokuÅ¡aju Äetovanje odustane u prvoj nedelji jer nemaju sistem. Improvizuju, izgaraju i ostavljaju novac svuda.</p>
                <p className="cs-body">Ako moÅ¾eÅ¡ da pratiÅ¡ proces, ÄitaÅ¡ ljude i kucaÅ¡ brzo â€” veÄ‡ imaÅ¡ sirove veÅ¡tine. Sve ostalo u ovom vodiÄu je sistem koji te veÅ¡tine pretvara u konzistentnu prodaju.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kako funkcioniÅ¡e novac</h3>
                <p className="cs-body">ÄŒeteri se plaÄ‡aju na tri naÄina: satnica, provizija na svaku prodaju i nedeljni bonus za performanse. Evo stvarne strukture koju koristimo.</p>
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
                    <tr><td><strong>Satnica</strong></td><td>$2â€“8/sat</td><td>PlaÄ‡eno za svaki sat smene</td></tr>
                    <tr><td><strong>Provizija</strong></td><td>4â€“11%</td><td>Na sve PPV i custom sadrÅ¾aj prodaje</td></tr>
                    <tr><td><strong>Nedeljni bonus</strong></td><td>$50â€“$700</td><td>Prema ukupnoj nedeljnoj neto prodaji</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">TipiÄna struktura naknade Äetera</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Bonus nivoi su zanimljiv deo. DostiÅ¾eÅ¡ nedeljne prodajne ciljeve i bonusi poÄinju da se gomilaju â€” do $700/nedelji povrh satnice i provizije.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Game plan (pregled)</h3>
                <p className="cs-body">Svaki razgovor koji Äeter ima prati isti tok od 7 koraka. Zovemo ga game plan. DobiÄ‡eÅ¡ pun razraÄ‘eni opis u Poglavlju 4, ali evo ptiÄje perspektive da znaÅ¡ Å¡ta gradiÅ¡.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div><strong>Gradi rapport</strong><p>Razbij led. NiÅ¡ta seksualno â€” samo normalan, prijateljski razgovor. Saznaj ko su oni.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div><strong>PoÅ¡alji tizere</strong><p>Promeni vibes sa unapred pripremljenim tizer sadrÅ¾ajem. Zainteresuj ih i uvuci ih.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div><strong>PoÅ¡alji PPV</strong><p>Postavi prvi plaÄ‡eni sadrÅ¾aj. Testiraj da li su potroÅ¡aÄ ili gubljenje vremena.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">04</span>
                  <div><strong>Filtriraj</strong><p>Ako ne kupuju â€” prati ih, saznaj zaÅ¡to, ponudi alternative. Ako i dalje neÄ‡e da troÅ¡e, nastavi dalje.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">05</span>
                  <div><strong>Upsell</strong><p>Ako kupuju â€” svu paÅ¾nju usmeri na njih. Prodaj sledeÄ‡i komad, pa sledeÄ‡i. Radi lestvicu prodaje.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">06</span>
                  <div><strong>Gradi odnos</strong><p>Posle prodaje, neka se oseÄ‡aju cenjeno. To je ono Å¡to ih vraÄ‡a sutra.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">07</span>
                  <div><strong>Ä†ao i ponovi</strong><p>ZavrÅ¡i razgovor na visokoj noti. PronaÄ‘i nove mete. Pokreni ponovo.</p></div>
                </li>
              </ol>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-game-plan-flow.webp" alt="Tok game plana u 7 koraka" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Tok Äetovanja u 7 koraka â€” od prvog rapporta do zatvaranja prodaje</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Lestvica prodaje</h3>
                <p className="cs-body">SadrÅ¾aj se ne prodaje po fiksnoj ceni. Svaki komad PPV sadrÅ¾aja u sesiji koÅ¡ta viÅ¡e od prethodnog. Zovemo ovo lestvica prodaje â€” i ista je za sve kreatore.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>PPV br.</th>
                      <th>Cena</th>
                      <th>ZaÅ¡to raste</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1.</td><td>$25</td><td>Tizer nivo â€” niska ulazna barijera</td></tr>
                    <tr><td>2.</td><td>$45</td><td>Malo viÅ¡e otkrivajuÄ‡e, pretplatnik se zagrejava</td></tr>
                    <tr><td>3.</td><td>$65</td><td>Pretplatnik je angaÅ¾ovan i troÅ¡i</td></tr>
                    <tr><td>4.</td><td>$95</td><td>Eksplicitniji sadrÅ¾aj, duÅ¾e trajanje</td></tr>
                    <tr><td>5.</td><td>$135</td><td>Blizu vrhunca seta</td></tr>
                    <tr><td>6.</td><td>$200</td><td>OF maksimum po PPV â€” finale celog seta</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Standardna PPV lestvica cena</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Ako pretplatnik kupi svih Å¡est, to je $565 iz jednog razgovora. I tu se ne staje â€” $200 je maksimum koji OnlyFans dozvoljava po PPV-u, ali moÅ¾eÅ¡ prodati viÅ¡e PPV-ova po $200 u istoj sesiji. Top Äeteri redovno prelaze $1.000 u jednom sedanju.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Upozorenje</strong>
                <p>Lestvica je vodiÄ, ne pravilo urezano u kamen. Dobri Äeteri prilagoÄ‘avaju cene prema pretplatniku â€” student dobija niÅ¾e ulazne taÄke, visoki zaraÄ‘ivaÄ koji slobodno daje napojnice gura se viÅ¡e. Poznaj svog klijenta.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-sales-ladder.webp" alt="PPV lestvica prodaje" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">PPV lestvica prodaje â€” kako pretplatnik napreduje kroz nivoe vrednosti</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kome dajeÅ¡ paÅ¾nju prvo</h3>
                <p className="cs-body">Nikad neÄ‡eÅ¡ Äetovati samo sa jednom osobom u isto vreme. U buÄnoj smeni moÅ¾eÅ¡ imati 10-15 otvorenih razgovora. Razlika izmeÄ‘u dana sa $500 i dana sa $2.000 svodi se na jednu stvar: ko dobija tvoju paÅ¾nju prvo.</p>
              </div>

              <div className="cs-fade-in cs-priority-list">
                <div className="cs-priority-item cs-priority-item--1">
                  <span className="cs-priority-time">odgovori za 2 min</span>
                  <div><strong>Aktivne sesije</strong><p>Pretplatnici koji su trenutno u sesiji kupovine. VeÄ‡ su kupili najmanje jedan PPV i radiÅ¡ lestvicu. Ovo je tvoj prioritet #1 â€” uvek.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--2">
                  <span className="cs-priority-time">3 min</span>
                  <div><strong>Pretplatnici u tranziciji</strong><p>Poslao si tizere, pokazuju interesovanje ili piÅ¡u eksplicitno. Blizu su prodaje.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--3">
                  <span className="cs-priority-time">4 min</span>
                  <div><strong>Novi netestirani pretplatnici</strong><p>SveÅ¾Ð° lica koja nisi testirao. MoÅ¾e biti kit, moÅ¾e biti gubljenje vremena. Testiraj brzo.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--4">
                  <span className="cs-priority-time">10 min</span>
                  <div><strong>Izgradnja odnosa posle prodaje</strong><p>Sesija je zavrÅ¡ena ali odrÅ¾avaÅ¡ vezu toplom za sledeÄ‡i put.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--5">
                  <span className="cs-priority-time">25 min</span>
                  <div><strong>Povremeni potroÅ¡aÄi</strong><p>Poznati potroÅ¡aÄi koji trenutno ne kupuju ali bi mogli kasnije.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--6">
                  <span className="cs-priority-time">30 min</span>
                  <div><strong>Testirani ne-potroÅ¡aÄi</strong><p>Testirani jednom ili dva puta i nisu kupili. Nizak prioritet.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--7">
                  <span className="cs-priority-time">bez zahteva</span>
                  <div><strong>Gubljavci vremena</strong><p>NeÄ‡e troÅ¡iti i nikad neÄ‡e. Ne gubi vreme.</p></div>
                </div>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch1-priority-system.webp" alt="Sistem prioriteta pretplatnika" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Matriks prioriteta â€” kako razvrstati pretplatnike prema potencijalu prihoda</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Kako izgleda smena</h3>
                <p className="cs-body">Smene traju 8 sati. VeÄ‡ina Äetera radi 40-48 sati nedeljno. Smene su koordinisane kroz Telegram â€” tamo se odvija sva interna komunikacija.</p>
              </div>

              <div className="cs-fade-in cs-shift-box">
                <h4 className="cs-box-heading">Osnove smene</h4>
                <ul className="cs-check-list">
                  <li>8-satne smene, 40-48 sati nedeljno</li>
                  <li>Daljinski â€” radi sa bilo kog mesta sa stabilnim internetom</li>
                  <li>ViÅ¡e kreatorskih naloga po smeni</li>
                  <li>Prodaja se prati putem formulara posle svake smene</li>
                  <li>Rezultati se objavljuju u Telegram grupi svaki dan</li>
                  <li>Pauze se uzimaju tokom prozora sa niskim saobraÄ‡ajem (tvoja procena)</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Ako Äeter ostavi PPV pretplatniku i on ga kupi posle zavrÅ¡etka smene â€” to je i dalje njegova prodaja. Ali ako sledeÄ‡i Äeter ubedi pretplatnika da kupi PPV koji je ostavljen, to je prodaja zatvaraÄa. Prodaje idu onome ko ih je zatvorio.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Model agencije vs. solo</h3>
                <p className="cs-body">Postoje dva naÄina voÄ‘enja ÄetovaÄke operacije: kao agencija sa timom Äetera, ili kao solo kreator koji upravlja sopstvenim DM-ovima. Oba koriste isti vodiÄ. Razlika je u obimu.</p>
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
                    <tr><td>Ko Äetuje</td><td>Unajmljeni Äeteri (tim od 2-10+)</td><td>Ti ili jedan VA</td></tr>
                    <tr><td>Pokrivenost</td><td>24 sata/dan kroz smene</td><td>OgraniÄeno na tvoju dostupnost</td></tr>
                    <tr><td>Prihod po kreatoru</td><td>ViÅ¡i â€” viÅ¡e sati = viÅ¡e prodaje</td><td>NiÅ¾i â€” ograniÄen tvojim vremenom</td></tr>
                    <tr><td>Potrebna obuka</td><td>Da â€” pun sistem ukrcavanja</td><td>Samo ovaj vodiÄ</td></tr>
                    <tr><td>SloÅ¾enost</td><td>Koordinacija smena, CRM, QA</td><td>Jednostavno â€” samo ti i DM-ovi</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">PoreÄ‘enje model agencije vs. solo Äetovanje</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">NepregovarajuÄ‡e stvari</h3>
                <p className="cs-body">Bez obzira da li vodiÅ¡ tim ili ÄetujeÅ¡ solo â€” postoji nekoliko pravila koja odvajaju operacije koje traju od onih koje se raspadnu za mesec dana.</p>
                <ul className="cs-check-list cs-check-list--body">
                  <li>Svaka smena mora biti pokrivena. Bez praznina, bez izgovora â€” propuÅ¡teni sati su propuÅ¡teni prihod.</li>
                  <li>ÄŒeteri nikad ne rade za dve agencije. Ako ovo uhvatiÅ¡, odmah ih otpusti.</li>
                  <li>Nikad ne izlazi iz karaktera. Pretplatnik veruje da razgovara sa kreatorom â€” Äuvaj to pod svaku cenu.</li>
                  <li>Dokumentuj sve. BeleÅ¡ke, predaje smena, evidencije prodaje. Ako nije zapisano, nije se ni desilo.</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">KljuÄne poruke</h3>
                <ul className="cs-check-list">
                  <li>ÄŒetovanje je prodajni posao â€” prodajeÅ¡ unapred napravljeni sadrÅ¾aj kroz DM-ove kao kreator</li>
                  <li>Zarada se kreÄ‡e od ~$700/mes (nisko) do $3.000+/mes (top) za 40 sati/nedeljno</li>
                  <li>Game plan u 7 koraka je kiÄma svakog razgovora</li>
                  <li>Lestvica prodaje ceni PPV od $25 do $200 po sesiji</li>
                  <li>Prioritizuj aktivne kupce iznad svega â€” vreme odgovora = prihod</li>
                  <li>Ovaj vodiÄ radi i za timove agencija i za solo kreatore</li>
                </ul>
              </div>

            </div>
          </section>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CHAPTER 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section className="cs-chapter cs-chapter--alt" id="ch2">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 2 od 10</span>
                <h2 className="cs-chapter-title">Mindset Äetera</h2>
                <p className="cs-chapter-subtitle">Psihologija, arhetipovi i 10 zakona</p>
                <span className="cs-read-time">~15 min Äitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Evo zaÅ¡to veÄ‡ina novih Äetera otpadne u prvoj nedelji: sednu, otvore DM-ove i poÄnu da kucaju kao oni sami. Sopstvenim glasom, sopstvenim slengom, sopstvenom energijom. I pretplatnici to odmah osete. Poruke deluju Äudno. Prodaja pada. ÄŒeter odustaje i kaÅ¾e 'Äetovanje ne funkcioniÅ¡e.'"
              </blockquote>

              <div className="cs-fade-in">
                <p className="cs-body">FunkcioniÅ¡e. Ali samo ako prestaneÅ¡ da budeÅ¡ ti i poÄneÅ¡ da budeÅ¡ kreator. Ovo poglavlje je promena identiteta â€” mindset koji odvaja Äetere koji zaraÄ‘uju $500/mesec od onih koji vuku $3.000+.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">ZaÅ¡to fanovi zapravo troÅ¡e</h3>
                <p className="cs-body">VeÄ‡ina ljudi pretpostavlja da pretplatnici plaÄ‡aju za sadrÅ¾aj. Ne plaÄ‡aju. SadrÅ¾aj je svuda â€” besplatan, neograniÄen, jedno pretraÅ¾ivanje daleko. Ono za Å¡ta pretplatnici plaÄ‡aju je oseÄ‡aj da razgovaraju sa stvarnom osobom koja zaista mari za njih.</p>
                <p className="cs-body">Pravi pokretaÄi su emocionalni: intimnost, validacija, bekstvo i paÅ¾nja. Pretplatnik koji se oseÄ‡a sasluÅ¡anim, Å¾eljenim i posebnim troÅ¡iÄ‡e 10 puta viÅ¡e od onog koji samo gleda video zapise. To je cela premija DM-ova u odnosu na besplatne sajtove.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50â€“90%</div>
                <p className="cs-stat-desc">prihoda kreatora dolazi od DM prodaje â€” ne od pretplata, ne od napojnica. ÄŒet je mesto gde Å¾ivi novac.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Dakle, ako pretplatnici plaÄ‡aju za vezu â€” moraÅ¡ biti neko vredno povezivanja. To poÄinje postajanjem kreatora.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Postani kreator</h3>
                <p className="cs-body">Pretplatnici ne znaju da Äeteri postoje. Koliko se njih tiÄe, razgovaraju direktno sa kreatorom â€” Å¾enom koju prate, onom na fotografijama, onom o kojoj razmiÅ¡ljaju. I ta iluzija ne moÅ¾e da se sruÅ¡i. Nikada.</p>
                <p className="cs-body">Tvoj posao nije da "ÄetujeÅ¡ u ime" nekoga. Tvoj posao je da postaneÅ¡ oni. ProuÄavaj sve: njihov OnlyFans feed, njihove druÅ¡tvene mreÅ¾e, njihove natpise, njihovu liÄnost u priÄama. ÄŒitaj njihove skripte. NauÄi kako govore, koji sleng koriste, koje emojije bacaju.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Napomena</strong>
                <p>Svaki kreator ima personu. VeÄ‡ina ih prati isti arhetip: nevina ali nestaÅ¡na. Zabavna je, koketna, ali ne baca se na ljude. Zamisli to kao energija "dobre devojke koja samo tebi pokazuje ovu stranu". Taj arhetip gradi napetost â€” a napetost je ono Å¡to prodaje.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Nevini arhetip</h3>
                <p className="cs-body">NajveÄ‡a greÅ¡ka novih Äetera je krenuti previÅ¡e agresivno, previÅ¡e brzo. Misle da eksplicitnost rano = viÅ¡e prodaje. Suprotno je taÄno. Ako kreator deluje oÄajniÄki ili previÅ¡e direktno, pretplatnici gube interesovanje. Nema potere, nema napetosti, nema gradnje.</p>
                <p className="cs-body">Pristup "nevina ali nestaÅ¡na" funkcioniÅ¡e jer stavlja pretplatnika za volan. On se oseÄ‡a kao da on eskalira, kao da mu ona pokazuje ovu stranu samo zbog njega. To je moÄ‡na psihologija â€” i konvertuje daleko bolje od agresivnosti.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Aspekt</th>
                      <th>PogreÅ¡an pristup</th>
                      <th>Pravi pristup</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>SadrÅ¾aj</td><td>Odmah skoÄi na eksplicitan sadrÅ¾aj</td><td>Prvo gradi rapport â€” zadrÅ¾i laganim i koketnim</td></tr>
                    <tr><td>Nadimci</td><td>Koristi milosna imena od starta (bebo, tata)</td><td>Bez nadimaka osim ako pretplatnik ne uvede</td></tr>
                    <tr><td>Stil poruke</td><td>Å alji zidove teksta sa puno emojija</td><td>Prati njegovu energiju â€” kratko i neobavezno na poÄetku</td></tr>
                    <tr><td>Razgovor</td><td>Sama pokreni intimni razgovor</td><td>Neka pretplatnik vodi â€” odgovori na njegovu eskalaciju</td></tr>
                    <tr><td>Ton</td><td>ZvuÄi kao prodajni skript</td><td>ZvuÄi kao stvarna osoba u stvarnom razgovoru</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Arhetip u praksi â€” pogreÅ¡an vs. pravi pristup</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Nikad sama ne poÄini eksplicitne razgovore. ÄŒak i ako pretplatnik otvori sa neÄim direktnim, ne prati to odmah. Odbij nestaÅ¡no â€” "ma zar bi? ðŸ™ˆ" ili "dosta si direktan haha". Neka napetost raste.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch2-archetype-mirror.webp" alt="Promena identiteta â€” arhetip ogledalo" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Promena identiteta â€” postani kreator, ne samo zastupnik</p>
              </div>

              <div className="cs-fade-in cs-checklist-box">
                <h4 className="cs-box-heading">ÄŒeklista za prouÄavanje kreatora</h4>
                <ul className="cs-check-list">
                  <li>Preglej njen OnlyFans feed â€” Å¡ta objavljuje, kako piÅ¡e natpise</li>
                  <li>Proveri njen Instagram, TikTok, Twitter â€” kako priÄa sa fanovima javno</li>
                  <li>ProÄitaj njene postojeÄ‡e skripte â€” zapamti fraze i sleng koji koristi</li>
                  <li>ProuÄava njenu liÄnost â€” da li je nestaÅ¡na, stidljiva, smela, sarcastiÄna</li>
                </ul>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Uskladi energiju</h3>
                <p className="cs-body">Ovo je jednostavno ali skoro svi greÅ¡e na poÄetku. Kada ti pretplatnik poÅ¡alje poruku, odrazi njegov stil komunikacije. Kratke poruke? Odgovori kratko. Duge poruke? MoÅ¾eÅ¡ iÄ‡i malo duÅ¾e. Malo emojija? Ne davaj mu srca.</p>
                <p className="cs-body">Instinkt novih Äetera je biti preterano uzbuÄ‘en. Pretplatnik kaÅ¾e "hej" i oni odgovaraju sa tri reÄenice, Äetiri emojija i pitanjem. To ne deluje prirodno â€” deluje kao bot korisniÄke podrÅ¡ke. Ili gore, prevara.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Stavi se u poziciju muÅ¡karca. PoÅ¡alje DM devojci na Instagramu i kaÅ¾e "zdravo". Ona odgovori: "Zdravo bebo baÅ¡ sam sretna Å¡to mi piÅ¡eÅ¡ baÅ¡ sada! Å ta radiÅ¡? ðŸ’–ðŸ’•ðŸ¥°ðŸ¥µ" â€” Pomislio bi da neÅ¡to ozbiljno nije u redu sa tom osobom. Ista pravila vaÅ¾e ovde.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Njegova poruka</th>
                      <th>PogreÅ¡an odgovor</th>
                      <th>Pravi odgovor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Hej Å¡ta radite sada?</td><td>Zdravo bebo upravo zavrÅ¡ila veÄeru i legla da se odmorim. BaÅ¡ sam sretna Å¡to si mi pisao! Å ta te dovodi ovde? ðŸ¥°ðŸ’•ðŸ™ˆ</td><td>hej samo leÅ¾im Äujmo se vbt?</td></tr>
                    <tr><td>IzgledaÅ¡ neverovatno</td><td>OMG hvala ti toliko bebo!! To mi znaÄi ceo svet ðŸ˜ðŸ˜</td><td>aw hvala ðŸ™ˆ koja slika?</td></tr>
                    <tr><td>Upravo sam se vratio s posla</td><td>Oh super!! IspriÄaj mi sve o svom danu, hoÄ‡u da znam sve o tome! ðŸ’•</td><td>dug dan? Å¡ta radiÅ¡</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">UsklaÄ‘ivanje energije u praksi â€” pretplatnici osete razliku</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Kada nisi siguran kako da odgovoriÅ¡, podrazumevano ide kraÄ‡e. Uvek moÅ¾eÅ¡ dodati viÅ¡e â€” ali ne moÅ¾eÅ¡ neoslatati pasus koji je naterao pretplatnika da se oseÄ‡a kao da razgovara sa botom.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/cet-strategija/ch2-energy-matching.webp" alt="UsklaÄ‘ivanje energije â€” ogledalo ne nadvladan" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ogledaj, ne nadvladavaj â€” usklaÄ‘ivanje energije je kljuÄ prirodnog razgovora</p>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Ko je on tebi? ZaÅ¡to si toliko uzbuÄ‘ena Å¡to je tu? Stavi se u poziciju muÅ¡karca koji je poslao DM devojci na Instagramu i rekao zdravo â€” ona odgovori sa esejom punim emojija. Je li ovo normalno?"
                <cite>â€” Obuka Äetera</cite>
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Pravila za emojije i sleng</h3>
                <p className="cs-body">Emojiji i sleng su razlika izmeÄ‘u zvuÄanja kao stvarna osoba i zvuÄanja kao chatbot koji Äita skriptu. Uradi ih kako treba i pretplatnici se oseÄ‡aju kao da se dopisuju sa prijateljem. PogrijeÅ¡i i cela persona se raspadne.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Emojiji: manje je viÅ¡e</strong>
                <p>Zlatno pravilo sa emojijima je jednostavno: prati nivo koriÅ¡Ä‡enja pretplatnika. Ako ne koristi emojije, ne trpaj mu ih. Ako baca jedan po poruci, moÅ¾eÅ¡ i ti. ÄŒim koristiÅ¡ viÅ¡e emojija od pretplatnika, poÄinjeÅ¡ da delujeÅ¡ laÅ¾no.</p>
                <ul style={{ marginTop: 12 }}>
                  <li>Rani razgovor: ðŸ™ˆ ðŸ˜š ðŸ‘€ â€” stidljivo, radoznalo, nestaÅ¡no</li>
                  <li>Kasnije u sesiji: drugaÄiji set â€” prati rastuÄ‡u energiju</li>
                  <li>Tastaturni emojiji deluju prirodnije: ;) :p ^^ xD</li>
                  <li>Maksimum jedan emoji po poruci u ranim fazama</li>
                  <li>Nikad ne koristiti ðŸ¥µ ðŸ’• ðŸ˜ rano â€” viÄu "prodajem ti neÅ¡to"</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Formalno (pogreÅ¡no)</th>
                      <th>Prirodno (pravo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Divno mi je bilo sa tobom</td><td>super nam je bilo</td></tr>
                    <tr><td>Vidimo se. Ne misli o meni ceo dan.</td><td>Äujemo se ne misli na me ceo dan</td></tr>
                    <tr><td>Hvala ti puno! MisliÅ¡ da sam lepa?</td><td>hvala &lt;3 misliÅ¡ da sam lepa?</td></tr>
                    <tr><td>Volim te, toliko si sladak</td><td>awww volim te toliko si sladak</td></tr>
                    <tr><td>To zvuÄi stvarno zanimljivo, ispriÄaj mi viÅ¡e</td><td>omg to zvuÄi super reci mi viÅ¡e</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Formalno vs. prirodno â€” pretplatnici osete razliku</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">NajÄeÅ¡Ä‡a zamena: "ti" â†’ "t", "hvala" â†’ "hvl", "volim te" â†’ "vlm te". Izbaci taÄke. Koristi mala slova. PiÅ¡i kao da se dopisujeÅ¡ sa najboljim prijateljem, ne kao da piÅ¡eÅ¡ email.</p>
                <p className="cs-body">Ako zapeteljeÅ¡ u prevoÄ‘enju reÄenice u prirodni sleng, proÄitaj je naglas. Ako zvuÄi kao neÅ¡to Å¡to bi napisao/la prijatelju, dobro je. Ako zvuÄi kao LinkedIn objava, prepiÅ¡i.</p>
              </div>

            </div>
          </section>

          {/* â”€â”€ LOCKED â”€â”€ */}
          <section className="cs-locked" id="ch3-10">
            <div className="cs-container">
              <div className="cs-locked-inner">
                <div className="cs-locked-icon">ðŸ”’</div>
                <h2 className="cs-locked-title">
                  Poglavlja 3â€“10 dostupna su<br />
                  <em>kreatorima Velluto Nero</em>
                </h2>
                <p className="cs-locked-desc">
                  10 zakona Äetera. Skripte. PPV strategija. Tipovi fanova. ReÅ¡avanje prigovora. Analitika. Skaliranje tima. Sistem koji radi bez tebe. Sve je u sledeÄ‡ih 8 poglavlja â€” i sve je ukljuÄeno kada se pridruÅ¾iÅ¡.
                </p>
                <ul className="cs-locked-list">
                  <li>âœ“ Poglavlje 3 â€” 10 zakona Äetera (mindset koji pravi razliku)</li>
                  <li>âœ“ Poglavlje 4 â€” Skripte i game plan: od prve reÄi do zatvaranja</li>
                  <li>âœ“ Poglavlje 5 â€” PPV: kreiranje, opisivanje i prodaja sadrÅ¾aja</li>
                  <li>âœ“ Poglavlje 6 â€” Upsell, pretplatnici i izgradnja lojalnosti</li>
                  <li>âœ“ Poglavlje 7 â€” Tipovi fanova i kako Äitati svakog</li>
                  <li>âœ“ Poglavlje 8 â€” ReÅ¡avanje svakog prigovora koji postoji</li>
                  <li>âœ“ Poglavlje 9 â€” Analitika, CRM i optimizacija</li>
                  <li>âœ“ Poglavlje 10 â€” Skaliranje, tim i sistem koji radi bez tebe</li>
                </ul>
                <Link href="/#apply" className="btn-primary btn-large" style={{ marginTop: 32, display: 'inline-flex' }}>
                  Prijavi se za Velluto Nero <span className="btn-arrow">â†’</span>
                </Link>
                <p style={{ marginTop: 16, fontSize: '0.8rem', opacity: 0.5 }}>
                  manje od 2% aplikacija biva primljeno Â· nula troÅ¡kova unapred
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
              <p className="footer-tagline">NajpromiÅ¡ljeniji naÄin da razvijeÅ¡ svoj brend.</p>
            </div>
            <Link href="/#apply" className="btn-outline">Prijavi se <span>â†’</span></Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">Â© 2025 Velluto Nero. Sva prava zadrÅ¾ana.</p>
            <div className="footer-legal"><a href="/privacy">Privatnost</a><a href="/terms">Uslovi</a></div>
          </div>
        </div>
      </footer>

      <style>{`
        /* â”€â”€ Base â”€â”€ */
        .cs-page { background: var(--color-dark-1); color: #1a1a1a; font-family: var(--font-montserrat, 'Montserrat', sans-serif); }
        .cs-content-wrap { padding-bottom: 0; }
        .cs-container { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        /* â”€â”€ Animations â”€â”€ */
        .cs-fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .cs-fade-in.visible { opacity: 1; transform: none; }

        /* â”€â”€ Cover box â”€â”€ */
        .cs-cover-box { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.13); margin: 48px auto 0; }
        @media (max-width: 600px) { .cs-cover-box { border-radius: 10px; } }

        /* â”€â”€ Intro block â”€â”€ */
        .cs-intro-block { padding: 40px 0 8px; }
        .cs-page-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin: 12px 0 20px; color: #1a1a1a; }
        .cs-page-title em { color: #e8538f; font-style: italic; }
        .cs-lead { font-size: 1rem; line-height: 1.8; color: #444; margin: 0 0 20px; }
        .cs-meta-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        .cs-meta-pills span { background: #fff; border: 1px solid #e8e0e0; border-radius: 20px; padding: 5px 14px; font-size: 0.78rem; color: #666; letter-spacing: 0.02em; }

        /* â”€â”€ Learn box â”€â”€ */
        .cs-learn-box { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0 56px; }
        .cs-learn-col { background: #fff; border-radius: 12px; padding: 28px 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        @media (max-width: 620px) { .cs-learn-box { grid-template-columns: 1fr; } }

        /* â”€â”€ Chapter sections â”€â”€ */
        .cs-chapter { padding: 72px 0; border-top: 1px solid rgba(0,0,0,0.07); }
        .cs-chapter--alt { background: rgba(232,83,143,0.03); }
        .cs-chapter-header { margin-bottom: 32px; }
        .cs-chapter-tag { display: inline-block; background: #e8538f; color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
        .cs-chapter-title { font-family: var(--font-display); font-size: clamp(1.7rem, 4vw, 2.5rem); line-height: 1.15; margin: 0 0 10px; color: #1a1a1a; }
        .cs-chapter-subtitle { font-size: 1rem; color: #888; margin: 0 0 12px; }
        .cs-read-time { font-size: 0.78rem; color: #bbb; letter-spacing: 0.05em; }
        .cs-h3 { font-family: var(--font-display); font-size: 1.35rem; font-style: italic; margin: 52px 0 14px; color: #1a1a1a; }
        .cs-body { font-size: 0.97rem; line-height: 1.85; margin: 0 0 18px; color: #333; }

        /* â”€â”€ Pull quote â”€â”€ */
        .cs-pull-quote { border-left: 3px solid #e8538f; margin: 32px 0; padding: 16px 24px; font-style: italic; color: #555; font-size: 1rem; line-height: 1.75; background: #fff; border-radius: 0 8px 8px 0; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .cs-pull-quote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: #aaa; }

        /* â”€â”€ Note â”€â”€ */
        .cs-note { background: #fffbe6; border-left: 4px solid #f5c518; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 0.9rem; line-height: 1.7; color: #4a3800; }
        .cs-note strong { display: block; margin-bottom: 6px; font-weight: 700; }
        .cs-note p { margin: 0; }
        .cs-note ul { margin: 8px 0 0; padding-left: 20px; }
        .cs-note li { margin-bottom: 5px; }
        .cs-note--pink { background: #fff0f6; border-left-color: #e8538f; color: #5a0028; }

        /* â”€â”€ Stat block â”€â”€ */
        .cs-stat-block { text-align: center; padding: 36px 24px; background: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 32px 0; }
        .cs-stat-num { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); color: #e8538f; font-style: italic; line-height: 1; }
        .cs-stat-desc { margin: 10px 0 0; font-size: 0.95rem; color: #555; line-height: 1.6; max-width: 440px; margin-left: auto; margin-right: auto; }

        /* â”€â”€ Steps â”€â”€ */
        .cs-steps { list-style: none; padding: 0; margin: 24px 0 40px; display: flex; flex-direction: column; gap: 14px; }
        .cs-steps li { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.06); }
        .cs-step-num { font-family: var(--font-display); font-size: 1.6rem; color: #e8538f; font-style: italic; min-width: 40px; line-height: 1; padding-top: 2px; flex-shrink: 0; }
        .cs-steps li strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 5px; }
        .cs-steps li p { margin: 0; font-size: 0.87rem; color: #555; line-height: 1.6; }

        /* â”€â”€ Tables â”€â”€ */
        .cs-table-wrap { overflow-x: auto; margin: 20px 0 36px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .cs-table { width: 100%; border-collapse: collapse; background: #fff; font-size: 0.88rem; min-width: 420px; }
        .cs-table th { background: #e8538f; color: #fff; padding: 12px 16px; text-align: left; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
        .cs-table td { padding: 12px 16px; border-bottom: 1px solid #f0f0f0; color: #333; vertical-align: top; line-height: 1.5; }
        .cs-table tr:last-child td { border-bottom: none; }
        .cs-table tr:nth-child(even) td { background: #fafafa; }
        .cs-table-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 8px 0 0; font-style: italic; padding: 0 4px; }

        /* â”€â”€ Images â”€â”€ */
        .cs-img-wrap { margin: 36px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .cs-img-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 10px 0 0; font-style: italic; padding: 0 4px; }
        @media (max-width: 600px) { .cs-img-wrap { border-radius: 8px; } }

        /* â”€â”€ Priority list â”€â”€ */
        .cs-priority-list { display: flex; flex-direction: column; gap: 10px; margin: 24px 0 40px; }
        .cs-priority-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); border-left: 4px solid #e8538f; }
        .cs-priority-item--2 { border-left-color: #ed6fa0; }
        .cs-priority-item--3 { border-left-color: #f28cba; }
        .cs-priority-item--4 { border-left-color: #f5aacc; }
        .cs-priority-item--5 { border-left-color: #f8c4db; }
        .cs-priority-item--6 { border-left-color: #fbd8e8; }
        .cs-priority-item--7 { border-left-color: #e0e0e0; }
        .cs-priority-time { font-size: 0.72rem; font-weight: 700; color: #e8538f; white-space: nowrap; min-width: 80px; padding-top: 3px; letter-spacing: 0.03em; text-transform: uppercase; flex-shrink: 0; }
        .cs-priority-item--7 .cs-priority-time { color: #bbb; }
        .cs-priority-item strong { display: block; font-size: 0.9rem; margin-bottom: 3px; }
        .cs-priority-item p { margin: 0; font-size: 0.82rem; color: #666; line-height: 1.5; }

        /* â”€â”€ Shift box / Checklist box â”€â”€ */
        .cs-shift-box, .cs-checklist-box, .cs-takeaways { background: #fff; border-radius: 12px; padding: 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 24px 0; }

        /* â”€â”€ Check lists â”€â”€ */
        .cs-box-heading { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #e8538f; margin: 0 0 14px; }
        .cs-check-list { list-style: none; padding: 0; margin: 0; }
        .cs-check-list li { padding: 7px 0 7px 22px; font-size: 0.9rem; color: #333; line-height: 1.5; border-bottom: 1px solid #f4f4f4; position: relative; }
        .cs-check-list li:last-child { border-bottom: none; }
        .cs-check-list li::before { content: 'âœ“'; position: absolute; left: 0; color: #e8538f; font-weight: 700; font-size: 0.85rem; }
        .cs-check-list--body { margin: 0 0 24px; }

        /* â”€â”€ Takeaways â”€â”€ */
        .cs-takeaways { border-top: 3px solid #e8538f; }

        /* â”€â”€ Locked section â”€â”€ */
        .cs-locked { padding: 80px 0; background: #1a1a1a; }
        .cs-locked-inner { text-align: center; max-width: 600px; margin: 0 auto; padding: 0 24px; }
        .cs-locked-icon { font-size: 3rem; margin-bottom: 24px; }
        .cs-locked-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); color: #fff; margin: 0 0 16px; line-height: 1.2; }
        .cs-locked-title em { color: #e8538f; font-style: italic; }
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
