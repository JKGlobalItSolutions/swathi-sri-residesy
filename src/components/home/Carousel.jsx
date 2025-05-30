import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { carouselData } from "../data/Data";
import { Link } from "react-router-dom";

import img from "./carousel-1.jpg";
import img1 from "./carousel-2.jpg";


export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };





const carouselData = [
  {
    img: img,
    title: "Discover A Brand Luxurious Rooms",
    subtitle: "luxury living",
    btn1: "View Room",
    btn2: "Book Room",

    link1: "/rooms", 
    link2: "/contact",
  },

  {
    img: img1,
    title: "Discover A Brand Luxurious Rooms",
    subtitle: "luxury living",
    btn1: "View Room",
    btn2: "Book Room",
    
    link1: "/rooms", 
    link2: "/contact",
  },
  
];



  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <Slider ref={sliderRef} {...settings}>
            {carouselData.map((val, index) => (
              <div className="carousel-item" key={index}>
                <img className="w-100" src={val.img} alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                      {val.subtitle}
                    </h6>
                    <h1 className="display-3 text-white mb-4 animated slideInDown">
                      {val.title}
                    </h1>
                    {/* Responsive button container */}
                   
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
                      <Link
                        to={val.link1}
                        className="btn btn-primary py-md-3 px-md-5 animated slideInLeft mt-2"
                      >
                        {val.btn1}
                      </Link>
                      <Link
                        to={val.link2}
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight mt-2"
                      >
                        {val.btn2}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={previous}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={next}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
