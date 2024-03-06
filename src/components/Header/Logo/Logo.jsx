import React from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "../../../assets/designs/loadmatch/Frame 1.png";

function Logo() {
  return (
    <NavLink to={"/"} className="mx-4 w-[115px] h-[50px] shrink-0">
      <img
        src={Navlogo}
        alt="Logo"
        className="flex justify-center items-center scale-125 h-full object-center"
      />
    </NavLink>
  );
}

export default Logo;
