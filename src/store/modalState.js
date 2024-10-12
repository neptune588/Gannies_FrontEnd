import { createSlice } from '@reduxjs/toolkit';

const modalState = createSlice({
  name: 'modalState',
  initialState: {
    isApproval: false,
    isSuspended: false,
    isTempPassword: false,
    rejected: false,
  },
  reducers: {
    handleModal(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default modalState.reducer;
export const { handleModal } = modalState.actions;
