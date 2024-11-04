import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Slider from "react-slick";
import { Servicesdata } from "../../utils/data";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <section className="lg:w-[80%] md:w-full mx-auto my-12">
      <div className="mx-5 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our <span className="text-custom">Services</span>
          </h2>
          <div className="my-4  bg-custom w-16 h-1 mx-auto"></div>
          <p className="text-base md:text-lg text-justify  md:px-3 px-3 mx-auto max-w-4xl">
            Our aim is to provide our clients and candidates with excellent
            recruitment services based on mutual trust and the highest
            professional standards driven by quality and cost consciousness.
            Most of our business is done on the basis of referrals from both
            candidates and clients. We strive to develop true partnerships with
            our clients to fully understand their business goals and needs,
            building and maintaining relationships based on mutual trust.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {Servicesdata.map((service, index) => (
            <div
              key={index}
              className="px-4 slideUp transform transition duration-300 hover:scale-105"
            >
              <div
                className="px-5 py-3 text-center shadow-custom shadow-sm rounded-md  h-40 border border-[#0E87C4] bg-white hover:bg-gray-50"
                data-aos="flip-up"
              >
                <div className="flex justify-center items-center border border-gray-300 shadow-sm shadow-cyan-500 h-20 w-20 mx-auto rounded-full bg-gradient-to-tr from-[#0E87C4] to-[#0E87C4] hover:from-[#0E87C4] hover:t-[#0E87C4] transition duration-300">
                  <img
                    src={service.img}
                    alt="img"
                    className="h-full w-full rounded-full object-cover shadow-sm"
                  />
                </div>
                <h6 className="mt-4  font-semibold text-gray-800 hover:text-[#0E87C4]    transition duration-300">
                  {service.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
