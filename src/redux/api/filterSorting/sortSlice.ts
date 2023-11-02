// sortSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortCriteria = 'priceAsc' | 'priceDesc' | 'nameAsc' | 'nameDesc';

const sortSlice = createSlice({
  name: 'sort',
  initialState: 'priceAsc' as SortCriteria,
  reducers: {
    setSortCriteria: (state, action: PayloadAction<SortCriteria>) => {
      return action.payload;
    },
  },
});

export const { setSortCriteria } = sortSlice.actions;
export default sortSlice.reducer;
