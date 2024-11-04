import React from "react";
import background from "../../assets/Japnes/japanstudy.jpg";

const SchoolOffering = () => {
  return (
    <div
      className="lg:h-96 flex flex-col justify-center items-center mx-auto bg-fixed text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-gray-900 bg-opacity-50 text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4  p-3  rounded">
          Japanese Language School Offerings
        </h1>
        <p className="lg:w-[70%] text-base md:text-lg text-justify text-white mx-4 p-4 rounded-lg ">
          You can obtain a student visa by enrolling in a Japanese language
          school, which will support you from the visa process through your
          arrival in Japan. The school provides comprehensive guidance on life
          and career, with opportunities to take the JLPT and EJU exams up to
          four times each over two years. Beyond class hours, you’ll also deepen
          your understanding of Japanese society and build communication skills
          through cultural experiences and part-time work.
        </p>
      </div>
    </div>
  );
};

export default SchoolOffering;
