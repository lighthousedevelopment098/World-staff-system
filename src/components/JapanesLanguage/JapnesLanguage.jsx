import React from "react";
import { Link } from 'react-router-dom';
import ImageTwo from "../../assets/Japnes/lang.jpg";

const JapnesLangugae = () => {
  return (
    <div>
      <div className="hero_section text-center relative bg-cover bg-center" style={{ backgroundImage: `url(${ImageTwo})` }}>
        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white" data-aos="zoom-in">
            <h2 className="text-3xl font-bold mb-2">Japanese Language In Pakistan</h2>
            <p className="text-lg">We Provide the Best Japanese Language In Pakistan</p>
          </div>
        </div>
      </div>

      <section className="japnees_section my-12">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-6 mt-2 col-12">
              <h2 className="text-2xl font-bold">
                We <span className="text-custom">Provide</span> the Best <span className="text-custom">Solution...</span>
              </h2>
              <div className="double-line-bottom-theme-colored-2 my-4"></div>
              <p className="mb-4">
                It is obvious that language plays a vital role as it helps the individual to express their feelings in an organized manner. Japan is an advanced country and the person seeking job opportunities must be fully conversant with the Japanese language.
              </p>
              <p className="mb-4">
                Prior to moving abroad, an applicant should learn the Japanese language as per the following duration.
              </p>
              <Link to="/register" className="btn btn-2 text-white bg-custom hover:bg-blue-700 py-2 px-4 rounded">
                Apply Now
              </Link>
            </div>
            <div className="col-lg-6 mt-2 col-12" data-aos="zoom-in-up">
              <div className="img">
                <img src={ImageTwo} width="100%" alt="Japanese Language" className="rounded shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JapnesLangugae;
