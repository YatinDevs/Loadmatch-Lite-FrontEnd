import React, { useState, useEffect } from "react";
import loadApi from "../../../services/loadApi";
import LoadCard from "../LoadsSearchList/LoadCard";

function ListingDisplay() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await loadApi.getAllListings();
        setListings(data.data);
      } catch (error) {
        console.error("Error fetching listings:", error.message);
      }
    }

    fetchListings();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto mb-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Loads Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <LoadCard key={listing.load_id} {...listing} />
        ))}
      </div>
    </div>
  );
}

export default ListingDisplay;
