# How to

Just add one _logo.png_ file for icon:

- it's powered by [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin);
- see [config](../../../configs/craco/craco.config.js) for set options for manifest changing and [index.html](../../../public/index.html) for manually related to icons `<link>`/`<meta>` changing(or use `npm run build` and copy icons `<link>`/`<meta>` result than change `device-width:`/`device-height:` to `width:`/`height:`);
- add _safari-pinned-tab.svg_ manually to [public](../../../public/) and change color for it in [index.html](../../../public/index.html), [why](https://github.com/itgalaxy/favicons#questions);
- you can generate and check icons by [favicon checker](https://realfavicongenerator.net/favicon_checker).
  n
