
import { create } from "zustand";
import partialRouteApi from "../services/partialRouteApi"; 

const usepartialRouteStore = create((set) => ({
    partialRoute: [],
  error: null,
  isLoading: false,
  createPartialRoute: async (data) => {
    try {
      const newpartialRoute = await partialRouteApi.createListing(data);
      set((state) => ({ partialRoute: [...state.partialRoute, newpartialRoute] }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
  fetchPartialRoute: async () => {
    try {
      set({ isLoading: true });
      const partialRoutes = await partialRouteApi.getAllListings();
      set({ partialRoutes, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  searchPartialRoute: async (data) => {
    try {
      set({ isLoading: true });
      const partialRoutes = await partialRouteApi.getSearchListings(data);
      set({ partialRoutes, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  fetchPartialRouteById: async (id) => {
    try {
      set({ isLoading: true });
      const partialRoute = await partialRouteApi.getListingById(id);
      set({ partialRoutes: [partialRoute], isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  updatePartialRoute: async (id, data) => {
    try {
      const updatedSpace = await partialRouteApi.updateListing(id, data);
      set((state) => ({
        partialRoutes: state.partialRoutes.map((partialRoute) =>
        partialRoute.PartialRoutes_id === updatedSpace.PartialRoutes_id ? updatedSpace : partialRoute
        ),
      }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
  deletePartialRoute: async (id) => {
    try {
      await partialRouteApi.deleteListing(id);
      set((state) => ({
        partialRoutes: state.partialRoutes.filter((partialRoute) => partialRoute.PartialRoutes_id !== id),
      }));
    } catch (error) {
      set((state) => ({ error: error.message }));
    }
  },
}));

export default usepartialRouteStore;
