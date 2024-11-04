/** @format */

// import React from 'react';

import Slider from "react-slick";
import { licenseData } from "../../utils/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WssLicense = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="lg:w-[80%] md:w-full mx-auto p-4">
      <Slider {...settings}>
        {licenseData.map((license, index) => (
          <div key={index} className="py-3 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <div className="mt-4">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {license.title.split(" ")[0]}{" "}
                    <span className=" text-custom">
                      {license.title.split(" ")[1]}
                    </span>{" "}
                    {license.title.split(" ")[2]}
                  </h2>
                </div>
                <div className="pt-5">
                  <p className="text-justify  text-gray-700 leading-relaxed text-base md:text-lg">
                    {license.description}
                  </p>
                </div>
              </div>
              <div className="licence-title" data-aos="flip-left">
                <img
                  className="img-fluid px-5 h-48 md:h-full"
                  src={license.imgSrc}
                  alt={license.imgAlt}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WssLicense;
