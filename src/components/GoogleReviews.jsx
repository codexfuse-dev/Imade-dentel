export default function GoogleReviews() {
  const placeId = 'YOUR_PLACE_ID_HERE'
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`

  return (
    <section className="section">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">Google Reviews</span>
          <h2 className="section-title">See What Our Patients Say on Google</h2>
          <p className="section-desc">
            We are proud of our 5.0 Google rating. Read real reviews from our patients and share your own experience!
          </p>
        </div>

        <div className="google-reviews-grid">
          <div className="google-rating-card">
            <div className="google-rating-stars">★★★★★</div>
            <div className="google-rating-score">5.0</div>
            <p className="google-rating-text">Based on 492+ Google reviews</p>
            <div className="google-logo-row">
              <svg viewBox="0 0 48 48" style={{ width: 48, height: 48 }}>
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              <span className="google-powered-text">Google Reviews</span>
            </div>
          </div>

          <div className="google-cta-card">
            <h3>Share Your Experience</h3>
            <p>Had a great experience at Imdad Memorial Dental Care? We would love to hear about it!</p>
            <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Write a Google Review
            </a>
            <p className="google-cta-note">
              Your review helps other patients find quality dental care.
            </p>
          </div>
        </div>

        <div className="google-embed-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=Imdad+Memorial+Dental+Care&output=embed"
            title="Imdad Memorial Dental Care on Google Maps"
            className="google-map-iframe"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
