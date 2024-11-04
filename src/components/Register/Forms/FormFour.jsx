import { useForm, useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormFour = ({ nextStep, prevStep, formData }) => {
  const { register, handleSubmit,control, formState: { errors } } = useForm({
    defaultValues: formData
  });
  const hasCompletedHighSchool = useWatch({ control, name: 'completedHighSchool', defaultValue: 'no' });

  const onSubmit = (data) => {
    console.log(data);
    nextStep(data);
  };

  return (
    <>
      <div className='border-2 border-custom p-1'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-4 bg-white mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Education History - High School</h1>

          <div className="py-2">
            <p className="text-gray-700">Have you completed your High School Education?</p>
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

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-custom hover:bg-blue-400"
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

FormFour.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormFour;
