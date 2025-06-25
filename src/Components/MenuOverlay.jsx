import React from "react";
import { Link } from "react-router-dom";
import "./MenuOverlay.css";

const socialIcons = [
  // You can use SVGs or emojis for demo!
  { href: "https://instagram.com", label: "Instagram", icon: "📸" },
  { href: "https://facebook.com", label: "Facebook", icon: "👍" },
  { href: "https://twitter.com", label: "Twitter", icon: "🐦" },
];

const MenuOverlay = ({ open, onClose }) => (
  <div className={`menu-overlay${open ? " open" : ""}`}>
    <button className="close-btn" onClick={onClose} aria-label="Close Menu">&times;</button>
    <div className="menu-links">
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/about" onClick={onClose}>About</Link>
      <Link to="/listings" onClick={onClose}>Listings</Link>
      <Link to="/press" onClick={onClose}>Press</Link>
      <Link to="/contact" onClick={onClose}>Contact</Link>
    </div>
    <div className="menu-socials">
      {socialIcons.map((icon, i) => (
        <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer" title={icon.label}>
          <span style={{ fontSize: "2rem" }}>{icon.icon}</span>
        </a>
      ))}
    </div>
  </div>
);

export default MenuOverlay;
