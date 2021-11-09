import CounterWithHooks from "./redux-hooks/components/CounterWithHooks";
import CounterWithStorage from "./redux-storage/components/CounterWithStorage";

export default function App() {
  return (
    <div>
      <h1>Redux implementation</h1>
      <div>
        <h2>Use hook reducer to implement Counter</h2>
        <CounterWithHooks />
      </div>
      <br />
      <br />
      <div>
        <h2>Use Storage to implement Counter</h2>
        <CounterWithStorage />
      </div>
    </div>
  );
}
