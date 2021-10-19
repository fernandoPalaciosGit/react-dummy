import { render } from "react-dom";
import Counter from "./components/Counter";

render(
  <Counter min={-25} max={25} step={5} />,
  document.getElementById("root")
);
