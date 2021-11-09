import { Provider as ReduxProvider } from "react-redux";
import Counter from "../../../shared/components/Counter";
import { counterStorage } from "../../store";
import useCounterStorage from "../../hooks/useCounterStorage";

const CounterActions = () => {
  const counterStorage = useCounterStorage();
  return <Counter {...counterStorage} />;
};

export default function CounterWithStorage() {
  return (
    <ReduxProvider store={counterStorage}>
      <CounterActions />
    </ReduxProvider>
  );
}
