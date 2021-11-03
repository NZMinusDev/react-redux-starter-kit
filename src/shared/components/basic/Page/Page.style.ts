import { css } from '@emotion/react';

import { Theme } from '@shared/styles/theme';

const getClasses = (props: {}, theme: Theme) => ({
  section: css`
    margin: 0 auto;
    padding: ${theme.spacing(12, 5)};
    max-width: ${theme.spacing(150)};
    color: ${theme.palette.grey['700']};
  `,
  title: css`
    display: inline-block;
    margin: ${theme.spacing(0, 0, 4)};
    vertical-align: top;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.h2.fontSize};
    line-height: ${theme.typography.h2.lineHeight};
  `,
  paragraph: css`
    margin: ${theme.spacing(2, 0)};
  `,
  link: css`
    color: ${theme.palette.primary.main};
    text-decoration: none;
  `,
  list: css`
    margin: ${theme.spacing(2, 0)};
    padding-left: ${theme.spacing(8)};
  `,
  listItem: css`
    margin-bottom: ${theme.spacing(2)};
  `,
  tipWrapper: css`
    margin-top: ${theme.spacing(10, 0)};
    font-size: ${theme.typography.body2.fontSize};
    line-height: ${theme.typography.body2.lineHeight};
  `,
  tip: css`
    display: inline-block;
    margin-right: ${theme.spacing(3, 0)};
    padding: ${theme.spacing(1, 3)};
    border-radius: 1em;
    background: ${theme.palette.background.default};
    color: ${theme.palette.secondary.main};
    vertical-align: top;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.caption.fontSize};
    line-height: ${theme.typography.caption.lineHeight};
  `,
  icon: css`
    display: inline-block;
    margin-top: ${theme.spacing(1)};
    margin-right: ${theme.spacing(1)};
    width: ${theme.spacing(3)};
    height: ${theme.spacing(3)};
    vertical-align: top;
  `,
  iconPath: css`
    fill: ${theme.palette.primary.main};
  `,
});

export { getClasses };
