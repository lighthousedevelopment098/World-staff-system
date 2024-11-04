import { PlacementData } from "../../utils/data";
import Cart from "./Cart";

const Placements = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Benefits of our <span className="text-custom">Japan Placement</span>{" "}
          Program
        </h2>
        <div className="h-1 bg-custom w-20 mx-auto mb-6"></div>

        <p className="text-justify md:text-center text-base md:text-lg mb-8 text-gray-700">
          The TITP facilitates dynamic and challenging internship opportunities
          for young students from 1 to 5 years. This internship program develops
          functional capabilities in the incumbent that can enable them to
          perform exceptionally in various professional settings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {PlacementData.map((item, index) => (
            <Cart
              key={index}
              imgsrc={item.imgsrc}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placements;
