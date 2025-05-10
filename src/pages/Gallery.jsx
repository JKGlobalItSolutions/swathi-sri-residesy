import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import all images dynamically using import.meta.glob
const imageModules = import.meta.glob('../assets/image/homepage/*.{webp,jpg,jpeg,png,svg}', {
  eager: true,
});


function Gallery() {


  const [modalImage, setModalImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animate only once when it scrolls into view
    });

    // Cleanup on component unmount
    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    const images = Object.keys(imageModules).map((key, index) => ({
      src: imageModules[key].default,
      alt: `Room ${index + 1}`,
    }));
    setGalleryImages(images);
  }, []);




  return (
    <div>
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container-fluid">
          <h2 className="text-center mb-4 fw-bold">Gallery</h2>
          <p className="text-center mb-5 fs-5">
            Discover the elegance of Swathi Sri Residency through our gallery showcasing beautiful spaces and vibrant living.
          </p>
          <div className="row g-4">
            {galleryImages.map((img, idx) => (
              <div
                className="col-sm-6 col-md-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div
                  className="bg-light rounded overflow-hidden position-relative shadow-sm"
                  style={{ height: "250px", cursor: "pointer" }}
                  onClick={() => setModalImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "filter 0.3s ease",
                      filter: "blur(8px)",
                    }}
                    onLoad={(e) => {
                      e.target.style.filter = "none";
                    }}
                  />
                </div>
              </div>
            ))}
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
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <h5 className="text-white">{modalImage.alt}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
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

export default Gallery;
