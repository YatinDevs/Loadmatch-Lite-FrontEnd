import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import loadApi from "../../../services/loadApi";
import LoadCard from "./LoadCard";

function LoadSearchList() {
  const { searchQuery } = useParams();
  const [loads, setLoads] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  console.log(loads);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const extractedEncodedPath = searchQuery.replace("info-", "");

        const decodedPath = atob(extractedEncodedPath);

        const [fromCity, toCity] = decodedPath.split("-");

        const resData = await loadApi.getSearchListings({
          from_city: fromCity,
          to_city: toCity,
          page: currentPage,
          pageSize: pageSize,
        });
        setLoads(resData.loads);

        setTotal(resData.length);
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
    <div className="mx-auto w-full ">
      <div>
        {loads?.map((load) => (
          <LoadCard key={load.load_id} {...load} />
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

export default LoadSearchList;
