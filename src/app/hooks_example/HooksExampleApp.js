import CallbackComponent from "./components/CallbackComponent";
import StateComponent from "./components/StateComponent";
import EffectComponent from "./components/EffectComponent";
import ContextComponent from "./components/ContextComponent";
import RefComponent from "./components/RefComponent";
import ReducerComponent from "./components/ReducerComponent";
import MemoizeComponent from "./components/MemoizeComponent";
import CallbackComponent2 from "./components/CallbackComponent2";

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
      <hr />
      <CallbackComponent />
      <hr />
      <CallbackComponent2 />
    </div>
  );
};

export default HooksExampleApp;
