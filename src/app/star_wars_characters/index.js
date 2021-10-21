import { render } from "react-dom";
import {
  ApplicationOnLoadCharacters,
  ApplicationFetchCharacters,
} from "./components/Application";

// render(<ApplicationOnLoadCharacters />, document.getElementById("root"));
render(<ApplicationFetchCharacters />, document.getElementById("root"));
