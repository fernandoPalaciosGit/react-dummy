import { useReducer } from "react";
import initial_grudge_list from "../../mocks/initial_grudge_list";
import { getNewGrudge } from "../../mocks/initial_grudge_list";

export const Actions = {
  CREATE_NEW_GRUDGE: "CREATE_NEW_GRUDGE",
  TOGGLE_FORGIVEN_GRUDGE: "TOGGLE_FORGIVEN_GRUDGE",
};

function toggleForgiven(grudge, updatedGrudgeId) {
  return grudge.id === updatedGrudgeId
    ? { ...grudge, forgiven: !grudge.forgiven }
    : grudge;
}

function reducer(state, action) {
  switch (action.type) {
    case Actions.CREATE_NEW_GRUDGE:
      const { name, reason } = action.payload;
      return [getNewGrudge(name, reason), ...state];
    case Actions.TOGGLE_FORGIVEN_GRUDGE:
      return state.map((grudge) => toggleForgiven(grudge, action.payload));
    default:
      return state;
  }
}

const grudgeReducer = () => useReducer(reducer, initial_grudge_list);

export default grudgeReducer;
