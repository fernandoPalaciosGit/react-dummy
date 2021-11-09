import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const COUNTER_ACTIONS = {
  INCREASE: "increase counter",
  DECREASE: "decrease counter",
};

const initialize = 0;

export const counterReducer = (state = initialize, { type }) => {
  switch (type) {
    case COUNTER_ACTIONS.INCREASE:
      return state + 1;
    case COUNTER_ACTIONS.DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default function useCounterStorage() {
  const dispatch = useDispatch();
  const counter = useSelector(({ counter }) => counter);
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
