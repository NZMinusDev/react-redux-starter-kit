import { useMediaQuery } from '@mui/material';

import { lightTheme, darkTheme } from '../modes';

const useSystemTheme = ({ noSsr = true } = {}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr,
  });

  return prefersDarkMode ? darkTheme : lightTheme;
};

export { useSystemTheme };
