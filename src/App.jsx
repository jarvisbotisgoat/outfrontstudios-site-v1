import './styles.css'

const pillars = [
  {
    title: 'Direct-Order Growth Systems',
    description:
      'Custom ordering flows, rewards, and offer mechanics that lift repeat purchases while reducing third-party dependency.',
    points: ['Direct-order app strategy', 'Loyalty and rewards automation', 'Offer and retention flows'],
  },
  {
    title: 'Content Engine',
    description:
      'Consistent, high-performing creative tailored for local markets so your brand stays visible and your offers stay relevant.',
    points: ['Short-form content systems', 'Campaign hooks and scripts', 'Creative testing cadence'],
  },
  {
    title: 'Operator-Level Systems',
    description:
      'AI and automation embedded into daily operations so teams move faster with cleaner handoffs and fewer bottlenecks.',
    points: ['Workflow automation', 'Lead and order routing', 'Owner-friendly reporting'],
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
  <section id={id} className="section">
    <div className="container">
      <header className={`section-header ${centered ? 'centered' : ''}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
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
        <header className="topbar" aria-label="Site header">
          <div className="container topbar-inner">
            <a href="#" className="brand" aria-label="Outfront Studios home">
              Outfront Studios
            </a>
            <a className="link-chip" href="mailto:payton@outfrontstudios.io">
              payton@outfrontstudios.io
            </a>
          </div>
        </header>

        <main id="main-content">
          <section className="hero section">
            <div className="container hero-grid">
              <div>
                <p className="eyebrow">Outfront Studios · outfrontstudios.io</p>
                <h1>We help local businesses grow with apps, AI, and content that converts.</h1>
                <p className="lead">
                  Outfront Studios builds revenue systems — from direct-order apps and rewards flows to
                  content and automation — so you get more sales, repeat customers, and smoother operations.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Strategy%20Call">
                    Book a strategy call
                  </a>
                  <a className="btn btn-secondary" href="#packages">
                    View packages
                  </a>
                </div>
              </div>
              <aside className="hero-panel" aria-label="Positioning">
                <p className="panel-title">Built for local operators who need outcomes, not noise.</p>
                <ul>
                  <li>More direct sales</li>
                  <li>Higher repeat customer rate</li>
                  <li>Smarter day-to-day operations</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="positioning-bar" aria-label="Positioning highlights">
            <div className="container positioning-inner">
              <p>Strategy + execution across growth, content, and operations.</p>
              <p>Designed for practical wins in real local markets.</p>
            </div>
          </section>

          <Section id="services" eyebrow="Service pillars" title="Three systems that drive compounding growth">
            <div className="grid cards-3">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="card reveal">
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

          <Section id="packages" eyebrow="Packages" title="Flexible engagement based on your growth stage">
            <div className="grid cards-3 pricing-grid">
              {packages.map((pkg) => (
                <article key={pkg.name} className={`card pricing-card reveal ${pkg.featured ? 'featured' : ''}`}>
                  <div>
                    <h3>{pkg.name}</h3>
                    <p className="price">{pkg.price}</p>
                    <p>{pkg.description}</p>
                    <ul className="bullet-list">
                      {pkg.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="text-link" href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Package%20Inquiry">
                    Get started
                  </a>
                </article>
              ))}
            </div>
          </Section>

          <Section id="addons" eyebrow="Optional add-ons" title="Layer in exactly what your team needs">
            <div className="card reveal">
              <ul className="addon-list">
                {addons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Section>

          <Section id="proof" eyebrow="Proof highlight" title="Korea House v2">
            <article className="card case-card reveal">
              <h3>From scattered channels to a clearer revenue system</h3>
              <p>
                For Korea House v2, Outfront Studios helped shape a cleaner direct-order path, stronger offer
                rhythm, and tighter content-to-conversion flow. The result: a more consistent customer journey
                that supported repeat visits and smoother in-store execution.
              </p>
              <p className="muted">Case details available on request.</p>
            </article>
          </Section>

          <Section id="fit" eyebrow="Who this is for" title="Great fit for owners who value clarity and execution">
            <div className="card reveal">
              <ul className="bullet-list">
                {fitList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Section>

          <section className="section cta-block">
            <div className="container">
              <div className="card cta-card reveal">
                <p className="eyebrow">Let’s build your next growth system</p>
                <h2>Ready to turn marketing activity into measurable local revenue?</h2>
                <p>
                  Reach out at{' '}
                  <a href="mailto:payton@outfrontstudios.io" className="inline-link">
                    payton@outfrontstudios.io
                  </a>{' '}
                  and let’s map your next 90 days.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="mailto:payton@outfrontstudios.io?subject=Outfront%20Studios%20-%20Start%20Project">
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
      </div>
    </>
  )
}

export default App
