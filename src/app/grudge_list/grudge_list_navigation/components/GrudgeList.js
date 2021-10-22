import { useContext } from "react";
import GrudgeItem from "./GrudgeItem";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

const GrudgeList = () => {
  const { grudgeList } = useContext(GrudgeListContext);

  return (
    <section className="Grudges">
      {grudgeList.map((grudge) => (
        <GrudgeItem key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
};

export default GrudgeList;
