import { css } from '@emotion/react';

const classes = {
  root: css`
    text-align: center;
  `,
  header: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
  `,
  logo: css`
    height: 40vmin;
    pointer-events: none;

    @keyframes logo-float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: logo-float infinite 3s ease-in-out;
    }
  `,
  link: css`
    color: rgb(112 76 182);
  `,
};

export { classes };
