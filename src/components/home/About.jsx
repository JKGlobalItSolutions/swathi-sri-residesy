import React from "react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
// import { about } from "../data/Data";?

import img1 from "./about-1.jpg";
import img2 from "./about-2.jpg";
import img3 from "./about-3.jpg";
import img4 from "./about-4.jpg";





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
                    src={img1}
                    alt="Swathi Sri Residency Front View"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.2s"
                    src={img2}
                    alt="Twin Bed Room"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={img3}
                    alt="Comfortable Room"
                  />
                </div>

                <div className="col-6">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.4s"
                    src={img4}
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
