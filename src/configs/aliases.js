const path = require(`path`);

/**
 * Returns aliases are used in project. Be sure you manually update values in tsconfig.json, .vscode/settings.json
 * @param {string} prefix - path to src folder
 * @returns
 */
const getAliases = (prefix = '..') => ({
  '@app': `${prefix}/app`,
  '@features': `${prefix}/features`,
  '@modules': `${prefix}/modules`,
  '@services': `${prefix}/services`,
  '@shared': `${prefix}/shared`,
  '@configs': `${prefix}/configs`,
});

const getResolvedAliases = (aliases) =>
  Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
  );

module.exports = { getAliases, getResolvedAliases };
