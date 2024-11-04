import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Job = () => {
  useEffect(() => {
    AOS.init({
      // You can also pass other settings to AOS here
      duration: 1000, // Global animation duration in milliseconds
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row w-full px-5 md:px-20 py-10 bg-gray-100 justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col px-5 md:px-20 py-10 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Job in <span className="text-custom">Japan</span>
        </h1>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
          <li>
            It is possible to find a job while attending a Japanese language
            school and seek employment at a Japanese company or a branch office
            of a global company in Japan.
          </li>
          <li>
            Under the influence of a declining population, Japan is actively
            welcoming individuals from around the world who wish to play an
            active role in the country, leading to expanded opportunities for
            career advancement.
          </li>
          <li>
            Many students return to their home countries and find employment in
            Japanese companies as well.
          </li>
        </ul>
      </div>
      <div className="w-1/2" data-aos="flip-right">
        <img src="/jap-job.jpg" alt="" className="object-contain " />
      </div>
    </div>
  );
};
export default Job;
