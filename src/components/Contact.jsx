import React, { useState } from "react";
import "../styles/styles.css";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  validation
    if (!contactData.name || !contactData.email || !contactData.message) {
      setError("Please fill out all required fields.");
      setSuccess("");
      return;
    }

    // Assuming the submission is successful
    setSuccess("Your message has been sent successfully!");
    setError("");

    // Reset the form data 
    setContactData({
      name: "",
      email: "",
      message: "",
    });

    console.log("Contact form submitted:", contactData);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
      </header>

      <section className="contact-form-section">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={contactData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </section>

      <section className="contact-info-section">
        <h2>Our Location</h2>
        <div className="contact-info">
          <div className="contact-details">
            <h3>Address</h3>
            <p>123 Dental Street, Smile City, SM 12345</p>

            <h3>Phone</h3>
            <p>(123) 456-7890</p>

            <h3>Email</h3>
            <p>info@dentalcare.com</p>
          </div>
          <div className="contact-map">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196278497935!2d-122.41941528436642!3d37.77492977975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f1b0d92d%3A0xf8b5f9f85f2d8e93!2s123%20Dental%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sus!4v1594376407490!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
