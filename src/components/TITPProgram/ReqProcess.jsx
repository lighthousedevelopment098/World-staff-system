import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const ReqProcess = ({ steps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration as needed
    });
  }, []);

  return (
    <div
      className="py-5 bg-cover bg-center min-h-screen"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover", // This is like object-cover for background images
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("https://wallpapercave.com/wp/wp1985833.jpg")',
      }} // Add your desired background image
    >
      {/* Recruitment Process Heading */}
      <div className="container mx-auto text-center py-10 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Recruitment <span className="text-custom">Process</span>
        </h2>
        <div className="w-24 mx-auto h-1 bg-custom my-2"></div>
      </div>

      {/* Process Description */}
      <div className="container mx-auto pb-10 text-white">
        <p className="mb-8 px-5 text-center text-lg">
          Following are the steps to recruit on the Technical Intern Training
          Program (TITP):
        </p>

        {/* Steps Section */}
        <div className="flex justify-center items-start">
          <div className="relative border-l-2 border-gray-200">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-[80vw] md:w-[60vw]  bg-white bg-opacity-80 backdrop-blur-lg shadow-lg p-6 rounded-lg mb-10 ml-6 animate-fadeIn relative"
                data-aos="zoom-in"
              >
                {/* Step Indicator */}
                <div className="absolute w-6 h-6 p-2 bg-custom rounded-full mt-1.5 -left-3.5 flex items-center justify-center text-white text-lg font-bold">
                  {index + 1}
                </div>

                {/* Step Title */}
                <time className="mb-2 text-xl font-normal leading-none text-gray-600">
                  Step {index + 1}
                </time>
                <h3 className="text-lg font-semibold text-custom mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mb-3 text-base md:text-lg font-normal text-gray-600">
                  {step.description}
                </p>

                {/* List of Items (if any) */}
                {step.list && (
                  <ul className="list-disc list-inside mb-3 text-gray-600">
                    {step.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Additional Descriptions */}
                <p className="mb-3 text-base md:text-lg font-normal text-gray-600">
                  {step.description2}
                </p>
                <p className="text-base md:text-lg font-normal text-gray-600">
                  {step.addDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Footer Image */}
        <div className="flex justify-center items-center  p-2">
          <img
            src="/graphimg.jpg"
            alt="Graph"
            className="rounded-lg shadow-lg max-h-full  object-contain"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
};

ReqProcess.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string),
      addDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReqProcess;
