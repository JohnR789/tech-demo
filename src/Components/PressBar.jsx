import React from "react";
import "./PressBar.css";

const press = [
  {
    name: "Forbes",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Forbes_logo.svg",
    url: "https://www.forbes.com/",
  },
  {
    name: "The Wall Street Journal",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Wall_Street_Journal_Logo.svg",
    url: "https://www.wsj.com/",
  },
  {
    name: "New York Times",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",
    url: "https://www.nytimes.com/",
  },
  {
    name: "Los Angeles Times",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Los_Angeles_Times_logo.svg",
    url: "https://www.latimes.com/",
  },
  {
    name: "Robb Report",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Robb_Report_logo.svg",
    url: "https://robbreport.com/",
  },
  {
    name: "Mansion Global",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mansion_Global_Logo.png",
    url: "https://www.mansionglobal.com/",
  },
  {
    name: "Variety",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Variety_logo.svg",
    url: "https://variety.com/",
  },
];

const PressBar = () => (
  <section className="press-bar">
    <div className="press-bar-logos">
      {press.map((item, i) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          className="press-logo-link"
          title={item.name}
          aria-label={item.name}
        >
          <img src={item.img} alt={item.name} className="press-logo-img" />
        </a>
      ))}
    </div>
  </section>
);

export default PressBar;

