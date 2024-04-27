import React from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
const SearchSection = ({ className }) => {
  return (
    <ContentWrapper>
      <section
        className={`${className} searchSection m-2 flex justify-center items-center  flex-col gap-5 lg:gap-8 lg:m-6`}
      >
        <h1
          className=" text-center font-medium text-white  text-[18px] md:text-[22px] "
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0,0.6)" }}
        >
          Explore Loads and Lorries Now
        </h1>

        <SearchForm />
      </section>
    </ContentWrapper>
  );
};

export default SearchSection;
