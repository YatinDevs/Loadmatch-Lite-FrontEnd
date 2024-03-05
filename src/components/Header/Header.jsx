import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Trips from "./Trips/Trips";

function Header() {
  return (
    <header className="w-full  h-16 top-0 bg-white shadow-lg z-10">
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center px-[10px] justify-between max-sm:px-1">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>
        <div className="flex gap-2">
          <Trips />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
