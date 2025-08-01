import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Contact from "./pages/Contact";
import CommunitiesPage from "./pages/Communities"; 
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import MeetingModal from "./components/MeetingModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Route path="/communities" element={<CommunitiesPage />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButton onClick={() => setModalOpen(true)} />
      {modalOpen && <MeetingModal onClose={() => setModalOpen(false)} />}
    </Router>
  );
}

export default App;

