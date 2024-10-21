import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comentWrapperLocation: {
    top: 0,
    bottom: 0,
  },
};

//리듀서에서 return 하는 값은 해당 리듀서의 새로운 상태
const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setCommentWrapperLocation(state, action) {
      const { top, bottom } = action.payload;

      state.comentWrapperLocation.top =
        top === undefined || top === null
          ? state.comentWrapperLocation.top
          : top;
      state.comentWrapperLocation.bottom =
        bottom === undefined || bottom === null
          ? state.comentWrapperLocation.bottom
          : bottom;
    },
  },
});

export const { setCommentWrapperLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
