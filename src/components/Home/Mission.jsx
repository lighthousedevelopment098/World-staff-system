/** @format */

import React, { useEffect } from "react";
import Missimg from "../../assets/Mission/mission.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="flex flex-col lg:flex-row-reverse gap-4 mx-auto w-full lg:w-[80%] px-4  lg:px-8">
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left leading-tight">
            Our <span className="text-custom">Mission</span>
          </h2>
          <div className="w-16 h-1 bg-custom mt-2 mb-4 mx-auto lg:mx-0"></div>
          <div className="space-y-4 text-justify text-gray-700 leading-relaxed text-base md:text-lg px-2 sm:px-4 lg:px-0  ">
            <p>
              The success of an organization depends on its achievements related
              to employee performance. We focus on increasing efficiency and
              improving customer service. Our mission is to achieve customer
              satisfaction not only through manpower but also by providing
              strategies to achieve organizational goals.
            </p>
            <p>
              We consistently deliver high quality HR services to help clients
              maintain and strengthen organizational performance. Our expert
              team offers 24/7 training, guidance, motivation, and career
              counseling.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={Missimg}
            alt="Our mission to enhance organizational success"
            className="w-full sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[80%] h-auto object-cover rounded-lg shadow-lg"
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
