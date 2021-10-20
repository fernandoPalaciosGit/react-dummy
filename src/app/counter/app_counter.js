import { render } from "react-dom";
// import CounterComponent from "./components/CounterComponent.function";
import CounterComponent from "./components/CounterComponent.class";

render(
  <CounterComponent min={-25} max={25} step={5} />,
  document.getElementById("root")
);
