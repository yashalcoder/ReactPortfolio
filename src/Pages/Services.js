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
      <div className=" grid grid-cols-1 sm:grid-cols-2">
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
        <div
          className="text-white justify-center rounded-lg
         font-bold p-10 m-5 text-center"
        >
          <h1 className="text-yellow-900 font-extrabold text-4xl ">SERVICES</h1>
          <p
            className=" p-4 m-7 text-center bg-white text-black
          "
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            sed!
          </p>
        </div>
      </div>
    </>
  );
}
