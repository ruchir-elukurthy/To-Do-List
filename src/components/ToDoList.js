import React from "react";

class ToDoList extends React.Component {
  render() {
    return this.props.todolist.map((todo) => <h3>{todo.title}</h3>);
  }
}

export default ToDoList;
