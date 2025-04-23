import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="pt-10 bg-blue-200 lg:rounded-t-[20rem] space-y-5">
      <div className="flex items-center justify-center">
        <img src="/logo.png" alt="" className="" />
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
              <a href="https://www.facebook.com/arifulislam118/" target="blank"><FaFacebook className=" text-blue-600"></FaFacebook></a>
              <a href="https://www.linkedin.com/in/ariful-islam-arafat-870617290/" target="blank"><FaLinkedin className="text-cyan-800"></FaLinkedin></a>
              <a href="https://github.com/ArifulIslamAtrafat118?tab=overview&from=2025-04-01&to=2025-04-24" target="blank"><FaGithub /></a>
              <a href="https://studio.youtube.com/channel/UCDekbdtq9QVDJl5OEYzZt5w" target="blank"><FaYoutube className="text-red-500"></FaYoutube></a>
              
      </div>
      <p className="text-center text-gray-600 pb-5">&copy; 2025 MediQueue. All rights reserved.</p>
    </div>
  );
}

export default Footer;
