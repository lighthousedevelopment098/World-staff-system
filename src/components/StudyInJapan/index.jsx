import React from "react";
import HeroSection from "../JapnesLangCourse/HeroSection";
import StudyAborad from "./StudyAborad";
import Benefits from "./Benefits";
import Help from "./Help";
import SchoolOffering from "./SchoolOffering";
import Graduate from "./GraduateSchool";
import VocationalSchool from "./VocationalSchool";
import Job from "./Jop";

const StudyInJapan = () => {
  return (
    <div>
      <HeroSection
        backgroundImageUrl="/japan.jpg"
        title="Study in Japan"
        subtitle="Live Your Dream With Us"
      />
      <StudyAborad />
      <Benefits />
      <Help />
      <SchoolOffering />
      <Graduate />
      <VocationalSchool />
      <Job />
    </div>
  );
};

export default StudyInJapan;
