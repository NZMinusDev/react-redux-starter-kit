const StyleLintPlugin = require('stylelint-webpack-plugin');

const { getAliases, getResolvedAliases } = require('../aliases/aliases');
const { extensions: styles } = require('../stylelintrc/validated-extensions');

module.exports = {
  babel: {
    presets: [
      [
        // we need label format cause of /docs/styling.md#child-electors
        '@emotion/babel-preset-css-prop',
        { autoLabel: 'always', labelFormat: '[filename]-[local]' },
      ],
    ],
  },
  webpack: {
    alias: getResolvedAliases(getAliases()),
    plugins: {
      add: [
        new StyleLintPlugin({
          extensions: styles,
        }),
      ],
    },
  },
  jest: {
    configure: {
      snapshotSerializers: ['@emotion/jest/serializer'],
    },
  },
};
