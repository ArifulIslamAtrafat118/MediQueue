import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { Link, NavLink } from "react-router";

function Navbar() {
  const NavList = (
    <>
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
    </>
  );
  return (
    <div className="navbar fixed top-0 bg-transparent  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {NavList}
          </ul>
        </div>
        <NavLink className="text-3xl font-bold block gap-0 cursor-pointer ">
          <span className="text-blue-500">Medi</span>
          <span>Que</span>
          <span className="text-blue-500">u</span>
          <span>e</span>
          </NavLink>
        {/* <figure>
          <img
            className="h-10"
            src="/src/assets/MediQueuelogo-1.png"
            alt="Logo"
          />
        </figure> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavList}</ul>
      </div>
      <div className="navbar-end">
        <PrimaryBtn>Emergency</PrimaryBtn>
      </div>
    </div>
  );
}

export default Navbar;
