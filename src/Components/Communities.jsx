import React, { useEffect, useRef, useState } from "react";
import "./Communities.css";

const communityData = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Maplewood Village",
    desc: "Tree-lined streets bursting with autumn color and timeless charm.",
  },
  {
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    title: "Amber Pines",
    desc: "Modern homes with stunning pine views.",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    title: "Harvest Ridge",
    desc: "Expansive estates overlooking rolling hills.",
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    title: "Cedar Estates",
    desc: "Classic homes with cedar accents and vibrant fall landscapes.",
  },
  {
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
    title: "Golden Grove",
    desc: "Luxury properties nestled among golden foliage.",
  },
  {
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    title: "Orchard Lane",
    desc: "Apple orchard backdrops and cozy country charm.",
  },
  {
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    title: "Birch Point",
    desc: "Modern lakeside living with autumn birches.",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "Pumpkin Hollow",
    desc: "Festive community with family-friendly events.",
  },
  {
    img: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80",
    title: "Crimson Heights",
    desc: "Breathtaking skyline views and crimson canopies.",
  },
  {
    img: "https://images.unsplash.com/photo-1509228468518-c6f3e735b6b7?auto=format&fit=crop&w=600&q=80",
    title: "Willow Springs",
    desc: "Springs, streams, and golden autumn willows.",
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    title: "Aspen Valley",
    desc: "Majestic aspens and mountain serenity.",
  },
  {
    img: "https://images.unsplash.com/photo-1463569643904-251b8242b988?auto=format&fit=crop&w=600&q=80",
    title: "Chestnut Estates",
    desc: "Estate homes with private woodland trails.",
  },
  {
    img: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
    title: "Oak Hill",
    desc: "Historic homes on oak-draped hillsides.",
  },
  {
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    title: "Sunset Park",
    desc: "Vibrant community near sprawling parkland.",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    title: "Misty Meadows",
    desc: "Morning mists and peaceful meadow walks.",
  },
  {
    img: "https://images.unsplash.com/photo-1451481454041-104482d8e284?auto=format&fit=crop&w=600&q=80",
    title: "Harvest Estates",
    desc: "Expansive lawns and seasonal harvest celebrations.",
  },
];


const COMMUNITIES_PER_PAGE = 8;

const Communities = () => {
  const numPages = Math.ceil(communityData.length / COMMUNITIES_PER_PAGE);
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);
  const autoAdvance = useRef();

  // Auto-cycle every 30s (paused if user is hovering/focused)
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
    <section className="communities-section" onMouseEnter={handlePause} onMouseLeave={handleResume} tabIndex={0} onFocus={handlePause} onBlur={handleResume}>
      <h2 className="communities-headline" data-aos="fade-up">
        Communities
      </h2>
      <p className="communities-subheadline" data-aos="fade-up" data-aos-delay="90">
        Discover the areas where luxury meets autumn warmth
      </p>
      <div className="communities-controls">
        <button className="communities-arrow left" onClick={() => goToPage(page - 1)} aria-label="Previous">
          <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#fff6ed" /><polyline points="22,12 15,19 22,26" fill="none" stroke="#eeb88d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className={`communities-grid${fade ? " fade-in" : " fade-out"}`}>
          {visible.map((item, idx) => (
            <div className="community-card" key={start + idx} data-aos="fade-up" data-aos-delay={120 + idx * 40}>
              <div className="community-image" style={{ backgroundImage: `url('${item.img}')` }} />
              <div className="community-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="communities-arrow right" onClick={() => goToPage(page + 1)} aria-label="Next">
          <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#fff6ed" /><polyline points="16,12 23,19 16,26" fill="none" stroke="#eeb88d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

