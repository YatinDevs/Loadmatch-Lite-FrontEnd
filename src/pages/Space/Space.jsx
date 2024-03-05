import React from "react";
import AddSpace from "./AddSpace/AddSpace";
import SpaceListingDisplay from "./ListingSpace/ListingSpace";

function Space() {
  return (
    <div>
      <div className="bgSvgSpace"></div>
      <AddSpace />
      <SpaceListingDisplay />
    </div>
  );
}

export default Space;
