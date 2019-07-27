// Reducer
const initialState = {
  url: "",
  loading: false,
  error: false
};
const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_TODO":
      return {
        url: "",
        loading: true,
        error: false
      };
    case "REQUESTED_TODO_SUCCEEDED":
      return {
        todos: action.todos,
        loading: false,
        error: false
      };
    case "REQUESTED_TODO_FAILED":
      return {
        url: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

// Action Creators
export const requestTodo = () => {
  return { type: "REQUESTED_TODO" };
};

export const requestTodoSuccess = data => {
  return { type: "REQUESTED_TODO_SUCCEEDED", todos: data };
};

export const requestTodoError = () => {
  return { type: "REQUESTED_TODO_FAILED" };
};

export const fetchTodo = () => {
  return { type: "FETCHED_TODO" };
};

export default reducerTodo;
