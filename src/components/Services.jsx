import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../styles/styles.css";

import ServicesImage from "../assets/ServicesImage.jpg";
import teethCleaningImage from "../assets/teeth-cleaning.jpg";
import cavityPreventionImage from "../assets/cavity-prevention.jpg";
import orthodonticsImage from "../assets/orthodontics.jpg";

function Services() {
    const services = [
        {
            image: teethCleaningImage,
            title: "Teeth Cleaning",
            description: "Regular teeth cleanings are essential to remove plaque, prevent cavities, and keep your smile healthy.",
            details: "Our teeth cleaning services are thorough and gentle, ensuring your comfort. We use the latest techniques to remove tartar and stains, leaving your teeth feeling fresh and clean.",
        },
        {
            image: cavityPreventionImage,
            title: "Cavity Prevention",
            description: "Prevent cavities before they start with our comprehensive exams and preventive treatments.",
            details: "We offer fluoride treatments, sealants, and regular check-ups to help you maintain strong, healthy teeth. Our focus is on prevention, helping you avoid the need for fillings and other invasive procedures.",
        },
        {
            image: orthodonticsImage,
            title: "Orthodontics",
            description: "Achieve the perfect smile with our customized orthodontic treatment plans.",
            details: "Whether you need traditional braces, clear aligners, or other orthodontic solutions, our experienced team is here to guide you through the process. We'll work with you to create a treatment plan that fits your lifestyle and goals.",
        },
    ];

    return (
        <div className="services-container">
            <section className="hero-section">
                <img src={ServicesImage} alt="Modern dental office" className="hero-image" />
                <div className="hero-text">
                    <h1>Dental Services</h1>
                    <p>Providing top-notch dental care to keep your smile healthy and beautiful.</p>
                </div>
            </section>

            <section className="services-section">

                <div className="service-cards">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <details>
                                <summary>Learn More</summary>
                                <p>{service.details}</p>
                            </details>
                            <Link to="/book">
                                <button className="book-appointment-btn">Book Appointment</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;
