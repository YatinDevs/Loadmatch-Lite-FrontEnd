import React, { useEffect, useState } from "react";
import AddLoad from "./AddLoad/AddLoad";
import ListingDisplay from "./ListingDisplay/ListingDisplay";
import SpaceListingDisplay from "../Space/ListingSpace/ListingSpace";
import Form from "../404/Form";

function Load() {
  return (
    <div>
      <div className="bgSvgLoad"></div>
      <Form />
      <AddLoad />
      <SpaceListingDisplay />
    </div>
  );
}

export default Load;
