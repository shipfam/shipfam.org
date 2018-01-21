/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies

import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
}

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
