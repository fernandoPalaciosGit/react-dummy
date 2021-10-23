import { createContext } from "react";
import grudgeReducer, { Actions } from "./GrudgeReducer";

export const GrudgeListContext = createContext([]);

export function GrudgeListProvider({ children }) {
  // grudgeListNavigation = {past, present, future}
  const [grudgeListNavigation, dispatch] = grudgeReducer();
  const createGrudge = (name, reason) =>
    dispatch({
      type: Actions.CREATE_NEW_GRUDGE,
      payload: { name, reason },
    });
  const updateForgivenGrudge = (id) =>
    dispatch({
      type: Actions.TOGGLE_FORGIVEN_GRUDGE,
      payload: id,
    });
  const undoGrudge = () =>
    dispatch({
      type: Actions.UNDO_GRUDGE,
    });
  const forwardGrudge = () =>
    dispatch({
      type: Actions.FORWARD_GRUDGE,
    });
  const value = {
    grudgeListNavigation,
    createGrudge,
    updateForgivenGrudge,
    undoGrudge,
    forwardGrudge,
  };

  return (
    <GrudgeListContext.Provider value={value}>
      {children}
    </GrudgeListContext.Provider>
  );
}
