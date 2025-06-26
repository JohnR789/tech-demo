import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuOverlay.css";

const socialIcons = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7.5" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="17.2" cy="6.8" r="1.3" fill="#fff"/>
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M17 2.1H15a5 5 0 00-5 5v2H7.2a.7.7 0 00-.7.7V12a.7.7 0 00.7.7H10v7.2c0 .4.3.7.7.7H13a.7.7 0 00.7-.7v-7.2h2.1a.7.7 0 00.7-.7v-2.2a.7.7 0 00-.7-.7H13.7v-1.6a2 2 0 012-2h1.3a.7.7 0 00.7-.7V2.8a.7.7 0 00-.7-.7z" fill="#fff"/>
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M22 5.92a8.09 8.09 0 01-2.36.65A4.1 4.1 0 0021.4 4.2a8.2 8.2 0 01-2.6 1A4.1 4.1 0 0012 8.4c0 .32.03.64.09.95A11.64 11.64 0 013 5.1a4.1 4.1 0 001.27 5.47A4.04 4.04 0 012.8 9.8v.05A4.1 4.1 0 004.1 14a4.09 4.09 0 01-1.85.07A4.1 4.1 0 008.1 18a8.24 8.24 0 01-5.09 1.76A8.39 8.39 0 012 19.8a11.59 11.59 0 006.29 1.85c7.54 0 11.67-6.25 11.67-11.67 0-.18-.01-.37-.02-.55A8.34 8.34 0 0022 5.92z" fill="#fff"/>
      </svg>
    ),
  },
];

const MenuOverlay = ({ open, onClose }) => {
  const location = useLocation();
  const activeLink = (to) => (location.pathname === to ? "active" : "");

  return (
    <div className={`menu-overlay${open ? " open" : ""}`}>
      <button className="close-btn" onClick={onClose} aria-label="Close Menu">&times;</button>
      <div className="menu-links">
        <Link to="/" onClick={onClose} className={activeLink("/")}>Home</Link>
        <Link to="/about" onClick={onClose} className={activeLink("/about")}>About</Link>
        <Link to="/listings" onClick={onClose} className={activeLink("/listings")}>Listings</Link>
        <Link to="/press" onClick={onClose} className={activeLink("/press")}>Press</Link>
        <Link to="/contact" onClick={onClose} className={activeLink("/contact")}>Contact</Link>
      </div>
      <div className="menu-socials">
        {socialIcons.map((icon, i) => (
          <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer" title={icon.label}>
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
