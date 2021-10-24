import { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {}

const sharedThemeOptions: ThemeOptions = {
  spacing: (factor: number) => `${factor}em`,
};

export { sharedThemeOptions };
