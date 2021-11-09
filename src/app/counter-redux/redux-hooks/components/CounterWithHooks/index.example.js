import useCounterReducer from "../../hooks/useCounterReducer.example";
import Counter from "../../../shared/components/Counter";

export default function CounterWithHooks() {
  const counterReducer = useCounterReducer();
  return <Counter {...counterReducer} type="CounterWithHooks" />;
}
