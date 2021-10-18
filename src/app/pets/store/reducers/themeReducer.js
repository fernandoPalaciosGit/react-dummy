import { READ_MODE } from "../../providers/ReaderMode";

const initTheme = READ_MODE.DARK;

export default function theme(state = initTheme, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}
