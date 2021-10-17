import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import PetsApp from "./features/PetsApp.js";

ReactDOM.render(
  <StrictMode>
    <PetsApp />
  </StrictMode>,
  document.getElementById("root")
);
