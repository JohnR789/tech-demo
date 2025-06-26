import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuOverlay.css";

// Left/Right links can be adjusted to match your navigation
const leftLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About John" },
  { to: "/listings", label: "Exclusive Listings" },
  { to: "/sold", label: "Sold Listings" },
  { to: "/collective", label: "Global Collective™" },
];

const rightLinks = [
  { to: "/communities", label: "Communities" },
  { to: "/search", label: "Home Search" },
  { to: "/forsale", label: "Homes For Sale" },
  { to: "/news", label: "News" },
  { to: "/blog", label: "Blog" },
  { to: "/alliance", label: "International Luxury Alliance" },
  { to: "/elite", label: "Elite Global Agents" },
  { to: "/account", label: "My Account" },
];

const MenuOverlay = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "");
    }
  }, [open]);

  const location = useLocation();

  return (
    <div className={`menu-overlay${open ? " open" : ""}`} tabIndex={open ? 0 : -1} aria-hidden={!open}>
      <button className="menu-overlay-close" onClick={onClose} aria-label="Close Menu">
        <span>&times;</span>
      </button>
      {/* Soft autumnal gold/fade ovals for design luxury */}
      <div className="menu-overlay-decor decor-top" />
      <div className="menu-overlay-decor decor-bottom" />

      <div className="menu-overlay-content">
        <div className="menu-overlay-col menu-overlay-left">
          {leftLinks.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={`menu-overlay-link${location.pathname === link.to ? " active" : ""}`}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="menu-overlay-col menu-overlay-right">
          {rightLinks.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              className={`menu-overlay-link${location.pathname === link.to ? " active" : ""}`}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="menu-overlay-contact-btn" onClick={onClose} tabIndex={open ? 0 : -1}>
            Contact
          </Link>
        </div>
      </div>
      <div className="menu-overlay-bg-logo">
        <img src="/logo192.png" alt="" draggable="false" />
      </div>
    </div>
  );
};

export default MenuOverlay;


