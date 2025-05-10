import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// AC room images
import single from '../assets/image/homepage/bad2.jpeg';
import homebad1 from '../assets/image/homepage/bad1.jpeg';
import homebad2 from '../assets/image/homepage/bad3.jpeg';
import homebad4 from '../assets/image/homepage/bad4.jpeg';

// Non-AC room images
import nonsingle from '../assets/image/homepage/nonac/one.jpeg';
import nonbad2 from '../assets/image/homepage/nonac/two.jpeg';
import nonbad3 from '../assets/image/homepage/nonac/three.jpeg';
import nonbad4 from '../assets/image/homepage/nonac/four.jpeg';

function Rooms() {
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const roomList = [
    // Non-AC rooms
    { src: nonsingle, alt: "Single  Bed", price: "", type: "Non-AC" },
    { src: nonbad2, alt: " Double Bad", price: "", type: "Non-AC" },
    { src: nonbad3, alt: "Triple Beds ", price: "", type: "Non-AC" },
    { src: nonbad4, alt: "Four Beds", price: "", type: "Non-AC" },

    // AC rooms
    { src: single, alt: "Single Bed", price: "", type: "AC" },
    { src: homebad1, alt: "Double Beds", price: "", type: "AC" },
    { src: homebad2, alt: "Triple Beds ", price: "", type: "AC" },
    { src: homebad4, alt: "Four Beds", price: "", type: "AC" },
  ];

  const handleBooking = () => {
    navigate("/contact");
  };

  // const renderRoomCards = (type) => (
  //   <div className="row g-4 mb-5">
  //     {roomList
  //       .filter((room) => room.type === type)
  //       .map((room, idx) => (
  //         <div
  //           className="col-sm-6 col-md-4"
  //           key={idx}
  //           data-aos="fade-up"
  //           data-aos-delay={idx * 100}
  //         >
  //           <img
  //             src={room.src}
  //             alt={room.alt}
  //             className="img-fluid rounded shadow-sm"
  //             style={{ cursor: "pointer" }}
  //             onClick={() => setModalImage(room)}
  //           />
  //           <div className="mt-2 text-center">
  //             <strong>{room.alt}</strong>
  //             <div className="text-muted">{room.price}</div>
  //             <button
  //               className="btn btn-primary  btn mt-2"
  //               onClick={handleBooking}
  //             >
  //               Book Now
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //   </div>
  // );


  const renderRoomCards = (type) => (
    <div className="row g-4 mb-5">
      {roomList
        .filter((room) => room.type === type)
        .map((room, idx) => (
          <div
            className="col-sm-6 col-md-4"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div
              className="border rounded-4 shadow-sm overflow-hidden h-100 bg-white room-card"
              style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onClick={() => setModalImage(room)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={room.src}
                alt={room.alt}
                className="img-fluid w-100"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="p-3 text-center">
                <h6 className="fw-bold mb-1">{room.alt}</h6>
                <div className="text-muted small mb-2">{room.price || "Comfortable & Clean"}</div>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBooking();
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  


  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold" data-aos="fade-down">Our Rooms</h2>
          <p className="text-center mb-5 fs-5" data-aos="fade-up">
            Choose from our range of comfortable and elegant rooms designed for your perfect stay at Swathi Sri Residency.
          </p>

          <h4 className="mb-3 fw-bold" data-aos="fade-right">AC Rooms  ❄️</h4>
          {renderRoomCards("AC")}

          <h4 className="mb-3 fw-bold" data-aos="fade-right">Non-AC Rooms <i class="bi bi-sun"></i></h4>
          {renderRoomCards("Non-AC")}

          <div className="d-flex justify-content-center mt-4" data-aos="zoom-in">
            <Link to="/gallery">
              <button className="btn btn-outline-primary btn">Go to Gallery</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1050,
          }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0 flex-column align-items-start">
                <h5 className="text-white mb-0">{modalImage.alt}</h5>
                <small className="text-light">{modalImage.price}</small>
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={() => setModalImage(null)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={modalImage.src}
                  alt={modalImage.alt}
                  className="img-fluid w-100 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;
