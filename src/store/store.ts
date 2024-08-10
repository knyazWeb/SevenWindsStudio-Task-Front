import { apiRowsSlice } from '@/services';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    [apiRowsSlice.reducerPath]: apiRowsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRowsSlice.middleware),
});
