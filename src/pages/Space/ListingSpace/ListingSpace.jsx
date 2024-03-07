import React, { useState, useEffect } from "react";
import spaceApi from "../../../services/spaceApi";
import { Pagination } from "antd";

function SpaceListingDisplay() {
  const [spaces, setSpaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalSpaces, setTotalSpaces] = useState(0);
  const spacesPerPage = 10; // Adjust this value as needed

  useEffect(() => {
    fetchSpaces();
  }, [currentPage]);

  async function fetchSpaces() {
    try {
      const offset = (currentPage - 1) * spacesPerPage;
      const data = await spaceApi.getPaginatedListings(offset, spacesPerPage);
      setSpaces(data.spaces);
      setTotalSpaces(data.total);
    } catch (error) {
      console.error("Error fetching spaces:", error.message);
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      <Pagination
        className="my-4 flex items-center justify-center"
        current={currentPage}
        total={totalSpaces}
        pageSize={spacesPerPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default SpaceListingDisplay;
