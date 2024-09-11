import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBoardType: '',
  bannerTitle: '',
  bannerDesc: '',
};

const navBarOptionsSlice = createSlice({
  name: 'navBarOptions',
  initialState,
  reducers: {
    setBoardType(state, action) {
      const { boardType, bannerTitle, bannerDesc } = action.payload;

      state.currentBoardType = boardType;
      state.bannerTitle = bannerTitle;
      state.bannerDesc = bannerDesc;
    },
  },
});

export const { setBoardType } = navBarOptionsSlice.actions;
export default navBarOptionsSlice.reducer;
