// filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  minPrice: string;
  maxPrice: string;
  selectedCategory: string;
}

const initialState: FilterState = {
  minPrice: '',
  maxPrice: '',
  selectedCategory: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<string>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<string>) => {
      state.maxPrice = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice, setSelectedCategory } = filterSlice.actions;
export default filterSlice.reducer;
