import React from "react";
import { NavLink } from "react-router-dom";
import { PiBagBold } from "react-icons/pi";

function Trips() {
  return (
    <NavLink
      to={"/mysupport/trips"}
      className="flex items-center shrink-0 max-sm:flex-col max-sm:justify-center "
    >
      <div className="logo-trip logos-nav w-9 h-9 mr-1"></div>
      <div className="text mr-5 max-sm:mr-0">
        <div className="font-semibold text-xs md:text-sm text-blue-600 ">
          Enquires
        </div>
        <div className="font-semibold text-sm md:text-lg text-slate-600 max-sm:hidden">
          Manage Booking
        </div>
      </div>
    </NavLink>
  );
}

export default Trips;
