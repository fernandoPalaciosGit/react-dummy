import UseStateComponentExample from "./components/UseCallbackComponentExample";
import UseEffectComponentExample from "./components/UseEffectComponentExample";
import UseContextComponentExample from "./components/UseContextComponentExample";
import UseRefComponentExample from "./components/UseRefComponentExample";
import UseReducerComponentExample from "./components/UseReducerComponentExample";
import UseMemoComponentExample from "./components/UseMemoComponentExample";
import UseCallbackComponentExample from "./components/UseCallbackComponentExample";
import UseCallbackComponent2Example from "./components/UseCallbackComponent2Example";
import UseLayoutEffectComponentExample from "./components/UseLayoutEffectComponentExample";
import UseImperativeMethodsExample from "./components/UseImperativeMethodsExample";

const HooksExampleApp = () => {
  return (
    <div>
      <UseStateComponentExample />
      <hr />
      <UseEffectComponentExample />
      <hr />
      <UseContextComponentExample />
      <hr />
      <UseRefComponentExample />
      <hr />
      <UseReducerComponentExample />
      <hr />
      <UseMemoComponentExample />
      <hr />
      <UseCallbackComponentExample />
      <hr />
      <UseCallbackComponent2Example />
      <hr />
      <UseLayoutEffectComponentExample />
      <hr />
      <UseImperativeMethodsExample />
    </div>
  );
};

export default HooksExampleApp;
