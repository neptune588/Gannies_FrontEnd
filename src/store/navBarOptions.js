import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentActiveMenuNumber: 0,
  currentBoardType: '',
  bannerTitle: '',
  bannerDesc: '',
};

const navBarOptionsSlice = createSlice({
  name: 'navBarOptions',
  initialState,
  reducers: {
    setBoardType(state, action) {
      const { menuNumber, boardType, bannerTitle, bannerDesc } = action.payload;

      state.currentActiveMenuNumber = menuNumber;
      state.currentBoardType = boardType;
      state.bannerTitle = bannerTitle;
      state.bannerDesc = bannerDesc;
    },
  },
});

export const { setBoardType } = navBarOptionsSlice.actions;
export default navBarOptionsSlice.reducer;
