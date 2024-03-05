import React, { useState, useEffect } from "react";
import loadApi from "../../../services/loadApi";
function ListingDisplay() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await loadApi.getAllListings();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error.message);
      }
    }

    fetchListings();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.load_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={listing.image_url_1}
              alt="Product"
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {listing.from_city} to {listing.to_city}
              </h2>
              <p className="mt-2">
                <strong>Dimensions:</strong> {listing.length} x {listing.width}{" "}
                x {listing.height}
              </p>
              <p>
                <strong>Weight:</strong> {listing.weight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingDisplay;
