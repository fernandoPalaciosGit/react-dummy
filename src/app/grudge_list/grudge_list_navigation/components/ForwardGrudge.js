import { useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

export default function Forward() {
  const { grudgeListNavigation, forwardGrudge } = useContext(GrudgeListContext);
  const isFuture = grudgeListNavigation.future.length > 0;

  return (
    <button
      className="full-width"
      disabled={!isFuture}
      onClick={() => forwardGrudge()}
    >
      Next selected Grudge
    </button>
  );
}
