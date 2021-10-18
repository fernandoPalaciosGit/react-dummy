import { hydrate } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PetsApp from "./features/PetsApp";

// script que carga el servidor
// este script es el queva a ejecutarse en node, va a  interpretarlo y servirlo pre-renderizado
// hydrate hace el trabajo de ReactDOM.render()
// al estar en un contexto de NODe, NO podemos utilizar ninguna interfaz de 'react'

// esto evita que cargue el script desde el browser, y solo lo lea como injeccion de <script>
hydrate(
  <Router>
    <PetsApp />
  </Router>,
  document.getElementById("root")
);
