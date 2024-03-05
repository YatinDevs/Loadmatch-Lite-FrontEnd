import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import InputField from "../SmallComponents/InputField/InputField";
import SwapButton from "../SmallComponents/Buttons/SwapButton";
import Inputbox from "../SmallComponents/BasicInputBox/Inputbox";
import useJourneyDetailStore from "../../store/useJourneyDetailStore";

function AddListing() {
  const [inputSourceValue, setInputSourceValue] = useState("");
  const [inputDestValue, setInputDestValue] = useState("");

  const handleSubmit = () => {};

  const journeyDetails = useJourneyDetailStore((state) => state.journeyDetails);

  const {
    source_location,
    destination_location,
    oneway,
    load,
    space,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  return (
    <ContentWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full relative bg-white shadow-md rounded-2xl p-4 flex flex-col md:w-11/12 md:p-8"
      >
        <Inputbox label="Add Image" placeholder="Add Image" id="" type="file" />

        <div className="inputSection flex flex-col gap-1 w-full m-4 mx-auto py-2 md:flex-row md:items-center  ">
          <div className="flex flex-col md:flex-row ">
            <InputField
              className=""
              label="From"
              placeholder="Enter city location"
              id="source_location"
              selectedValue={source_location}
              inputValue={inputSourceValue}
              setInputValue={setInputSourceValue}
              handleValue={(value) => {
                dispatchJourneyDetails({
                  type: "set_source_location",
                  payload: { value },
                });
              }}
            />
            <Inputbox
              label="Pincode"
              placeholder="Pincode"
              id="source_pincode"
            />
            <SwapButton
              handleSwap={() => {
                const temp = inputDestValue;
                setInputDestValue(inputSourceValue);
                setInputSourceValue(temp);
                dispatchJourneyDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <InputField
              className=""
              label="To"
              placeholder="Enter city location"
              id="destination_location"
              inputValue={inputDestValue}
              setInputValue={setInputDestValue}
              selectedValue={destination_location}
              handleValue={(value) => {
                dispatchJourneyDetails({
                  type: "set_destination_location",
                  payload: { value },
                });
              }}
            />
            <Inputbox
              label="Pincode"
              placeholder="Pincode"
              id="source_pincode"
            />
          </div>
        </div>
        <div className="flex mb-5">
          <Inputbox label="Length" placeholder="in ft" id="" />
          <Inputbox label="Width" placeholder="in ft" id="" />
          <Inputbox label="Height" placeholder="in ft" id="" />
        </div>

        <Inputbox label="Weight" placeholder="Weight" id="" className="mb-2" />
      </form>
    </ContentWrapper>
  );
}

export default AddListing;
