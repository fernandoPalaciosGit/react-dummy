import { createStore } from "redux";
import reducers from "./reducers";

const devToolsRedux =
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = createStore(reducers, devToolsRedux);
export default store;
