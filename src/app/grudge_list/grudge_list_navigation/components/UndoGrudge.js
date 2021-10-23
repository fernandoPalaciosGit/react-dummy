import { useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

export default function UndoGrudge() {
  const { grudgeListNavigation, undoGrudge } = useContext(GrudgeListContext);
  const isPast = grudgeListNavigation.past.length > 0;

  return (
    <button
      className="full-width"
      disabled={!isPast}
      onClick={() => undoGrudge()}
    >
      Undo selected Grudge
    </button>
  );
}
