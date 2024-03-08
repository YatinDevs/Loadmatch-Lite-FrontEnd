import React, { useState, useEffect } from "react";
import spaceApi from "../../../services/spaceApi";
import SpaceCard from "../SpaceSearchList/SpaceCard";

function SpaceListingDisplay() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await spaceApi.getAllListings();
        setListings(data);
      } catch (error) {
        console.error("Error fetching space listings:", error.message);
      }
    }

    fetchListings();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Space Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <SpaceCard key={listing.space_id} {...listing} />
        ))}
      </div>
    </div>
  );
}

export default SpaceListingDisplay;
