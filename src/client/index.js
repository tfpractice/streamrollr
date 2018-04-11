import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';

import getStore from '../shared/store';
import Main from '../shared/components';
import { Theme } from '../shared/utils';

// console.log(`RDOM`, RDOM);
// console.log(`ReactDOM`, ReactDOM);

// const { MuiThemeProvider } = Styles;

//
const { render } = ReactDOM;

//
// console.log(`Styles`, Styles);
const store = getStore();

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

//
const App2 = <h2>its working</h2>;

//
// window.store = store;

render(<App store={store} />, document.getElementById(`root`));
