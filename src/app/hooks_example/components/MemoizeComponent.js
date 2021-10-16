import { useMemo, useState, memo } from "react";
import React from "react";

import Fibonacci from "fibonacci";

const getFibonacci = (fibo) => {
  console.log(
    "number of Fibonacci calculation is a hard process: please rendered only if necessary"
  );
  return Fibonacci.iterate(fibo).number;
};

const FibonacciMemo = memo(({ fibo }) => {
  return getFibonacci(fibo);
});

const MemoizeComponent = () => {
  // cada vez que cambiamnos el estado del titulo con el  isGreen, renderizamos el componente y volveriamo0s a calcular la serie  de Finbonachi
  // si utilizamos el useMemo, cada vez que cambiasemos un estado que NO este relacionado con el valor de Fibonachi, NO se re-calcularia
  const [green, isGreen] = useState(false);

  const [fibo, setFibo] = useState(500);
  // const resultFibo = getFibonacci(fibo);
  const resultFibo = useMemo(() => getFibonacci(fibo), [fibo]);

  return (
    <div>
      <h3
        style={{ color: green ? "green" : "black" }}
        onClick={() => isGreen(!green)}
      >
        useMemo Example CLICK TO TOGGLE GREEN
      </h3>
      <div>
        <button onClick={() => setFibo(fibo + 1)}> ➕ {fibo} </button>
        <div>
          <strong>useMemo(): </strong>number of Fibonachi is
          <span>{resultFibo}</span>
        </div>
        <div>
          <strong>React.memo: </strong>number of Fibonachi is
          <FibonacciMemo fibo={fibo} />
        </div>
      </div>
    </div>
  );
};

export default MemoizeComponent;
