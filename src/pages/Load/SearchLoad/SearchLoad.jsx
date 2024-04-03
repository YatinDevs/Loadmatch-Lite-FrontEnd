import React, { useState } from "react";
import UserApi from "../../../services/UserApi";
import { useNavigate } from 'react-router-dom';


function SearchLoad() {


    const [formData, setFormData] = useState({

        from_city: "",
        to_city: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserApi.getSearchListings(formData); // Call createListing method from loadApi object
            console.log("User login:", response);
            // Save user data and token in local storage
      
        // Redirect or navigate to the desired page after successful login
        navigate('/'); // Example: Navigate to the dashboard page
        } catch (error) {
            console.error("Error creating User:", error);
        }
    };

   

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4"> 

                <div>
                    <label htmlFor="from_city" className="block mb-1 font-semibold">
                        From city
                    </label>
                    <input
                        type="text"
                        name="from_city"
                        value={formData.from_city}
                        onChange={handleChange}
                        id="from_city"
                        placeholder="Enter from city"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="to_city" className="block mb-1 font-semibold">
                        To city
                    </label>
                    <input
                        type="text"
                        name="to_city"
                        value={formData.to_city}
                        onChange={handleChange}
                        id="to_city"
                        placeholder="Enter to city"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
                

            </form>
        </div>
    );
}

export default SearchLoad;
