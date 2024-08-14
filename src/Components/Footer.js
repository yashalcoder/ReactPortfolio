import { Linkedin, Youtube } from "lucide-react";
import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 bg-slate-950 text-white font-bold mt-16 p-10">
        <div className="p-10">
          <h1>@All rights reserved</h1>
          <h2>Software by Yashal Rafique</h2>
          <div className="flex gap-4 mt-5">
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.linkedin.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.github.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.youtube.com"
            />
            <SocialIcon
              style={{ height: 40, width: 40 }}
              url="www.whatsapp.com"
            />
          </div>
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
