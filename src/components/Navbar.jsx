import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-5" style={{ backgroundColor: '#003366' }}>
      <div className="container-fluid">
        <h2 className="navbar-brand">Swathi Sri Residency</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-5 fw-bold">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/room">Rooms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Call Box */}
        <div className="ms-auto mt-2">
          <a href="tel:+919442614126" className="btn btn-outline-light fw-bold">
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
