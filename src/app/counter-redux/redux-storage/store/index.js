import { combineReducers, createStore } from "redux";
import { counterReducer } from "../hooks/useCounterStorage.example";

export const counterStorage = createStore(
  combineReducers({ counter: counterReducer })
);
