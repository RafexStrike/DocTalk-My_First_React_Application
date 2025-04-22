import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto  rounded-xl mt-10 bg-white py-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="" />
            <span className="font-bold text-xl">DocTalk</span>
          </div>
        </div>

        {/*  Links */}
        <nav className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            My Bookings
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blogs
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact Us
          </a>
        </nav>

        {/* Social Media */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61570014737852"
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/RafiBlack666"
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="https://www.youtube.com/@adnanrahmanrafi2114"
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
