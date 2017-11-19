import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LoginContainer } from './components/login.js'
import { HomeContainer } from './components/home.js'
import { Header } from "semantic-ui-react"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header size="massive" color="grey">Moviez</Header>
        </header>
        <Switch>
          <Route path='/login' component={LoginContainer} />
          <Route path='/' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
