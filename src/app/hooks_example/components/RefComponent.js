import { useRef, useState } from "react";

// se utiliza para mantener un fragmento aislado del ciclo de vida del rendering de React
// por ejemplo si queremos reutilizar un mismo fragmento en diferentes Componentes sin reinstanciarlos
const RefComponent = () => {
  const [stateIndex, setStateIndex] = useState(0);
  const refIndex = useRef(0); // use Ref esta aislada del proceso del lifecycle de este componente, por lo que mantendra siempre el estado

  function incrementIndexes() {
    setStateIndex(stateIndex + 1);
    refIndex.current++;

    // aqui veremos que el unico que mantiene el valor de incremento de snobjecto es refIndex, porque staeIndex hace referencia al valor que se renderiza e el render, que no serqa el mismo
    // (en este caso se imprimira en el alert el valor anterior) ya que se salta un proceso en la ejecucion del callstack de engine de JS

    // stateIndex -> alert del valor anterior del render
    // refIndex -> alert del valor de referencia, independientemente del tick de ejecucion
    setTimeout(
      () =>
        alert(
          `CAMBIO DE VALOR EN LAS REFERENCIAS\nfrom useState: ${stateIndex}, from useRef: ${refIndex.current}`
        ),
      1
    );
  }

  return (
    <div>
      <h3>Ref Example</h3>
      <ul>
        <small>
          <strong>CAMBIO DE VALOR EN EL RENDER</strong>
        </small>
        <li>from useState: {stateIndex}</li>
        <li>from useRef: {refIndex.current}</li>
      </ul>
      <button onClick={incrementIndexes}>Increment index</button>
    </div>
  );
};

export default RefComponent;
