import React, { Component } from "react";
import PropTypes from "prop-types";

export class item extends Component {
  style = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.style()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.complete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delete.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  color: "#006400",
  background: "#FFFF00",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
};

item.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default item;
