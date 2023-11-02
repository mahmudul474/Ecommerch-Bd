import { configureStore } from '@reduxjs/toolkit'
import  productReducer  from "./features/product/productSlice"
import   cartReducer from "./features/Cart/CartSlice"
import { api } from './api/apiSlice'

 export const store = configureStore({
  reducer:{
        product:productReducer,
        cart:cartReducer,
       
  [api.reducerPath]:api.reducer
  
  
  
      
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})
 


 
export type RootState = ReturnType<typeof store.getState>
 
export type AppDispatch = typeof store.dispatch