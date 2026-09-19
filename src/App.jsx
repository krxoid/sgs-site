import { useState } from "react";

const officialGallery = "https://www.silvergroveschool.in/pages/homepage.aspx";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Silver+Grove+School+Maheshpur+Varanasi";

const gallery = [
  {
    title: "School campus",
    label: "Official photographs",
    href: officialGallery,
    className: "gallery-campus",
  },
  {
    title: "Student life",
    label: "Activities & events",
    href: officialGallery,
    className: "gallery-life",
  },
  {
    title: "Achievements",
    label: "School programmes",
    href: officialGallery,
    className: "gallery-achievements",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="nav-shell">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand-mark">SG</span>
            <span className="brand-copy">
              <strong>Silver Grove</strong>
              <small>School · Varanasi</small>
            </span>
          </a>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            {["About", "Academics", "Campus", "Life", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">MAHESHPUR · LAHARTARA · VARANASI</div>
            <h1>
              From darkness
              <br />
              <em>to light.</em>
            </h1>
            <p className="hero-text">
              Silver Grove School is a co-educational school in Maheshpur,
              Lahartara, Varanasi, with a long-standing academic and
              extracurricular tradition.
            </p>

            <div className="hero-actions">
              <a className="button dark" href="#about">
                Discover the school <span>↓</span>
              </a>
              <a
                className="button light"
                href={officialGallery}
                target="_blank"
                rel="noreferrer"
              >
                Official website ↗
              </a>
            </div>

            <div className="hero-facts">
              <div>
                <strong>1999</strong>
                <span>Maheshpur campus tradition</span>
              </div>
              <div>
                <strong>ICSE / ISC</strong>
                <span>CISCE curriculum</span>
              </div>
              <div>
                <strong>Co-ed</strong>
                <span>Day school</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <a
              href={officialGallery}
              target="_blank"
              rel="noreferrer"
              className="photo-panel official-photo"
              aria-label="Open Silver Grove School official photo gallery"
            >
              <span className="photo-badge">OFFICIAL SCHOOL PHOTOS ↗</span>
              <div>
                <small>Silver Grove School</small>
                <h2>Maheshpur</h2>
              </div>
            </a>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="kicker">ABOUT THE SCHOOL</div>
          <div className="two-column">
            <h2>
              A school built around
              <br />
              <em>curiosity and growth.</em>
            </h2>
            <div className="copy">
              <p>
                Silver Grove School is an English-medium, co-educational day
                school in Maheshpur, Lahartara, Varanasi. Public CISCE
                records list the Maheshpur school as UP324 with ICSE and ISC.
              </p>
              <p>
                The school combines academic work with sports, cultural
                programmes, competitions, exhibitions and other activities
                that form part of student life.
              </p>
            </div>
          </div>
        </section>

        <section className="dark-band">
          <div>
            <strong>UP324</strong>
            <span>CISCE school code</span>
          </div>
          <div>
            <strong>ICSE</strong>
            <span>Secondary curriculum</span>
          </div>
          <div>
            <strong>ISC</strong>
            <span>Senior secondary</span>
          </div>
          <div>
            <strong>Co-ed</strong>
            <span>Day school</span>
          </div>
        </section>

        <section className="section" id="academics">
          <div className="kicker">ACADEMICS</div>
          <div className="section-title-row">
            <h2>
              Learning beyond
              <br />
              <em>the textbook.</em>
            </h2>
            <p>
              A balanced school experience with academics, communication,
              science, creativity and activities.
            </p>
          </div>

          <div className="academic-grid">
            <article className="academic-card blue">
              <span>01</span>
              <h3>ICSE &amp; ISC</h3>
              <p>
                The Maheshpur school is listed with CISCE for ICSE and ISC
                education.
              </p>
            </article>
            <article className="academic-card">
              <span>02</span>
              <h3>Science &amp; technology</h3>
              <p>
                Public school listings mention laboratories, computer
                facilities and technology-supported classrooms.
              </p>
            </article>
            <article className="academic-card">
              <span>03</span>
              <h3>Communication</h3>
              <p>
                English-medium education alongside activities that encourage
                speaking, writing and confident expression.
              </p>
            </article>
            <article className="academic-card">
              <span>04</span>
              <h3>Creative learning</h3>
              <p>
                Art, music, drama, exhibitions, quizzes and competitions add
                variety to the academic experience.
              </p>
            </article>
          </div>
        </section>

        <section className="campus-section" id="campus">
          <div className="campus-photo official-photo">
            <a href={officialGallery} target="_blank" rel="noreferrer">
              <span className="photo-badge">VIEW OFFICIAL PHOTOS ↗</span>
            </a>
          </div>

          <div className="campus-copy">
            <div className="kicker">CAMPUS</div>
            <h2>
              Space for
              <br />
              <em>school life.</em>
            </h2>
            <p>
              Public listings for Silver Grove School describe facilities
              including classrooms, library, laboratories, playground and
              activity spaces.
            </p>
            <div className="pills">
              {[
                "Library",
                "Laboratories",
                "Computer Lab",
                "Playground",
                "Auditorium",
                "Smart Classrooms",
                "Sports",
                "Transport",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="life">
          <div className="kicker">SCHOOL LIFE</div>
          <h2 className="large-heading">
            More than
            <br />
            <em>a classroom.</em>
          </h2>

          <div className="life-grid">
            <article>
              <b>✦</b>
              <h3>Sports</h3>
              <p>
                Physical activity, sports and competitions form part of the
                wider school experience.
              </p>
            </article>
            <article>
              <b>✦</b>
              <h3>Arts &amp; culture</h3>
              <p>
                Cultural celebrations, art, music, drama and creative
                programmes bring students together.
              </p>
            </article>
            <article>
              <b>✦</b>
              <h3>Events</h3>
              <p>
                Exhibitions, annual programmes, quizzes and school events give
                students opportunities to participate and perform.
              </p>
            </article>
            <article>
              <b>✦</b>
              <h3>Achievement</h3>
              <p>
                The school's public image collections showcase student
                participation and achievements.
              </p>
            </article>
          </div>
        </section>

        <section className="gallery-section section" id="gallery">
          <div className="kicker">GALLERY</div>
          <div className="section-title-row">
            <h2>
              Silver Grove,
              <br />
              <em>in action.</em>
            </h2>
            <p>
              The official school site currently exposes photographs of the
              campus, students and school events.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <a
                key={item.title}
                className={`gallery-card ${item.className}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <span>Open photos ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <div className="kicker">VISIT</div>
            <h2>
              Find Silver
              <br />
              <em>Grove School.</em>
            </h2>
            <p className="contact-copy">
              Maheshpur, Lahartara, near TCI, Varanasi, Uttar Pradesh 221106.
            </p>
            <div className="hero-actions">
              <a className="button dark" href="tel:+918858695000">
                +91 88586 95000
              </a>
              <a className="button light" href={mapsUrl} target="_blank" rel="noreferrer">
                Directions ↗
              </a>
            </div>
          </div>

          <aside className="contact-card">
            <span>PHONE</span>
            <strong>0542-2370920</strong>
            <span>MOBILE</span>
            <strong>+91 88586 95000</strong>
            <span>EMAIL</span>
            <strong>sgssevapuri2017@gmail.com</strong>
            <span>ADDRESS</span>
            <strong>Maheshpur, Lahartara, Varanasi — 221106</strong>
          </aside>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="brand">
            <span className="brand-mark">SG</span>
            <span className="brand-copy">
              <strong>Silver Grove</strong>
              <small>School · Varanasi</small>
            </span>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#campus">Campus</a>
            <a href="#gallery">Gallery</a>
            <a href={officialGallery} target="_blank" rel="noreferrer">
              Official site ↗
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>© Silver Grove School</span>
          <span>Static showcase</span>
        </div>
      </footer>
    </>
  );
}

export default App;
