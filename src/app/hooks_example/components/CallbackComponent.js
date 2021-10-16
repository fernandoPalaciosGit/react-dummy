import { useState, useEffect, useCallback, memo } from "react";
import getFibonacci from "../utils/Fibonacci";

// ias inside this component we have computeFibonacci that has a hard computation process,
// we decide to wrap this Componente withon a Ract.memo() callback,
// by this attempt we are going to render ExpensiveComputationComponent only when arguments ({ computeFibonacci, count }) have different values,
// with count we have no problem because it is a primitive object (only matters the value),
// but computeFibonacci is a function (First order class object) so every time we are trying to re-render ExpensiveComputationComponent will received a different function reference, so the React.memo() pattern doesnt work,
// The solution aims to take the same reference to computeFibonacci() on each render so .... we need to wrap it within useCallback(getFibonacci)
const ExpensiveComputationComponent = memo(({ computeFibonacci, count }) => {
  return (
    <div>
      <h1>computed Fibonacci times: {computeFibonacci(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  // useCallback(getFibonacci) is going to reassign once event ExpensiveComputationComponent gets rendered multiple times
  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        computeFibonacci={useCallback(getFibonacci)}
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
