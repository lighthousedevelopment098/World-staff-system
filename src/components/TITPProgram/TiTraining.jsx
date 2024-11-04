import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TiTraining = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="mx-auto flex flex-col lg:flex-row-reverse lg:w-[80%] px-4 md:px-10 lg:px-20 py-5">
      <div className="flex flex-col items-center text-center lg:w-1/2 w-full px-2 lg:px-0">
        <h1 className="text-2xl md:text-3xl font-bold my-5">
          Planning <span className="text-custom">To Study</span> Abroad?
        </h1>

        <p className="text-justify text-base md:text-lg">
          Technical Intern Training Program (TITP) is a program for young
          workers of various overseas countries to acquire industrial and
          vocational skills such as technical intern trainees at companies in
          Japan. The selected candidates are provided three to five years
          training for enhancing their professional skills which enable them to
          utilize such skills for economic and industrial development after
          returning their own countries. In short, main objective of TITP is to
          develop Human Resources (HR) which may promote the industrial
          development of overseas countries by utilizing Japanese technology.
          Technical Intern Training Program (TITP) is running in different
          countries of the world like China, Indonesia, Vietnam, India, and
          Bangladesh etc. Therefore, keeping this in mind and seeing the growing
          unemployment situation in Pakistan, the World Staff System took
          initiative and play consulting and mediator role and create MoU with
          accepting companies of Japan and Sending organization of Pakistan
          regarding Technical Intern Training Program (TITP). So that World
          Staff System became the pioneer company to work on Technical Intern
          Training Program (TITP) in Pakistan. The main objective of our company
          is to free skilled people from the scourge of unemployment in
          Pakistan.
        </p>
      </div>
      <div
        className="flex w-full lg:w-1/2 items-center justify-center py-5"
        data-aos="flip-right"
      >
        <img
          src="src/assets/Japnes/titp-first-section.jpg"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TiTraining;
