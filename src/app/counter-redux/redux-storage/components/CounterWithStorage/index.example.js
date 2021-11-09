import { Provider as ReduxProvider } from "react-redux";
import Counter from "../../../shared/components/Counter";
import { counterStorage } from "../../store";
import useCounterStorage from "../../hooks/useCounterStorage.example";

const CounterStorageProvider = () => {
  const counterStorage = useCounterStorage();
  return <Counter {...counterStorage} />;
};

export default function CounterWithStorage() {
  return (
    <ReduxProvider store={counterStorage}>
      <CounterStorageProvider />
    </ReduxProvider>
  );
}
