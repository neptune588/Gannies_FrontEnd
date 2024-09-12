import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import num from './num-slice';
import navBarOptionsReducer from '@/store/navBarOptions';

const navBarOptionsPersistConfig = {
  key: 'navBarOptions', // 저장소에서 상태를 식별할 키
  storage,
};

const persistedNavBarOptionsReducer = persistReducer(
  navBarOptionsPersistConfig,
  navBarOptionsReducer
);

const store = configureStore({
  reducer: {
    num: num,
    navBarOptions: persistedNavBarOptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 직렬화 체크 비활성화
    }),
});

const persistor = persistStore(store);

export { persistor, store };
