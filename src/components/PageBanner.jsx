import { Link } from 'react-router-dom'

export default function PageBanner({ title, breadcrumb }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1 className="page-banner-title">{title}</h1>
        <div className="breadcrumbs">
          <Link to="/" className="breadcrumb-item">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item active">{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  )
}
