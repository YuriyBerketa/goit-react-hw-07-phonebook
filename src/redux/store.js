import { configureStore } from '@reduxjs/toolkit';
import { phoneBooksApi } from './phoneBooksApi';
import { reducer } from './reduser';

export const store = configureStore({
  reducer,
  middleware: defaultMiddleware =>
    defaultMiddleware().concat(phoneBooksApi.middleware),
});
