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
        <div className="heroBannerContent">
          <span className="text-[25px] font-bold  text-center p-2">
            Experience India's Finest Loads and Lorries!{" "}
          </span>

          {/* <div className="flex gap-2">
            <AddButton
              label={"Add Loads"}
              className="bg-blue-900 px-8 p-2 rounded-2xl hover:bg-blue-800"
            />
            <AddButton
              label={"Add Lorry"}
              className="bg-blue-900 px-8 p-2 rounded-2xl hover:bg-blue-800 "
            />
          </div> */}
          <SearchSection className="absolute top-32 left-2 z-[2] md:w-full w-[90%] rounded-xl shadow-lg  " />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;
