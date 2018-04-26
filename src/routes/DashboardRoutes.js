import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './../components/LoginPage';
import Dashboard from './../components/Dashboard';
import Userprofile from './../components/Userprofile';


class DashboardRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/signin" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/Userprofile" component={Userprofile} />
      </div>
    );
  }
}
export default DashboardRoutes;
