import { useMediaQuery } from '@mui/material';

import { lightTheme } from './modes/lightTheme';
import { darkTheme } from './modes/darkTheme';

const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return prefersDarkMode ? darkTheme : lightTheme;
};

export { useTheme };
