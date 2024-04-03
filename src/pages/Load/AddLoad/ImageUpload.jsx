import React, { useState } from "react";
import { useRef } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

function ImageUpload() {
  const [showBorder, setShowBorder] = useState(false);
  const [source, setSource] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    setShowBorder(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    setShowBorder(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBorder(false);
    console.log(e.dataTransfer.files);
    // Drag and Drop event fetch files from dataTransfer.files
    const { files } = e.dataTransfer;
    const file = files.item[0];
    if (file) {
      setSource(URL.createObjectURL(file));
      setFile(file);
    }
  };
  const handleClick = (e) => {
    console.log(fileInputRef);
    fileInputRef.current?.click();
  };
  const handleFileChange = (e) => {
    // onChange event fetch file from target.files
    console.log(e.target.files);
    const { files } = e.target;
    if (files && files.length) {
      const file = files.item(0);
      setSource(URL.createObjectURL(file));
      setFile(file);
    }
  };
  return (
    <>
      <div
        className={`bg-white w-auto  mb-2 rounded-lg 
       box-border p-4 cursor-pointer ${
         showBorder
           ? "border-2 border-solid border-blue-500"
           : "border-2 border-solid border-gray-200"
       }`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div>
          <label
            htmlFor="file "
            className=" text-[18px]"
            onClick={(e) => e.preventDefault()}
          >
            Upload Image
          </label>
          <input
            className="hidden"
            type="file"
            id="file"
            accept="image/jpg,image/jpeg,image/png"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <p className="text-[#8a8a8a]">
            Click to upload a file.(You can also drag and drop image here.)
          </p>
        </div>
        {source && (
          <div className=" px-1  py-1 bg-gray-100 rounded-xl">
            <div
              className="w-full h-[150px] my-[10px] bg-cover bg-center  bg-no-repeat border  border-gray-300 border-5 rounded-lg cursor-pointer"
              style={{ backgroundImage: `url(${source})` }}
            ></div>
          </div>
        )}
      </div>

      {file && (
        <button
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="w-full py-[10px] px-[20px]  box-border border-2 border-gray-200 rounded-lg bg-green-500 text-white"
        >
          <div className="flex items-center justify-center gap-2">
            <IoCloudUploadOutline size={30} />
            <span className="font-semibold">Upload</span>
          </div>
        </button>
      )}
    </>
  );
}

export default ImageUpload;
