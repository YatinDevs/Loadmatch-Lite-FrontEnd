import React, { useEffect, useState } from "react";
import AddLoad from "./AddLoad/AddLoad";
import ListingDisplay from "./ListingDisplay/ListingDisplay";

function Load() {
  return (
    <div>
      <div className="bgSvgLoad"></div>

      <AddLoad />
      <ListingDisplay />
    </div>
  );
}

export default Load;
