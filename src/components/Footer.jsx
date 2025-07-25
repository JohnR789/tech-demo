import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <img src="/logo192.png" alt="Autumn Realty Logo" className="footer-logo" />
      <span className="footer-text">
        &copy; {new Date().getFullYear()} Autumn Realty. Luxury Real Estate Demo.
      </span>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
