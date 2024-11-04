import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Vissionbg from "../../assets/About/ourvissionbg.jpg";
import { FaCheck } from "react-icons/fa";

const Vision = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="w-5/6 mx-auto p-5">
        <div className="my-2">
          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-10 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-2 flex justify-center items-center">
              <div className="overflow-hidden" data-aos="flip-down">
                <img
                  src={Vissionbg}
                  alt="Our Vision"
                  className="h-52 w-full md:h-80 rounded-md object-cover"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-2 flex flex-col justify-center items-center text-justify">
              <h2 className="text-2xl md:text-3xl font-bold">
                Our <span className="text-custom">Vision</span>
              </h2>
              <div className="my-4 h-1 bg-custom w-16 mx-auto"></div>
              <div className="mt-3">
                <p className="text-base md:text-lg text-justify">
                  The World Staff System (WSS) recognizes the global need for
                  employment. We want to provide world-class personal services
                  to our clients and provide opportunities for Pakistanis to
                  work in developed countries.
                </p>
                <strong className="text-base font-semibold text-custom block mt-4">
                  To achieve this, we aim to:
                </strong>
                <ul className="list-disc list-inside mt-4 text-sm md:text-base text-justify space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-custom text-[1.5rem] mr-3 mt-1" />
                    Constantly provide our best services to clients who are
                    competent, reliable, and dedicated.
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-custom text-[1.5rem] mr-3 mt-1" />
                    Help Pakistanis enhance their competence, raising the
                    competitiveness of the workforce.
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-custom text-[1.5rem] mr-3 mt-1" />
                    Attain all the requirements of our clients in the shortest
                    possible time.
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-custom text-[1.5rem] mr-3 mt-1" />
                    Provide continuous professional development to our workers
                    to produce the best reliable and friendly workforce.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
