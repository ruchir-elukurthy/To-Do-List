import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

class ToDoList extends React.Component {
  render() {
    return this.props.todolist.map((todo) => (
      <Item
        key={todo.id}
        todo={todo}
        complete={this.props.complete}
        delete={this.props.delete}
      />
    ));
  }
}
ToDoList.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default ToDoList;
