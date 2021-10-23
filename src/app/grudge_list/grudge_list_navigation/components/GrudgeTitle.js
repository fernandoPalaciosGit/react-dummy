import { useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

export default function GrudgeTitle() {
  const { grudgeListNavigation } = useContext(GrudgeListContext);

  return <h2>{grudgeListNavigation.present.length} Grudges</h2>;
}
