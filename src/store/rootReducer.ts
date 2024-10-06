import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice"; // Пример слайса для корзины
import filterSlice from "../slices/filterSlice"; // Пример слайса для фильтров
// import userSlice from "../slices/userSlice"; // Пример слайса для пользователя

const rootReducer = combineReducers({
  cart: cartSlice,
  filters: filterSlice,
});

export default rootReducer;
