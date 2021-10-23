import React from 'react';
import {
  CssBaseline,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { theme } from '../theme';
import './GlobalCSS.css';

interface GlobalCSSProps {}

const GlobalCSS: React.FC<GlobalCSSProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const themeWithSystemMode = React.useMemo(
    () =>
      createTheme(theme, {
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeWithSystemMode}>#{children}</ThemeProvider>
    </>
  );
};

export { GlobalCSS };
