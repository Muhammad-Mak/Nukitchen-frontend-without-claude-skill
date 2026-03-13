import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <section className="page-hero">
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

          <div className="portfolio-grid">
            {filtered.map(project => (
              <div key={project.id} className="portfolio-item">
                <img src={project.image} alt={project.title} loading="lazy" />
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
        <div className="container portfolio-cta-inner">
          <h2>Like what you see?</h2>
          <p>Let&apos;s create your dream kitchen.</p>
          <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
        </div>
      </section>
    </>
  )
}

export default Portfolio
