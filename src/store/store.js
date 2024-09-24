import { configureStore } from '@reduxjs/toolkit';
import num from './num-slice';
// import signIn from '@/store/signIn';

const store = configureStore({
  reducer: {
    num: num,
    // signIn: signIn,
  },
});

export default store;
