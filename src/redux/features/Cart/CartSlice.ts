import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const  CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ///actions is here 
  },
});




export default  CartSlice.reducer