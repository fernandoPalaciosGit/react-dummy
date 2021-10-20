import { useRef } from "react";

const templates = {
  RESET: <span></span>,
  INCREMENT: <div>+++ HIGHER +++</div>,
  DECREMENT: <div>--- LOWER ---</div>,
};

export default function ControlPosition({ counter }) {
  const counterRef = useRef(counter);
  const positionRef =
    counter > counterRef.current ? templates.INCREMENT : templates.DECREMENT;
  const position =
    counter === 0 || counter === counterRef.current
      ? templates.RESET
      : positionRef;

  counterRef.current = counter;
  return position;
}
