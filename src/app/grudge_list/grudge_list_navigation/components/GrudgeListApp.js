import GrudgeForm from "./GrudgeForm";
import GrudgeList from "./GrudgeList";
import GrudgeTitle from "./GrudgeTitle";
import UndoGrudge from "./UndoGrudge";
import { GrudgeListProvider } from "../hooks/GrudgeListContext";
import Forward from "./ForwardGrudge";

export default function GrudgeListApp() {
  return (
    <div className="Application">
      <GrudgeListProvider>
        <GrudgeTitle />
        <GrudgeForm />
        <div>
          <UndoGrudge />
          <Forward />
        </div>
        <GrudgeList />
      </GrudgeListProvider>
    </div>
  );
}
