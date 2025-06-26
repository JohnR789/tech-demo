import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Listen for scroll to set nav background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active link (for desktop nav)
  const activeLink = (to) => (location.pathname === to ? "active" : "");

  return (
    <>
      <nav className={`navbar${isScrolled || location.pathname !== "/" ? " solid" : " transparent"}`}>
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
            <span className="brand">Autumn Realty</span>
          </Link>
        </div>
        <ul className="navbar-links">
          <li className="hide-on-mobile"><Link to="/about" className={activeLink("/about")}>About</Link></li>
          <li className="hide-on-mobile"><Link to="/listings" className={activeLink("/listings")}>Listings</Link></li>
          <li className="hide-on-mobile"><Link to="/press" className={activeLink("/press")}>Press</Link></li>
          <li className="hide-on-mobile"><Link to="/contact" className={activeLink("/contact")}>Contact</Link></li>
        </ul>
        <div
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          tabIndex={0}
          onClick={() => setMenuOpen(true)}
          onKeyDown={(e) => (e.key === "Enter" ? setMenuOpen(true) : null)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;

