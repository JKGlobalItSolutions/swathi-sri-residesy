import React, { useState } from 'react';

function Contact() {
  // State for form
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    roomType: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Voice function
  const speakSuccess = (name) => {
    const message = `${name}, your Room booking is successful. Welcome to Swathi Sri Residency!  `;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = 1;
    utterance.rate = 0.9;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger voice
    speakSuccess(form.name);

    // WhatsApp message
    const whatsappText = `Hello, I'm ${form.name}. My email is ${form.email}, phone: ${form.phone}. 
    Check-in: ${form.checkin}, Check-out: ${form.checkout}, Guests: ${form.guests}, Room Type: ${form.roomType}. 
     Message: ${form.message}`.replace(/\n/g, '');

    const whatsappLink = `https://wa.me/919442614126?text=${encodeURIComponent(whatsappText)}`;

    // Delay redirect to let voice complete
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 2000);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2 className='fw-bold'>Contact Us</h2>
      <p className='fs-5'>Have questions or want to schedule a visit? We'd love to hear from you!</p>

      <div className="row">
        {/* Form Section */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                name="checkin"
                value={form.checkin}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                name="checkout"
                value={form.checkout}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="guests"
                placeholder="Number of Guests"
                value={form.guests}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="mb-3">
              <select
                className="form-control"
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select Room Type</option>
                <option value="four">Four Bed</option>
                <option value="three">Three Bed</option>
                <option value="two">Two Bed</option>
                <option value="single">single Bed</option>
              </select>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary px-4">
              Book Now
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h4 className='fw-bold '>Find Us</h4>
      
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.233513186169!2d79.0695379!3d12.232462100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc088cf11b2ad%3A0xee5172655e5984a!2sSwathiSri%20Residency!5e0!3m2!1sen!2sin!4v1746789741713!5m2!1sen!2sin"
  width="100%"
  height="470"
  className="rounded-2"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Map"
></iframe>

      
        </div>
      </div>
    </div>
  );
}

export default Contact;
