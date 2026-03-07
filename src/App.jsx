import './styles.css'

const pillars = [
  {
    num: '01',
    title: 'Direct-Order Growth Systems',
    description:
      'Custom ordering flows, rewards, and offer mechanics that lift repeat purchases while reducing third-party dependency.',
    points: ['Direct-order app strategy', 'Loyalty and rewards automation', 'Offer and retention flows'],
  },
  {
    num: '02',
    title: 'Content Engine',
    description:
      'Consistent, high-performing creative tailored for local markets so your brand stays visible and your offers stay relevant.',
    points: ['Short-form content systems', 'Campaign hooks and scripts', 'Creative testing cadence'],
  },
  {
    num: '03',
    title: 'Operator-Level Systems',
    description:
      'AI and automation embedded into daily operations so teams move faster with cleaner handoffs and fewer bottlenecks.',
    points: ['Workflow automation', 'Lead and order routing', 'Owner-friendly reporting'],
  },
]

const stats = [
  {
    num: '3',
    label: 'Core systems',
    sub: 'Content, growth, and ops — designed to compound over time.',
  },
  {
    num: '$0',
    label: 'Wasted spend',
    sub: 'Every dollar tied to a measurable, trackable outcome.',
  },
  {
    num: '1',
    label: 'Aligned partner',
    sub: 'Outfront embedded in your growth, not just on retainer.',
  },
]

const packages = [
  {
    name: 'Launch System',
    price: '$500 setup + $500/mo',
    description: 'For businesses that need a fast, focused revenue foundation.',
    features: ['Conversion-focused starter stack', 'Basic automation setup', 'Monthly optimization check-in'],
  },
  {
    name: 'Growth System',
    price: '$1,500/mo',
    description: 'For teams ready to scale acquisition and repeat revenue.',
    features: ['Multi-channel content engine', 'Offers + loyalty optimization', 'Performance tracking + weekly iterations'],
    featured: true,
  },
  {
    name: 'Operator Partner',
    price: '$2,000/mo',
    description: 'For owners who want Outfront embedded as a strategic operator.',
    features: ['Advanced automation architecture', 'Priority strategy + execution support', 'Systems tuning across growth + ops'],
  },
]

const addons = [
  'Additional short-form content packs',
  'Seasonal campaign sprints',
  'CRM and messaging stack migration',
  'Menu and offer architecture refresh',
  'On-site creative production day',
]

const fitList = [
  'Restaurant and hospitality brands shifting to stronger direct-order economics',
  'Local operators who want repeatable growth instead of random marketing bursts',
  'Teams that need tighter systems across content, offers, and operations',
]

const Section = ({ id, eyebrow, title, children, centered = false }) => (
  <section id={id} className="section" aria-labelledby={`${id}-heading`}>
    <div className="container">
      <header className={`section-header ${centered ? 'centered' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-heading`}>{title}</h2>
      </header>
      {children}
    </div>
  </section>
)

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="site-shell">
        {/* ── Topbar ── */}
        <header className="topbar" aria-label="Site header">
          <div className="container topbar-inner">
            <a href="#" className="brand" aria-label="Outfront Studios home">
              <span className="brand-dot" aria-hidden="true" />
              Outfront Studios
            </a>
            <nav className="topbar-nav" aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#proof">Case Highlight</a>
              <a href="#fit">Who It's For</a>
            </nav>
            <a className="link-chip" href="mailto:payton@outfrontstudios.io">
              payton@outfrontstudios.io
            </a>
          </div>
        </header>

        <main id="main-content">
          {/* ── Hero ── */}
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="hero-badge" aria-label="Agency focus">
                  <span className="hero-badge-dot" aria-hidden="true" />
                  Revenue Systems for Local Businesses
                </div>
                <h1 id="hero-title">
                  Apps, AI, and content that actually converts.
                </h1>
                <p className="lead">
                  Outfront Studios builds revenue systems — from direct-order apps and rewards flows to
                  content and automation — so you get more sales, repeat customers, and smoother operations.
                </p>
                <div className="hero-actions">
                  <a
                    className="btn btn-primary"
                    href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Strategy%20Call"
                  >
                    Book a strategy call
                  </a>
                  <a className="btn btn-secondary" href="#packages">
                    View packages
                  </a>
                </div>
              </div>

              <aside className="hero-panel" aria-label="Value proposition">
                <p className="panel-label">Built for local operators</p>
                <p className="panel-title">Outcomes, not noise. Systems that compound over time.</p>
                <ul className="panel-list">
                  <li>More direct sales, less third-party dependency</li>
                  <li>Higher repeat customer rate through loyalty flows</li>
                  <li>Smarter day-to-day operations with AI automation</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* ── Stats bar ── */}
          <div className="stats-bar" aria-label="Key highlights">
            <div className="container">
              <div className="stats-inner">
                {stats.map((s) => (
                  <div className="stat-item" key={s.label}>
                    <div className="stat-num" aria-hidden="true">{s.num}</div>
                    <div className="stat-label">
                      <strong>{s.label}</strong>
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Services ── */}
          <Section id="services" eyebrow="Service pillars" title="Three systems that drive compounding growth">
            <div className="grid cards-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="card reveal">
                  <div className="card-icon" aria-hidden="true">{pillar.num}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul className="bullet-list">
                    {pillar.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          {/* ── Packages ── */}
          <Section id="packages" eyebrow="Packages" title="Flexible engagement based on your growth stage">
            <div className="grid cards-3 pricing-grid">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`card pricing-card reveal ${pkg.featured ? 'featured' : ''}`}
                >
                  <div>
                    {pkg.featured && (
                      <div className="pricing-badge" aria-label="Recommended package">
                        Most Popular
                      </div>
                    )}
                    <h3>{pkg.name}</h3>
                    <p className="price">{pkg.price}</p>
                    <p className="pkg-desc">{pkg.description}</p>
                    <ul className="bullet-list">
                      {pkg.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    className={`btn ${pkg.featured ? 'btn-primary' : 'btn-light'}`}
                    href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Package%20Inquiry"
                  >
                    Get started
                  </a>
                </article>
              ))}
            </div>
          </Section>

          {/* ── Add-ons ── */}
          <Section id="addons" eyebrow="Optional add-ons" title="Layer in exactly what your team needs">
            <div className="addon-grid">
              {addons.map((item) => (
                <div className="addon-item reveal" key={item}>
                  <span className="addon-check" aria-hidden="true">+</span>
                  {item}
                </div>
              ))}
            </div>
          </Section>

          {/* ── Case Study ── */}
          <Section id="proof" eyebrow="Proof highlight" title="Korea House v2">
            <article className="card case-card reveal">
              <div className="case-tag">Client case</div>
              <h3>From scattered channels to a clearer revenue system</h3>
              <p>
                For Korea House v2, Outfront Studios helped shape a cleaner direct-order path, stronger offer
                rhythm, and tighter content-to-conversion flow. The result: a more consistent customer journey
                that supported repeat visits and smoother in-store execution.
              </p>
              <p className="muted">Case details available on request.</p>
            </article>
          </Section>

          {/* ── Who it's for ── */}
          <Section id="fit" eyebrow="Who this is for" title="Great fit for owners who value clarity and execution">
            <div className="card fit-card reveal">
              <ul className="fit-list">
                {fitList.map((item, i) => (
                  <li key={item}>
                    <span className="fit-icon" aria-hidden="true">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* ── CTA ── */}
          <section className="cta-section" aria-labelledby="cta-title">
            <div className="container">
              <div className="cta-card reveal">
                <div className="cta-card-text">
                  <p className="eyebrow">Let's build your next growth system</p>
                  <h2 id="cta-title">Ready to turn marketing activity into measurable local revenue?</h2>
                  <p>
                    Reach out at{' '}
                    <a href="mailto:payton@outfrontstudios.io" className="inline-link">
                      payton@outfrontstudios.io
                    </a>{' '}
                    and let's map your next 90 days.
                  </p>
                </div>
                <div className="cta-actions">
                  <a
                    className="btn btn-primary"
                    href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Start%20Project"
                  >
                    Contact Outfront Studios
                  </a>
                  <a className="btn btn-secondary" href="#services">
                    Explore services
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="footer" aria-label="Site footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <a href="#" className="footer-brand" aria-label="Outfront Studios home">
                  <span className="brand-dot" aria-hidden="true" />
                  Outfront Studios
                </a>
                <p className="footer-desc">
                  Revenue systems for local businesses — direct-order apps, AI automation, and content that converts.
                </p>
              </div>

              <nav className="footer-nav" aria-label="Footer navigation">
                <p className="footer-nav-label">Navigation</p>
                <a href="#services">Services</a>
                <a href="#packages">Packages</a>
                <a href="#proof">Case Highlight</a>
                <a href="#fit">Who It's For</a>
              </nav>

              <div>
                <p className="footer-nav-label">Get in touch</p>
                <a href="mailto:payton@outfrontstudios.io" className="footer-email">
                  payton@outfrontstudios.io
                </a>
              </div>
            </div>

            <div className="footer-bottom">
              © {new Date().getFullYear()} Outfront Studios · outfrontstudios.io
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
