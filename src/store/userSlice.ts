import { User } from "../types";
import { StateCreator } from "zustand";
import { initialData } from "../constants";

export interface UserSlice {
  user: User;
  isProfileEdited: boolean;
  setUser: (user: User) => void;
  resetUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (
  set,
  _get,
  _store
) => ({
  user: initialData,
  isProfileEdited: false,
  setUser: (user: User) =>
    set({
      user,
      isProfileEdited: true,
    }),
  resetUser: () => set({ user: initialData, isProfileEdited: false }),
});
