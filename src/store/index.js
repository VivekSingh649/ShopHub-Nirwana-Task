import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import filterReducer from "../features/filter/filterSlice";
import modalReducer from "../features/modal/modalSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    modal: modalReducer,
    cart: cartReducer,
  },
});
