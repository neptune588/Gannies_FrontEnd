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

export default auth.reducer;
export const { handleLogin } = auth.actions;
