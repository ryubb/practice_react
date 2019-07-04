import { combineReducers } from "redux";

import loginReducer from "./login";
import studentReducer from "./student";

export default combineReducers({
  loginReducer,
  studentReducer
});
