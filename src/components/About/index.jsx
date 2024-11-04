import React from "react";
import AboutHero from "./AboutHero";
import OurMissionAbout from "./OurMissionAbout";
import Services from "./Services";
import Values from "./Values";
import Vision from "./Vision";
import HeroSection from "../JapnesLangCourse/HeroSection";
// import HeroSection from '../JapnesLangCourse/HeroSection'
// import background from "../../assets/About/aboutHero.jpg";

const About = () => {
  return (
    <div>
      <HeroSection
        backgroundImageUrl="/aboutHero.jpg"
        title="About Us"
        subtitle="It’s always about you at WSS"
      />
      <AboutHero />
      <OurMissionAbout />
      <Services />
      <Vision />
      <Values />
    </div>
  );
};

export default About;
