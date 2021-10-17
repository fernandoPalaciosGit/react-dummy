import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import HooksExampleApp from "./app/hooks_example/HooksExampleApp.js";

ReactDOM.render(
  <StrictMode>
    <HooksExampleApp />
  </StrictMode>,
  document.getElementById("root")
);
