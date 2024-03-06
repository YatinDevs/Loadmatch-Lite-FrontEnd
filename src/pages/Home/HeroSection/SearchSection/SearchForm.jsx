import React, { useState } from "react";
import RadioInput from "./components/RadioInput.jsx/RadioInput";
import SwapButton from "./components/Buttons/SwapButton";
import InputFieldSearch from "./components/InputFieldSearch/InputFieldSearch";
import SearchButton from "./components/Buttons/SearchButton";
import useLoadStore from "../../../../store/useLoadStore";
import useSpaceStore from "../../../../store/useSpaceStore";

function SearchForm() {
  const [searchType, setSearchType] = useState("loads");

  const handleSearchTypeChange = (value) => {
    setSearchType(value);
  };

  const handleSearch = async () => {
    try {
      const useStore = searchType === "loads" ? useLoadStore : useSpaceStore;
      const data = await useStore.getState().getSearchListings({
        from_city: document.getElementById("from_city").value,
        to_city: document.getElementById("to_city").value,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-full relative opacity-100 bg-white rounded-xl py-4 pl-1 pr-6 md:p-8 flex flex-col gap-4">
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
        <SwapButton className="swap-button cursor-pointer z-[1] bg-blue-100 h-8 w-9 justify-center flex items-center self-center rounded-lg m-[-25px]" />
        <InputFieldSearch
          label="To City"
          placeholder="Destination"
          id="to_city"
          type="text"
          name="to_city"
          className=""
        />
        <SearchButton
          type={searchType}
          onClick={handleSearch}
          className="px-12 py-4 rounded-full text-base md:text-lg font-semibold text-white bg-orange-500 w-fit self-center absolute bottom-[-25px] hover:bg-orange-600"
        >
          Search {searchType}
        </SearchButton>
      </div>
    </form>
  );
}

export default SearchForm;
