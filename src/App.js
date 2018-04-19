import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createHistory } from 'history';
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import Userprofile from './components/Userprofile'


class App extends Component {
  render() {
    return (

      <div className="App">
      <Route exact path="/signin" component={LoginPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Userprofile" component={Userprofile} />
      </div>
    );
  }
}

export default App;
