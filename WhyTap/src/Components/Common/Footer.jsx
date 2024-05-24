import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrLocationPin } from "react-icons/gr";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-10 gap-6">
        <div className="space-y-5">
          <img src="/whytap-logo.png" alt="" />
          <p className="text-justify">
            WHY tap, training and placement division of WHY Global Services was
            started in the year 2009 in UK with the ultimate purpose to provide
            dissertation support and technical training for the UK students.
            Later in the year 2010, we have moved our base operations to India
            and established as a comprehensive education services provider.{" "}
          </p>
          <div className="flex gap-5 items-center">
            <Link to="https://www.facebook.com/whytap.in" target="_blank">
              <FaFacebookF className="size-5 text-blue-600" />
            </Link>
            <Link to="https://www.instagram.com/whytap.in/" target="_blank">
              <FaInstagram className="size-5 text-pink-500" />
            </Link>
            <Link to="https://x.com/whytap_in" target="_blank">
              <FaXTwitter className="size-5 " />
            </Link>
            <Link
              to="https://www.linkedin.com/company/why-tap/"
              target="_blank"
            >
              <FaLinkedinIn className="size-5 text-blue-800" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCT-BWjm_icMjeuvifokb9TA"
              target="_blank"
            >
              <FaYoutube className="size-5 text-red-600" />
            </Link>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          <h1 className="text-xl font-bold pb-5">Contact</h1>
          <Link
            to="https://www.google.com/maps/place/WHY+tap+-+Digital+Marketing+%26+Full+Stack+Developer+Course/@13.071225,80.2590223,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526729057d021d:0xce0a7a11243b21c5!8m2!3d13.071225!4d80.2590223!16s%2Fg%2F11slcf5rcy?hl=en-US&entry=ttu"
            target="_blank"
            className="flex items-center gap-1 "
          >
            <GrLocationPin className="md:size-16 sm:size-10 size-16 text-primary" />
            <p className="font-medium hover:text-primary">
              3rd Floor, New No. 75 77 & 79, Lohmanradhri Tower, Pantheon Road,
              Egmore, Chennai, Tamil Nadu, 600008.
            </p>
          </Link>
          <Link
            to="tel:+918270099991"
            target="_blank"
            className="flex items-center gap-1 "
          >
            <FaPhoneAlt className="text-primary size-5" />
            <p className="hover:text-primary font-medium">82700 99991</p>
          </Link>
          <Link
            to="mailto:contact@whytap.in"
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaMailBulk className="size-5 text-primary" />
            <p className="hover:text-primary font-medium">contact@whytap.in</p>
          </Link>
        </div>
        <div className="space-y-3 mt-10">
          <h1 className="text-xl font-bold pb-5">Important Links</h1>
          <Link to="/aboutus" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">About Us</p>
          </Link>
          <Link to="/aboutus" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Franchise</p>
          </Link>
          <Link to="/events" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Events</p>
          </Link>
          <Link to="/contactus" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Contact us</p>
          </Link>
          <Link to="/privacy-policy" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Privacy Policy</p>
          </Link>
          <Link to="/terms-and-condition" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Terms & Conditions</p>
          </Link>
          <Link to="/refund-policy" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Refund Policy</p>
          </Link>
        </div>
        <div className="space-y-3 mt-10">
          <h1 className="text-xl font-bold pb-5">Popular Courses</h1>
          <Link
            to="/full-stack-development"
            className="flex items-center gap-1"
          >
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Full Stack Web Development</p>
          </Link>
          <Link to="/digital-marketing" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Digital Marketing</p>
          </Link>
          <Link to="/software-testing" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Software Testing</p>
          </Link>
          <Link to="/networking" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Networking</p>
          </Link>
          <Link to="/ethical-hacking" className="flex items-center gap-1">
            <MdKeyboardDoubleArrowRight className="size-6 text-primary" />
            <p className="hover:text-primary">Ethical Hacking</p>
          </Link>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-100"/>
      <div className="flex flex-row justify-between px-10 p-5">
        <p className="text-gray-500">© 2021 WHY tap. All Rights Reserved</p>
        <Link to="https://whyglobalservices.com/" target="_blank">
          <p className="hover:text-orange-400 text-gray-500">Powered by WHY Global Services</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
