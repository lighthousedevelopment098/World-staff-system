import { useEffect } from "react";
import { Link } from "react-router-dom";
import OurMis from "../../assets/About/about-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="w-5/6 mx-auto p-5">
        <div className="my-2">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-2 flex flex-col justify-center items-center md:items-start text-justify">
              <h2 className="text-2xl md:text-3xl text-center  font-bold">
                Our <span className="text-custom">Mission</span>
              </h2>
              <div className="my-4 mx-auto md:mx-2 bg-custom w-16 h-1 "></div>
              <div className="mt-3">
                <p className="text-base md:text-lg leading-relaxed">
                  The success of an organization depends upon its achievement,
                  which is associated with the workers' efficiency. We enhance
                  our workers' efficiency as well as customer services. Our
                  mission is not only to satisfy our clients by sourcing
                  manpower but also to help them acquire organizational goals by
                  applying suitable strategies. We provide our clients with
                  up-to-the-mark HR services constantly, so that they may
                  maintain and retain organizational services effectively. Our
                  expert team provides professional training, guidance,
                  motivation, and career counseling 24/7.
                </p>
              </div>
              <div className="flex justify-center items-center w-full py-4">
                <Link
                  to="/register"
                  className="bg-custom text-white py-2 px-4 rounded mt-4"
                  onClick={scrollToTop}
                >
                  Apply Now
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-2 flex justify-center items-center">
              <div className="overflow-hidden" data-aos="flip-up">
                <img
                  src={OurMis}
                  alt="Our Mission"
                  className="h-52 w-full md:h-80 rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
