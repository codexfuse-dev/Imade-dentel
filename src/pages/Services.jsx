import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'


const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>, title: 'Full Exams & X-Ray', desc: 'Thorough visual diagnostic sweeps paired with low-radiation digital radiographies to map teeth alignment, check roots, and detect hidden cavities.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-6h2v2h-2v-2zm0-8h2v6h-2V8z"/></svg>, title: 'Scaling & Polishing', desc: 'Advanced ultrasonic scaling to remove hardened calculus, plaque, and surface tartar, finished with a polishing paste for stain removal.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>, title: 'Tooth Extraction', desc: 'Gentle removal of severely decayed, broken, or non-functional teeth under comfortable local anesthetics to prevent widespread infections.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H7.5v-1.5h9V16zm0-2.5H7.5V12h9v1.5zm0-2.5H7.5V9.5h9V11z"/></svg>, title: 'Surgical Extraction', desc: 'Precision removal of impacted wisdom teeth, complex root tips, or bone-locked structures with high-fidelity soft tissue healing care.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-15v6h2V7h-2zm0 8v2h2v-2h-2z"/></svg>, title: 'Orthodontics (Braces)', desc: 'Aesthetic correction of crowded teeth, gaps, and overbites using traditional stainless-steel brackets or transparent aligners.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>, title: 'Bridges & Crowns', desc: 'Durable zirconia and porcelain caps to strengthen fractured teeth or bridge empty spaces, restoring complete bite force.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/></svg>, title: 'Complete Denture', desc: 'Custom acrylic arch dentures that look and behave like native gums and teeth, designed for partial or full tooth restoration.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>, title: 'Dental Implants', desc: 'Surgical anchoring of titanium root screws into the jaw bone, finished with realistic crowns for a lifetime replacement.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>, title: 'Teeth Whitening', desc: 'Restore your natural white shade with in-office laser whitening and custom home-bleaching trays under professional supervision.' },
]

const ChevronRight = () => <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>

export default function Services() {
  return (
    <>
      <PageBanner title="Our Dental Services" breadcrumb="Services" />

      <section className="section">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Comprehensive Dental Solutions</h2>
            <p className="section-desc">From routine checkups to complex implant surgeries, we cover every aspect of modern dentistry.</p>
          </div>
          <div className="services-grid-wrapper">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon-box">{s.icon}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <Link to="/appointment" className="service-card-link">Book Now <ChevronRight /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Professional Care Standards</h2>
            <p className="section-desc">We combine sterile conditions, advanced tech, and customized diagnostics to deliver premium oral treatments.</p>
          </div>
          <div className="why-choose-grid">
            {[
              { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>, title: 'Certified Expert Lead', desc: 'All complex implants and surgeries are directly performed by Dr. Sardar Ali (BDS, RDS).' },
              { icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: 'Sterility & Safety First', desc: 'We follow rigorous multi-phase instrument disinfection protocols to secure clinical standards.' },
              { icon: <svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>, title: 'Comfortable Sedations', desc: 'Specialized sedative methods are available to manage dental anxieties during extraction or alignments.' },
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


    </>
  )
}
