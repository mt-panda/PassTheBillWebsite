import React, { useEffect, useState } from 'react'

const features = [
  {
    number: '01',
    title: 'Create a team',
    text: 'Create your team once, share the invite code, and get everyone into the same lunch group.',
  },
  {
    number: '02',
    title: 'Post the order',
    text: 'Add the restaurant, items, prices and delivery charge. Everyone sees the same order in real time.',
  },
  {
    number: '03',
    title: 'Claim your food',
    text: 'Team members claim the items they want. PassTheBill keeps quantities and shares organized automatically.',
  },
  {
    number: '04',
    title: 'Settle the bill',
    text: 'Close the cycle, confirm totals and see exactly what each person owes for the month.',
  },
]

const highlights = [
  ['Shared orders', 'One order, one source of truth.'],
  ['Automatic splitting', 'Delivery and extras are divided fairly.'],
  ['Monthly totals', 'Keep a clean running total for your team.'],
  ['Live updates', 'Everyone sees changes without refreshing.'],
  ['Push notifications', 'Know when a new order or charge needs you.'],
  ['Profile controls', 'Keep your team details and preferences up to date.'],
]

const shots = [
  {
    image: '/assets/orders.png',
    title: 'See every team order',
    text: 'Keep current lunch orders in one place and let everyone see what is open, closed and already claimed.',
  },
  {
    image: '/assets/new-order.png',
    title: 'Build an order in seconds',
    text: 'Add the restaurant, delivery fee and each item without leaving the lunch workflow.',
  },
  {
    image: '/assets/totals.png',
    title: 'Keep monthly totals clear',
    text: 'Track the current tally and settle the month without manually adding up every order.',
  },
]

function BrandIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="13" fill="currentColor" />
      <path d="M15 12h13.5c4.7 0 7.5 2.5 7.5 6.2 0 2.7-1.5 4.8-4.1 5.7 3.2.8 5.1 3.1 5.1 6.3 0 4.9-3.5 7.8-9.1 7.8H15V12Zm6 5v6h6.2c1.7 0 2.8-1.1 2.8-3s-1.1-3-2.8-3H21Zm0 11v7h7c2 0 3.1-1.2 3.1-3.5 0-2.3-1.1-3.5-3.1-3.5H21Z" fill="#f5f2e9" />
    </svg>
  )
}

function App() {
  const [menu, setMenu] = useState(false)
  const [activeShot, setActiveShot] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveShot((value) => (value + 1) % shots.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id) => {
    setMenu(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="PassTheBill home">
            <BrandIcon className="brand-icon" />
            <span>PassTheBill</span>
          </button>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            <button onClick={() => scrollTo('how')}>How it works</button>
            <button onClick={() => scrollTo('features')}>Features</button>
            <button onClick={() => scrollTo('screens')}>Screens</button>
            <button onClick={() => scrollTo('download')} className="nav-cta">Download app</button>
          </div>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Built for teams that eat together</div>
            <h1>Lunch bills,<br /><em>sorted.</em></h1>
            <p className="hero-text">PassTheBill makes team lunches simple. Create an order, let everyone claim what they ate, and know exactly who owes what.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('download')}>Download PassTheBill <span>↗</span></button>
              <button className="text-btn" onClick={() => scrollTo('how')}>See how it works <span>↓</span></button>
            </div>
            <div className="hero-meta"><span>Android</span><i /> <span>Free to use</span><i /> <span>Made for teams</span></div>
          </div>
          <div className="hero-art">
            <div className="hero-glow" />
            <div className="hero-image-wrap">
              <img src="/assets/hero.png" alt="PassTheBill team lunch app" />
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="container statement-inner">
            <span className="section-label">WHY PASSTHEBILL</span>
            <h2>No more <span>"how much do I owe?"</span> messages.</h2>
            <p>From the first order to the final monthly tally, PassTheBill keeps the whole team on the same page.</p>
          </div>
        </section>

        <section id="how" className="how section container">
          <div className="section-head">
            <div><span className="section-label">HOW IT WORKS</span><h2>Four steps.<br /><span>Zero spreadsheet.</span></h2></div>
            <p>Designed around the way office lunch actually works — quick, shared and easy to understand.</p>
          </div>
          <div className="steps">
            {features.map((feature) => (
              <article className="step" key={feature.number}>
                <span className="step-number">{feature.number}</span>
                <div className="step-icon">{feature.number === '01' ? '＋' : feature.number === '02' ? '↗' : feature.number === '03' ? '✓' : 'Rs'}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="feature-section">
          <div className="container">
            <div className="section-head centered">
              <span className="section-label">FEATURES</span>
              <h2>Everything your lunch group<br /><span>actually needs.</span></h2>
              <p>Simple tools for ordering, claiming, splitting and settling shared meals.</p>
            </div>
            <div className="feature-grid">
              {highlights.map(([title, text], index) => (
                <article className="feature-card" key={title}>
                  <span className="feature-index">0{index + 1}</span>
                  <div className="feature-symbol">{['◉', '÷', '▥', '↻', '⌁', '⚙'][index]}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="screens" className="screens section container">
          <div className="section-head">
            <div><span className="section-label">INSIDE THE APP</span><h2>A closer look at<br /><span>PassTheBill.</span></h2></div>
            <p>Curated app views with realistic sample data so you can see how PassTheBill feels before installing it.</p>
          </div>
          <div className="screen-showcase">
            <div className="screen-copy">
              <div className="screen-count">0{activeShot + 1} / 03</div>
              <h3>{shots[activeShot].title}</h3>
              <p>{shots[activeShot].text}</p>
              <div className="dots">
                {shots.map((shot, index) => (
                  <button
                    key={shot.title}
                    className={activeShot === index ? 'active' : ''}
                    onClick={() => setActiveShot(index)}
                    aria-label={shot.title}
                  />
                ))}
              </div>
              <div className="screen-tabs">
                {shots.map((shot, index) => (
                  <button
                    key={shot.title}
                    className={activeShot === index ? 'active' : ''}
                    onClick={() => setActiveShot(index)}
                  >
                    {shot.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="phone-stage">
              <div className="phone-shadow" />
              <div className={`screen-image-frame ${activeShot === 1 ? 'wide-screen' : ''}`}>
                <img src={shots[activeShot].image} alt={shots[activeShot].title} />
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="download">
          <div className="container download-inner">
            <div>
              <span className="section-label">GET STARTED</span>
              <h2>Make the next<br /><span>lunch easy.</span></h2>
              <p>Get PassTheBill on Android and bring your team lunch into one simple place.</p>
              <a className="primary download-button" href="#download">Download APK <span>↓</span></a>
              <small>Android · Free · Team invite required</small>
            </div>
            <div className="download-card">
              <BrandIcon className="download-logo" />
              <strong>PassTheBill</strong>
              <span>Lunch bills, sorted.</span>
              <div className="download-line" />
              <span>Latest Android build</span>
              <b>Download</b>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div><div className="brand footer-brand"><BrandIcon className="brand-icon" /><span>PassTheBill</span></div><p>Shared lunch bills without the headache.</p></div>
          <div className="footer-links"><button onClick={() => scrollTo('how')}>How it works</button><button onClick={() => scrollTo('features')}>Features</button><button onClick={() => scrollTo('screens')}>Screens</button><button onClick={() => scrollTo('download')}>Download</button></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 PassTheBill</span><span>Built for teams, one lunch at a time.</span></div>
      </footer>
    </div>
  )
}

export default App
