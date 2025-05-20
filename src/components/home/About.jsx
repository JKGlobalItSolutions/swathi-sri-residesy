import React from "react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
// import { about } from "../data/Data";?

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">
                  Swathi Sri Residency
                </span>
              </h1>
              <p className="mb-4">
                Swathi Sri Residency offers a comfortable and peaceful stay with
                well-maintained rooms designed for families, business travelers,
                and tourists. Conveniently located and thoughtfully designed,
                our residency ensures a memorable experience with modern
                amenities and warm hospitality.
              </p>

              <Link
                to="/about"
                className="btn btn-primary py-3 px-5 mt-2 rounded-4"
              >
                Explore More
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    alt="Swathi Sri Residency Front View"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.2s"
                    src="/assets/img/about-2.jpg"
                    alt="Twin Bed Room"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-3.jpg"
                    alt="Comfortable Room"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.4s"
                    src="/assets/img/about-4.jpg"
                    alt="Triple Bed Room"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
