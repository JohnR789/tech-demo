import React from "react";

const About = () => (
  <main style={{
    paddingTop: 110,
    minHeight: "70vh",
    background: "#fffef9"
  }}>
    <div style={{
      maxWidth: 800,
      margin: "0 auto",
      textAlign: "center",
      fontFamily: "'Playfair Display', serif",
      color: "#432c12"
    }}>
      <h2 style={{
        fontSize: "2.4rem",
        fontWeight: 800,
        marginBottom: 22,
        color: "#ad5b00"
      }}>
        Meet Autumn Realty
      </h2>
      <img
        src="/logo.png"
        alt="Autumn Realty Maple Leaf Logo"
        style={{
          width: 96,
          height: 96,
          marginBottom: 18,
          objectFit: "contain",
          filter: "drop-shadow(0 6px 24px #bc682430)"
        }}
      />
      <p style={{
        fontSize: "1.19rem",
        lineHeight: 1.6,
        color: "#7d5232",
        margin: "0 auto 38px auto"
      }}>
        Autumn Realty redefines luxury living with a legacy of trust, excellence, and personalized service. 
        Serving the region’s most vibrant communities, we bring an autumn-inspired warmth to every exclusive property and client relationship.
        <br /><br />
        Our team’s attention to detail, global connections, and commitment to your vision make every home search exceptional.
      </p>
    </div>
  </main>
);

export default About;
