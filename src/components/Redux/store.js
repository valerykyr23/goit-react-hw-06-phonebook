import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from "@reduxjs/toolkit";
import { ContactsSlice } from "./ContactsSlice";
import { FilterSlice } from "./FilterSlice";

export const store = configureStore({
    reducer: {
        contacts: ContactsSlice.reducer,
        filter: FilterSlice.reducer
    }
});


 

 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, store.reducer)