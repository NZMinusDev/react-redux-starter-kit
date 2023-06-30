import React from 'react';
import { useTheme } from '@mui/material';

import { LanguageSelector } from '@services/i18n';
import { ThemeSelector } from '@services/theme';
import { Typography } from '@shared/components/primitives';
import { Counter } from '@features/counter/Counter';
import { ErrorBoundary, Suspense } from '@shared/components/utils';

import logo from './logo.svg';
import { getClasses } from './App.style';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const theme = useTheme();
  const classes = getClasses({}, theme);

  return (
    // TODO: вынести в index()
    <ErrorBoundary>
      <Suspense>
        <div css={classes.root}>
          <main css={classes.main}>
            <Typography variant="h1" css={classes.heading}>
              Demo
            </Typography>
            <LanguageSelector />
            <ThemeSelector />
            <img src={logo} css={classes.logo} alt="logo" />
            <Counter />
            <p css={classes.text}>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <span css={classes.text}>
              <span>Learn </span>
              <a
                css={classes.link}
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                css={classes.link}
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                css={classes.link}
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                css={classes.link}
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export type { AppProps };

export { App };
