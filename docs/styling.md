# Styling

- [project supports](#project-supports);
- [what you should use](#what-you-should-use);
- [example](#example);
- [additional tools](#additional-tools).

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
    - [material icons](https://mui.com/components/icons/#material-icons);
    - [fontawesome](https://github.com/FortAwesome/react-fontawesome) with _@fortawesome/free-solid-svg-icons_, _@fortawesome/free-regular-svg-icons_ and _@fortawesome/free-brands-svg-icons_;
    - [MDI](https://github.com/TeamWertarbyte/mdi-material-ui).

## What you should use

- [emotion/react](https://emotion.sh/docs/@emotion/react) as main tool(use `'@emotion/react'` path instead of `'@mui/material'` cause of `@emotion/babel-preset-css-prop`), see more: [emotion css prop](https://emotion.sh/docs/css-prop), [composition](https://emotion.sh/docs/composition), [nesting](https://emotion.sh/docs/nested), [media](https://emotion.sh/docs/media-queries), [theming](https://emotion.sh/docs/theming), [testing](https://emotion.sh/docs/@emotion/jest). Also it's not recommended to use [object styles](https://emotion.sh/docs/object-styles) and [styled components](https://emotion.sh/docs/styled) cause of lame linting and hard looking;
- [material UI](https://mui.com/ru/guides/interoperability/#emotion) as main framework, see more: [material environment](https://material.io/design/environment/surfaces.html#properties) works;
- [storybook](https://storybook.js.org/) for ui kit creation.

The kill future of CSS-in-JS: react component `props` may be used directly and dynamically - no need create +100500 [modifiers](https://en.bem.info/methodology/block-modification/) for each unique value.

## Example

### Basic example

File `Button.style.ts`

```ts
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
```

File `Button.tsx`

```tsx
import { useTheme } from '@mui/material';
import React from 'react';

import { getClasses } from './Button.style';

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
  backgroundColor?: React.CSSProperties['backgroundColor'];

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary = false,
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  const theme = useTheme();
  const classes = getClasses({ isPrimary, size, backgroundColor }, theme);

  return (
    <button type="button" css={classes.root()} {...props}>
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

### Theme

// TODO: вынести темы в сервис чтобы их можно было настраивать оттуда (использовать createTheme(sharedTheme) )
Customize [theme files](../src/shared/styles/theme) and use `useTheme()` from `@mui/material` hook for accessing the theme in a component(or `withTheme` HOC if you sure about class components), for more information read [doc](https://mui.com/customization/theming/).

## Additional tools

[Design creation](https://mui.com/customization/theming/#theme-builder);
[Templates](https://mui.com/getting-started/templates/).
