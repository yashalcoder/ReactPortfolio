import { motion } from "framer-motion";
import React from "react";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
export default function About() {
  return (
    <>
      <div className="m-10  pt-0  p-14  text-white ">
        <h1 className="text-5xl justify-start underline text-white font-bold ">
          About me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-11">
          <div className="w-[500px] border-r-4 border-green-600 justify-center   p-5">
            <p className="pt-5 ">
              I am Yashal Rafique. I am pursuing my Bachelors in computer
              science from National University of computer and emerging
              sciences(Fast). I am proficient in building dynamic and efficient
              user interfaces using the React JavaScript library. Capable of
              developing modular and reusable React components for scalable web
              applications. Skilled in utilizing Tailwind CSS to rapidly style
              web applications with a focus on utility-first principles.
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
          </div>

          <div>
            <div className="grid  grid-cols-1 sm:grid-cols-2">
              <div className="text-xl font-bold pt-11">
                June - August (2023)
              </div>
              <div className="bg-gradient-to-br from-black to bg-slate-800 p-4 rounded-lg font-bold">
                <h1>
                  Intern <span className="text-red font-bold">@</span>
                  <span className="text-blue-900 font-bold text-lg">
                    Snow Dream Studio
                  </span>
                </h1>
                <p>
                  I worked as a front-end developer. I enhance my skills in{" "}
                  <span className="text-green-950 font-bold">React js </span>
                  and <span className="text-red-900">Tailwind CSS</span>
                </p>
              </div>
            </div>
            <div className="grid  grid-cols-1 mt-6 sm:grid-cols-2">
              <div className="bg-gradient-to-br from-black to bg-slate-800 p-4 rounded-lg font-bold">
                <h1>
                  Intern <span className="text-red font-bold">@</span>
                  <span className="text-blue-900 font-bold text-lg">
                    Snow Dream Studio
                  </span>
                </h1>
                <p>
                  I worked as a front-end developer. I enhance my skills in{" "}
                  <span className="text-green-950 font-bold">React js </span>
                  and <span className="text-red-900">Tailwind CSS</span>
                </p>
              </div>
              <div className="text-xl font-bold text-center justify-center pt-11">
                June - August (2023)
              </div>
            </div>
            <div className="grid  grid-cols-1 mt-6 sm:grid-cols-2">
              <div className="text-xl font-bold text-center pt-11 ">
                June - August (2023)
              </div>
              <div className="bg-gradient-to-br from-black to bg-slate-800 p-4 rounded-lg font-bold">
                <h1>
                  Intern <span className="text-red font-bold">@</span>
                  <span className="text-blue-900 font-bold text-lg">
                    Snow Dream Studio
                  </span>
                </h1>
                <p>
                  I worked as a front-end developer. I enhance my skills in{" "}
                  <span className="text-green-950 font-bold">React js </span>
                  and <span className="text-red-900">Tailwind CSS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
