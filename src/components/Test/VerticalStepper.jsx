import React from 'react';
import { Steps } from '../../utils/data';

const VerticalStepper = () => {
  return (
    <>
      <style>
        {`
          .step-container:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: -8px; /* Adjust based on your layout */
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 5px solid transparent; /* Adjust size of the arrow */
            border-right: 5px solid transparent; /* Adjust size of the arrow */
            border-top: 5px solid #000; /* Adjust color and size of the arrow */
          }
        `}
      </style>
      <div className="p-4">
        <div className="flex flex-col">
          {Steps.map((step, index) => (
            <div key={index} className="mb-8 relative flex items-start step-container">
              {/* Container for label and step indicator */}
              <div className="flex items-center mr-4 relative">
                {/* Label */}
                <div className="text-lg bg-custom p-3 mr-2 w-44">{index + 1}</div>
                {/* Step indicator - shows active or not */}
                <div className="rounded-full h-8 w-8 bg-custom flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              {/* Description on the right side */}
              <div className="flex-1">
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
                {step.list && (
                  <ul className="list-disc pl-6 mt-2">
                    {step.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalStepper;
