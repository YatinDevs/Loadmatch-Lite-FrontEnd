import { create } from "zustand";

const useJourneyStore = create((set) => ({
  inputSourceValue: "",
  inputDestValue: "",
  setInputSourceValue: (value) => set({ inputSourceValue: value }),
  setInputDestValue: (value) => set({ inputDestValue: value }),
  swapLocation: () =>
    set((state) => ({
      inputSourceValue: state.inputDestValue,
      inputDestValue: state.inputSourceValue,
    })),
}));

export default useJourneyStore;
