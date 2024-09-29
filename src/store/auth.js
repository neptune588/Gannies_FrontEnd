import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    membershipStatus: '',
  },
  reducers: {
    handleAuth(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default auth.reducer;
export const { handleAuth } = auth.actions;
