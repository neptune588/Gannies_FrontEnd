import { configureStore } from '@reduxjs/toolkit';
import num from './num-slice';

const store = configureStore({
  reducer: {
    num: num,
  },
});

export default store;
