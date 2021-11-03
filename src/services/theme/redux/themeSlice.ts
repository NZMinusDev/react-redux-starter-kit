import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Mode } from '@shared/styles/theme';
import type { RootState } from '@app/store';

interface ThemeState {
  currentMode: Mode | 'system';
}

const initialState: ThemeState = {
  currentMode: 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<ThemeState>) => action.payload,
  },
});

const themeReducer = themeSlice.reducer;
const { select } = themeSlice.actions;

const selectCurrentMode = (state: RootState) =>
  state.services.theme.currentMode;

export type { ThemeState };

export { themeReducer, select, selectCurrentMode };
