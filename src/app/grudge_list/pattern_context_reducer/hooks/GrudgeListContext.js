import { createContext } from "react";
import { Actions } from "./GrudgeReducer";
import grudgeReducer from "../../pattern_reducer/hooks/grudge_reducer";

export const GrudgeListContext = createContext({});
// <GrudgeListContext.Provider val={val} />; -> set object to share between componnets (solving the problem of drilling properties)
// <GrudgeListContext.Consumer (val) => {}/>; -> use
// [] = useContext(GrudgeListContext)

export function GrudgeListProvider({ children }) {
  const [grudgeList, dispatch] = grudgeReducer();
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
  const value = { grudgeList, createGrudge, updateForgivenGrudge };

  // Vamos a perder la capacidad de memoizar estos valores al pasarlos a los componentes
  return (
    <GrudgeListContext.Provider value={value}>
      {children}
    </GrudgeListContext.Provider>
  );
}
