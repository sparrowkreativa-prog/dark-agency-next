import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Čet Strategija | Velluto Nero',
  description: 'Sistem iza meseci sa $100k+ naših kreatora — kompletna čet strategija korak po korak.',
};

function NoteCard({ tape = 'tape-1', children, className = '' }) {
  return (
    <div className={`cs-note-card ${className}`}>
      <div className="cs-tape-wrap">
        <Image src={`/cet-strategija/${tape}.webp`} alt="" width={60} height={24} />
      </div>
      <div className="cs-note-body">{children}</div>
    </div>
  );
}

function ChapterLabel({ num, title }) {
  return (
    <div className="cs-chapter-label">
      <span className="cs-chapter-num">Poglavlje {num}</span>
      <span className="cs-chapter-sep">·</span>
      <span className="cs-chapter-name">{title}</span>
    </div>
  );
}

function StickyNote({ children, color = 'yellow' }) {
  return <div className={`cs-sticky cs-sticky--${color}`}>{children}</div>;
}

export default function CetStrategija() {
  return (
    <>
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
              <li><a href="#" className="nav-active">Čet Strategija</a></li>
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

        {/* Cover */}
        <section className="cs-cover">
          <div className="cs-cover-img-wrap">
            <Image
              src="/cet-strategija/chatting-strategy-cover.webp"
              alt="Čet Strategija"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
            <div className="cs-cover-overlay" />
          </div>
          <div className="cs-cover-content">
            <span className="chapter-label" style={{ color: '#e8538f' }}>Velluto Nero · Interni vodič</span>
            <h1 className="cs-cover-title">
              Sistem iza meseci<br />
              <em>sa $100k+ naših kreatora</em>
            </h1>
            <p className="cs-cover-sub">
              Ovo nije generički savet o OF-u.<br />
              Ovo je tačno ono što radimo — korak po korak.
            </p>
          </div>
        </section>

        <div className="cs-content-wrap">

          {/* Intro */}
          <section className="cs-intro">
            <div className="cs-container">
              <p className="cs-lead">
                Nismo izgradili ovo da bude motivacioni sadržaj. Izgradili smo ga da bude <strong>operativni priručnik</strong> — dokument koji svaki menadžer četa u našoj agenciji koristi od prvog dana.
              </p>
              <p className="cs-lead">
                Ako ikada budeš radila sa nama, ovo je ono što stoji iza naših rezultata. Ako nikada ne apliciراš — i dalje ćeš naučiti više iz ovih 10 poglavlja nego iz 90% plaćenih kurseva.
              </p>
            </div>
          </section>

          {/* Chapter list */}
          <section className="cs-toc-section">
            <div className="cs-container">
              <NoteCard tape="tape-2" className="cs-toc-card">
                <h2 className="cs-toc-title">10 poglavlja</h2>
                <ol className="cs-toc-list">
                  <li><span>Poslovni model</span></li>
                  <li><span>Mindset četera</span></li>
                  <li><span>Game plan u 7 koraka</span></li>
                  <li><span>Skripte i otvaranje razgovora</span></li>
                  <li><span>PPV — kreiranje i prodaja sadržaja</span></li>
                  <li><span>Upsell i pretplatnici</span></li>
                  <li><span>Tipovi fanova i kako ih čitati</span></li>
                  <li><span>Rešavanje prigovora</span></li>
                  <li><span>Analitika i optimizacija</span></li>
                  <li><span>Skaliranje i tim</span></li>
                </ol>
              </NoteCard>
            </div>
          </section>

          {/* ── CHAPTER 1 ── */}
          <section className="cs-chapter" id="ch1">
            <div className="cs-container">
              <ChapterLabel num="1" title="Poslovni model" />
              <h2 className="cs-chapter-title">
                Shvati <em>odakle</em> dolazi novac — pre nego što napišeš i jednu poruku.
              </h2>
              <p className="cs-body">
                Čet nije samo razgovor. To je <strong>prodajni kanal</strong>. Svaki fan koji ti piše prolazi kroz isti tok: hladni stranac → zagrejani pratilac → platilac → VIP.
              </p>
              <p className="cs-body">
                Tvoj posao kao četera je da ga vodiš kroz taj tok — prirodno, bez pritiska, i tako da se on oseća kao da je njegova ideja.
              </p>

              {/* Comp table */}
              <div className="cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Tip naplate</th>
                      <th>Opis</th>
                      <th>Potencijal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pretplata</strong></td>
                      <td>Mesečna naknada za pristup profilu</td>
                      <td>Stabilan, predvidljiv prihod</td>
                    </tr>
                    <tr>
                      <td><strong>PPV poruke</strong></td>
                      <td>Plaćeni sadržaj direktno u DM-u</td>
                      <td>⭐ Najveći potencijal</td>
                    </tr>
                    <tr>
                      <td><strong>Napojnice</strong></td>
                      <td>Dobrovoljni iznosi od fanova</td>
                      <td>Zavisi od odnosa</td>
                    </tr>
                    <tr>
                      <td><strong>Streams/Kamere</strong></td>
                      <td>Live sesije sa napojnicama</td>
                      <td>Visok angažman</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Game plan flow image */}
              <div className="cs-img-wrap">
                <Image
                  src="/cet-strategija/ch1-game-plan-flow.webp"
                  alt="Game plan tok"
                  width={900}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
                <p className="cs-img-caption">Tok fana kroz prodajni levak — od prvog poruke do VIP statusa</p>
              </div>

              {/* Game plan 7 steps */}
              <h3 className="cs-h3">Game plan u 7 koraka</h3>
              <p className="cs-body">Svaki razgovor koji otvoriš treba da prati ovaj redosled. Ne nužno u jednoj sesiji — ali uvek u ovom smeru.</p>

              <ol className="cs-steps">
                <li>
                  <span className="cs-step-num">01</span>
                  <div>
                    <strong>Otvaranje</strong>
                    <p>Personalizovana poruka koja nije generička. Koristiš informacije sa profila — nešto konkretno.</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">02</span>
                  <div>
                    <strong>Zagrevanje</strong>
                    <p>2-4 razmene poruka samo da uspostaviš vezu. Nikakva prodaja još.</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">03</span>
                  <div>
                    <strong>Kvalifikacija</strong>
                    <p>Postavljaš pitanja da shvatiš šta ga interesuje. Šta traži? Šta ga uzbuđuje?</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">04</span>
                  <div>
                    <strong>Podizanje vrednosti</strong>
                    <p>Daješ mu razlog da ostane — besplatan preview, kompliment, ekskluzivna priča.</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">05</span>
                  <div>
                    <strong>Soft offer</strong>
                    <p>Prirodno uvođenje PPV-a ili upsella. Bez direktnog "kupi ovo".</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">06</span>
                  <div>
                    <strong>Zatvaranje</strong>
                    <p>Jasna vrednosna ponuda, ograničena po količini ili vremenu.</p>
                  </div>
                </li>
                <li>
                  <span className="cs-step-num">07</span>
                  <div>
                    <strong>Nega odnosa</strong>
                    <p>Posle kupovine — zahvalnost, follow-up, postavljanje za sledeći ciklus.</p>
                  </div>
                </li>
              </ol>

              <div className="cs-img-wrap">
                <Image
                  src="/cet-strategija/ch1-sales-ladder.webp"
                  alt="Sales lestve"
                  width={900}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
                <p className="cs-img-caption">Sales lestve — kako fan napreduje kroz nivoe vrednosti</p>
              </div>

              {/* Priority system */}
              <h3 className="cs-h3">Sistem prioriteta — na koga trošiš vreme?</h3>
              <p className="cs-body">
                Nemaš beskonačno vreme. Naučiš da brzo identifikuješ ko ima potencijal, a ko ti samo troši energiju.
              </p>

              <div className="cs-img-wrap">
                <Image
                  src="/cet-strategija/ch1-priority-system.webp"
                  alt="Sistem prioriteta"
                  width={900}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
                <p className="cs-img-caption">Matriks prioriteta — kako razvrstavati fanove prema potencijalu</p>
              </div>

              {/* PPV pricing table */}
              <h3 className="cs-h3">PPV cenovnik — lestvica koja radi</h3>
              <div className="cs-table-wrap">
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Tip sadržaja</th>
                      <th>Preporučena cena</th>
                      <th>Napomena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kratki klip (15-30s)</td>
                      <td>$5 – $15</td>
                      <td>Ulazna tačka, niska barijera</td>
                    </tr>
                    <tr>
                      <td>Duži klip (1-3 min)</td>
                      <td>$15 – $35</td>
                      <td>Najčešće kupovani format</td>
                    </tr>
                    <tr>
                      <td>Custom video</td>
                      <td>$50 – $150+</td>
                      <td>Personalizovan po zahtevu</td>
                    </tr>
                    <tr>
                      <td>Sexting sesija</td>
                      <td>$20 – $80 / 15 min</td>
                      <td>Visoka angažovanost, lojalni fanovi</td>
                    </tr>
                    <tr>
                      <td>Foto set (10-20 foto)</td>
                      <td>$10 – $30</td>
                      <td>Brza produkcija, dobar ROI</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <StickyNote color="pink">
                <strong>Zapamti:</strong> Cena nije toliko bitna kao <em>kako je prezentiraš</em>. Isti sadržaj za $10 i za $30 — razlika je u kontekstu i izgradnji iščekivanja.
              </StickyNote>
            </div>
          </section>

          {/* ── CHAPTER 2 ── */}
          <section className="cs-chapter cs-chapter--alt" id="ch2">
            <div className="cs-container">
              <ChapterLabel num="2" title="Mindset četera" />
              <h2 className="cs-chapter-title">
                Zašto <em>kako razmišljaš</em> određuje koliko zarađuješ
              </h2>
              <p className="cs-body">
                Čet nije gluma. Čet je <strong>prisustvo</strong>. Fan oseća da li si tu sa njim ili samo odrađuješ posao.
              </p>
              <p className="cs-body">
                Najuspešniji četeri koje smo obučili imaju jednu zajedničku osobinu: <em>autentičnu radoznalost</em>. Zanimaju se za osobu sa druge strane — ne zato što moraju, već zato što to pravi razliku.
              </p>

              {/* Archetype mirror */}
              <h3 className="cs-h3">Arhetip ogledalo — ko si ti kao četer?</h3>
              <p className="cs-body">
                Svaki četer prirodno gravitira ka jednom od arhetipa. Razumevanje svog stila ti pomaže da ga ojačaš umesto da se borite sa njim.
              </p>

              <div className="cs-img-wrap">
                <Image
                  src="/cet-strategija/ch2-archetype-mirror.webp"
                  alt="Arhetip ogledalo"
                  width={900}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
                <p className="cs-img-caption">4 arhetipa četera — pronađi koji ti pristaje</p>
              </div>

              {/* Energy matching */}
              <h3 className="cs-h3">Usklađivanje energije</h3>
              <p className="cs-body">
                Fan koji piše kratkim rečenicama ne želi esej. Fan koji šalje emojije i exclamation marks otvoren je za igrivost. <strong>Prilagođavaš se — ne kopiraš.</strong>
              </p>

              <div className="cs-img-wrap">
                <Image
                  src="/cet-strategija/ch2-energy-matching.webp"
                  alt="Usklađivanje energije"
                  width={900}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
                <p className="cs-img-caption">Energy matching mapa — kako čitati ton i prilagoditi odgovor</p>
              </div>

              <NoteCard tape="tape-1">
                <h4 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>Brza vežba</h4>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  Uzmi zadnjih 5 razgovora koje si imala. Za svaki — odredi da li si pratila energiju fana ili si koristila isti ton za sve. Razlika u konverziji će te iznenaditi.
                </p>
              </NoteCard>

              {/* Mindset comparison */}
              <div className="cs-compare-grid">
                <div className="cs-compare-col cs-compare-col--bad">
                  <h4>❌ Prosečan mindset</h4>
                  <ul>
                    <li>Čeka da fan inicira kupovinu</li>
                    <li>Kopira iste poruke za sve</li>
                    <li>Fokusira se na broj poruka</li>
                    <li>Vidi fanove kao izvore novca</li>
                    <li>Odustaje posle prvog "ne"</li>
                  </ul>
                </div>
                <div className="cs-compare-col cs-compare-col--good">
                  <h4>✓ Elite mindset</h4>
                  <ul>
                    <li>Vodi razgovor sa namerom</li>
                    <li>Prilagođava ton i stil svakom fanu</li>
                    <li>Fokusira se na vrednost po razgovoru</li>
                    <li>Gradi autentičan odnos</li>
                    <li>Čuje "ne" kao "ubedi me"</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ── COMING SOON chapters 3-10 ── */}
          <section className="cs-locked" id="ch3-10">
            <div className="cs-container">
              <div className="cs-locked-inner">
                <div className="cs-locked-icon">🔒</div>
                <h2 className="cs-locked-title">
                  Poglavlja 3–10 dostupna su<br />
                  <em>kreatorima Velluto Nero</em>
                </h2>
                <p className="cs-locked-desc">
                  Skripte. PPV strategija. Tipovi fanova. Rešavanje prigovora. Analitika. Skaliranje tima. Sve je u sledećih 8 poglavlja — i sve je uključeno kada se pridružiš.
                </p>
                <ul className="cs-locked-list">
                  <li>✓ Poglavlje 3 — Skripte i otvaranje razgovora</li>
                  <li>✓ Poglavlje 4 — PPV kreiranje i prodaja</li>
                  <li>✓ Poglavlje 5 — Upsell i pretplatnici</li>
                  <li>✓ Poglavlje 6 — Tipovi fanova i kako ih čitati</li>
                  <li>✓ Poglavlje 7 — Rešavanje prigovora</li>
                  <li>✓ Poglavlje 8 — Analitika i optimizacija</li>
                  <li>✓ Poglavlje 9 — Skaliranje i tim</li>
                  <li>✓ Poglavlje 10 — Sistem koji radi bez tebe</li>
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
            <Link href="/#apply" className="btn-outline">
              Prijavi se <span>→</span>
            </Link>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Velluto Nero. Sva prava zadržana.</p>
            <div className="footer-legal">
              <a href="/privacy">Privatnost</a>
              <a href="/terms">Uslovi</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* ── Page layout ── */
        .cs-page { background: var(--color-dark-1); color: #1a1a1a; }
        .cs-content-wrap { padding-bottom: 0; }
        .cs-container { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        /* ── Cover ── */
        .cs-cover { position: relative; height: min(70vh, 560px); display: flex; align-items: flex-end; overflow: hidden; }
        .cs-cover-img-wrap { position: absolute; inset: 0; }
        .cs-cover-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%); }
        .cs-cover-content { position: relative; z-index: 2; padding: 48px 32px; max-width: 760px; margin: 0 auto; width: 100%; }
        .cs-cover-title { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); color: #fff; margin: 16px 0 12px; line-height: 1.1; }
        .cs-cover-title em { color: #e8538f; font-style: italic; }
        .cs-cover-sub { color: rgba(255,255,255,0.75); font-size: 1.05rem; line-height: 1.6; margin: 0; }

        /* ── Intro ── */
        .cs-intro { padding: 64px 0 32px; }
        .cs-lead { font-size: 1.15rem; line-height: 1.8; margin: 0 0 20px; color: #2a2a2a; }

        /* ── TOC ── */
        .cs-toc-section { padding: 16px 0 48px; }
        .cs-toc-card { max-width: 760px; margin: 0 auto; }
        .cs-toc-title { font-family: var(--font-display); font-size: 1.4rem; font-style: italic; margin: 0 0 16px; color: #1a1a1a; }
        .cs-toc-list { margin: 0; padding: 0 0 0 20px; }
        .cs-toc-list li { padding: 6px 0; color: #333; font-size: 0.95rem; }

        /* ── Chapters ── */
        .cs-chapter { padding: 72px 0; border-top: 1px solid rgba(0,0,0,0.07); }
        .cs-chapter--alt { background: rgba(232,83,143,0.03); }
        .cs-chapter-label { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .cs-chapter-num { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #e8538f; }
        .cs-chapter-sep { color: #ccc; }
        .cs-chapter-name { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: #888; }
        .cs-chapter-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); line-height: 1.2; margin: 0 0 28px; color: #1a1a1a; }
        .cs-chapter-title em { color: #e8538f; font-style: italic; }
        .cs-h3 { font-family: var(--font-display); font-size: 1.3rem; font-style: italic; margin: 48px 0 16px; color: #1a1a1a; }
        .cs-body { font-size: 1rem; line-height: 1.8; margin: 0 0 20px; color: #333; }

        /* ── Note card ── */
        .cs-note-card { background: #fff; border-radius: 4px; box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06); padding: 32px 36px 36px; position: relative; margin: 24px 0; }
        .cs-tape-wrap { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); }
        .cs-note-body { margin-top: 8px; }

        /* ── Sticky note ── */
        .cs-sticky { padding: 20px 24px; border-radius: 2px; margin: 32px 0; font-size: 0.95rem; line-height: 1.7; }
        .cs-sticky--yellow { background: #fffbe6; border-left: 4px solid #f5c518; color: #4a3800; }
        .cs-sticky--pink { background: #fff0f6; border-left: 4px solid #e8538f; color: #5a0028; }
        .cs-sticky strong { font-weight: 700; }
        .cs-sticky em { font-style: italic; }

        /* ── Steps ── */
        .cs-steps { list-style: none; padding: 0; margin: 0 0 40px; display: flex; flex-direction: column; gap: 20px; }
        .cs-steps li { display: flex; gap: 20px; align-items: flex-start; padding: 20px 24px; background: #fff; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .cs-step-num { font-family: var(--font-display); font-size: 1.5rem; color: #e8538f; font-style: italic; min-width: 40px; line-height: 1; padding-top: 2px; }
        .cs-steps li strong { display: block; font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .cs-steps li p { margin: 0; font-size: 0.9rem; color: #555; line-height: 1.6; }

        /* ── Tables ── */
        .cs-table-wrap { overflow-x: auto; margin: 24px 0 40px; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .cs-table { width: 100%; border-collapse: collapse; background: #fff; font-size: 0.9rem; }
        .cs-table th { background: #1a1a1a; color: #fff; padding: 12px 16px; text-align: left; font-size: 0.8rem; letter-spacing: 0.05em; text-transform: uppercase; }
        .cs-table td { padding: 12px 16px; border-bottom: 1px solid #f0f0f0; color: #333; vertical-align: top; }
        .cs-table tr:last-child td { border-bottom: none; }
        .cs-table tr:nth-child(even) td { background: #fafafa; }

        /* ── Images ── */
        .cs-img-wrap { margin: 32px 0; }
        .cs-img-caption { font-size: 0.8rem; color: #888; text-align: center; margin: 8px 0 0; font-style: italic; }

        /* ── Compare grid ── */
        .cs-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 32px 0; }
        .cs-compare-col { background: #fff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .cs-compare-col h4 { margin: 0 0 16px; font-size: 0.95rem; font-weight: 700; }
        .cs-compare-col ul { margin: 0; padding: 0 0 0 18px; }
        .cs-compare-col li { padding: 5px 0; font-size: 0.88rem; color: #444; line-height: 1.5; }
        .cs-compare-col--bad { border-top: 3px solid #e55; }
        .cs-compare-col--bad h4 { color: #c33; }
        .cs-compare-col--good { border-top: 3px solid #e8538f; }
        .cs-compare-col--good h4 { color: #e8538f; }

        /* ── Locked section ── */
        .cs-locked { padding: 80px 0; background: #1a1a1a; }
        .cs-locked-inner { text-align: center; max-width: 600px; margin: 0 auto; padding: 0 24px; }
        .cs-locked-icon { font-size: 3rem; margin-bottom: 24px; }
        .cs-locked-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3.5vw, 2.4rem); color: #fff; margin: 0 0 16px; line-height: 1.2; }
        .cs-locked-title em { color: #e8538f; font-style: italic; }
        .cs-locked-desc { color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.7; margin: 0 0 32px; }
        .cs-locked-list { list-style: none; padding: 0; margin: 0 0 8px; text-align: left; display: inline-block; }
        .cs-locked-list li { padding: 8px 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .cs-locked-list li:last-child { border-bottom: none; }

        /* ── Nav active ── */
        a.nav-active { color: #e8538f !important; font-weight: 600; }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .cs-compare-grid { grid-template-columns: 1fr; }
          .cs-cover-content { padding: 32px 20px; }
          .cs-steps li { flex-direction: column; gap: 8px; }
          .cs-note-card { padding: 28px 20px 28px; }
        }
      `}</style>
    </>
  );
}
