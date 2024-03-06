import React from "react";
import "./HeroSection.css";
import bgHero from "../../../assets/designs/loadmatch/6210040.jpg";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchButton from "../../../components/SmallComponents/Buttons/SearchButton";
import SearchForm from "./SearchSection/SearchForm";
function HeroSection() {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img src={bgHero} alt="background" className="w-full h-full" />
      </div>

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Explore LoadMatch</span>
          <span className="subTitle">
            Enjoy Faster Enquires, Regular Loads traffic and availability of
            people to discover Space. <br></br>Explore now.
          </span>
          {/* <SearchForm /> */}
          <div className="searchInput ">
            <input
              type="text"
              placeholder="   Search for Loads or Space..."
              onChange={handleSearch}
              value={search}
              className="text-black "
            />
            <SearchButton
              label={"Search"}
              type="submit"
              className=" p-2 md:p-4 text-base md:text-lg font-semibold rounded-r-3xl
        text-white bg-blue-500
        hover:bg-blue-600 "
            ></SearchButton>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;
