// used by husky: ../../.husky/pre-commit
module.exports = {
  '*': ['prettier --ignore-unknown --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'craco test --watchAll=false --bail --findRelatedTests'],
};
