import axios from "axios";

const API_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:3003/api/v1";

const loadApi = {
  createListing: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/load`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create load listing");
    }
  },
  getAllListings: async () => {
    try {
      const response = await axios.get(`${API_URL}/loads`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch loads");
    }
  },
  getSearchListings: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/loads/search`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to search for loads");
    }
  },
  getHighPriorityListings: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/loads/high-priority`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch high-priority loads");
    }
  },
  getDemandRoutes: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/loads/demand-routes`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch demand routes");
    }
  },
  getListingById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/load/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch load by ID");
    }
  },
  updateListing: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/load/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update load listing");
    }
  },
  deleteListing: async (id) => {
    try {
      await axios.delete(`${API_URL}/load/${id}`);
    } catch (error) {
      throw new Error("Failed to delete load listing");
    }
  },
};

export default loadApi;
