import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormTwo = ({ nextStep, prevStep,formData }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: formData
  });  const hasPassport = watch('hasPassport');

  const onSubmit = (data) => {
    console.log(data);
    nextStep(data);
  };

  return (
    <>
      <div className="border-2 border-custom p-1">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4  border-2 border-custom bg-white mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Passport Information</h1>
          <p className="text-gray-700">Do you have a passport?</p>
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

          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-custom hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
            >
              Previous
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

FormTwo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormTwo;
