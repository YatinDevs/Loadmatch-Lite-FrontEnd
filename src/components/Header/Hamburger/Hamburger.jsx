import React, { useState } from "react";
import "./Hamburger.css";
function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow  w-full z-10 ">
      <div className="container mx-auto px-4">
        <input
          type="checkbox"
          id="toggle"
          checked={menuOpen}
          onChange={toggleMenu}
          className="hidden"
          aria-label="Toggle Menu"
        />

        <label
          htmlFor="toggle"
          className="md:hidden cursor-pointer flex items-center"
          aria-label="Toggle Menu"
        >
          <span
            className="hamburger-lines inline-block h-6 w-6 border border-solid border-gray-900"
            aria-hidden="true"
          ></span>
        </label>

        <ul
          className={`md:flex flex-col md:flex-row md:items-center md:justify-end ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a
              href="#showcase"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#food"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="#food-menu"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-800 hover:text-green-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Hamburger;
