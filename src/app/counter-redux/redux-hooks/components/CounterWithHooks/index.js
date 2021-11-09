import useCounterReducer from "../../hooks/useCounterReducer";
import Counter from "../../../shared/components/Counter";

export default function CounterWithHooks() {
  const counterReducer = useCounterReducer();
  return <Counter {...counterReducer} />;
}
