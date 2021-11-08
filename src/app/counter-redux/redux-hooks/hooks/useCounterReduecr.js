// TODO: IMPLEMENT
import { useCallback, useReducer } from "react";

const COUNTER_ACTIONS = {
  INCREASE: "increase counter",
  DECREASE: "decrease counter",
};

const initialize = 0;

const reducer = (state, { type }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREASE:
      return state + 1;
    case COUNTER_ACTIONS.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default function useCounterReducer(initCounter = initialize) {
  const [counter, dispatch] = useReducer(reducer, initCounter);
  const increase = useCallback(() =>
    dispatch({
      type: COUNTER_ACTIONS.INCREASE,
    })
  );
  const decrease = useCallback(() =>
    dispatch({
      type: COUNTER_ACTIONS.DECREASE,
    })
  );

  return { counter, increase, decrease };
}
