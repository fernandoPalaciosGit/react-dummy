import CounterWithHooks from "./redux-hooks/components/CounterWithHooks";
import CounterWithStorage from "./redux-storage/components/CounterWithStorage";

export default function App() {
  return (
    <div>
      <h1>Redux implementation</h1>
      <div>
        <div>Update Counter (Use hook reducer to implement Counter)</div>
        <CounterWithHooks />
      </div>
      <div>
        <div>Update Counter (Use Redux to implement Counter)</div>
        <CounterWithStorage />
      </div>
    </div>
  );
}
