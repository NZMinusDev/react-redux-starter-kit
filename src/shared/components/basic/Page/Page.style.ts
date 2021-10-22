import { css } from '@emotion/react';

const classes = {
  section: css`
    margin: 0 auto;
    padding: 48px 20px;
    max-width: 600px;
    color: rgb(51 51 51);
    font-size: 14px;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 24px;
  `,
  title: css`
    display: inline-block;
    margin: 0 0 4px;
    vertical-align: top;
    font-weight: 900;
    font-size: 32px;
    line-height: 1;
  `,
  paragraph: css`
    margin: 1em 0;
  `,
  link: css`
    color: rgb(30 167 253);
    text-decoration: none;
  `,
  list: css`
    margin: 1em 0;
    padding-left: 30px;
  `,
  listItem: css`
    margin-bottom: 8px;
  `,
  tipWrapper: css`
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 13px;
    line-height: 20px;
  `,
  tip: css`
    display: inline-block;
    margin-right: 10px;
    padding: 4px 12px;
    border-radius: 1em;
    background: rgb(231 253 216);
    color: rgb(102 191 60);
    vertical-align: top;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
  `,
  icon: css`
    display: inline-block;
    margin-top: 3px;
    margin-right: 4px;
    width: 12px;
    height: 12px;
    vertical-align: top;
  `,
  iconPath: css`
    fill: rgb(30 167 253);
  `,
};

export { classes };
