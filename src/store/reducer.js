import { TODO_SET_TASK_NAME } from "./actions";

const initialState = {
  taskName: "",
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_SET_TASK_NAME:
      return { ...state, taskName: action.payload };
    case "CREATE_TODO_ITEM":
      return { ...state, todos: [...state.todos, action.payload] };
    case "CLEAR_TASK_NAME":
      return { ...state, taskName: "" };
    default:
      return state;
  }
};

export default reducer;
