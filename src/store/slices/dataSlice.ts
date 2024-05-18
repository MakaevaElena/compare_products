import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { PRODUCTS } from "../../products.ts";

const initialState: DataState = {
  products: PRODUCTS,
  chosenCount: 3,
  searchValue: "",
  chosenProducts: PRODUCTS.slice(0, 3),
  changedProduct: {
    productName: "",
    productImage: "",
    producer: "",
    year: 0,
    diagonal: 0,
    country: "",
    memory: "",
    fqc: "",
    NFC: false,
    ESIM: false,
    wirelessPower: false,
    price: "",
  },
  changedProductId: 0,
  showChanges: false,
};

const dataSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChosenCount: (state, action) => {
      state.chosenCount = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },

    setChosenProducts: (state, action) => {
      state.chosenProducts = action.payload;
    },

    setChangedProduct: (state, action) => {
      state.changedProduct = action.payload;
    },

    setChangedProductId: (state, action) => {
      state.changedProductId = action.payload;
    },

    setShowChanges: (state, action) => {
      state.showChanges = action.payload;
    },
  },
});

export const {
  setChosenCount,
  setSearchValue,
  setChosenProducts,
  setChangedProduct,
  setChangedProductId,
  setShowChanges,
} = dataSlice.actions;

export default dataSlice.reducer;
