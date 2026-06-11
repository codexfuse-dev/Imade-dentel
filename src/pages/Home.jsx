import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import GoogleReviews from '../components/GoogleReviews'

const ChevronRight = () => <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>

const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 3.2 14.4 2 12 2z" /><path d="M20 2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7zm-15 3l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" /></svg>, title: 'Teeth Whitening', desc: 'Safely remove coffee, tobacco, and aging stains to restore a sparkling white shade with our premium bleaching gels.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M16 3c-.8-.1-1.5.4-2.5.4s-1.7-.5-2.5-.4c-1.2.1-2 1.1-2 2.5 0 2.5.8 4.5 1.8 5.5h6.4c1-1 1.8-3 1.8-5.5 0-1.4-.8-2.4-2-2.5zm-5.5 8.5h3v1.5h-3zm.5 2.5h2v2h-2zm-1 3.5h4v-1.5h-4zm1 3.5h2v-1.5h-2zm-2-4.5h6v-1h-6z" /></svg>, title: 'Dental Implants', desc: 'Permanent, natural-looking replacement roots topped with customized porcelain crowns for fully functional eating and speaking.' },
  { icon: <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 3.2 14.4 2 12 2zm-2.5 5h5v4h-5V7zm-7.5 1.5h20v1H2v-1z" /></svg>, title: 'Orthodontics', desc: 'Correct misaligned teeth, gaps, and bite issues using contemporary metal braces or invisible aesthetic aligners.' },
]

const processItems = [
  { title: 'Easy Appointment Booking', content: 'Book online using our 24/7 registration portal or call our receptionist team to request quick slots matching your personal schedule.' },
  { title: 'Initial Checkup & Digital X-Ray', content: 'Dr. Sardar Ali performs a thorough diagnostic scan using low-radiation intraoral cameras and 3D dental mapping to pinpoint hidden cavities or root concerns.' },
  { title: 'Customized Treatment & Hygiene Care', content: 'Receive your personalized care session in our relaxing suites. We offer soft dental sedation options to guarantee you remain comfortable throughout.' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="section-subtitle">Welcome to Imdad Dental Care</span>
            <h1 className="hero-title">Experience Dental <span>Excellence</span> With A Gentle Touch</h1>
            <p className="hero-desc">We offer state-of-the-art diagnostics and treatments to keep your teeth healthy, clean, and strong. Enjoy a personalized care plan created just for your smile.</p>
            <div className="hero-btns">
              <Link to="/appointment" className="btn btn-primary">Make An Appointment</Link>
              <Link to="/about" className="btn btn-outline">Read Our Story</Link>
            </div>
            <div className="hero-rating-badge">
              <div className="rating-stars">★★★★★</div>
              <div className="rating-text">5.0 Google Rating <span>(Based on 492 reviews)</span></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-img-box">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Imdad Dental Clinic" />
            </div>
            <div className="hero-doctor-card">
              <div className="doc-avatar">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" alt="Dr. Sardar Ali" />
              </div>
              <div>
                <div className="doc-name">Dr. Sardar Ali</div>
                <div className="doc-role">Lead Oral Surgeon, BDS RDS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Bar ── */}
      <section className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="info-bar">
          <div className="info-bar-grid">
            <div className="info-bar-item">
              <div className="info-icon-box"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></div>
              <div className="info-text-box">
                <span className="info-label">Call Us Anytime</span>
                <a href="tel:03455011902" className="info-value">0345-5011902</a>
              </div>
            </div>
            <div className="info-bar-item">
              <div className="info-icon-box"><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div>
              <div className="info-text-box">
                <span className="info-label">Opening Hours</span>
                <span className="info-value">Mon - Sat: 9am - 9pm</span>
              </div>
            </div>
            <div className="info-bar-item">
              <Link to="/appointment" className="btn btn-white-outline">Book Your Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-images-wrapper">
            <div className="about-img-box large">
              <img src="/images/about1.png" alt="Dental Care Session" />
            </div>
            <div className="about-img-box">
              <img src="/images/about2.png" alt="Tooth Implant" />
            </div>
            <div className="about-img-box">
              <img src="/images/about3.png" alt="Teeth Scaling" />
            </div>
            <div className="experience-badge">
              <span className="exp-years">15+</span>
              <span className="exp-text">Years of Care</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-subtitle">About Our Clinic</span>
            <h2 className="section-title">Your Journey To A Healthier, Brighter Smile Begins Here</h2>
            <p className="section-desc" style={{ marginBottom: '20px' }}>Imdad (Memorial) Dental Care is dedicated to providing high-quality, comprehensive oral healthcare services in a welcoming and comfortable setting. Led by <strong>Dr. Sardar Ali</strong>, our clinic has earned a reputation for combining state-of-the-art technology with gentle, patient-centered techniques.</p>
            <p className="section-desc">Whether you need routine preventive scaling, cosmetic alignment, or complex implant placement, our medical staff is fully prepared to deliver top-tier treatments tailored to your schedule.</p>
            <div className="about-features-list">
              {['Experienced Team', 'Comprehensive Services', 'State-of-the-art Technology', 'Emergency Care Support'].map(f => (
                <div key={f} className="about-feature-item"><span className="feature-check">✔</span>{f}</div>
              ))}
            </div>
            <div><Link to="/about" className="btn btn-primary">Read More About Us</Link></div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Quality Dental Solutions For Your Whole Family</h2>
            <p className="section-desc">Explore our range of general, cosmetic, and surgical oral services designed to ensure your long-term health and aesthetics.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon-box">{s.icon}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <Link to="/services" className="service-card-link">Read Details <ChevronRight /></Link>
              </div>
            ))}
          </div>
          <div className="services-footer-box">
            <div className="services-footer-text">
              <h4>Need a custom checkup plan for your children?</h4>
              <p>We provide comfortable and fun pediatric dental therapies with customized rewards!</p>
            </div>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">A Higher Standard of Oral Care for Everyone</h2>
            <p className="section-desc">Here is why hundreds of families trust Imdad Dental Care to keep their smiles healthy and beautiful.</p>
          </div>
          <div className="why-choose-grid">
            {[
              { icon: <svg viewBox="0 0 24 24"><path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm5 10c0-1.5-.3-3-.8-4-.2-.5-.3-1-.2-1.5 0-1-.5-1.5-2-1.5s-2 .5-2 1.5c.1.5 0 1-.2 1.5-.5 1-.8 2.5-.8 4 0 .2.1.4.3.3l1.5-.4c.3-.1.6 0 .9.2.3.2.7.2 1 0 .3-.2.6-.3.9-.2l1.5.4c.2.1.3-.1.3-.3l-.2-2z" /></svg>, title: 'Experienced Doctors', desc: "Our medical lead Dr. Sardar Ali brings 15+ years of clinical excellence in tooth extraction, oral surgery, and crown placements." },
              { icon: <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zm0-15.35c-1.2 0-1.8.6-1.8 1.4 0 .8.2 1.6.6 2.2.2.4.3.8.2 1.2l-.2 1.6c0 .2.1.4.3.3l1.2-.4.6.1.6 0 .6-.1 1.2.4c.2.1.3-.1.3-.3l-.2-1.6c0-.4.1-.8.2-1.2.4-.6.6-1.4.6-2.2 0-.8-.6-1.4-1.8-1.4z" /></svg>, title: 'Personalized Care', desc: "No two mouths are alike. We formulate detailed diagnostic maps to structure custom alignment and cosmetic protocols." },
              { icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /><path d="M15.5 13.5c-.4 0-.6.2-.6.5 0 .3 0 .5.2.7 0 .1.1.3.1.4l-.1.5 1-.2c.1 0 .2.1.3.1.1 0 .2-.1.3-.1.1 0 .2.1.3.1l1-.2-.1-.5c0-.1.1-.3.1-.4.2-.2.2-.4.2-.7 0-.3-.2-.5-.6-.5h-2z" /></svg>, title: 'Flexible Payments', desc: "We offer convenient payment plans and installment options to make your dental care affordable." },
            ].map((c, i) => (
              <div key={i} className="why-card">
                <div className="why-card-icon">{c.icon}</div>
                <h3 className="why-card-title">{c.title}</h3>
                <p className="why-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section section-bg">
        <div className="container process-section">
          <div className="about-content">
            <span className="section-subtitle">How It Works</span>
            <h2 className="section-title">What We Do for Your Smile</h2>
            <p className="section-desc" style={{ marginBottom: '30px' }}>We keep our treatment sequence simple, straightforward, and transparent, so you always know what to expect during your appointment.</p>
            <Accordion items={processItems} />
          </div>
          <div className="process-images">
            <div className="hero-img-box">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=700" alt="Doctor doing teeth treatment" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviews />

      
    </>
  )
}
