import React, { useState, useEffect } from "react";
import spaceApi from "../../../services/spaceApi";

function SpaceListingDisplay() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    async function fetchSpaces() {
      try {
        const data = await spaceApi.getAllListings();
        setSpaces(data);
      } catch (error) {
        console.error("Error fetching spaces:", error.message);
      }
    }

    fetchSpaces();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Space Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space) => (
          <div
            key={space.space_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={space.image_url_1}
              alt="Space"
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {space.from_city} to {space.to_city}
              </h2>
              <p className="mt-2">
                <strong>Dimensions:</strong> {space.length} x {space.width} x{" "}
                {space.height}
              </p>
              <p>
                <strong>Weight:</strong> {space.weight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpaceListingDisplay;
