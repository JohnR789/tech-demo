import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Automatically close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar${location.pathname === "/" ? " navbar-transparent" : ""}`}>
        <div className="navbar-logo">
          <Link to="/"><img src="/logo.png" alt="Logo" /> Autumn Realty</Link>
        </div>
        <ul className="navbar-links">
          <li className="hide-on-mobile"><Link to="/about">About</Link></li>
          <li className="hide-on-mobile"><Link to="/listings">Listings</Link></li>
          <li className="hide-on-mobile"><Link to="/press">Press</Link></li>
          <li className="hide-on-mobile"><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-hamburger" onClick={() => setMenuOpen(true)}>
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
