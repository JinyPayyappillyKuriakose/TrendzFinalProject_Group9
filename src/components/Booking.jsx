import React, { useState } from "react";
import "../styles/styles.css";
import Kid from "../assets/Kid.jpg";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setError("Please fill out all required fields.");
      setSuccess("");
      return;
    }

    // Assuming the submission is successful
    setSuccess("Appointment booked successfully!");
    setError("");

    // Reset the form 
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      message: "",
    });

    console.log("Form submitted:", formData);
  };

  return (
    <section className="booking-section">
      <section className="hero-section">
        <img src={Kid} alt="Modern dental office" className="hero-image" />
      </section>
      <center><h2>Book an Appointment</h2> </center>

      <div className="booking-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

          <button type="submit">Book Appointment</button>
        </form>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </div>
    </section>
  );
}

export default Booking;
