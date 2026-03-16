import { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useRevealChildren, useParallaxImages, useHeroScroll, useObserveSection } from '../hooks/useScrollAnimations'
import './Home.css'

/** Merge multiple refs onto one element */
function mergeRefs(...refs) {
  return (el) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(el)
      else if (ref) ref.current = el
    })
  }
}

/*
  Hero slides — each has a LAYOUT type:
    'single'  → 1 full-screen image
    'split'   → 1 large left + 2 stacked right
    'trio'    → 3 equal columns
*/
const heroSlides = [
  {
    layout: 'single',
    images: ['/images/hero/hero-1.jpg'],
    label: 'Kitchen Design & Renovation',
    title: 'Redefining Value',
    subtitle: 'Exceptional craftsmanship meets timeless design in every kitchen we create.',
  },
  {
    layout: 'split',
    images: ['/images/portfolio/02.jpg', '/images/portfolio/03.jpg', '/images/portfolio/04.jpg'],
    label: 'Featured Projects',
    title: 'Our Latest Work',
    subtitle: 'Explore kitchens designed with passion and precision.',
  },
  {
    layout: 'single',
    images: ['/images/hero/hero-3.jpg'],
    label: 'Visit Our Showroom',
    title: 'See It In Person',
    subtitle: 'Experience the quality of our work firsthand in South Norwalk, CT.',
  },
  {
    layout: 'trio',
    images: ['/images/portfolio/05.jpg', '/images/portfolio/06.jpg', '/images/portfolio/07.jpg'],
    label: 'Explore Styles',
    title: 'Kitchen Collections',
    subtitle: 'Modern, Classic, and Contemporary — find the style that speaks to you.',
  },
]

const SLIDE_DURATION = 5000

function Home() {
  const heroRef = useHeroScroll()
  const [activeIndex, setActiveIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((idx) => {
    setLeaving(true)
    setTimeout(() => {
      setActiveIndex(idx)
      setLeaving(false)
    }, 800) // fade-out duration
  }, [])

  const advance = useCallback(() => {
    goTo((activeIndex + 1) % heroSlides.length)
  }, [activeIndex, goTo])

  useEffect(() => {
    timerRef.current = setInterval(advance, SLIDE_DURATION)
    return () => clearInterval(timerRef.current)
  }, [advance])

  const slide = heroSlides[activeIndex]

  // Parallax for image drift
  const duoPlx = useParallaxImages()
  const trioPlx = useParallaxImages()
  const featuredPlx = useParallaxImages()
  const fullbleedPlx = useParallaxImages()

  // Section observers for entrance animations
  const duoObs = useObserveSection({ threshold: 0.08 })
  const trioObs = useObserveSection({ threshold: 0.08 })

  // Reveal refs
  const introRef = useReveal()
  const servicesRef = useRevealChildren()
  const featuredHeaderRef = useReveal()
  const ctaRef = useReveal()
  const statsRef = useRevealChildren()

  return (
    <>
      {/* ── HERO ── layout-morphing slideshow */}
      <section className="hero">
        <div className="hero-img-wrap" ref={heroRef}>
          {/* The image layout — changes shape per slide */}
          <div className={`hero-layout hero-layout-${slide.layout} ${leaving ? 'is-leaving' : 'is-active'}`} key={activeIndex}>
            {slide.layout === 'single' && (
              <div className="hero-cell hero-cell-full">
                <div className="hero-img" style={{ backgroundImage: `url(${slide.images[0]})` }} />
              </div>
            )}
            {slide.layout === 'split' && (
              <>
                <div className="hero-cell hero-cell-left">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[0]})` }} />
                </div>
                <div className="hero-cell hero-cell-right-top">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[1]})` }} />
                </div>
                <div className="hero-cell hero-cell-right-bottom">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[2]})` }} />
                </div>
              </>
            )}
            {slide.layout === 'trio' && (
              <>
                <div className="hero-cell hero-cell-third">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[0]})` }} />
                </div>
                <div className="hero-cell hero-cell-third">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[1]})` }} />
                </div>
                <div className="hero-cell hero-cell-third">
                  <div className="hero-img" style={{ backgroundImage: `url(${slide.images[2]})` }} />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="hero-overlay" />

        <div className={`hero-content ${leaving ? 'is-leaving' : 'is-active'}`} key={`text-${activeIndex}`}>
          <p className="hero-label">{slide.label}</p>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-outline-light">View Portfolio</Link>
            <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
          </div>
        </div>


        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── DUO ── 2 images slide in from left & right */}
      <section className="section section-duo" ref={mergeRefs(duoPlx, duoObs)}>
        <div className="container">
          <div className="duo-grid">
            <div className="duo-item anim-slide-left">
              <div className="plx-box plx-box-43">
                <img src="/images/portfolio/01.jpg" alt="Modern kitchen design" className="plx" loading="lazy" />
              </div>
              <div className="duo-caption">
                <h3>Design Consultation</h3>
                <p>Personalized sessions to understand your vision</p>
              </div>
            </div>
            <div className="duo-item anim-slide-right">
              <div className="plx-box plx-box-43">
                <img src="/images/portfolio/02.jpg" alt="Custom cabinetry" className="plx" loading="lazy" />
              </div>
              <div className="duo-caption">
                <h3>Custom Cabinetry</h3>
                <p>Premium materials built to last a lifetime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="section section-intro">
        <div className="container intro-inner anim-fade-up" ref={introRef}>
          <p className="section-label">Welcome to Nukitchens</p>
          <h2 className="section-title">Where Vision Meets Craftsmanship</h2>
          <p>
            Nukitchens has been a family business since 1956, founded by Joseph
            Najmy. Our roots trace back to Philip Farran, who began renovating
            brownstones in Brooklyn in the early 1900s — instilling a tradition
            of craftsmanship, hard work, and integrity that carries on to this day.
          </p>
          <Link to="/our-story" className="btn btn-outline">Our Story</Link>
        </div>
      </section>

      {/* ── FULL-BLEED ── single wide parallax image */}
      <section className="section-fullbleed" ref={fullbleedPlx}>
        <div className="plx-box plx-box-wide">
          <img src="/images/hero/hero-2.jpg" alt="Kitchen showcase" className="plx" loading="lazy" />
        </div>
      </section>

      {/* ── TRIO ── 3 images stagger in */}
      <section className="section section-trio" ref={mergeRefs(trioPlx, trioObs)}>
        <div className="container">
          <div className="trio-header anim-fade-up" ref={useReveal()}>
            <p className="section-label">Explore Styles</p>
            <h2 className="section-title">Kitchen Collections</h2>
          </div>
          <div className="trio-grid">
            <div className="trio-item anim-stagger-1">
              <div className="plx-box plx-box-square">
                <img src="/images/portfolio/05.jpg" alt="Modern kitchen" className="plx" loading="lazy" />
              </div>
              <h3 className="trio-label">Modern</h3>
            </div>
            <div className="trio-item anim-stagger-2">
              <div className="plx-box plx-box-square">
                <img src="/images/portfolio/06.jpg" alt="Classic kitchen" className="plx" loading="lazy" />
              </div>
              <h3 className="trio-label">Classic</h3>
            </div>
            <div className="trio-item anim-stagger-3">
              <div className="plx-box plx-box-square">
                <img src="/images/portfolio/11.jpg" alt="Contemporary kitchen" className="plx" loading="lazy" />
              </div>
              <h3 className="trio-label">Contemporary</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section section-services" ref={servicesRef}>
        <div className="container">
          <div className="services-header" data-animate="1">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Complete Kitchen Solutions</h2>
          </div>
          <div className="services-grid">
            <div className="service-card" data-animate="1">
              <div className="service-number">01</div>
              <h3>Design Consultation</h3>
              <p>Personalized design sessions in our showroom to understand your vision, lifestyle, and budget.</p>
            </div>
            <div className="service-card" data-animate="2">
              <div className="service-number">02</div>
              <h3>Custom Cabinetry</h3>
              <p>Premium cabinetry tailored to your space. From classic shaker to modern flat-panel.</p>
            </div>
            <div className="service-card" data-animate="3">
              <div className="service-number">03</div>
              <h3>Full Renovation</h3>
              <p>End-to-end kitchen renovation including countertops, backsplashes, fixtures, and finishing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── masonry with parallax */}
      <section className="section section-featured">
        <div className="container">
          <div className="featured-header anim-fade-up" ref={featuredHeaderRef}>
            <div>
              <p className="section-label">Featured Work</p>
              <h2 className="section-title">Our Latest Projects</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline">View All</Link>
          </div>
          <div className="featured-grid" ref={featuredPlx}>
            <div className="featured-item featured-large">
              <div className="plx-box plx-box-fill">
                <img src="/images/portfolio/03.jpg" alt="Modern Minimalist Kitchen" className="plx" loading="lazy" />
              </div>
              <div className="featured-label">
                <h3>Modern Minimalist</h3>
                <p>South Norwalk, CT</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="plx-box plx-box-fill">
                <img src="/images/portfolio/04.jpg" alt="Classic White Kitchen" className="plx" loading="lazy" />
              </div>
              <div className="featured-label">
                <h3>Classic White</h3>
                <p>Westport, CT</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="plx-box plx-box-fill">
                <img src="/images/portfolio/07.jpg" alt="Warm Contemporary" className="plx" loading="lazy" />
              </div>
              <div className="featured-label">
                <h3>Warm Contemporary</h3>
                <p>Darien, CT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED ── */}
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

      {/* ── CTA ── */}
      <section className="section-cta">
        <div className="cta-bg" />
        <div className="cta-overlay" />
        <div className="container cta-content anim-fade-up" ref={ctaRef}>
          <p className="section-label" style={{ color: 'var(--color-accent-light)' }}>Start Your Project</p>
          <h2>Ready to Transform Your Kitchen?</h2>
          <p>Visit our showroom in South Norwalk or give us a call to schedule your free design consultation.</p>
          <div className="cta-actions">
            <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
            <a href="tel:2038319000" className="btn btn-outline-light">Call (203) 831-9000</a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section section-stats" ref={statsRef}>
        <div className="container">
          <div className="stats-header" data-animate="1">
            <p className="section-label">Why Nukitchens</p>
            <h2 className="section-title">Built on Trust &amp; Results</h2>
          </div>
          <div className="stats-row">
            <div className="stat-item" data-animate="1">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item" data-animate="2">
              <span className="stat-number">500+</span>
              <span className="stat-label">Kitchens Completed</span>
            </div>
            <div className="stat-item" data-animate="3">
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
