import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import auth from '@/store/auth';
import navBarOptionsReducer from '@/store/navBarOptions';
import communityDataReducer from '@/store/communityData';
import modalState from '@/store/modalState';

const navBarOptionsPersistConfig = {
  key: 'navBarOptions', // 저장소에서 상태를 식별할 키
  storage,
};

const modalStatePersistConfig = {
  key: 'modalState',
  storage,
};

const persistedNavBarOptionsReducer = persistReducer(
  navBarOptionsPersistConfig,
  navBarOptionsReducer
);

const persistedModalStateReducer = persistReducer(
  modalStatePersistConfig,
  modalState
);

const store = configureStore({
  reducer: {
    auth: auth,
    navBarOptions: persistedNavBarOptionsReducer,
    communityData: communityDataReducer,
    modalState: persistedModalStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 직렬화 체크 비활성화
    }),
});

const persistor = persistStore(store);

export { persistor, store };
