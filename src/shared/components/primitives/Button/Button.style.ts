import { css } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

import type { ButtonProps } from './Button';

const getClasses = (
  // shared props(from component)
  props: {
    isPrimary: ButtonProps['isPrimary'];
    size: ButtonProps['size'];
    backgroundColor: ButtonProps['backgroundColor'];
  },
  theme: Theme
) => ({
  /*
   * here you can pass related to element's props in the scope, they should be optional for deconstruction usage and require not to use style logic in the component file, it's recommended to use smth like 'options' var for namespace
   * also you can just assign css`` instead of function for static style
   */
  root: () => {
    const isPrimary = props.isPrimary
      ? css`
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrastText};
        `
      : css`
          background-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrastText};
        `;
    const backgroundColor =
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `;

    let size;

    switch (props.size) {
      case 'small': {
        size = css`
          padding: ${theme.spacing(0.5, 1)};
          font-size: ${theme.typography.pxToRem(12)};
        `;

        break;
      }
      case 'medium': {
        size = css`
          padding: ${theme.spacing(1, 2)};
          font-size: ${theme.typography.pxToRem(14)};
        `;

        break;
      }
      case 'large': {
        size = css`
          padding: ${theme.spacing(1.5, 3)};
          font-size: ${theme.typography.pxToRem(16)};
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
      font-weight: ${theme.typography.button.fontWeight};
      font-family: ${theme.typography.button.fontFamily};
      line-height: ${theme.typography.button.lineHeight};

      ${isPrimary}
      ${size}
      ${backgroundColor}
    `;

    // you should return variable instead of instant returning cause of css class naming tied to variable's name
    return button;
  },
});

export { getClasses };
