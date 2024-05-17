import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { PRODUCTS } from "../../products.ts";

const initialState: DataState = {
  data: [],
  chosenCount: 3,
  searchValue: "",
  chosenProducts: PRODUCTS.slice(0, 3),
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
  },
});

export const { setChosenCount, setSearchValue, setChosenProducts } = dataSlice.actions;

export default dataSlice.reducer;
