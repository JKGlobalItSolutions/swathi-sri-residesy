import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="py-5">
          <Slider {...settings}>
            {testimonial.map((item, key) => (
              <div
                key={key}
                className="testimonial-item position-relative bg-white rounded overflow-hidden p-4 mx-2 "
              >
                <p className="mb-3">{item.description}</p>
                <div className="d-flex align-items-center">
                  <div className="ps-2">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <small>{item.profession}</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
