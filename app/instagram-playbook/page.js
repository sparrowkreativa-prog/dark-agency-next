import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });

export const metadata = {
  title: 'Instagram Vodič za Rast | Velluto Nero',
  description: 'Sistem koji koristimo da kreatore vodimo od nule do 100k+ pratilaca — istraživanje, lansiranje, rast, skaliranje na više naloga.',
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
              <li><Link href="/">Početna</Link></li>
              <li><Link href="/#masina">Mašina</Link></li>
              <li><Link href="/#roster">Roster</Link></li>
              <li><Link href="/#services">Usluge</Link></li>
              <li><Link href="/cet-strategija">Čet Strategija</Link></li>
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

            {/* Cover image */}
            <div className="cs-fade-in cs-cover-box">
              <Image
                src="/free-tools/instagram-playbook-cover.jpg"
                alt="Instagram vodič za rast"
                width={760}
                height={420}
                priority
                sizes="(max-width: 768px) calc(100vw - 48px), 760px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Title block */}
            <div className="cs-fade-in cs-intro-block">
              <span className="chapter-label" style={{ color: '#a9875c', marginBottom: 16, display: 'block' }}>Velluto Nero · Interni vodič</span>
              <h1 className="cs-page-title">
                Naš stvarni interni vodič<br />
                <em>od nule do 100k+ pratilaca</em>
              </h1>
              <p className="cs-lead">
                12 poglavlja. četiri dela. tačan sistem iza kreatora koji idu od nule do 100k+ pratilaca — istraživanje, lansiranje, rast, skaliranje na više naloga, sve. delimo ga jer, iskreno, većina vodiča vani kaže "objavljuj konzistentno" i zove to strategijom.
              </p>
              <div className="cs-meta-pills">
                <span>12 poglavlja</span>
                <span>~3 sata čitanja</span>
                <span>početnici dobrodošli</span>
                <span>besplatno — bez skrivenih uslova</span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="cs-fade-in cs-learn-box">
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Šta ćeš naučiti</h3>
                <ul className="cs-check-list">
                  <li>Radi konkurentsko istraživanje i pronađi profitabilne niše</li>
                  <li>Gradi lične brendove koji zaista konvertuju u pretplatnike</li>
                  <li>Postavi naloge, profile i link levkove ispravno</li>
                  <li>Izvršavaj fazni plan rasta od 0 do 10k+</li>
                  <li>Skaliraj sa više naloga i cross-platform distribucijom</li>
                  <li>Prati KPI-jeve, dijagnostikuj šta ne radi i popravi to brzo</li>
                </ul>
              </div>
              <div className="cs-learn-col">
                <h3 className="cs-box-heading">Za koga je ovo</h3>
                <ul className="cs-check-list">
                  <li>Kreatori koji žele da porastu na Instagramu ali ne znaju odakle da počnu</li>
                  <li>Kreatori koji objavljuju konzistentno ali ne vide rezultate</li>
                  <li>Kreatori spremni da skaliraju dalje od jednog naloga</li>
                  <li>Svi koji žele proveren, ponovljiv sistem — ne nagađanje</li>
                </ul>
              </div>
            </div>

          </div>

          {/* ─────────── CHAPTER 1 ─────────── */}
          <section className="cs-chapter" id="ch1">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 1 od 12</span>
                <h2 className="cs-chapter-title">Izbor niše</h2>
                <p className="cs-chapter-subtitle">Okvir sa 3 pravila za pronalazak profitabilne niše</p>
                <span className="cs-read-time">~12 min čitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Većina kreatora preskače ovaj korak. Objavljuju nasumične stvari, nadaju se da će nešto proći i pitaju se zašto im broj pratilaca ništa ne znači."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Zašto je tvoja niša važnija od tvog izgleda</h3>
                <p className="cs-body">Evo istine. Kreator sa 50.000 ciljanih pratilaca će nadmašiti kreatora sa 500.000 nasumičnih. Svaki put. Nije ni blizu.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">50K &gt; 500K</div>
                <p className="cs-stat-desc">Ciljani pratioci nadmašuju generičke. Čvrsta niša sa 30K pratilaca može konvertovati 10+ pretplatnika dnevno. Generički nalog sa 200K može konvertovati nula.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-targeted-vs-generic.webp" alt="Ciljano vs generičko — ciljano uvek pobedi" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ciljano pobedi generičko — svaki put</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Videli smo to iznova i iznova. Kreator sa 200.000 pratilaca konvertuje 0 pretplatnika dnevno. Drugi kreator sa 30.000 pratilaca konvertuje 10 ili više dnevno. Razlika? Drugi je izabrao nišu i ostao uz nju.</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Jedan od naših kreatora imao je 200K pratilaca na nasumičnom sadržaju. Nula konverzija pretplatnika dnevno. Pomogli smo joj da se repozicionira u određenu nišu. Na 30K pratilaca u novoj niši konvertovala je 10+ pretplatnika dnevno. Manje pratilaca. Daleko više novca.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Tvoja niša je kategorija koja ljudima govori ko si i zašto bi ih trebalo biti briga. Uradi ovo ispravno i sve ostalo postaje lakše. Pogreši i nikakvo objavljivanje to neće popraviti.</p>
              </div>

              {/* 3 Rules */}
              <div className="cs-fade-in">
                <h3 className="cs-h3">3 pravila izbora niše</h3>
                <p className="cs-body">Svaka profitabilna niša prolazi tri testa. Ako tvoja niša ne prođe ni jedan od njih, imaćeš problema sa rastom. Ovo nisu sugestije. To su pravila.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div>
                    <strong>Autentičnost</strong>
                    <p>Potrebna ti je genuina veza sa tvojom nišom. Ne lažna. Ne "mislim da bi ovo moglo da radi". Prava.<br /><br />
                    Zamisli ovo ovako. Devojka koja se bavi boksom i objavljuje boks sadržaj deluje stvarno. Ima veštine. Ima priče. Ima dnevne snimke. Njena publika može da oseti da je to genuino.<br /><br />
                    Sada zamisli nasumičnu osobu koja se pretvara da je fitness devojka. Zapravo ne ide na teretanu. Ne zna vežbe. Samo oblači sportsku opremu i snima u teretani. Publika to oseća. I algoritam takođe.<br /><br />
                    Pitaj sebe: Mogu li da pričam o ovoj temi 30 minuta bez da ostane bez tema za razgovor? Ako da, prolazi test autentičnosti. Ako ne, nastavi da tražiš.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div>
                    <strong>Ukupno adresabilno tržište (TAM)</strong>
                    <p>Tvoja niša treba da ima dovoljno ljudi u njoj. Ne previše. Ne premalo. Slatka tačka je oko 3 miliona ljudi na Instagramu.<br /><br />
                    Kako validiraš ovo: Proveri Google Trends da vidiš ima li tvoja niša stabilno interesovanje tokom vremena. Koristi Ahrefs ili sličan alat da pogledaš volumen pretrage za ključne reči vezane za nišu. Ili jednostavno pitaj ChatGPT: "Koliko ljudi globalno je aktivno zainteresovano za [tvoja niša]?"</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div>
                    <strong>Replikabilnost</strong>
                    <p>Možeš li praviti sadržaj u ovoj niši svaki dan? Ne jednom nedeljno. Ne kad ti se prohte. Svaki dan.<br /><br />
                    Boks je odličan primer. Imaš klipove sa treninga. Sparinge. Rad na lopti. Probe outfita. Rutine oporavka. Kulise sa teretane. Mogla bi snimiti 3 komada sadržaja svaki dan bez puno napora.<br /><br />
                    Replikabilnost je najmanji kritični od tri pravila — ali niše kao jahanje konja, skijanje ili surfovanje zahtevaju specifične lokacije ili uslove. Teško je za dnevno objavljivanje — ali ako zaista živiš tim stilom života, zarađivački potencijal je ogroman.</p>
                  </div>
                </li>
              </ol>

              <div className="cs-fade-in cs-note">
                <strong>Upozorenje</strong>
                <p>Lažiranje niše uvek propada. Tvoja publika će to osetiti za nekoliko objava. Algoritam primeti niski angažman i prestane da gura tvoj sadržaj. Budi stvarna ili izaberi drugačiju nišu.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Slatka tačka niše</h3>
                <p className="cs-body">Većina kreatora greši na jedan od dva načina. Idu preširoko ili preusko. Oba ubijaju tvoj rast.</p>
              </div>

              <div className="cs-fade-in cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr><th>Niša</th><th>Procenjeni TAM</th><th>Verdikt</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>"Sportska devojka"</td><td>~80M</td><td>Previše široko — nevidljiva</td></tr>
                    <tr><td>"Boks devojka"</td><td>~4M</td><td>⭐ Slatka tačka — osvoji je</td></tr>
                    <tr><td>"Levo-ruka southpaw boks ASMR"</td><td>~50K</td><td>Previše usko — nema publike</td></tr>
                    <tr><td>"Goth fitness devojka"</td><td>~3M</td><td>Dobro — specifično i dostupno</td></tr>
                    <tr><td>"Devojka koja vežba"</td><td>~60M</td><td>Previše široko — nema identiteta</td></tr>
                  </tbody>
                </table>
                <p className="cs-table-caption">Primeri TAM-a — ciljaj oko 3 miliona na Instagramu</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-niche-spectrum.webp" alt="Spektar niše od preuskog do preširokog" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Pronađi slatku tačku — ni preusko, ni preširoko</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Počni malo, dominantiraj, pa se širi</h3>
                <p className="cs-body">Ne pokušavaj da osvoji ogromnu nišu od prvog dana. Upravo tako ostaneš nevidljiva. Umesto toga, izaberi malo iskorišćenu pod-nišu i najpre dominiraš njom.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div>
                    <strong>Izaberi čvrstu pod-nišu</strong>
                    <p>Počni kao "boks devojka". Ne "fitness devojka". Ne "sportska devojka". Boks devojka. Osvoji tu oznaku.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div>
                    <strong>Dominantiraj njom</strong>
                    <p>Objavljuj svaki dan. Postani prvo ime na koje ljudi pomisle kad pomisle boks sadržaj na Instagramu. Gradi autoritet u tom malom prostoru.</p>
                  </div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div>
                    <strong>Proširuj se prirodno</strong>
                    <p>Kada osvojiš boks, proširi se u fitnes i lifestyle u teretani. Tvoja publika te prati jer ti veruju. Praviće te na tom putu.</p>
                  </div>
                </li>
              </ol>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-niche-expansion.webp" alt="Koncentrični krugovi proširenja niše" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Počni malo, pa se širi prema van — od pod-niše do šire kategorije</p>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Pravi primer</strong>
                <p>Jedan kreator je počeo u veoma specifičnoj breathplay dominatrix niši. Brzo je dominirala tim malim prostorom jer niko drugi nije osvajao to mesto. Kada je tamo stekla autoritet, proširili smo je u širu BDSM nišu koja joj je dala pristup mnogo većoj publici. Njeni postojeći pratioci su je pratili jer je proširenje delovalo prirodno. Prešla je sa nekolicine angažovanih fanova na desetine hiljada bez gubitka identiteta.</p>
              </div>

              {/* 3-word test */}
              <div className="cs-fade-in">
                <h3 className="cs-h3">Test od 3 reči</h3>
                <p className="cs-body">Ovo je najjednostavniji način da znaš da li je tvoja niša ispravna. Pitaj sebe: Može li me neko opisati u 3 reči i da prijatelj odmah zna ko sam?</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch1-3word-test.webp" alt="Test od 3 reči — prolaz ili pad" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Test od 3 reči — prolaz ili pad</p>
              </div>

              <div className="cs-fade-in cs-compare-grid">
                <div className="cs-compare-col cs-compare-col--good">
                  <h4>✓ Prolaz</h4>
                  <ul>
                    <li>"Boks devojka" — jasna slika, lako pamtljivo</li>
                    <li>"Goth fitness devojka" — jedinstveno, upečatljivo</li>
                    <li>"Weather devojka" — ikonično, svi znaju ko misliš</li>
                    <li>"Devojka koja tuče Lamboe" — odmah prepoznatljivo</li>
                  </ul>
                </div>
                <div className="cs-compare-col cs-compare-col--bad">
                  <h4>✗ Pad</h4>
                  <ul>
                    <li>"Devojka koja objavljuje stvari" — to su svi</li>
                    <li>"Lepa devojka" — polovina Instagrama</li>
                    <li>"Sportska devojka" — koji sport? koji vibe?</li>
                    <li>"Ugodna devojka" — ne govori ništa konkretno</li>
                  </ul>
                </div>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Formula slatke tačke</strong>
                <p>Dovoljno specifično da te neko može opisati u 3 reči. Dovoljno široko da milione ljudi briga za te 3 reči.</p>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">Ključne poruke — Poglavlje 1</h3>
                <ul className="cs-check-list">
                  <li>50K ciljanih pratilaca pobedi 500K nasumičnih svaki put</li>
                  <li>Svaka niša mora proći 3 testa: Autentičnost, TAM (~3M) i Replikabilnost</li>
                  <li>Počni u maloj pod-niši, dominantiraj njom, pa se proširi prema van</li>
                  <li>Ako te neko ne može opisati u 3 reči, tvoja niša nije dovoljno definisana</li>
                  <li>200K pratilaca sa 0 pretplatnika je gore od 30K pratilaca sa 10+ dnevno</li>
                </ul>
              </div>

              <div className="cs-fade-in cs-checklist-box">
                <h4 className="cs-box-heading">Čeklista za izbor niše</h4>
                <ul className="cs-check-list">
                  <li>Imam genuinu vezu sa mojom nišom (ne lažiram je)</li>
                  <li>Moja niša ima oko 3 miliona ljudi na Instagramu</li>
                  <li>Mogu praviti sadržaj u ovoj niši svaki dan</li>
                  <li>Neko me može opisati u 3 reči</li>
                  <li>Moja niša nije ni previše široka ni previše uska</li>
                  <li>Izabrala sam malu pod-nišu da najpre dominantiram</li>
                  <li>Imam plan da se proširim u širu nišu kasnije</li>
                  <li>Validirala sam TAM koristeći Google Trends, Ahrefs ili ChatGPT</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ─────────── CHAPTER 2 ─────────── */}
          <section className="cs-chapter cs-chapter--alt" id="ch2">
            <div className="cs-container">

              <div className="cs-fade-in cs-chapter-header">
                <span className="cs-chapter-tag">Poglavlje 2 od 12</span>
                <h2 className="cs-chapter-title">Definisanje brenda</h2>
                <p className="cs-chapter-subtitle">Zašto šestica sa ličnošću zarađuje više od desetice</p>
                <span className="cs-read-time">~14 min čitanja</span>
              </div>

              <blockquote className="cs-fade-in cs-pull-quote">
                "Tvoj brend nije tvoj logo. Nije tvoja paleta boja. To je osećaj koji ljudi dobijaju kada vide tvoj sadržaj. To je tvoj vizuelni potpis, tvoja fraza, tvoj stil govora i način na koji ljude činiš da se osete."
              </blockquote>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Šta je zapravo tvoj brend</h3>
                <p className="cs-body">Zamisli ovako. Kada neko vidi tvoju objavu u svom feedu, da li odmah znaju da je tvoja? Pre nego što vide tvoje ime? To je brend.</p>
                <p className="cs-body">Tvoj brend je ono što te čini prepoznatljivom. Bez njega, ti si samo još jedno lice u feedu. Sa njim, ti si jedina opcija.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Test od 3 reči (brend verzija)</h3>
                <p className="cs-body">Evo najbrži način da znaš da li imaš brend. Može li te neko opisati u 3 reči i da drugi odmah znaju tačno ko si?</p>
              </div>

              <div className="cs-fade-in cs-compare-grid">
                <div className="cs-compare-col cs-compare-col--good">
                  <h4>✓ Brend koji prolazi</h4>
                  <ul>
                    <li>"Weather devojka" — svi znaju ko je to</li>
                    <li>"Devojka koja tuče Lamboe" — odmah prepoznatljivo</li>
                    <li>"Goth odbojkašica" — jasna slika u glavi</li>
                  </ul>
                </div>
                <div className="cs-compare-col cs-compare-col--bad">
                  <h4>✗ Brend koji pada</h4>
                  <ul>
                    <li>"Lepa devojka" — može biti iko</li>
                    <li>"Devojka koja objavljuje" — to je doslovno svako</li>
                    <li>"Prijatna devojka" — ne govori ništa</li>
                  </ul>
                </div>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">3 reči</div>
                <p className="cs-stat-desc">Ako te neko ne može opisati u 3 reči prijatelju i da on odmah zna ko si, tvoj brend nije dovoljno definisan.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Zašto šestica sa ličnošću zarađuje više od desetice</h3>
                <p className="cs-body">Ovo je najvažnija stvar u celom ovom kursu. Pročitaj dva puta.</p>
                <p className="cs-body">Šestica sa ličnošću uvek će nadmašiti deseticu koja nema ništa da kaže. Uvek. Nije ni blizu.</p>
                <p className="cs-body">Evo zašto. Izgled privlači pažnju. To je sve što radi. Zaustavlja skrolovanje na jednu sekundu. Ali ličnost je ono što nekoga natera da se pretplati. Ličnost je ono što nekoga drži pretplaćenim 6 meseci. Ličnost je ono što nekoga tera da potroši $200 na custom zahtev.</p>
              </div>

              <div className="cs-fade-in cs-note">
                <strong>Zapamti</strong>
                <p>Izgled zaustavlja skrolovanje. Ličnost otvara novčanik. Trebaš oba, ali ličnost je 10 puta vrednija.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-iceberg.webp" alt="Ledeni brig — ono što vide vs ono što ih tera da plaćaju" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Ledeni brig — ono što vide (izgled) vs ono što ih tera da plaćaju (ličnost)</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Eksplicitni sadržaj je besplatan svuda na internetu. Postoje milioni kreatora koji izgledaju neverovatno. Ne možeš se takmičiti samo na osnovu izgleda jer uvek postoji neko lepši, mlađi ili spremniji.</p>
                <p className="cs-body">Ali niko ne može kopirati tvoju ličnost. Niko ne može replicirati specifičan način na koji govoriš, šale koje praviš, priče koje pričaš ili način na koji nekog činiš da se oseća. To je tvoj jarak. To je tvoja cena.</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">Brend = Cena</div>
                <p className="cs-stat-desc">Ne možeš se takmičiti na transakcijskoj vrednosti. Sadržaj je besplatan svuda. Tvoj brend je jedina stvar koja tera ljude da plaćaju tebi umesto da gledaju besplatan sadržaj.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Problem platoa prihoda</h3>
                <p className="cs-body">Ako ti je prihod stagnirao, to skoro nikad nije problem sadržaja. Skoro nikad nije problem četovanja. To je problem brenda.</p>
                <p className="cs-body">Nisi dala ljudima razlog da ih briga dalje od toga kako izgledaš. Zato se pretplate, pogledaju dan-dva i odu. Nema veze. Nema lojalnosti. Nema ponavljajućeg trošenja.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-revenue-plateau.webp" alt="Dijagram platoa prihoda — svi simptomi imaju isti uzrok" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Svaki simptom ima isti uzrok — slab brend</p>
              </div>

              <div className="cs-fade-in cs-priority-list">
                <div className="cs-priority-item cs-priority-item--1">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Visoka fluktuacija pretplatnika</strong><p>Ljudi se pretplate i otkažu za 30 dana. Dobili su vizuelno ono što su tražili ali nisu osetili ličnu vezu da ostanu.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--2">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Niska stopa otvaranja PPV</strong><p>Pretplatnici ignorišu tvoje poruke. Ne osećaju da te poznaju. Tvoje poruke deluju kao spam, ne kao kad se prijatelj javlja.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--3">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Nula custom zahteva</strong><p>Niko ne traži custom sadržaj. Nemaju parasosijalnu vezu dovoljno jaku da žele nešto lično od tebe.</p></div>
                </div>
                <div className="cs-priority-item cs-priority-item--4">
                  <span className="cs-priority-time">Simptom</span>
                  <div><strong>Osetljivost na cenu</strong><p>Pretplatnici se žale na $10/mesec. Vide te kao zamenjivu sa jeftinijim kreatorima jer nisi izgradila jedinstven brend.</p></div>
                </div>
              </div>

              <div className="cs-fade-in cs-note cs-note--pink">
                <strong>Upozorenje</strong>
                <p>Ako si zaglavila na plafonu prihoda, ne objavljuj više sadržaja. Ne menjaj čet strategiju. Prvo popravi brend. Sve ostalo je nizvodno od toga.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Gradi brend pre nego što skaliraš</h3>
                <p className="cs-body">Mnogi kreatori žure da objave više sadržaja, pokrenu oglase ili počnu višestruke naloge pre nego što su usavršili brend. Ovo je naopako. To je kao sipanje benzina u auto bez motora.</p>
              </div>

              <ol className="cs-steps">
                <li className="cs-fade-in">
                  <span className="cs-step-num">01</span>
                  <div><strong>Zaključaj svoju nišu</strong><p>Ovo si već uradila u Poglavlju 1. Proveri da li prolazi sva 3 pravila. Ovo je tvoj temelj.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">02</span>
                  <div><strong>Definiši svoju ličnost</strong><p>Kako govoriš? Šta te čini smešnom? Koja su tvoja mišljenja? Šta te zanima? Zapiši ovo. Budi specifična.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">03</span>
                  <div><strong>Postavi vizuelni stil</strong><p>Boje, stil montaže, outfiti, lokacije, osvetljenje. Kada neko vidi tvoj sadržaj sa isključenim zvukom i bez prikazanog lica, mogu li da ga prepoznaju?</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">04</span>
                  <div><strong>Pronađi svoj glas</strong><p>Kako kucaš? Koristiš li sleng? Jesi li sarcastična? Slatka? Direktna? Tvoj pisani glas u natpisima i DM-ovima treba da odgovara tvojoj video ličnosti.</p></div>
                </li>
                <li className="cs-fade-in">
                  <span className="cs-step-num">05</span>
                  <div><strong>Testiraj sa 10 objava</strong><p>Objavi 10 komada sadržaja koji u potpunosti izražavaju tvoj brend. Vidi kako se ponašaju. Uzmi povratne informacije. Prilagodi. Onda skaliraj.</p></div>
                </li>
              </ol>

              <div className="cs-fade-in">
                <p className="cs-body">Svaki komad sadržaja treba da odgovori na jedno pitanje: <em>Da li ovo deluje kao JA?</em> Ako bi to mogla biti objava bilo kog drugog, nije dovoljno brendirano.</p>
              </div>

              <div className="cs-fade-in">
                <h3 className="cs-h3">Parasocijalni odnosi: najmoćniji pokretač prihoda</h3>
                <p className="cs-body">Ovo je deo koji većina kreatora ignoriše. I to je jedini najveći pokretač prihoda u celom ovom poslu.</p>
                <p className="cs-body">Parasocijalni odnos nastaje kada gledaoc oseća da te lično poznaje, iako se nikad niste upoznale. Osećaju se povezanim sa tobom. Brine ih tvoj dan. Navijaju za tebe. Misle na tebe kao na stvarnu osobu u svom životu.</p>
              </div>

              <div className="cs-fade-in cs-img-wrap">
                <Image src="/instagram-playbook/ch2-parasocial.webp" alt="Parasocijalni odnosi — najveći pokretač prihoda" width={760} height={420} sizes="(max-width: 768px) calc(100vw - 48px), 760px" style={{ width: '100%', height: 'auto' }} />
                <p className="cs-img-caption">Parasocijalni odnosi — zašto su kreatori koji dele lični život dramatično profitabilniji</p>
              </div>

              <div className="cs-fade-in cs-stat-block">
                <div className="cs-stat-num">Poluga #1</div>
                <p className="cs-stat-desc">Kreatori koji opsežno dele lični život vide dramatično veću životnu vrednost pretplatnika. Ovo je poluga prihoda broj jedan u poslu.</p>
              </div>

              <div className="cs-fade-in">
                <p className="cs-body">Kreatori koji grade jake parasocijalne odnose vide dramatično veću životnu vrednost pretplatnika. Njihovi pretplatnici ostaju duže. Troše više. Kupuju custom sadržaj. Daju napojnice. Obnavljaju mesec za mesecom.</p>
              </div>

              <div className="cs-fade-in cs-takeaways">
                <h3 className="cs-box-heading">Ključne poruke — Poglavlje 2</h3>
                <ul className="cs-check-list">
                  <li>Brend je osećaj koji ljudi dobijaju kada vide tvoj sadržaj — pre nego što vide tvoje ime</li>
                  <li>Šestica sa ličnošću uvek zarađuje više od desetice bez nje</li>
                  <li>Izgled zaustavlja skrolovanje. Ličnost otvara novčanik</li>
                  <li>Plato prihoda je gotovo uvek problem brenda, ne sadržaja</li>
                  <li>Gradi brend pre nego što skaliraš — ne posle</li>
                  <li>Parasocijalni odnosi su jedini najveći pokretač životne vrednosti pretplatnika</li>
                </ul>
              </div>

            </div>
          </section>

          {/* ── LOCKED ── */}
          <section className="cs-locked" id="ch3-12">
            <div className="cs-container">
              <div className="cs-locked-inner">
                <div className="cs-locked-icon">🔒</div>
                <h2 className="cs-locked-title">
                  Poglavlja 3–12 dostupna su<br />
                  <em>kreatorima Velluto Nero</em>
                </h2>
                <p className="cs-locked-desc">
                  Postavljanje naloga. Strategija sadržaja. Plan rasta od 0 do 10k. Skaliranje na više naloga. Analitika i KPI-jevi. Sve je u sledećih 10 poglavlja.
                </p>
                <ul className="cs-locked-list">
                  <li>✓ Poglavlje 3 — Postavljanje naloga i optimizacija profila</li>
                  <li>✓ Poglavlje 4 — Kreiranje sadržaja i batching sistem</li>
                  <li>✓ Poglavlje 5 — Strategija hashtagova i otkrivanja</li>
                  <li>✓ Poglavlje 6 — Plan rasta: od 0 do 1k pratilaca</li>
                  <li>✓ Poglavlje 7 — Od 1k do 10k: fazni plan skaliranja</li>
                  <li>✓ Poglavlje 8 — Rast sa više naloga i cross-platform</li>
                  <li>✓ Poglavlje 9 — Saradnje, reposti i virusni rast</li>
                  <li>✓ Poglavlje 10 — Konverzija pratilaca u pretplatnike</li>
                  <li>✓ Poglavlje 11 — KPI-jevi, analitika i dijagnostika</li>
                  <li>✓ Poglavlje 12 — Sistem koji radi bez tebe</li>
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
            <Link href="/#apply" className="btn-outline" style={{ borderColor: '#a9875c', color: '#a9875c' }}>Prijavi se <span>→</span></Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Velluto Nero. Sva prava zadržana.</p>
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
        .cs-page-title em { color: #a9875c; font-style: italic; }
        .cs-lead { font-size: 1rem; line-height: 1.8; color: #444; margin: 0 0 20px; }
        .cs-meta-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
        .cs-meta-pills span { background: #fff; border: 1px solid #e8e0e0; border-radius: 20px; padding: 5px 14px; font-size: 0.78rem; color: #666; }
        .cs-learn-box { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0 56px; }
        .cs-learn-col { background: #fff; border-radius: 12px; padding: 28px 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        @media (max-width: 620px) { .cs-learn-box { grid-template-columns: 1fr; } .cs-cover-box { border-radius: 10px; } }
        .cs-chapter { padding: 72px 0; border-top: 1px solid rgba(0,0,0,0.07); }
        .cs-chapter--alt { background: rgba(169,135,92,0.03); }
        .cs-chapter-header { margin-bottom: 32px; }
        .cs-chapter-tag { display: inline-block; background: #a9875c; color: #fff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
        .cs-chapter-title { font-family: var(--font-display); font-size: clamp(1.7rem, 4vw, 2.5rem); line-height: 1.15; margin: 0 0 10px; color: #1a1a1a; }
        .cs-chapter-subtitle { font-size: 1rem; color: #888; margin: 0 0 12px; }
        .cs-read-time { font-size: 0.78rem; color: #bbb; }
        .cs-h3 { font-family: var(--font-display); font-size: 1.35rem; font-style: italic; margin: 52px 0 14px; color: #1a1a1a; }
        .cs-body { font-size: 0.97rem; line-height: 1.85; margin: 0 0 18px; color: #333; }
        .cs-pull-quote { border-left: 3px solid #a9875c; margin: 32px 0; padding: 16px 24px; font-style: italic; color: #555; font-size: 1rem; line-height: 1.75; background: #fff; border-radius: 0 8px 8px 0; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .cs-pull-quote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: #aaa; }
        .cs-note { background: #fffbe6; border-left: 4px solid #f5c518; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 0.9rem; line-height: 1.7; color: #4a3800; }
        .cs-note strong { display: block; margin-bottom: 6px; font-weight: 700; }
        .cs-note p, .cs-note ul { margin: 0; }
        .cs-note ul { padding-left: 20px; margin-top: 8px; }
        .cs-note li { margin-bottom: 5px; }
        .cs-note--pink { background: #fff0f6; border-left-color: #a9875c; color: #5a0028; }
        .cs-stat-block { text-align: center; padding: 36px 24px; background: #fff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 32px 0; }
        .cs-stat-num { font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.5rem); color: #a9875c; font-style: italic; line-height: 1; }
        .cs-stat-desc { margin: 10px auto 0; font-size: 0.95rem; color: #555; line-height: 1.6; max-width: 480px; }
        .cs-steps { list-style: none; padding: 0; margin: 24px 0 40px; display: flex; flex-direction: column; gap: 14px; }
        .cs-steps li { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border-radius: 10px; box-shadow: 0 2px 14px rgba(0,0,0,0.06); }
        .cs-step-num { font-family: var(--font-display); font-size: 1.6rem; color: #a9875c; font-style: italic; min-width: 40px; line-height: 1; padding-top: 2px; flex-shrink: 0; }
        .cs-steps li strong { display: block; font-size: 0.95rem; font-weight: 700; margin-bottom: 5px; }
        .cs-steps li p { margin: 0; font-size: 0.87rem; color: #555; line-height: 1.6; }
        .cs-table-wrap { overflow-x: auto; margin: 20px 0 36px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .cs-table { width: 100%; border-collapse: collapse; background: #fff; font-size: 0.88rem; min-width: 400px; }
        .cs-table th { background: #a9875c; color: #fff; padding: 12px 16px; text-align: left; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
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
        .cs-compare-col--good { border-top: 3px solid #a9875c; }
        .cs-compare-col--good h4 { color: #a9875c; }
        .cs-compare-col--bad { border-top: 3px solid #ccc; }
        .cs-compare-col--bad h4 { color: #888; }
        @media (max-width: 560px) { .cs-compare-grid { grid-template-columns: 1fr; } }
        .cs-priority-list { display: flex; flex-direction: column; gap: 10px; margin: 24px 0 32px; }
        .cs-priority-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); border-left: 4px solid #a9875c; }
        .cs-priority-item--2 { border-left-color: #ed6fa0; }
        .cs-priority-item--3 { border-left-color: #f28cba; }
        .cs-priority-item--4 { border-left-color: #f5aacc; }
        .cs-priority-time { font-size: 0.68rem; font-weight: 700; color: #a9875c; white-space: nowrap; min-width: 68px; padding-top: 3px; letter-spacing: 0.03em; text-transform: uppercase; flex-shrink: 0; }
        .cs-priority-item strong { display: block; font-size: 0.9rem; margin-bottom: 3px; }
        .cs-priority-item p { margin: 0; font-size: 0.82rem; color: #666; line-height: 1.5; }
        .cs-shift-box, .cs-checklist-box, .cs-takeaways { background: #fff; border-radius: 12px; padding: 28px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07); margin: 24px 0; }
        .cs-box-heading { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #a9875c; margin: 0 0 14px; }
        .cs-check-list { list-style: none; padding: 0; margin: 0; }
        .cs-check-list li { padding: 7px 0 7px 22px; font-size: 0.9rem; color: #333; line-height: 1.5; border-bottom: 1px solid #f4f4f4; position: relative; }
        .cs-check-list li:last-child { border-bottom: none; }
        .cs-check-list li::before { content: '✓'; position: absolute; left: 0; color: #a9875c; font-weight: 700; }
        .cs-takeaways { border-top: 3px solid #a9875c; }
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
