import { useState } from 'react'
import PageBanner from '../components/PageBanner'

/* ── Clinic WhatsApp number (international format, no + or spaces) ── */
const WHATSAPP_NUMBER = '923455011902'

/* ── Build a nicely formatted WhatsApp message from the form data ─── */
function buildWhatsAppMessage(form) {
  const today = new Date().toLocaleDateString('en-GB')
  const lines = [
    '🦷 *New Appointment Request*',
    `📅 *Date:* ${today}`,
    '━━━━━━━━━━━━━━━━━━━━━━━',
    `👤 *Patient Name:*   ${form.name}`,
    `📱 *Phone:*          ${form.phone}`,
    form.time   ? `🕐 *Preferred Time:* ${form.time}`   : null,
    form.notes  ? `📝 *Notes:*\n${form.notes}`           : null,
    '━━━━━━━━━━━━━━━━━━━━━━━',
    '_Sent via Imdad Memorial Dental Care website_',
  ]
  return lines.filter(Boolean).join('\n')
}

/* ── Field component at MODULE level so React never remounts it ────
   (Defining it inside the form component causes React to treat it as
    a new component type each render → input loses focus after 1 char) */
function Field({ id, label, type = 'text', full, select, options, value, error, onChange }) {
  return (
    <div className={`form-group${full ? ' full-width' : ''}${error ? ' error' : ''}`}>
      <label className="form-label" htmlFor={id}>{label}</label>
      {select ? (
        <select id={id} className="form-control" value={value} onChange={onChange}>
          <option value="">-- Select --</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={id} type={type} className="form-control" value={value} onChange={onChange} />
      )}
      {error && <span className="form-error-msg">{error}</span>}
    </div>
  )
}

/* ── Appointment form ────────────────────────────────────────────── */
function AppointmentForm() {
  const empty = { name: '', phone: '', time: '', notes: '' }
  const [form, setForm]       = useState(empty)
  const [errors, setErrors]   = useState({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (id) => (e) => setForm(prev => ({ ...prev, [id]: e.target.value }))

  /* ── Validation ──────────────────────────────────────────────── */
  const validate = () => {
    const errs = {}
    if (!form.name.trim())  errs.name    = 'Full name is required'
    if (!form.phone.trim()) errs.phone   = 'Phone number is required'
    else if (form.phone.replace(/\D/g, '').length < 8) errs.phone = 'Enter a valid phone number'
    return errs
  }

  /* ── Submit → open WhatsApp with pre-filled message ─────────── */
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSending(true)
    const message = buildWhatsAppMessage(form)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setSuccess(true)
    setForm(empty)
    setSending(false)
    setTimeout(() => setSuccess(false), 10000)
  }

  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']

  return (
    <div className="form-container">
      <h2 className="form-title">Book Your Appointment</h2>

      {success && (
        <div className="appt-success-banner">
          <div className="appt-success-icon">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <div>
            <strong>Appointment sent to WhatsApp! ✅</strong>
            <p>WhatsApp has opened with your appointment details. Our team at Imdad Dental Care will confirm your booking shortly.</p>
          </div>
        </div>
      )}

      <form id="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Field id="name"    label="Full Name *"        value={form.name}    error={errors.name}    onChange={set('name')} />
          <Field id="phone"   label="Phone Number *"     type="tel"           value={form.phone}   error={errors.phone}   onChange={set('phone')} />
          <Field id="time"    label="Preferred Time"     select options={times}    value={form.time}    error={errors.time}    onChange={set('time')} />
          <div className="form-group full-width">
            <label className="form-label" htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              className="form-control"
              rows="4"
              placeholder="Tell us about any specific concerns or questions..."
              value={form.notes}
              onChange={set('notes')}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-whatsapp" disabled={sending}>
          <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: 'white', flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {sending ? 'Opening WhatsApp…' : 'Send Appointment via WhatsApp'}
        </button>

        <p className="whatsapp-hint">
          <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: '#25D366', flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Your appointment will be sent to our WhatsApp <strong>0345-5011902</strong>. Just tap <strong>Send</strong> to confirm.
        </p>
      </form>
    </div>
  )
}

/* ── Sidebar info items ───────────────────────────────────────── */
const infoItems = [
  { icon: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>, label: 'Clinic Hours', value: 'Mon – Sat: 9am – 9pm\nSunday: Closed' },
  { icon: <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>, label: 'Call Us', value: '0345-5011902\n0333-5111902' },
  { icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, label: 'Email Us', value: 'info@imdad-dental.com' },
  { icon: <svg viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, label: 'WhatsApp', value: '0345-5011902' },
]

export default function Appointment() {
  return (
    <>
      <PageBanner title="Book Appointment" breadcrumb="Appointment" />

      <section className="section">
        <div className="container">
          <div className="appointment-responsive">
            <AppointmentForm />

            <div>
              {/* Clinic info box */}
              <div style={{ background: 'var(--secondary)', borderRadius: 'var(--border-radius-md)', padding: '40px', marginBottom: '30px' }}>
                <h3 style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '20px' }}>Appointment Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {infoItems.map((item, i) => (
                    <div key={i} className="footer-contact-item">
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <div style={{ width: 20, height: 20, fill: 'white' }}>{item.icon}</div>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
                        <p style={{ fontWeight: 600, color: 'var(--primary)', whiteSpace: 'pre-line', fontSize: '0.95rem', marginTop: 2 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp direct link box */}
              <div style={{ background: '#25D366', borderRadius: 'var(--border-radius-md)', padding: '32px 40px', color: 'white', marginBottom: '24px', textAlign: 'center' }}>
                <svg viewBox="0 0 24 24" style={{ width: 48, height: 48, fill: 'white', margin: '0 auto 16px', display: 'block' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.25rem', marginBottom: '8px' }}>Chat Directly on WhatsApp</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '4px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Prefer to message us directly? Click below to start a WhatsApp conversation with our team.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>
                  Our WhatsApp: <strong>0345-5011902</strong>
                </p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: '#25D366', fontWeight: 700, padding: '12px 28px', borderRadius: 50, fontSize: '0.95rem', textDecoration: 'none' }}>
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: '#25D366' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>

              {/* Emergency box */}
              <div style={{ background: 'var(--primary)', borderRadius: 'var(--border-radius-md)', padding: '40px', color: 'white' }}>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: '1.35rem', marginBottom: '15px' }}>Emergency Cases</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '20px', lineHeight: 1.7 }}>
                  For urgent dental emergencies like severe toothache, broken tooth, or facial swelling, call us immediately.
                </p>
                <a href="tel:03455011902" className="btn btn-primary">Call Emergency Line</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
