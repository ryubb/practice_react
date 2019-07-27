import { combineReducers } from "redux";

import reducerDog from "./fetchDog";
import reducerTodo from "./fetchTodo";

const rootReducer = combineReducers({
  reducerDog,
  reducerTodo
});

export default rootReducer;
