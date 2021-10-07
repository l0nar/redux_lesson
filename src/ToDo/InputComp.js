import React, { Component } from "react";
import { connect } from "react-redux";
import { TODO_SET_TASK_NAME } from "../store/actions";

class InputComp extends Component {
  handleInput = (e) => {
    const value = e.target.value;
    const { setTaskName } = this.props;
    setTaskName(value);
  };

  render() {
    const { taskName } = this.props;

    return (
      <div>
        <label htmlFor="setTaskName">Your Todo: &nbsp; </label>
        <input
          name="setTaskName"
          type="text"
          value={taskName}
          onChange={(e) => this.handleInput(e)}
        />
      </div>
    );
  }
}

const mapState = (store) => {
  return {
    taskName: store.reducer.taskName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTaskName: (inputValue) => {
      const action = {
        type: TODO_SET_TASK_NAME,
        payload: inputValue,
      };
      dispatch(action);
    },
  };
};

export default connect(mapState, mapDispatchToProps)(InputComp);
