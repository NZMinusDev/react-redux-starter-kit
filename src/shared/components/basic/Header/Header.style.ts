import { css } from '@emotion/react';

const classes = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid rgb(0 0 0 / 0.1);
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  `,
  icon: css`
    display: inline-block;
    vertical-align: top;
  `,
  title: css`
    display: inline-block;
    margin: 6px 0 6px 10px;
    vertical-align: top;
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
  `,
  buttons: css`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 10px;
  `,
};

export { classes };
