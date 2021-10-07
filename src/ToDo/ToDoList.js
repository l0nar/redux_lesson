import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    return (
      <div className="row">
        {todos.map((item, i) => {
          return <ToDoItem name={item.name} num={i + 1} key={item.id} />;
        })}
      </div>
    );
  }
}

const mapState = (store) => {
  return {
    todos: store.reducer.todos,
  };
};

export default connect(mapState)(ToDoList);
