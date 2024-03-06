import React from "react";
import { useNavigate } from "react-router-dom";

function CallAction() {
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
    <section className="w-full mt-5 relative mx-auto bg-white shadow-even p-2 flex flex-col md:w-[86%] md:p-8 text-center">
      <div className="flex justify-center items-center gap-20 text-white ">
        <div>
          <button
            onClick={handleAddLoadClick}
            className="border border-blue-300 rounded-2xl p-5 text-2xl font-extrabold  bg-blue-500 hover:bg-blue-500"
          >
            Add Load
          </button>
        </div>
        <button
          onClick={handleAddSpaceClick}
          className="border border-blue-300 rounded-2xl p-5  text-2xl font-extrabold bg-blue-500 hover:bg-blue-500"
        >
          Add Space
        </button>
      </div>
    </section>
  );
}

export default CallAction;
