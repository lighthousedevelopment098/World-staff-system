import { useForm, useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormFive = ({ nextStep, prevStep, formData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm(
    { defaultValues: formData }
  );
  const degreeStatus = useWatch({ control, name: 'degreeStatus', defaultValue: '' });

  const onSubmit = (data) => {
    console.log(data);
    nextStep(data);
  };

  return (
    <>
      <div className='border-2 border-custom p-2 '>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-4  bg-white ">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Education History - College/University</h1>
          <div className="py-2">
            <p className="text-gray-700">Have you completed your College/University Degree Program?</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  {...register("degreeStatus", { required: "This field is required" })}
                  type="radio"
                  value="completed"
                  className="form-radio"
                />
                <span className="ml-2">Yes, I have completed my College/University Degree Program</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("degreeStatus", { required: "This field is required" })}
                  type="radio"
                  value="still_attending"
                  className="form-radio"
                />
                <span className="ml-2">No, I did not complete my College/University Degree Program as I am still attending</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("degreeStatus", { required: "This field is required" })}
                  type="radio"
                  value="dropped_out"
                  className="form-radio"
                />
                <span className="ml-2">No, I did not complete my College/University Degree Program as I have dropped out</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("degreeStatus", { required: "This field is required" })}
                  type="radio"
                  value="no_high_school"
                  className="form-radio"
                />
                <span className="ml-2">No, I have not completed my High School education</span>
              </label>
            </div>
            {errors.degreeStatus && (
              <p className="text-red-500 text-sm">{errors.degreeStatus.message}</p>
            )}
          </div>
          {(degreeStatus === 'completed' || degreeStatus === 'still_attending' || degreeStatus === 'dropped_out') && (
            <>
              <div className="py-2">
                <label className="block text-gray-700">College/University Name</label>
                <input
                  {...register("collegeName", { required: "College/University Name is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.collegeName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.collegeName && (
                  <p className="text-red-500 text-sm">{errors.collegeName.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Major or Field of Study</label>
                <input
                  {...register("fieldOfStudy", { required: "Major or Field of Study is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.fieldOfStudy ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.fieldOfStudy && (
                  <p className="text-red-500 text-sm">{errors.fieldOfStudy.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Start Date of College/University Degree Program</label>
                <input
                  {...register("startDate", { required: "Start Date is required" })}
                  type="date"
                  className={`mt-1 block w-full p-2 border ${errors.startDate ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm">{errors.startDate.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Graduation Date or Expected Graduation Date</label>
                <input
                  {...register("graduationDate", { required: "Graduation Date or Expected Graduation Date is required" })}
                  type="date"
                  className={`mt-1 block w-full p-2 border ${errors.graduationDate ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.graduationDate && (
                  <p className="text-red-500 text-sm">{errors.graduationDate.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">City of College/University</label>
                <input
                  {...register("collegeCity", { required: "City of College/University is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.collegeCity ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.collegeCity && (
                  <p className="text-red-500 text-sm">{errors.collegeCity.message}</p>
                )}
              </div>
              <div className="py-2">
                <label className="block text-gray-700">Country of College/University</label>
                <input
                  {...register("collegeCountry", { required: "Country of College/University is required" })}
                  type="text"
                  placeholder="Your answer"
                  className={`mt-1 block w-full p-2 border ${errors.collegeCountry ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
                />
                {errors.collegeCountry && (
                  <p className="text-red-500 text-sm">{errors.collegeCountry.message}</p>
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

FormFive.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormFive;
