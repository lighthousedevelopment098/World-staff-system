import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Graduate = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full px-5 md:px-20 bg-gray-100">
      <div className="flex flex-col w-full md:w-1/2 p-5 md:p-20 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Graduate <span className="text-custom">School / University</span>{" "}
        </h1>
        <div className="my-4 mx-2  bg-custom w-16 h-1 "></div>
        <p className="text-gray-700 text-base md:text-lg text-justify">
          You cannot take the EJU exam from your home country, which is a
          requirement for applying to universities and graduate schools in
          Japan. Only a few universities allow direct applications and
          examinations from overseas. Additionally, you will need to apply for a
          visa independently. Merely studying outside of Japan is insufficient
          for developing the necessary Japanese language skills (speaking and
          writing).
        </p>

        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg text-justify">
          <li>
            You must have completed a 12-year curriculum in your home country
            and possess a high school diploma.
          </li>
          <li>
            If the education system in your home country is less than 12 years,
            you must have Japanese language skills equivalent to JLPT N5 or
            higher, or proof of 160 hours of language learning, as well as
            sufficient ability to pay for tuition and living expenses in Japan.
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2" data-aos="flip-right">
        <img
          src="/jap-gra.jpg"
          alt=""
          className="p-5 md:p-20 object-cover  h-full w-full"
        />
      </div>
    </div>
  );
};
export default Graduate;
