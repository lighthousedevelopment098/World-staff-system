import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormSeven = ({ nextStep, prevStep, formData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  const hasEmploymentExperience = watch("hasEmploymentExperience");
  const hasEmploymentExperienceInJapan = watch(
    "hasEmploymentExperienceInJapan"
  );

  const onSubmit = (data,event) => {
    console.log(data);
    nextStep(data);
    event.preventDefault();
    formData = new FormData(event.target);
    const agreeToTerms = formData.get('agreeCheckbox') === 'on'; // Check if the checkbox is checked

    if (agreeToTerms) {
      // Process your form data here
      console.log("Form data submitted: ", { agreeToTerms });
      nextStep({ agreeToTerms }); // Pass data to the next step
    } else {
      // Handle the case where terms are not agreed to, if necessary
      
    }
  };

  return (
    <>
      <div className="border-2 border-custom p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 border-2 border-custom p-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">
            Financial Support Information
          </h2>

          <div className="py-2">
            <p className="text-gray-700">Method of Financial Support</p>
            <p className="text-gray-500 text-sm">
              Who will financially support you if selected to study abroad in
              Japan?
            </p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  {...register("financialSupport", {
                    required: "This field is required",
                  })}
                  type="radio"
                  value="myself"
                  className="form-radio"
                />
                <span className="ml-2">
                  Myself - I will support myself financially while studying in
                  Japan
                </span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("financialSupport", {
                    required: "This field is required",
                  })}
                  type="radio"
                  value="relative"
                  className="form-radio"
                />
                <span className="ml-2">
                  Relative - My relative(s) will offer financial support to me
                  while studying in Japan
                </span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("financialSupport", {
                    required: "This field is required",
                  })}
                  type="radio"
                  value="myself_and_relative"
                  className="form-radio"
                />
                <span className="ml-2">
                  Myself & Relative(s) - I will support myself financially with
                  assistance from my relative(s)
                </span>
              </label>
            </div>
            {errors.financialSupport && (
              <p className="text-red-500 text-sm">
                {errors.financialSupport.message}
              </p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              {/* <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">
                Business Career
              </h2> */}

              <div className="py-2">
                <p className="text-custom text-sm font-semibold">
                  Do you have employment experience?
                </p>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register("hasEmploymentExperience", {
                        required: "This field is required",
                      })}
                      type="radio"
                      value="yes"
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("hasEmploymentExperience", {
                        required: "This field is required",
                      })}
                      type="radio"
                      value="no"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.hasEmploymentExperience && (
                  <p className="text-red-500 text-sm">
                    {errors.hasEmploymentExperience.message}
                  </p>
                )}
              </div>

              {hasEmploymentExperience === "yes" && (
                <>
                  <div className="py-2">
                    <label className="block text-gray-700">Company Name</label>
                    <input
                      {...register("companyName", {
                        required: "Company Name is required",
                      })}
                      placeholder="Your answer"
                      className={`mt-1 block w-full p-2 border ${
                        errors.companyName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>
                  <div className="py-2">
                    <label className="block text-gray-700">
                      Company Address
                    </label>
                    <input
                      {...register("companyAddress", {
                        required: "Company Address is required",
                      })}
                      placeholder="Your answer"
                      className={`mt-1 block w-full p-2 border ${
                        errors.companyAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                    />
                    {errors.companyAddress && (
                      <p className="text-red-500 text-sm">
                        {errors.companyAddress.message}
                      </p>
                    )}
                  </div>
                  <div className="py-2">
                    <label className="block text-gray-700">Working From</label>
                    <input
                      {...register("workingFrom", {
                        required: "Working From date is required",
                      })}
                      type="date"
                      className={`mt-1 block w-full p-2 border ${
                        errors.workingFrom
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                    />
                    {errors.workingFrom && (
                      <p className="text-red-500 text-sm">
                        {errors.workingFrom.message}
                      </p>
                    )}
                  </div>
                  <div className="py-2">
                    <label className="block text-gray-700">Working To</label>
                    <input
                      {...register("workingTo", {
                        required: "Working To date is required",
                      })}
                      type="date"
                      className={`mt-1 block w-full p-2 border ${
                        errors.workingTo ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm`}
                    />
                    {errors.workingTo && (
                      <p className="text-red-500 text-sm">
                        {errors.workingTo.message}
                      </p>
                    )}
                  </div>
                  <div className="py-2">
                    <label className="block text-gray-700">Work Content</label>
                    <textarea
                      {...register("workContent", {
                        required: "Work Content is required",
                      })}
                      placeholder="Your answer"
                      className={`mt-1 block w-full p-2 border ${
                        errors.workContent
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm`}
                    />
                    {errors.workContent && (
                      <p className="text-red-500 text-sm">
                        {errors.workContent.message}
                      </p>
                    )}
                  </div>

                  <div className="py-2">
                    <p className="text-gray-700">
                      Employment experience in Japan:
                    </p>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center">
                        <input
                          {...register("hasEmploymentExperienceInJapan", {
                            required: "This field is required",
                          })}
                          type="radio"
                          value="yes"
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          {...register("hasEmploymentExperienceInJapan", {
                            required: "This field is required",
                          })}
                          type="radio"
                          value="no"
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {errors.hasEmploymentExperienceInJapan && (
                      <p className="text-red-500 text-sm">
                        {errors.hasEmploymentExperienceInJapan.message}
                      </p>
                    )}
                  </div>

                  {hasEmploymentExperienceInJapan === "yes" && (
                    <>
                      <div className="py-2">
                        <label className="block text-gray-700">
                          Company Name (Japan)
                        </label>
                        <input
                          {...register("companyNameJapan", {
                            required: "Company Name (Japan) is required",
                          })}
                          placeholder="Your answer"
                          className={`mt-1 block w-full p-2 border ${
                            errors.companyNameJapan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md shadow-sm`}
                        />
                        {errors.companyNameJapan && (
                          <p className="text-red-500 text-sm">
                            {errors.companyNameJapan.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2">
                        <label className="block text-gray-700">
                          Company Address (Japan)
                        </label>
                        <input
                          {...register("companyAddressJapan", {
                            required: "Company Address (Japan) is required",
                          })}
                          placeholder="Your answer"
                          className={`mt-1 block w-full p-2 border ${
                            errors.companyAddressJapan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md shadow-sm`}
                        />
                        {errors.companyAddressJapan && (
                          <p className="text-red-500 text-sm">
                            {errors.companyAddressJapan.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2">
                        <label className="block text-gray-700">
                          Working From (Japan)
                        </label>
                        <input
                          {...register("workingFromJapan", {
                            required: "Working From date (Japan) is required",
                          })}
                          type="date"
                          className={`mt-1 block w-full p-2 border ${
                            errors.workingFromJapan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md shadow-sm`}
                        />
                        {errors.workingFromJapan && (
                          <p className="text-red-500 text-sm">
                            {errors.workingFromJapan.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2">
                        <label className="block text-gray-700">
                          Working To (Japan)
                        </label>
                        <input
                          {...register("workingToJapan", {
                            required: "Working To date (Japan) is required",
                          })}
                          type="date"
                          className={`mt-1 block w-full p-2 border ${
                            errors.workingToJapan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md shadow-sm`}
                        />
                        {errors.workingToJapan && (
                          <p className="text-red-500 text-sm">
                            {errors.workingToJapan.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2">
                        <label className="block text-gray-700">
                          Work Content (Japan)
                        </label>
                        <textarea
                          {...register("workContentJapan", {
                            required: "Work Content (Japan) is required",
                          })}
                          placeholder="Your answer"
                          className={`mt-1 block w-full p-2 border ${
                            errors.workContentJapan
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-md shadow-sm`}
                        />
                        {errors.workContentJapan && (
                          <p className="text-red-500 text-sm">
                            {errors.workContentJapan.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </>
              )}

              {/* <button type="submit" className="bg-custom text-white py-2 px-4 rounded">
      Submit
    </button>
    <button type="button" onClick={prevStep} className="text-custom py-2 px-4 rounded border border-custom">
      Back
    </button> */}
            </form>
            <div className=''>
      <form onSubmit={onSubmit} className=" ">
        <h2 className="text-sm font-semibold  text-custom">Consent Agreement</h2>
        
        <div className="py-2 flex items-center">
          <input
            type="checkbox"
            name="agreeCheckbox"
            id="agreeCheckbox"
            className="form-checkbox h-4 w-4 text-indigo-600"
            required
          />
          <label htmlFor="agreeCheckbox" className="ml-2 text-gray-700">
            Yes, I agree to these terms
          </label>
        </div>

       
      </form>
    </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-white bg-custom hover:bg-blue-400"
            >
              Previous
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-custom hover:bg-blue-400"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

FormSeven.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormSeven;