import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

// Accepts heroRef as prop
const Navbar = ({ heroRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(window.scrollY);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // If heroRef provided, use its position; otherwise fallback to pixel threshold
      if (heroRef && heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 0);
      } else {
        setScrolled(window.scrollY > 60);
      }

      const current = window.scrollY;
      if (current > lastScroll.current && current > 90 && !menuOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll.current = current;

      // Scroll progress bar logic
      const docHeight = document.body.scrollHeight - window.innerHeight;
      let scrolledPct = 0;
      if (docHeight > 0) {
        scrolledPct = (current / docHeight) * 100;
      }
      setScrollProgress(scrolledPct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check in case user reloads scrolled down
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, heroRef]);

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
        className={
          `navbar${menuOpen ? " overlay-open" : ""}` +
          `${visible ? " show" : " hide-up"}` +
          `${scrolled ? " scrolled" : ""}`
        }
        aria-label="Main Navigation"
      >
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




