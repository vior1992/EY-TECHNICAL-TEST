import React, { Component } from 'react';
import { Route, withRouter } from 'react-router'
import Landing from './components/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Landing/>} />
      </div>
    );
  }
}

export default withRouter(App);
