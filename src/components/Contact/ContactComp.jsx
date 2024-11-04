import React from "react";
import ContactForm from "./ContactForm";

const ContactComp = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
          <img
            src="/traning.jpg"
            alt="Contact Us"
            className="object-cover p-20"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
