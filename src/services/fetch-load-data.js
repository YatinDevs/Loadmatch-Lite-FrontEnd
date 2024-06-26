import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Change URL according to your backend API
console.log(API_URL);
export const fetchLoadDataFromAPI = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching load data:", error);
    throw error;
  }
};

export const createLoad = async (loadData) => {
  try {
    const res = await axios.post(API_URL, loadData);
    return res.data;
  } catch (error) {
    console.error("Error creating load:", error);
    throw error;
  }
};

export const updateLoad = async (loadId, updatedData) => {
  try {
    const res = await axios.put(`${API_URL}/${loadId}`, updatedData);
    return res.data;
  } catch (error) {
    console.error("Error updating load:", error);
    throw error;
  }
};

export const deleteLoad = async (loadId) => {
  try {
    const res = await axios.delete(`${API_URL}/${loadId}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting load:", error);
    throw error;
  }
};
