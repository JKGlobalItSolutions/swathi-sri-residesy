export default function Footer() {
  return (
    <footer
      className="container-fluid bg-dark text-light footer wow fadeIn"
      data-wow-delay="0.1s"
      role="contentinfo"
    >
      <div className="container pb-5">
        <div className="row g-5">
          {/* Brand Section */}
          <div className="col-md-6 col-lg-4">
            <div className="bg-primary rounded p-4">
              <h5 className="text-white text-uppercase text-center mb-3">Swathisri Residency</h5>
              <p className="text-white mb-0">
                Your trusted partner for comfortable and modern living spaces.
                Discover quality residences tailored to your lifestyle.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-6 col-lg-3">
            <h3 className="section-title text-start text-primary text-uppercase mb-4">
              Contact Us
            </h3>

            <p className="mb-2 d-flex align-items-center">
              <span className="me-2">📞</span>
              <span>+91 9442614126</span>
            </p>
            <p className="mb-2 d-flex align-items-center">
              <span className="me-2">📧</span>
              <span>support@Swathisri Residency.com</span>
            </p>
            <p className="mb-2 d-flex align-items-center">
              <span className="me-2">📍</span>
              <span className="mt-3">Othavadi Street, North St, Tiruvannamalai, Tamil Nadu 606601</span>
            </p>
          </div>

          {/* About Section */}
          <div className="col-md-6 col-lg-4">
            <h3 className="section-title text-start text-primary text-uppercase mb-4">
            Swathisri Residency
            </h3>
            <p>
             Swathisri Residencyoffers premium residential
              communities focused on comfort, security, and modern amenities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
