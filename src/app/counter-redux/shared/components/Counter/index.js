export default function Counter({
  increase = Function(),
  decrease = Function(),
  counter = 0,
  type = "",
}) {
  return (
    <div>
      <button data-testid={`decrease-counter-${type}`} onClick={decrease}>
        {" "}
        ➖{" "}
      </button>
      <span>
        {" "}
        <strong data-testid={`counter-${type}`}>{counter}</strong>{" "}
      </span>
      <button data-testid={`increase-counter-${type}`} onClick={increase}>
        {" "}
        ➕{" "}
      </button>
    </div>
  );
}
