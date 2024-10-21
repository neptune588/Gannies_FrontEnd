import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userId: null,
  nickname: null,
  isAdmin: false,
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
    setAdminLogin(state, action) {
      const { userId, nickname } = action.payload;

      state.userId = userId;
      state.nickname = nickname;
      state.isLogin = true;
      state.isAdmin = true;
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

export const { setLogin, setLogout, setState, setAdminLogin } =
  authSlice.actions;
export default authSlice.reducer;
