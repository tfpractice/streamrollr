import React from "react";
import { Provider } from "react-redux";
import * as ReactDom from "react-dom";
import * as Styles from "material-ui/styles";

import getStore from "../shared/store";
import Main from "../shared/components";
import { Theme } from "../shared/utils";

// console.log(`RDOM`, RDOM);
console.log(`ReactDom`, ReactDom);

// const { MuiThemeProvider } = Styles;

//
// const { render } = RDOM;

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

ReactDom.default.render(App2, document.getElementById(`root`));

// Worker();
