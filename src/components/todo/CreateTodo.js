import React from "react";

class CreateTodo extends React.Component {
  state = {
    todo: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="ui segment">
            <div className="field">
              <label>Todo</label>
              <input
                type="text"
                id="todo"
                onChange={this.handleChange}
                placeholder="Todo"
              />
            </div>
            <div className="field">
              <label>Content</label>
              <textarea id="content" onChange={this.handleChange} />
            </div>
            <div className="field">
              <button className="ui primary button">Create Todo</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
