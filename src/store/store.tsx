import { createStore } from 'redux';

import rootReducer from './root-reducer'

// @ts-expect-error(no support for redux-persist)
import storage from 'redux-persist/lib/storage'
// @ts-expect-error(no support for redux-persist)
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-expect-error(no support for redux-persist)
import persistStore from 'redux-persist/es/persistStore'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cartReducer']
   //blacklist= ['userReducer']
}

const persistRootReducer: typeof rootReducer = persistReducer (persistConfig, rootReducer)

export const store = createStore(
   persistRootReducer
)

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
