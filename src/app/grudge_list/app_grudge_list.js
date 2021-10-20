import { render } from "react-dom";
import {PrintMockGrudgeList} from "./mocks/initial_grudge_list";

render(
  <PrintMockGrudgeList />
  // <GrudgeListAppPattern1 />
  , document.getElementById("root")
);
