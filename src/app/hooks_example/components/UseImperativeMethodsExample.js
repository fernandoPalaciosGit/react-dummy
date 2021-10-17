import {
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useEffect,
} from "react";

//https://stackoverflow.com/a/25677072
const hasCityError = (value) =>
  !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(value);
const hasStateError = (value) => !/^[A-Z]{2}$/.test(value);

//  EXTERNAL LIBRARY
const ControlElement = forwardRef(({ name, hasError }, ref) => {
  const [value, setValue] = useState("");
  const input = useRef(null); // aqui habria que definir el verdadero input d ereferencioa

  //  yo como libreriua tengo que proporcionar una mqanera de extender la funcionalidad cuando se ejecuten acciones por parte dfel lciente
  // useImperativeHandle(ref, () => {
  //   return {
  //     focus() {
  //       alert('on focus from external library');
  //     }
  //   }
  // });

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        style={{
          padding: "5px 15px",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: hasError ? "crimson" : "#999",
          borderRadius: "5px",
          margin: "0 10px",
          textAlign: "center",
          outline: "none",
        }}
        ref={ref}
        placeholder={name}
        onChange={({ target }) => setValue(target.value)}
        id={name}
        type="text"
        value={value}
      />
    </div>
  );
});

const UseImperativeMethodsExample = () => {
  const [error, setError] = useState(null);
  const cityInput = useRef(null);
  const stateInput = useRef(null);
  const validateErrors = () => {
    if (hasCityError(cityInput.current.value)) {
      setError("CITY");
      cityInput.current.focus();
    } else if (hasStateError(stateInput.current.value)) {
      setError("STATE");
      stateInput.current.focus();
    } else {
      setError("VALID");
    }
  };
  useEffect(() => {
    if (error === "VALID") {
      alert("valid User Form");
    }
  }, [error]);

  return (
    <div>
      <ControlElement
        hasError={error === "CITY"}
        name={"city"}
        ref={cityInput}
      />
      <ControlElement
        hasError={error === "STATE"}
        name={"state"}
        ref={stateInput}
      />
      <button onClick={validateErrors}>Validate Inputs</button>
    </div>
  );
};

export default UseImperativeMethodsExample;
