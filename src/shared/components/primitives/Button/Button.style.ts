import { css } from '@emotion/react';

import type { ButtonProps } from './Button';

const classes = {
  root: (
    options: {
      isPrimary?: ButtonProps['isPrimary'];
      size?: ButtonProps['size'];
      backgroundColor?: ButtonProps['backgroundColor'];
    } = {}
  ) => {
    const isPrimary = options.isPrimary
      ? css`
          background-color: rgb(30 167 253);
          color: white;
        `
      : css`
          background-color: transparent;
          box-shadow: rgb(0 0 0 / 0.15) 0 0 0 1px inset;
          color: rgb(51 51 51);
        `;
    const backgroundColor =
      options.backgroundColor &&
      css`
        background-color: ${options.backgroundColor};
      `;

    let size;

    switch (options.size) {
      case 'small': {
        size = css`
          padding: 10px 16px;
          font-size: 12px;
        `;

        break;
      }
      case 'medium': {
        size = css`
          padding: 11px 20px;
          font-size: 14px;
        `;

        break;
      }
      case 'large': {
        size = css`
          padding: 12px 24px;
          font-size: 16px;
        `;

        break;
      }
      default: {
        size = '';
      }
    }

    const button = css`
      display: inline-block;
      border: 0;
      border-radius: 3em;
      font-weight: 700;
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1;

      ${isPrimary}
      ${size}
      ${backgroundColor}
    `;

    return button;
  },
};

export { classes };
