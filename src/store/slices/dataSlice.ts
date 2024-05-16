import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";

const initialState: DataState = {
  data: [],
  chosenCount: 2,
};

const dataSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChosenCount: (state, action) => {
      state.chosenCount = action.payload;
    },
  },
});

export const { setChosenCount } = dataSlice.actions;

export default dataSlice.reducer;
