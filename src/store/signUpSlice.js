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
  },
  reducers: {
    handleSignUpData(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export default signUpSlice.reducer;
export const { handleSignUpData } = signUpSlice.actions;
