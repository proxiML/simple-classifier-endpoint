import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, Box } from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
