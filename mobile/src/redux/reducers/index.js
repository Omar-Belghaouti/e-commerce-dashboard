import { combineReducers } from "redux";
import { payment } from "./payment";
import { user } from "./user";

export const mainReducer = combineReducers({
  user,
  payment,
});
