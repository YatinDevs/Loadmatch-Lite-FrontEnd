// spaceApi.js

import axios from "axios";

const API_URL =
  import.meta.env.VITE_APP_DOCKER_API_URL || "https://localhost:3003/api/v1";
console.log(API_URL);
const spaceApi = {
  createListing: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/space`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create space listing");
    }
  },
  getAllListings: async () => {
    try {
      const response = await axios.get(`${API_URL}/spaces`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch spaces");
    }
  },
  getSearchListings: async (data) => {
    try {
      console.log("in getSearchListingsService", data);
      const response = await axios.post(`${API_URL}/spaces/search`, data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      throw new Error("Failed to search for spaces");
    }
  },
  getHighPriorityListings: async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/spaces/high-priority`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch high-priority spaces");
    }
  },
  getDemandRoutes: async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/spaces/demand-routes`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch demand routes");
    }
  },
  getListingById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/space/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch space by ID");
    }
  },
  updateListing: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/space/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update space listing");
    }
  },
  deleteListing: async (id) => {
    try {
      await axios.delete(`${API_URL}/space/${id}`);
    } catch (error) {
      throw new Error("Failed to delete space listing");
    }
  },
};

export default spaceApi;
