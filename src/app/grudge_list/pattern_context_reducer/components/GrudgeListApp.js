import GrudgeForm from "./GrudgeForm";
import GrudgeList from "./GrudgeList";
import GrudgeTitle from "./GrudgeTitle";
import { GrudgeListProvider } from "../hooks/GrudgeListContext";

export default function GrudgeListApp() {
  return (
    <div className="Application">
      <GrudgeListProvider>
        <GrudgeTitle />
        <GrudgeForm />
        <GrudgeList />
      </GrudgeListProvider>
    </div>
  );
}
