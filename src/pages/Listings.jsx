import React from "react";

const Listings = () => (
  <main style={{ paddingTop: 120, minHeight: "70vh", background: "#fffef9" }}>
    <div style={{
      maxWidth: 1100, margin: "0 auto", textAlign: "center",
      fontFamily: "'Inter', sans-serif", color: "#23283b"
    }}>
      <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#ad5b00", marginBottom: 18 }}>Exclusive Listings</h2>
      <p style={{ marginBottom: 30, color: "#79573b" }}>
        Explore our portfolio of extraordinary homes—where every listing is as unique as autumn itself.
      </p>
      {/* You could map demo listings here if you want */}
      <div style={{ opacity: 0.5, fontStyle: "italic", color: "#ad5b00" }}>
        [Demo listing cards coming soon!]
      </div>
    </div>
  </main>
);

export default Listings;
