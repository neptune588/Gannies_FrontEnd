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

      state.currentActiveMenuNumber =
        menuNumber === undefined ? null : menuNumber;
      state.currentBoardType =
        boardType === undefined || boardType === null ? '' : boardType;
      state.bannerTitle =
        bannerTitle === undefined || bannerTitle === null ? '' : bannerTitle;
      state.bannerDesc =
        bannerDesc === undefined || bannerDesc === null ? '' : bannerDesc;
    },
  },
});

export const { setBoardType } = navBarOptionsSlice.actions;
export default navBarOptionsSlice.reducer;
