import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { throttle } from 'lodash-es';

import { counterReducer } from '@features/counter/counterSlice';
// TODO: from index
import { themeReducer } from '@services/theme/redux/themeSlice';

import { loadState, saveState } from './localStorage';

const preloadedState = loadState();
const store = configureStore({
  reducer: {
    services: combineReducers({ theme: themeReducer }),
    features: combineReducers({ counter: counterReducer }),
    // modules: combineReducers({}),
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type { AppDispatch, RootState, AppThunk };

export { store };
