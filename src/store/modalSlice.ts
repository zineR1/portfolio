import { StateCreator } from "zustand";
export interface ModalSlice {
  isOpen: boolean;
  modalType: string | null;
  modalProps?: any;
  openModal: (type: string, props?: any) => void;
  closeModal: () => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (
  set,
  _get,
  _store
) => ({
  isOpen: false,
  modalType: null,
  modalProps: undefined,
  openModal: (type: string, props?: any) =>
    set({ isOpen: true, modalType: type, modalProps: props }),
  closeModal: () =>
    set({ isOpen: false, modalType: null, modalProps: undefined }),
});
