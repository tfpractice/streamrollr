import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import React from "react";
import { connect } from "react-redux";

// import "./app.css";

// import logo from "./logo.svg";

import { getDogs } from "../../store/dogs/actions";

const App = props => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center">
        <Grid item xs={11}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          {` `}
          <Button onClick={props.getDogs}>getDogs</Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const mapState = ({ dogs: { data: dogs }}) => ({ dogs });

const connected = connect(mapState, { getDogs });

export default connected(App);
