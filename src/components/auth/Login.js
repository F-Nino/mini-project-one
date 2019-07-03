import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.handleSubmit} className="ui form">
          <h1> Login </h1>
          <div className="ui segment">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button className="ui primary button">Login</button>
              <Link to="/signup" className="ui primary button">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
