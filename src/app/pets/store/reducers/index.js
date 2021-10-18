import { combineReducers } from "redux";
import location from "./locationReducer";
import breed from "./breedReducer";
import animal from "./animalReducer";
import theme from "./themeReducer";

// creamos diferentes entry points en el storage, como objeto clave (nombre del reducer) -> valor (function reducer)
export const reducers = combineReducers({
  location,
  breed,
  animal,
  theme,
});
export default reducers;
