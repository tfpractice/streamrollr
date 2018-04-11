import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';

import getStore from '../shared/store';
import Main from '../shared/components';
import { Theme } from '../shared/utils';

const { render } = ReactDOM;

const store = getStore();

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

render(<App store={store} />, document.getElementById(`root`));
