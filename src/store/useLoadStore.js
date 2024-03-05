// loadStore.js

import { create } from "zustand";
import loadApi from "../services/loadApi";

const useLoadStore = create((set) => ({
  loads: [],
  error: null,
  isLoading: false,
  createLoad: async (data) => {
    try {
      const newLoad = await loadApi.createListing(data);
      set((state) => ({
        ...state,
        loads: [...state.loads, newLoad],
        error: null,
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error.message }));
      throw error; // Propagate the error to the caller
    }
  },
  fetchLoads: async () => {
    try {
      set({ isLoading: true, error: null });
      const loads = await loadApi.getAllListings();
      set({ loads, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error; // Propagate the error to the caller
    }
  },
  searchLoads: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const loads = await loadApi.getSearchListings(data);
      set({ loads, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error; // Propagate the error to the caller
    }
  },
  fetchHighPriorityLoads: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const loads = await loadApi.getHighPriorityListings(data);
      set({ loads, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error; // Propagate the error to the caller
    }
  },
  fetchDemandRoutes: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const loads = await loadApi.getDemandRoutes(data);
      set({ loads, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error; // Propagate the error to the caller
    }
  },
  fetchLoadById: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const load = await loadApi.getListingById(id);
      set({ loads: [load], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error; // Propagate the error to the caller
    }
  },
  updateLoad: async (id, data) => {
    try {
      const updatedLoad = await loadApi.updateListing(id, data);
      set((state) => ({
        ...state,
        loads: state.loads.map((load) =>
          load.load_id === updatedLoad.load_id ? updatedLoad : load
        ),
        error: null,
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error.message }));
      throw error; // Propagate the error to the caller
    }
  },
  deleteLoad: async (id) => {
    try {
      await loadApi.deleteListing(id);
      set((state) => ({
        ...state,
        loads: state.loads.filter((load) => load.load_id !== id),
        error: null,
      }));
    } catch (error) {
      set((state) => ({ ...state, error: error.message }));
      throw error; // Propagate the error to the caller
    }
  },
}));

export default useLoadStore;
