import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import PetsApp from "./app/pets/PetsApp.js";
import HooksExampleApp from "./app/hooks_example/HooksExampleApp.js";

ReactDOM.render(
  <StrictMode>
    <HooksExampleApp />
    <PetsApp />
  </StrictMode>,
  document.getElementById("root")
);
