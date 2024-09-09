import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '@/store/signUpSlice';

const store = configureStore({
  reducer: {
    signUpSlice: signUpSlice,
  },
});

export default store;
