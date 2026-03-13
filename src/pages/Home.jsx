import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-label">Kitchen Design & Renovation</p>
          <h1 className="hero-title">Redefining Value</h1>
          <p className="hero-subtitle">
            Exceptional craftsmanship meets timeless design in every kitchen we create.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-outline-light">View Portfolio</Link>
            <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Intro */}
      <section className="section intro">
        <div className="container intro-grid">
          <div className="intro-image">
            <div className="intro-image-placeholder" />
          </div>
          <div className="intro-text">
            <p className="section-label">Welcome to Nukitchens</p>
            <h2 className="section-title">Where Vision Meets Craftsmanship</h2>
            <p>
              Nukitchens has been a family business since 1956, founded by Joseph
              Najmy. Our roots trace back to Philip Farran, who began renovating
              brownstones in Brooklyn in the early 1900s &mdash; instilling a
              tradition of craftsmanship, hard work, and integrity that carries
              on to this day.
            </p>
            <p>
              From our showroom in South Norwalk, Connecticut, our team of expert
              kitchen designers works closely with every client to bring dream
              kitchens to life &mdash; with the honesty and personal service that
              only a true family company can deliver.
            </p>
            <Link to="/our-story" className="btn btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Complete Kitchen Solutions</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Design Consultation</h3>
              <p>
                Personalized design sessions in our showroom to understand your
                vision, lifestyle, and budget. We listen first, then create.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Custom Cabinetry</h3>
              <p>
                Premium cabinetry tailored to your space. From classic shaker
                to modern flat-panel, built with materials that last.
              </p>
            </div>
            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Full Renovation</h3>
              <p>
                End-to-end kitchen renovation including countertops, backsplashes,
                fixtures, and finishing — managed seamlessly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <div className="trusted-strip">
        <div className="container trusted-inner">
          <span className="trusted-label">As Seen On</span>
          <div className="trusted-links">
            <a href="https://www.houzz.com/pro/nukitchens/nukitchens" target="_blank" rel="noopener noreferrer" className="trusted-badge">Houzz</a>
            <a href="https://www.pinterest.com/nukitchensct/" target="_blank" rel="noopener noreferrer" className="trusted-badge">Pinterest</a>
            <a href="https://www.facebook.com/nukitchensnorwalk/" target="_blank" rel="noopener noreferrer" className="trusted-badge">Facebook</a>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <section className="section featured">
        <div className="container">
          <div className="featured-header">
            <div>
              <p className="section-label">Featured Work</p>
              <h2 className="section-title">Our Latest Projects</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline">View All</Link>
          </div>
          <div className="featured-grid">
            <div className="featured-item featured-large">
              <div className="featured-image-placeholder" />
              <div className="featured-overlay">
                <h3>Modern Minimalist Kitchen</h3>
                <p>South Norwalk, CT</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-image-placeholder" />
              <div className="featured-overlay">
                <h3>Classic White Kitchen</h3>
                <p>Westport, CT</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-image-placeholder" />
              <div className="featured-overlay">
                <h3>Warm Contemporary</h3>
                <p>Darien, CT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-overlay" />
        <div className="container cta-content">
          <p className="section-label" style={{ color: 'var(--color-accent-light)' }}>
            Start Your Project
          </p>
          <h2>Ready to Transform Your Kitchen?</h2>
          <p>
            Visit our showroom in South Norwalk or give us a call to schedule
            your free design consultation.
          </p>
          <div className="cta-actions">
            <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
            <a href="tel:2038319000" className="btn btn-outline-light">
              Call (203) 831-9000
            </a>
          </div>
        </div>
      </section>

      {/* Why Nukitchens */}
      <section className="section why-nukitchens">
        <div className="container">
          <div className="why-header">
            <p className="section-label">Why Nukitchens</p>
            <h2 className="section-title">Built on Trust &amp; Results</h2>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Kitchens Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
