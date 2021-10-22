const { extensions: styles } = require('../stylelintrc/validated-extensions');

// !(folder1|folder2)
const excluded = '**/!(build)/';

// used by husky: ../../.husky/pre-commit
module.exports = {
  [`${excluded}*`]: ['prettier --ignore-unknown --write'],

  [`${excluded}*.{${styles}}`]: ['stylelint --fix'],

  [`${excluded}*.{js,jsx,ts,tsx}`]: [
    'eslint --fix',
    'craco test --watchAll=false --bail --findRelatedTests',
  ],
};
