import { create } from "zustand";
import { loadApi, spaceApi } from "../services";

const useStore = create((set) => ({
  loads: [],
  spaces: [],
  fetchLoads: async () => {
    try {
      const loads = await loadApi.getAllListings();
      set({ loads });
    } catch (error) {
      console.error(error);
    }
  },
}));
