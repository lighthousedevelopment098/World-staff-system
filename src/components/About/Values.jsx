import Valuesbg from "/flag-japan-pakistan.webp";
import { Valuesdata } from "../../utils/data";

const Values = () => {
  return (
    <div
      className="relative py-16 bg-fixed bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${Valuesbg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

      <section className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto flex flex-col bg-transparent p-8 sm:p-12 z-10 text-center text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide">
          Our Core Values
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {Valuesdata.map((value) => (
            <div
              key={value.id}
              className="group flex md:flex-row flex-col text-justify gap-4 items-center bg-white bg-opacity-15 p-4 rounded-xl hover:bg-opacity-25 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <div className="p-2 bg-[#0E87C4] rounded-full shadow-md transform group-hover:rotate-12 transition duration-300">
                <value.icon className="text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-justify  leading-relaxed">
                {value.text}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Values;
