
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const isInItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (isInItem) {
        isInItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart(state) {
      state.items = [];
    },
    increaseCount(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.count += 1;
      }
    },
    decreaseCount(state, action) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.count -= 1;
        if (itemInCart.count === 0) {
          state.items = state.items.filter((item) => item.id !== itemInCart.id);
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCount, decreaseCount } =
  cartSlice.actions;

export const cartItems = (store) => store.cart.items;

export default cartSlice.reducer;
