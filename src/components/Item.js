import React, { Component } from "react";
import PropTypes from "prop-types";

export class item extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

item.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default item;
