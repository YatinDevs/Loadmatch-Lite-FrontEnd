import React, { useState, useRef } from "react";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const PostImage = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full ">
      <div className="bg-white p-4 rounded-lg shadow-md w-full mx-auto">
        <input
          type="text"
          placeholder="Share Images and Information"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:border-blue-500"
        />
        <div className="flex flex-wrap items-center">
          <div
            className="option flex items-center mr-4 mb-4 cursor-pointer"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery className="mr-2" />
            Photo
          </div>
          <div
            className="option flex items-center mr-4 mb-4 cursor-pointer"
            style={{ color: "var(--video)" }}
          >
            <UilPlayCircle className="mr-2" />
            Video
          </div>
          <div
            className="option flex items-center mr-4 mb-4 cursor-pointer"
            style={{ color: "var(--location)" }}
          >
            <UilLocationPoint className="mr-2" />
            Location
          </div>
          <div
            className="option flex items-center mr-4 mb-4 cursor-pointer"
            style={{ color: "var(--schedule)" }}
          >
            <UilSchedule className="mr-2" />
            Schedule
          </div>
        </div>
        <button className="button ps-button px-6 py-3 bg-blue-500 text-white rounded-lg mt-4">
          Share
        </button>
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          className="hidden"
          onChange={onImageChange}
        />
        {image && (
          <div className="previewImage mt-4 relative">
            <UilTimes
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setImage(null)}
            />
            <img src={image.image} alt="Preview" className="rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostImage;
