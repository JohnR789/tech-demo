import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuOverlay.css";

// Autumn preview images for left links (adjust paths to match your images)
const leftLinks = [
  {
    to: "/",
    label: "Home",
    preview: "/previews/autumn-home.jpg",
  },
  {
    to: "/about",
    label: "About John",
    preview: "/previews/autumn-about.jpg",
  },
  {
    to: "/listings",
    label: "Exclusive Listings",
    preview: "/previews/autumn-listings.jpg",
  },
  {
    to: "/sold",
    label: "Sold Listings",
    preview: "/previews/autumn-sold.jpg",
  },
  {
    to: "/collective",
    label: "Global Collective™",
    preview: "/previews/autumn-collective.jpg",
  },
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
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  return (
    <div
      className={`menu-overlay${open ? " open" : ""}`}
      tabIndex={open ? 0 : -1}
      aria-hidden={!open}
      aria-modal="true"
      role="dialog"
    >
      <button
        ref={closeBtnRef}
        className="menu-overlay-close"
        onClick={onClose}
        aria-label="Close Menu"
        tabIndex={open ? 0 : -1}
      >
        <span>&times;</span>
      </button>
      <div className="menu-overlay-decor decor-top" />
      <div className="menu-overlay-decor decor-bottom" />

      <div className="menu-overlay-content">
        <div className="menu-overlay-col menu-overlay-left">
          {leftLinks.map((link, idx) => (
            <div
              key={link.to}
              className="menu-overlay-link-row"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                to={link.to}
                className={`menu-overlay-link${location.pathname === link.to ? " active" : ""}${hoveredIdx === idx ? " hovered" : ""}`}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </Link>
              {link.preview && hoveredIdx === idx && (
                <div className="menu-overlay-preview-image">
                  <img src={link.preview} alt="" draggable="false" />
                </div>
              )}
            </div>
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
        </div>
      </div>

{/* Centered Contact button as a maple leaf SVG button */}
<div className="menu-overlay-contact-btn-row">
  <Link
    to="/contact"
    className="menu-overlay-contact-leaf-btn"
    onClick={onClose}
    tabIndex={open ? 0 : -1}
    aria-label="Contact"
  >
    <span className="contact-leaf-label">Contact</span>
    <svg className="contact-btn-leaf" viewBox="0 0 100 100" width="112" height="112" aria-hidden="true">
      {/* Gold base (always visible) */}
      <path
        className="contact-btn-leaf-path-base"
        d="M50 6 L62 36 L96 26 L70 52 L90 58 L60 64 L78 82 L54 70 L50 98 L46 70 L22 82 L40 64 L10 58 L30 52 L4 26 L38 36 Z"
      />
      {/* White animated trace */}
      <path
        className="contact-btn-leaf-path-animate"
        d="M50 6 L62 36 L96 26 L70 52 L90 58 L60 64 L78 82 L54 70 L50 98 L46 70 L22 82 L40 64 L10 58 L30 52 L4 26 L38 36 Z"
      />
    </svg>
  </Link>
</div>

      <div className="menu-overlay-bg-logo">
        <img src="/logo192.png" alt="" draggable="false" />
      </div>
    </div>
  );
};

export default MenuOverlay;



