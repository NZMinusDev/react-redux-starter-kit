import { css } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

const getClasses = (props: {}, theme: Theme) => ({
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(4, 5)};
    border-bottom: 1px solid ${theme.palette.divider};
  `,
  icon: css`
    display: inline-block;
    vertical-align: top;
  `,
  title: css`
    display: inline-block;
    margin: ${theme.spacing(2, 0, 2, 3)};
    vertical-align: top;
    font-weight: ${theme.typography.fontWeightBold};
  `,
  buttons: css`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: ${theme.spacing(3)};
  `,
});

export { getClasses };
