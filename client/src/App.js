import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { LoginContainer } from "./components/login.js";
import { HomeContainer } from "./components/home.js";
import { SessionCreatorContainer } from "./components/sessionCreator.js";

import { Header } from "semantic-ui-react";
import * as actionCreators from "./actions/initActionCreator.js";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.init();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header size="huge" color="grey">
            Moviez
          </Header>
        </header>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/createSession" component={SessionCreatorContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export const AppContainer = connect(null, actionCreators)(App);
