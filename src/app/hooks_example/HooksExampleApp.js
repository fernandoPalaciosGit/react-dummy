import StateComponent from "./components/StateComponent";
import EffectComponent from "./components/EffectComponent";
import ContextComponent from "./components/ContextComponent";
import RefComponent from "./components/RefComponent";

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
    </div>
  );
};

export default HooksExampleApp;
