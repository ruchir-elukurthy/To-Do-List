import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

class ToDoList extends React.Component {
  render() {
    return this.props.todolist.map((todo) => (
      <Item key={todo.id} todo={todo} />
    ));
  }
}
ToDoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default ToDoList;
