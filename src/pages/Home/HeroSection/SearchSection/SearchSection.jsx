import React from "react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
const SearchSection = ({ className }) => {
  return (
    <ContentWrapper>
      <section
        className={`${className} searchSection m-3 flex justify-center items-center flex-col gap-5 lg:gap-8 lg:m-6`}
      >
        <h1
          className=" text-center font-medium text-white leading-7 text-[18px] md:text-[22px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Explore Loads and Lorries Now
        </h1>

        <SearchForm />
      </section>
    </ContentWrapper>
  );
};

export default SearchSection;
