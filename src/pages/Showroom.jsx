import { useState } from 'react'
import { useReveal, useRevealChildren, useHeroScroll, useParallaxImages } from '../hooks/useScrollAnimations'
import './Showroom.css'

function Showroom() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const heroRef = useHeroScroll()
  const infoRef = useReveal()
  const mapRef = useReveal()
  const formRef = useReveal()
  const galleryRef = useParallaxImages()

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); console.log('Form submitted:', formData) }

  return (
    <>
      <section className="page-hero showroom-hero">
        <div className="page-hero-img-wrap">
          <div className="page-hero-bg showroom-hero-bg" ref={heroRef} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label">Come Visit</p>
          <h1>Our Showroom</h1>
        </div>
      </section>

      <section className="section">
        <div className="container showroom-grid">
          <div className="showroom-info reveal-left" ref={infoRef}>
            <div className="showroom-block">
              <h3>Location</h3>
              <p>132 Water Street<br />South Norwalk, CT 06854</p>
            </div>
            <div className="showroom-block">
              <h3>Hours</h3>
              <ul className="hours-list">
                <li><span>Tuesday - Friday</span><span>9:00 am - 5:00 pm</span></li>
                <li><span>Saturday</span><span>10:00 am - 5:00 pm</span></li>
                <li><span>Sunday - Monday</span><span>Closed</span></li>
              </ul>
            </div>
            <div className="showroom-block">
              <h3>Contact</h3>
              <p><a href="tel:2038319000">(203) 831-9000</a></p>
              <p><a href="mailto:info@nukitchens.com">info@nukitchens.com</a></p>
            </div>
            <div className="showroom-block">
              <h3>Follow Us</h3>
              <div className="showroom-socials">
                <a href="https://www.instagram.com/nukitchens/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/nukitchensnorwalk/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.pinterest.com/nukitchensct/" target="_blank" rel="noopener noreferrer">Pinterest</a>
                <a href="https://www.houzz.com/pro/nukitchens/nukitchens" target="_blank" rel="noopener noreferrer">Houzz</a>
              </div>
            </div>
          </div>
          <div className="showroom-map reveal-right" ref={mapRef}>
            <iframe title="Nukitchens Showroom Location" src="https://www.google.com/maps?q=132+Water+Street,+South+Norwalk,+CT+06854&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="section contact-form">
        <div className="container">
          <div className="reveal" ref={formRef}>
            <p className="section-label" style={{ textAlign: 'center' }}>Get in Touch</p>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Schedule a Visit</h2>
            <form className="contact-form-fields" onSubmit={handleSubmit}>
              <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" /></div>
              <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" /></div>
              <div className="form-group"><label htmlFor="phone">Phone</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(203) 000-0000" /></div>
              <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} maxLength={500} placeholder="Tell us about your project..." /><span className="char-count">{formData.message.length}/500</span></div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section showroom-gallery">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Inside the Showroom</p>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Experience Our Designs in Person</h2>
          <div className="showroom-gallery-grid" ref={galleryRef}>
            <div className="gallery-item"><div className="plx-box plx-box-gallery"><img src="/images/portfolio/08.jpg" alt="Showroom display kitchen" className="plx" loading="lazy" /></div></div>
            <div className="gallery-item"><div className="plx-box plx-box-gallery"><img src="/images/portfolio/09.jpg" alt="Kitchen countertop samples" className="plx" loading="lazy" /></div></div>
            <div className="gallery-item"><div className="plx-box plx-box-gallery"><img src="/images/portfolio/10.jpg" alt="Cabinetry selection" className="plx" loading="lazy" /></div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showroom
