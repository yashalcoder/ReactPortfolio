import React, { useEffect, useState } from "react";
export default function Theme() {
  const [isDark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDark(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);
  return (
    //function in useEffect run when rerender componnetns like by reload page,changings ,e.t.c
    <>
      <div
        onClick={toggleTheme}
        className={`cursor-pointer w-16 h-8 flex items-center rounded-full p-1 bg-gray-200 dark:bg-gray-800 transition-all duration-300`}
      >
        <div
          className={`bg-white rounded-full w-6 h-6  shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-8" : ""
          }`}
        >
          {isDark ? (
            <div className="text-yellow-500 w-5 h-5 mx-auto my-0.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 46.58 90 c -12.442 0 -24.139 -4.846 -32.937 -13.644 S 0 55.861 0 43.419 c 0 -12.442 4.845 -24.14 13.644 -32.938 c 4.464 -4.465 9.678 -7.918 15.495 -10.264 c 1.217 -0.491 2.612 -0.133 3.443 0.882 c 0.831 1.015 0.906 2.453 0.185 3.549 c -9.838 14.953 -7.777 35.007 4.899 47.684 h 0 c 12.677 12.678 32.732 14.736 47.684 4.9 c 1.097 -0.722 2.534 -0.646 3.55 0.185 s 1.373 2.226 0.882 3.443 c -2.345 5.815 -5.798 11.029 -10.265 15.495 C 70.72 85.154 59.022 90 46.58 90 z M 23.294 10.174 c -1.918 1.347 -3.724 2.866 -5.408 4.551 C 10.221 22.39 6 32.58 6 43.419 s 4.221 21.03 11.886 28.695 C 25.551 79.779 35.741 84 46.58 84 c 10.84 0 21.03 -4.222 28.695 -11.886 c 1.685 -1.685 3.204 -3.491 4.551 -5.408 c -15.799 5.837 -34.101 2.171 -46.402 -10.131 h 0 c 0 0 0 0 0 0 C 21.123 44.274 17.456 25.973 23.294 10.174 z"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(0,0,0)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="matrix(1 0 0 1 0 0)"
                    strokeLinecap="round"
                  />
                </g>{" "}
              </svg>
            </div>
          ) : (
            <div className="text-gray-800 w-5 h-5 mx-auto my-0.5">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.88"
              >
                <path
                  class="cls-1"
                  d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,
                0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,
                4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,
                8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,
                1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,
                3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,
                3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,
                1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,
                8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,
                3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,
                3.93,0,1,1-3.92,6.81L10.1,35.39Z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
