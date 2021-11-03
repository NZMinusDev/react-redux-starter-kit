import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

import { counterReducer } from '@features/counter/counterSlice';
import { themeReducer } from '@services/theme/redux/themeSlice';

export const store = configureStore({
  reducer: {
    services: combineReducers({ theme: themeReducer }),
    features: combineReducers({ counter: counterReducer }),
    // modules: combineReducers({}),
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
