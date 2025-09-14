"use client"
import React, {useEffect} from 'react';
import Hero from '../components/helper/Hero';
import About from '../components/helper/About';
import Experience from '../components/helper/Experience';
import Projects from '../components/helper/Projects';
import Contact from '../components/helper/Contact';
import "aos/dist/aos.css";



const Main = () => {

useEffect(() => {
  const initAOS = async () => {
    const AOS = (await import("aos")).default;
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  };
  initAOS(); // ✅ call it here
}, []);


return (
  <div>
    <div id="hero">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="experience">
      <Experience />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>

  );
}

export default Main;
