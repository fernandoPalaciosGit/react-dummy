import { useEffect, useState } from "react";

const secondsApplied = 5;
const updateTime = (time) => {
  time.setSeconds(time.getSeconds() + secondsApplied);
  return new Date(time);
};

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  // schedule on lifecycle render
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(updateTime(time));
    }, 1000); // callback execution
    return () => clearTimeout(timer); // on destroy component (componentDidUnmount() for Component classes)
  }, []); // [] : means run callback once at the first rendering (componentDidMount() for Component classes)

  return (
    <div>
      <h3>useEffect Example</h3>
      <div>
        Timer updated {secondsApplied} seconds each second:{" "}
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default EffectComponent;
