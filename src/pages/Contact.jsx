import { useState } from 'react'
import PageBanner from '../components/PageBanner'


function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSuccess(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 8000)
    }
  }

  const Field = ({ id, label, type = 'text', full, multiline }) => (
    <div className={`form-group${full ? ' full-width' : ''}${errors[id] ? ' error' : ''}`}>
      <label className="form-label" htmlFor={id}>{label}</label>
      {multiline
        ? <textarea id={id} className="form-control" value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} required />
        : <input id={id} type={type} className="form-control" value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} required />
      }
      {errors[id] && <span className="form-error-msg">{errors[id]}</span>}
    </div>
  )

  return (
    <div className="form-container">
      <h2 className="form-title">Send Us a Message</h2>
      {success && <div className="form-feedback success">Your message has been sent successfully. We will get back to you soon.</div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Field id="name" label="Full Name *" />
          <Field id="email" label="Email Address *" type="email" />
          <Field id="phone" label="Phone Number" type="tel" />
          <Field id="subject" label="Subject" />
          <Field id="message" label="Your Message *" full multiline />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  )
}

const contactCards = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, title: 'Our Location', text: 'Imdad Dental Care Clinic\nMain Bazar, Pakistan' },
  { icon: <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>, title: 'Phone Numbers', text: '0345-5011902\n0333-5111902' },
  { icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, title: 'Email Address', text: 'info@imdad-dental.com\nadmin@imdad-dental.com' },
  { icon: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>, title: 'Working Hours', text: 'Mon – Sat: 9:00 AM – 9:00 PM\nSunday: Closed' },
]

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" breadcrumb="Contact" />

      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            {contactCards.map((c, i) => (
              <div key={i} className="contact-card">
                <div className="contact-card-icon">{c.icon}</div>
                <h3 className="contact-card-title">{c.title}</h3>
                <p className="contact-card-text" style={{ whiteSpace: 'pre-line' }}>{c.text}</p>
              </div>
            ))}
          </div>

          <div className="contact-split-grid">
            <ContactForm />
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1284498553596!2d72.87484931520565!3d33.62977448072076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df971c5f0e66b1%3A0x8e948d9a95b54b1a!2sIslamabad!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                title="Clinic Location Map" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
