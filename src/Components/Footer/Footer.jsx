import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Footer() {
  return (
    <div className="pt-10 bg-blue-200 lg:rounded-t-[20rem] space-y-5">
      <div className="flex items-center justify-center">
        <img src="/src/assets/logo.png " alt="" className="" />
        <NavLink className="text-3xl font-bold block gap-0 cursor-pointer ">
          <span className="text-blue-500">Medi</span>
          <span>Que</span>
          <span className="text-blue-500">u</span>
          <span>e</span>
        </NavLink>
      </div>
      <div className="text-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500" : ""
              }
              to={"/bookings"}
            >
              My-Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500" : ""
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500" : ""
              }
              to={"/contacts"}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="text-xs w-3/4 mx-auto"/>
      <div className="flex items-center justify-center gap-3 lg:gap-5 text-2xl" >
              <FaFacebook className=" text-blue-600"></FaFacebook>
              <FaLinkedin className="text-cyan-800"></FaLinkedin>
              <FaX></FaX>
              <FaYoutube className="text-red-500"></FaYoutube>
      </div>
      <p className="text-center text-gray-600 pb-5">&copy; 2025 MediQueue. All rights reserved.</p>
    </div>
  );
}

export default Footer;
