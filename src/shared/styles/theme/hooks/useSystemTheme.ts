import { useMediaQuery } from '@mui/material';

import { lightTheme } from '../modes/lightTheme';
import { darkTheme } from '../modes/darkTheme';

const useSystemTheme = ({ noSsr = true } = {}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr,
  });

  return prefersDarkMode ? darkTheme : lightTheme;
};

export { useSystemTheme };
