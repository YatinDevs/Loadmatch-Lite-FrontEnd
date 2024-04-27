import axios from "axios";

const API_URL =
import.meta.env.VITE_APP_DOCKER_API_URL || "https://localhost:3003/api/v1";
console.log(API_URL);

const enquiriesApi = {
  createEnquiry: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/enquiries`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create enquiry");
    }
  },
  getAllEnquiries: async () => {
    try {
      const response = await axios.get(`${API_URL}/enquiries`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch enquiries");
    }
  },
  getEnquiryById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/enquiries/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch enquiry by ID");
    }
  },
  updateEnquiry: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/enquiries/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update enquiry");
    }
  },
  deleteEnquiry: async (id) => {
    try {
      await axios.delete(`${API_URL}/enquiries/${id}`);
    } catch (error) {
      throw new Error("Failed to delete enquiry");
    }
  },
};

export default enquiriesApi;
