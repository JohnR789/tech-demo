import React, { useState } from "react";
import "./MenuOverlay.css";


// LEFT: main links with luxury flying image previews
const menuLinks = [
  {
    label: "Home",
    href: "/",
    images: [
    "/community4.png",
    "/community5.png",
    "/community6.png",
    ],
  },
  {
    label: "Exclusive Listings",
    href: "/properties/sale",
    images: [
      "/house1.png",
      "/house2.png",
      "/house3.png",
    ],
  },
  {
    label: "Exclusive Listings",
    href: "/properties/sale",
    images: [
      "/house4.png",
      "/house5.png",
      "/house6.png",
    ],
  },
  {
    label: "Sold Listings",
    href: "/properties/sold",
    images: [
      "/house7.png",
      "/house8.png",
      "/house9.png",
    ],
  },
  {
    label: "Autumn Collective",
    href: "/properties/autumn-collective",
    images: [
      "/community1.png",
      "/community2.png",
      "/community3.png",
    ],
  },
];

// RIGHT: Jade-style secondary menu
const rightMenuLinks = [
  { label: "Communities", href: "/communities" },
  { label: "Home Search", href: "/search" },
  { label: "Homes For Sale", href: "/forsale" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "International Luxury Alliance", href: "/international" },
  { label: "Elite Global Agents", href: "/agents" },
  { label: "My Account", href: "/account" },
];

const MenuOverlay = ({ open, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Only show previews if menu is open and a link is hovered
  const showPreviews = open && hoveredIndex !== null;

  return (
    <div className={`menu-overlay${open ? " open" : ""}`} tabIndex={-1} role="dialog" aria-modal="true">
      <button
        className="menu-overlay-close"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      >
        &times;
      </button>

      <div className="menu-overlay-content">
        {/* Left: Main links */}
        <div className="menu-overlay-col menu-overlay-left">
          {menuLinks.map((link, idx) => (
            <div
              className="menu-overlay-link-row"
              key={link.label}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
            >
              <a
                href={link.href}
                className={`menu-overlay-link${hoveredIndex === idx ? " hovered" : ""}`}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </a>
              {/* Ultra flying preview images */}
              {showPreviews && hoveredIndex === idx && (
                <div className="menu-overlay-previews-ultra">
                  <div className="preview-image ultra-preview-1">
                    <img src={link.images[0]} alt="" />
                  </div>
                  <div className="preview-image ultra-preview-2">
                    <img src={link.images[1]} alt="" />
                  </div>
                  <div className="preview-image ultra-preview-3">
                    <img src={link.images[2]} alt="" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center: Contact button, always vertically centered */}
        <div className="menu-overlay-contact-btn-center">
          <a href="/contact" className="menu-overlay-contact-leaf-btn" tabIndex={open ? 0 : -1}>
            <span className="contact-leaf-label">Contact</span>
            <svg className="contact-btn-leaf" viewBox="0 0 120 120" fill="none">
              <path
                className="contact-btn-leaf-path"
                d="M60 7C61 36 97 36 97 60C97 84 61 84 60 113C59 84 23 84 23 60C23 36 59 36 60 7Z"
                stroke="#EEC08D"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </a>
        </div>

        {/* Right: secondary links */}
        <div className="menu-overlay-col menu-overlay-right">
          {rightMenuLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="menu-overlay-link-right"
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;


