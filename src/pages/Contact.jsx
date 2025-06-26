import React from "react";

const Contact = () => (
  <main style={{ paddingTop: 110, minHeight: "70vh", background: "#fffef9" }}>
    <div style={{
      maxWidth: 700, margin: "0 auto", textAlign: "center",
      fontFamily: "'Inter', sans-serif", color: "#23283b"
    }}>
      <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#ad5b00", marginBottom: 16 }}>Contact Us</h2>
      <p style={{ color: "#79573b" }}>
        Have a question or want to schedule a tour? Reach out today!
      </p>
      <form style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>
        <input type="text" placeholder="Name" style={{
          width: 320, padding: 12, borderRadius: 11, border: "1.5px solid #eeb88d", fontSize: "1.01rem" }} />
        <input type="email" placeholder="Email" style={{
          width: 320, padding: 12, borderRadius: 11, border: "1.5px solid #eeb88d", fontSize: "1.01rem" }} />
        <textarea placeholder="Message" rows={4} style={{
          width: 320, padding: 12, borderRadius: 11, border: "1.5px solid #eeb88d", fontSize: "1.01rem", resize: "vertical" }} />
        <button type="submit" style={{
          background: "linear-gradient(90deg, #eeb88d 0, #e89c64 100%)",
          color: "#ad5b00", fontWeight: 700, fontSize: "1.15rem",
          border: "none", borderRadius: 18, padding: "13px 42px", cursor: "pointer", marginTop: 8
        }}>
          Send Message
        </button>
      </form>
      <div style={{ marginTop: 28, color: "#ad5b00", fontSize: 17 }}>
        <b>info@autumnrealty.com</b><br />
        123 Maple Lane, Harvest City, NH
      </div>
    </div>
  </main>
);

export default Contact;

