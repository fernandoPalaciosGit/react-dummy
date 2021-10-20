import { useEffect, useState } from "react";
import {
  getStateFromLocalStorage,
  setCounterStateKey,
  setStateToLocalStorage,
} from "../localstorage/counter";

export function counterStorage(initValue, storageKey) {
  setCounterStateKey(storageKey);
  const [counter, setCounter] = useState(getStateFromLocalStorage(initValue));

  useEffect(() => setStateToLocalStorage(counter), [counter]);

  return [counter, setCounter];
}
