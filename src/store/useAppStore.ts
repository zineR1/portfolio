import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createUserSlice, UserSlice } from "./userSlice";

export type AppStore = UserSlice;

export const useAppStore = create<AppStore>()(
  persist<AppStore>(
    (set, get, store) => ({
      ...createUserSlice(set, get, store),
    }),
    { name: "appStore" }
  )
);
