const { getAliases, getResolvedAliases } = require(`./src/configs/aliases`);

module.exports = {
  webpack: {
    alias: getResolvedAliases(getAliases('./src/')),
  },
};
