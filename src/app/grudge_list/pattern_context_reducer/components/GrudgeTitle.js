import { useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

export default function GrudgeTitle() {
  const { grudgeList } = useContext(GrudgeListContext);

  return <h2>{grudgeList.length} Grudges</h2>;
}
