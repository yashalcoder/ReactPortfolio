import React from "react";
import { motion } from "framer-motion";
export default function Services() {
  const PercentageBar = ({ percentage, bgcolor, data }) => {
    return (
      <div className="bg-gray-200  rounded-full m-5 my-7 shadow-lg shadow-slate-800 w-full ">
        <motion.div
          className=" w-full text-3xl font-bold rounded-xl text-center"
          style={{ width: `${percentage}%`, backgroundColor: bgcolor }}
        >
          {data}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <div id="services" className=" ">
        <div>
          <ol className="p-5 list-disc mx-auto   marker:decoration-red-900">
            <PercentageBar percentage={100} bgcolor="green" data={"HTML"} />{" "}
            <PercentageBar percentage={70} bgcolor="red" data={"CSS"} />{" "}
            <PercentageBar percentage={80} bgcolor="blue" data={"React JS"} />{" "}
            <PercentageBar
              percentage={100}
              bgcolor="fuchsia"
              data={"Tailwind CSS"}
            />{" "}
            <PercentageBar percentage={100} bgcolor="yellow" data={"C++"} />
          </ol>
        </div>
      </div>
    </>
  );
}
