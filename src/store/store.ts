import { apiRowsSlice } from '@/services';
import { configureStore } from '@reduxjs/toolkit';
import { rowsReducer } from './slices';
export const store = configureStore({
  reducer: {
    [apiRowsSlice.reducerPath]: apiRowsSlice.reducer,
    rows: rowsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRowsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
