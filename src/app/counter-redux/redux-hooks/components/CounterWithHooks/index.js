import useCounterReducer from "../../hooks/useCounterReduecr";
import Counter from "../../../shared/components/Counter";

export default function CounterWithHooks() {
  const counterReducer = useCounterReducer();
  return <Counter {...counterReducer} />;
}
