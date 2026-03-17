import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useHeroScroll } from '../hooks/useScrollAnimations'
import './Portfolio.css'

const projects = [
  { id: 1, title: 'Modern Minimalist', location: 'South Norwalk, CT', category: 'modern', image: '/images/portfolio/01.jpg' },
  { id: 2, title: 'Classic White Kitchen', location: 'Westport, CT', category: 'classic', image: '/images/portfolio/02.jpg' },
  { id: 3, title: 'Warm Contemporary', location: 'Darien, CT', category: 'contemporary', image: '/images/portfolio/03.jpg' },
  { id: 4, title: 'Coastal Farmhouse', location: 'Stamford, CT', category: 'classic', image: '/images/portfolio/04.jpg' },
  { id: 5, title: 'Urban Industrial', location: 'Norwalk, CT', category: 'modern', image: '/images/portfolio/05.jpg' },
  { id: 6, title: 'Transitional Elegance', location: 'Greenwich, CT', category: 'contemporary', image: '/images/portfolio/06.jpg' },
]

const categories = ['all', 'modern', 'classic', 'contemporary']

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const heroRef = useHeroScroll()
  const gridRef = useRef(null)
  const ctaRef = useReveal()

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const container = gridRef.current
    if (!container) return

    const targets = container.querySelectorAll('[data-animate]')
    if (!targets.length) return

    // Remove stale in-view so new items can animate in
    targets.forEach((t) => t.classList.remove('in-view'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-img-wrap">
          <div className="page-hero-bg" ref={heroRef} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label">Our Work</p>
          <h1>Portfolio</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid" ref={gridRef}>
            {filtered.map((project, i) => (
              <div key={project.id} className="portfolio-item" data-animate={String((i % 3) + 1)}>
                <div className="portfolio-img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-cta">
        <div className="container portfolio-cta-inner reveal" ref={ctaRef}>
          <h2>Like what you see?</h2>
          <p>Let&apos;s create your dream kitchen.</p>
          <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
        </div>
      </section>
    </>
  )
}

export default Portfolio
