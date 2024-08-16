import React from "react";
import "../styles/styles.css";
// Import images from the assets folder
import JoyelImage from "../assets/joyel-johny.jpg";
import AgnusImage from "../assets/agnus-mable-cleetus.jpg";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover more about our dental practice and services.</p>
      </header>

      <section className="about-overview">
        <h2>Our Story</h2>
        <p>
          At DentalCare, we are committed to providing the best dental services
          to our clients. Our journey started a decade ago with a vision to
          revolutionize dental care with state-of-the-art technology and
          personalized care. Over the years, we've grown into a trusted
          community partner, known for our compassion and dedication to
          excellence.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul className="values-list">
          <li>
            <strong>Patient-Centered Care:</strong> We place our patients' needs
            at the forefront of everything we do, ensuring a comfortable and
            positive experience.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace the latest dental
            technologies and techniques to provide the most effective and
            efficient treatments.
          </li>
          <li>
            <strong>Integrity:</strong> We uphold the highest ethical standards
            in our practice, building trust with our patients and community.
          </li>
        </ul>
      </section>

      <section className="about-achievements">
        <h2>Our Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <h3>Award-Winning Care</h3>
            <p>
              Recognized as a top dental practice in the region, receiving
              numerous accolades for our commitment to patient satisfaction and
              clinical excellence.
            </p>
          </div>
          <div className="achievement-item">
            <h3>Advanced Dental Technology</h3>
            <p>
              Pioneers in adopting cutting-edge dental technology, ensuring
              precise and pain-free procedures for all our patients.
            </p>
          </div>
          <div className="achievement-item">
            <h3>Community Involvement</h3>
            <p>
              Actively engaged in community outreach programs, offering free
              dental care days and educational workshops on oral health.
            </p>
          </div>
        </div>
      </section>


      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img
              src={JoyelImage}
              alt="Dr. Joyel Johny"
              className="team-photo"
            />
            <h4>Dr. Joyel Johny</h4>
            <p>Chief Dentist</p>
            <p>
              With over 15 years of experience, Dr. Joyel Johny leads our team
              with a passion for dental excellence and patient care.
            </p>
          </div>
          <div className="team-member">
            <img
              src={AgnusImage}
              alt="Dr. Agnus Mable Cleetus"
              className="team-photo"
            />
            <h4>Dr. Agnus Mable Cleetus</h4>
            <p>Orthodontist</p>
            <p>
              Specializing in orthodontics, Dr. Agnus has transformed countless
              smiles with her expertise in braces and clear aligners.
            </p>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "The team at DentalCare is amazing. I had a great experience with
            their professional and friendly staff."
          </p>
          <h4>- Justin Janson</h4>
        </div>
        <div className="testimonial">
          <p>
            "The best dental care I have ever experienced! Professional,
            courteous, and friendly staff made me feel like family… would highly
            recommend to anyone!"
          </p>
          <h4>- Majida K</h4>
        </div>
        <div className="testimonial">
          <p>
            "Their commitment to community service is truly inspiring. I
            attended one of their free dental care days, and the experience was
            exceptional. Thank you, DentalCare!"
          </p>
          <h4>- Sarah P.</h4>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need to schedule an appointment? Reach out to us at
          (555) 123-4567 or visit our contact page for more information.
        </p>
      </section>
    </div>
  );
}

export default About;
