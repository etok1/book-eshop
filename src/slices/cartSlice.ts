import { createSlice } from "@reduxjs/toolkit";
import { BookItem, Books } from "@/types/book";

interface CartState {
  items: BookItem[];
}

const initialState: CartState = {
  items: [],
};

interface Store {
  cart: Books;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: CartState, action) {
      const isInItem = state.items.find(
        (item: BookItem) => item.id === action.payload.id
      );

      if (isInItem && isInItem.count) {
        isInItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },

    removeItem(state: CartState, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart(state: CartState) {
      state.items = [];
    },
    increaseCount(state: CartState, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && item.count) {
        item.count += 1;
      }
    },
    decreaseCount(state: CartState, action) {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart && itemInCart.count) {
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

export const cartItems = (store: Store) => store.cart.items;

export default cartSlice.reducer;
