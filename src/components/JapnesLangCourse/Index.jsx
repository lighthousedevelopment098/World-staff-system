import React from "react";
import HeroSection from "./HeroSection";
import Offer from "./Offer";
// import CourseName from '../TITPProgram/Flow/Course'
import ProTrainer from "./ProTrainer";
import SendCV from "./SendCV";
import StudentSay from "./StudentSay";
import CourseRegistration from "./CourseRegistration";

const JapanesLangCourse = () => {
  return (
    <div>
      <HeroSection
        backgroundImageUrl="/offer.jpg"
        title="World Staff System offers Japanese Language courses (JLPT)"
      />
      <Offer />

      {/* <CourseName/> */}
      <ProTrainer />
      <SendCV />
      <StudentSay />
      <CourseRegistration />
    </div>
  );
};

export default JapanesLangCourse;
