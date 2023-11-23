import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  name: string;
  price: number;
  // ... other properties
}

interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}

let initialState: CartItem[] = [];

// Check if localStorage is available (not in server-side rendering)
if (typeof window !== "undefined") {
  const storedCart = localStorage.getItem("cart");
  initialState = storedCart ? JSON.parse(storedCart) : [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { _id } = action.payload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.find((item) => item._id === id);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.find((item) => item._id === id);
      if (item) {
        if (item.quantity === 1) {
          const index = state.findIndex((item) => item._id === id);
          state.splice(index, 1);
        } else {
          item.quantity--;
          item.totalPrice = item.quantity * item.price;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const idToRemove = action.payload;
      const indexToRemove = state.findIndex((item) => item._id === idToRemove);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  

 
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
