import React from "react";
import TodoList from "./todo/TodoList";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="ui segmnet">
        <div className="ui two column very relaxed grid">
          <div className="colum">
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
          </div>
          <div className="colum">HI</div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
