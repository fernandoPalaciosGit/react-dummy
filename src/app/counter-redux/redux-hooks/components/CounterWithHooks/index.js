import Counter from "../../../shared/components/Counter";
import useCounterReducer from "../../hooks/useCounterReducer";

export default function CounterWithHooks() {
  const { counter, increase, decrease } = useCounterReducer();

  return <Counter type="CounterWithHooks" />;
}
