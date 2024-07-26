import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import About from "./About";
import Yash from "../Images/YASH.png";
import Layout from "../Components/Layout";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "../Components/Footer";
export default function Home() {
  const reelVariants = {
    animate: {
      x: [window.innerWidth, -window.innerWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className=" min-h-screen">
        <div className="pt-10 relative h-full text-white">
          <Navbar />

          <div className="m-10 mt-0 gap-11 p-14 grid grid-cols-1 sm:grid-cols-2">
            <motion.div
              className="pt-20"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white font-bold text-5xl">
                Hi, I am Yashal Rafique{" "}
                <span className="shadow-fuchsia-700 text-yellow-600 font-bold text-3xl">
                  Front-End Developer
                </span>
              </h1>
              <p className="text-md pt-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium modi tempore error earum atque illo itaque rem nam
                assumenda dolores.Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Praesentium modi tempore error earum atque
                illo itaque rem nam assumenda dolores.
              </p>
              <div className="pt-10">
                <motion.button
                  className="bg-fuchsia-800 text-lg px-6 hover:bg-black p-4 rounded-md text-white font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contact me
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="bg-fuchsia-800 rounded-full w-[300px] h-[300px] flex items-center justify-center">
                <img
                  src={Yash}
                  alt="Your Picture"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
