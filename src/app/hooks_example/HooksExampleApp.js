import StateComponent from "./components/StateComponent";
import EffectComponent from "./components/EffectComponent";
import ContextComponent from "./components/ContextComponent";
import RefComponent from "./components/RefComponent";
import ReducerComponent from "./components/ReducerComponent";

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
    </div>
  );
};

export default HooksExampleApp;
