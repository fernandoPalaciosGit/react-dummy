import { useEffect, useState } from "react";
import {
  getStateFromLocalStorage,
  setCounterStateKey,
  setStateToLocalStorage,
} from "./counter";

export function useCounterStorage(initValue, storageKey) {
  setCounterStateKey(storageKey);
  const [counter, setCounter] = useState(getStateFromLocalStorage(initValue));

  useEffect(() => setStateToLocalStorage(counter), [counter]);

  return [counter, setCounter];
}
