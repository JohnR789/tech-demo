import React, { useEffect, useRef, useState } from "react";
import "./Communities.css";

const communityData = [
  {
    img: "/community1.png",
    title: "Golden Grove",
    desc: "Luxury properties nestled among golden foliage.",
  },
  {
    img: "/community2.png",
    title: "Maplewood Village",
    desc: "Tree-lined streets bursting with autumn color and timeless charm.",
  },
  {
    img: "/community3.png",
    title: "Amber Pines",
    desc: "Modern homes with stunning pine views.",
  },
  {
    img: "/community4.png",
    title: "Harvest Ridge",
    desc: "Expansive estates overlooking rolling hills.",
  },
  {
    img: "/community5.png",
    title: "Cedar Estates",
    desc: "Classic homes with cedar accents and vibrant fall landscapes.",
  },
  {
    img: "/community6.png",
    title: "Willow Springs",
    desc: "Springs, streams, and golden autumn willows.",
  },
  {
    img: "/community7.png",
    title: "Orchard Acres",
    desc: "Apple orchard backdrops and cozy country charm.",
  },
  {
    img: "/community8.png",
    title: "Birch Point",
    desc: "Modern lakeside living with autumn birches.",
  },
  {
    img: "/community9.png",
    title: "Pumpkin Hollow",
    desc: "Festive community with family-friendly events.",
  },
  {
    img: "/communtiy10.png",
    title: "Chestnut Estates",
    desc: "Estate homes with private woodland trails.",
  },
  {
    img: "/community11.png",
    title: "Oak Hill",
    desc: "Historic homes on oak-draped hillsides.",
  },
  {
    img: "/community12.png",
    title: "Sunset Park",
    desc: "Vibrant community near sprawling parkland.",
  },
  {
    img: "/community13.png",
    title: "Misty Meadows",
    desc: "Morning mists and peaceful meadow walks.",
  },
  {
    img: "/community14.png",
    title: "Harvest Estates",
    desc: "Expansive lawns and seasonal harvest celebrations.",
  },
  {
    img: "/community15.png",
    title: "Crimson Heights",
    desc: "Breathtaking skyline views and crimson canopies.",
  },
  {
    img: "/community16.png",
    title: "Aspen Valley",
    desc: "Majestic aspens and mountain serenity.",
  },
];

const COMMUNITIES_PER_PAGE = 8;

const Communities = () => {
  const numPages = Math.ceil(communityData.length / COMMUNITIES_PER_PAGE);
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);
  const autoAdvance = useRef();

  // Auto-cycle every 30s 
  useEffect(() => {
    if (paused) return;
    autoAdvance.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % numPages);
        setFade(true);
      }, 600);
    }, 30000);
    return () => clearInterval(autoAdvance.current);
  }, [paused, numPages]);

  // Manual next/prev
  const goToPage = (nextPage) => {
    clearInterval(autoAdvance.current);
    setFade(false);
    setTimeout(() => {
      setPage((nextPage + numPages) % numPages);
      setFade(true);
    }, 480);
  };

  // Pause on hover/focus for user-friendly experience
  const handlePause = () => setPaused(true);
  const handleResume = () => setPaused(false);

  const start = page * COMMUNITIES_PER_PAGE;
  const visible = communityData.slice(start, start + COMMUNITIES_PER_PAGE);

  return (
    <section
      className="communities-section"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      tabIndex={0}
      onFocus={handlePause}
      onBlur={handleResume}
    >
      <h2 className="communities-headline" data-aos="fade-up">
        Communities
      </h2>
      <p
        className="communities-subheadline"
        data-aos="fade-up"
        data-aos-delay="90"
      >
        Discover the areas where luxury meets autumn warmth
      </p>
      <div className="communities-controls">
        <button
          className="communities-arrow left"
          onClick={() => goToPage(page - 1)}
          aria-label="Previous"
        >
          <svg width="38" height="38" viewBox="0 0 38 38">
            <circle cx="19" cy="19" r="19" fill="#fff6ed" />
            <polyline
              points="22,12 15,19 22,26"
              fill="none"
              stroke="#eeb88d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={`communities-grid${fade ? " fade-in" : " fade-out"}`}>
  {visible.map((item, idx) => (
    <div
      className={`community-card${fade ? " fade-up" : ""}`}
      key={start + idx}
      style={{ animationDelay: fade ? `${80 + idx * 50}ms` : "0ms" }}
    >
      <div
        className="community-image"
        style={{ backgroundImage: `url('${item.img}')` }}
      />
      <div className="community-info">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
</div>

        <button
          className="communities-arrow right"
          onClick={() => goToPage(page + 1)}
          aria-label="Next"
        >
          <svg width="38" height="38" viewBox="0 0 38 38">
            <circle cx="19" cy="19" r="19" fill="#fff6ed" />
            <polyline
              points="16,12 23,19 16,26"
              fill="none"
              stroke="#eeb88d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="communities-dots">
        {[...Array(numPages)].map((_, i) => (
          <button
            key={i}
            className={`communities-dot${i === page ? " active" : ""}`}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => goToPage(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Communities;


