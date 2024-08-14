import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import { ArrowBigUpDash } from "lucide-react";
import Services from "./Services";
import { X } from "lucide-react";
const About = () => {
  const [isSkillOpen, setSkillOpen] = useState(false);

  const openSkill = () => {
    setSkillOpen(true);
  };

  const closeSkill = () => {
    setSkillOpen(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <div id="About" className="m-10 mb-0 mt-0 pt-0 sm:pt-14 p-14  ">
          <h1 className="text-5xl justify-start underline font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About me
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-11 font-poppins">
            <div className="w-[500px] border-r-4 border-green-600 justify-center pr-5">
              <p className="text-md sm:text-xl pt-10 max-w-sm sm:max-w-lg">
                I am passionate student of computer science. Part time Front-end
                developer.Passionate to become Software Engineer to deal with
                front-end, backend and AI integrations ,CD/CI pipelines and
                cloud, AWS.
              </p>
              <div className="flex justify-start gap-6 mt-4">
                <motion.button
                  className="bg-fuchsia-800 text-lg px-6 hover:bg-black p-4 rounded-md text-white font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Hire me
                </motion.button>
                <motion.button
                  className="bg-fuchsia-800 text-lg px-6 hover:bg-black p-4 rounded-md text-white font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Free work
                </motion.button>
              </div>
              <motion.button
                className="bg-gradient-to-br from-yellow-700 to-fuchsia-800 text-lg px-6 m-5 hover:bg-black p-4 rounded-md flex justify-center text-white font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openSkill}
              >
                Click to see Skills
                <ArrowBigUpDash />
              </motion.button>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg font-poppins">
                <h2 className="text-xl font-bold underline underline-offset-4">
                  ICS (2020-2022)
                </h2>
                <p className="mt-2 font-bold">
                  Student <span className="text-red-500 font-bold">@</span>
                  <span className=" font-bold"> Kips College Jail Road</span>
                </p>
                <p className="mt-2">
                  Complete my ICS
                  <br></br>
                  <span className="text-green-500 font-bold"> Grade: A+</span>
                  <br></br>
                  <span className="text-red-500 font-bold">Marks: 970</span>
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg font-poppins">
                <h2 className="text-xl font-bold underline underline-offset-4">
                  BSCS (2022-2026)
                </h2>
                <p className="mt-2 font-bold">
                  Student <span className="text-red-500 font-bold">@</span>
                  <br></br>
                  <span className="font-bold">
                    National universiy of computer and emerging sciences
                    <span className="text-blue-600"> (FAST)</span>
                  </span>
                </p>
                <p className="mt-2">
                  <br></br>
                  <span className="text-green-500 font-bold"> Grade: A</span>
                  <br></br>
                  <span className="text-red-500 font-bold">CGPA: 2.97</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSkillOpen && (
        <div className="fixed top-0 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-500 rounded-lg max-w-lg relative p-8">
            {/* Close Button */}
            <button
              className="absolute top-3 right-5 font-poppins font-bold sm:right-9 text-white hover:text-red-900 font-bold text-2xl"
              onClick={closeSkill}
            >
              <X />
            </button>

            <Services />
          </div>
        </div>
      )}
    </>
  );
};
export default About;
