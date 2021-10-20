import {GrudgeItem} from "./GrudgeItem";

export function GrudgeList({grudgeList, toggleForgiven}) {
  return (
    <section className="Grudges">
      {grudgeList.map((grudge) => (
        <GrudgeItem
          key={grudge.id}
          grudge={grudge}
          toggleForgiven={toggleForgiven}
        />
      ))}
    </section>
  );
}
