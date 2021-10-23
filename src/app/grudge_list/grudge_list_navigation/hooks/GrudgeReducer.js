import { useReducer } from "react";
import {
  getNewGrudge,
  init_grudge_list_navigation,
} from "../../mocks/initial_grudge_list";

export const Actions = {
  CREATE_NEW_GRUDGE: "CREATE_NEW_GRUDGE",
  TOGGLE_FORGIVEN_GRUDGE: "TOGGLE_FORGIVEN_GRUDGE",
  UNDO_GRUDGE: "UNDO_GRUDGE",
  FORWARD_GRUDGE: "FORWARD_GRUDGE",
};

function toggleForgiven(grudge, updatedGrudgeId) {
  return grudge.id === updatedGrudgeId
    ? { ...grudge, forgiven: !grudge.forgiven }
    : grudge;
}

function updateGrudgeListReducer(state, action) {
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

function shuffleGrudgeNavigation(grudgeListReducer, initialState) {
  function navigateGrudgeListReducer(state, action) {
    const newPresent = grudgeListReducer(initialState.present, action);

    switch (action.type) {
      case Actions.UNDO_GRUDGE:
        const [newPresentUNDO_GRUDGE, ...newPast] = state.past;

        return {
          past: newPast,
          present: newPresentUNDO_GRUDGE,
          future: [state.present, ...state.future],
        };
      case Actions.FORWARD_GRUDGE:
        const [newPresentFORWARD_GRUDGE, ...newFuture] = state.future;

        return {
          past: [state.present, ...state.past],
          present: newPresentFORWARD_GRUDGE,
          future: newFuture,
        };
      default:
        return {
          past: [state.present, ...state.past],
          present: newPresent,
          future: [],
        };
    }
  }

  return useReducer(navigateGrudgeListReducer, initialState);
}

const grudgeReducer = () =>
  shuffleGrudgeNavigation(updateGrudgeListReducer, init_grudge_list_navigation);

export default grudgeReducer;
