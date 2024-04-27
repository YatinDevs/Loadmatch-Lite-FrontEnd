import React, { useState,useEffect} from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaWeightHanging,
  FaCube,
} from "react-icons/fa";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import enquiriesApi from "../../../services/enquiresApi";

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

  const [userID, setUserID] = useState("");
  const [spaceID, setSpaceID] = useState("");

  
  useEffect(() => {
    // Fetch and set user data from localStorage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserID(userData.user_id);
    }

    // Fetch and set space data from localStorage
    const spaceDataString = localStorage.getItem('spaceData');
    if (spaceDataString) {
      const spaceData = JSON.parse(spaceDataString);
      setSpaceID(spaceData.space_id);
    }
  }, []); // Empty dependency array ensures that this effect runs only once, when the component mounts
  
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleBookEnquiry = async () => {
    try {
      // Prepare data for the enquiry
      const enquiryData = {
        for_space_id: spaceID,
        by_user_id: userID,
        to_user_id: created_by,
        for_load_id: load_id,
      };

      console.warn(enquiryData);

      // Call the API to create the enquiry
      // const response = await enquiriesApi.createEnquiry(enquiryData);
      // if (response) {
      //   // Show a success message or handle success scenario
      //   alert("Enquiry successfully created!");
      // }
    } catch (error) {
      // Handle error scenario
      console.error("Error creating enquiry:", error.message);
      alert("Failed to create enquiry. Please try again later.");
    }
  };



  return (
    <ContentWrapper>
      <article className="card mx-auto w-full border-2 relative rounded-xl py-4 px-6 hover:shadow-lg transition duration-300 bg-white transform hover:scale-105">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex gap-14">
            <div>
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
            </div>
            <div>
              <img
                src={image_urls?.[0] || "placeholder-image-url.jpg"} // Optional chaining to handle image loading time
                alt="Load Image"
                className="rounded-lg h-24 w-24 object-cover"
              />
            </div>
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
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-col gap-2 items-center">
                  <FaWeightHanging className="inline-block mr-2" />
                  <span className="font-semibold">Weight: {weight}</span>
                </div>
                <div className="text-xs text-gray-500 capitalize">
                  <span className="font-semibold">Created by:</span> User{" "}
                  {created_by}
                </div>
              </div>
            </div>
            <div className="action  text-center flex items-center justify-center">
              <button
                className="text-blue-600 bg-blue-100 px-4 py-2 rounded-full focus:outline-none hover:bg-blue-200"
                onClick={toggleExpand}
              >
                {expanded ? (
                  <FaAngleUp className="inline-block mr-2" />
                ) : (
                  <FaAngleDown className="inline-block mr-2" />
                )}
                {expanded ? "Less Details" : "More Detail"}
              </button>
              <button
                className="text-white bg-green-500 px-2 py-2 rounded-full ml-2 focus:outline-none hover:bg-green-600"
                // onClick={() => alert("Book Enquiry clicked")}
                onClick={handleBookEnquiry}
              >
                Book Enquiry
              </button>
            </div>
          </div>
        </div>
        {expanded && (
          <div className="mt-4 px-4 py-2 bg-gray-100 rounded-xl">
            <div className="description md:w-1/2 text-left">
              <div className="text-xs text-gray-500 capitalize">
                <span className="font-semibold">Created by:</span> User{" "}
                {created_by}
              </div>
              <p className="mt-2 text-sm text-gray-700">
                This is a static description about the load. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed fermentum felis nec
                elit ultrices, quis accumsan sapien posuere. Nunc id augue nec
                lacus fermentum pharetra.
              </p>
            </div>
          </div>
        )}
      </article>
    </ContentWrapper>
  );
};

export default LoadCard;
