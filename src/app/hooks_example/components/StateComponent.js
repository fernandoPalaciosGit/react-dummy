import { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(false);
  const getColor = () => (isGreen ? "green" : "orange");

  return (
    <div onClick={() => setIsGreen(!isGreen)} style={{ color: getColor() }}>
      <h3>useState Example</h3>
      <div>click to toggle green color</div>
    </div>
  );
};

export default StateComponent;
