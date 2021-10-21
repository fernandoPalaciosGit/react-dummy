import GrudgeItem from "./GrudgeItem";

const GrudgeList = ({ grudgeList, toggleForgiven }) => {
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
};

export default GrudgeList;
