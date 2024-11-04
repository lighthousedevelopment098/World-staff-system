import React from "react";
import CourseName from "./Course";
// import { Link } from 'react-router-dom';

const Offer = () => {
  // const scrollToTop = () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //     });
  // };

  return (
    <div className="py-3">
      <div className=" lg:w-[80%] mx-auto">
        <div className="my-5 px-5">
          <h2 className="text-center text-2xl md:text-3xl font-bold">
            We offer{" "}
            <span className="text-custom">Japanese language courses</span> in
            Pakistan
          </h2>
          <div className="my-4 mx-auto  bg-custom w-20 md:w-36 h-1 "></div>

          <p className="text-justify text-base md:text-lg text-gray-700 leading-relaxed">
            It is obvious that language plays a vital role as it helps the
            individual to express his/ her feeling in an organize manner. Japan
            is an advance country and the person seeking job opportunity or
            study must be fully conversant with the Japanese language. Prior
            moving abroad, an applicant should learn the Japanese languages as
            per following duration.{" "}
          </p>
          {/* Uncomment this link if necessary */}
          {/* <Link to="/japaneseinjapan" className="text-custom hover:underline block text-center mt-4" onClick={scrollToTop}>
                        Learn more about Japanese language courses
                    </Link> */}
          <div className="flex justify-center mt-5">
            <CourseName />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
