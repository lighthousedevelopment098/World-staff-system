import React from "react";
import { useForm,useWatch } from "react-hook-form";
import PropTypes from "prop-types";


const FormOne = ({ nextStep, formData }) => {
  const { register, handleSubmit,watch,control, formState: { errors } } = useForm({
    defaultValues: formData
  });const hasPassport = watch('hasPassport');
  const hasCompletedHighSchool = useWatch({ control, name: 'completedHighSchool', defaultValue: 'no' });

  const onSubmit = (data) => {
    // Replace with your form submission logic
    console.log(data);
    nextStep(data);
  };

  return (
    <div className="border-2 border-custom p-1  lg:p-2 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-custom mx-auto p-4 "
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">General Information</h1>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-custom">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            className={`mt-1 block w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-custom">
              Given Name (First Name)
            </label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.firstname ? "border-red-500" : "border-gray-300"} rounded-md`}
              {...register("firstname", { required: "First Name is required" })}
              aria-invalid={errors.firstname ? "true" : "false"}
              aria-describedby="firstname-error"
            />
            {errors.firstname && (
              <p id="firstname-error" className="text-red-500 text-xs italic">
                {errors.firstname.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-custom">
              Family Name (Last Name)
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.lastname ? "border-red-500" : "border-gray-300"} rounded-md`}
              {...register("lastname", { required: "Last Name is required" })}
              aria-invalid={errors.lastname ? "true" : "false"}
              aria-describedby="lastname-error"
            />
            {errors.lastname && (
              <p id="lastname-error" className="text-red-500 text-xs italic">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
        <div className="mb-6 mt-6">
          <label className="block text-sm font-medium text-custom">
            Marital Status
          </label>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="marital"
                value="married"
                className="form-radio"
                {...register("marital", { required: "Marital Status is required" })}
                aria-invalid={errors.marital ? "true" : "false"}
                aria-describedby="marital-error"
              />
              <span className="ml-2">Married</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="marital"
                value="single"
                className="form-radio"
                {...register("marital", { required: "Marital Status is required" })}
                aria-invalid={errors.marital ? "true" : "false"}
                aria-describedby="marital-error"
              />
              <span className="ml-2">Single</span>
            </label>
          </div>
          {errors.marital && (
            <p id="marital-error" className="text-red-500 text-xs italic">
              {errors.marital.message}
            </p>
          )}
        </div>

        <div className="ml-6">
          <label className="block text-sm font-medium text-custom">Gender Identity</label>
          {/* <p className="text-gray-500">
            Please enter the gender you wish to identify as. If you do not wish to identify as Male or Female, please answer at your own accord.
          </p> */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="male"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="female"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="genderId"
                value="other"
                className="form-radio"
                {...register("genderId", { required: "Gender Identity is required" })}
                aria-invalid={errors.genderId ? "true" : "false"}
                aria-describedby="genderId-error"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.genderId && (
            <p id="genderId-error" className="text-red-500 text-xs italic">
              {errors.genderId.message}
            </p>
          )}
        </div>
        </div>
        {/* <div className="mb-6">
          <label className="block text-sm font-medium text-custom">
            Gender as written on birth certificate
          </label>
          <p className="text-gray-500">
            Please enter the gender which is written on your birth certificate. We understand that some of this information is sensitive, however this information is important for immigration procedures in Japan.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                className="form-radio"
                {...register("gender", { required: "Gender Identity is required" })}
                aria-invalid={errors.gender ? "true" : "false"}
                aria-describedby="gender-error"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.gender && (
            <p id="gender-error" className="text-red-500 text-xs italic">
              {errors.gender.message}
            </p>
          )}
        </div> */}
        <div className=" ">
        <form onSubmit={handleSubmit(onSubmit)} className="  bg-white mx-auto">
         
          <p className="text-custom font-semibold text-sm">Do you have a passport?</p>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <label className="flex items-center">
              <input
                {...register('hasPassport', { required: "This field is required" })}
                type="radio"
                value="yes"
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                {...register('hasPassport', { required: "This field is required" })}
                type="radio"
                value="no"
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.hasPassport && <span className="text-red-500 text-sm">{errors.hasPassport.message}</span>}

          {hasPassport === 'yes' && (
            <>
              <label className="block">
                <span className="text-gray-700">Passport Country:</span>
                <input
                  {...register('passportCountry', { required: "This field is required" })}
                  type="text"
                  className={`mt-1 block w-full p-2 border ${errors.passportCountry ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                />
                {errors.passportCountry && <span className="text-red-500 text-sm">{errors.passportCountry.message}</span>}
              </label>
              <label className="block">
                <span className="text-gray-700">Passport Number:</span>
                <input
                  {...register('passportNumber', { required: "This field is required" })}
                  type="text"
                  className={`mt-1 block w-full p-2 border ${errors.passportNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                />
                {errors.passportNumber && <span className="text-red-500 text-sm">{errors.passportNumber.message}</span>}
              </label>
              <label className="block">
                <span className="text-gray-700">Expiry Date:</span>
                <input
                  {...register('expiryDate', { required: "This field is required" })}
                  type="date"
                  className={`mt-1 block w-full p-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                />
                {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate.message}</span>}
              </label>
            </>
          )}
           <div className=' p-1'>
        <form onSubmit={handleSubmit(onSubmit)} className="  bg-white mx-auto">
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Education History - High School</h1> */}

          <div className="py-2">
            <p className="text-custom font-semibold text-sm">Have you completed your High School Education?</p>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <label className="flex items-center">
                <input
                  {...register("completedHighSchool", { required: "This field is required" })}
                  type="radio"
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("completedHighSchool", { required: "This field is required" })}
                  type="radio"
                  value="no"
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.completedHighSchool && (
              <p className="text-red-500 text-sm">{errors.completedHighSchool.message}</p>
            )}
          </div>

          {hasCompletedHighSchool === 'yes' && (
            <>
              <div className="py-2">
                <label className="block text-gray-700">High School Name</label>
                <input
                  {...register("highSchoolName", { required: "High School Name is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.highSchoolName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.highSchoolName && (
                  <p className="text-red-500 text-sm">{errors.highSchoolName.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Graduation Date</label>
                <input
                  {...register("graduationDate", { required: "Graduation Date is required" })}
                  type="date"
                  className={`mt-1 block w-full p-2 border ${errors.graduationDate ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.graduationDate && (
                  <p className="text-red-500 text-sm">{errors.graduationDate.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">City of High School</label>
                <input
                  {...register("highSchoolCity", { required: "City of High School is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.highSchoolCity ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.highSchoolCity && (
                  <p className="text-red-500 text-sm">{errors.highSchoolCity.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Country of High School</label>
                <input
                  {...register("highSchoolCountry", { required: "Country of High School is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.highSchoolCountry ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.highSchoolCountry && (
                  <p className="text-red-500 text-sm">{errors.highSchoolCountry.message}</p>
                )}
              </div>
            </>
          )}

         
        </form>
      </div>
    
        </form>
      </div>
        <div className="mb-4 mt-2">
          <button type="submit" className="bg-custom hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

FormOne.propTypes = {
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormOne;
