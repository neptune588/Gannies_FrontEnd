import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState: {
    nickname: '',
    email: '',
    phoneNumber: '',
    password: '',
    status: '',
    certificationDocumentUrl: '',
    identityCompleted: false,
    infoCompleted: false,
  },
  reducers: {
    handleSignUpData(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetSignUpData(state) {
      state.nickname = '';
      state.email = '';
      state.phoneNumber = '';
      state.password = '';
      state.status = '';
      state.certificationDocumentUrl = '';
      state.identityCompleted = false;
      state.infoCompleted = false;
    },
  },
});

export default signUpSlice.reducer;
export const { handleSignUpData, resetSignUpData } = signUpSlice.actions;
