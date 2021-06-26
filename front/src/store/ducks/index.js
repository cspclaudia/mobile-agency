import { combineReducers } from "redux";
import { reducer as login } from "./login";
import { reducer as register } from "./register";
import { reducer as user } from "./user";
export default combineReducers({
  login,
  register,
  user,
});
