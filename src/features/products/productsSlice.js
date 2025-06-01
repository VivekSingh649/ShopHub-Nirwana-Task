import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsData from "../../data/products.json";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1500);
    });
  }
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;

export default productsSlice.reducer;
