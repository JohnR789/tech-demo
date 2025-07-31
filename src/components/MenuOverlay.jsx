import React, { useState, useRef } from "react";
import "./MenuOverlay.css";

// You can adjust these images/labels as needed
const menuLinks = [
  {
    label: "Home",
    href: "/",
    images: ["/community4.png", "/community5.png", "/community6.png"],
  },
  {
    label: "About Autumn Realty",
    href: "/about",
    images: ["/house1.png", "/house2.png", "/house3.png"],
  },
  {
    label: "Exclusive Listings",
    href: "/listings",
    images: ["/house4.png", "/house5.png", "/house6.png"],
  },
  {
    label: "Autumn Collective",
    href: "/communities",
    images: ["/community1.png", "/community2.png", "/community3.png"],
  },
];

// Custom fly-in destinations (per link, per image) [left, top] offsets from link
const PREVIEW_LAYOUTS = [
  // HOME
  [
    { left: 430, top: -130 },   // flies up & far right
    { left: 800, top: 100 },    // flies right and down
    { left: 300, top: 300 },    // flies way down/right
  ],
  // ABOUT AUTUMN REALTY
  [
    { left: 570, top: -220 },
    { left: 950, top: 40 },
    { left: 420, top: 400 },
  ],
  // EXCLUSIVE LISTINGS
  [
    { left: 950, top: -140 },
    { left: 1240, top: 110 },
    { left: 520, top: 300 },
  ],
  // AUTUMN COLLECTIVE
  [
    { left: 700, top: -210 },
    { left: 1100, top: 300 },
    { left: 330, top: 490 },
  ]
];


const PREVIEW_WIDTH = 200;
const PREVIEW_HEIGHT = 120;

const MenuOverlay = ({ open, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [linkRect, setLinkRect] = useState(null);

  // Contact animation
  const [contactTraceState, setContactTraceState] = useState("");
  const handleContactMouseEnter = () => setContactTraceState("tracing");
  const handleContactFocus = () => setContactTraceState("tracing");
  const handleContactMouseLeave = () => setContactTraceState("untracing");
  const handleContactBlur = () => setContactTraceState("untracing");

  const menuRowRefs = useRef([]);

  // On hover, get bounding rect of hovered link (relative to viewport)
  const handleMenuRowEnter = (idx) => {
    setHoveredIndex(idx);
    if (menuRowRefs.current[idx]) {
      const rect = menuRowRefs.current[idx].getBoundingClientRect();
      setLinkRect(rect);
    }
  };
  const handleMenuRowLeave = () => {
    setHoveredIndex(null);
    setLinkRect(null);
  };

  const showPreviews = open && hoveredIndex !== null && linkRect;

  // Clamp images to viewport
  const getPreviewPosition = (n) => {
    if (!linkRect || hoveredIndex == null) return {};
    const layout = PREVIEW_LAYOUTS[hoveredIndex][n];
    let top = linkRect.top + layout.top;
    let left = linkRect.left + layout.left;

    // Clamp so they never go off the window
    if (top < 8) top = 8;
    if (top + PREVIEW_HEIGHT > window.innerHeight - 8)
      top = window.innerHeight - PREVIEW_HEIGHT - 8;
    if (left + PREVIEW_WIDTH > window.innerWidth - 8)
      left = window.innerWidth - PREVIEW_WIDTH - 8;

    return { top, left };
  };

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
              ref={el => menuRowRefs.current[idx] = el}
              onMouseEnter={() => handleMenuRowEnter(idx)}
              onMouseLeave={handleMenuRowLeave}
              onFocus={() => handleMenuRowEnter(idx)}
              onBlur={handleMenuRowLeave}
            >
              <a
                href={link.href}
                className={`menu-overlay-link${hoveredIndex === idx ? " hovered" : ""}`}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </a>
              {/* Jade Mills style: unique fly-in previews for each link */}
              {showPreviews && hoveredIndex === idx && (
                <>
                  {[0, 1, 2].map((n) => (
                    <div
                      key={n}
                      className={`preview-image ultra-preview-${n + 1}`}
                      style={getPreviewPosition(n)}
                    >
                      <img src={link.images[n]} alt="" />
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
        {/* Contact Button */}
        <div className="menu-overlay-contact-btn-right">
          <a
            href="/contact"
            className="menu-overlay-contact-leaf-btn"
            tabIndex={open ? 0 : -1}
            onMouseEnter={handleContactMouseEnter}
            onFocus={handleContactFocus}
            onMouseLeave={handleContactMouseLeave}
            onBlur={handleContactBlur}
          >
            <svg
              className="contact-btn-leaf"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Contact"
            >
              <circle
                className="contact-btn-circle-base"
                cx="60"
                cy="60"
                r="48"
                stroke="#eec08d"
                strokeWidth="2.2"
                fill="none"
              />
              <circle
                className={`contact-btn-circle-animated ${contactTraceState}`}
                cx="60"
                cy="60"
                r="48"
                stroke="#FFD699"
                strokeWidth="4"
                fill="none"
                opacity="0.95"
                filter="url(#circle-glow)"
              />
              <text
                x="60"
                y="66"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontFamily="'Montserrat', 'Futura', 'Arial', sans-serif"
                fontSize="14"
                fill="url(#contact-grad)"
                letterSpacing="0.36em"
                fontWeight="400"
                style={{
                  pointerEvents: "none",
                  textTransform: "uppercase",
                  fontVariant: "all-small-caps",
                }}
              >Contact</text>
              <defs>
                <linearGradient id="contact-grad" x1="0" y1="70" x2="120" y2="70" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#eeb88d"/>
                  <stop offset="1" stopColor="#b95c06"/>
                </linearGradient>
                <filter id="circle-glow" x="-20" y="-20" width="160" height="160">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.3" floodColor="#FFD699" floodOpacity="0.32"/>
                  <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#fff8e0" floodOpacity="0.09"/>
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;

