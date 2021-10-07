import React, { createFactory } from "react";
import { connect } from "react-redux";

const ButtonCreateToDoItem = ({ createTodoItem, taskName }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => createTodoItem(taskName)}
    >
      Create
    </button>
  );
};

const mapState = (store) => {
  return {
    taskName: store.reducer.taskName,
  };
};

const mapDispatch = (dispatch) => {
  const createTodoItem = (taskName) => {
    const action = {
      type: "CREATE_TODO_ITEM",
      payload: {
        name: taskName,
        id: Math.random(),
      },
    };
    dispatch(action);
    dispatch({ type: "CLEAR_TASK_NAME" });
  };
  return {
    createTodoItem,
  };
};

export default connect(mapState, mapDispatch)(ButtonCreateToDoItem);
