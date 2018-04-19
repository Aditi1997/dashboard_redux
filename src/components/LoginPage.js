import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class LoginPage extends Component {


    render() {
        return (
          <div className="evive-logo">
          <img className="evive-logo-image" src="https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png">
          </img>
          <img className="travelers-image" src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/clientLogosImages/travelers%20transparent.png">
          </img>
          <div className="login-form">
           <div className="login-form-fields">
             Username: <br/>
             <input type="text" name="username" value=""/> <br/>
             Password: <br/>
             <input type="password"/> <br/><br/>
             <button type="submit" className="login-button"> <Link to="/dashboard"> Login </Link> </button>
           </div>

            <div>
            <img className="login-form-image"
            src="https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/auth/banner_bg.jpg">
            </img>
            </div>
            </div>
        </div>
        )
    }
}

export default LoginPage