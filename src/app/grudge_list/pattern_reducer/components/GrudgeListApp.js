import { useCallback } from "react";
import GrudgeForm from "./GrudgeForm";
import GrudgeList from "./GrudgeList";
import grudgeReducer, { Actions } from "../hooks/grudge_reducer";

export default function GrudgeListApp() {
  // la principal diferencia con useState() esta con dispatch() -> es la misma refernecia en cada re-render
  const [grudgeList, dispatch] = grudgeReducer();

  // useCallBack() --> misma refernecia en cada re-render
  const createNewGrudge = useCallback(
    (name, reason) =>
      dispatch({
        type: Actions.CREATE_NEW_GRUDGE,
        payload: { name, reason },
      }),
    [dispatch]
  );
  const toggleForgiven = useCallback(
    (id) =>
      dispatch({
        type: Actions.TOGGLE_FORGIVEN_GRUDGE,
        payload: id,
      }),
    [dispatch]
  );

  return (
    <div className="Application">
      <h2>{grudgeList.length} Grudges</h2>
      <GrudgeForm createNewGrudge={createNewGrudge} />
      <GrudgeList grudgeList={grudgeList} toggleForgiven={toggleForgiven} />
    </div>
  );
}
