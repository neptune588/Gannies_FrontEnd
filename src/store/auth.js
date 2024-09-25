import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    handleLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { handleLogin } = auth.actions;
export default auth.reducer;
