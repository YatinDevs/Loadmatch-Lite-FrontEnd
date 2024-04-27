import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Trips from "./Trips/Trips";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full sticky min-h-[8dvh] h-16 top-0 bg-white shadow-lg z-10">
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center px-[10px] justify-between max-sm:px-1">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>
        <Trips />
        <div className="flex ">
          {/* {isMobile ? <Hamburger /> : <Profile />} */}
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
