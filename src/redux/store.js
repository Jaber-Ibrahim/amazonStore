import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartSlice from './features/cartSlice'
import userSlice from './features/userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice)
const persistedUserReducer = persistReducer(persistConfig, userSlice)

export const store = configureStore({
  reducer: {
    cart : persistedCartReducer ,
    user : persistedUserReducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
