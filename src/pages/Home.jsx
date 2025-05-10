import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



// images

import homebad1 from '../assets/image/homepage/bad1.jpeg';

import homebad2 from '../assets/image/homepage/bad2.jpeg';


import bad6 from '../assets/image/homepage/bad6.jpeg';
import bad7 from '../assets/image/homepage/bad7.jpeg';
import bad8 from '../assets/image/homepage/bad8.jpeg';




// carousel

import aboutImagedown from '../assets/image/about/aboutimgdown.jpeg';

import bad1 from '../assets/image/homepage/caroll/bad2.jpeg';



function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);





  return (
    <div>



      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bad1} className="d-block w-100" alt="Residency 3" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h3>Welcome to Swathi Sri Residency</h3>
              <p>Luxury living, peaceful surroundings, and smart design for modern families.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={aboutImagedown} className="d-block w-100  h-75" alt="Residency 3" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h3>Modern Amenities</h3>
              <p>Enjoy a pool, fitness center, and 24/7 security in a premium neighborhood.</p>
            </div>
          </div>
          <div className="carousel-item">


            <img src={homebad1} className="d-block w-100" alt="Residency 3" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h3>Elegant Floor Plans</h3>
              <p>Choose from spacious 2BHK and 3BHK units tailored for comfort and elegance.</p>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>









      {/* Hero Section */}
      <section className="text-center bg-light py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to Swathi Sri Residency</h1>
          <p className="lead mt-3 fs-5">
            Discover premium residency rooms designed for comfort and convenience. Swathi Sri Residency offers modern amenities and a peaceful atmosphere for short or extended stays.
          </p>

          <div className="mt-4">
            <Link to="/about" className="btn btn-primary me-2">Learn More</Link>
            <Link to="/contact" className="btn btn-outline-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section
        className="py-5 position-relative text-white" data-aos="fade-up"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(12, 11, 11, 0.6)', zIndex: 1 }}></div>

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h2 className="mb-4 text-warning">Modern Amenities</h2>
          <p className="fs-5 mb-5">Experience comfort, convenience, and community with our top-tier facilities.</p>
          <div className="row g-4">

            <div className="col-md-4">
              <i className="bi bi-lightning-charge fs-1 text-warning"></i>
              <h5 className="mt-3">24/7 Power Backup</h5>
              <p>Uninterrupted electricity and water supply around the clock.</p>
            </div>
            {/* 
            <div className="col-md-4">
              <i className="bi bi-car-front fs-1 text-primary"></i>
              <h5 className="mt-3">Parking Facility</h5>
              <p>Ample on-site parking space for residents and guests.</p>
            </div> */}

            <div className="col-md-4">
              <i className="bi bi-house-door fs-1 text-success"></i>
              <h5 className="mt-3">AC & Non-AC Rooms</h5>
              <p>Comfortable rooms to suit all preferences and budgets.</p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-arrow-up-circle fs-1 text-danger"></i>
              <h5 className="mt-3">Lift Facility</h5>
              <p>Easy access to all floors with our modern lift facility.</p>
            </div>

            {/* <div className="col-md-4">
              <i className="bi bi-wifi fs-1 text-info"></i>
              <h5 className="mt-3">Free Wi-Fi</h5>
              <p>Stay connected with fast and free internet throughout the premises.</p>
            </div> */}

            <div className="col-md-4">
              <i className="bi bi-water fs-1 text-primary"></i>
              <h5 className="mt-3">24/7 Hot Water for Bath</h5>
              <p>Enjoy hot water for your bath at any time of the day or night.</p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-droplet fs-1 text-warning"></i>
              <h5 className="mt-3">Water Softener Plant</h5>
              <p>Clean and soft water for your daily needs, filtered for purity.</p>
            </div>
            {/* 
            <div className="col-md-4">
              <i className="bi bi-house-door fs-1 text-success"></i>
              <h5 className="mt-3">Booster Pump</h5>
              <p>Ensuring uniform water pressure for all residents, all day long.</p>
            </div> */}


            <div className="col-md-4">
              <i className="bi bi-geo-alt fs-1 text-dark"></i>
              <h5 className="mt-3">Prime Location</h5>
              <p>Opposite Arunachalam Temple, situated between the East and North entrances of the temple.</p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-5 bg-light mb-2" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Comfortable  Rooms</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4 position-relative room-card">
              <Link to="/gallery" className="room-link">
                <img src={homebad1} className="img-fluid rounded" alt="Standard Room" />
                <div className="overlay-icon">
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </Link>
              <h5 className="mt-3">Ac Room</h5>
              <p>Cozy rooms with all basic amenities for a comfortable stay.</p>
            </div>
            <div className="col-md-6 mb-4 position-relative room-card">
              <Link to="/gallery" className="room-link">
                <img src={homebad2} className="img-fluid rounded" alt="Deluxe Room" />
                <div className="overlay-icon">
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </Link>
              <h5 className="mt-3">Non-Ac Room</h5>
              <p>Spacious rooms with premium furnishings and added luxuries.</p>
            </div>
          </div>
        </div>
      </section>


      {/* 
      <div style={{ padding: '40px' }}>


        <section className="py-5 bg-white mb-4" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4 text-primary">Modern Comfort. Trusted Safety. Natural Touch</h2>
            <p className="fs-5 text-muted mb-5">
              Swathi Sri Residency blends modern comforts with eco-conscious living and vibrant community life.
            </p>
            <div className="row g-4">


              <div className="col-md-4">
                <i className="bi bi-people-fill fs-1 text-success"></i>
                <h5 className="mt-3">Vibrant Community</h5>
                <p className="text-muted">Friendly neighbors, events, and shared green spaces that bring people together.</p>
              </div>


              <div className="col-md-4">
                <i className="bi bi-sun-fill fs-1 text-warning"></i>
                <h5 className="mt-3">Eco-Friendly Living</h5>
                <p className="text-muted">Solar power, recycling, and water conservation integrated into daily life.</p>
              </div>


              <div className="col-md-4">
                <i className="bi bi-shield-lock-fill fs-1 text-danger"></i>
                <h5 className="mt-3">24/7 Security</h5>
                <p className="text-muted">CCTV, secure access, and round-the-clock protection for peace of mind.</p>
              </div>

              <div className="col-md-4">
                <i className="bi bi-wifi fs-1 text-info"></i>
                <h5 className="mt-3">Modern Amenities</h5>
                <p className="text-muted">High-speed internet, smart systems, and responsive maintenance.</p>
              </div>


              <div className="col-md-4">
                <i className="bi bi-phone fs-1 text-primary"></i>
                <h5 className="mt-3">Smart Home Features</h5>
                <p className="text-muted">Remote control for lights, temperature, and home security systems.</p>
              </div>


            </div>
          </div>
        </section>
      </div>
 */}




      <div className="container-fluid my-4">
        <div className="row">
          {/* Left Column - 6 Images */}
          <div className="col-lg-7">
            <div
              className="img-grid d-grid gap-3 rounded-3"
              style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
              {[homebad1, homebad2, bad1, bad6, bad7, bad8].map((src, index) => (
                <div key={index} className="overflow-hidden rounded shadow-sm">
                  <img
                    src={src}
                    alt={`Luxury ${index + 1}`}
                    className="w-100 img-hover-effect"
                    style={{
                      height: "160px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="col-lg-5 d-flex flex-column justify-content-center px-4 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">Experience Luxury</h2>
            <p className="fs-5 text-muted">
              Indulge in world-class amenities and unparalleled comfort at{" "}
              <strong>Swathi Sri Residency</strong>. Our luxurious accommodations
              and exceptional services ensure a memorable stay.
            </p>
            <Link to="/contact" className="btn btn-outline-primary btn-md mt-3">
              Get in Touch with Us
            </Link>
          </div>
        </div>
      </div>




      {/* Testimonial Carousel */}

      {/* Testimonial Carousel */}
      <section className="py-5 bg-light mb-3" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">What Our Residents Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner text-center">

              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p className="mb-4">“Swathi Sri Residency is a peaceful and welcoming place to live. We feel truly at home here.”</p>
                  <footer className="blockquote-footer">Ananya</footer>
                </blockquote>
              </div>

              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p className="mb-4">“The community atmosphere and amenities are fantastic. We're so glad we moved in!”</p>
                  <footer className="blockquote-footer">Rahul</footer>
                </blockquote>
              </div>

              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p className="mb-4">“Great location and well-built homes. It’s everything we were looking for.”</p>
                  <footer className="blockquote-footer">Meera</footer>
                </blockquote>
              </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-success text-white text-center rounded-5" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold">Reserve Your Stay Now!</h2>
          <p className="lead">Experience comfort and luxury — book your perfect room today before it's gone.</p>
          <Link to="/contact" className="btn btn-light btn-lg mt-3">Contact Reception</Link>
        </div>
      </section>


    </div>
  );
}

export default Home;
