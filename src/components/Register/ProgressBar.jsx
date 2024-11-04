import PropTypes from "prop-types"; // Import PropTypes

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = Math.min(((currentStep - 1) / (totalSteps - 1)) * 100, 100);
  // Calculate progress percentage

  return (
    <div className="relative w-full">
      {" "}
      {/* Make this div relative to position children absolutely */}
      <div className="absolute left-0 right-0 -top-10 flex justify-end ">
        {" "}
        {/* Position step indicator */}
        <span className="text-2xl text-gray-600 py-1 px-3">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-full  bg-gradient-to-r from-blue-300 to-blue-600 rounded-full flex items-center justify-center"
          style={{ width: `${progress}%` }}
        >
          <span
            className={`text-sm text-center font-bold ${
              progress > 50 ? "text-white pr-2" : "text-black pl-2"
            }`}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default ProgressBar;
