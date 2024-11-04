import { testimonials } from "../../utils/data";

const StudentSay = () => {
  // Testimonial data array

  return (
    <div>
      <section className=" py-8">
        <div className="lg:w-[80%] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 text-gray-800">
            What <span className="text-custom">Our Students</span> Have to Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos={testimonial.animation}
                data-aos-duration="1000"
                className="bg-gray-100 shadow-md rounded-lg p-6"
              >
                <p className="text-gray-700 text-justify text-base md:text-lg">
                  {testimonial.message}
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-custom">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentSay;
