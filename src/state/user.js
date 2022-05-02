import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendLoginRequest = createAsyncThunk('LOGIN', (form) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, form)
    .then((res) => {
      console.log('login response:');
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      return res.data;
    });
});
export const sendRegister = createAsyncThunk('REGISTER', (form) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, form)
    .then((res) => console.log('RES.DATA =>', res.data));
});

export const getSession = createAsyncThunk('GET_SESSION', () => {
  let userToken = localStorage.getItem('token');
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/users/me?token=${userToken}`)
    .then((res) => res.data);
});

export const sendLogoutRequest = createAsyncThunk('SEND_LOGOUT', () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/users/logout`)
    .then((res) => res.data);
});

export const userReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendRegister.fulfilled]: (state, action) => action.payload,
    [getSession.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);
