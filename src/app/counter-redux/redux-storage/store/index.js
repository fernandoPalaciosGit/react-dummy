import { combineReducers, createStore } from "redux";
import { counterReducer } from "../hooks/useCounterStorage";

export const counterStorage = createStore(
  combineReducers({ counter: counterReducer })
);
