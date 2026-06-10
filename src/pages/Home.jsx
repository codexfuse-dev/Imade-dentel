import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import GoogleReviews from '../components/GoogleReviews'

const ChevronRight = () => <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>

const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>, title: 'Teeth Whitening', desc: 'Safely remove coffee, tobacco, and aging stains to restore a sparkling white shade with our premium bleaching gels.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>, title: 'Dental Implants', desc: 'Permanent, natural-looking replacement roots topped with customized porcelain crowns for fully functional eating and speaking.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h-2zm0-10v8h2V6h-2z"/></svg>, title: 'Orthodontics', desc: 'Correct misaligned teeth, gaps, and bite issues using contemporary metal braces or invisible aesthetic aligners.' },
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
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" alt="Imdad Dental Clinic" />
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
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500" alt="Dental Care Session" />
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400" alt="Tooth Implant" />
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=400" alt="Teeth Scaling" />
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
              { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>, title: 'Experienced Doctors', desc: "Our medical lead Dr. Sardar Ali brings 15+ years of clinical excellence in tooth extraction, oral surgery, and crown placements." },
              { icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: 'Personalized Care', desc: "No two mouths are alike. We formulate detailed diagnostic maps to structure custom alignment and cosmetic protocols." },
              { icon: <svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>, title: 'Flexible Payments', desc: "We offer convenient payment plans and installment options to make your dental care affordable." },
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
