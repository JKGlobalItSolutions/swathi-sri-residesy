import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import AOS from "aos";
import "aos/dist/aos.css";

import img from "../pages/aboutimg.jpeg";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Heading heading="About" title="Home" subtitle="About" />
      <About />

      {/* About Intro Section */}
      <section className="py-5 bg-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">
            About Swathisri Residency
          </h2>
          <p className="text-center fs-5">
            Swathisri Residency is a modern residential complex located in a
            peaceful neighborhood. Our mission is to provide a comfortable,
            safe, and convenient living experience for individuals and families.
          </p>

          {/* Image and Features */}
          <div className="row align-items-center mt-5">
            {/* Image Column */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="fade-right"
            >
              <img
                src={img}
                alt="Swathi Sri Residency"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "630px", objectFit: "cover" }}
              />
            </div>

            {/* Features Column */}
            <div className="col-md-6" data-aos="fade-left">
              <ul className="fs-5 list-unstyled">
                <li className="mb-3">
                  🛏️ Comfortable AC Rooms with Modern Amenities
                </li>
                <li className="mb-3">
                  🧼 Daily Housekeeping for a Fresh & Clean Stay
                </li>
                <li className="mb-3">📶 Free High-Speed Wi-Fi in All Rooms</li>
                <li className="mb-3">🅿️ Secure On-Site Parking for Guests</li>
                <li className="mb-3">🔐 24/7 Front Desk & CCTV Surveillance</li>
                <li className="mb-3">📺 LED TVs with Satellite Channels</li>
                <li className="mb-3">
                  🚿 Attached Bathrooms with Hot & Cold Water
                </li>
                <li className="mb-3">🚰 24/7 Drinking Water (Hot & Cold)</li>
                <li className="mb-3">
                  🧴 Water Softener Plant for Cleaner Water
                </li>
                <li className="mb-3">
                  💧 Booster Pump for Uniform Water Pressure
                </li>
                <li className="mb-3">
                  🛗 Lift Facility for Easy Accessibility
                </li>
                <li className="mb-3">
                  📍 Convenient Location Near Transit, Shops & Hospitals
                </li>
                <li className="mb-3">
                  🛕 Located Opposite to the Arunachaleswarar Temple
                </li>
                <li className="mb-3">🧳 Easy Check-In/Check-Out Process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
