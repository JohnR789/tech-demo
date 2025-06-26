import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero" id="hero">
    {/* Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="hero-bg"
      poster="/autumn-hero-fallback.jpg"
    >
      <source src="/bg-video.mp4" type="video/mp4" />
      {/* Place a royalty-free mp4 named bg-video.mp4 in /public */}
    </video>

    {/* Overlay Content */}
    <div className="hero-content">
      <h1 data-aos="fade-up">
        Autumn Estates —<br />
        Luxury Living Awaits
      </h1>
      <p data-aos="fade-up" data-aos-delay="180">
        Discover your dream home with our world-class service.<br />
        Where every season feels like home.
      </p>
      <a
        href="#listings"
        className="hero-btn"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        View Listings
      </a>
    </div>

    {/* Animated Chevron */}
    <button
      className="chevron-down"
      aria-label="Scroll Down"
      onClick={() => {
        const el = document.getElementById("listings");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="chevron-icon"></span>
    </button>

    {/* Overlay Fade */}
    <div className="hero-overlay" />
  </section>
);

export default Hero;
