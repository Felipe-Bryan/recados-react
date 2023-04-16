import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#1c5f90',
      contrastText: '#1dc623'
    },
    secondary: {
      main: '#2a3759'
    },
    success: {
      main: '#1cb732'
    },
    error: {
      main: '#e00000'
    }
  }
});

export default defaultTheme;
