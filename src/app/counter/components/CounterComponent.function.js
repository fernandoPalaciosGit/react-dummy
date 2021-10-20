import { useEffect } from "react";
import { useCounterStorage } from "../localstorage/useCounterStorage";

const incrementCounterTesting = () => {
  // setCounter(counter + 1); // setea (counter + 1) desde el componente
  // setCounter((val) => ++val); // setea (counter + 1) desde el event loo
  ///////////////////////
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);// estaras enviando 3 veces al event looop el mismo valor de (counter + 1), por lo que solo se renderizara una vez con el valor de (counter + 1)
  ///////////////////////
  // setCounter((val) => ++val);
  // setCounter((val) => ++val);
  // setCounter((val) => ++val); // desde el rendering event loop estaras cambiando el valor que recibes, y como procesaws 3 eventos de setCounter asincornos, renderizara 1 vez con el ultimo valor procesado por el event loop
};

const setWebTitle = (counter) => (document.title = `Counter: ${counter}`);

export default function CounterComponent({ max, min, step } = {}) {
  const [counter, setCounter] = useCounterStorage(
    0,
    "CounterComponentFunction"
  );
  const incrementCounter = () =>
    setCounter((val) => (val < max ? val + step : val));
  const decrementCounter = () =>
    setCounter((val) => (val > min ? val - step : val));
  const resetCounter = () => setCounter(0);

  // listener onChange {counter} state
  useEffect(() => setWebTitle(counter), [counter]);

  return (
    <main className="Counter">
      <div>STEPS: {step}</div>
      <div>MIN: {min}</div>
      <div>MAX: {max}</div>
      <p className="count">{counter}</p>
      <section className="controls">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </section>
    </main>
  );
}
