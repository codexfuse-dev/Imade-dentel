import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'


const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .3-.2.7-.2 1.1-.1l1.6.5c-.3-.8-.5-1.7-.5-2.6 0-1.6.4-3.2 1.2-4.4C19.6 4.8 18.4 3.6 16 3.6h-4z" /><path d="M16 11a4 4 0 100 8 4 4 0 000-8zm-5.5 4a5.5 5.5 0 119.7 3.5l2.5 2.5a1 1 0 01-1.4 1.4l-2.5-2.5A5.5 5.5 0 0110.5 15z" /></svg>, title: 'Full Exams & X-Ray', desc: 'Thorough visual diagnostic sweeps paired with low-radiation digital radiographies to map teeth alignment, check roots, and detect hidden cavities.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 3.2 14.4 2 12 2z" /><path d="M5 4l.8 1.2 1.2.8-1.2.8-.8 1.2-.8-1.2-1.2-.8 1.2-.8zm14-1l.8 1.2 1.2.8-1.2.8-.8 1.2-.8-1.2-1.2-.8 1.2-.8zm-12 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9.5-.5a1 1 0 100-2 1 1 0 000 2z" /></svg>, title: 'Scaling & Polishing', desc: 'Advanced ultrasonic scaling to remove hardened calculus, plaque, and surface tartar, finished with a polishing paste for stain removal.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 7c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 8.2 14.4 7 12 7z" /><path d="M12 1l-3 3h2v3h2V4h2z" /><path d="M5 10c0-2 2-3.5 4.5-3.8l.5 1.5C8 8 7 9 7 10H5zm14 0c0-2-2-3.5-4.5-3.8l-.5 1.5c2 .3 3 1.3 3 2.3h2z" /></svg>, title: 'Tooth Extraction', desc: 'Gentle removal of severely decayed, broken, or non-functional teeth under comfortable local anesthetics to prevent widespread infections.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M11 4c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C14.6 5.2 13.4 4 11 4z" /><path d="M18 7h-2v2h-2v2h2v2h2v-2h2V9h-2V7z" /></svg>, title: 'Surgical Extraction', desc: 'Precision removal of impacted wisdom teeth, complex root tips, or bone-locked structures with high-fidelity soft tissue healing care.' },
  { icon: <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 3.2 14.4 2 12 2zm-2.5 5h5v4h-5V7zm-7.5 1.5h20v1H2v-1z" /></svg>, title: 'Orthodontics (Braces)', desc: 'Aesthetic correction of crowded teeth, gaps, and overbites using traditional stainless-steel brackets or transparent aligners.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M3 8c0-1.5 1-2 2-2s2 .5 2 2v4H3V8zm14 0c0-1.5 1-2 2-2s2 .5 2 2v4h-4V8zm-10-.5h10v2.5H7V7.5zm3 1c0 1.5.8 2.5 2 2.5s2-1 2-2.5v-1h-4v1zm-6 3.5v4h2v-4H4zm14 0v4h2v-4h-2z" /></svg>, title: 'Bridges & Crowns', desc: 'Durable zirconia and porcelain caps to strengthen fractured teeth or bridge empty spaces, restoring complete bite force.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M3 13c0-4 4.5-7 9-7s9 3 9 7h-2c0-3-3-5-7-5s-7 2-7 5H3zm3-1v3h2v-3H6zm3 0v4.5h2v-4.5H9zm3 0v5h2v-5h-2zm3 0v4.5h2v-4.5h-2zm3 0v3h2v-3h-2z" /></svg>, title: 'Complete Denture', desc: 'Custom acrylic arch dentures that look and behave like native gums and teeth, designed for partial or full tooth restoration.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M16 3c-.8-.1-1.5.4-2.5.4s-1.7-.5-2.5-.4c-1.2.1-2 1.1-2 2.5 0 2.5.8 4.5 1.8 5.5h6.4c1-1 1.8-3 1.8-5.5 0-1.4-.8-2.4-2-2.5zm-5.5 8.5h3v1.5h-3zm.5 2.5h2v2h-2zm-1 3.5h4v-1.5h-4zm1 3.5h2v-1.5h-2zm-2-4.5h6v-1h-6z" /></svg>, title: 'Dental Implants', desc: 'Surgical anchoring of titanium root screws into the jaw bone, finished with realistic crowns for a lifetime replacement.' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2c-2.4 0-3.6 1.2-3.6 2.8 0 1.6.4 3.2 1.2 4.4.4.8.6 1.6.4 2.4l-.4 3.2c-.1.4.2.8.6.7l2.5-.8c.4-.1.8 0 1.1.2.4.2.9.2 1.3 0 .4-.2.8-.2 1.1-.1l2.5.8c.4.1.7-.3.6-.7l-.4-3.2c-.2-.8 0-1.6.4-2.4 1-1.2 1.2-2.8 1.2-4.4C15.6 3.2 14.4 2 12 2z" /><path d="M20 2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7zm-15 3l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5z" /></svg>, title: 'Teeth Whitening', desc: 'Restore your natural white shade with in-office laser whitening and custom home-bleaching trays under professional supervision.' },
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
