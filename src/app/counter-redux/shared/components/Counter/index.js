export default function Counter({ increase, decrease, counter }) {
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
