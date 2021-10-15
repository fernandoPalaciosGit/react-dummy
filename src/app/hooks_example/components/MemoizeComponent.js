import { useMemo, useState } from "react";
import Fibonacci from "fibonacci";

const MemoizeComponent = () => {
  // cada vez que cambiamnos el estado del titulo con el  isGreen, renderizamos el componente y volveriamo0s a calcular la serie  de Finbonachi
  // si utilizamos el useMemo, cada vez que cambiasemos un estado que NO este relacionado con el valor de Fibonachi, NO se re-calcularia
  const [green, isGreen] = useState(false);

  const [fibo, setFibo] = useState(500);
  // const resultFibo = Fibonacci.iterate (fibo).number;
  const resultFibo = useMemo(() => Fibonacci.iterate(fibo).number, [fibo]);

  return (
    <div>
      <h3
        style={{ color: green ? "green" : "black" }}
        onClick={() => isGreen(!green)}
      >
        useMemo Example CLICK TO TOGGLE GREEN
      </h3>
      <div>
        <button onClick={() => setFibo(fibo + 1)}> ➕ </button>
        <span>
          {" "}
          number of Fibonachi {fibo} is {resultFibo}
        </span>
      </div>
    </div>
  );
};

export default MemoizeComponent;
