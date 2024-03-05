import { create } from "zustand";
import spaceApi from "../services/spaceApi.js";

const useSpaceStore = create((set) => ({
  spaces: [],
  error: null,
  isLoading: false,
  createSpace: async (data) => {
    try {
      const newSpace = await spaceApi.createListing(data);
      set((state) => ({ spaces: [...state.spaces, newSpace] }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
  fetchSpaces: async () => {
    try {
      set({ isLoading: true });
      const spaces = await spaceApi.getAllListings();
      set({ spaces, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  searchSpaces: async (data) => {
    try {
      set({ isLoading: true });
      const spaces = await spaceApi.getSearchListings(data);
      set({ spaces, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchHighPrioritySpaces: async (data) => {
    try {
      set({ isLoading: true });
      const spaces = await spaceApi.getHighPriorityListings(data);
      set({ spaces, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchDemandRoutes: async (data) => {
    try {
      set({ isLoading: true });
      const spaces = await spaceApi.getDemandRoutes(data);
      set({ spaces, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchSpaceById: async (id) => {
    try {
      set({ isLoading: true });
      const space = await spaceApi.getListingById(id);
      set({ spaces: [space], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  updateSpace: async (id, data) => {
    try {
      const updatedSpace = await spaceApi.updateListing(id, data);
      set((state) => ({
        spaces: state.spaces.map((space) =>
          space.space_id === updatedSpace.space_id ? updatedSpace : space
        ),
      }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
  deleteSpace: async (id) => {
    try {
      await spaceApi.deleteListing(id);
      set((state) => ({
        spaces: state.spaces.filter((space) => space.space_id !== id),
      }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
}));

export default useSpaceStore;
