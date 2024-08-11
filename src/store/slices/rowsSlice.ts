import { RowDataT } from '@/components';
import { apiRowsSlice } from '@/services';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createRowByParentID,
  findRowById,
  removeRowById,
} from './rowsSlice.service';
import { NewRowT } from './rowsSlice.types';

const initialState: RowDataT[] = [];

export const rowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    createStoredRow: (
      state,
      action: PayloadAction<{
        parentID: number | null;
        newRow: NewRowT;
      }>
    ) => {
      const { parentID, newRow } = action.payload;
      const newState = createRowByParentID(state, newRow, parentID);
      state.length = 0;
      state.push(...newState);
    },

    removeStoredRow: (state, action: PayloadAction<{ rowID: number }>) => {
      const newState = removeRowById(state, action.payload.rowID);
      state.length = 0;
      state.push(...newState);
    },
    
    updateStoredRow: (
      state,
      action: PayloadAction<{ rowID: number; updatedRow: NewRowT }>
    ) => {
      const { rowID, updatedRow } = action.payload;
      const rowToUpdate = findRowById(state, rowID);
      if (rowToUpdate) {
        Object.assign(rowToUpdate, updatedRow);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiRowsSlice.endpoints.getRows.matchFulfilled,
      (_state, action) => {
        return action.payload;
      }
    );
  },
});

export const { removeStoredRow, createStoredRow, updateStoredRow } =
  rowsSlice.actions;
export const rowsReducer = rowsSlice.reducer;
