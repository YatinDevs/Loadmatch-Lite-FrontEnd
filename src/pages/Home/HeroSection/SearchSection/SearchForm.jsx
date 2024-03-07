import React, { useState } from "react";
import InputFieldSearch from "./components/InputFieldSearch/InputFieldSearch";
import SearchButton from "../../../../components/SmallComponents/Buttons/SearchButton";
import { useNavigate } from "react-router-dom";
import SwapButton from "../../../../components/SmallComponents/Buttons/SwapButton";
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

  const handleSwapCities = (e) => {
    e.preventDefault();
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = async () => {
    console.log("Search Type:", searchType);

    try {
      if (searchType === "loads") {
        const encodedPath = btoa(`${fromCity}-${toCity}`);
        navigate(`/loads/info-${encodedPath}`);
        console.log("From City:", fromCity);
        console.log("To City:", toCity);
        const resData = await loadApi.getSearchListings({
          from_city: fromCity,
          to_city: toCity,
        });
        console.log("responseData", resData);

        navigate(`/search-results?type=loads`);
      } else {
        const encodedPath = btoa(`${fromCity}--${toCity}`);
        navigate(`/spaces/info-${encodedPath}`);
        const resData = await spaceApi.getSearchListings({
          from_city: fromCity,
          to_city: toCity,
        });
        console.log(resData);

        navigate(`/search-results?type=spaces`);
      }
    } catch (error) {
      console.error("Error fetching search listings:", error);
      // Handle errors here
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
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
          handleSwap={handleSwapCities}
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
          type="submit"
          label={`Search ${searchType}`}
          className="px-12 py-4  rounded-full text-base md:text-lg font-semibold text-white bg-green-500 w-fit self-center absolute bottom-[-25px] hover:bg-green-600"
        ></SearchButton>
      </div>
    </form>
  );
}

export default SearchForm;
