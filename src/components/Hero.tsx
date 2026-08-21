import { portfolio } from '../data/portfolio'
import profilePhoto from '../assets/projects/profile.jpg'

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">

        <div className="hero-copy reveal">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{portfolio.name}</h1>
          <p className="hero-title">{portfolio.title}</p>
          <p className="hero-text">{portfolio.intro}</p>

          <div className="cta-row">
            <a className="button primary" href="#projects">
              View My Work <span>↗</span>
            </a>

            <a className="button secondary" href={`mailto:${portfolio.email}`}>
              Contact Me <span>→</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>⌖ {portfolio.location}</span>
            <span className="status-dot">●</span>
            <span>{portfolio.availability}</span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="glow" />

          <div className="portrait-wrap">
            <img src={profilePhoto} alt={`${portfolio.name} profile`} />
          </div>

          <div className="floating-card">
            <span>01</span>
            <strong>Learning → Building</strong>
            <small>One project at a time.</small>
          </div>
        </div>

      </div>
    </section>
  )
}