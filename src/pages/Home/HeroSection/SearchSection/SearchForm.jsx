import React, { useState } from "react";
import InputFieldSearch from "./components/InputFieldSearch/InputFieldSearch";
import SearchButton from "../../../../components/SmallComponents/Buttons/SearchButton";
import { useNavigate } from "react-router-dom";
import SwapButton from "./components/Buttons/SwapButton.jsx";
import loadApi from "../../../../services/loadApi.js";
import spaceApi from "../../../../services/spaceApi.js";

function SearchForm() {
  const [searchType, setSearchType] = useState("loads");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const navigate = useNavigate();

  const handleSearchTypeChange = (value) => {
    setSearchType(value);
  };

  const handleSubmit = async () => {
    console.log("Search Type:", searchType);

    try {
      if (searchType === "loads") {
        const encodedPath = btoa(`${fromCity}-${toCity}`);
        console.log("From City:", fromCity);
        console.log("To City:", toCity);

        navigate(`/loads/info-${encodedPath}`);
      } else {
        const encodedPath = btoa(`${fromCity}-${toCity}`);
        console.log("From City:", fromCity);
        console.log("To City:", toCity);
        navigate(`/spaces/info-${encodedPath}`);
      }
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full relative opacity-100 shadow-2xl text-black rounded-xl py-4 pl-1 pr-6 md:p-8 flex flex-col "
    >
      <div className="ml-2 flex ">
        <label
          className="px-4 text-white  rounded-2xl mb-2 py-1"
          htmlFor="searchTypeLoads"
        >
          <input
            type="radio"
            id="searchTypeLoads"
            name="searchType"
            value="loads"
            checked={searchType === "loads"}
            onChange={() => handleSearchTypeChange("loads")}
          />{" "}
          Loads
        </label>

        <label
          className="px-4 text-white rounded-2xl mb-2 py-1"
          htmlFor="searchTypeSpaces"
        >
          <input
            type="radio"
            id="searchTypeSpaces"
            name="searchType"
            value="spaces"
            checked={searchType === "spaces"}
            onChange={() => handleSearchTypeChange("spaces")}
          />{" "}
          Spaces
        </label>
      </div>
      <div className="flex flex-col  ">
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
          className="px-12 py-4  rounded-full text-base md:text-lg font-semibold text-white bg-green-500 w-fit self-center absolute bottom-[-25px] hover:bg-green-600"
        ></SearchButton>
      </div>
    </form>
  );
}

export default SearchForm;
