import React, { Component } from "react";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, num } = this.props;
    return (
      <div className="card m-1">
        <span>
          {num}.{name}
        </span>
      </div>
    );
  }
}

export default ToDoItem;
