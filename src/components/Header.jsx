/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets-frontend/assets";

const Header = () => {
  return (
    <div className="bg-[#5F6FFF] min-h-[31rem] gap-8 rounded-md flex flex-col  md:flex-row md:justify-between px-[2rem] md:px-[2rem] lg:px-[4rem] xl:px-[10rem] pt-[3rem] md:pt-[0rem]">
      <div className="flex justify-center flex-col gap-4">
        <p className="text-[#FFFFFF] font-bold text-[2.5rem] ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className=" flex flex-col xl:flex-row xl:items-center  gap-4">
          <img src={assets.group_profiles} alt="" className="w-[6rem]" />
          <p className="text-[#FFFFFF] text-[0.8rem]">
            Simply browse through our extensive list of trusted doctors, <br />{" "}
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#specialty"
          className="text-[#595959] w-fit font-semibold flex items-center gap-2 bg-[#FFFFFF] rounded-3xl text-sm px-5 py-2.5 "
        >
          Book appointment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div className="flex items-end">
        <img src={assets.header_img} alt="icon" className="w-[30rem]" />
      </div>
    </div>
  );
};

export default Header;
