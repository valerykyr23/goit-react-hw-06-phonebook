import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
import { FilterSlice } from './FilterSlice';
import { ContactsSlice } from "./ContactsSlice";

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactReducer = persistReducer(persistConfig, ContactsSlice.reducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: FilterSlice.reducer,
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


 export const persistor = persistStore(store);

 