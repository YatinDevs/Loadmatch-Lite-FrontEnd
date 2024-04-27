import React from "react";
import AddSpace from "./AddSpace/AddSpace";
import SpaceListingDisplay from "./ListingSpace/ListingSpace";
import ListingDisplay from "../Load/ListingDisplay/ListingDisplay";
import Form_space from "../404/Form_space";


function Space() {
  return (
    <div>
      <div className="bgSvgSpace"></div>
      <Form_space />
      <AddSpace />
      <ListingDisplay />
    </div>
  );
}

export default Space;
