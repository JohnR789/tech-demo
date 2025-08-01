// src/components/MeetingModal.jsx
import React from "react";
import "./MeetingModal.css";

const CALENDLY_URL = "https://calendly.com/rollinsj789/schedule-a-consultation-now";

const MeetingModal = ({ onClose }) => (
  <div className="meeting-modal-overlay" onClick={onClose}>
    <div className="meeting-modal" onClick={e => e.stopPropagation()}>
      <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
      <iframe
        src={CALENDLY_URL}
        title="Schedule a Meeting"
        className="calendly-iframe"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default MeetingModal;
