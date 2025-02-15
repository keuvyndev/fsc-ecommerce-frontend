// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger'

// @ts-expect-error(no support for redux-persist)
import storage from 'redux-persist/lib/storage';
// @ts-expect-error(no support for redux-persist)
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-expect-error(no support for redux-persist)
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './root-reducer';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistRootReducer,
//   applyMiddleware(logger, thunk)
// );

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(
      logger,
      thunk
    );
  },
})


export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;