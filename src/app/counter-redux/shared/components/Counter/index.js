export default function Counter({
  increase = Function(),
  decrease = Function(),
  counter = 0,
}) {
  return (
    <div>
      <button onClick={decrease}> ➖ </button>
      <span>
        {" "}
        <strong>{counter}</strong>{" "}
      </span>
      <button onClick={increase}> ➕ </button>
    </div>
  );
}
