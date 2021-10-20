import { render } from "react-dom";
import { PrintMockGrudgeList } from "./mocks/initial_grudge_list";
import GrudgeListAppPattern1 from "./pattern_drilling_handlers/components/GrudgeListApp";

render(
  // <PrintMockGrudgeList />
  <GrudgeListAppPattern1 />,
  document.getElementById("root")
);
