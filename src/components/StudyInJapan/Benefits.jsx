import React from "react";
import background from "/japan.jpg";

const Benefits = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-gray-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="lg:w-[80%] w-full mx-auto py-10 gap-4 bg-gray-900 bg-opacity-50 p-6">
        <h1 className="text-2xl md:text-3xl  text-center font-bold text-white mb-5">
          Benefits of Studying <span className="text-custom"> in Japan</span>
        </h1>
        <p className="text-base md:text-lg text-justify text-white px-4 py-2 rounded-lg">
          The benefits of studying abroad include exploring a new culture,
          gaining independence while living in a foreign country, building a
          global network of friends, experiencing a different educational style,
          and standing out to future employers. Learning goes beyond the
          classroom; meeting people from diverse backgrounds and forming
          friendships worldwide are also essential parts of personal growth
        </p>
        <ul className="list-disc list-inside mt-5 text-white space-y-4 text-base md:text-lg">
          <li>Japan offers a high quality of education.</li>
          <li>
            Excellent employment opportunities for international students.
          </li>
          <li>Affordable tuition fees & generous scholarship.</li>
          <li>Safe and secure, with an outstanding healthcare system.</li>
          <li>Earn a degree while learning Japanese.</li>
          <li>Discover Japanese culture, history, and nature</li>
          <li>Enjoy a high quality of life.</li>
          <li>Japan fosters self-discovery and an adventurous spirit</li>
          <li>Build lifelong friendships and career connections</li>
          <li>Experience authentic Japanese cuisine at its best.</li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
