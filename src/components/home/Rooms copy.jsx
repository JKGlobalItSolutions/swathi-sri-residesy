import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
// import { roomItems } from "../data/Data";
import { Link } from "react-router-dom";

import img1 from "./about-1.jpg";


export default function Rooms() {

const roomItems = [
  {
    img: "../assets/img/bad1.jpg",
    price: "₹2,000/night",
    name: "Single Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad2.jpg",
    price: "₹2,500/night",
    name: "Double Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Spacious room ideal for two guests, equipped with modern interiors.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad3.jpg",
    price: "₹3,000/night",
    name: "Triple Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Ideal for small groups or families, with all necessary comforts provided.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/bad4.jpg",
    price: "₹3,500/night",
    name: "Four Bed",
    type: "AC",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for larger families or groups, featuring multiple beds and ample space.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },

  // ✅ Corrected Non-AC rooms
  {
    img: "../assets/img/one.jpg",
    price: "₹1,500/night",
    name: "Single Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for solo travellers, offering cosy bedding and all essential amenities.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/two.jpeg",
    price: "₹2,000/night",
    name: "Double Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Spacious room ideal for two guests, equipped with modern interiors.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/three.jpg",
    price: "₹2,500/night",
    name: "Triple Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Ideal for small groups or families, with all necessary comforts provided.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
  {
    img: "../assets/img/four.jpg",
    price: "₹3,000/night",
    name: "Four Bed",
    type: "Non-AC", // ✅ Corrected
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Perfect for larger families or groups, featuring multiple beds and ample space.",
    yellowbtn: "View Details",
    darkbtn: "Book Now",
  },
];

















  const [selectedImg, setSelectedImg] = useState(null);

  const acRooms = roomItems.filter((item) => item.type === "AC");
  const nonAcRooms = roomItems.filter((item) => item.type === "Non-AC");

  const openModal = (imgUrl) => {
    setSelectedImg(imgUrl);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  const renderRoomCard = (item, index) => (
    <div
      className="col-lg-4 col-md-6 wow fadeInUp"
      data-wow-delay="0.1s"
      key={index}
    >
      <div className="room-item shadow rounded overflow-hidden">
        <div
          className="position-relative"
          onClick={() => openModal(item.img)}
          style={{ cursor: "pointer" }}
        >
          <img className="img-fluid" src={item.img} alt="room" />
          <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
            {item.price}
          </small>
        </div>
        <div className="p-4 mt-2">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{item.name}</h5>
            <div className="ps-2">
              {item.star.map((star, i) => (
                <React.Fragment key={i}>{star}</React.Fragment>
              ))}
            </div>
          </div>
          <p className="text-body mb-3">{item.description}</p>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-sm btn-dark rounded py-2 px-4"
              to="/contact"
            >
              {item.darkbtn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <CommonHeading
          heading="Our Rooms"
          title="Rooms"
          subtitle="Explore Our"
        />

        {/* AC Rooms */}
        <div className="mb-5">
          <h3 className="mb-4">❄️ AC Rooms</h3>

          <div className="row g-4">
            {acRooms.map((room, i) => renderRoomCard(room, i))}
          </div>
        </div>

        {/* Non-AC Rooms */}
        <div>
          <h3 className="mb-4">🌀 Non-AC Rooms</h3>

          <div className="row g-4">
            {nonAcRooms.map((room, i) => renderRoomCard(room, `nonac-${i}`))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {selectedImg && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
          }}
        >
          <div style={{ position: "relative", textAlign: "center" }}>
            <button
              className="btn btn-danger position-absolute rounded-circle"
              style={{ top: "50px", right: "150px", fontSize: "1.2rem" }}
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>

            <img
              src={selectedImg}
              alt="Enlarged Room"
              style={{
                marginTop: "100px",
                maxHeight: "90vh",
                maxWidth: "80vw",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
