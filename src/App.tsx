import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import GlobalStyles from './config/GlobalStyles';
import defaultTheme from './config/theme/defaultTheme';
import AppRoutes from './routes/AppRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
