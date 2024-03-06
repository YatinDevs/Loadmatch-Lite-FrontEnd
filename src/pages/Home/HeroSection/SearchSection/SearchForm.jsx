import dayjs from "dayjs";
import React, { useReducer, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  DatePicker,
  InputField,
  RadioInput,
  SearchButton,
  SwapButton,
  TravellersCount,
} from "./components";

const SearchForm = () => {
  const [inputSourceValue, setInputSourceValue] = useState("");
  const [inputDestValue, setInputDestValue] = useState("");
  const [searchLoad, setSearchLoad] = useState("");
  const [searchSpace, setSearchSpace] = useState("");
  // console.log(navigate);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full relative bg-white shadow-2xl rounded-2xl p-4 flex flex-col md:w-11/12 md:p-8"
    >
      <RadioInput
        label={"searchLoad"}
        value={searchLoad}
        name="enquiry_type"
        id={"searchLoad"}
      />

      <div className="inputSection flex flex-col gap-1 w-full m-4 mx-auto py-2 md:flex-row md:items-center  ">
        <div className="flex flex-col md:flex-row ">
          <InputField
            className=""
            label="From"
            placeholder="Enter city or airport"
            id="source_location"
          />
          <SwapButton className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] " />
          <InputField
            className=""
            label="To"
            placeholder="Enter city or airport"
            id="destination_location"
          />
        </div>
        <DatePicker
          className=""
          label="Departure"
          placeholder="Enter date of journey"
          id="date_of_journey"
          min={dayjs(Date.now()).format("YYYY-MM-DD")}
        />

        <TravellersCount />
      </div>

      <SearchButton
        type={"flights"}
        className="px-12 py-4 rounded-full text-base md:text-lg font-semibold text-white bg-orange-500 w-fit self-center absolute bottom-[-25px] hover:bg-orange-600 "
      />
    </form>
  );
};

export default SearchForm;
