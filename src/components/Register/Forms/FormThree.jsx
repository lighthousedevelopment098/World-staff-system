import { useForm,useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormThree = ({ nextStep, prevStep, formData }) => {
  const { register, handleSubmit,control, formState: { errors } } = useForm({
    defaultValues: formData
  });
  const degreeStatus = useWatch({ control, name: 'degreeStatus', defaultValue: '' });
  const studiedJapanese = useWatch({ control, name: 'studiedJapanese', defaultValue: '' });
  const takenJLPT = useWatch({ control, name: 'takenJLPT', defaultValue: '' });
  const onSubmit = (data) => {
    console.log(data);
    nextStep(data);
  };

  return (
    <>
      <div className="border-2 border-custom p-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-2 bg-white  mx-auto ">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Postal Address</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className="py-2">
            <label className="block text-gray-700">Postal Address </label>
            {/* <p className="text-gray-500 text-sm">Please enter your postal address line 1.</p> */}
            <textarea
              {...register("addressOne", { required: "Postal Address Line 1 is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.addressOne ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.addressOne && (
              <p className="text-red-500 text-sm">{errors.addressOne.message}</p>
            )}
          </div>

          {/* <div className="py-2">
            <label className="block text-gray-700">Postal Address Line 2</label>
            <p className="text-gray-500 text-sm">Please enter your postal address line 2.</p>
            <textarea
              {...register("addressTwo", { required: "Postal Address Line 2 is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.addressTwo ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.addressTwo && (
              <p className="text-red-500 text-sm">{errors.addressTwo.message}</p>
            )}
          </div> */}
          
          <div className="py-2">
            <label className="block text-gray-700">City or Town Name</label>
            {/* <p className="text-gray-500 text-sm">Please enter the city or town of your postal address.</p> */}
            <textarea
              {...register("cityTown", { required: "City or Town Name is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.cityTown ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.cityTown && (
              <p className="text-red-500 text-sm">{errors.cityTown.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">State or Prefecture</label>
            {/* <p className="text-gray-500 text-sm">Please enter the state or prefecture of your postal address.</p> */}
            <textarea
              {...register("statePrefecture", { required: "State or Prefecture is required" })}
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.statePrefecture ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.statePrefecture && (
              <p className="text-red-500 text-sm">{errors.statePrefecture.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Contact Number</label>
            {/* <p className="text-gray-500 text-sm">Please enter your preferred contact phone number.</p> */}
            <input
              {...register("contactNumber", { required: "Contact Number is required" })}
              type="number"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.contactNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Status of Residence</label>
            <input
              {...register("residenceStatus", { required: "Status of Residence is required" })}
              type="text"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.residenceStatus ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.residenceStatus && (
              <p className="text-red-500 text-sm">{errors.residenceStatus.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Period of Stay</label>
            <input
              {...register("stayPeriod", { required: "Period of Stay is required" })}
              type="text"
              placeholder="Your answer"
              className={`mt-1 block w-full p-2 border ${errors.stayPeriod ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.stayPeriod && (
              <p className="text-red-500 text-sm">{errors.stayPeriod.message}</p>
            )}
          </div>

          <div className="py-2">
            <label className="block text-gray-700">Date of Expiration</label>
            {/* <p className="text-gray-500 text-sm">Please enter your date of residence stay period expiration.</p> */}
            <input
              {...register("residenceExpiration", { required: "Date of Expiration is required" })}
              type="date"
              className={`mt-1 block w-full p-2 border ${errors.residenceExpiration ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm`}
            />
            {errors.residenceExpiration && (
              <p className="text-red-500 text-sm">{errors.residenceExpiration.message}</p>
            )}
          </div>
          <div className=' p-2 '>
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="   bg-white ">
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Education History - College/University</h1> */}
          <div className="py-2">
            <p className="text-custom font-semibold text-sm">Have you completed your College/University Degree Program?</p>
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
          
        </form>
        <div className=' '>
        <form onSubmit={handleSubmit(onSubmit)} className=" bg-white">
          {/* <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Japanese Experience</h2> */}
          
          <div className="py-2">
            <p className="text-custom font-semibold text-sm">Have you ever studied the Japanese language?</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  {...register("studiedJapanese", { required: "This field is required" })}
                  type="radio"
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("studiedJapanese", { required: "This field is required" })}
                  type="radio"
                  value="no"
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.studiedJapanese && (
              <p className="text-red-500 text-sm">{errors.studiedJapanese.message}</p>
            )}
          </div>

          {studiedJapanese === 'yes' && (
            <>
              <div className="py-2">
                <p className="text-gray-700">How would you describe your current Japanese Language Ability?</p>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="basic"
                      className="form-radio"
                    />
                    <span className="ml-2">Basic/JLPT N5</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="elementary"
                      className="form-radio"
                    />
                    <span className="ml-2">Elementary/JLPT N4</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="intermediate"
                      className="form-radio"
                    />
                    <span className="ml-2">Intermediate/JLPT N3</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="pre_advanced"
                      className="form-radio"
                    />
                    <span className="ml-2">Pre-Advanced/JLPT N2</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="advanced"
                      className="form-radio"
                    />
                    <span className="ml-2">Advanced/JLPT N1</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("japaneseAbility", { required: "This field is required" })}
                      type="radio"
                      value="none"
                      className="form-radio"
                    />
                    <span className="ml-2">None</span>
                  </label>
                </div>
                {errors.japaneseAbility && (
                  <p className="text-red-500 text-sm">{errors.japaneseAbility.message}</p>
                )}
              </div>

              <div className="py-2">
                <p className="text-gray-700">Have you ever taken the Japanese Language Placement Test (JLPT)?</p>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register("takenJLPT", { required: "This field is required" })}
                      type="radio"
                      value="yes"
                      className="form-radio"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register("takenJLPT", { required: "This field is required" })}
                      type="radio"
                      value="no"
                      className="form-radio"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {errors.takenJLPT && (
                  <p className="text-red-500 text-sm">{errors.takenJLPT.message}</p>
                )}
              </div>

              {takenJLPT === 'yes' && (
                <div className="py-2">
                  <p className="text-gray-700">If " yes ", what was your level of placement in the JLPT?</p>
                  <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="basic"
                        className="form-radio"
                      />
                      <span className="ml-2">Basic/JLPT N5</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="elementary"
                        className="form-radio"
                      />
                      <span className="ml-2">Elementary/JLPT N4</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="intermediate"
                        className="form-radio"
                      />
                      <span className="ml-2">Intermediate/JLPT N3</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="pre_advanced"
                        className="form-radio"
                      />
                      <span className="ml-2">Pre-Advanced/JLPT N2</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="advanced"
                        className="form-radio"
                      />
                      <span className="ml-2">Advanced/JLPT N1</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        {...register("jlptLevel", { required: "This field is required" })}
                        type="radio"
                        value="none"
                        className="form-radio"
                      />
                      <span className="ml-2">None</span>
                    </label>
                  </div>
                  {errors.jlptLevel && (
                    <p className="text-red-500 text-sm">{errors.jlptLevel.message}</p>
                  )}
                </div>
              )}
            </>
          )}

          <div className="py-2">
            <p className="text-custom text-sm font-semibold">Have you ever visited Japan?</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  {...register("visitedJapan", { required: "This field is required" })}
                  type="radio"
                  value="yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  {...register("visitedJapan", { required: "This field is required" })}
                  type="radio"
                  value="no"
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.visitedJapan && (
              <p className="text-red-500 text-sm">{errors.visitedJapan.message}</p>
            )}
          </div>
        </form>
      </div>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center text-white px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  bg-custom hover:bg-blue-400"
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

FormThree.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormThree;
