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
  extendSession: { status: false },
};

const modalState = createSlice({
  name: 'modalState',
  initialState: initialState,
  reducers: {
    handleModal(state, action) {
      state[action.payload.field] = action.payload.value;
    },
    initialModalState() {
      return initialState;
    },
  },
});

export default modalState.reducer;
export const { handleModal, initialModalState } = modalState.actions;
