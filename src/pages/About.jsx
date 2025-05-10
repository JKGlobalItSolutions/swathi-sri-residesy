import React from 'react';


import aboutImage from '../assets/image/about/aboutimg.jpeg';
import aboutImagedown from '../assets/image/about/aboutimgdown.jpeg';




function About() {
  return (
    <div>


      {/* About Intro Section */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">About Swathi Sri Residency</h2>
          <p className="text-center fs-5">
            Swathi Sri Residency is a modern residential complex located in a peaceful neighborhood. Our mission is to provide a comfortable, safe, and convenient living experience for individuals and families.
          </p>

          {/* Image and Content Side by Side */}
          <div className="row align-items-center  mt-5">
            {/* Image Column */}
            <div className="col-md-6 text-center mb-4 mb-md-0 w-50  " data-aos="fade-right">


              {/* <img
                src={aboutImage} 
                alt="Swathi Sri Residency"
                style={{ height: '530px', width: '100%' }}
                className="img-fluid rounded shadow"
              /> */}

              <img
                src={aboutImage}
                alt="Swathi Sri Residency"
                className="responsive-img rounded-4"
              />



            </div>

            {/* Features Column */}
            <div className="col-md-6" data-aos="fade-left">

              <ul className="fs-5 list-unstyled">
                <li className="mb-3">🛏️ Comfortable AC Rooms with Modern Amenities</li>
                <li className="mb-3">🧼 Daily Housekeeping for a Fresh & Clean Stay</li>
                <li className="mb-3">📶 Free High-Speed Wi-Fi in All Rooms</li>
                <li className="mb-3">🅿️ Secure On-Site Parking for Guests</li>
                <li className="mb-3">🔐 24/7 Front Desk & CCTV Surveillance</li>
                <li className="mb-3">📺 LED TVs with Satellite Channels</li>
                <li className="mb-3">🚿 Attached Bathrooms with Hot & Cold Water</li>
                <li className="mb-3">🍽️ In-Room Dining & Nearby Restaurant Options</li>
                <li className="mb-3">🌴 Clean & Serene Surroundings for a Peaceful Stay</li>
                <li className="mb-3">📍 Convenient Location Near Transit, Shops & Hospitals</li>
                <li className="mb-3">🧳 Easy Check-In/Check-Out Process</li>
              </ul>


            </div>
          </div>
        </div>
      </section>




      {/* Location Section */}

      {/* <div className="mt-5">
        <h2 className='text-center'>Prime Location</h2>
        <p>
          Located in a well-connected and rapidly growing neighborhood, Swathi Sri Residency is close to major schools, hospitals, shopping malls, and transport hubs, making it the perfect choice for your family.
        </p>

       
        <p>
          The residency is strategically placed, offering easy access to daily necessities, and is surrounded by lush greenery and peaceful surroundings. Whether you’re looking for recreational spaces, educational institutions, or healthcare facilities, everything is just a short distance away.
        </p>

       
        <div className="row text-center mt-4">
     
          <div className="col-md-4 mb-4">
            <img
              src={aboutImage}
              alt="Location Map"
              className="img-fluid"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2">Location Map</p>
          </div>

         
          <div className="col-md-4 mb-4">
            <img
              src={aboutImage} 
              alt="Nearby Landmark"
              className="img-fluid"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2">Nearby Landmark</p>
          </div>

          <div className="col-md-4 mb-4">
            <img
              src={aboutImage} 
              alt="Aerial View"
              className="img-fluid"
              style={{ borderRadius: '8px' }}
            />
            <p className="mt-2">Aerial View of the Area</p>
          </div>
        </div>
      </div> */}




      {/* Facilities Section */}
      <section className="mt-5">
        <h3 className='text-center fw-bold'>Our Facilities</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-emoji-smile fs-1 text-primary"></i>
            <h5 className="mt-3">Comfort Lounge</h5>
            <p>A relaxed common area for guests to unwind, read, or enjoy a casual chat in a cozy setting.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-bell fs-1 text-primary"></i>
            <h5 className="mt-3">Room Service</h5>
            <p>Prompt and courteous room service to ensure a comfortable and convenient stay.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-currency-rupee fs-1 text-primary"></i>
            <h5 className="mt-3">Value for Money</h5>
            <p>Spacious rooms and quality service at competitive prices — ideal for both short and long stays.</p>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="mt-5 bg-light py-5 p-3">
        <h3 className="text-center mb-4 fw-bold">What Our Residents Say</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "Swathi Sri Residency is the perfect place to live. The amenities are top-notch, and the location is unbeatable. I love the peace and tranquility here."
                </p>
                <footer className="blockquote-footer">John Doe, Resident</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The community is so welcoming, and the facilities make it easy for me to live comfortably. I’m really happy to call this place home."
                </p>
                <footer className="blockquote-footer">Sarah Smith, Resident</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The children's play area and green spaces make Swathi Sri Residency an ideal place for families. It's the best decision I made moving here."
                </p>
                <footer className="blockquote-footer">Michael Johnson, Resident</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image */}
      <div className="mt-5">
        <h3 className="text-center mb-5 fw-bold">Explore Our Residency</h3>
        <div className="text-center" data-aos="zoom-in">
          <img
            src={aboutImagedown} // Replace with actual image
            alt="Swathi Sri Residency"
            className="img-fluid"
            style={{ borderRadius: '8px' }}
          />
        </div>
      </div>


    </div>
  );
}

export default About;
