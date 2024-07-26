import React from "react";
import About from "../Pages/About";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="shadow-lg shadow-fuchsia-900 p-5 mx-[100px]  text-white bg-gradient-to-br from-black to-slate-900   flex justify-center gap-8">
          <Link to="/">
            {" "}
            <a
              className="underline-animation font-bold text-lg hover:text-fuchsia-800"
              href="#"
            >
              Home
            </a>
          </Link>
          <Link to="/about">
            {" "}
            <a
              className="underline-animation font-bold text-lg hover:text-fuchsia-800"
              href="#"
            >
              About me
            </a>
          </Link>
          <a
            className="underline-animation font-bold text-lg hover:text-fuchsia-800"
            href="#"
          >
            Services
          </a>
          <a
            className="underline-animation font-bold text-lg hover:text-fuchsia-800"
            href="#"
          >
            Testimonals
          </a>
          <a
            className="underline-animation font-bold text-lg hover:text-fuchsia-800"
            href="#"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </>
  );
}
