import { memo } from "react";

// memo -> solo se ejecurtara esta funcion de react cuando cambie la referencia de toggleForgiven() [se lance el dispatch], o cambie el grudge
const GrudgeItem = memo(({ grudge, toggleForgiven }) => {
  console.log("render grudge" + grudge.person);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input
            type="checkbox"
            checked={grudge.forgiven}
            onChange={() => toggleForgiven(grudge.id)}
          />
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default GrudgeItem;
