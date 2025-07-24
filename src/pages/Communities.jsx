import React from "react";
import Communities from "../components/Communities";
import "./Communities.css";

export default function CommunitiesPage() {
  return (
    <main className="autumn-communities-page">
      <section className="autumn-communities-intro">
        <p className="autumn-intro-detail">
          Welcome to New England's most vibrant neighborhoods—where golden leaves, crisp air, and inviting homes await.
          <br />
          Find the perfect place to settle in this season of warmth and wonder.
        </p>
      </section>
      <Communities />
      <footer className="autumn-footer">
        <div>
          <span role="img" aria-label="Acorn" style={{ fontSize: "1.1em", verticalAlign: "middle" }}>🌰</span>
          &nbsp;Autumn Realty &copy; {new Date().getFullYear()}&nbsp;
          <span role="img" aria-label="Oak Leaf" style={{ fontSize: "1.1em", verticalAlign: "middle" }}>🍂</span>
        </div>
      </footer>
    </main>
  );
}
