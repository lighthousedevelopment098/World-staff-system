
import { useForm, useWatch } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormSix = ({ nextStep, prevStep,formData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm(
    {     defaultValues: formData }
  );
  const studiedJapanese = useWatch({ control, name: 'studiedJapanese', defaultValue: '' });
  const takenJLPT = useWatch({ control, name: 'takenJLPT', defaultValue: '' });

  const onSubmit = (data) => {
    console.log(data);
    nextStep(data);
  };

  return (
    <>
      <div className='border-2 border-custom p-2'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border-2 border-custom p-4 bg-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-custom">Japanese Experience</h2>
          
          <div className="py-2">
            <p className="text-gray-700">Have you ever studied the Japanese language?</p>
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
            <p className="text-gray-700">Have you ever visited Japan?</p>
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

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center px-4 py-2 bg-custom border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-blue-400"
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

FormSix.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormSix;
