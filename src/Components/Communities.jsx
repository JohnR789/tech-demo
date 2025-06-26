import React from "react";
import "./Communities.css";

const dummyCommunities = [
  {
    name: "Maplewood Village",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    desc: "Quiet, tree-lined streets bursting with autumn color and timeless charm.",
  },
  {
    name: "Golden Fields",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    desc: "Elegant estates amid golden meadows and rolling pumpkin fields.",
  },
  {
    name: "Willow Creek",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "Luxury lakeside living with sweeping willow trees and vibrant fall views.",
  },
  {
    name: "Harvest Hills",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    desc: "Modern living, classic barns, and crisp autumn air in every direction.",
  },
];

const Communities = () => (
  <section className="communities" id="communities">
    <div className="communities-headline-wrapper" data-aos="fade-up">
      <h2 className="communities-headline">Communities</h2>
      <p className="communities-subhead">Discover the areas where luxury meets autumn warmth</p>
      <div className="communities-headline-bar" />
    </div>
    <div className="communities-grid" data-aos="fade-up" data-aos-delay="180">
      {dummyCommunities.map((c, i) => (
        <div className="community-card" key={i} tabIndex={0}>
          <div className="community-img-wrap">
            <img src={c.img} alt={c.name} loading="lazy" />
            <div className="community-img-gradient" />
            <div className="community-name-overlay">
              <span>{c.name}</span>
            </div>
          </div>
          <div className="community-details">
            <p>{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
    {/* Decorative SVG leaf overlay for agency luxury (optional): */}
    <img src="/leaves-fade.png" alt="" className="communities-bg-leaves" />
  </section>
);

export default Communities;
