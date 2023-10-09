import React from "react";
import Router from "./router";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Router />
    </Provider>
    </ThemeProvider>
  );
}
