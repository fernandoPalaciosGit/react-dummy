import initial_grudge_list from "../../mocks/initial_grudge_list";
import { useState } from "react";
import { GrudgeForm } from "./GrudgeForm";
import { GrudgeList } from "./GrudgeList";

export default function GrudgeListApp() {
  // useState forced us to create a new array of grudge list on each re-render, even we update only one checkbox or create new grudge
  const [grudgeList, setGrudgeList] = useState(initial_grudge_list);
  const toggleForgiven = (newGrudge) => {
    // drilling action to child component
    setGrudgeList(
      grudgeList.map((grudge) =>
        grudge.id === newGrudge.id ? newGrudge : grudge
      )
    );
  };
  const createNewGrudge = (newGrudge) => {
    // drilling action to nephew component
    setGrudgeList([newGrudge, ...grudgeList]);
  };

  return (
    <div className="Application">
      <h2>{grudgeList.length} Grudges</h2>
      <GrudgeForm createNewGrudge={createNewGrudge} />
      <GrudgeList grudgeList={grudgeList} toggleForgiven={toggleForgiven} />
    </div>
  );
}
