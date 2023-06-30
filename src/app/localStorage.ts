import type { RootState } from './store';

const stateKey = 'appState';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(stateKey, serializedState);
  } catch {
    // ignore write errors
  }
};

export { loadState, saveState };
