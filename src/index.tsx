import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// TODO: добавить для storybook глобальные стили
import { GlobalCSS } from '@shared/styles/GlobalCSS/GlobalCSS';
import { ThemeProvider } from '@services/theme';
import { initI18N } from '@services/i18n';

import './axe';
import { store } from './app/store';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

initI18N();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalCSS>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GlobalCSS>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
