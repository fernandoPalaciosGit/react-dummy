import { counterStorage } from "../hooks/counterStorage";
import updateWebTitle from "../hooks/updateWebTitle";
import ControlPosition from "../hooks/controlPosition";

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

export default function CounterComponent({ max, min, step } = {}) {
  const [counter, setCounter] = counterStorage(0, "CounterComponentFunction");
  const incrementCounter = () =>
    setCounter((val) => (val < max ? val + step : val));
  const decrementCounter = () =>
    setCounter((val) => (val > min ? val - step : val));
  const resetCounter = () => setCounter(0);

  updateWebTitle(counter);

  return (
    <main className="Counter">
      <div>STEPS: {step}</div>
      <div>MIN: {min}</div>
      <div>MAX: {max}</div>
      <ControlPosition counter={counter} />
      <p className="count">{counter}</p>
      <section className="controls">
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
      </section>
    </main>
  );
}
