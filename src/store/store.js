import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import localStorage from 'redux-persist/lib/storage';

import authReducer from '@/store/auth';
import navBarOptionsReducer from '@/store/navBarOptions';

const navBarOptionsPersistConfig = {
  key: 'navBarOptions', // 저장소에서 상태를 식별할 키
  storage: sessionStorage,
};

const authPersistConfig = {
  key: 'auth', // 저장소에서 상태를 식별할 키
  storage: localStorage,
};

const persistedNavBarOptionsReducer = persistReducer(
  navBarOptionsPersistConfig,
  navBarOptionsReducer
);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    navBarOptions: persistedNavBarOptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 직렬화 체크 비활성화
    }),
});

const persistor = persistStore(store);

export { persistor, store };
