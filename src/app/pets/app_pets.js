// script estatico deasde el browser, se reemplazara por client.js (preload desde el server)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import PetsApp from "./features/PetsApp.js";

ReactDOM.render(
  <Router>
    <PetsApp />
  </Router>,
  document.getElementById("root")
);
