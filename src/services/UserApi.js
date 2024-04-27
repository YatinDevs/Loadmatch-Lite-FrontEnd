import axios from "axios";

const API_URL =
  import.meta.env.VITE_APP_DOCKER_API_URL || "https://localhost:3003/api/v1";
console.log(API_URL);

const UserApi = {
  createListing: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create load listing");
    }
  },
  getAllListings: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch loads");
    }
  },
  getlogin: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to login");
    }
  },

  getSearchListings: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users/search`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to search for loads");
    }
  },

  getListingById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch load by ID");
    }
  },
  updateListing: async (id, data) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(`${API_URL}/users/${id}`, data, {
        headers: {
          Authorization: `${token}`, // Include JWT token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update load listing");
    }
  },
  deleteListing: async (id) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
    } catch (error) {
      throw new Error("Failed to delete load listing");
    }
  },
};

export default UserApi;
