import React from "react";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 bg-slate-950 text-white font-bold mt-16 p-10">
        <div className="p-10">
          <h1>@All rights reserved</h1>
          <h2>Software by Yashal Rafique</h2>
        </div>
        <div className="px-10 text-center">
          <input
            type="search"
            placeholder="search"
            className="p-2 rounded-lg w-full"
          />
          <div className="p-4">
            <li>Web developer</li>
            <li>Dashboard specialist</li>
            <li>Blog websites</li>
          </div>
        </div>
      </div>
    </>
  );
}
