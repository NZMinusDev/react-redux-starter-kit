import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';

import { useAppSelector } from '@app/hooks';
import { darkTheme, lightTheme, useSystemTheme } from '@shared/styles/theme';

import { selectCurrentMode } from '../../redux/themeSlice';

interface ThemeProviderProps {}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeOptions = {
    system: useSystemTheme(),
    light: lightTheme,
    dark: darkTheme,
  };

  const currentMode = useAppSelector(selectCurrentMode);
  const theme = themeOptions[currentMode];

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export { ThemeProvider };
