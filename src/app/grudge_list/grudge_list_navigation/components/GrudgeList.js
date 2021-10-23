import { useContext } from "react";
import GrudgeItem from "./GrudgeItem";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

const GrudgeList = () => {
  const { grudgeListNavigation } = useContext(GrudgeListContext);

  return (
    <section className="Grudges">
      {grudgeListNavigation.present.map((grudge) => (
        <GrudgeItem key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
};

export default GrudgeList;
