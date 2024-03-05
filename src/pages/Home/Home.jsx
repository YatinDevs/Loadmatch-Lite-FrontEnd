import React from "react";
import RadioInput from "../../components/SmallComponents/RadioInput.jsx/RadioInput";
import useJourneyDetailStore from "../../store/useJourneyDetailStore";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import HighPriorityLoads from "./HighPriorityLoads/HighPriorityLoads";
import DemandRoutes from "./DemandRoutes/DemandRoutes";
import RecentMatches from "./RecentMatches/RecentMatches";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";

function Home() {
  const journeyDetails = useJourneyDetailStore((state) => state.journeyDetails);

  const {
    source_location,
    destination_location,
    load,
    space,
    travel_details,
    date_of_journey,
  } = journeyDetails;

  const navigate = useNavigate();

  const handleAddLoadClick = () => {
    // Navigate to the "add load" route
    navigate("/add-load");
  };

  const handleAddSpaceClick = () => {
    // Navigate to the "add space" route
    navigate("/add-space");
  };

  return (
    <>
      <HeroSection />
      <section className="w-full mt-5 relative mx-auto bg-white shadow-even p-2 flex flex-col md:w-[86%] md:p-8 text-center">
        <div className="flex justify-center items-center gap-20 text-white ">
          <div>
            <button
              onClick={handleAddLoadClick}
              className="border border-blue-300 rounded-lg p-5 text-2xl font-extrabold  bg-blue-400 hover:bg-blue-500"
            >
              Add Load
            </button>
          </div>
          <button
            onClick={handleAddSpaceClick}
            className="border border-blue-300 rounded-lg p-5  text-2xl font-extrabold bg-blue-400 hover:bg-blue-500"
          >
            Add Space
          </button>
        </div>
      </section>

      <HighPriorityLoads />
      <DemandRoutes />
      <RecentMatches />
    </>
  );
}

export default Home;
