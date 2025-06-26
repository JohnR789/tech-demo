import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero" id="hero">
    <video autoPlay muted loop playsInline className="hero-bg">
      <source src="/bg-video.mp4" type="video/mp4" />
    </video>
    <div className="hero-content">
      <h1 data-aos="fade-up">Luxury Autumn Estates</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Discover world-class homes and legendary service.
      </p>
      <a href="#listings" className="hero-btn" data-aos="fade-up" data-aos-delay="400">
        View Listings
      </a>
    </div>
    <div className="hero-overlay" />
  </section>
);

export default Hero;

