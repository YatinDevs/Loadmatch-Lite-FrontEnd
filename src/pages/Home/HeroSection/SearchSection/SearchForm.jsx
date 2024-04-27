import React, { useState } from "react";
import InputFieldSearch from "./components/InputFieldSearch/InputFieldSearch";
import SearchButton from "../../../../components/SmallComponents/Buttons/SearchButton";
import { useNavigate } from "react-router-dom";
import SwapButton from "./components/Buttons/SwapButton.jsx";
import loadApi from "../../../../services/loadApi.js";
import spaceApi from "../../../../services/spaceApi.js";
import { NavLink } from "react-router-dom";

function SearchForm() {
  const [searchType, setSearchType] = useState("loads");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Search Type:", searchType);

    try {
      const encodedPath = btoa(`${fromCity}-${toCity}`);
      console.log("From City:", fromCity);
      console.log("To City:", toCity);

      navigate(`/${searchType}/info-${encodedPath}`);
    } catch (error) {
      console.error("Error fetching search listings:", error);
      // Handle errors here
    }
  };

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="w-full bg-white p-4 relative opacity-100 shadow-2xl text-black rounded-xl flex gap-10 flex-col ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full bg-white p-2 relative opacity-100 shadow-2xl text-black rounded-xl flex flex-col "
      >
        <div className=" flex space-x-4 border-solid border rounded-xl border-gray-400">
          <button
            className={`px-4 py-2 rounded-xl flex-1 focus:outline-none ${
              searchType === "loads"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
            onClick={() => setSearchType("loads")}
          >
            Loads
          </button>

          <button
            className={`px-4 py-2 rounded-2xl flex-1 focus:outline-none ${
              searchType === "spaces"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
            onClick={() => setSearchType("spaces")}
          >
            Spaces
          </button>
        </div>
        <div className="flex flex-col">
          <InputFieldSearch
            label="From City"
            placeholder="Enter From City"
            id="fromCity"
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            handleCitySelect={(city) => setFromCity(city)}
            className="mr-4"
          />
          <SwapButton
            handleSwap={handleSwap}
            className="swap-button cursor-pointer z-[1] bg-blue-100 h-8 w-9 justify-center flex items-center self-center rounded-lg m-[-22px]"
          />

          <InputFieldSearch
            label="To City"
            placeholder="Enter To City"
            id="toCity"
            type="text"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            handleCitySelect={(city) => setToCity(city)}
            className="mr-4 mb-2"
          />
          <SearchButton
            handleSubmit={handleSubmit}
            type="submit"
            label={`Search ${searchType}`}
            className="px-8 py-3 rounded-full text-base md:text-lg font-semibold text-white bg-blue-500 w-fit self-center absolute bottom-[-25px] hover:bg-green-600"
          ></SearchButton>
        </div>
      </form>
      <div className=" flex space-x-4  ">
        <NavLink
          to={"/add-load"}
          className={`px-4 py-2 rounded-2xl flex-1   focus:outline-none text-white bg-blue-500`}
        >
          Add Load
        </NavLink>

        <NavLink
          to={"/add-space"}
          className={`px-4 py-2 rounded-2xl flex-1 border-solid  focus:outline-none text-white bg-blue-500`}
        >
          Add Space
        </NavLink>
      </div>
    </div>
  );
}

export default SearchForm;
