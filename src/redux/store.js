import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
// import { contactSlice } from './contactSlice';
import { contactReduser } from "./contactSlice";
import { filterReduser } from "./filterSlice";
// import persistReducer from "redux-persist/es/persistReducer";



const persistConfig = {
  key: 'contacts',
  storage,
};


const persistedReducer = persistReducer(
  persistConfig,
  contactReduser
);



export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReduser,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
      ],
    },
  }),
});

export let persistor = persistStore(store);