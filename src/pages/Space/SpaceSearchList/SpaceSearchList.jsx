import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import spaceApi from "../../../services/spaceApi";
import SpaceCard from "./SpaceCard";
import SearchSection from "../../Home/HeroSection/SearchSection/SearchSection";

function SpaceSearchList() {
  const { searchQuery } = useParams();
  const [spaces, setSpaces] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const extractedEncodedPath = searchQuery.replace("info-", "");
        const decodedPath = atob(extractedEncodedPath);
        const [fromCity, toCity] = decodedPath.split("-");

        const resData = await spaceApi.getSearchListings({
          from_city: fromCity,
          to_city: toCity,
          page: currentPage,
          pageSize: pageSize,
        });
        setSpaces(resData.spaces);
        setTotal(resData.totalPages * pageSize);
      } catch (error) {
        console.error("Error fetching search listings:", error);
      }
    };

    fetchData();
  }, [searchQuery, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto w-full">
      <SearchSection />
      <div>
        {spaces?.map((space) => (
          <SpaceCard key={space.space_id} {...space} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default SpaceSearchList;
