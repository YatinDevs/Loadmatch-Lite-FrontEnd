import React, { useState } from "react";
import InputField from "../../../components/SmallComponents/InputField/InputField";
import Inputbox from "../../../components/SmallComponents/BasicInputBox/Inputbox";
import AddButton from "../../../components/SmallComponents/Buttons/AddButton";
import useLoadStore from "../../../store/useLoadStore.js";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper.jsx";
import ImageUpload from "./ImageUpload.jsx";
import InputFieldG from "../../../components/SmallComponents/InputField/InputFieldG.jsx";
import { S3 } from "@aws-sdk/client-s3";
import UploadImage from "./UploadImage.jsx";

const config = {
  bucketName: import.meta.env.AWS_SPACES_BUCKET_NAME,
  accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
  region: "blr1", // Specify your DigitalOcean Spaces region
};

const uploadImageToDigitalOcean = async (file) => {
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
    return data.Location; // Return the uploaded image URL
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Throw error for handling in the component
  }
};

function AddLoad() {
  const [formData, setFormData] = useState({
    from_city: "",
    from_pin: "",
    to_city: "",
    to_pin: "",
    imageUrls: [],
    created_by: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    active: true,
  });
  const [userID, setuserID] = useState("");




  const [imagePreviews, setImagePreviews] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    const files = Array.from(e.target.files);
    console.log(files);

    setFormData((prevData) => {
      console.log(prevData.imageUrls);
      return {
        ...prevData,
        imageUrls: [],
      };
    });
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => prevPreviews.concat(previews));
  };

  const handleCitySelect = (city, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: city,
    }));
  };

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await uploadImageToDigitalOcean(file);
      setFormData((prevState) => ({
        ...prevState,
        imageUrls: [...prevState.imageUrls, imageUrl],
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {



      // Retrieve user data from localStorage
      const userDataString = localStorage.getItem('userData');

      // Check if userDataString is not null (i.e., data exists in localStorage)
      if (userDataString) {
        // Parse the userDataString back into an object
        const userData = JSON.parse(userDataString);
        const parsedUserID = parseInt(userData.user_id);
        setuserID(parsedUserID);
        // Now userData contains your user data
        console.warn(userData, parsedUserID);
      } else {
        console.log('No user data found in localStorage');
      }

      // Update the formData with the userID
    const updatedFormData = {
      ...formData,
      created_by: userID,
    };
    
   
  
    const response =  await useLoadStore.getState().createLoad(updatedFormData);

      setFormData({
        from_city: "",
        from_pin: "",
        to_city: "",
        to_pin: "",
        imageUrls: [],
        created_by: "",
        length: "",
        width: "",
        height: "",
        weight: "",
      });
      setImagePreviews([]);

      localStorage.setItem('loadData', JSON.stringify(response.data.load));

    } catch (error) {
      console.error("Error creating load:", error);
    }
  };

  const {
    from_city,
    to_city,
    to_pin,
    from_pin,
    length,
    weight,
    width,
    height,
    created_by,
  } = formData;

  return (
    <ContentWrapper className="my-5">
      <h1
        className=" mt-15 text-center font-bold text-black leading-7 text-[20px] md:text-[22px] "
        style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
      >
        Explore Loads and Add Loads Here!
      </h1>
      <div className="p-2">
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto  mt-2 relative bg-white  shadow-md rounded-2xl px-4 py-8 flex flex-col md:w-11/12 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-2 ">
            <div className="flex items-center md:gap-2 flex-col md:flex-row  ">
              <InputField
                label="From City"
                placeholder="Enter from city"
                id="from_city"
                type="text"
                value={from_city}
                onChange={(value) =>
                  handleChange({ target: { name: "from_city", value } })
                }
                className=" flex-1 w-full"
                handleCitySelect={(city) => handleCitySelect(city, "from_city")}
              />

              <Inputbox
                label="From PIN"
                placeholder="Enter from PIN"
                id="from_pin"
                type="number"
                value={from_pin}
                name="from_pin"
                onChange={handleChange}
                className="flex-1 w-full"
              />
            </div>
            <div className="flex items-center md:gap-2 flex-col md:flex-row ">
              <InputField
                label="To City"
                placeholder="Enter to city"
                id="to_city"
                type="text"
                value={to_city}
                name="to_city"
                onChange={handleChange}
                className="flex-1 w-full"
                handleCitySelect={(city) => handleCitySelect(city, "to_city")}
              />

              <Inputbox
                label="To PIN"
                placeholder="Enter to PIN"
                id="to_pin"
                type="number"
                value={to_pin}
                name="to_pin"
                onChange={handleChange}
                className="flex-1 w-full"
              />
            </div>
          </div>
          <div>
            <UploadImage />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 ">
              <Inputbox
                label="Created By"
                placeholder="Enter (userID)"
                id="created_by"
                type="number"
                value={created_by}
                name="created_by"
                onChange={handleChange}
                className="flex-1"
              />
              <Inputbox
                label="Weight"
                placeholder="in tonnes"
                id="weight"
                type="number"
                value={weight}
                name="weight"
                onChange={handleChange}
                className="flex-1"
              />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2">
              <Inputbox
                label="Width"
                placeholder="in ft"
                id="width"
                type="number"
                value={width}
                name="width"
                onChange={handleChange}
                className=" flex-1"
              />

              <Inputbox
                label="Height"
                placeholder="in ft"
                id="height"
                type="number"
                value={height}
                name="height"
                onChange={handleChange}
                className=" flex-1"
              />
              <Inputbox
                label="Length"
                placeholder="in ft"
                id="length"
                type="number"
                value={length}
                name="length"
                onChange={handleChange}
                className=" flex-1"
              />
            </div>
          </div>
          <AddButton
            label={"Add Load"}
            type="submit"
            onClick={handleSubmit}
            className="px-12 py-4 rounded-full text-base md:text-lg font-semibold
        text-white bg-green-500 w-fit self-center absolute bottom-[-25px]
        hover:bg-green-600 "
          ></AddButton>
        </form>
      </div>
    </ContentWrapper>
  );
}

export default AddLoad;
