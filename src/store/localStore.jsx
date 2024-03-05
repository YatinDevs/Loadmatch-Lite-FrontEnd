import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useQuestionStore = create(
  persist(
    (set, get) => ({
      question: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);