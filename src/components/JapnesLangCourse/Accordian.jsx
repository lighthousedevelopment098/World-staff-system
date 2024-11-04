import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(-1); // State to track which accordion item is open

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index); // Toggle accordion item open/close
  };

  const accordionItems = [
    {
      title: "Course Duration",
      content: "Course Duration Will Be 12 Weeks (3 Months).",
    },
    {
      title: "How Can Join This Course?",
      content:
        "Anyone Searching For Japanese Language Classes Near Me, Who Want To Study Or Work In Japan. Or Just Want To Improve Language Skills.",
    },
    {
      title: "What Will I Get Form This Course",
      content:
        "The General Course Is Designed To Develop And Create A Balance Between The Four Skills Of Language: Speaking, Listening, Reading And Writing",
    },
  ];

  return (
    <div className="max-w-full  mx-auto">
      {accordionItems.map((item, index) => (
        <div key={index} className="border  rounded-lg border-gray-300">
          <button
            className="flex gap-20 items-center rounded-lg w-full p-4 bg-blue-100  focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <FaPlus />
            <span className="text-base md:text-lg font-semibold">
              {item.title}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4  text-base md:text-lg rounded-lg  ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
