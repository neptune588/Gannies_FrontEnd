import { createSlice } from '@reduxjs/toolkit';

const modalState = createSlice({
  name: 'name',
  initialState: {
    isApproval: false,
    abc: false,
  },
  reducers: {
    handleModal(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default modalState.reducer;
export const { handleModal } = modalState.actions;
