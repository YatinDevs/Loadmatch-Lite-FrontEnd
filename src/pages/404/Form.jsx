import axios from "axios";
import React, { useState,useEffect } from "react";

function Form() {
  const [formData, setFormData] = useState({
    from_city: "",
    from_pin: "",
    to_city: "",
    to_pin: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    image: null,
    active:true,
  });
  const [userID, setuserID] =useState("");

  useEffect(() => {
    // Fetch and set user data from localStorage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setuserID(userData.user_id);
    }

    
  }, []); // Empty dependency array ensures that this effect runs only once, when the component mounts
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const formDataToSend = new FormData();
    formDataToSend.append("from_city", formData.from_city);
    formDataToSend.append("from_pin", formData.from_pin);
    formDataToSend.append("to_city", formData.to_city);
    formDataToSend.append("to_pin", formData.to_pin);
    formDataToSend.append("length", formData.length);
    formDataToSend.append("width", formData.width);
    formDataToSend.append("height", formData.height);
    formDataToSend.append("weight", formData.weight);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("created_by",userID);
    formDataToSend.append("active", formData.active);
    
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/upload-create-load",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Load created successfully:", response.data);
      localStorage.setItem('loadData', JSON.stringify(response.data.load));
      // Add any further actions upon successful creation of the load
    } catch (error) {
      console.error("Error uploading image and creating load:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from_city"
        placeholder="From City"
        value={formData.from_city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="from_pin"
        placeholder="From PIN"
        value={formData.from_pin}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to_city"
        placeholder="To City"
        value={formData.to_city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="to_pin"
        placeholder="To PIN"
        value={formData.to_pin}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="length"
        placeholder="Length"
        value={formData.length}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="weight"
        placeholder="Weight"
        value={formData.weight}
        onChange={handleChange}
        required
      />
      <input type="file" name="image" onChange={handleImageChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
