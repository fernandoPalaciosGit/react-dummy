import { useReducer } from "react";
import {
  rgbActions_B,
  rgbActions_G,
  rgbActions_R,
  rgbReducer,
} from "../reducers/rgb_reducer";

// useReducer: es una capa sencilla para abstraer el patrin redux
// el useReducer se mantiene centralizado la logica fuera del componente y useState esta asociado al componente
// al tener centralizada la logica, se puede testear mejor y enfocar mejor mla implementracoin
// la direfencia con Redux es que el useReducer esta obligado a implementarse dentro del componente y la store del Redux es transversal a la aplicacion

const RgbActionComponent = ({ action, dispatch }) => {
  return (
    <div>
      {Object.entries(action).map(([action, type]) => (
        <div key={action}>
          <button onClick={() => dispatch({ type })}>{action}</button>
        </div>
      ))}
      <br />
    </div>
  );
};

const ReducerComponent = () => {
  // const [selector, dispatch];
  const [rgbState, rgbDispatch] = useReducer(rgbReducer, null);
  const { r, g, b } = rgbState || {};

  return (
    <div>
      <h3 style={{ color: `rgb(${r}, ${g}, ${b})` }}>
        useReducer Example <small>(+ - color)</small>
      </h3>
      {[rgbActions_R, rgbActions_G, rgbActions_B].map((rbgAction, idx) => (
        <RgbActionComponent
          key={idx}
          action={rbgAction}
          dispatch={rgbDispatch}
        />
      ))}
    </div>
  );
};

export default ReducerComponent;
