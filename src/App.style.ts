import { css, keyframes } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const getClasses = (props: {}, theme: Theme) => ({
  root: css`
    background-color: ${theme.palette.background.default};
    text-align: center;
  `,
  main: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: ${theme.typography.body1.fontSize};
  `,
  heading: css`
    color: ${theme.palette.text.primary};
  `,
  logo: css`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${float} infinite 3s ease-in-out;
    }
  `,
  text: css`
    color: ${theme.palette.text.primary};
  `,
  link: css`
    color: ${theme.palette.primary.main};
  `,
});

export { getClasses };
