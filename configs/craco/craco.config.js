const StyleLintPlugin = require('stylelint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');

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
        new FaviconsWebpackPlugin({
          // svg works too!
          logo: './src/assets/ico/logo.png',
          prefix: 'static/logo',
          cache: true,
          favicons: {
            start_url: '.',
            background: '#000',
            theme_color: '#fff',
          },

          // FIXME: wait https://github.com/itgalaxy/favicons/pull/289 and change it to 'true' + delete <link> and <meta> related to icons from '../../public/index.html'
          inject: false,
        }),

        // TODO: customize by template option and make chunk the first
        new ObsoleteWebpackPlugin(),
      ],
    },
  },
  jest: {
    configure: {
      snapshotSerializers: ['@emotion/jest/serializer'],
    },
  },
};
