import { createSlice } from '@reduxjs/toolkit';

const modalState = createSlice({
  name: 'modalState',
  initialState: {
    isApproval: false,
    isTempPassword: false,
  },
  reducers: {
    handleModal(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default modalState.reducer;
export const { handleModal } = modalState.actions;
