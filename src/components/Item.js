import React, { Component } from "react";
import PropTypes from "prop-types";

export class item extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
  }
  style = () => {
    if (this.props.todo.completed === false) {
      return {
        textDecoration: "line-through",
      };
    }
  };

  complete(e) {}
  render() {
    return (
      <div style={this.style()}>
        <p>
          <input type="checkbox" onChange={this.complete} />
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

item.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default item;
