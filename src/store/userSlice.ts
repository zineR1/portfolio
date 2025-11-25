import { User } from "../types";
import { StateCreator } from "zustand";
import { initialData } from "../constants";

export interface UserSlice {
  user: User;
  isProfileEdited: boolean;
  setUser: (user: User) => void;
  // updateField: (path: string, value: any) => void;
  resetUser: () => void;
}
console.log(initialData,"INITIALDATA EN USERSLICE")
export const createUserSlice: StateCreator<UserSlice> = (
  set,
  _get,
  _store
) => ({
  user: initialData,
  isProfileEdited: false,
  setUser: (user: User) => set({
    user,
    isProfileEdited: true
  }),
  // updateField: (path: string, value: any) =>
  //   set((state) => {
  //     const keys = path.split(".");
  //     const newData: User = JSON.parse(JSON.stringify(state.user));
  //     let obj: any = newData;
  //     while (keys.length > 1) {
  //       obj = obj[keys.shift() as string];
  //     }
  //     obj[keys[0]] = value;
  //     return { user: newData, isProfileEdited: true };
  //   }),
  resetUser: () => set({ user: initialData, isProfileEdited: false }),
});
