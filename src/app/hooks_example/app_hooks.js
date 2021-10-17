import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import HooksExampleApp from "./features/HooksExampleApp.js";

ReactDOM.render(
  <StrictMode>
    <HooksExampleApp />
  </StrictMode>,
  document.getElementById("root")
);
