import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import CommunitiesPage from "./pages/Communities"; // <-- Add this import
// Add Sold, Blog, etc. if needed
import Footer from "./components/Footer";

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
        <Route path="/communities" element={<CommunitiesPage />} /> {/* <-- Add this route */}
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

