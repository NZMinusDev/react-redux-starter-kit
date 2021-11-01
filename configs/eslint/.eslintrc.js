const { getAliases, getResolvedAliases } = require(`../aliases/aliases`);
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

    // https://github.com/fullstack-development/react-redux-starter-kit/blob/master/.eslintrc.js
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'getters',
          'setters',
          'lifecycle',
          'render',
          'instance-methods',
          'everything-else',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    // https://github.com/airbnb/javascript#destructuring--object
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],

    // https://github.com/airbnb/javascript#functions--declarations
    'func-style': ['error', 'expression'],

    // https://github.com/airbnb/javascript#functions--defaults-last
    'default-param-last': ['error'],

    // https://github.com/airbnb/javascript#arrows--use-them
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: false },
    ],

    // https://github.com/airbnb/javascript#arrows--implicit-return
    'arrow-body-style': ['error', 'as-needed'],

    /*
     * TODO: here should be rule like as 'method-void-implicit-error'
     * https://github.com/airbnb/javascript#constructors--chaining
     */

    // https://github.com/airbnb/javascript#comments--multiline
    'multiline-comment-style': ['error', 'starred-block'],

    // https://github.com/airbnb/javascript#comments--singleline
    'line-comment-position': ['error', { position: 'above' }],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    // https://github.com/airbnb/javascript#whitespace--chains
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // https://github.com/airbnb/javascript#whitespace--after-blocks
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block-like'], next: '*' },
      { blankLine: 'always', prev: ['const', 'let'], next: ['block-like'] },
      { blankLine: 'always', prev: '*', next: ['return', 'break', 'debugger'] },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: ['case'], next: ['case', 'default'] },
    ],

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
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['**/*.style.js', '**/*.style.ts'],
      rules: {
        // https://emotion.sh/docs/@emotion/babel-plugin#labelformat, see /configs/craco/craco.config.js
        'sonarjs/prefer-immediate-return': 'off',
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
