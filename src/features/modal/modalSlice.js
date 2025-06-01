import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedProduct: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedProduct = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedProduct = null;
    },
  },
});

export const selectIsModalOpen = (state) => state.modal.isOpen;
export const selectSelectedProduct = (state) => state.modal.selectedProduct;
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
