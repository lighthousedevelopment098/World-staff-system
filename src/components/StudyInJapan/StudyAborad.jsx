import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StudyAbroad = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);

  return (
    <div className="lg:w-[80%] mx-auto my-10 flex flex-col md:flex-row px-4 sm:px-10 md:px-20 gap-5">
      <div className="w-full md:w-1/2 flex flex-col my-4 md:mb-0">
        <h1 className="text-2xl md:text-3xl font-bold">
          Planning <span className="text-custom">To Study </span> Abroad?
        </h1>
        <div className="my-4 mx-2 md:mx-auto bg-custom w-16 h-1"></div>
        <p className="text-base md:text-lg mt-4 text-justify">
          In Japan, higher education begins after completing 12 years of
          elementary and secondary education: 6 years in elementary school,
          followed by 3 years each in lower and upper secondary school. There
          are five types of higher education institutions open to international
          students: (1) colleges of technology, (2) vocational schools
          (postsecondary courses at specialized training colleges), (3) junior
          colleges, (4) universities (undergraduate programs), and (5) graduate
          schools. These institutions are further categorized into national,
          local public, and private institutions, with additional options for
          language courses.
        </p>
      </div>
      <div className="w-full md:w-1/2 " data-aos="flip-right">
        <img
          src="/jap-study.jpeg"
          alt="Study Abroad"
          className="w-full h-52 md:h-80 object-fill border-2 border-custom rounded-lg shadow-md shadow-custom"
        />
      </div>
    </div>
  );
};

export default StudyAbroad;
