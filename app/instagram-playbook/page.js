import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

export const metadata = {
  title: 'Instagram VodiÄ za Rast | Velluto Nero',
  description: 'Sistem koji koristimo da kreatore vodimo od nule do 100k+ pratilaca â€” istraÅ¾ivanje, lansiranje, rast, skaliranje na viÅ¡e naloga.',
};

export default function InstagramPlaybook() {
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
              <li><Link href="/cet-strategija">ÄŒet Strategija</Link></li>
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

            {/* Cover image */}
            <div className="cs-fade-in cs-cover-box">
              <Image
                src="/free-tools/instagram-playbook-cover.jpg"
                alt="Instagram vodiÄ za rast"
                width={760}
                height={420}
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 760px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Title block */}
            <div className="cs-fade-in cs-intro-block">
              <span className="chapter-label" style={{ color: '#e8538f', marginBottom: 16, display: 'block' }}>Velluto Nero Â· Interni vodiÄ</span>
              <h1 className="cs-page-title">
                NaÅ¡ stvarni interni vodiÄ<br />
                <em>od nule do 100k+ pratilaca</em>
              </h1>
              <p className="cs-lead">
                12 poglavlja. Äetiri dela. taÄan sistem iza kreatora koji idu od nule do 100k+ pratilaca â€” istraÅ¾ivanje, lansiranje, rast, skaliranje na viÅ¡e naloga, sve. delimo ga jer, iskreno, veÄ‡ina vodiÄa vani kaÅ¾e "objavljuj konzistentno" i zove to strategijom.
              </p>
              <div className="cs-meta-pills">
                <span>12 poglavlja</span>
                <span>~3 sata Äitanja</span>
                <span>poÄetnici dobrodoÅ¡li</span>
                <span>besplatno â€” bez skrivenih uslova</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="cs-fade-in cs-learn-box">
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Å ta Ä‡eÅ¡ nauÄiti</h3>
                <ul className="cs-check-list">
                  <li>Radi konkurentsko istraÅ¾ivanje i pronaÄ‘i profitabilne niÅ¡e</li>
                  <li>Gradi liÄne brendove koji zaista konvertuju u pretplatnike</li>
                  <li>Postavi naloge, profile i link levkove ispravno</li>
                  <li>IzvrÅ¡avaj fazni plan rasta od 0 do 10k+</li>
                  <li>Skaliraj sa viÅ¡e naloga i cross-platform distribucijom</li>
                  <li>Prati KPI-jeve, dijagnostikuj Å¡ta ne radi i popravi to brzo</li>
                </ul>
              </div>
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Za koga je ovo</h3>
                <ul className="cs-check-list">
                  <li>Kreatori koji Å¾ele da porastu na Instagramu ali ne znaju odakle da poÄnu</li>
                  <li>Kreatori koji objavljuju konzistentno ali ne vide rezultate</li>
                  <li>Kreatori spremni da skaliraju dalje od jednog naloga</li>
                  <li>Svi koji Å¾ele proveren, ponovljiv sistem â€” ne nagaÄ‘anje</li>
                </ul>
              </div>
            </div>

          </div>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CHAPTER 1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section className="cs-chapter" id="ch1">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 1 od 12</span>
                <h2 className="cs-chapter-title">Izbor niÅ¡e</h2>
                <p className="cs-chapter-subtitle">Okvir sa 3 pravila za pronalazak profitabilne niÅ¡e</p>
                <span className="cs-read-time">~12 min Äitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "VeÄ‡ina kreatora preskaÄe ovaj korak. Objavljuju nasumiÄne stvari, nadaju se da Ä‡e neÅ¡to proÄ‡i i pitaju se zaÅ¡to im broj pratilaca niÅ¡ta ne znaÄi."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">ZaÅ¡to je tvoja niÅ¡a vaÅ¾nija od tvog izgleda</h3>
                <p className="cs-body">Evo istine. Kreator sa 50.000 ciljanih pratilaca Ä‡e nadmaÅ¡iti kreatora sa 500.000 nasumiÄnih. Svaki put. Nije ni blizu.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50K &gt; 500K</div>
                <p className="cs-stat-desc">Ciljani pratioci nadmaÅ¡uju generiÄke. ÄŒvrsta niÅ¡a sa 30K pratilaca moÅ¾e konvertovati 10+ pretplatnika dnevno. GeneriÄki nalog sa 200K moÅ¾e konvertovati nula.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-targeted-vs-generic.webp" alt="Ciljano vs generiÄko â€” ciljano uvek pobedi" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ciljano pobedi generiÄko â€” svaki put</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Videli smo to iznova i iznova. Kreator sa 200.000 pratilaca konvertuje 0 pretplatnika dnevno. Drugi kreator sa 30.000 pratilaca konvertuje 10 ili viÅ¡e dnevno. Razlika? Drugi je izabrao niÅ¡u i ostao uz nju.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Jedan od naÅ¡ih kreatora imao je 200K pratilaca na nasumiÄnom sadrÅ¾aju. Nula konverzija pretplatnika dnevno. Pomogli smo joj da se repozicionira u odreÄ‘enu niÅ¡u. Na 30K pratilaca u novoj niÅ¡i konvertovala je 10+ pretplatnika dnevno. Manje pratilaca. Daleko viÅ¡e novca.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Tvoja niÅ¡a je kategorija koja ljudima govori ko si i zaÅ¡to bi ih trebalo biti briga. Uradi ovo ispravno i sve ostalo postaje lakÅ¡e. PogreÅ¡i i nikakvo objavljivanje to neÄ‡e popraviti.</p>
              </div>

              {/* 3 Rules */}
              <div className="cs-fade-in">
                <h3 className="cs-h3">3 pravila izbora niÅ¡e</h3>
                <p className="cs-body">Svaka profitabilna niÅ¡a prolazi tri testa. Ako tvoja niÅ¡a ne proÄ‘e ni jedan od njih, imaÄ‡eÅ¡ problema sa rastom. Ovo nisu sugestije. To su pravila.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div>
                    <strong>AutentiÄnost</strong>
                    <p>Potrebna ti je genuina veza sa tvojom niÅ¡om. Ne laÅ¾na. Ne "mislim da bi ovo moglo da radi". Prava.<br /><br />
                    Zamisli ovo ovako. Devojka koja se bavi boksom i objavljuje boks sadrÅ¾aj deluje stvarno. Ima veÅ¡tine. Ima priÄe. Ima dnevne snimke. Njena publika moÅ¾e da oseti da je to genuino.<br /><br />
                    Sada zamisli nasumiÄnu osobu koja se pretvara da je fitness devojka. Zapravo ne ide na teretanu. Ne zna veÅ¾be. Samo oblaÄi sportsku opremu i snima u teretani. Publika to oseÄ‡a. I algoritam takoÄ‘e.<br /><br />
                    Pitaj sebe: Mogu li da priÄam o ovoj temi 30 minuta bez da ostane bez tema za razgovor? Ako da, prolazi test autentiÄnosti. Ako ne, nastavi da traÅ¾iÅ¡.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div>
                    <strong>Ukupno adresabilno trÅ¾iÅ¡te (TAM)</strong>
                    <p>Tvoja niÅ¡a treba da ima dovoljno ljudi u njoj. Ne previÅ¡e. Ne premalo. Slatka taÄka je oko 3 miliona ljudi na Instagramu.<br /><br />
                    Kako validiraÅ¡ ovo: Proveri Google Trends da vidiÅ¡ ima li tvoja niÅ¡a stabilno interesovanje tokom vremena. Koristi Ahrefs ili sliÄan alat da pogledaÅ¡ volumen pretrage za kljuÄne reÄi vezane za niÅ¡u. Ili jednostavno pitaj ChatGPT: "Koliko ljudi globalno je aktivno zainteresovano za [tvoja niÅ¡a]?"</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div>
                    <strong>Replikabilnost</strong>
                    <p>MoÅ¾eÅ¡ li praviti sadrÅ¾aj u ovoj niÅ¡i svaki dan? Ne jednom nedeljno. Ne kad ti se prohte. Svaki dan.<br /><br />
                    Boks je odliÄan primer. ImaÅ¡ klipove sa treninga. Sparinge. Rad na lopti. Probe outfita. Rutine oporavka. Kulise sa teretane. Mogla bi snimiti 3 komada sadrÅ¾aja svaki dan bez puno napora.<br /><br />
                    Replikabilnost je najmanji kritiÄni od tri pravila â€” ali niÅ¡e kao jahanje konja, skijanje ili surfovanje zahtevaju specifiÄne lokacije ili uslove. TeÅ¡ko je za dnevno objavljivanje â€” ali ako zaista Å¾iviÅ¡ tim stilom Å¾ivota, zaraÄ‘ivaÄki potencijal je ogroman.</p>
                  </div>
                </li>
              </ol>

              <div className="cs-fade-in cs-note">
                <strong>Upozorenje</strong>
                <p>LaÅ¾iranje niÅ¡e uvek propada. Tvoja publika Ä‡e to osetiti za nekoliko objava. Algoritam primeti niski angaÅ¾man i prestane da gura tvoj sadrÅ¾aj. Budi stvarna ili izaberi drugaÄiju niÅ¡u.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Slatka taÄka niÅ¡e</h3>
                <p className="cs-body">VeÄ‡ina kreatora greÅ¡i na jedan od dva naÄina. Idu preÅ¡iroko ili preusko. Oba ubijaju tvoj rast.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr><th>NiÅ¡a</th><th>Procenjeni TAM</th><th>Verdikt</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>"Sportska devojka"</td><td>~80M</td><td>PreviÅ¡e Å¡iroko â€” nevidljiva</td></tr>
                    <tr><td>"Boks devojka"</td><td>~4M</td><td>â­ Slatka taÄka â€” osvoji je</td></tr>
                    <tr><td>"Levo-ruka southpaw boks ASMR"</td><td>~50K</td><td>PreviÅ¡e usko â€” nema publike</td></tr>
                    <tr><td>"Goth fitness devojka"</td><td>~3M</td><td>Dobro â€” specifiÄno i dostupno</td></tr>
                    <tr><td>"Devojka koja veÅ¾ba"</td><td>~60M</td><td>PreviÅ¡e Å¡iroko â€” nema identiteta</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Primeri TAM-a â€” ciljaj oko 3 miliona na Instagramu</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-niche-spectrum.webp" alt="Spektar niÅ¡e od preuskog do preÅ¡irokog" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">PronaÄ‘i slatku taÄku â€” ni preusko, ni preÅ¡iroko</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">PoÄni malo, dominantiraj, pa se Å¡iri</h3>
                <p className="cs-body">Ne pokuÅ¡avaj da osvoji ogromnu niÅ¡u od prvog dana. Upravo tako ostaneÅ¡ nevidljiva. Umesto toga, izaberi malo iskoriÅ¡Ä‡enu pod-niÅ¡u i najpre dominiraÅ¡ njom.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div>
                    <strong>Izaberi Ävrstu pod-niÅ¡u</strong>
                    <p>PoÄni kao "boks devojka". Ne "fitness devojka". Ne "sportska devojka". Boks devojka. Osvoji tu oznaku.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div>
                    <strong>Dominantiraj njom</strong>
                    <p>Objavljuj svaki dan. Postani prvo ime na koje ljudi pomisle kad pomisle boks sadrÅ¾aj na Instagramu. Gradi autoritet u tom malom prostoru.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div>
                    <strong>ProÅ¡iruj se prirodno</strong>
                    <p>Kada osvojiÅ¡ boks, proÅ¡iri se u fitnes i lifestyle u teretani. Tvoja publika te prati jer ti veruju. PraviÄ‡e te na tom putu.</p>
                  </div>
                </li>
              </ol>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-niche-expansion.webp" alt="KoncentriÄni krugovi proÅ¡irenja niÅ¡e" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">PoÄni malo, pa se Å¡iri prema van â€” od pod-niÅ¡e do Å¡ire kategorije</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Jedan kreator je poÄeo u veoma specifiÄnoj breathplay dominatrix niÅ¡i. Brzo je dominirala tim malim prostorom jer niko drugi nije osvajao to mesto. Kada je tamo stekla autoritet, proÅ¡irili smo je u Å¡iru BDSM niÅ¡u koja joj je dala pristup mnogo veÄ‡oj publici. Njeni postojeÄ‡i pratioci su je pratili jer je proÅ¡irenje delovalo prirodno. PreÅ¡la je sa nekolicine angaÅ¾ovanih fanova na desetine hiljada bez gubitka identiteta.</p>
              </div>

              {/* 3-word test */}
              <div className="cs-fade-in">
                <h3 className="cs-h3">Test od 3 reÄi</h3>
                <p className="cs-body">Ovo je najjednostavniji naÄin da znaÅ¡ da li je tvoja niÅ¡a ispravna. Pitaj sebe: MoÅ¾e li me neko opisati u 3 reÄi i da prijatelj odmah zna ko sam?</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-3word-test.webp" alt="Test od 3 reÄi â€” prolaz ili pad" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Test od 3 reÄi â€” prolaz ili pad</p>
              </div>

              <div className="cs-fade-in cs-compare-grid">
                <div className="cs-compare-col cs-compare-col--good">
                  <h4>âœ“ Prolaz</h4>
                  <ul>
                    <li>"Boks devojka" â€” jasna slika, lako pamtljivo</li>
                    <li>"Goth fitness devojka" â€” jedinstveno, upeÄatljivo</li>
                    <li>"Weather devojka" â€” ikoniÄno, svi znaju ko misliÅ¡</li>
                    <li>"Devojka koja tuÄe Lamboe" â€” odmah prepoznatljivo</li>
                  </ul>
                </div>
                <div className="cs-compare-col cs-compare-col--bad">
                  <h4>âœ— Pad</h4>
                  <ul>
                    <li>"Devojka koja objavljuje stvari" â€” to su svi</li>
                    <li>"Lepa devojka" â€” polovina Instagrama</li>
                    <li>"Sportska devojka" â€” koji sport? koji vibe?</li>
                    <li>"Ugodna devojka" â€” ne govori niÅ¡ta konkretno</li>
                  </ul>
                </div>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Formula slatke taÄke</strong>
                <p>Dovoljno specifiÄno da te neko moÅ¾e opisati u 3 reÄi. Dovoljno Å¡iroko da milione ljudi briga za te 3 reÄi.</p>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">KljuÄne poruke â€” Poglavlje 1</h3>
                <ul className="cs-check-list">
                  <li>50K ciljanih pratilaca pobedi 500K nasumiÄnih svaki put</li>
                  <li>Svaka niÅ¡a mora proÄ‡i 3 testa: AutentiÄnost, TAM (~3M) i Replikabilnost</li>
                  <li>PoÄni u maloj pod-niÅ¡i, dominantiraj njom, pa se proÅ¡iri prema van</li>
                  <li>Ako te neko ne moÅ¾e opisati u 3 reÄi, tvoja niÅ¡a nije dovoljno definisana</li>
                  <li>200K pratilaca sa 0 pretplatnika je gore od 30K pratilaca sa 10+ dnevno</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-checklist-box">
                <h4 className="cs-box-heading">ÄŒeklista za izbor niÅ¡e</h4>
                <ul className="cs-check-list">
                  <li>Imam genuinu vezu sa mojom niÅ¡om (ne laÅ¾iram je)</li>
                  <li>Moja niÅ¡a ima oko 3 miliona ljudi na Instagramu</li>
                  <li>Mogu praviti sadrÅ¾aj u ovoj niÅ¡i svaki dan</li>
                  <li>Neko me moÅ¾e opisati u 3 reÄi</li>
                  <li>Moja niÅ¡a nije ni previÅ¡e Å¡iroka ni previÅ¡e uska</li>
                  <li>Izabrala sam malu pod-niÅ¡u da najpre dominantiram</li>
                  <li>Imam plan da se proÅ¡irim u Å¡iru niÅ¡u kasnije</li>
                  <li>Validirala sam TAM koristeÄ‡i Google Trends, Ahrefs ili ChatGPT</li>
                </ul>
              </div>

            </div>
          </section>

          {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ CHAPTER 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section className="cs-chapter cs-chapter--alt" id="ch2">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 2 od 12</span>
                <h2 className="cs-chapter-title">Definisanje brenda</h2>
                <p className="cs-chapter-subtitle">ZaÅ¡to Å¡estica sa liÄnoÅ¡Ä‡u zaraÄ‘uje viÅ¡e od desetice</p>
                <span className="cs-read-time">~14 min Äitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Tvoj brend nije tvoj logo. Nije tvoja paleta boja. To je oseÄ‡aj koji ljudi dobijaju kada vide tvoj sadrÅ¾aj. To je tvoj vizuelni potpis, tvoja fraza, tvoj stil govora i naÄin na koji ljude ÄiniÅ¡ da se osete."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Å ta je zapravo tvoj brend</h3>
                <p className="cs-body">Zamisli ovako. Kada neko vidi tvoju objavu u svom feedu, da li odmah znaju da je tvoja? Pre nego Å¡to vide tvoje ime? To je brend.</p>
                <p className="cs-body">Tvoj brend je ono Å¡to te Äini prepoznatljivom. Bez njega, ti si samo joÅ¡ jedno lice u feedu. Sa njim, ti si jedina opcija.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Test od 3 reÄi (brend verzija)</h3>
                <p className="cs-body">Evo najbrÅ¾i naÄin da znaÅ¡ da li imaÅ¡ brend. MoÅ¾e li te neko opisati u 3 reÄi i da drugi odmah znaju taÄno ko si?</p>
              </div>

              <div className="cs-fade-in cs-compare-grid">
                <div className="cs-compare-col cs-compare-col--good">
                  <h4>âœ“ Brend koji prolazi</h4>
                  <ul>
                    <li>"Weather devojka" â€” svi znaju ko je to</li>
                    <li>"Devojka koja tuÄe Lamboe" â€” odmah prepoznatljivo</li>
                    <li>"Goth odbojkaÅ¡ica" â€” jasna slika u glavi</li>
                  </ul>
                </div>
                <div className="cs-compare-col cs-compare-col--bad">
                  <h4>âœ— Brend koji pada</h4>
                  <ul>
                    <li>"Lepa devojka" â€” moÅ¾e biti iko</li>
                    <li>"Devojka koja objavljuje" â€” to je doslovno svako</li>
                    <li>"Prijatna devojka" â€” ne govori niÅ¡ta</li>
                  </ul>
                </div>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">3 reÄi</div>
                <p className="cs-stat-desc">Ako te neko ne moÅ¾e opisati u 3 reÄi prijatelju i da on odmah zna ko si, tvoj brend nije dovoljno definisan.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">ZaÅ¡to Å¡estica sa liÄnoÅ¡Ä‡u zaraÄ‘uje viÅ¡e od desetice</h3>
                <p className="cs-body">Ovo je najvaÅ¾nija stvar u celom ovom kursu. ProÄitaj dva puta.</p>
                <p className="cs-body">Å estica sa liÄnoÅ¡Ä‡u uvek Ä‡e nadmaÅ¡iti deseticu koja nema niÅ¡ta da kaÅ¾e. Uvek. Nije ni blizu.</p>
                <p className="cs-body">Evo zaÅ¡to. Izgled privlaÄi paÅ¾nju. To je sve Å¡to radi. Zaustavlja skrolovanje na jednu sekundu. Ali liÄnost je ono Å¡to nekoga natera da se pretplati. LiÄnost je ono Å¡to nekoga drÅ¾i pretplaÄ‡enim 6 meseci. LiÄnost je ono Å¡to nekoga tera da potroÅ¡i $200 na custom zahtev.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Zapamti</strong>
                <p>Izgled zaustavlja skrolovanje. LiÄnost otvara novÄanik. TrebaÅ¡ oba, ali liÄnost je 10 puta vrednija.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-iceberg.webp" alt="Ledeni brig â€” ono Å¡to vide vs ono Å¡to ih tera da plaÄ‡aju" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ledeni brig â€” ono Å¡to vide (izgled) vs ono Å¡to ih tera da plaÄ‡aju (liÄnost)</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Eksplicitni sadrÅ¾aj je besplatan svuda na internetu. Postoje milioni kreatora koji izgledaju neverovatno. Ne moÅ¾eÅ¡ se takmiÄiti samo na osnovu izgleda jer uvek postoji neko lepÅ¡i, mlaÄ‘i ili spremniji.</p>
                <p className="cs-body">Ali niko ne moÅ¾e kopirati tvoju liÄnost. Niko ne moÅ¾e replicirati specifiÄan naÄin na koji govoriÅ¡, Å¡ale koje praviÅ¡, priÄe koje priÄaÅ¡ ili naÄin na koji nekog ÄiniÅ¡ da se oseÄ‡a. To je tvoj jarak. To je tvoja cena.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">Brend = Cena</div>
                <p className="cs-stat-desc">Ne moÅ¾eÅ¡ se takmiÄiti na transakcijskoj vrednosti. SadrÅ¾aj je besplatan svuda. Tvoj brend je jedina stvar koja tera ljude da plaÄ‡aju tebi umesto da gledaju besplatan sadrÅ¾aj.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Problem platoa prihoda</h3>
                <p className="cs-body">Ako ti je prihod stagnirao, to skoro nikad nije problem sadrÅ¾aja. Skoro nikad nije problem Äetovanja. To je problem brenda.</p>
                <p className="cs-body">Nisi dala ljudima razlog da ih briga dalje od toga kako izgledaÅ¡. Zato se pretplate, pogledaju dan-dva i odu. Nema veze. Nema lojalnosti. Nema ponavljajuÄ‡eg troÅ¡enja.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-revenue-plateau.webp" alt="Dijagram platoa prihoda â€” svi simptomi imaju isti uzrok" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Svaki simptom ima isti uzrok â€” slab brend</p>
              </div>

              <div className="cs-fade-in cs-priority-list">
                <div className="cs-priority-item cs-priority-item--1">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Visoka fluktuacija pretplatnika</strong><p>Ljudi se pretplate i otkaÅ¾u za 30 dana. Dobili su vizuelno ono Å¡to su traÅ¾ili ali nisu osetili liÄnu vezu da ostanu.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--2">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Niska stopa otvaranja PPV</strong><p>Pretplatnici ignoriÅ¡u tvoje poruke. Ne oseÄ‡aju da te poznaju. Tvoje poruke deluju kao spam, ne kao kad se prijatelj javlja.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--3">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Nula custom zahteva</strong><p>Niko ne traÅ¾i custom sadrÅ¾aj. Nemaju parasosijalnu vezu dovoljno jaku da Å¾ele neÅ¡to liÄno od tebe.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--4">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Osetljivost na cenu</strong><p>Pretplatnici se Å¾ale na $10/mesec. Vide te kao zamenjivu sa jeftinijim kreatorima jer nisi izgradila jedinstven brend.</p></div>
                </div>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Upozorenje</strong>
                <p>Ako si zaglavila na plafonu prihoda, ne objavljuj viÅ¡e sadrÅ¾aja. Ne menjaj Äet strategiju. Prvo popravi brend. Sve ostalo je nizvodno od toga.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Gradi brend pre nego Å¡to skaliraÅ¡</h3>
                <p className="cs-body">Mnogi kreatori Å¾ure da objave viÅ¡e sadrÅ¾aja, pokrenu oglase ili poÄnu viÅ¡estruke naloge pre nego Å¡to su usavrÅ¡ili brend. Ovo je naopako. To je kao sipanje benzina u auto bez motora.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div><strong>ZakljuÄaj svoju niÅ¡u</strong><p>Ovo si veÄ‡ uradila u Poglavlju 1. Proveri da li prolazi sva 3 pravila. Ovo je tvoj temelj.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div><strong>DefiniÅ¡i svoju liÄnost</strong><p>Kako govoriÅ¡? Å ta te Äini smeÅ¡nom? Koja su tvoja miÅ¡ljenja? Å ta te zanima? ZapiÅ¡i ovo. Budi specifiÄna.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div><strong>Postavi vizuelni stil</strong><p>Boje, stil montaÅ¾e, outfiti, lokacije, osvetljenje. Kada neko vidi tvoj sadrÅ¾aj sa iskljuÄenim zvukom i bez prikazanog lica, mogu li da ga prepoznaju?</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">04</span>
                  <div><strong>PronaÄ‘i svoj glas</strong><p>Kako kucaÅ¡? KoristiÅ¡ li sleng? Jesi li sarcastiÄna? Slatka? Direktna? Tvoj pisani glas u natpisima i DM-ovima treba da odgovara tvojoj video liÄnosti.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">05</span>
                  <div><strong>Testiraj sa 10 objava</strong><p>Objavi 10 komada sadrÅ¾aja koji u potpunosti izraÅ¾avaju tvoj brend. Vidi kako se ponaÅ¡aju. Uzmi povratne informacije. Prilagodi. Onda skaliraj.</p></div>
                </li>
              </ol>

              <div className="cs-fade-in">
                <p className="cs-body">Svaki komad sadrÅ¾aja treba da odgovori na jedno pitanje: <em>Da li ovo deluje kao JA?</em> Ako bi to mogla biti objava bilo kog drugog, nije dovoljno brendirano.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Parasocijalni odnosi: najmoÄ‡niji pokretaÄ prihoda</h3>
                <p className="cs-body">Ovo je deo koji veÄ‡ina kreatora ignoriÅ¡e. I to je jedini najveÄ‡i pokretaÄ prihoda u celom ovom poslu.</p>
                <p className="cs-body">Parasocijalni odnos nastaje kada gledaoc oseÄ‡a da te liÄno poznaje, iako se nikad niste upoznale. OseÄ‡aju se povezanim sa tobom. Brine ih tvoj dan. Navijaju za tebe. Misle na tebe kao na stvarnu osobu u svom Å¾ivotu.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-parasocial.webp" alt="Parasocijalni odnosi â€” najveÄ‡i pokretaÄ prihoda" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Parasocijalni odnosi â€” zaÅ¡to su kreatori koji dele liÄni Å¾ivot dramatiÄno profitabilniji</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">Poluga #1</div>
                <p className="cs-stat-desc">Kreatori koji opseÅ¾no dele liÄni Å¾ivot vide dramatiÄno veÄ‡u Å¾ivotnu vrednost pretplatnika. Ovo je poluga prihoda broj jedan u poslu.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Kreatori koji grade jake parasocijalne odnose vide dramatiÄno veÄ‡u Å¾ivotnu vrednost pretplatnika. Njihovi pretplatnici ostaju duÅ¾e. TroÅ¡e viÅ¡e. Kupuju custom sadrÅ¾aj. Daju napojnice. Obnavljaju mesec za mesecom.</p>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">KljuÄne poruke â€” Poglavlje 2</h3>
                <ul className="cs-check-list">
                  <li>Brend je oseÄ‡aj koji ljudi dobijaju kada vide tvoj sadrÅ¾aj â€” pre nego Å¡to vide tvoje ime</li>
                  <li>Å estica sa liÄnoÅ¡Ä‡u uvek zaraÄ‘uje viÅ¡e od desetice bez nje</li>
                  <li>Izgled zaustavlja skrolovanje. LiÄnost otvara novÄanik</li>
                  <li>Plato prihoda je gotovo uvek problem brenda, ne sadrÅ¾aja</li>
                  <li>Gradi brend pre nego Å¡to skaliraÅ¡ â€” ne posle</li>
                  <li>Parasocijalni odnosi su jedini najveÄ‡i pokretaÄ Å¾ivotne vrednosti pretplatnika</li>
                </ul>
              </div>

            </div>
          </section>

          {/* â”€â”€ LOCKED â”€â”€ */}
          <section className="cs-locked" id="ch3-12">
            <div className="cs-container">
              <div className="cs-locked-inner">
                <div className="cs-locked-icon">ðŸ”’</div>
                <h2 className="cs-locked-title">
                  Poglavlja 3â€“12 dostupna su<br />
                  <em>kreatorima Velluto Nero</em>
                </h2>
                <p className="cs-locked-desc">
                  Postavljanje naloga. Strategija sadrÅ¾aja. Plan rasta od 0 do 10k. Skaliranje na viÅ¡e naloga. Analitika i KPI-jevi. Sve je u sledeÄ‡ih 10 poglavlja.
                </p>
                <ul className="cs-locked-list">
                  <li>âœ“ Poglavlje 3 â€” Postavljanje naloga i optimizacija profila</li>
                  <li>âœ“ Poglavlje 4 â€” Kreiranje sadrÅ¾aja i batching sistem</li>
                  <li>âœ“ Poglavlje 5 â€” Strategija hashtagova i otkrivanja</li>
                  <li>âœ“ Poglavlje 6 â€” Plan rasta: od 0 do 1k pratilaca</li>
                  <li>âœ“ Poglavlje 7 â€” Od 1k do 10k: fazni plan skaliranja</li>
                  <li>âœ“ Poglavlje 8 â€” Rast sa viÅ¡e naloga i cross-platform</li>
                  <li>âœ“ Poglavlje 9 â€” Saradnje, reposti i virusni rast</li>
                  <li>âœ“ Poglavlje 10 â€” Konverzija pratilaca u pretplatnike</li>
                  <li>âœ“ Poglavlje 11 â€” KPI-jevi, analitika i dijagnostika</li>
                  <li>âœ“ Poglavlje 12 â€” Sistem koji radi bez tebe</li>
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
            <Link href="/#apply" className="btn-outline" style={{ borderColor: '#e8538f', color: '#e8538f' }}>Prijavi se <span>â†’</span></Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">Â© 2025 Velluto Nero. Sva prava zadrÅ¾ana.</p>
            <div className="footer-legal"><a href="/privacy">Privatnost</a><a href="/terms">Uslovi</a></div>
          </div>
        </div>
      </footer>

      <style>{`
        .cs-page { background: var(--color-dark-1); color: #1a1a1a; font-family: var(--font-montserrat, 'Montserrat', sans-serif); }
        .cs-content-wrap { padding-bottom: 0; }
        .cs-container { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .cs-fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .cs-fade-in.visible { opacity: 1; transform: none; }
        .cs-cover-box { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.13); margin: 48px auto 0; }
        .cs-intro-block { padding: 40px 0 8px; }
        .cs-page-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin: 12px 0 20px; color: #1a1a1a; }
        .cs-page-title em { color: #e8538f; font-style: italic; }
        .cs-lead { font-size: 1rem; line-height: 1.8; color: #444; margin: 0 0 20px; }
        .cs-meta-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        .cs-meta-pills span { background: #fff; border: 1px solid #e8e0e0; border-radius: 20px; padding: 5px 14px; font-size: 0.78rem; color: #666; }
        .cs-learn-box { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0 56px; }
        .cs-learn-col { background: #fff; border-radius: 12px; padding: 28px 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        @media (max-width: 620px) { .cs-learn-box { grid-template-columns: 1fr; } .cs-cover-box { border-radius: 10px; } }
        .cs-chapter { padding: 72px 0; border-top: 1px solid rgba(0,0,0,0.07); }
        .cs-chapter--alt { background: rgba(232,83,143,0.03); }
        .cs-chapter-header { margin-bottom: 32px; }
        .cs-chapter-tag { display: inline-block; background: #e8538f; color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
        .cs-chapter-title { font-family: var(--font-display); font-size: clamp(1.7rem, 4vw, 2.5rem); line-height: 1.15; margin: 0 0 10px; color: #1a1a1a; }
        .cs-chapter-subtitle { font-size: 1rem; color: #888; margin: 0 0 12px; }
        .cs-read-time { font-size: 0.78rem; color: #bbb; }
        .cs-h3 { font-family: var(--font-display); font-size: 1.35rem; font-style: italic; margin: 52px 0 14px; color: #1a1a1a; }
        .cs-body { font-size: 0.97rem; line-height: 1.85; margin: 0 0 18px; color: #333; }
        .cs-pull-quote { border-left: 3px solid #e8538f; margin: 32px 0; padding: 16px 24px; font-style: italic; color: #555; font-size: 1rem; line-height: 1.75; background: #fff; border-radius: 0 8px 8px 0; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .cs-pull-quote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: #aaa; }
        .cs-note { background: #fffbe6; border-left: 4px solid #f5c518; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 0.9rem; line-height: 1.7; color: #4a3800; }
        .cs-note strong { display: block; margin-bottom: 6px; font-weight: 700; }
        .cs-note p, .cs-note ul { margin: 0; }
        .cs-note ul { padding-left: 20px; margin-top: 8px; }
        .cs-note li { margin-bottom: 5px; }
        .cs-note--pink { background: #fff0f6; border-left-color: #e8538f; color: #5a0028; }
        .cs-stat-block { text-align: center; padding: 36px 24px; background: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 32px 0; }
        .cs-stat-num { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.5rem); color: #e8538f; font-style: italic; line-height: 1; }
        .cs-stat-desc { margin: 10px auto 0; font-size: 0.95rem; color: #555; line-height: 1.6; max-width: 480px; }
        .cs-steps { list-style: none; padding: 0; margin: 24px 0 40px; display: flex; flex-direction: column; gap: 14px; }
        .cs-steps li { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.06); }
        .cs-step-num { font-family: var(--font-display); font-size: 1.6rem; color: #e8538f; font-style: italic; min-width: 40px; line-height: 1; padding-top: 2px; flex-shrink: 0; }
        .cs-steps li strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 5px; }
        .cs-steps li p { margin: 0; font-size: 0.87rem; color: #555; line-height: 1.6; }
        .cs-table-wrap { overflow-x: auto; margin: 20px 0 36px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .cs-table { width: 100%; border-collapse: collapse; background: #fff; font-size: 0.88rem; min-width: 400px; }
        .cs-table th { background: #e8538f; color: #fff; padding: 12px 16px; text-align: left; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
        .cs-table td { padding: 12px 16px; border-bottom: 1px solid #f0f0f0; color: #333; vertical-align: top; line-height: 1.5; }
        .cs-table tr:last-child td { border-bottom: none; }
        .cs-table tr:nth-child(even) td { background: #fafafa; }
        .cs-table-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 8px 0 0; font-style: italic; }
        .cs-img-wrap { margin: 36px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .cs-img-caption { font-size: 0.78rem; color: #aaa; text-align: center; margin: 10px 0 0; font-style: italic; }
        .cs-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0 32px; }
        .cs-compare-col { background: #fff; border-radius: 10px; padding: 22px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .cs-compare-col h4 { margin: 0 0 14px; font-size: 0.9rem; font-weight: 700; }
        .cs-compare-col ul { margin: 0; padding: 0 0 0 16px; }
        .cs-compare-col li { padding: 5px 0; font-size: 0.85rem; color: #444; line-height: 1.5; }
        .cs-compare-col--good { border-top: 3px solid #e8538f; }
        .cs-compare-col--good h4 { color: #e8538f; }
        .cs-compare-col--bad { border-top: 3px solid #ccc; }
        .cs-compare-col--bad h4 { color: #888; }
        @media (max-width: 560px) { .cs-compare-grid { grid-template-columns: 1fr; } }
        .cs-priority-list { display: flex; flex-direction: column; gap: 10px; margin: 24px 0 32px; }
        .cs-priority-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); border-left: 4px solid #e8538f; }
        .cs-priority-item--2 { border-left-color: #ed6fa0; }
        .cs-priority-item--3 { border-left-color: #f28cba; }
        .cs-priority-item--4 { border-left-color: #f5aacc; }
        .cs-priority-time { font-size: 0.68rem; font-weight: 700; color: #e8538f; white-space: nowrap; min-width: 68px; padding-top: 3px; letter-spacing: 0.03em; text-transform: uppercase; flex-shrink: 0; }
        .cs-priority-item strong { display: block; font-size: 0.9rem; margin-bottom: 3px; }
        .cs-priority-item p { margin: 0; font-size: 0.82rem; color: #666; line-height: 1.5; }
        .cs-shift-box, .cs-checklist-box, .cs-takeaways { background: #fff; border-radius: 12px; padding: 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 24px 0; }
        .cs-box-heading { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #e8538f; margin: 0 0 14px; }
        .cs-check-list { list-style: none; padding: 0; margin: 0; }
        .cs-check-list li { padding: 7px 0 7px 22px; font-size: 0.9rem; color: #333; line-height: 1.5; border-bottom: 1px solid #f4f4f4; position: relative; }
        .cs-check-list li:last-child { border-bottom: none; }
        .cs-check-list li::before { content: 'âœ“'; position: absolute; left: 0; color: #e8538f; font-weight: 700; }
        .cs-takeaways { border-top: 3px solid #e8538f; }
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
