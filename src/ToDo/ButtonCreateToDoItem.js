import { connect } from "react-redux";
import { CREATE_TODO_ITEM } from "../store/actions";
import { CLEAR_TASK_NAME } from "../store/actions";
import uniqid from "uniqid";

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
      type: CREATE_TODO_ITEM,
      payload: {
        name: taskName,
        id: uniqid(),
      },
    };
    dispatch(action);
    dispatch({ type: CLEAR_TASK_NAME });
  };
  return {
    createTodoItem,
  };
};

export default connect(mapState, mapDispatch)(ButtonCreateToDoItem);
