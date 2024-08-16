import React from "react";
import "../styles/styles.css";

import heroImage from "../assets/modern-dental-office.jpg";
import Homeimage from "../assets/Homeimage.jpg";
import teethCleaningImage from "../assets/teeth-cleaning.jpg";
import cavityPreventionImage from "../assets/cavity-prevention.jpg";
import orthodonticsImage from "../assets/orthodontics.jpg";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <img src={heroImage} alt="Modern dental office" className="hero-image" />
        <h1>Welcome to SmileBright Dental</h1>
        <p>Your smile, our commitment.</p>
      </section>
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={teethCleaningImage} alt="Teeth Cleaning" />
            <h3>Teeth Cleaning</h3>
            <p>Keep your smile bright with regular cleaning sessions from our experts.</p>
          </div>
          <div className="service-card">
            <img src={cavityPreventionImage} alt="Cavity Prevention" />
            <h3>Cavity Prevention</h3>
            <p>Comprehensive cavity checks and treatments to maintain your oral health.</p>
          </div>
          <div className="service-card">
            <img src={orthodonticsImage} alt="Orthodontics" />
            <h3>Orthodontics</h3>
            <p>Straighten your teeth with our expert orthodontic services.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"The team at SmileBright Dental is wonderful. I felt comfortable from the moment I walked in and am thrilled with the results!"</p>
            <h4>- Emma Watson</h4>
          </div>
          <div className="testimonial">
            <p>"Absolutely the best dental care I have ever received. I recommend SmileBright to everyone looking for a professional team that cares."</p>
            <h4>- James Johnson</h4>
          </div>
        </div>
      </section>

      <section className="about-us-preview">
        <h2>About Us</h2>
        <p>Learn more about our dedicated team and our journey to make dental care accessible for everyone. Our experts are leaders in modern dental healthcare.</p>
        <a href="/about" className="learn-more-link">Learn More</a>
      </section>
    </div>
  );
}

export default Home;
