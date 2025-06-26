import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Placeholder pages for now
const Home = () => <div style={{paddingTop:120}}>Home Page Content</div>;
const About = () => <div style={{paddingTop:120}}>About Page Content</div>;
const Listings = () => <div style={{paddingTop:120}}>Listings Page Content</div>;
const Press = () => <div style={{paddingTop:120}}>Press Page Content</div>;
const Contact = () => <div style={{paddingTop:120}}>Contact Page Content</div>;

function App() {
    useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
