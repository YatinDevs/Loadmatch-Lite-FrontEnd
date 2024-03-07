import React, { useState } from "react";
import locations from "../../../../../../utils/location.js";

const InputFieldSearch = ({
  label,
  placeholder,
  id,
  type,
  className,
  value,
  onChange,
  handleCitySelect,
}) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleSelect(location) {
    setInputValue(location);
    setShowSuggestion(false);
    if (handleCitySelect) {
      handleCitySelect(location);
    }
  }

  const handleInput = (value) => {
    setInputValue(value);
    setShowSuggestion(value.trim().length > 0);
  };

  const formattedData = locations
    .map((location) => {
      const { state, districts } = location;
      const formattedDistricts = districts.map((district) => ({
        district,
        state,
      }));
      return formattedDistricts;
    })
    .flat();

  const filteredLocations = formattedData?.filter(
    (location) =>
      location.state.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      location.district.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      location.district.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={`inputBox relative p-0 ${className}`}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        autoComplete="off"
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
        className="w-full relative rounded-lg m-3 focus:outline-none  border-2 border-solid border-slate-200 hover:border-slate-500 focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-black py-3 px-4 md:py-5 md:px-4 "
      />

      <label
        htmlFor={id}
        className="absolute top-[2px] left-6 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm "
      >
        {label ? label : "Input"}
      </label>

      {showSuggestion && (
        <ul className="suggestions absolute w-full text-black max-h-48 overflow-y-scroll bg-white border rounded-2xl left-0 top-full z-10">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() =>
                  handleSelect(`${location.district}, ${location.state}`)
                }
                className="py-2 px-3 cursor-pointer hover:bg-gray-100"
              >
                {`${location.district}, ${location.state}`}
              </li>
            ))
          ) : (
            <div className="font-medium text-gray-300 text-lg py-4 text-center w-full h-full flex justify-center items-center">
              No results found
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputFieldSearch;
