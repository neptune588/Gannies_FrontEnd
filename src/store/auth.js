import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userId: null,
  status: null,
};

//리듀서에서 return 하는 값은 해당 리듀서의 새로운 상태
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      const { userId, membershipStatus } = action.payload;
      state.status = membershipStatus;
      state.isLogin = true;
      state.userId = userId;
    },
    setLogout() {
      return initialState;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
