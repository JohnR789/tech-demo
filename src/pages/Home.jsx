import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ListingsSlider from "../components/ListingsSlider";
import Communities from "../components/Communities";
import PressBar from "../components/PressBar";

const Home = () => {
  const heroRef = useRef();

  return (
    <>
      <Navbar heroRef={heroRef} />
      <main>
        <section ref={heroRef}>
          <Hero />
        </section>
        <ListingsSlider />
        <Communities />
        <PressBar />
      </main>
    </>
  );
};

export default Home;


