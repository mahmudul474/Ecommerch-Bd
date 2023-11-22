// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCartFromLocalStorage: state => {
      const existingCart = localStorage.getItem('cart');
      if (existingCart) {
        state.items = JSON.parse(existingCart);
      }
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { productId } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.productId === productId);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
        state.items[existingItemIndex].price += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemToIncrement = state.items.find(item => item.productId === action.payload);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
        itemToIncrement.price += itemToIncrement.price / (itemToIncrement.quantity - 1);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemToDecrement = state.items.find(item => item.productId === action.payload);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        itemToDecrement.price -= itemToDecrement.price / (itemToDecrement.quantity + 1);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    getTotalItems: state => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    getTotalPrice: state => {
      state.totalPrice = state.items.reduce((total, item) => total + item.price, 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { loadCartFromLocalStorage, addToCart, incrementQuantity, decrementQuantity, getTotalItems, getTotalPrice, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
