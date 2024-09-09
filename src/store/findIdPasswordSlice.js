import { createSlice } from '@reduxjs/toolkit';

const findIdPasswordSlice = createSlice({
  name: 'findIdPasswordSlice',
  initialState: {
    name: '',
    phoneNumber: '',
    email: '',
  },
  reducers: {
    handleFindIdPasswordData(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export default findIdPasswordSlice.reducer;
export const { handleFindIdPasswordData } = findIdPasswordSlice.actions;
