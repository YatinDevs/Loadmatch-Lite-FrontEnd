import React from "react";
import "./HeroSection.css";
import bgHero from "../../../assets/designs/loadmatch/home/herobanner.png";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchButton from "../../../components/SmallComponents/Buttons/SearchButton";
import SearchForm from "./SearchSection/SearchForm";
import SearchSection from "./SearchSection/SearchSection";
import AddButton from "../../../components/SmallComponents/Buttons/AddButton";
function HeroSection() {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="heroBanner relative">
      <div className="backdrop-img">
        <img
          src={bgHero}
          alt="background"
          className=" w-full object-cover h-full scale-150"
        />
      </div>

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent mt-16">
          <h1
            className=" text-center font-medium text-white mt-5 leading-7 text-[18px] md:text-[22px] "
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 1)" }}
          >
            Experience India's Finest Loads and Spaces!
          </h1>

          {/* <div className="flex gap-2">
            <AddButton
              label={"Add Loads"}
              className="bg-blue-900 px-8 p-2 rounded-2xl hover:bg-blue-800"
            />
            <AddButton
              label={"Add Lorry"}
              className="absolute top-10 left-2 z-[2] md:w-full w-[90%] rounded-xl shadow-lg  "
              className="bg-blue-900 px-8 p-2 rounded-2xl hover:bg-blue-800 "
            />
          </div> */}
          <SearchSection />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;
