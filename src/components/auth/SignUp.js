import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

class SignUp extends React.Component {
  render() {
    console.log(this.props.firebase);
    return (
      <div className="ui container">
        <form onSubmit={""} className="ui form">
          <h1> Sign Up </h1>
          <div className="ui segment">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                id="email"
                onChange={""}
                placeholder="Email"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                id="password"
                onChange={""}
                placeholder="Password"
              />
            </div>
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                id="firstName"
                onChange={""}
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                onChange={""}
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <button className="ui primary button">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(state => ({
    firebase: state.firebase
  }))
)(SignUp);
