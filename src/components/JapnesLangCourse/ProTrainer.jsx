import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageOne from "../../assets/Japnes/lang.jpg";
import Accordian from "./Accordian";
import Aos from "aos";
import "aos/dist/aos.css";

const ProTrainer = () => {
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
    <div>
      <section className="lg:w-[80%] mx-auto py-5">
        <div className="container mx-auto my-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="lg:col-span-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={ImageOne}
                className="w-full h-80 object-center border-2 border-custom shadow-md shadow-custom rounded-md "
                alt=""
              />
            </div>
            <div
              className="lg:col-span-1 flex flex-col justify-center"
              data-aos="fade-down"
            >
              <div className="p-5">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Frequently Asked{" "}
                  <span className="text-custom">Questions</span>
                </h2>
                <div className="my-4 mx-2 md:mx-auto  bg-custom w-20 h-1 "></div>
                <p className="text-justify text-base md:text-lg text-gray-700 mb-4">
                  We will help you achieve your goal of studying or working in
                  Japan, or simply improving your language skills.
                </p>
                <Accordian />
                <div className="my-3 flex items-center justify-center">
                  <Link
                    // to="/register"
                    className="btn bg-custom text-white py-2 px-4 rounded-md inline-block"
                    onClick={scrollToTop}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProTrainer;
