import { createSlice } from '@reduxjs/toolkit';

const num = createSlice({
    name: 'name',
    initialState: [],
    reducers: {
      addNum(state, action) {
        return state + action.payload;
      }
    }
});

export default num.reducer;
export const numActions = num.actions;