import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCalendarDays } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const SecondSection = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4(1).png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
    "/logo9.png",
  ];
  var settings = {
    dots: true,
    infinite: true,
    Arrow: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    playSpeed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          playSpeed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          playSpeed: 500,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          playSpeed: 500,
          autoplay: true,
          dots: false,
        },
      },
    ],
  };
  const Courses = [
    {
      image: "/digitalMarketing.png",
      name: "PG Certification in Digital Marketing",
      duration: "6 months",
      rating: "5.0",
      content:
        "The Post Graduate Diploma in Digital Marketing with 100% Placement Support is a comprehensive program .....",
    },
    {
      image: "/fullStack.png",
      name: "PG Certification in Full Stack Development",
      duration: "6 months",
      rating: "5.0",
      content:
        "The PG Certification in Full Stack Development is a comprehensive program designed to equip you.....",
    },
    {
      image: "tester.png",
      name: "Software Testing",
      duration: "6 months",
      rating: "5.0",
      content:
        "This PG Software testing course will advance your career as an software test engineer. You’ll learn top skills.....",
    },
    {
      image: "webDevelopment.png",
      name: "Web Development",
      duration: "6 months",
      rating: "5.0",
      content:
        "This PG Diploma in Web Development will help you master both front-end and back-end with experts from various .....",
    },
    {
      image: "/digitalMarketing.png",
      name: "Digital Marketing",
      duration: "6 months",
      rating: "5.0",
      content:
        "Fast track your career with this PG Digital Marketing Program from WHY tap, trained by Industrial Professionals....",
    },
  ];
  
  return (
    <>
      {/* second section */}
      <div className="">
        <div className="flex flex-col justify-center items-end md:px-10 py-10">
          <button className="bg-[#861b47] text-white font-semibold w-28 h-9 text-center rounded-md hover:text-[#861b47] hover:bg-white hover:border-[#861b47] hover:border-2">
            View All
          </button>
        </div>
        <div className="md:px-20 sm:px-10 px-5 pb-16">
          <Slider {...settings} className="">
            {logos.map((item, indes) => (
              <img src={item} alt="" className="w-44 h-28" />
            ))}
          </Slider>
        </div>
      </div>
      {/* third Section */}
      <div>
        <h1 className="text-center text-3xl font-bold">Popular Courses</h1>
        <div className="flex flex-wrap gap-10 w-full justify-center  py-10">
          {Courses.map((item, index) => (
            <div className="w-[350px] bg-white drop-shadow-md group py-7 ">
              <div className="w-full px-7 overflow-hidden ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full rounded-md duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="flex items-center gap-2 text-gray-500">
                  <FaCalendarDays className="text-gray-500" />
                  {item.duration}
                </p>
                <p className="text-gray-500 flex items-center gap-3">
                  {item.rating}
                  <span className="text-orange-400 flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </p>
                <p className="text-gray-500 mt-8">{item.content}</p>
              </div>
              <div className="flex justify-center items-start px-7 ">
                <button className="bg-[#861b47] text-white w-full group-hover:bg-yellow-300 h-10 rounded-md">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center pb-10">
          <button className="bg-primary text-white w-40 h-10 rounded-md duration-200 hover:bg-yellow-300 hover:text-black">
            View All Courses
          </button>
        </div>
      </div>

      {/* fourth section */}
      <div className="bg-gradient-to-b from-[#F9CD03] to-[#CBB341] sm:p-10 p-5 text-center">
        <h1 className="md:text-3xl sm:text-xl text-base font-bold">
          100% Job Placement Support & Interview Preparation
        </h1>
        <h3 className="md:text-xl sm:text-base text-xs font-bold">
          Hurry!! Give a kick-start for your sparking future!
        </h3>
      </div>

      {/* fifth section */}
    </>
  );
};

export default SecondSection;
