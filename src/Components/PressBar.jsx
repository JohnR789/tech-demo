import React from "react";
import "./PressBar.css";


const pressLogos = [
  { src: "/press-logo1.png", alt: "WSJ" },
  { src: "/press-logo2.png", alt: "Forbes" },
  { src: "/press-logo3.png", alt: "HGTV" },
  { src: "/press-logo4.png", alt: "Boston Globe" },
  { src: "/press-logo5.png", alt: "NY Times" },
  { src: "/press-logo6.png", alt: "Robb Report" },
];

const PressBar = () => (
  <div className="pressbar-outer">
    <div className="pressbar-inner">
      <div className="pressbar-label">As seen on…</div>
      <div className="pressbar-carousel-viewport">
        <div className="pressbar-carousel-track">
          {pressLogos.map((logo, i) => (
            <React.Fragment key={logo.alt}>
              <div className="pressbar-logo-wrap">
                <img src={logo.src} alt={logo.alt} className="pressbar-logo" />
              </div>
              {i !== pressLogos.length - 1 && <div className="pressbar-divider" />}
            </React.Fragment>
          ))}
          {/* Clone logos for seamless looping */}
          {pressLogos.map((logo, i) => (
            <React.Fragment key={logo.alt + "-clone"}>
              <div className="pressbar-logo-wrap">
                <img src={logo.src} alt={logo.alt} className="pressbar-logo" />
              </div>
              {i !== pressLogos.length - 1 && <div className="pressbar-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PressBar;
