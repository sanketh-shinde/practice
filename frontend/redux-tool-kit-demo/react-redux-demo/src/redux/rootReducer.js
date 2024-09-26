import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import counterReducer from "./counter/counterReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  counter: counterReducer,
});
