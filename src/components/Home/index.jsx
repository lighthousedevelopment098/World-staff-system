import React from "react";
import Carousel from "./Carousel";
import Brands from "./Brands";
import WssLicense from "./WSSLicense";
import Mission from "./Mission";
import ChairmenProfile from "./ChairmenProfile";
import WssVision from "./WSSVision";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Brands />
      <WssLicense />
      <ChairmenProfile />
      <Mission />

      <WssVision />
    </div>
  );
};

export default Home;
