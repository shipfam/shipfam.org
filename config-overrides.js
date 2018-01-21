/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* When you start up the app, it will pass the Webpack config through react-app-rewired, 
through config-overrides.js and the rewire-hot-loader library, and then react-hot-loader 
and its AppContainer component will make hot reloading work properly */

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  return config;
};
