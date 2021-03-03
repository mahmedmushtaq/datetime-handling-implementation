import { Reducer } from "react";
import { combineReducers } from "redux";
import login from "./registration";
import utils from "./utils";
const reducers = combineReducers({
  login,
  utils,
});

export default reducers;
