import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
const EVIVE_LOGO = 'https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png';
const TRAVELLERS_LOGO = 'https://56e0b88549703524cdea-56269be9fa6a015648d898f06ebbb34a.ssl.cf1.rackcdn.com/add40ff726e05ca92fe7f72a8333c9d1b84372f1859a4938d5cf5df707833c55a102e11cf4159ad93d72e766b8e374cdbe4007747dd1934f87bafffd984f1d82.png';

class LoginPage extends Component {


      state={
        username: ' ',
        password: ' ',
      }

      handlechange = (username) => {
        this.setState({
          username,
        });
      }
      handlepassword = (password) => {
        this.setState({
          password,
        });
      }

      render() {
        return (
          <div className="evive-logo">
            <img alt="not found" className="evive-logo-image" src={EVIVE_LOGO} />
            <img alt="not found" className="travelers-image" src={TRAVELLERS_LOGO} />

            <div className="login-form">
              <div className="login-form-fields">

             Username: <br />
                <input type="text" name="username" value={this.state.username} onChange={(event) => this.handlechange(event.target.value)} /> <br/>
             Password: <br />
                <input type="password" name="password" onChange={event => this.handlepassword(event.target.value)} />  <br /><br />
                <button type="submit" className="login-button" > <Link to="/dashboard"> Login </Link> </button>
              </div>
              <div>
                <img
                  alt="not found"
                  className="login-form-image"
                  src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/auth/banner_bg.jpg" />
              </div>
            </div>
            <Route
              path="/dashboard"
              render={({ history }) => {
                  return <Dashboard username={this.state.username} /> }} />
        </div>
        )
      }
}

export default LoginPage
