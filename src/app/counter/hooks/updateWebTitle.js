import { useEffect } from "react";

const setWebTitle = (counter) => (document.title = `Counter: ${counter}`);

export default function updateWebTitle(counterState) {
  // listener onChange {counter} state
  useEffect(() => setWebTitle(counterState), [counterState]);
}
