import { Link } from 'react-router-dom'
import './OurStory.css'

function OurStory() {
  return (
    <>
      <section className="page-hero story-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label">About Us</p>
          <h1>Our Story</h1>
        </div>
      </section>

      <section className="section story-family">
        <div className="container story-family-inner">
          <p className="section-label">Since 1956</p>
          <h2>A Family Business</h2>
          <blockquote className="founder-quote">
            <p>
              &ldquo;We&apos;ve been a family business since 1956. My grandfather, Philip
              Farran, started renovating brownstones in Brooklyn in the early 1900s.
              His family of eight children learned the value of hard work and the
              importance of creating a home-life. His business was built on trust,
              surrounding himself with the right people who shared his values. My
              mother became a trained interior designer and my father developed his
              skills as a master furniture craftsman. This tradition is carried out
              today at my company. We remain a family business to this day. We
              continue to embrace the values of honesty and integrity with our staff
              and customers alike.&rdquo;
            </p>
            <footer>
              <strong>Joseph Najmy</strong>, Founder of Nukitchens
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section story-designers">
        <div className="container story-designers-grid">
          <div className="story-designers-text">
            <p className="section-label">Our Team</p>
            <h2>Expert Kitchen Designers</h2>
            <p>
              Our team of accomplished designers specializes in kitchen design to
              help our clients&apos; dream kitchens come to life. We believe in an
              honest and open exchange of ideas to get the best results. We are a
              family company with a unique team-oriented style.
            </p>
            <p>
              Whether you simply need a fresh look with new cabinets or a total
              kitchen renovation, we are your one-stop resource. Saving you the time
              and hassle of coordinating many different resources, Nukitchens has a
              team of professionals that can take care of each and every step in the
              process.
            </p>
            <p>
              When you choose to do business with us, you can be assured that all the
              details will be taken care of by our Nukitchens team. Our designers
              collaborate with each other and our clients for the best results. We
              have strong beliefs and high standards in our work. We foster fresh
              ideas to create the kitchen lifestyle that&apos;s right for you.
            </p>
          </div>
          <div className="story-designers-image">
            <div
              className="story-image-placeholder"
              style={{ backgroundImage: "url('/images/portfolio/07.jpg')" }}
            />
          </div>
        </div>
      </section>

      <section className="section story-values">
        <div className="container">
          <div className="story-values-header">
            <p className="section-label">Our Approach</p>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-line" />
              <h3>Quality Materials</h3>
              <p>
                We source only the finest materials, ensuring every cabinet,
                countertop, and fixture stands the test of time.
              </p>
            </div>
            <div className="value-item">
              <div className="value-line" />
              <h3>Personal Service</h3>
              <p>
                Every project gets our full attention. From the first consultation
                to final installation, you work directly with our team.
              </p>
            </div>
            <div className="value-item">
              <div className="value-line" />
              <h3>Honest Pricing</h3>
              <p>
                No hidden fees, no surprises. We&apos;re transparent about costs
                because trust is the foundation of great work.
              </p>
            </div>
            <div className="value-item">
              <div className="value-line" />
              <h3>Timeless Design</h3>
              <p>
                We design kitchens that look beautiful today and will continue
                to feel fresh and relevant for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-cta">
        <div className="container story-cta-inner">
          <h2>Come See for Yourself</h2>
          <p>
            Visit our showroom to experience the quality of our work firsthand
            and start the conversation about your dream kitchen.
          </p>
          <Link to="/showroom" className="btn btn-primary">Visit Showroom</Link>
        </div>
      </section>
    </>
  )
}

export default OurStory
