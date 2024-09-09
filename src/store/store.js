import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '@/store/signUpSlice';
import findIdPasswordSlice from '@/store/findIdPasswordSlice';

const store = configureStore({
  reducer: {
    signUpSlice: signUpSlice,
    findIdPasswordSlice: findIdPasswordSlice,
  },
});

export default store;
