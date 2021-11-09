import Counter from "../../../shared/components/Counter";
import useCounterStorage from "../../hooks/useCounterStorage";

export default function CounterWithStorage() {
  const { counter, increase, decrease } = useCounterStorage();

  return <Counter type="CounterWithStorage" />;
}
