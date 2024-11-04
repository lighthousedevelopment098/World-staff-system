import React from "react";
import { useForm } from "react-hook-form";

const CourseRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto p-5 bg-gray-200 rounded-lg mb-5">
        <div className="flex flex-col w-full lg:w-1/2 my-auto px-2 lg:px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-custom mb-4">
            Apply for Language Course
          </h2>

          <div className="mb-5">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
              Course Details
            </h3>
            <p className="text-justify text-base md:text-lg text-gray-700">
              The General Course Is Designed To Develop And Create A Balance
              Between The Four Skills Of Language: Speaking, Listening, Reading
              And Writing. Course Duration Will Be 12 Weeks (3 Months). Anyone
              who want To Study Or Work In Japan or just want To improve
              Language skills.
            </p>
          </div>
          <div className="mt-5">
            <h4 className="font-semibold text-gray-900">Note:</h4>
            <ul className="list-disc text-justify  text-base md:text-lg list-inside">
              <li>Minimum intermediate for N2 study visa for Japan</li>
            </ul>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-lg bg-white">
          <h1 className="text-2xl font-semibold text-center mb-5">
            Registration of Course
          </h1>
          <p className="text-justify text-base md:text-lg mb-5">
            Applicants are invited for Admission in Japanese Language Course (3
            Months 160 Hours)
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-base md:text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full p-2 border rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-base md:text-lg">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-base md:text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 block w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-500 text-base md:text-lg">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-base md:text-lg font-medium text-gray-700">
                Phone No
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`mt-1 block w-full p-2 border rounded-md ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Phone No"
              />
              {errors.phone && (
                <span className="text-red-500 text-base md:text-lg">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-base md:text-lg font-medium text-gray-700">
                Upload CV/Resume
              </label>
              <input
                type="file"
                {...register("resume", { required: "CV/Resume is required" })}
                className="mt-1 block w-full"
              />
              {errors.resume && (
                <span className="text-red-500 text-base md:text-lg">
                  {errors.resume.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className=" bg-custom text-white p-2 rounded-md hover:bg-custom transition duration-200"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseRegistration;
