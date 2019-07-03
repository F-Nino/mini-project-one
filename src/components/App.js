import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./header/Menu";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import HomeScreen from "./HomeScreen";
import CreateTodo from "./todo/CreateTodo";

import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Menu />
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/create" exact component={CreateTodo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
