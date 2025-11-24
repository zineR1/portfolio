import { StateCreator } from "zustand";

export interface LoaderSlice {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const createLoaderSlice: StateCreator<LoaderSlice> = (
  set,
  _get,
  _store
) => ({
  isLoading: true,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
});
