
export default function LandingPageV5() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f8faf8;
          --text: #13211b;
          --muted: #54635c;
          --brand: #3f8b64;
          --brand-dark: #2b6849;
          --surface: #ffffff;
          --dark: #101714;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          color: var(--text);
          background: var(--bg);
          line-height: 1.6;
        }

        .lpv5 {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
        }

        .container {
          width: min(1100px, 92vw);
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          background: rgba(248, 250, 248, 0.92);
          border-bottom: 1px solid #e3e9e5;
          backdrop-filter: blur(6px);
          z-index: 10;
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 72px;
          gap: 1rem;
        }

        .brand {
          text-decoration: none;
          color: var(--text);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .brand span {
          color: var(--brand);
          margin-left: 0.2rem;
        }

        .site-nav {
          display: flex;
          gap: 1.1rem;
        }

        .site-nav a {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
        }

        .hero {
          padding: 4rem 0 3rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: center;
        }

        .eyebrow {
          color: var(--brand);
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-size: 0.82rem;
        }

        h1,
        h2,
        h3 {
          line-height: 1.2;
          margin-top: 0;
        }

        h1 {
          font-size: clamp(2rem, 4vw, 3.2rem);
        }

        .lead {
          color: var(--muted);
          max-width: 60ch;
        }

        .btn {
          display: inline-block;
          text-decoration: none;
          padding: 0.72rem 1rem;
          border-radius: 0.7rem;
          font-weight: 600;
        }

        .btn-primary {
          background: var(--brand);
          color: white;
        }

        .btn-primary:hover {
          background: var(--brand-dark);
        }

        .btn-outline {
          border: 1px solid #c4d4cb;
          color: var(--text);
        }

        .btn-ghost {
          color: var(--text);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin: 1.2rem 0;
        }

        .stats {
          list-style: none;
          display: flex;
          gap: 1rem;
          padding: 0;
          margin: 1.2rem 0 0;
        }

        .stats li {
          background: var(--surface);
          border: 1px solid #e3e9e5;
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          min-width: 120px;
        }

        .stats strong {
          display: block;
          font-size: 1.3rem;
        }

        .stats span {
          color: var(--muted);
          font-size: 0.9rem;
        }

        .hero-card {
          background: var(--surface);
          border: 1px solid #e3e9e5;
          border-radius: 1rem;
          padding: 1.2rem;
          box-shadow: 0 12px 40px rgba(23, 36, 30, 0.06);
        }

        .chart {
          display: flex;
          align-items: end;
          gap: 0.6rem;
          min-height: 180px;
          margin-top: 1rem;
        }

        .chart span {
          flex: 1;
          background: linear-gradient(180deg, #66b78b 0%, #3f8b64 100%);
          border-radius: 0.5rem 0.5rem 0.2rem 0.2rem;
        }

        .section {
          padding: 3.5rem 0;
        }

        .cards {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .three-up {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .two-up {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .card {
          padding: 1.1rem;
          background: white;
          border-radius: 0.9rem;
          border: 1px solid #e3e9e5;
        }

        .section-dark {
          background: var(--dark);
          color: #ecf5f0;
        }

        .section-dark .card {
          background: #15211d;
          border-color: #22342d;
        }

        .section-dark .eyebrow {
          color: #8cd4ae;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .checklist {
          margin: 0;
          padding-left: 1.1rem;
        }

        .cta {
          text-align: center;
          padding-bottom: 5rem;
        }

        @media (max-width: 880px) {
          .site-nav {
            display: none;
          }

          .hero-grid,
          .three-up,
          .two-up,
          .split {
            grid-template-columns: 1fr;
          }

          .stats {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="lpv5">
        <header className="site-header">
          <div className="container nav-wrap">
            <a className="brand" href="#">Adfai<span>Tech</span></a>
            <nav className="site-nav">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="btn btn-outline" href="#contact">Book a Call</a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <p className="eyebrow">Built for growing brands</p>
                <h1>We build marketing systems that turn attention into revenue.</h1>
                <p className="lead">
                  A high-converting landing page clone inspired by Olivine Marketing. We blend
                  creative, paid media, and strategy so your business grows predictably.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#contact">Start your growth plan</a>
                  <a className="btn btn-ghost" href="#work">See case studies</a>
                </div>
                <ul className="stats">
                  <li><strong>120%</strong><span>avg. lift in leads</span></li>
                  <li><strong>5x</strong><span>ROAS target strategy</span></li>
                  <li><strong>70+</strong><span>brands scaled</span></li>
                </ul>
              </div>

              <div className="hero-card">
                <p className="card-title">Growth Snapshot</p>
                <div className="chart">
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "58%" }} />
                  <span style={{ height: "67%" }} />
                  <span style={{ height: "75%" }} />
                  <span style={{ height: "90%" }} />
                </div>
                <p className="card-caption">Consistent month-over-month pipeline growth</p>
              </div>
            </div>
          </section>

          <section id="services" className="section">
            <div className="container">
              <h2>Our Services</h2>
              <div className="cards three-up">
                <article className="card">
                  <h3>Paid Media</h3>
                  <p>Targeted ads on Meta, Google, and LinkedIn with clear acquisition goals.</p>
                </article>
                <article className="card">
                  <h3>Creative Production</h3>
                  <p>Conversion-first ad creatives, copy, and assets tuned for your audience.</p>
                </article>
                <article className="card">
                  <h3>Funnel Optimization</h3>
                  <p>Landing page and email sequence improvements that increase close rates.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="work" className="section section-dark">
            <div className="container">
              <h2>Featured Results</h2>
              <div className="cards two-up">
                <article className="card">
                  <p className="eyebrow">Ecommerce brand</p>
                  <h3>+186% revenue growth in 90 days</h3>
                  <p>
                    Rebuilt creative testing process and scaled winning campaigns with weekly
                    iteration.
                  </p>
                </article>
                <article className="card">
                  <p className="eyebrow">B2B service company</p>
                  <h3>3.2x increase in qualified calls</h3>
                  <p>
                    Introduced full-funnel messaging and conversion tracking from ad click to
                    signed deal.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="container split">
              <div>
                <h2>Why teams choose us</h2>
                <p>
                  We act like an extension of your team, with transparent reporting and rapid
                  testing. No fluff—just measurable growth initiatives.
                </p>
              </div>
              <ul className="checklist">
                <li>Weekly strategy syncs</li>
                <li>Custom growth dashboard</li>
                <li>Creative and media handled end-to-end</li>
              </ul>
            </div>
          </section>

          <section id="contact" className="section cta">
            <div className="container">
              <h2>Ready to scale your brand?</h2>
              <p>Tell us your goals and we’ll map out your growth sprint.</p>
              <a className="btn btn-primary" href="mailto:hello@example.com">hello@example.com</a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
