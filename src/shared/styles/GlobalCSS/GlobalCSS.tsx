import React from 'react';
import { CssBaseline } from '@mui/material';

import './GlobalCSS.css';

interface GlobalCSSProps {}

const GlobalCSS: React.FC<GlobalCSSProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

export { GlobalCSS };
