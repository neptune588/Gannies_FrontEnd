import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import localStorage from 'redux-persist/lib/storage';

import authReducer from '@/store/auth';
import navBarOptionsReducer from '@/store/navBarOptions';
import modalState from '@/store/modalState';
const modalStatePersistConfig = {
  key: 'modalState',
  storage: localStorage,
};

const navBarOptionsPersistConfig = {
  key: 'navBarOptions',
  storage: sessionStorage,
};

const authPersistConfig = {
  key: 'auth',
  storage: localStorage,
};

const persistedNavBarOptionsReducer = persistReducer(
  navBarOptionsPersistConfig,
  navBarOptionsReducer
);

const persistedModalStateReducer = persistReducer(
  modalStatePersistConfig,
  modalState
);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    navBarOptions: persistedNavBarOptionsReducer,
    modalState: persistedModalStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor, store };
