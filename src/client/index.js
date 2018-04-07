import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Styles from 'material-ui/styles';

import getStore from '../shared/store';

// import Main from "../shared/components";
// import { Theme } from "../shared/utils";

// console.log(`RDOM`, RDOM);
// console.log(`ReactDOM`, ReactDOM);

// const { MuiThemeProvider } = Styles;

//
const { render } = ReactDOM;

//
// console.log(`Styles`, Styles);
// const store = getStore();
//
// const App = ({ store }) => (
//   <Provider store={store}>
//     <MuiThemeProvider theme={Theme}>
//       <Main />
//     </MuiThemeProvider>
//   </Provider>
// );
//
const App2 = <h2>its working</h2>;

//
// window.store = store;

render(App2, document.getElementById(`root`));
