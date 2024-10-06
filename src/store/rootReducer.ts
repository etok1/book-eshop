import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice"; 
import filterSlice from "../slices/filterSlice"; 
// import userSlice from "../slices/userSlice"; 

const rootReducer = combineReducers({
  cart: cartSlice,
  filters: filterSlice,
});

export default rootReducer;
