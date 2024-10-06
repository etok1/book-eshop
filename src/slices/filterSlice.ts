// src/slices/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "Architecture",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
