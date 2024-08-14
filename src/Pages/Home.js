import React, { useState } from "react";
import { motion } from "framer-motion";
import Yash from "../Images/YASH.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { ArrowBigDown, ArrowBigRight, X } from "lucide-react";
import HMTL from "../Images/html.jpg";
import reacticon from "../Images/react.png";

const Home = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        id="home"
        className="bg-white text-black dark:bg-black dark:text-white min-h-screen"
      >
        <div className="h-full text-white font-poppins">
          <div className="mx-[70px] m-10 my-0 gap-1  sm:py-0 sm:p-14 p-14 grid grid-cols-1 sm:grid-cols-2">
            <motion.div
              className="pt-10 order-2 sm:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1 }}
            >
              <h1 className=" text-black dark:text-white font-bold text-3xl sm:text-5xl">
                Hi,
              </h1>
              <h1 className=" text-black dark:text-white font-bold text-3xl sm:text-5xl">
                <br />
                I' am{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Yashal Rafique
                </span>
                <span className="shadow-fuchsia-700 text-yellow-600 font-bold text-4xl">
                  Front-End Developer
                </span>
              </h1>

              <div className="pt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.button
                  className="bg-fuchsia-800 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-4 rounded-md text-white font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={openContact}
                >
                  Contact me
                </motion.button>
                <Link to="/about" className="block">
                  <motion.button
                    className="bg-fuchsia-800 flex items-center justify-center gap-4 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-4 rounded-md text-white font-bold w-full sm:w-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    About me
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="block sm:flex justify-center order-1 sm:order-2 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div className="bg-fuchsia-800 rounded-full sm:ml-32 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
                <img
                  src={Yash}
                  alt="Your Picture"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex  justify-center">
          {/* <div className="flex justify-start gap-6 flex-wrap">
            <img
              src={reacticon}
              alt="React Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            >
              <defs>
                <linearGradient
                  x1="0"
                  y1="-21.333"
                  y2="85.333"
                  id="A"
                  x2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2383ae" offset="0%" />
                  <stop stopColor="#6dd7b9" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                fill="url(#A)"
                fillRule="evenodd"
              />
            </svg>

            <img
              src={HMTL}
              alt="HTML Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
          </div> */}
          <Link to="/work" className="block mb-4">
            <motion.button
              className="bg-fuchsia-800 flex items-center justify-center gap-4 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-4 rounded-md text-white font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
              <ArrowBigDown />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed top-0 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className=" rounded-lg max-w-lg relative p-8">
            {/* Close Button */}
            <button
              className="absolute top-16 right-10 text-white hover:text-red-900 font-bold text-2xl"
              onClick={closeContact}
            >
              <X />
            </button>
            {/* Contact Form */}
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
