import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { useTheme } from '../theme/useTheme';
import './GlobalCSS.css';

interface GlobalCSSProps {}

const GlobalCSS: React.FC<GlobalCSSProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export { GlobalCSS };
