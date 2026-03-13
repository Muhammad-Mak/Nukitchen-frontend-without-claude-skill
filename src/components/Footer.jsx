import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">Nukitchens</h3>
            <p className="footer-tagline">Redefining Value</p>
            <p className="footer-desc">
              Premium kitchen design and renovation, bringing your vision to life
              with exceptional craftsmanship and timeless style.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/showroom">Visit Showroom</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a href="tel:2038319000">(203) 831-9000</a>
              </li>
              <li>
                <a href="mailto:info@nukitchens.com">info@nukitchens.com</a>
              </li>
              <li>
                132 Water Street<br />
                South Norwalk, CT 06854
              </li>
            </ul>
          </div>

          <div className="footer-hours">
            <h4>Showroom Hours</h4>
            <ul>
              <li><span>Tuesday - Friday</span><span>9am - 5pm</span></li>
              <li><span>Saturday</span><span>10am - 5pm</span></li>
              <li><span>Sunday - Monday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Nukitchens. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/nukitchens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://www.facebook.com/nukitchensnorwalk/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.pinterest.com/nukitchensct/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 4.5-3 6l-1 4"/><path d="M9.5 15.5L7 22"/></svg>
            </a>
            <a href="https://www.houzz.com/pro/nukitchens/nukitchens" target="_blank" rel="noopener noreferrer" aria-label="Houzz">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3v7.5H20V18h-7.5v-7.5H5V3h7.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
