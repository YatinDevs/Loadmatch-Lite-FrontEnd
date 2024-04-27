import React, { useState, useRef } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImagePreview from "./ImagePreview";
import { S3 } from "@aws-sdk/client-s3";

const config = {
  bucketName: import.meta.env.AWS_SPACES_BUCKET_NAME,
  accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
  region: "blr1", // Specify your DigitalOcean Spaces region
};

function ImageUpload({ onImageUpload }) {
  const [showBorder, setShowBorder] = useState(false);
  const [source, setSource] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBorder(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBorder(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBorder(false);

    const { files } = e.dataTransfer;
    const file = files.item(0);
    if (file) {
      setSource(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleClick = (e) => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      const file = files.item(0);
      setSource(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const uploadFile = async () => {
    if (!file) return;

    const s3 = new S3({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: config.region,
    });

    const params = {
      Bucket: config.bucketName,
      Key: file.name,
      Body: file,
      ACL: "public-read",
    };

    try {
      const data = await s3.upload(params).promise();
      console.log("File uploaded successfully:", data.Location);
      onImageUpload(data.Location); // Call the onImageUpload function with the uploaded image URL
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error (e.g., show error message to the user)
    }
  };
  const handleDeleteImg = () => {
    setSource(""); // Clear the image source to remove the preview
    setFile(null); // Clear the file state
    // Perform any additional cleanup actions here, if needed
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
            Click to upload a file. (You can also drag and drop image here.)
          </p>
        </div>
        {source && (
          <ImagePreview handleDeleteImg={handleDeleteImg} source={source} />
        )}
      </div>

      {file && (
        <button
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="w-full py-[10px] px-[20px]  box-border border-2 border-gray-200 rounded-lg bg-green-500 text-white"
          onClick={uploadFile} // Call uploadFile function when "Upload" button is clicked
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
