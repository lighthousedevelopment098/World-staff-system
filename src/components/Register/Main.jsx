import { useState } from "react";
import FormOne from "./Forms/FormOne";
import FormThree from "./Forms/FormThree.jsx";
import FormSeven from "./Forms/FormSeven.jsx";
import Summary from "./Summery.jsx";
import ProgressBar from "./ProgressBar.jsx";

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const totalSteps = 3; // Only 3 steps to show progress bar for

  const nextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormOne nextStep={nextStep} formData={formData} />;
      case 2:
        return (
          <FormThree
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
          />
        );
      case 3:
        return (
          <FormSeven
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
          />
        );
      case 4:
        return (
          <Summary
            formData={formData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl  font-bold text-center">
            Thank You For Submitting{" "}
          </h1>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 my-10">
      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-8 text-center">
        {currentStep < 4
          ? "Registration Form"
          : currentStep === 4
          ? "Review Your Form"
          : ""}
      </h1>

      <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-6xl p-6">
        {/* Only show progress bar for steps 1 to 3 */}
        {currentStep <= 3 && (
          <div className="mb-8">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          </div>
        )}

        {renderStep()}
      </div>
    </div>
  );
};

export default Main;
