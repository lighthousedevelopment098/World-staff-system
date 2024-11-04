import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VocationalSchool = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row-reverse w-full px-5 md:px-20 bg-gray-100">
      <div className="w-full md:w-1/2 flex flex-col p-5 md:p-20 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Vocational <span className="text-custom">School</span>{" "}
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          A vocational school is an institution where you can acquire skills and
          knowledge directly related to your profession while studying to obtain
          qualifications in your specialized field.
        </p>
        <p className="text-gray-600 text-base md:text-lg">
          You can obtain a Diploma (after 2 years or more) or an Advanced
          Diploma (after 4 years or more), allowing you to continue on to
          graduate school. Additionally, you can obtain a work visa by securing
          a job in the field you studied.
        </p>
      </div>
      <div className="w-full md:w-1/2" data-aos="flip-right">
        <img
          src="/jap-school.jpg"
          alt=""
          className="p-5 md:p-20 object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default VocationalSchool;
