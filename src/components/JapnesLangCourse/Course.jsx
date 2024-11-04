import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseData } from "../../utils/data";
import Aos from "aos";
import "aos/dist/aos.css";
import JLPTTable from "../JLPTTable/JLPTTable";

const CourseName = () => {
  const scrollToTop = () => {
    document.getElementById("course-form").scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="flow_banner text-justify pb-4">
      <div className="mx-auto  w-full">
        <div className="flex flex-wrap gap-4 my-3 justify-center px-5 md:px-0">
          {CourseData.map((Data, index) => (
            <div
              key={index}
              className="max-w-sm my-3 bg-white border flex flex-col justify-between  border-custom rounded-lg shadow-custom shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-100"
            >
              <div>
                {/* Card Header */}
                <div className="bg-custom p-4 rounded-t-lg">
                  <h4 className="text-2xl font-bold font-serif text-white text-center">
                    {Data.courseName}
                  </h4>
                </div>

                {/* Card Content */}
                <div className="p-5" data-aos="flip-right">
                  <p className="text-gray-800 text-base md:text-lg  mb-4">
                    {Data.courseDetails}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold">Months:</span>
                      <span>{Data.courseMonth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Hours:</span>
                      <span>{Data.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Weeks:</span>
                      <span>{Data.weeks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Kanji Words:</span>
                      <span>{Data.kanji}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Vocabulary:</span>
                      <span>{Data.Vocabulary}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Action Button */}

              <Link
                to={"/register"}
                className="m-5 rounded-md text-center  shadow-gray-500 shadow-md hover:bg-cyan-800 transition duration-300 py-2 bg-custom text-white font-semibold"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>

        <div className="w-80 md:w-full px-4">
          <JLPTTable />
        </div>

        <div className="text-center mx-auto max-w-2xl">
          <h1 className="font-bold text-2xl">
            {" "}
            World Staff System offers online Japanese Language (JLPT)
          </h1>
        </div>
        <div className="flex flex-col justify-center lg:w-[60%] mx-auto items-center ">
          <p className="text-justify text-gray-700 text-base md:text-lg my-4 px-4 max-w-prose">
            You can choose the learning method for the in-person and online
            courses, so you can learn Japanese courses anywhere from world as
            well Pakistan. You can also chose which Japanese language level you
            would like to study, based on practically daily conversations,
            business Japanese or studying for the JLPT
          </p>
        </div>
        {/* <Link
          // to="/register"
          className="btn btn-2 bg-custom text-white py-2 px-4 rounded-md inline-block"
          onClick={scrollToTop}
        >
          Apply Now
        </Link> */}
      </div>
    </section>
  );
};

export default CourseName;
