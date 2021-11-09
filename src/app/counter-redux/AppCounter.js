import CounterWithHooks from "./redux-hooks/components/CounterWithHooks/index.example";
import CounterWithStorage from "./redux-storage/components/CounterWithStorage/index.example";
// import CounterWithHooks from "./redux-hooks/components/CounterWithHooks";
// import CounterWithStorage from "./redux-storage/components/CounterWithStorage";

export default function AppCounter() {
  return (
    <div>
      <h1>Redux Counter implementation</h1>
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <h3>Use hook reducer</h3>
          <CounterWithHooks />
        </div>
        <div>
          <h4>implement in the files</h4>
        </div>
        <ul>
          <li>CounterWithHooks/index.js</li>
          <li>hooks/useCounterReducer.js</li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <h3>Use storage</h3>
          <CounterWithStorage />
        </div>
        <div>
          <h4>implement in the files</h4>
        </div>
        <ul>
          <li>CounterWithStorage/index.js</li>
          <li>hooks/useCounterStorage.js</li>
        </ul>
      </div>
    </div>
  );
}
