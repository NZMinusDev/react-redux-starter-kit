const { getAliases, getResolvedAliases } = require('../aliases/aliases');

module.exports = {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      ...getResolvedAliases(getAliases()),
    };

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
          // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
        // other plugins here...
      },
    });

    return config;
  },
};
