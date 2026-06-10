import PageBanner from '../components/PageBanner'
import Accordion from '../components/Accordion'

const aboutSteps = [
  { title: 'Stage 1: Preliminary Diagnostic Consultation', content: 'We perform full physical evaluations and high-resolution digital scanning to obtain complete tooth structure mapping and outline necessary treatment lists.' },
  { title: 'Stage 2: Detailed Plan Customization', content: 'Dr. Sardar Ali designs your customized timeline, showing exact milestones, session durations, and cost splits.' },
  { title: 'Stage 3: Clinical Session & Healing Follow-ups', content: 'Clinical therapies are performed with premium sterile instruments. We follow up with customized diet charts, antiseptic guidelines, and routine checkups.' },
]

export default function About() {
  return (
    <>
      <PageBanner title="About Our Clinic" breadcrumb="About Us" />

      {/* Detailed Intro */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-images-wrapper">
            <div className="about-img-box large">
              <img src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=500" alt="Hygienic dental treatment room" />
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400" alt="Consultation session" />
            </div>
            <div className="about-img-box">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" alt="Clinic equipment" />
            </div>
            <div className="experience-badge">
              <span className="exp-years">15+</span>
              <span className="exp-text">Years of Care</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Dr. Sardar Ali & Imdad Memorial Dental Care</h2>
            <p className="section-desc" style={{ marginBottom: '20px' }}>
              Founded on the principles of integrity, clinical precision, and comfort, <strong>Imdad (Memorial) Dental Care</strong> has been serving the community with advanced oral solutions. Our medical lead, <strong>Dr. Sardar Ali (BDS, RDS)</strong>, is a decorated oral surgeon specializing in dental implants, prosthetics, and alignments.
            </p>
            <p className="section-desc">
              Our facility is equipped with progressive diagnostic technologies, including digital intraoral sensors, soft-tissue lasers, and specialized cosmetic teeth-whitening devices. We uphold strict European sterilization protocols (Class-B autoclaves) to secure absolute safety and hygiene for every visitor.
            </p>
            <div className="about-features-list">
              {['BDS & RDS Certified Lead', 'Digital X-Ray Facilities', 'Ultrasonic Scalers', 'Soft Sedation Options'].map(f => (
                <div key={f} className="about-feature-item"><span className="feature-check">✔</span>{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container process-section">
          <div className="about-content">
            <span className="section-subtitle">Treatment Steps</span>
            <h2 className="section-title">Our Clinical Procedure</h2>
            <p className="section-desc" style={{ marginBottom: '30px' }}>We want you to feel fully informed and relaxed about what each clinical stage of your dental plan entails.</p>
            <Accordion items={aboutSteps} />
          </div>
          <div className="process-images">
            <div className="hero-img-box">
              <img src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=700" alt="Dental treatment session" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
