import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY
        setScrolled(currentY > 50)

        // Only hide/show after scrolling past 300px threshold
        if (currentY > 300) {
          setHidden(currentY > lastScrollY.current && currentY - lastScrollY.current > 5)
        } else {
          setHidden(false)
        }

        lastScrollY.current = currentY
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'navbar-dark' : ''} ${hidden && !menuOpen ? 'navbar-hidden' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Nukitchens" className="logo-img" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/our-story">Our Story</Link></li>
          <li><Link to="/showroom">Visit Showroom</Link></li>
          <li>
            <a href="tel:2038319000" className="navbar-phone">
              (203) 831-9000
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
