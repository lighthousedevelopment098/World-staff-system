import { useEffect } from "react";
import IndustryCard from "./IndustryCard";
import { ServicesDataAll } from "../../../utils/data";
import AOS from "aos";
import "aos/dist/aos.css";
const TITServices = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="lg:w-[85%] md:w-full mx-auto my-6">
      <div className=" text-center py-5">
        <h2 className="text-2xl md:text-3xl font-bold">
          TITP{" "}
          <span className="text-custom" data-aos="zoom-in">
            Focused Industries
          </span>
        </h2>
        <div className="h-1 bg-custom w-28 mx-auto my-4"></div>
        <div className="grid grid-cols-1 gap-2">
          <IndustryCard
            titleOne="Agriculture"
            servicesData={ServicesDataAll.agri}
          />
          <IndustryCard
            titleOne="Fishery"
            servicesData={ServicesDataAll.fishery}
          />
          <IndustryCard
            titleOne="Construction"
            servicesData={ServicesDataAll.construction}
          />
          <IndustryCard
            titleOne="Food"
            titleTwo="Manufacturing"
            servicesData={ServicesDataAll.food_manufacturing}
          />
          <IndustryCard
            titleOne="Textile"
            servicesData={ServicesDataAll.textile}
          />
          <IndustryCard
            titleOne="Machinery"
            servicesData={ServicesDataAll.machinery}
          />
          <IndustryCard
            titleOne="Others"
            servicesData={ServicesDataAll.others}
          />
        </div>
      </div>
    </div>
  );
};

export default TITServices;
