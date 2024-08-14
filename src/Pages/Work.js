import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Yash from "../Images/YASH.png";
import project from "../Images/project.mp4";
import project2 from "../Images/project2.mp4";
import pro4 from "../Images/project4.mp4";
import project3 from "../Images/project3.mp4";
export default function Work() {
  const slides = [
    {
      id: 0,
      videoSrc: project3,
      video: true,
      title: "Ecommerce Website",
      description: "I made this ecommerce site using react js and tailwind css",
    },
    {
      id: 1,
      videoSrc: project,
      video: true,
      title: "SEO crack website",
      description:
        "Made by using Reactjs and tailwind css for Snow Dream Studio compnay in Kohenoor",
    },
    {
      id: 2,
      videoSrc: project2,
      video: true,
      title: "Service Pages",

      description:
        "Using react js and Tailwind css and use swiper for sliders.Made for Snow Dream Studio company",
    },
    {
      id: 3,
      videoSrc: pro4,
      video: true,
      title: "Gihub Simulation",

      description:
        "Using c++ to make Github simulation project for semester.I have used Linklist, Graphs,Trees and hashmaps data structure for this project",
    },
  ];

  return (
    <>
      <div className="text-black bg-white dark:text-white dark:bg-black">
        <div className="mt-0 mb-0 m-14  p-4 ">
          <h1 className=" flex justify-center text-fuchsia-900 font-poppins font-bold text-xl sm:text-3xl">
            Testimonials
          </h1>
          <p className="text-lg  p-5 flex justify-center text-black  dark:text-white  font-poppins">
            My projects that i made in my internship journey in Snow Dream
            Studio {"  "}
            and learn a lot of things
          </p>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative rounded-xl w-full h-full items-center overflow-hidden">
                  {slide.video ? (
                    <video
                      key={slide.id}
                      id={`video-${slide.id}`}
                      className="w-full h-auto object-cover"
                      src={slide.videoSrc}
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      className="w-full h-auto object-cover"
                      src={slide.img}
                      alt={slide.title}
                    />
                  )}

                  <h1 className="mt-5 text-black  dark:text-white font-poppins font-bold text-3xl">
                    {slide.title}
                    <p className="text-lg font-poppins w-80">
                      {slide.description}
                    </p>
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
