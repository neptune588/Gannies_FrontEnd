import { configureStore } from '@reduxjs/toolkit';
import num from './num-slice';
import navBarOptionsReducer from '@/store/navBarOptions';

const store = configureStore({
  reducer: {
    num: num,
    navBarOptions: navBarOptionsReducer,
  },
});

export default store;
