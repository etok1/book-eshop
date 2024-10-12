import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState = {
  token: tokenFromStorage || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { login } = authSlice.actions;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
