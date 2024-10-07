import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHospitalSearchModal: false,
  isUserBanModal: false,
  isPostDeleteModal: false,
  isPostOrCommentReportModal: false,
  scrollLocation: 0,
};

//리듀서에서 return 하는 값은 해당 리듀서의 새로운 상태
const modalsControlSlice = createSlice({
  name: 'modalsControl',
  initialState,
  reducers: {
    setIsHospitalModal(state, action) {
      //console.log(action);
      state.isHospitalSearchModal = action.payload;
    },
    setIsUserBanModal(state, action) {
      state.isUserBanModal = action.payload;
    },
    setIsPostDeleteModal(state, action) {
      state.isPostDeleteModal = action.payload;
    },
    setIsPostOrCommentReportModal(state, action) {
      state.isPostOrCommentReportModal = action.payload;
    },
    setSaveScrollLocation(state, action) {
      state.scrollLocation = action.payload;
    },
  },
});

export const {
  setIsHospitalModal,
  setIsUserBanModal,
  setIsPostDeleteModal,
  setIsPostOrCommentReportModal,
  setSaveScrollLocation,
} = modalsControlSlice.actions;
export default modalsControlSlice.reducer;
