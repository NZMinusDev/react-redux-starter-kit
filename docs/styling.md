# Styling

- [project supports](#project-supports);
- [what you should use](#what-you-should-use);
- [example](#example);

## Project supports

- workflow to use styles:
  - [plain css importing](https://create-react-app.dev/docs/adding-a-stylesheet), but be sure about [CSS injection order when use material UI](https://next.material-ui.com/guides/interoperability/#css-injection-order);
  - [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet), but be sure about [CSS injection order when use material UI](https://next.material-ui.com/guides/interoperability/#css-modules);
  - CSS-in-JS solution: [emotion styled-engine supplied with material UI](https://next.material-ui.com/guides/interoperability/#emotion). P.S.: project don't supports [`sx` props](https://next.material-ui.com/system/basics/#why-use-the-system).
- additional inclusions:
  - automatic:
    - [normalize.css](https://create-react-app.dev/docs/adding-css-reset);
    - [CSS Baseline](https://next.material-ui.com/components/css-baseline/).
  - manually usage:
    - [csstype](https://github.com/frenic/csstype#readme);
    - [material icons](https://mui.com/components/icons/#material-icons).

## What you should use

- [emotion/react](https://emotion.sh/docs/@emotion/react) as main tool, see more: [emotion css prop](https://emotion.sh/docs/css-prop), [composition](https://emotion.sh/docs/composition), [nesting](https://emotion.sh/docs/nested), [media](https://emotion.sh/docs/media-queries), [theming](https://emotion.sh/docs/theming), [testing](https://emotion.sh/docs/@emotion/jest). Also it's not recommended to use [object styles](https://emotion.sh/docs/object-styles) and [styled components](https://emotion.sh/docs/styled) cause of lame linting and hard looking;
- [material UI](https://mui.com/ru/guides/interoperability/#emotion) as main framework, see more: [material environment](https://material.io/design/environment/surfaces.html#properties) works;
- [storybook](https://storybook.js.org/) for ui kit creation.

The kill future of CSS-in-JS: react component `props` may be used directly and dynamically - no need create +100500 [modifiers](https://en.bem.info/methodology/block-modification/) for each unique value.

## Example

### Basic example

File `Button.style.ts`

```ts
import { css } from '@emotion/react';

const classes = {
  // dynamic css
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

      /* composition */
      ${isPrimary}
      ${size}
      ${backgroundColor}
    `;

    return button;
  },
};

export { classes };
```

File `Button.tsx`

```tsx
import React from 'react';
import type MDN from 'csstype';

import { classes } from './Button.style';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;

  /**
   * Is this the principal call to action on the page?
   */
  isPrimary?: boolean;

  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * What background color to use
   */
  backgroundColor?: MDN.Property.BackgroundColor;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary = false,
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  return (
    <button
      type="button"
      css={classes.root({ isPrimary, size, backgroundColor })}
      {...props}
    >
      {label}
    </button>
  );
};

export type { ButtonProps };

export { Button };
```

### Child Selectors

We can't use [.name](https://github.com/emotion-js/emotion/issues/1217) and we agreed not to use [object style](https://emotion.sh/docs/object-styles#child-selectors), also manually naming like [Material UI](https://next.material-ui.com/customization/how-to-customize/#overriding-nested-component-styles) or [BEM](https://github.com/albburtsev/bem-cn) do is redundant cause of we have [autoLabel](https://emotion.sh/docs/@emotion/babel-plugin#autolabel). So, if you need child selectors use trick such as [AMCSS](https://amcss.github.io/) solution with `[class*="FileName-style-ChildVarName"]{}`, for example:

File `Example.style.ts`

```ts
import { css } from '@emotion/react';

const classes = {
  // generated css would be: css-[hash]-Example-style-root
  root: css`
    color: yellow;

    & > [class*='Example-style-child'] {
      color: green;
    }
  `,
  // generated css would be: css-[hash]-Example-style-child
  child: css`
    color: red;
  `,
};
```
