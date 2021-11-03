import { alpha } from '@mui/material';
import { css } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

const getClasses = (props: {}, theme: Theme) => ({
  root: css`
    display: flex;
    flex-direction: column;
  `,
  row: css`
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacing(4)};
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
          background-color: ${alpha(theme.palette.primary.main, 0.15)};
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
      margin-right: ${theme.spacing(2)};
      margin-left: ${theme.spacing(1)};
      padding: ${theme.spacing(0, 3, 1, 3)};
      outline: none;
      border: 2px solid transparent;
      border-radius: ${theme.shape.borderRadius}px;
      background: none;
      background-color: ${alpha(theme.palette.primary.main, 0.1)};
      color: ${theme.palette.primary.main};
      font-size: ${theme.typography.pxToRem(theme.typography.htmlFontSize * 2)};
      cursor: pointer;
      transition: border-color ${theme.transitions.duration.shortest}ms,
        background-color ${theme.transitions.duration.shortest}ms;
      appearance: none;

      &:hover,
      &:focus {
        border-color: ${alpha(
          theme.palette.primary.main,
          theme.palette.action.focusOpacity
        )};
      }
      &:active {
        background-color: ${alpha(
          theme.palette.primary.main,
          theme.palette.action.activatedOpacity
        )};
      }

      ${isAsync}
    `;

    return button;
  },
  value: css`
    padding-right: ${theme.spacing(4)};
    padding-left: ${theme.spacing(4)};
    color: ${theme.palette.text.primary};
    font-size: ${theme.typography.pxToRem(theme.typography.htmlFontSize * 5)};
    font-family: ${theme.typography.body1.fontFamily};
  `,
  textBox: css`
    margin-right: ${theme.spacing(2)};
    padding: ${theme.spacing(1)};
    width: ${theme.spacing(16)};
    text-align: center;
    font-size: ${theme.typography.pxToRem(theme.typography.htmlFontSize * 2)};
  `,
});

export { getClasses };
