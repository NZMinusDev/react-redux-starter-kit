module.exports = {
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
};
