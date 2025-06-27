import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuOverlay.css";

const leftLinks = [
  {
    to: "/",
    label: "Home",
    previews: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    to: "/about",
    label: "About John",
    previews: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    to: "/listings",
    label: "Exclusive Listings",
    previews: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1505691723518-41cb85ee2c49?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    to: "/sold",
    label: "Sold Listings",
    previews: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    to: "/collective",
    label: "Global Collective™",
    previews: [
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3764?auto=format&fit=crop&w=400&q=80",
    ],
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

export default function MenuOverlay({ open, onClose }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const location = useLocation();
  const closeBtnRef = useRef();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  return (
    <div className={`menu-overlay${open ? " open" : ""}`}>
      <button
        className="menu-overlay-close"
        onClick={onClose}
        aria-label="Close menu"
        ref={closeBtnRef}
        tabIndex={open ? 0 : -1}
      >
        &times;
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
                className={
                  `menu-overlay-link` +
                  (location.pathname === link.to ? " active" : "") +
                  (hoveredIdx === idx ? " hovered" : "")
                }
                tabIndex={open ? 0 : -1}
                onClick={onClose}
              >
                {link.label}
              </Link>
              {/* Three autumn preview images on hover */}
              {hoveredIdx === idx && (
                <div className="menu-overlay-preview-images">
                  {link.previews.map((img, j) => (
                    <div key={j} className={`menu-overlay-preview-frame preview-${j}`}>
                      <img src={img} alt="" />
                    </div>
                  ))}
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
              className={`menu-overlay-link right-link` + (location.pathname === link.to ? " active" : "")}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Large maple leaf contact button centered */}
      <div className="menu-overlay-contact-btn-row">
        <Link
          to="/contact"
          className="menu-overlay-contact-leaf-btn"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          <span className="contact-leaf-label">Contact</span>
          <svg className="contact-btn-leaf" viewBox="0 0 112 112">
            <path
              d="M56 6 Q65 28 82 14 Q75 36 106 32 Q87 43 104 56 Q83 55 99 73 Q81 68 88 97 Q73 75 56 107 Q39 75 24 97 Q31 68 13 73 Q29 55 8 56 Q25 43 6 32 Q37 36 30 14 Q47 28 56 6 Z"
              className="contact-btn-leaf-path"
            />
          </svg>
        </Link>
      </div>
      <div className="menu-overlay-bg-logo">
        <img src="/logo192.png" alt="" />
      </div>
    </div>
  );
}




