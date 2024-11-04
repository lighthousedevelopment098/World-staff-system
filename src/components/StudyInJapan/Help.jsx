import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Help = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-20 py-5">
      <div
        className="flex flex-col px-4 md:p-20 w-full md:w-1/2"
        data-aos="flip-right"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          How <span className="text-custom">Can We Help</span> You...?
        </h1>
        <h3 className="text-lg md:text-xl mb-4 font-bold">
          We can help you in so many different ways to study in Japan.
        </h3>
        <ul className="list-disc text-base md:text-lg text-start space-y-5">
          <li>Japan has a high-quality of education.</li>
          <li>
            Excellent employment opportunities for international students.
          </li>
          <li>Affordable tuition fees & generous scholarship.</li>
          <li>Safe and secure, with an excellent medical system.</li>
          <li>You can earn a degree and learn Japanese at the same time.</li>
          <li>Learn about Japanese culture, history, and nature.</li>
          <li>Great quality of life.</li>
          <li>Japan fosters your self-discovery and adventurous spirit.</li>
          <li>Lifelong friendships and future career connections.</li>
          <li>Japanese food tastes better in Japan.</li>
        </ul>
      </div>
      <div
        className="w-full md:w-1/2 flex justify-center items-center"
        data-aos="flip-left"
      >
        <img
          src="/study.jpg"
          alt="Study in Japan"
          className="w-full max-w-md md:max-w-lg h-auto border-2 border-custom shadow-custom rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Help;
