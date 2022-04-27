import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrder = createAsyncThunk('GET_ORDERS', () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/orders`)
    .then((res) => res.data);
});

export const saveOrder = createAsyncThunk('SAVE_ORDERS', (order) => {
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/api/orders/thanks/${order.id}`,
      order
    )
    .then((res) => res.data);
});

export const ordersReducer = createReducer(
  {},
  {
    [getOrder.fulfilled]: (state, action) => action.payload,
    [saveOrder.fulfilled]: (state, action) => action.payload,
  }
);
