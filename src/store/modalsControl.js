import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHospitalSearchModal: false,
  isUserBanModal: false,
  isDeleteModal: false,
};

//리듀서에서 return 하는 값은 해당 리듀서의 새로운 상태
const modalsControlSlice = createSlice({
  name: 'modalsControl',
  initialState,
  reducers: {
    setIsHospitalModal(state, action) {
      state.isHospitalSearchModal = action.payload;
    },
    setIsUserBanModal(state, action) {
      state.isUserBanModal = action.payload;
    },
    setIsDeleteModal(state, action) {
      state.isDeleteModal = action.payload;
    },
  },
});

export const { setIsHospitalModal, setIsUserBanModal, setIsDeleteModal } =
  modalsControlSlice.actions;
export default modalsControlSlice.reducer;
