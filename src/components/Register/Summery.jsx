import React, { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const Summary = ({ formData, prevStep, nextStep }) => {
  // State to manage agreement status
  const [isAgreed, setIsAgreed] = useState(false);

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  // Function to send email using EmailJS
  const handleSubmit = () => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Your EmailJS service ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FORM_1;

    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; // Your EmailJS public key

    const emailParams = {
      email: formData.email || "",
      firstname: formData.firstname || "",
      lastname: formData.lastname || "",
      marital: formData.marital || "",
      genderId: formData.genderId || "",
      gender: formData.gender || "",
      hasPassport: formData.hasPassport || "",

      // Passport fields included only if hasPassport is "yes"
      passportCountry:
        formData.hasPassport === "yes" ? formData.passportCountry || "" : "",
      passportNumber:
        formData.hasPassport === "yes" ? formData.passportNumber || "" : "",
      expiryDate:
        formData.hasPassport === "yes" ? formData.expiryDate || "" : "",

      addressOne: formData.addressOne || "",
      addressTwo: formData.addressTwo || "",
      cityTown: formData.cityTown || "",
      statePrefecture: formData.statePrefecture || "",
      contactNumber: formData.contactNumber || "",
      residenceStatus: formData.residenceStatus || "",
      stayPeriod: formData.stayPeriod || "",
      residenceExpiration: formData.residenceExpiration || "",

      completedHighSchool: formData.completedHighSchool || "",

      // High School fields included only if completedHighSchool is "yes"
      highSchoolName:
        formData.completedHighSchool === "yes"
          ? formData.highSchoolName || ""
          : "",
      graduationDate:
        formData.completedHighSchool === "yes"
          ? formData.graduationDate || ""
          : "",
      highSchoolCity:
        formData.completedHighSchool === "yes"
          ? formData.highSchoolCity || ""
          : "",
      highSchoolCountry:
        formData.completedHighSchool === "yes"
          ? formData.highSchoolCountry || ""
          : "",

      degreeStatus: formData.degreeStatus || "",

      // College/University fields included based on degreeStatus conditions
      collegeName:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.collegeName || ""
          : "",
      fieldOfStudy:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.fieldOfStudy || ""
          : "",
      startDate:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.startDate || ""
          : "",
      graduationDateCollege:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.graduationDate || ""
          : "",
      collegeCity:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.collegeCity || ""
          : "",
      collegeCountry:
        formData.degreeStatus === "completed" ||
        formData.degreeStatus === "still_attending" ||
        formData.degreeStatus === "dropped_out"
          ? formData.collegeCountry || ""
          : "",

      // Japanese experience fields
      studiedJapanese: formData.studiedJapanese || "", // 'yes' or 'no'
      japaneseAbility:
        formData.studiedJapanese === "yes"
          ? formData.japaneseAbility || ""
          : "", // current ability
      takenJLPT:
        formData.studiedJapanese === "yes" ? formData.takenJLPT || "" : "", // 'yes' or 'no'
      jlptLevel: formData.takenJLPT === "yes" ? formData.jlptLevel || "" : "", // JLPT level
      visitedJapan: formData.visitedJapan || "", // 'yes' or 'no'

      // Financial support fields
      financialSupport: formData.financialSupport || "",
      // Employment fields
      hasEmploymentExperience: formData.hasEmploymentExperience || "", // 'yes' or 'no'
      companyName:
        formData.hasEmploymentExperience === "yes"
          ? formData.companyName || ""
          : "",
      companyAddress:
        formData.hasEmploymentExperience === "yes"
          ? formData.companyAddress || ""
          : "",
      workingFrom:
        formData.hasEmploymentExperience === "yes"
          ? formData.workingFrom || ""
          : "",
      workingTo:
        formData.hasEmploymentExperience === "yes"
          ? formData.workingTo || ""
          : "",
      workContent:
        formData.hasEmploymentExperience === "yes"
          ? formData.workContent || ""
          : "",

      // Employment experience in Japan fields
      hasEmploymentExperienceInJapan:
        formData.hasEmploymentExperienceInJapan || "", // 'yes' or 'no'
      companyNameJapan:
        formData.hasEmploymentExperienceInJapan === "yes"
          ? formData.companyNameJapan || ""
          : "",
      companyAddressJapan:
        formData.hasEmploymentExperienceInJapan === "yes"
          ? formData.companyAddressJapan || ""
          : "",
      workingFromJapan:
        formData.hasEmploymentExperienceInJapan === "yes"
          ? formData.workingFromJapan || ""
          : "",
      workingToJapan:
        formData.hasEmploymentExperienceInJapan === "yes"
          ? formData.workingToJapan || ""
          : "",
      workContentJapan:
        formData.hasEmploymentExperienceInJapan === "yes"
          ? formData.workContentJapan || ""
          : "",

      // Add consent agreement status
      consentAgreement: isAgreed ? "Agreed" : "Not Agreed",
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, emailParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        nextStep(); // Go to the next step after successful email submission
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <div className="border-2 border-custom p-1 md:p-8 lg:p-2 overflow-x-auto ">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">
        Summary & Review your Information
      </h1>
      <table className="w-96 md:min-w-full overflow-x-scroll scroll-smooth bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Field
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key}>
              <td className="py-2 px-4 border-b border-gray-200">{key}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {String(value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4  ">
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="w-24 bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="w-24 bg-custom text-white p-2 rounded hover:bg-blue-400 transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

Summary.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default Summary;
