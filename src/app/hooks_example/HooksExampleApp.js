import StateComponent from "./components/StateComponent";
import EffectComponent from "./components/EffectComponent";
import ContextComponent from "./components/ContextComponent";
import RefComponent from "./components/RefComponent";
import ReducerComponent from "./components/ReducerComponent";
import MemoizeComponent from "./components/MemoizeComponent";

const HooksExampleApp = () => {
  return (
    <div>
      <StateComponent />
      <hr />
      <EffectComponent />
      <hr />
      <ContextComponent />
      <hr />
      <RefComponent />
      <hr />
      <ReducerComponent />
      <hr />
      <MemoizeComponent />
    </div>
  );
};

export default HooksExampleApp;
