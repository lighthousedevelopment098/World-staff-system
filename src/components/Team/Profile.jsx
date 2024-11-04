import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12">
              <div className="lg:w-[70%] mx-auto">
                <h2 className="text-2xl md:text-3xl text-center  font-bold">
                  Our <span className="text-custom">Team</span>
                </h2>
                <div className="my-4  mx-auto  bg-custom w-16 h-1 "></div>

                <p className="text-gray-700 text-base md:text-lg md:text-center text-justify">
                  Our team is the key to our success. Each employee is
                  exceptional in their own way, but together, they make World
                  Staff System an incredible and rewarding place to work.
                </p>
              </div>
              {/* <div className="text-center mt-8" data-aos="fade-down">
                <img src={Imgstd} alt="study" className="w-full h-48 object-cover" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
