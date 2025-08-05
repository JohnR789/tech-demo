import React, { useState } from "react";
import "./MeetingModal.css";

const CALENDLY_URL_BASE = "https://calendly.com/rollinsj789/schedule-a-consultation-now";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldlppwa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  notes: "",
};

const MeetingModal = ({ onClose }) => {
  const [step, setStep] = useState("form"); // "form" or "calendly"
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Build Calendly prefill params (for name/email)
  const getCalendlyUrl = () => {
    const params = [];
    if (form.name) params.push(`name=${encodeURIComponent(form.name)}`);
    if (form.email) params.push(`email=${encodeURIComponent(form.email)}`);
    const paramString = params.length ? "?" + params.join("&") : "";
    return CALENDLY_URL_BASE + paramString;
  };

  // Validation
  const validate = () => {
    let errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Invalid email address";
    }
    return errs;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      try {
        // Send data to Formspree endpoint!
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("There was a problem submitting your request. Please try again.");
        }
        setStep("calendly");
      } catch (err) {
        setSubmitError(err.message || "Submission failed.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="meeting-modal-overlay" onClick={onClose}>
      <div className="meeting-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        {step === "form" ? (
          <>
            <h2 className="modal-title">Request a Meeting</h2>
            <form className="meeting-form" onSubmit={handleFormSubmit} autoComplete="off">
              <label>
                Name*
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  autoFocus
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </label>
              <label>
                Email*
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  placeholder="(optional)"
                />
              </label>
              <label>
                I am interested in...
                <select name="service" value={form.service} onChange={handleFormChange}>
                  <option value="">-- Please Select --</option>
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                  <option value="Renting">Renting</option>
                  <option value="Investment">Investment Property</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                Additional notes
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleFormChange}
                  placeholder="Anything else you'd like us to know?"
                />
              </label>
              {submitError && <div className="form-error">{submitError}</div>}
              <button className="form-submit-btn" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Continue to Scheduling"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="modal-title">Choose Your Meeting Time</h2>
            <iframe
              src={getCalendlyUrl()}
              title="Schedule a Meeting"
              className="calendly-iframe"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </>
        )}
      </div>
    </div>
  );
};

export default MeetingModal;



