import React from "react";
import { NavLink } from "react-router-dom";
import loadsLogo from "../../../assets/navbar/loadsLogo.jpg";
import spaceLogo from "../../../assets/navbar/spaceLogo.jpg";

function Navbar() {
  return (
    <div className="">
      <nav className=" nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-30 ">
        <NavLink to={"/add-load"} className="nav-item">
          <img className="nav-service-logo rounded-xl " src={loadsLogo} />
          <span>Loads</span>
        </NavLink>
        <NavLink to={"/add-space"} className="nav-item">
          <img className="nav-service-logo rounded-xl" src={spaceLogo} />
          <span>Space</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
