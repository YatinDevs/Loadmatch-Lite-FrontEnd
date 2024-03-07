import React from "react";
import { NavLink } from "react-router-dom";
import loadsLogo from "../../../assets/navbar/loadsLogo.png";
import spaceLogo from "../../../assets/navbar/spaceLogo.png";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

function Navbar() {
  return (
    <div className="">
      <nav className=" nav-links bg-white min-h-[8dvh] relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-30 ">
        <NavLink to={"/"} className="nav-item">
          <FaHouseChimney className="inline-block w-5 h-5 rounded-xl" />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/add-load"} className="nav-item">
          <img
            className="inline-block w-5 h-5  rounded-xl mix-blend-multiply"
            src={loadsLogo}
          />
          <span>Loads</span>
        </NavLink>
        <NavLink to={"/add-space"} className="nav-item">
          <img className="inline-block w-5 h-5  rounded-xl" src={spaceLogo} />
          <span>Space</span>
        </NavLink>
        <NavLink to={"/"} className="nav-item">
          <IoMdNotifications className="inline-block w-5 h-5  rounded-xl" />
          <span>Notifications</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
