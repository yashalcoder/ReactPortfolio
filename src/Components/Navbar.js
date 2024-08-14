import React from "react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../Images/logo2.png";

import { HashLink as Link } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import {
  X,
  Menu,
  LinkedinIcon,
  Github,
  Youtube,
  Phone,
  YoutubeIcon,
} from "lucide-react";
import Darkmode from "../Components/Darkmode";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="top-0 w-full bg-white text-black dark:bg-black dark:text-white   ">
        <div className="sm:mx-[100px]  p-5    text-white  flex justify-between  from-black to-slate-900 transition-all duration-500 ease-in-out hover:animate-shadowPulse">
          <div>
            {/* <h1 className="text-white font-Logo-Font font-bold text-2xl">YR</h1>
             */}
            <Link to="/">
              <img className="w-20 h-14" src={logo} />
            </Link>
          </div>
          <div className="hidden lg:flex  gap-8  justify-center font-poppins">
            {/* <Link smooth to="#home">
              {" "}
              <a className="underline-animation  font-bold text-lg hover:text-fuchsia-800">
                Home
              </a>
            </Link>
            <Link smooth to="#About">
              {" "}
              <a
                className="underline-animation font-bold text-lg hover:text-fuchsia-800"
                href="#"
              >
                About me
              </a>
            </Link>
            <Link smooth to="#services">
              <a
                className="underline-animation font-bold text-lg hover:text-fuchsia-800"
                href="#"
              >
                Services
              </a>
            </Link>
            <Link smooth to="#">
              <a className="underline-animation font-bold text-lg hover:text-fuchsia-800">
                Testimonals
              </a>
            </Link>
            <Link smooth to="#contact">
              <a
                className="underline-animation font-bold text-lg hover:text-fuchsia-800"
                href="#"
              >
                Contact Us
              </a>
            </Link> */}

            <a
              href="https://linkedin.com/in/yashal-rafique-72b56b2a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                style={{ height: 40, width: 40 }}
                url="https://www.linkedin.com"
              />
            </a>
            <a
              href="https://github.com/yashalcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                style={{ height: 40, width: 40 }}
                url="https://www.github.com"
              />
            </a>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.youtube.com"
            />

            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.whatsapp.com"
            />
          </div>
          <div className="flex gap-2">
            <Darkmode />
            {/* <button className="lg:hidden  " onClick={toggleNavbar}>
              {open ? <X /> : <Menu />}
            </button> */}
          </div>
        </div>
      </nav>
      {/*  
      {open && (
        <div className="shadow-lg shadow-fuchsia-900 p-5 mx-[100px] flex flex-col items-center bg-black  ">
          <Link
            to="/"
            className="underline-animation text-white font-bold py-2 hover:text-fuchsia-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="underline-animation text-white font-bold py-2 hover:text-fuchsia-800 "
          >
            About
          </Link>
          <Link
            to="/services"
            className="underline-animation text-white font-bold py-2 hover:text-fuchsia-800
          "
          >
            Services
          </Link>
          <Link
            to="/"
            className="underline-animation text-white font-bold py-2 hover:text-fuchsia-800"
          >
            Testimonals
          </Link>
          <Link className="underline-animation text-white font-bold py-2 hover:text-fuchsia-800">
            Contact Us
          </Link>
        </div>}
      )*/}
      <div className="sm:hidden absolute  text-white mt-32 ">
        <Link to="https://www.linkedin.com/in/yashal-rafique-72b56b2a5/">
          <LinkedinIcon className="cursor-pointer bg-blue-600 hover:w-20 hover:rounded-r-full p-1 w-11 h-9 transition-all duration-300" />
        </Link>
        <Link to="https://github.com/yashalcoder">
          {" "}
          <Github className="cursor-pointer bg-gray-800 hover:w-20 hover:rounded-r-full p-1 w-11 h-9 transition-all duration-300" />
        </Link>
        <YoutubeIcon className="cursor-pointer bg-red-700 hover:rounded-r-full hover:w-20 p-1 w-11 h-9 transition-all duration-300" />
        <Phone className="cursor-pointer bg-green-600 hover:rounded-r-full hover:w-20 p-1 w-11 h-9 transition-all duration-300" />
      </div>
    </>
  );
}
