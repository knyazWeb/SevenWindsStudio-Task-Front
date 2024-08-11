import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateRowRequestT,
  CreateRowResponseT,
  EntityResponseT,
  ListResponseT,
  UpdateRowRequestT,
} from './apiRowsSlice.types';

export const apiRowsSlice = createApi({
  reducerPath: 'rowsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/v1/outlay-rows/entity/${process.env.REACT_APP_EID}/row`,
  }),
  endpoints: (builder) => ({
    
    // Unused endpoint
    createEntity: builder.mutation<EntityResponseT, void>({
      query: () => ({
        url: `${process.env.REACT_APP_SERVER_URL}/v1/outlay-rows/entity/create`,
        method: 'POST',
      }),
    }),
    
    getRows: builder.query<ListResponseT[], void>({
      query: () => ({
        url: '/list',
        method: 'GET',
      }),
    }),
    
    createRow: builder.mutation<CreateRowResponseT, CreateRowRequestT>({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
    }),
    
    updateRow: builder.mutation<
      CreateRowResponseT,
      { body: UpdateRowRequestT; rowID: number }
    >({
      query: ({ body, rowID }) => ({
        url: `/${rowID}/update`,
        method: 'POST',
        body,
      }),
    }),
    
    removeRow: builder.mutation<void, { rowID: number }>({
      query: ({ rowID }) => ({
        url: `/${rowID}/delete`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateEntityMutation,
  useGetRowsQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useRemoveRowMutation,
} = apiRowsSlice;
