const { getAliases, getResolvedAliases } = require(`../aliases/aliases`);
const fsdStarterKitRules = require('./fsdStarterKitRules');
const missedAirBnBRules = require('./missedAirBnBRules');

const resolvedAliases = getResolvedAliases(getAliases());
const normalizedAliases = Object.entries(resolvedAliases);

const config = {
  extends: [
    // rules from create-react-app
    'react-app',
    'react-app/jest',

    // List of recommended rules by https://github.com/iamturns/eslint-config-airbnb-typescript
    'airbnb',

    // some rules from https://github.com/fullstack-development/front-end-best-practices/tree/master/JS
    'plugin:fsd/all',

    // detect bugs and suspicious patterns in your code (huge unreadable blocks of code)
    'plugin:sonarjs/recommended',

    /**
     * Enforce best practices for JavaScript promises.
     */
    'plugin:promise/recommended',

    // prevent use of extended native objects
    'plugin:no-use-extend-native/recommended',
  ],
  plugins: ['sonarjs', 'promise', 'fsd', '@emotion'],
  rules: {
    // FIXME: if you know how to make it works with chaining calls of several methods use['error', { allowAfterThis: true }]
    'no-underscore-dangle': 'off',

    ...fsdStarterKitRules,

    ...missedAirBnBRules,

    'promise/no-callback-in-promise': 'off',

    '@emotion/pkg-renaming': 'error',
    '@emotion/syntax-preference': [2, 'string'],
  },

  settings: {
    'import/resolver': {
      alias: {
        map: normalizedAliases,
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      // https://github.com/iamturns/eslint-config-airbnb-typescript
      parserOptions: {
        project: './tsconfig.json',
      },

      extends: [
        // List of recommended rules by https://github.com/iamturns/eslint-config-airbnb-typescript
        'airbnb-typescript',
      ],

      rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowPrivateClassPropertyAccess: true,
            allowProtectedClassPropertyAccess: true,
          },
        ],
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['**/*.style.js', '**/*.style.ts'],
      rules: {
        // https://emotion.sh/docs/@emotion/babel-plugin#labelformat, see /configs/craco/craco.config.js
        'sonarjs/prefer-immediate-return': 'off',

        'sonarjs/no-identical-functions': 'off',
      },
    },
    {
      files: ['**/*Slice.ts?(x)'],
      rules: {
        // https://redux-toolkit.js.org/usage/immer-reducers
        'no-param-reassign': [
          'error',
          { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
      },
    },
    {
      files: ['**/*.test.*', '**/setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/axe.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};

/**
 * Enables (eslint-plugin-prettier), which run Prettier analysis as part of ESLint.
 * Disable any linting rule that might interfere with an existing Prettier rule using(eslint-config-prettier).
 * Should be last for override other configs.
 */
const prettierExtending = 'plugin:prettier/recommended';
config.extends.push(prettierExtending);
config.overrides[0].extends.push(prettierExtending);

module.exports = config;
