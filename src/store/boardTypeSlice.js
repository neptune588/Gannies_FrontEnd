import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBoardType: '',
  bannerTitle: '',
  bannerDesc: '',
};

const boardTypeSlice = createSlice({
  name: 'boardType',
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

export const { setBoardType } = boardTypeSlice.actions;
export default boardTypeSlice.reducer;
