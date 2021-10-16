import { useRef, useState, useEffect, useLayoutEffect } from "react";

// useLayoutEffect al igual que useEffect, permite programar el lifecycle del rendering del componente
// useLayoutEffect y useEffect se ejecutaran despues de renderizar el componente, en este orden
//  useLayoutEffect se utiliza principalmete para calcular propiedades de medida dom que se acaba de renderizar  inmediatamente
// es muy util para animaciones o calculod de posicionamiento de elementos en el viewport
const UseLayoutEffectComponentExample = () => {
  const textareaRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(textareaRef.current.clientWidth);
    setHeight(textareaRef.current.clientHeight);
  }, [width, height]);

  return (
    <div>
      <div>Width: {width}</div>
      <div>Height: {height}</div>
      <textarea onClick={() => setWidth(0)} ref={textareaRef} />
    </div>
  );
};

export default UseLayoutEffectComponentExample;
