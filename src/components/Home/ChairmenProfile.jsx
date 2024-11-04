import image from "../../assets/CEO.jpg";

const ChairmenProfile = () => {
  return (
    <div className="lg:w-[80%] md:w-full mx-auto my-5 px-4">
      <div className="flex flex-col lg:flex-row py-10">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full px-4">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              CEO <span className="text-custom">Message</span>
            </h2>
            <div className="w-16 h-1 bg-custom mt-2"></div>
          </div>
          <div className=" text-justify text-gray-700 leading-relaxed text-base md:text-lg  space-y-4">
            <p>
              Human aspirations are limitless and everyone tries to achieve them
              to the maximum extent in their life but majority of us fail due to
              lack of required knowledge, skills and abilities. We believe that
              the best ideas come from within. They are inspired by the inner
              self that turns impossibilities into possibilities and dreams into
              reality.
            </p>
            <p>
              Our aim is to provide something innovative and different to our
              clients so that they can get respectable job opportunities
              nationally and internationally. It is a great honor for me to
              introduce myself as a prominent leading recruiting agency of
              Pakistan. We offer an ideal platform for those who are looking for
              a job or need skilled manpower. The main objective of the World
              Staff System is to provide qualified, skilled, and competent
              workforce throughout the world.The World Staff System works in an
              exemplary manner and benefits from all the facilities provided by
              the Government of Pakistan and other countries of the world.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end pt-5 items-center"
          data-aos="flip-left"
          data-aos-offset="300"
        >
          <img
            className="rounded shadow-lg w-64 h-80   object-fill md:h-[70vh] md:w-[33vw]  "
            src={image}
            alt="Chairman"
          />
        </div>
      </div>
    </div>
  );
};

export default ChairmenProfile;
