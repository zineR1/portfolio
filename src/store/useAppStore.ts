import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createUserSlice, UserSlice } from "./userSlice";
import { createLoaderSlice, LoaderSlice } from "./loaderSlice";
import { createModalSlice, ModalSlice } from "./modalSlice";
import { createTourSlice, TourSlice } from "./tourSlice";

export type AppStore = UserSlice & LoaderSlice & ModalSlice & TourSlice;

export const useAppStore = create<AppStore>()(
  persist<AppStore>(
    (set, get, store) => ({
      ...createUserSlice(set, get, store),
      ...createLoaderSlice(set, get, store),
      ...createModalSlice(set, get, store),
      ...createTourSlice(set, get, store),
    }),
    { name: "appStore" }
  )
);
