module.exports = {
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

    // prevent use of extended native objects
    'plugin:no-use-extend-native/recommended',

    /**
     * Enables (eslint-plugin-prettier), which run Prettier analysis as part of ESLint.
     * Disable any linting rule that might interfere with an existing Prettier rule using(eslint-config-prettier).
     * Should be last for override other configs.
     */
    'plugin:prettier/recommended',
  ],
  plugins: ['sonarjs', 'no-loops', 'promise', 'fsd'],
  rules: {
    // FIXME: if you know how to make it works with chaining calls of several methods use['error', { allowAfterThis: true }]
    'no-underscore-dangle': 'off',

    'lines-between-class-members': 'off',

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
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: false }],

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
      { blankLine: 'any', prev: ['case'], next: 'case' },
    ],

    // Disallow use of loops (for, for-in, while, do-while, for-of) - we have forEach, map etc.
    'no-loops/no-loops': 'error',

    /**
     * Enforce best practices for JavaScript promises.
     */
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: [
        // List of recommended rules by https://github.com/iamturns/eslint-config-airbnb-typescript
        'airbnb-typescript',
      ],

      // https://github.com/iamturns/eslint-config-airbnb-typescript
      parserOptions: {
        project: './tsconfig.json',
      },

      rules: {
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
