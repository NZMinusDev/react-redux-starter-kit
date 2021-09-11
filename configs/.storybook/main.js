const { getAliases, getResolvedAliases } = require('../aliases/aliases');

module.exports = {
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = { ...config.resolve?.alias, ...getResolvedAliases(getAliases()) };

    return config;
  },
};
