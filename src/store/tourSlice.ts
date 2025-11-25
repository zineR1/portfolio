import { StateCreator } from "zustand";

export interface TourSlice {
  runTour: boolean;
  setRunTour: (run: boolean) => void;
}

export const createTourSlice: StateCreator<TourSlice> = (set) => ({
  runTour: false,
  setRunTour: (run) => set({ runTour: run }),
});
