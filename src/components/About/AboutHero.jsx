import { useEffect, useState } from "react";
import FeatherImg from "../../assets/About/FeatherImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutHero = () => {
  const [showtxt, setShowtxt] = useState(false);
  const [showbtn, setshowbtn] = useState(true);

  const Showcontent = () => {
    setShowtxt(true);
    setshowbtn(false);
  };

  const Hidecontent = () => {
    setShowtxt(false);
    setshowbtn(true);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="mx-auto md:w-5/6   my-5 p-8 md:p-12  flex flex-col md:flex-row gap-6 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="img relative " data-aos="flip-right">
            <img
              src={FeatherImg}
              className="w-full h-full md:h-96  object-center border-4 border-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              alt="Feather"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="text-custom">About</span> US
          </h2>
          <div className="my-4 mx-auto md:mx-2  bg-custom w-16 h-1 "></div>
          <div className="text-gray-700 text-justify text-base md:text-lg mt-4  w-full leading-relaxed">
            <p>
              World Staff System was established on 14th April, 2016, Securities
              and Exchange Commission of Pakistan Corporate No: 0093838 /
              A005823, License No OP & HRD / 3929 / LHR / 2016 from Ministry of
              Overseas Pakistan and human resource development under the rule of
              7 & 9(1) with the ultimate vision of serving and the most reliable
              overseas recruitment services.World Staff System is the only
              overseas employment agency in Pakistan that offers Technical
              Intern Training Program (TITP), Japanese All Language Courses N1,
              N2, N3, N4, N5, Special Skilled Worker, as well as all
              International languages courses just like ILETs, TOFEL etc for
              study visa in all developed countries. World Staff System is also
              registered with the world's best organizations such as Japan
              International Trainee and Organization(JITCO), Organization for
              Technical Intern Training(OTIT) and Rainbow to improve quality of
              its services...
              {showbtn && (
                <button
                  onClick={Showcontent}
                  className="text-custom font-semibold underline hover:text-blue-800 transition duration-200"
                >
                  ...read more
                </button>
              )}
            </p>
            {showtxt && (
              <div className="mt-4">
                <p>
                  We believe in people performance. Our mission is not just to
                  satisfy our clients through manpower but to ensure that they
                  are able to achieve organizational goals and are strategically
                  fit for the position. This objective characterizes our
                  existence with the objective of providing complete HR services
                  to our clients and continuously embracing innovative
                  techniques to help the organization to maintain the
                  effectiveness of the firm and achieve maximum return on
                  assets. We value our candidates and on a regular basis our
                  expert team provides extensive training, career counseling and
                  continuous motivation.
                  <button
                    onClick={Hidecontent}
                    className="text-custom font-semibold underline hover:text-blue-800 transition duration-200"
                  >
                    ...read less
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
