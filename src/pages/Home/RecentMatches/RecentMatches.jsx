import React, { useState, useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel2";
import { fetchOffersDetails } from "../../../services/offers";

function RecentMatches() {
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [type, setType] = useState("FLIGHTS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOffersDetails(type).then((res) => {
      setOffers(res);
      setLoading(false);
    });
  }, [type]);
  return (
    <section className="w-full relative mx-auto bg-white shadow-even  p-2 flex flex-col md:w-[86%] md:p-8 text-center">
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">
        Recent Matches
      </p>
      <Carousel data={offers} loading={loading} />
    </section>
  );
}

export default RecentMatches;
