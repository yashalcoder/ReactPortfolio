import React from "react";
export default function Contact() {
  return (
    <>
      <form className=" mt-10 bg-gradient-to-br from-black to-purple-950 w-[500px] p-4 rounded-lg shadow-lg shadow-white text-white font-bold  mx-auto justify-center">
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
        <div className="mt-3 justify-center mx-auto ">
          <button
            className="text-white font-bold text-lg p-4 px-6 bg-black rounded-md
           hover:bg-white hover:text-black  mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
