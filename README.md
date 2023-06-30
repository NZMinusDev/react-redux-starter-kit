# React-redux-starter-kit

![icon](./src/assets/ico/logo.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [official Redux template](https://github.com/reduxjs/cra-template-redux-typescript).

## Demo

[The result is here](https://nzminusdev.github.io/react-redux-starter-kit/)

## Contribution

### What do you need to start

1. Package manager [NPM v7.23.0](https://www.npmjs.com/) and [NodeJs v14.17.6](https://nodejs.org/en/) platform.
2. Some CLI to execute commands from directory of your project (bash is recommended).
3. Clean VS Code editor(optional).

### Installation

```bash
git clone https://github.com/NZMinusDev/react-redux-starter-kit
cd react-redux-starter-kit
npm i
```

### Managing

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run storybook`

Runs the storybook.  
Open [http://localhost:6006](http://localhost:6006) to view it in the browser

#### `npm run storybook:build`

Builds storybook stories as static app.

#### `npm run analyze`

Runs `build` script and analyze it's result. This helps you understand where code bloat is coming from.

#### `npm run deploy`

Deploys using `"homepage"` path in [package.json](./package.json)

### Support scripts

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run predeploy`

Automatically runs `npm run build` on gh-pages before deploy.

#### `npm run prepare`

Installs [husky git hook](https://github.com/typicode/husky) when `npm i` is run.

### Project tree

```tree

```

## Learn More

### Main bare bone

You can learn more about configuration in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and [craco](https://github.com/gsoft-inc/craco).

### Additional stuff

- By [official Redux template](https://github.com/reduxjs/cra-template-redux-typescript):

  - main language: [Typescript](https://www.typescriptlang.org/);
  - unit testing: [React testing library](https://testing-library.com/docs/);
  - global state manager: [Redux](https://redux.js.org/introduction/getting-started), [React-Redux](https://react-redux.js.org/introduction/getting-started), [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started).

- by yourself:

  - routing: [react-router-dom](https://reactrouter.com/web/guides/quick-start);
  - main UI framework: [material-ui framework](https://next.material-ui.com/ru/getting-started/installation/);
  - visual UI testing: [storybook](https://storybook.js.org/);
  - forms' validation: [react-hook-form](https://react-hook-form.com/) with [yup](https://github.com/jquense/yup) schema;
  - gesture manipulation: [use-gesture](https://github.com/pmndrs/use-gesture);
  - browser features detection: [modernizr](https://modernizr.com/download?setclasses) - it's not installed by default but be free to use it.
  - additional react components:
    - lazyload container: [react-lazyload](https://github.com/twobin/react-lazyload);
    - notifications' management: [notistack](https://github.com/iamhosseindhv/notistack).

- project related

  - [aliases](./configs/aliases/aliases.js);
  - [debugging](./.vscode/launch.json), [see for more info](https://github.com/microsoft/vscode-js-debug)

- automatization

  - [shared VS Code settings](./.vscode/settings.json);
  - linting(editor and console): [eslint](./configs/eslint/.eslintrc.js), [stylelint](./configs/stylelintrc/stylelint.config.js), [prettier](./configs/prettier/);
  - accessibility testing by [axe](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md)(Chrome DevTools console only);
  - [pre-commit hook](https://github.com/okonet/lint-staged):
    - automatically fixes code style with `prettier` for any format Prettier supports;
    - validates styles/scripts by stylelint/eslint;
    - runs related tests.

- editor extensions:
  - you should install: [recommendations](./.vscode/extensions.json). Tip: be sure you use [stylelint vs code ext](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) before v1 - the latest version is unstable cause of [stylelint v14](https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-14.md#syntax-option-and-automatic-inferral-of-syntax) with CSS-in-JS syntax has issues and should be deprecated.
  - you can install:
    - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens);
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph);
    - [GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github);
    - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree);
    - [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag);
    - [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer);
    - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow);
    - [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost);
    - [Change-Case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case);
    - [Sort Lines by Selection](https://marketplace.visualstudio.com/items?itemName=earshinov.sort-lines-by-selection);
    - [vscode-sassdoc](https://marketplace.visualstudio.com/items?itemName=rafikis75.vscode-sassdoc);
    - [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview);
    - [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg);
    - [VSCode Map Preview](https://marketplace.visualstudio.com/items?itemName=jumpinjackie.vscode-map-preview);
    - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets);
    - [MUI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.mui-snippets);
    - [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu);
    - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme);
    - [Russian Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru).

## License

This project is licensed under the terms of the [MIT license](LICENSE).
