/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets-frontend/assets.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [clickedPage, setClickedPage] = useState("Home");
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-50 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 md:h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-[1rem] md:text-2xl font-semibold whitespace-nowrap">
            Medi<span className="text-[#5F6FFF]">Connect</span>
          </span>
        </a>

        {token ? (
          <div className="flex md:order-2 gap-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <img
              src={assets.profile_pic}
              alt="icon"
              className="w-[2rem] rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="icon"
              className="w-[0.6rem] cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        ) : (
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[#5F6FFF] font-medium rounded-lg text-[0.6rem] md:text-sm px-2 md:px-4 py-1 md:py-2 text-center "
              onClick={() => navigate("/login")}
            >
              Create account
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 md:p-2 w-7 md:w-10 h-7 md:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setToggle(!toggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        )}

        <div
          className={`items-center justify-between ${
            toggle ? "" : "hidden"
          }  w-full md:flex md:w-auto md:order-1 `}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <p
                className={`cursor-pointer block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent ${
                  clickedPage === "Home"
                    ? "md:text-blue-700"
                    : "md:text-gray-900"
                } `}
                aria-current="page"
                onClick={() => {
                  navigate("/");
                  setClickedPage("Home");
                }}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/doctors");
                  setClickedPage("All Doctors");
                }}
                className={`cursor-pointer block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent ${
                  clickedPage === "All Doctors"
                    ? "md:text-blue-700"
                    : "md:text-gray-900"
                } `}
              >
                All Doctors
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/about");
                  setClickedPage("About");
                }}
                className={`cursor-pointer block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent ${
                  clickedPage === "About"
                    ? "md:text-blue-700"
                    : "md:text-gray-900"
                } `}
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate("/contact");
                  setClickedPage("Contact");
                }}
                className={`cursor-pointer block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent ${
                  clickedPage === "Contact"
                    ? "md:text-blue-700"
                    : "md:text-gray-900"
                } `}
              >
                Contact
              </p>
            </li>
          </ul>
        </div>

        {showMenu && (
          <div className="absolute z-10 top-[4.2rem] right-[6rem] bg-slate-50 rounded-sm p-3 text-[0.9rem] font-medium flex flex-col gap-2">
            <p
              onClick={() => {
                navigate("/my-profile");
                setShowMenu(false);
              }}
              className="cursor-pointer hover:bg-slate-400 hover:rounded-md hover:p-1"
            >
              My Profile
            </p>
            <p
              onClick={() => {
                navigate("/my-appointments");
                setShowMenu(false);
              }}
              className="cursor-pointer hover:bg-slate-400 hover:rounded-md hover:p-1"
            >
              My Appointment
            </p>
            <p
              onClick={() => {
                setToken(false);
                setShowMenu(false);
              }}
              className="cursor-pointer hover:bg-slate-400 hover:rounded-md hover:p-1"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
