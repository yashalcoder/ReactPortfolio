import { SocialIcon } from "react-social-icons";
import React from "react";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <>
      <form
        id="contact"
        className="bg-gradient-to-br from-fuchsia-800 to-purple-950 font-poppins max-w-lg sm:w-[500px] p-4 rounded-lg shadow-lg shadow-white text-white font-bold  mx-auto justify-center"
      >
        <div className="bg-gradient-to-br from-fuchsia-900 to-yellow-700 h-16 rounded-md p-4 flex justify-between shadow-black">
          <h1 className="text-white font-Logo-Font font-bold text-3xl">YR</h1>
          <h1 className="font-poppins  text-2xl text-black">Contact form </h1>
          <h1></h1>
        </div>
        <div className="flex flex-col mt-3 gap-4">
          <label>
            Enter Your Name<span className="text-red-900 font-bold"> *</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="mr-5 rounded-md p-3"
          />
        </div>
        <div className="flex flex-col mt-3 gap-4">
          <label>
            Enter Your Email<span className="text-red-900 font-bold"> *</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="mr-5 rounded-md p-3"
          />
        </div>
        <div className="flex flex-col mt-3 gap-4">
          <label>
            Message<span className="text-red-900 font-bold"> *</span>
          </label>
          <input type="text" className="mr-5 h-24 rounded-md p-3" />
        </div>
        <div className="mt-3 flex justify-center mx-auto ">
          <motion.button
            className="bg-black text-lg px-6 hover:bg-green-950 p-4 rounded-md text-white font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Subbmit
          </motion.button>
          <div className="flex gap-4 pt-7 px-5">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.linkedin.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.youtube.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.github.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.whatsapp.com"
            />
          </div>
        </div>
      </form>
    </>
  );
}
