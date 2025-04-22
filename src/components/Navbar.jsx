import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          `ml-2 hover:text-blue-500 ${
            isActive ? "border-b-2 border-blue-500 font-bold" : ""
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={`/mybooking`}
        className={({ isActive }) =>
          `ml-2 hover:text-blue-500 ${
            isActive ? "border-b-2 border-blue-500 font-bold" : ""
          }`
        }
      >
        My-Booking
      </NavLink>
      <NavLink
      to={`/blogs`}
        className={({ isActive }) =>
          `ml-2 hover:text-blue-500 ${
            isActive ? "border-b-2 border-blue-500 font-bold" : ""
          }`
        }
      >
        Blogs
      </NavLink>
      <NavLink
      to={`/contacts`}
        className={({ isActive }) =>
          `ml-2 hover:text-blue-500 ${
            isActive ? "border-b-2 border-blue-500 font-bold" : ""
          }`
        }
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-[#EFEFEF]  drop-shadow-sm rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="rounded btn bg-[#176AE5] text-white lg:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="" src={logo} alt="" />
          <a className="btn btn-ghost text-xl">DocTalk</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className=" rounded-xl btn bg-[#176AE5] text-white">Emergency</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
