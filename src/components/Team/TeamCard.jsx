// import React from 'react';
import { FaMobile  } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Step 1: Import PropTypes
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TeamCard = ({ img, title, name, phone, phone1, call, call1}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="flex justify-center my-5 py-5">
      <div className="w-80 p-6 text-center bg-gradient-to-b from-white to-gray-200 transform transition-transform hover:scale-105" >
        <div className="mb-4 " data-aos="flip-right">
          <img src={img} alt={`${name}`} className="w-64 h-64 rounded-full mx-auto" />
        </div>
        <div>
          <h5 className="text-xl font-medium">{title}</h5>
          <h3 className="text-2xl font-semibold py-1">{name}</h3>
        </div>
        <div className="mt-4">
          <a className="flex justify-center items-center text-gray-700 hover:text-blue-600" href={`tel:${call}`}>
            <FaMobile className="mr-2 text-custom" />
            {phone}
          </a>
          {phone1 && (
            <a className="flex justify-center items-center text-gray-700 hover:text-blue-600 mt-2" href={`tel:${call1}`}>
              <FaMobile className="mr-2 text-custom" />
              {phone1}
            </a>
          )}
        </div>
       
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  phone1: PropTypes.string,
  call: PropTypes.string.isRequired,
  call1: PropTypes.string,
};

export default TeamCard;
