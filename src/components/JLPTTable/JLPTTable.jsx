import React from "react";

const JLPTTable = () => {
  const data = {
    months: ["6.3", "12.5", "18.8", "25", "37.5"],
    hours: ["450", "750", "1000", "1500", "3000"],
    weeks: ["27.4", "54.3", "81.7", "108.6", "162.5"],
    kanjiWords: ["2000", "1000", "370", "300", "100"],
    vocabulary: ["10000", "6000", "3750", "1000", "800"],
    passingMarks: ["100", "90", "95", "90", "80"],
    examMonths: [
      "July and December",
      "July and December",
      "July and December",
      "July and December",
      "July and December",
    ],
  };

  const levels = ["N5", "N4", "N3", "N2", "N1"];
  const categories = [
    { name: "Months", key: "months" },
    { name: "Hours", key: "hours" },
    { name: "Weeks", key: "weeks" },
    { name: "Kanji Words", key: "kanjiWords" },
    { name: "Vocabulary", key: "vocabulary" },
    { name: "Passing Marks", key: "passingMarks" },
    { name: "Exam Months", key: "examMonths" },
  ];

  return (
    <div className="container mx-auto my-8 max-w-screen-md">
      <h2 className="text-2xl md:text-3xl font-bold text-custom mb-4 text-center font-[Times]">
        JLPT CHART
      </h2>
      <div className="w-full rounded-md bg-white border border-gray-200 shadow-md shadow-custom  overflow-x-auto scroll-smooth">
        <table className=" ">
          <thead className="bg-custom text-white">
            <tr>
              <th className="px-4 py-2 border border-custom text-white">
                JLPT Levels
              </th>
              {levels.map((level, index) => (
                <th key={index} className="px-4 py-2 border text-center">
                  {level}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-100 transition duration-200"
              >
                <td className="px-4 py-2 border text-center font-bold bg-gray-200">
                  {category.name}
                </td>
                {data[category.key].map((value, idx) => (
                  <td
                    key={idx}
                    className={`px-4 py-2 border text-center ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JLPTTable;
