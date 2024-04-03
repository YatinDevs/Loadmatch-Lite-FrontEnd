import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaWeightHanging,
  FaCube,
} from "react-icons/fa";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const LoadCard = ({
  load_id,
  from_city,
  from_pin,
  to_city,
  to_pin,
  image_urls,
  created_at,
  updated_at,
  created_by,
  length,
  width,
  height,
  weight,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ContentWrapper>
      <article className="card mx-auto w-full border-2 relative rounded-xl py-4 px-6 hover:shadow-lg transition duration-300 bg-white transform hover:scale-105">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-3 md:mb-0">
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              From: {from_city}
            </span>
            <span className="block text-sm md:text-base text-gray-600">
              {from_pin}
            </span>
          </div>
          <div className="mb-3 md:mb-0">
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              To: {to_city}
            </span>
            <span className="block text-sm md:text-base text-gray-600">
              {to_pin}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="dest md:w-1/4 text-center flex gap-20">
              <div>
                <div className="text-gray-500  font-semibold capitalize">
                  <FaCube className="inline-block mr-2" />
                  Dimensions:
                </div>
                <div className="font-semibold">Length: {length}</div>
                <div className="font-semibold">Width: {width}</div>
                <div className="font-semibold">Height: {height}</div>
              </div>
              <div>
                <div className="flex items-center">
                  <FaWeightHanging className="inline-block mr-2" />
                  <span className="font-semibold">Weight: {weight}</span>
                </div>
              </div>
            </div>
            <div className="action md:w-1/4 text-center flex items-center justify-center">
              <button
                className="text-blue-600 bg-blue-100 px-4 py-2 rounded-full focus:outline-none hover:bg-blue-200"
                onClick={toggleExpand}
              >
                {expanded ? (
                  <FaAngleUp className="inline-block mr-2" />
                ) : (
                  <FaAngleDown className="inline-block mr-2" />
                )}
                {expanded ? "Less Details" : "More Details"}
              </button>
              <button
                className="text-white bg-green-500 px-4 py-2 rounded-full ml-2 focus:outline-none hover:bg-green-600"
                onClick={() => alert("Book Enquiry clicked")}
              >
                Book Enquiry
              </button>
            </div>
          </div>
        </div>
        {expanded && (
          <div className="mt-4 px-4 py-2 bg-gray-100 rounded-xl">
            <div className="dest md:w-1/4 text-center ">
              <div className="text-xs text-gray-500 capitalize">
                <FaCube className="inline-block mr-2" />
                Dimensions:
              </div>
              <div className="font-semibold">Length: {length}</div>
              <div className="font-semibold">Width: {width}</div>
              <div className="font-semibold">Height: {height}</div>
              <div className="flex items-center">
                <FaWeightHanging className="inline-block mr-2" />
                <span className="font-semibold">Weight: {weight}</span>
              </div>
            </div>
            <div className="image-grid grid grid-cols-3 gap-2 mt-4">
              {/* {image_urls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Image ${index}`}
                  className="rounded-lg h-16 w-16 object-cover"
                />
              ))}
              {[...Array(3 - image_urls.length)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg h-16 w-16 flex justify-center items-center"
                >
                  <span className="text-gray-400">Image {index + 1}</span>
                </div>
              ))} */}
            </div>
          </div>
        )}
      </article>
    </ContentWrapper>
  );
};

export default LoadCard;
