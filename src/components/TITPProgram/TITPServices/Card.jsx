import { useEffect } from "react";
import PropTypes from "prop-types"; // Step 1

import AOS from "aos";
import "aos/dist/aos.css";
const Card = ({ imgsrc, name, list }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    // lg:w-96 lg:h-96 md:w-64 md:h-64 sm:w-64 sm:h-64
    <div className="w-full h-full  text-center">
      <div
        className="relative bg-white shadow-sm border-2 border-custom shadow-custom rounded-lg overflow-hidden"
        data-aos-duration="2000"
        data-aos-easing="ease-out-cubic"
        data-aos="flip-left"
      >
        <img src={imgsrc} alt={name} className="w-96 h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center ">
          <div className="text-white p-4">
            <h4 className="text-lg font-bold mb-2">{name}</h4>
            <div className="flex justify-left opacity-0 hover:opacity-100 transition-opacity duration-300">
              <ul className="list-disc list-inside">
                {list.map((item, index) => (
                  <li key={index} className="text-base md:text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 2 & 3: Define and assign prop types
Card.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
