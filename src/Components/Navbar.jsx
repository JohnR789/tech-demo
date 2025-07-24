import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScroll = useRef(window.scrollY);

  const location = useLocation();

  // Floating nav logic (hide on scroll down, show on scroll up)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const current = window.scrollY;
      // Only hide nav after scrolling 90px (change if you want)
      if (current > lastScroll.current && current > 90 && !menuOpen) {
        setVisible(false); // Hide when scrolling down
      } else {
        setVisible(true); // Show when scrolling up
      }
      lastScroll.current = current;

      // Scroll progress bar logic
      const docHeight = document.body.scrollHeight - window.innerHeight;
      let scrolled = 0;
      if (docHeight > 0) {
        scrolled = (current / docHeight) * 100;
      }
      setScrollProgress(scrolled);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar${menuOpen ? " overlay-open" : ""}${
          visible ? " show" : " hide-up"
        }`}
        aria-label="Main Navigation"
      >
        {/* Scroll progress bar */}
        <div
          className="navbar-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        <div className="navbar-container">
          <Link to="/" className="navbar-logo-link" tabIndex={0}>
            <img src="/logo.png" alt="Autumn Realty Logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">Autumn Realty</span>
          </Link>
          <div className="navbar-links-desktop" role="navigation" aria-label="Primary">
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              About
            </Link>
            <Link to="/listings" className={location.pathname === "/listings" ? "active" : ""}>
              Listings
            </Link>
            <Link to="/communities" className={location.pathname === "/communities" ? "active" : ""}>
              Communities
            </Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </div>
          <button
            className="navbar-hamburger"
            aria-label="Open Menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            tabIndex={0}
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


