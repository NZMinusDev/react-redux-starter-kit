import { css } from '@emotion/react';

const classes = {
  root: css`
    display: flex;
    flex-direction: column;
  `,
  row: css`
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  `,
  button: (options: { isAsync?: boolean } = { isAsync: false }) => {
    const isAsync =
      options.isAsync &&
      css`
        position: relative;

        &:after {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          background-color: rgb(112 76 182 / 0.15);
          content: '';
          opacity: 0;

          @media screen and (prefers-reduced-motion: no-preference) {
            transition: transform 1s linear, opacity 0.5s ease 1s;
          }
        }

        &:active {
          &:after {
            opacity: 1;
            transform: scaleX(0);

            @media screen and (prefers-reduced-motion: no-preference) {
              transition: transform 0s, opacity 0s;
            }
          }
        }
      `;

    const button = css`
      margin-right: 8px;
      margin-left: 4px;
      padding-right: 12px;
      padding-bottom: 4px;
      padding-left: 12px;
      outline: none;
      border: 2px solid transparent;
      border-radius: 2px;
      background: none;
      background-color: rgb(112 76 182 / 0.1);
      color: rgb(112 76 182);
      font-size: 32px;
      transition: border-color 0.15s, background-color 0.15s;
      appearance: none;

      &:hover,
      &:focus {
        border-color: rgb(112 76 182 / 0.4);
      }
      &:active {
        background-color: rgb(112 76 182 / 0.2);
      }

      ${isAsync}
    `;

    return button;
  },
  value: css`
    margin-top: 2px;
    padding-right: 16px;
    padding-left: 16px;
    font-size: 78px;
    font-family: 'Courier New', Courier, monospace;
  `,
  textBox: css`
    margin-right: 4px;
    padding: 2px;
    width: 64px;
    text-align: center;
    font-size: 32px;
  `,
};

export { classes };
