import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isApproval: { status: false },
  isTempPassword: { status: false },
  isSuspended: {
    status: false,
    duration: '',
    endDate: '',
    reason: '',
  },
  rejected: {
    status: false,
    reason: '',
  },
};

const modalState = createSlice({
  name: 'modalState',
  initialState: initialState,
  reducers: {
    handleModal(state, action) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export default modalState.reducer;
export const { handleModal } = modalState.actions;
