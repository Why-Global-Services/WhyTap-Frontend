"use client";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
// import SanityClient from "../SanityClient";
import { MdArrowBackIos } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiMail, CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const [alldata, setalldata] = useState([]);
  const [open, setOpen] = useState(false);
  const [showDropdowncompany, setShowDropdowncompany] = useState(false);
  const [ShowOpencompany, SetshowOpencompany] = useState(false);
  const [ShowOpenservice, SetshowOpenservice] = useState(false);
  const closeTimeoutcompany = React.useRef();
  const closeTimeoutservice = React.useRef();
  const [servicedropdown, setservicedropdown] = useState(false);
  const toggleShowcompany = () => {
    SetshowOpencompany(!ShowOpencompany);
  };
  const toggleShowservice = () => {
    SetshowOpenservice(!ShowOpenservice);
  };
  // useEffect(()=>{
  //   const getdata=async()=>{
  //     await SanityClient.fetch(`*[_type=="servicecategory"]{
  //       Categoryname

  //     }`).then((res)=>{
  //      setalldata(res)
  //      console.log(res);

  //     })
  //   }
  //   getdata();

  // },[])

  const toggleNavbar = () => {
    setOpen(!open);
    SetshowOpencompany(false);
  };

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
    SetshowOpencompany(false);
  };

  const openDropdowncompany = () => {
    setShowDropdowncompany(true);
    clearTimeout(closeTimeoutcompany.current);
  };

  const closeDropdowncompany = () => {
    closeTimeoutcompany.current = setTimeout(() => {
      setShowDropdowncompany(false);
    }, 300);
  };
  const openDropdownservice = () => {
    setservicedropdown(true);
    clearTimeout(closeTimeoutservice.current);
  };

  const closeDropdownservice = () => {
    closeTimeoutservice.current = setTimeout(() => {
      setservicedropdown(false);
    }, 300);
  };

  const handleMouseEntercompany = () => {
    openDropdowncompany();
  };
  const handleMouseEnterservice = () => {
    openDropdownservice();
  };

  const handleMouseLeavecompany = () => {
    closeDropdowncompany();
    setservicedropdown(false);
  };
  const handleMouseLeaveservice = () => {
    closeDropdownservice();
    setShowDropdowncompany(false);
  };

  const handleOutsideClickcompany = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      closeDropdowncompany();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClickcompany);
    return () => {
      document.body.removeEventListener("click", handleOutsideClickcompany);
    };
  }, []);

  const handleOutsideClickservice = (e) => {
    if (!e.target.closest(".dropdown-containerservice")) {
      closeDropdowncompany();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClickservice);
    return () => {
      document.body.removeEventListener("click", handleOutsideClickservice);
    };
  }, []);

  return (
    <div className="w-full fixed z-20 h-10">
      {/* Topbar */}
      <section className="bg-primary text-white w-full h-full xl:px-24 px-8 hidden sm:flex items-center justify-between  z-30">
        <section className="flex gap-2 items-center justify-center ">
          <Link
            to="tel:+918270099991"
            className="flex items-center gap-1 font-semibold"
            target="_blank"
          >
            <FaPhone />
            <p className="text-sm ">+918270099991</p>
          </Link>
          <p className="mb-1 mx-1 text-gray-300">|</p>
          <Link

            to="mailto:contact@whytap.in"
            className="flex items-center gap-1 font-semibold"
            target="_blank"
          >
            <IoMdMail />
            <p className="text-sm">contact@whytap.in</p>
          </Link>
        </section>

        <section className="flex space-x-5 ">
          <Link
            to="https://www.facebook.com/whytap.in"
            target="_blank"
          >
            <FaFacebookSquare className="h-4 cursor-pointer" />
          </Link>
          <Link target="_blank" to="https://x.com/whytap_in">
            <FaSquareXTwitter className="h-4 cursor-pointer" target="_blank" />
          </Link>
          <Link
            to="https://www.instagram.com/whytap.in/"
            target="_blank"
          >
            <FaSquareInstagram className="h-4 cursor-pointer" />
          </Link>

          <Link
            to="https://www.linkedin.com/company/why-tap/posts/?feedView=all"
            target="_blank"
          >
            <FaLinkedin className="h-4 cursor-pointer" />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCT-BWjm_icMjeuvifokb9TA"
            target="_blank"
          >
            <FaYoutube className="h-4 cursor-pointer" />
          </Link>
        </section>
      </section>

      {/* Navbar */}
      <div className="z-30  w-full ">
        <section className="bg-white   flex justify-between xl:px-20 lg:px-5 items-center p-4   drop-shadow-xl z-10  w-full top-0">
          <Link to="/">
            <img src="./whytap-logo.png" alt="logo" className="w-28" />
          </Link>
          <ul className="space-x-7  lg:flex flex-row hidden justify-center items-center cursor-pointer xl:text-[15px] text-[12px] font-medium">
            <div
              className="relative dropdown-container"
              onMouseEnter={handleMouseEntercompany}
              onMouseLeave={handleMouseLeavecompany}
            >
              <div className="">
                <li className="hover:text-primary flex items-center">
                  Courses <RiArrowDropDownLine size={20} className="" />
                </li>
              </div>
              {showDropdowncompany && (
                <div className="absolute downup bg-white text-black mt-2 w-96 p-2 rounded drop-shadow-md  ">
                  <div className="flex flex-col gap-5 border border-black rounded w-full p-4 h-full">
                    <h2 className="">PG Certification - 6 months</h2>
                    <div className="text-xs text-gray-800 flex flex-col gap-2">
                      <p>Full Stack Development</p>
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/aboutus">
              <li className="hover:text-primary I">About Us</li>
            </Link>
            <Link to="/placement">
              <li className="hover:text-primary">Placement</li>
            </Link>
            <Link to="/events">
              <li className="hover:text-primary">Events</li>
            </Link>
            <Link to="/news">
              <li className="hover:text-primary">News</li>
            </Link>
            <Link to="/testimonials">
              <li className="hover:text-primary">Testimonials</li>
            </Link>
            <Link to="/mous">
              <li className="hover:text-primary">MOUs</li>
            </Link>
            <Link to="/contactus">
              <li className="hover:text-primary">Contact us</li>
            </Link>
          </ul>
          <Link to={"/contactus"}>
            {" "}
            <button className="font-medium w-fit px-3 py-2 cursor-pointer bg-white text-primary  shadow-2xl rounded-md hover:bg-primary hover:text-white border text-sm drop-shadow-md border-primary lg:block hidden transition-all duration-300">
              REGISTER NOW
            </button>
          </Link>

          {open === false ? (
            <FaBars
              className="size-5 my-auto lg:hidden rote"
              onClick={handleClick}
            />
          ) : (
            <IoClose
              className="size-5 my-auto lg:hidden rote2"
              onClick={handleClick}
            />
          )}
        </section>

        {open && (
          <div  className="w-[65%] relative float-right todown lg:hidden">
            <ul  className="flex font-semibold  flex-col justify-center pl-10 text-left  pr-4 bg-primary pb-5 pt-5 ">
              <div>
                <li
                  className="bg-primary cursor-pointer p-2 text-white hover:bg-white hover:text-primary flex items-center gap-1"
                  onClick={toggleShowcompany}
                >
                  Courses <IoIosArrowForward size={13} className="mt-1"/>
                </li>
              </div>
              {/* <div>
                <li
                  className="bg-primary cursor-pointer p-2 text-white hover:bg-white hover:text-primary flex items-center gap-1"
                  onClick={toggleShowservice}
                >
                  Services <IoIosArrowForward size={13} className="mt-1"/>
                </li>
              </div> */}
              <Link to="aboutus">
                <li
                  className="bg-primary p-2  text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  About Us
                </li>
              </Link>
              <Link to="/placement">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  Placement
                </li>
              </Link>
              <Link to="/events">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  Events
                </li>
              </Link>
              <Link to="/news">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  News
                </li>
              </Link>
              <Link to="/testimonials">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  Testimonials
                </li>
              </Link>
             
              <Link to="/mous">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  MOUs
                </li>
              </Link>
             
              <Link to="/contactus">
                <li
                  className="bg-primary p-2 text-white hover:bg-white hover:text-primary"
                  onClick={toggleNavbar}
                >
                  Contact us
                </li>
              </Link>

              {/* <Link to={"/contactus"} className="w-fit">
                <li
                  className="p-2 mt-2 ml-2 w-full xs:w-48 flex items-end justify-center   cursor-pointer bg-white text-center text-primary  shadow-2xl rounded-md hover:bg-primary hover:text-white border border-b-4"
                  onClick={toggleNavbar}
                >
                  GET FREE QUOTE
                </li>
              </Link> */}
            </ul>
            {ShowOpencompany && (
              <div className="absolute todown  top-0 pt-5 pl-10 float-right ani2  h-full w-full overflow-hidden bg-primary text-white">
                <ul className="flex  flex-col justify-center text-left leading-loose">
                  <li
                    onClick={toggleShowcompany}
                    className="hover:bg-white hover:text-primary p-1 cursor-pointer flex items-center gap-1"
                  >
                    <MdArrowBackIos size={12} />
                    Back
                  </li>
                  <Link
                    to="/about"
                    className="hover:bg-white hover:text-primary p-1"
                    onClick={toggleNavbar}
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/lifeatwhy"
                    className="hover:bg-white hover:text-primary p-1"
                    onClick={toggleNavbar}
                  >
                    Life At WHY
                  </Link>
                </ul>
              </div>
            )}
            {ShowOpenservice && (
              <div className="absolute todown  top-0 pt-5 pl-10 float-right ani2  h-full w-full overflow-hidden bg-primary text-white">
                <ul className="flex  flex-col justify-center text-left leading-loose">
                  <li
                    onClick={toggleShowservice}
                    className="hover:bg-white hover:text-primary p-1 cursor-pointer flex items-center gap-1"
                  >
                    <MdArrowBackIos size={12} />
                    Back
                  </li>
                  <Link
                    to="/services"
                    className="hover:bg-white hover:text-primary p-1"
                    onClick={toggleNavbar}
                  >
                    Our Services
                  </Link>
                  {alldata &&
                    alldata.map((item, index) => (
                      <Link
                        key={index}
                        className="hover:bg-white hover:text-primary p-1"
                        to={{
                          pathname: "/servicesections",
                          query: { name: item?.Categoryname },
                        }}
                        onClick={toggleNavbar}
                      >
                        {item?.Categoryname}
                      </Link>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
