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
      <ContentWrapper>
        <div className="heroBannerContent mt-0">
          <h1
            className=" text-center font-medium text-white leading-7 text-[18px] md:text-[22px] "
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)" }}
          >
            Experience India's Finest Loads and Lorries!
          </h1>

          <SearchSection />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;
