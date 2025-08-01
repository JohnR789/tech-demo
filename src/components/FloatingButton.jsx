// src/components/FloatingButton.jsx
import React from "react";
import "./FloatingButton.css";

const FloatingButton = ({ onClick }) => (
  <button
    className="floating-request-btn"
    onClick={onClick}
    aria-label="Request a meeting"
  >
    <span role="img" aria-label="Calendar" className="calendar-icon">📅</span>
    <span className="floating-request-text">Request a Meeting</span>
  </button>
);

export default FloatingButton;
