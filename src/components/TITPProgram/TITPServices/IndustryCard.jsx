import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const IndustryCard = ({ servicesData, titleOne, titleTwo }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-left mb-6">
        <h2 className="text-xl md:text-2xl  font-bold mb-2">
          {titleOne} <span className="text-custom">{titleTwo}</span>
        </h2>
        <div className="border-2 border-custom w-16 mb-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {servicesData.slice(0, visibleCount).map((val, index) => (
          <Card
            key={val.id || index}
            imgsrc={val.imgsrc}
            name={val.name}
            list={val.list}
            className="transition-transform transform hover:scale-105 w-full hover:shadow-lg rounded-lg bg-gray-50"
          />
        ))}
      </div>
      {visibleCount < servicesData.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleSeeMore}
            className="bg-custom text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

IndustryCard.propTypes = {
  servicesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imgsrc: PropTypes.string,
      name: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
};

export default IndustryCard;
