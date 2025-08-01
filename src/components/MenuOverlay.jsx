import React, { useState, useRef } from "react";
import "./MenuOverlay.css";

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
const PREVIEW_END_POSITIONS = [
  { left: '4vw', top: '40vh' },
  { left: 'calc(50vw - 150px)', top: '8vh' },
  { left: 'calc(96vw - 300px)', top: '50vh' },
];

const PREVIEW_WIDTH = 300;
const PREVIEW_HEIGHT = 300;

const MenuOverlay = ({ open, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRowRefs = useRef([]);
  const [contactTraceState, setContactTraceState] = useState("");

  const handleContactMouseEnter = () => setContactTraceState("tracing");
  const handleContactFocus = () => setContactTraceState("tracing");
  const handleContactMouseLeave = () => setContactTraceState("untracing");
  const handleContactBlur = () => setContactTraceState("untracing");

  const handleMenuRowEnter = (idx) => setHoveredIndex(idx);
  const handleMenuRowLeave = () => setHoveredIndex(null);

  const showPreviews = open && hoveredIndex !== null;

  const getPreviewPosition = (n) => {
    const pos = PREVIEW_END_POSITIONS[n];
    return {
      left: pos.left,
      top: pos.top,
      width: PREVIEW_WIDTH,
      height: PREVIEW_HEIGHT,
    };
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
              {showPreviews && hoveredIndex === idx && (
                <>
                  <div
                    className="preview-image ultra-from-left quadrant-left"
                    style={getPreviewPosition(0)}
                  >
                    <img src={link.images[0]} alt="" />
                  </div>
                  <div
                    className="preview-image ultra-from-top quadrant-top"
                    style={getPreviewPosition(1)}
                  >
                    <img src={link.images[1]} alt="" />
                  </div>
                  <div
                    className="preview-image ultra-from-right quadrant-right"
                    style={getPreviewPosition(2)}
                  >
                    <img src={link.images[2]} alt="" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
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
              <foreignObject x="0" y="0" width="120" height="120">
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "uppercase",
                    fontFamily: "'Montserrat', 'Futura', 'Arial', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.36em",
                    fontWeight: 400,
                    color: "transparent",
                    background: "none",
                    pointerEvents: "none",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    backgroundImage: "linear-gradient(90deg, #eeb88d, #b95c06)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  CONTACT
                </div>
              </foreignObject>
              <defs>
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
