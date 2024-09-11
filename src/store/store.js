import { configureStore } from '@reduxjs/toolkit';
import num from './num-slice';
import boardTypeReducer from '@/store/boardTypeSlice';

const store = configureStore({
  reducer: {
    num: num,
    boardType: boardTypeReducer,
  },
});

export default store;
