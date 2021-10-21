import { useContext } from "react";
import { GrudgeListContext } from "../hooks/GrudgeListContext";

const GrudgeItem = ({ grudge }) => {
  console.log("render grudge" + grudge.person);
  const { updateForgivenGrudge } = useContext(GrudgeListContext);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input
            type="checkbox"
            checked={grudge.forgiven}
            onChange={() => updateForgivenGrudge(grudge.id)}
          />
          Forgiven
        </label>
      </div>
    </article>
  );
};

export default GrudgeItem;
