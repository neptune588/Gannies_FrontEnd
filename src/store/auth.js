import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userId: null,
  nickname: null,
  // isSuspended: null,
  // membershipStatus: null,
  // rejected: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action) {
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    },
    setLogout() {
      return initialState;
    },
    setState(state, action) {
      return {
        ...state,
        ...Object.fromEntries(
          Object.entries(action.payload).filter(
            ([, value]) => value !== undefined
          )
        ),
      };
    },
  },
});

export const { setLogin, setLogout, setState } = authSlice.actions;
export default authSlice.reducer;
