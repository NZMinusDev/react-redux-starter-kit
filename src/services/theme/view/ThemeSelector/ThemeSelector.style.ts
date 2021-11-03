import { css } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

const getClasses = (props: {}, theme: Theme) => ({
  root: css`
    display: flex;
    flex-direction: column;
  `,
  label: css`
    color: ${theme.palette.text.primary};
  `,
});

export { getClasses };
