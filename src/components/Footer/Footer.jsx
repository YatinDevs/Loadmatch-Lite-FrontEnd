import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <footer className="bg-[#3a1248] text-white text-opacity-80 w-full">
      <div className="">
        <div className="w-full max-w-[1280px] mx-auto my-0 px-4 py-8  ">
          <h1 className="text-xl my-2 font-bold">About Loadmatch Logistics</h1>
          <p className={`text-lg md:text-base lg:text-lg `}>
            Loadmatch Logistics Private Limited is a Private incorporated on 01
            December 2021. It is classified as Non-govt company and is
            registered at Registrar of Companies, Pune. Its authorized share
            capital is Rs. 100,000 and its paid up capital is Rs. 100,000. It is
            involved in Other land transport.
          </p>
          {!expanded && (
            <p
              onClick={toggleExpansion}
              className="body-md my-2  text-blue-400 block w-fit xl:cursor-pointer"
            >
              Read more
            </p>
          )}
          {expanded && (
            <p
              onClick={toggleExpansion}
              className="body-md my-2  text-blue-400 block w-fit xl:cursor-pointer"
            >
              Read less
            </p>
          )}
          <div className={` ${expanded ? "block" : "hidden"}`}>
            <p className={`text-lg ${expanded ? "block" : "hidden"}`}>
              Loadmatch Logistics Private Limited's Annual General Meeting (AGM)
              was last held on N/A and as per records from Ministry of Corporate
              Affairs (MCA), its balance sheet was last filed on N/A. Directors
              of Loadmatch Logistics Private Limited are Shivshankar Ankush
              Honde and Datta Baburao Savase.
            </p>
            <h1 className="text-xl my-2 font-bold">
              Here's how we can assist you:
            </h1>
            <table className="border border-collapse w-full">
              <tbody>
                <tr className="border">
                  <td className="border p-4">Search Loads</td>
                  <td className="border p-4">
                    Find and add loads for your logistics requirements. Search
                    for high priority loads in demand.
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Search Space in Trucks</td>
                  <td className="border p-4">
                    Search for space in trucks for your cargo. Find available
                    space for your logistics needs.
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Routes for Loads</td>
                  <td className="border p-4">
                    Discover efficient routes for your loads and logistics
                    operations. Optimize your transportation routes.
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Enquiries</td>
                  <td className="border p-4">
                    Have any questions or need assistance? Feel free to reach
                    out to us for enquiries and support.
                  </td>
                </tr>
              </tbody>
            </table>

            <h1 className="text-xl my-2 font-bold">Contact Information:</h1>
            <p className="text-lg">Email: buildingshico2021@gmail.com</p>
            <p className="text-lg">
              Registered Address: Flat No.102, A Wing, Gurukrupa Residency
              Chakan, Tehsil Khed Pune Pune MH 410501 IN
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2e013d] p-4 w-full">
        <ul className="menuItems text-center ">
          <li className="menuItem">About Us</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Refunds & Cancellation</li>
          <li className="menuItem">Contact Us</li>
        </ul>
        <p className="w-full text-center max-w-[1280px] mx-auto my-2 py-2  text-xs lg:text-lg font-bold">
          {" "}
          © 2023 Zauba Technologies Private Limited. All rights reserved.
        </p>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
