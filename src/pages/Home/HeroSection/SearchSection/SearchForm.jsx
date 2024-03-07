import React, { useState } from "react";
import RadioInput from "./components/RadioInput.jsx/RadioInput";
import SwapButton from "./components/Buttons/SwapButton";
import InputFieldSearch from "./components/InputFieldSearch/InputFieldSearch";
import SearchButton from "./components/Buttons/SearchButton";
import useLoadStore from "../../../../store/useLoadStore";
import useSpaceStore from "../../../../store/useSpaceStore";
import useJourneyStore from "../../../../store/useJourneyStore";
import { useLocation, useNavigate } from "react-router-dom";
function SearchForm() {
  const [searchType, setSearchType] = useState("loads");

  const {
    inputSourceValue,
    inputDestValue,
    setInputSourceValue,
    setInputDestValue,
    swapLocation,
  } = useJourneyStore();

  // console.log("from :", inputSourceValue, "dest :", inputDestValue);

  const handleSearchTypeChange = (value) => {
    // console.log(value);
    setSearchType(value);
  };

  const pathname = useLocation().pathname;
  // console.log(pathname);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(inputSourceValue, inputDestValue);
    const encodedPath = btoa(`${inputSourceValue}-${inputDestValue}`);
    console.log(encodedPath);
    if (searchType === "loads") {
      navigate(`loads/info-${inputSourceValue}`);
    } else {
      navigate(`spaces/info-${encodedPath}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative opacity-100 bg-white rounded-xl py-4 pl-1 pr-6 md:p-8 flex flex-col gap-4"
    >
      <div className="ml-2 flex gap-2">
        <RadioInput
          label="loads"
          name="searchType"
          value="loads"
          onChange={() => handleSearchTypeChange("loads")}
          checked={searchType === "loads"}
        />
        <RadioInput
          label="space"
          name="searchType"
          value="spaces"
          onChange={() => handleSearchTypeChange("spaces")}
          checked={searchType === "spaces"}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <InputFieldSearch
          label="From City"
          placeholder="Current location"
          id="from_city"
          type="text"
          className=""
        />

        <SwapButton
          handleSwap={(e) => {
            e.preventDefault();
            const temp = inputDestValue;
            setInputDestValue(inputSourceValue);
            setInputSourceValue(temp);
            swapLocation();
          }}
          className="swap-button cursor-pointer z-[1] bg-blue-100 h-8 w-9 justify-center flex items-center self-center rounded-lg m-[-25px]"
        />
        <InputFieldSearch
          label="To City"
          placeholder="Destination"
          id="to_city"
          type="text"
          name="to_city"
          className="mb-4"
          value={inputDestValue}
          onChange={(e) => setInputDestValue(e.target.value)}
        />
        <SearchButton
          type="submit"
          label={`Search ${searchType}`}
          className="px-12 py-4  rounded-full text-base md:text-lg font-semibold text-white bg-green-500 w-fit self-center absolute bottom-[-25px] hover:bg-green-600"
          onClick={handleSubmit}
        ></SearchButton>
      </div>
    </form>
  );
}

export default SearchForm;
