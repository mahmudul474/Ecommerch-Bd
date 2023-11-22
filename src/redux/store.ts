import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/apiSlice";
import { baseApi } from "./api/baseApiSlice";
import cartReducer from "./freaturs/Cart/cartSlice";
 

export const store = configureStore({
  reducer: {

    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    [baseApi.reducerPath]: baseApi.reducer
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware,baseApi.middleware ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
