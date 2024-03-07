import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import loadsLogo from "../../../assets/navbar/loadsLogo.png";
import spaceLogo from "../../../assets/navbar/spaceLogo.png";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  // Function to handle hiding the popup
  const handleHidePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="">
      <nav className=" nav-links min-h-[8dvh] bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-30 ">
        <NavLink to={"/"} className="nav-item">
          <FaHouseChimney className="inline-block w-5 h-5 rounded-xl" />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/loads"} className="nav-item">
          <img
            className="inline-block w-5 h-5  rounded-xl mix-blend-multiply"
            src={loadsLogo}
          />
          <span>Loads</span>
        </NavLink>
        {isMobile && (
          <div className="nav-item" onClick={handleShowPopup}>
            <FaSquarePlus className="inline-block w-5 h-5  rounded-xl" />
            <span>Post</span>
          </div>
        )}
        <NavLink to={"/spaces"} className="nav-item">
          <img className="inline-block w-5 h-5  rounded-xl" src={spaceLogo} />
          <span>Space</span>
        </NavLink>

        <NavLink to={"/"} className="nav-item">
          <IoMdNotifications className="inline-block w-5 h-5  rounded-xl" />
          <span>Notifications</span>
        </NavLink>
      </nav>{" "}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <p className="mb-4">Would you like to add a Load or a Space?</p>
            <div className="flex justify-between">
              <NavLink
                to={"/add-load"}
                className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2"
                onClick={handleHidePopup}
              >
                Add Load
              </NavLink>
              <NavLink
                to={"/add-space"}
                className="bg-green-500 text-white rounded-md px-4 py-2 ml-2"
                onClick={handleHidePopup}
              >
                Add Space
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
