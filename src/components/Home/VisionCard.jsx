import PropTypes from "prop-types";

const VisionCard = ({ icon, title, description }) => (
  <div className=" h-56 max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg border-2 border-[#0e87c4] flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    {/* Icon Section */}
    <div className="flex items-center justify-center h-16 w-16 rounded-full text-[#0e87c4] bg-[#e6f7ff]">
      {icon}
    </div>

    {/* Title and Description */}
    <div className="mt-5 text-center text-[#0e87c4]">
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

VisionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VisionCard;
