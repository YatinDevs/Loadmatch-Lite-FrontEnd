
import axios from "axios";

const API_URL =
  import.meta.env.REACT_APP_API_URL || "http://localhost:3003/api/v1";

const partialRouteApi = {
  createListing: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/partial-routes`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create Partial Routes listing");
    }
  },
  getAllListings: async () => {
    try {
      const response = await axios.get(`${API_URL}/partial-routes`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch partial Routes");
    }
  },
  getSearchListings: async (data) => {
    try {
      console.log("in getSearchListingsService", data);
      const response = await axios.post(`${API_URL}/spaces/partial-routes-search`, data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      throw new Error("Failed to search for spaces");
    }
  },
 
  getListingById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}//partial-routes/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch Partial routes by ID");
    }
  },
  updateListing: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/partial-routes/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update partial routes listing");
    }
  },
  deleteListing: async (id) => {
    try {
      await axios.delete(`${API_URL}/partial-routes/${id}`);
    } catch (error) {
      throw new Error("Failed to delete partial-routes listing");
    }
  },
};

export default partialRouteApi;
