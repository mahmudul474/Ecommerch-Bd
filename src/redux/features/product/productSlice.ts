import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    ///actions is here 
  },
});




export default productSlice.reducer