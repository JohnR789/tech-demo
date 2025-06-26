import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Hide on overlay menu open, or on scroll (optional: sticky nav)
  return (
    <>
      <nav className={`navbar${menuOpen ? " hide" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo-link">
            <img src="/logo192.png" alt="Autumn Realty Logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">Autumn Realty</span>
          </Link>
          {/* Hide these links on mobile */}
          <div className="navbar-links-desktop">
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            <Link to="/listings" className={location.pathname === "/listings" ? "active" : ""}>Listings</Link>
            <Link to="/communities" className={location.pathname === "/communities" ? "active" : ""}>Communities</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
          </div>
          <button
            className="navbar-hamburger"
            aria-label="Open Menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="hamburger-icon" />
          </button>
        </div>
      </nav>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;

