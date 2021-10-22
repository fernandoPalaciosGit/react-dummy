import { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApplicationOnLoadCharacters,
  ApplicationFetchCharacters,
} from "./components/Application";

// render(
//   <Suspense fallback="Loading View">
//     <Router>
//       <ApplicationOnLoadCharacters />
//     </Router>
//   </Suspense>,
//   document.getElementById("root")
// );

render(
  <Suspense fallback="Loading View">
    <Router>
      <ApplicationFetchCharacters />
    </Router>
  </Suspense>,
  document.getElementById("root")
);
