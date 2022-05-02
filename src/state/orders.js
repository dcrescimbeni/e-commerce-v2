import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrder = createAsyncThunk('GET_ORDERS', () => {
  let userToken = localStorage.getItem('token');
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/orders?token=${userToken}`)
    .then((res) => res.data);
});

export const saveOrder = createAsyncThunk('SAVE_ORDERS', (order) => {
  let userToken = localStorage.getItem('token');
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/api/orders/thanks/${order.id}?token=${userToken}`,
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
