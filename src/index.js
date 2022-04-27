import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { blueGrey, deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: deepOrange,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
