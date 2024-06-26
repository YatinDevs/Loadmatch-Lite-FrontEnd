import React, { useState } from "react";
import UserApi from "../../../services/UserApi";
import { useNavigate } from 'react-router-dom';


function Login() {


    const [formData, setFormData] = useState({

        contact: "",
        password: ""
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
            const response = await UserApi.getlogin(formData);
            
            console.log("User login:", response);

            // Save user data and token in local storage
            localStorage.setItem('userData', JSON.stringify(response.user));
            localStorage.setItem('authToken', JSON.stringify(response.auth));
            
                const sessionCookieValue = getCookie('authToken');
                console.warn(sessionCookieValue);
                console.log(sessionCookieValue);

                // Now you can use sessionCookieValue
          
        //    if(!sessionCookieValue){
        //         return console.warn("cookies not found");
        //    }
            navigate('/'); // Example: Navigate to the dashboard page

            // Wait for a short time before trying to access the cookie
            // Adjust the timeout as needed
        } catch (error) {
            console.error("Error creating User:", error);
        }
    };


    const navigate = useNavigate();
   

    function getCookie(name) {
        console.log("Looking for cookie:", name);
        const cookies = document.cookie.split(';');
        console.log("All cookies:", cookies);
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            console.log("Current cookie:", cookie);
            if (cookie.startsWith(name + '=')) {
                console.log("Found cookie:", cookie);
                return cookie.substring(name.length + 1, cookie.length);
            }
        }
        console.warn("Cookie not found:", name);
        return null;
    }
    


    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4"> 

                <div>
                    <label htmlFor="contact" className="block mb-1 font-semibold">
                        Email
                    </label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        id="contact"
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                <a
                    href="/signup"
                    className="block w-full text-center text-blue-500 hover:underline"
                >
                    Register me
                </a>

            </form>
        </div>
    );
}

export default Login;
