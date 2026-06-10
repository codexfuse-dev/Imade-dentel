import { useState } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /></svg>
)

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" className="footer-chevron"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
)

/* ── Social Media SVG Icons ─────────────────────────────────── */
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="footer footer-with-banner">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="logo">
            <img src="/assets/logo-v2.png" alt="Imdad Dental Care Logo" className="logo-img" />
          </Link>
          <p className="footer-desc">Providing high-standard diagnostic scans, implants, whitening, and aligners in a sterile, welcoming medical setting. Achieve your perfect smile today!</p>

          {/* ── Social Media Buttons ──────────────────────────────── */}
          <div className="footer-socials">
            <a href="https://facebook.com" className="footer-social-btn footer-social-fb" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </a>
            <a href="https://instagram.com" className="footer-social-btn footer-social-ig" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
              <IconInstagram />
            </a>
            <a href="https://wa.me/923455011902" className="footer-social-btn footer-social-wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
              <IconWhatsApp />
            </a>
            <a href="https://youtube.com" className="footer-social-btn footer-social-yt" aria-label="Watch on YouTube" target="_blank" rel="noopener noreferrer">
              <IconYouTube />
            </a>
            <a href="https://twitter.com" className="footer-social-btn footer-social-tw" aria-label="Follow us on Twitter/X" target="_blank" rel="noopener noreferrer">
              <IconTwitterX />
            </a>
          </div>
        </div>

        <div className={`footer-col accordion-col ${openSection === 'links' ? 'active' : ''}`}>
          <h4 className="footer-col-title" onClick={() => toggle('links')}>
            Quick Links <ChevronDown />
          </h4>
          <div className="footer-links accordion-content">
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Our Services'], ['/appointment', 'Book Appointment']].map(([to, label]) => (
              <Link key={to} to={to} className="footer-link"><ArrowIcon />{label}</Link>
            ))}
          </div>
        </div>

        <div className={`footer-col accordion-col ${openSection === 'services' ? 'active' : ''}`}>
          <h4 className="footer-col-title" onClick={() => toggle('services')}>
            Our Services <ChevronDown />
          </h4>
          <div className="footer-links accordion-content">
            {['Dental Implants', 'Teeth Whitening', 'Orthodontics', 'Scaling & Polishing', 'Tooth Extraction', 'Crowns & Bridges'].map(s => (
              <Link key={s} to="/services" className="footer-link"><ArrowIcon />{s}</Link>
            ))}
          </div>
        </div>

        <div className={`footer-col accordion-col ${openSection === 'contact' ? 'active' : ''}`}>
          <h4 className="footer-col-title" onClick={() => toggle('contact')}>
            Contact Us <ChevronDown />
          </h4>
          <div className="footer-contact-list accordion-content">
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Address</span>
                <span className="footer-contact-value">Imdad Dental Care Clinic, Main Bazar</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Call Us</span>
                <span className="footer-contact-value">0345-5011902 | 0333-5111902</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Send Email</span>
                <span className="footer-contact-value">info@imdad-dental.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Imdad (Memorial) Dental Care. All Rights Reserved.</span>
        <span>Created smiles for life.</span>
      </div>
    </footer>
  )
}
