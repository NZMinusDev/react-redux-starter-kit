import { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {}

const sharedThemeOptions: ThemeOptions = {
  spacing: (
    top?: number | string,
    right?: number | string,
    bottom?: number | string,
    left?: number | string
  ) =>
    [top, right, bottom, left]
      .map((factor) =>
        typeof factor === 'number' ? `${0.25 * factor}rem` : factor
      )
      .join(' '),
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};

export { sharedThemeOptions };
