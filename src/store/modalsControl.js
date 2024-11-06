import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHospitalSearchModal: false,
  isUserBanModal: false,
  isPostDeleteModal: false,
  isPostOrCommentReportModal: false,
  isReportedCotentModal: false,
  isMemberManagementDetailModal: false,
  isUserWithdrawModal: false,
  isItemDeleteModal: false,
  isUserRejectReasonModal: false,
  isPostOrCommentDetailModal: false,
  scrollLocation: 0,
};

//리듀서에서 return 하는 값은 해당 리듀서의 새로운 상태
const modalsControlSlice = createSlice({
  name: 'modalsControl',
  initialState,
  reducers: {
    setModal(state, action) {
      const { modalName, modalState } = action.payload;
      //console.log(action);
      if (!Object.prototype.hasOwnProperty.call(state, modalName)) {
        throw new Error(
          'Redux Slice Error : 파라미터가 올바르게 전달되지 않았습니다.'
        );
      }

      state[modalName] = modalState;
    },
    setSaveScrollLocation(state, action) {
      state.scrollLocation = action.payload;
    },
  },
});

export const { setModal, setSaveScrollLocation } = modalsControlSlice.actions;
export default modalsControlSlice.reducer;
