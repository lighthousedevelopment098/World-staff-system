/** @format */

// import React from 'react';
import partner1 from "../../assets/Partner/partner1.png";
import partner2 from "../../assets/Partner/partner2.png";
import partner3 from "../../assets/Partner/partner3.png";
import partner4 from "../../assets/Partner/partner4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Define image data array
const imageData = [
  { src: partner1, alt: "Logo 1" },
  { src: partner2, alt: "Logo 2" },
  { src: partner3, alt: "Logo 3" },
  { src: partner4, alt: "Logo 4" },
];

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[80%] mx-auto py-3 flex items-center">
      <div className="container mx-auto">
        <Slider {...settings}>
          {imageData.map((image, index) => (
            <div key={index} className="p-2">
              <div className="flex justify-center">
                <img
                  className="img-fluid mx-auto"
                  src={image.src}
                  alt={image.alt}
                  width="220px"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
