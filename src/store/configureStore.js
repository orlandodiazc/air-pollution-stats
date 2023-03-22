import { configureStore } from '@reduxjs/toolkit';
import { pollutionApi } from './api/pollutionApi';

const store = configureStore({
  reducer: {
    [pollutionApi.reducerPath]: pollutionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pollutionApi.middleware),
});

export default store;
