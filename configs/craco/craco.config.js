const { getAliases, getResolvedAliases } = require('../aliases/aliases');

module.exports = {
  webpack: {
    alias: getResolvedAliases(getAliases('../../src/')),
  },
};
